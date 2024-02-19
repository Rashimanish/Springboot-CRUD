package com.example.studentdemo.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.studentdemo.demo.Entity.Student;
import com.example.studentdemo.demo.Service.StudentService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("api/v1/student")
public class StudentController {
    @Autowired
    private StudentService studentService;

    @PostMapping(value="/save")
    private String saveStudent(@RequestBody Student student){

        studentService.saveOrUpdate(student);
        return student.getId();
    }

    @GetMapping(value="/getAll")
    private Iterable<Student>getStudents(){

        
        return studentService.listAll();
    }

    @PutMapping(value="/edit/{id}")
    private Student update(@RequestBody Student student,@PathVariable(name="id")String id){

        student.setId(id);
        studentService.saveOrUpdate(student);
        return student;
    
    }
    @DeleteMapping(value="/delete/{id}")
    private void deleteStudent(@PathVariable("id")String id){

       studentService.deleteStudent(id);
    
    }

    @RequestMapping(value="/student/{id}")
    private Student getStudent(@PathVariable(name="id")String studentid){

      return studentService.getStudentById(studentid);
    
    }
}
