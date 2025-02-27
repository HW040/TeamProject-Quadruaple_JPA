package com.green.project_quadruaple.notice;

import com.green.project_quadruaple.entity.model.NoticeReceive;
import com.green.project_quadruaple.entity.model.NoticeReceiveId;
import org.apache.ibatis.annotations.Param;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

public interface NoticeReceiveRepository extends JpaRepository<NoticeReceive, NoticeReceiveId> {
    @Query("SELECT COUNT(nr) FROM NoticeReceive nr WHERE nr.opened = false AND nr.id.userId = :userId")
    long countUnreadNoticesByUserId(@Param("userId") Long userId);

    @Query("SELECT CASE WHEN EXISTS (SELECT 1 FROM NoticeReceive nr WHERE nr.opened = false AND nr.id.userId = :userId) THEN true ELSE false END")
    boolean existsUnreadNoticesByUserId(@Param("userId") Long userId);

    @Modifying
    @Query("UPDATE NoticeReceive nr SET nr.opened = true WHERE nr.id.userId = :userId")
    int markNoticeAsRead(@Param("userId") Long userId);
}
