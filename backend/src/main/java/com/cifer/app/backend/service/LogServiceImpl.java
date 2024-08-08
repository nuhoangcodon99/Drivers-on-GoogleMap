package com.cifer.app.backend.service;

import com.cifer.app.backend.exception.DriverDoNotWorkException;
import com.cifer.app.backend.exception.IllegalProductOrderException;
import com.cifer.app.backend.exception.LogDoNotExistException;
import com.cifer.app.backend.exception.ProductDoNotExistException;
import com.cifer.app.backend.model.Log;
import com.cifer.app.backend.model.Product;
import com.cifer.app.backend.model.Role;
import com.cifer.app.backend.model.User;
import com.cifer.app.backend.repository.LogRepository;
import com.cifer.app.backend.repository.ProductRepository;
import com.cifer.app.backend.repository.RoleRepository;
import com.cifer.app.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class LogServiceImpl implements LogService {
    private final LogRepository logRepository;
    private final ProductService productService;
    private final ProductRepository productRepository;
    private final UserRepository userRepository;

    @Override
    public String createLog(Log log, String productName) {
        User order = log.getOrder();
        User driver = log.getDriver();
        LocalDate orderDate = LocalDate.now();

        if (Objects.equals(order.getRole().getName(), "ROLE_CUSTOMER")
                || Objects.equals(driver.getRole().getName(), "ROLE_DRIVER")) {
            log.setStatus("pending"); //start a new request from customer, waiting for delivery

            Product selectedProduct = productService.getProductByName(productName);
            int selectedProductQuantity = selectedProduct.getQuantity();
            int orderQuantity = log.getDeliveredQuantity();

            if (orderQuantity > selectedProductQuantity) {
                throw new IllegalProductOrderException("We do not have enough !!");
            }

            log.setOrderDate(orderDate);
            log.setProduct(selectedProduct);
            selectedProduct.setQuantity(selectedProductQuantity - orderQuantity);

            productRepository.save(selectedProduct);
        }

        logRepository.save(log);
        return "Log create successfully";
    }

    @Override
    public String updateLog(Long id, String status, boolean isFailed) {
        Log log = logRepository.findById(id).get();
        log.setStatus(status);
        log.setFailed(isFailed);
        logRepository.save(log);
        return "Log update successfully";
    }

    @Override
    public String deleteLog(Long logId) {
        if (!logRepository.existsById(logId)) {
            throw new LogDoNotExistException("Log do not exist");
        }
        logRepository.deleteById(logId);
        return "Delete successfully";
    }

    @Override
    public List<Log> getAllLogsBasedOnUserDriver(String userEmail) {
        if (userRepository.findAllByRole("ROLE_DRIVER").isEmpty()) {
            throw new DriverDoNotWorkException("This is not a driver");
        }
        Optional<List<Log>> logs = Optional.ofNullable(logRepository.findAllByDriverEmail(userEmail)
                .orElseThrow(() -> new DriverDoNotWorkException("Driver with email " + userEmail + " does not receive any product")));
        return logs.get();
    }

    @Override
    public List<Log> getAllLogs() {
        return logRepository.findAll();
    }
}
