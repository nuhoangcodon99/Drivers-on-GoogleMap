package com.cifer.app.backend.service;

import com.cifer.app.backend.model.Log;

import java.util.List;

public interface LogService {
    String createLog(Log log, String productName); //create the log when customer order pharmacy

    String updateLog(Long id, String status, boolean isFailed); //update the log when there's some event

    String deleteLog(Long logId); //delete the log

    List<Log> getAllLogsBasedOnUserDriver(String userEmail); //get logs based on user, user can be driver or customer

    List<Log> getAllLogs(); //administrator's command
}
