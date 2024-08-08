package com.cifer.app.backend.controller;

import com.cifer.app.backend.model.Log;
import com.cifer.app.backend.model.User;
import com.cifer.app.backend.service.LogService;
import com.cifer.app.backend.service.ProductService;
import com.cifer.app.backend.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/log")
@RequiredArgsConstructor
@CrossOrigin("*")
public class LogController {
    private final LogService logService;
    private final UserService userService;

    @PostMapping("/create-log")
    public ResponseEntity<String> createNewLog(@RequestParam("deliveredQuantity") int deliveredQuantity,
                                               @RequestParam("customerEmail") String customerEmail,
                                               @RequestParam("driverEmail") String driverEmail,
                                               @RequestParam("productName") String productName) {
        User customer = userService.getUserByEmail(customerEmail);
        User driver = userService.getUserByEmail(driverEmail);

        Log newLog = new Log(deliveredQuantity, customer, driver);
        String successNewLogCreating = logService.createLog(newLog, productName);
        return ResponseEntity.ok(successNewLogCreating);
    }

    @GetMapping("/all-logs")
    public ResponseEntity<List<Log>> getAllLogs() {
        List<Log> logList = logService.getAllLogs();
        return ResponseEntity.ok(logList);
    }

    @GetMapping("/logs/{email}")
    public ResponseEntity<List<Log>> getLogsBasedOnDriverEmail(@PathVariable("email") String driverEmail) {
        List<Log> driverLogList = logService.getAllLogsBasedOnUserDriver(driverEmail);
        return ResponseEntity.ok(driverLogList);
    }
}
