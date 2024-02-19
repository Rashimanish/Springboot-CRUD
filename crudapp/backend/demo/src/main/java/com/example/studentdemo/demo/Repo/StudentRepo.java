package com.example.studentdemo.demo.Repo;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.example.studentdemo.demo.Entity.Student;

public interface StudentRepo extends MongoRepository<Student, String> {

    
} 