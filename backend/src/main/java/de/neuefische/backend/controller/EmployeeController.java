package de.neuefische.backend.controller;

import de.neuefische.backend.model.Employee;
import de.neuefische.backend.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.List;


@RestController
@RequestMapping("/api/v1/employees")
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepository;

    @PostMapping("/create")
    public void createEmployee(@RequestBody Employee employee) {
        employeeRepository.insert(employee);

    }

    @PostMapping("/delete/{id}")
    public void deleteEmployee(@PathVariable String id) {
        employeeRepository.deleteById(id);
    }

    @GetMapping("/list")
    public List<Employee> listEmployees() {
        return employeeRepository.findAll();

    }

}
