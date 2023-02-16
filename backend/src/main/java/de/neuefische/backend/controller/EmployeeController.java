package de.neuefische.backend.controller;

import de.neuefische.backend.model.Employee;
import de.neuefische.backend.service.EmployeeService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@RestController
@RequestMapping("employees")
public class EmployeeController {

    private final EmployeeService employeeService;

    @GetMapping
    public List<Employee> listEmployees(@RequestParam Optional<String> search) {
        if (search.isPresent()) {
            return employeeService.searchEmployee(search.get());
        }
        return employeeService.list();
    }

    @GetMapping("{id}")
    public Employee getEmployee(@PathVariable String id) {
        return employeeService.findById(id);
    }
    @PutMapping
    public Employee updateEmployee(@RequestBody Employee employeeUpdate){
        return employeeService.saveEmployee(employeeUpdate);
    }

    @PostMapping()
    public Employee addEmployee(@RequestBody Employee employee) {
        return employeeService.addEmployee(employee);
    }

    @DeleteMapping("{id}")
    public void deleteEmployee(@PathVariable String id) {
        employeeService.deleteEmployee(id);
    }
}
