package com.green.project_quadruaple.review;

import com.green.project_quadruaple.common.MyFileUtils;
import com.green.project_quadruaple.common.config.enumdata.ResponseCode;
import com.green.project_quadruaple.common.config.security.AuthenticationFacade;
import com.green.project_quadruaple.common.model.ResponseWrapper;
import com.green.project_quadruaple.common.model.SizeConstants;
import com.green.project_quadruaple.entity.model.*;
import com.green.project_quadruaple.review.model.*;
import com.green.project_quadruaple.strf.StrfRepository;
import com.green.project_quadruaple.user.Repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.*;
import java.util.stream.Collectors;


@Slf4j
@Service
@RequiredArgsConstructor
public class ReviewService {
    private final ReviewMapper reviewMapper;
    private final MyFileUtils myFileUtils;
    private final AuthenticationFacade authenticationFacade;
    private final ReviewRepository reviewRepository;
    private final UserRepository userRepository;
    private final StrfRepository strfRepository;
    private final ReviewPicRepository reviewPicRepository;

    @Value("${const.default-review-size}")
    private int size;

    public List<ReviewSelRes> getReviewWithPics(Long strfId, int startIdx) {
        List<ReviewSelRes> dtoList = reviewMapper.getReviewWithPics(strfId, startIdx, SizeConstants.getDefault_page_size());
        if (dtoList == null || dtoList.isEmpty()) {
            return null;
        }

        Map<Long, ReviewSelRes> reviewMap = new LinkedHashMap<>();

        for (ReviewSelRes item : dtoList) {
            ReviewSelRes review = reviewMap.get(item.getReviewId());
        }
        return dtoList;
    }

    public List<MyReviewSelRes> getMyReviews(int startIdx) {
        Long userId = authenticationFacade.getSignedUserId();
        long startTime = System.currentTimeMillis(); // 요청 시작
        List<MyReviewSelRes> dtoList = reviewMapper.getMyReviews(userId, startIdx, SizeConstants.getDefault_page_size());
        if (dtoList == null || dtoList.isEmpty()) {
            return null;
        }
        Map<Long, MyReviewSelRes> reviewMap = new LinkedHashMap<>();
        for (MyReviewSelRes item : dtoList) {
            MyReviewSelRes review = reviewMap.get(item.getReviewId());
        }
        long endTime = System.currentTimeMillis(); // 요청값 전달 종료 시간
        long executionTime = endTime - startTime; // 종료시간 - 시작 시간 = 최종 시간

        System.out.println("쿼리 실행 시간: " + executionTime + "ms");
        return dtoList;

    }
    public int myReviewCount (){
        long userId = authenticationFacade.getSignedUserId();
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("user id not found"));

        return reviewMapper.myReviewCount(userId);
    }


//    @Transactional
//    public int postRating(List<MultipartFile> pics, ReviewPostReq p) {
//        Long userId = authenticationFacade.getSignedUserId();
//
//        int result = reviewMapper.postRating(p,userId);
//        if (result == 0) {
//            return 0;
//        }
//
//        long reviewId = p.getReviewId();
//        String middlePath = String.format("reviewId/%d", reviewId);
//        myFileUtils.makeFolders(middlePath);
//
//        List<String> picNameList = new ArrayList<>(pics.size());
//        for (MultipartFile pic : pics) {
//            String savedPicName = myFileUtils.makeRandomFileName(pic);
//            picNameList.add(savedPicName);
//            String filePath = String.format("%s/%s", middlePath, savedPicName);
//            try {
//                myFileUtils.transferTo(pic, filePath);
//            } catch (IOException e) {
//                // 폴더 삭제 처리
//                String delFolderPath = String.format("%s/%s", myFileUtils.getUploadPath(), middlePath);
//                myFileUtils.deleteFolder(delFolderPath, true);
//                return 0;
//            }
//        }
//        ReviewPicDto reviewPicDto = new ReviewPicDto();
//        reviewPicDto.setReviewId(reviewId);
//        reviewPicDto.setPics(picNameList);
//
//        // DB에 사진 저장
//        int resultPics = reviewMapper.postReviewPic(reviewPicDto);
//        if (resultPics == 0) {
//            throw new RuntimeException("리뷰 사진 저장 실패");
//        }
//
//        return 1;
//    }
    @Transactional
    public ReviewPostRes postRating(List<MultipartFile> pics, ReviewPostJpaReq p) {
        Long userId = authenticationFacade.getSignedUserId();

        User user = userRepository.findById(userId).orElseThrow( () -> new RuntimeException("user id not found"));

        StayTourRestaurFest strf = strfRepository.findById(p.getStrfId()).orElseThrow( () -> new RuntimeException("strf id not found"));

        Review review = new Review();
        review.setRating(p.getRating());
        review.setContent(p.getContent());
        review.setStayTourRestaurFest(strf);
        review.setUser(user);
        review.setReviewId(p.getReviewId());
        reviewRepository.save(review);

        long reviewId = review.getReviewId();
        String middlePath = String.format("reviewId/%d", reviewId);
        myFileUtils.makeFolders(middlePath);

        List<String> picNameList = new ArrayList<>(pics.size());
        for (MultipartFile pic : pics) {
            String savedPicName = myFileUtils.makeRandomFileName(pic);
            picNameList.add(savedPicName);
            String filePath = String.format("%s/%s", middlePath, savedPicName);
            try {
                ReviewPicId id = new ReviewPicId();
                id.setReviewId(reviewId);
                id.setTitle(savedPicName);

                ReviewPic reviewPic = new ReviewPic();
                reviewPic.setId(id);
                reviewPic.setReview(review);

                reviewPicRepository.save(reviewPic);

                myFileUtils.transferTo(pic, filePath);
            } catch (IOException e) {
                e.printStackTrace();
                String delFolderPath = String.format("%s/%s", myFileUtils.getUploadPath(), middlePath);
                myFileUtils.deleteFolder(delFolderPath, true);
                throw new RuntimeException(e);
            }
        }
        return ReviewPostRes.builder()
                .reviewId(reviewId)
                .pics(picNameList)
                .build();

    }

//    @Transactional
//    public ResponseEntity<ResponseWrapper<Integer>> updateReview(List<MultipartFile> pics, ReviewUpdReq p) {
//        int updatedRows = reviewMapper.patchReview(p);
//        if (updatedRows == 0) {
//            return ResponseEntity.status(HttpStatus.NOT_FOUND)
//                    .body(new ResponseWrapper<>(ResponseCode.NOT_FOUND.getCode(), null));
//        }
//
//        long reviewId = p.getReviewId();
//        String middlePath = String.format("reviewId/%d", reviewId);
//
//        // 기존 사진 가져오기
//        List<ReviewPicSel> existingPics = reviewMapper.getReviewPics(Collections.singletonList(reviewId));
//
//        for (ReviewPicSel pic : existingPics) {
//            myFileUtils.deleteFolder(String.format("%s/%s", myFileUtils.getUploadPath(), middlePath, pic.getPic()), true);
//        }
//
//        List<ReviewPicDto> picNameList = new ArrayList<>();
//        myFileUtils.makeFolders(middlePath);
//        for (MultipartFile pic : pics) {
//            String savedPicName = myFileUtils.makeRandomFileName(pic);
//            String filePath = String.format("%s/%s", middlePath, savedPicName);
//            try {
//                myFileUtils.transferTo(pic, filePath);
//            } catch (IOException e) {
//                myFileUtils.deleteFolder(String.format("%s/%s", myFileUtils.getUploadPath(), middlePath), true);
//                return ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE)
//                        .body(new ResponseWrapper<>(ResponseCode.SERVER_ERROR.getCode(), null));
//            }
//            ReviewPicDto reviewPicDto = new ReviewPicDto();
//            reviewPicDto.setReviewId(reviewId);
//            reviewPicDto.setPic(savedPicName);
//            picNameList.add(reviewPicDto);
//        }
//        int resultPics = reviewMapper.patchReviewPic(picNameList);
//        return ResponseEntity.ok(new ResponseWrapper<>(ResponseCode.OK.getCode(), resultPics));
//    }

    public ResponseEntity<ResponseWrapper<Integer>> deleteReview(Long reviewId) {
        Long userId = authenticationFacade.getSignedUserId();

        User user = userRepository.findById(userId).orElseThrow( () -> new RuntimeException("user id not found"));

        Review review = reviewRepository.findById(reviewId).orElseThrow( () -> new NoSuchElementException("review id not found"));

//        ReviewDelPicReq picReq = new ReviewDelPicReq();
//        picReq.setReviewId(reviewId);

        int affectedRowsPic = reviewMapper.deleteReviewPic(review.getReviewId());
//        int affectedRowsReview = reviewMapper.deleteReview(review.getReviewId(),user.getUserId());

//        reviewRepository.deleteReviewBy(reviewId);

        String deletePath = String.format("%s/feed/%d", myFileUtils.getUploadPath(), review.getReviewId());

        myFileUtils.deleteFolder(deletePath, true);

        int affectedRowsReview = reviewMapper.deleteReview(reviewId,userId);

        return ResponseEntity.ok(new ResponseWrapper<>(ResponseCode.OK.getCode(), 1));
    }
}
