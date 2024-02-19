package com.example.studentdemo.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.studentdemo.demo.Entity.Student;
import com.example.studentdemo.demo.Repo.StudentRepo;

@Service
public class StudentService {
    @Autowired
    private StudentRepo repo;

    public void saveOrUpdate(Student student) {
        repo.save(student);
    }

    public Iterable<Student> listAll() {
        return this.repo.findAll();
    }

    public void deleteStudent(String id) {
        repo.deleteById(id);
    }

    public Student getStudentById(String studentid) {
        return repo.findById(studentid).get();
    }

    
}
