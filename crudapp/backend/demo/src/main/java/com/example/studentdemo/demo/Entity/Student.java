package com.example.studentdemo.demo.Entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "students")
@Data
@NoArgsConstructor
public class Student {

    @Id
    private String id;
    private String studentname;
    private String studentaddress;
    private String mobile;


    
}
