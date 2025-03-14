package com.green.project_quadruaple.point;

import com.green.project_quadruaple.entity.model.PointCard;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PointCardRepository extends JpaRepository<PointCard, Long> {
    PointCard findByAvailable(int available);
}
