package com.example.StudentManagementSystem.service;

import com.example.StudentManagementSystem.model.Student;

import java.util.List;

public interface StudentService {
    public Student saveStudent(Student student);
    public List<Student> getAllStudent();
}
