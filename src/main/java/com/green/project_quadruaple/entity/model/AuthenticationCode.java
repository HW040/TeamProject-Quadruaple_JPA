package com.green.project_quadruaple.entity.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "authentication_code")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AuthenticationCode {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long authenticatedId;

    @Column(name = "code_num", length = 10, nullable = false)
    private String codeNum;

    @Column(length = 50, nullable = false)
    private String email;

    @Column(name = "granted_at", nullable = false)
    private LocalDateTime grantedAt;

    @PrePersist
    protected void onCreate() {
        this.grantedAt = LocalDateTime.now();
    }
}
