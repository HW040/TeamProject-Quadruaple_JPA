package com.green.project_quadruaple.point;

import com.green.project_quadruaple.entity.model.PointHistory;
import com.green.project_quadruaple.entity.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface PointHistoryRepository extends JpaRepository<PointHistory, Long> {
    @Query("""
        select p from PointHistory p
        where p.user.userId = :signedUserId
        order by p.pointHistoryId desc
        """)
    List<PointHistory> findPointHistoriesByUserId(Long signedUserId, Pageable pageable);
}
