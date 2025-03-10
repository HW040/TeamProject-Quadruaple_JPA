package com.green.project_quadruaple.point.model;

import lombok.*;

@ToString
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
public class PointCardNonMemberGetDto {
    private Long pointCardId;
    private int available;
    private int finalPayment;
}
