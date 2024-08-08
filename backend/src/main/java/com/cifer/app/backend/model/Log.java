package com.cifer.app.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Entity
@Table(name = "Logs")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Log {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "log_id")
    private Long id;
    private LocalDate orderDate;
    private LocalDate receiveDate = null;
    private String status;
    private Integer deliveredQuantity;
    private Integer succeededDeliveredQuantity = deliveredQuantity;
    private boolean isFailed = false;

    public Log(Integer deliveredQuantity, User order, User driver) {
        this.deliveredQuantity = deliveredQuantity;
        this.order = order;
        this.driver = driver;
    }

    @ManyToOne
    @JoinColumn(name = "order_id")
    private User order;

    @ManyToOne
    @JoinColumn(name = "shipper_id")
    private User driver;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;
}
