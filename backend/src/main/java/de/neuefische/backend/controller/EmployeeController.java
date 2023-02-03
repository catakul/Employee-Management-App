package de.neuefische.backend.controller;

import de.neuefische.backend.model.Employee;
import de.neuefische.backend.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = {""})
@RestController
@RequestMapping("employees")
public class EmployeeController {

    private final EmployeeService employeeService;

    @Autowired
    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
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

    @PostMapping()
    public Employee addEmployee(@RequestBody Employee employee) {
        return employeeService.addEmployee(employee);
    }

    @DeleteMapping("{id}")
    public void deleteEmployee(@PathVariable String id) {
        employeeService.delete(id);
    }
}
