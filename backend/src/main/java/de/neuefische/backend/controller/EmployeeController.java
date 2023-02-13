package de.neuefische.backend.controller;

import de.neuefische.backend.exception.ResourceNotFound;
import de.neuefische.backend.model.Employee;
import de.neuefische.backend.repository.EmployeeRepository;
import de.neuefische.backend.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = {""})
@RestController
@RequestMapping("employees")
public class EmployeeController {

    private final EmployeeService employeeService;
    private final EmployeeRepository employeeRepository;

    @Autowired
    public EmployeeController(EmployeeService employeeService, EmployeeRepository employeeRepository) {
        this.employeeService = employeeService;
        this.employeeRepository = employeeRepository;
    }

    @GetMapping
    public List<Employee> listEmployees(@RequestParam Optional<String> search) {
        if (search.isPresent()) {
            return employeeService.search(search.get());
        }
        return employeeService.list();
    }

    @GetMapping("{id}")
    public Employee getEmployee(@PathVariable String id) {
        return employeeService.findById(id);
    }
    @PutMapping
    public Employee updateEmployee(@RequestBody Employee employeeUpdate){
        return employeeService.save(employeeUpdate);
    }

    @PostMapping()
    public Employee addEmployee(@RequestBody Employee employee) {
        return employeeService.addEmployee(employee);
    }

    @DeleteMapping("{id}")
    public void deleteEmployee(@PathVariable String id) {
        employeeService.delete(id);
    }
}
