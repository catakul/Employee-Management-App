package de.neuefische.backend.service;

import de.neuefische.backend.model.Employee;
import de.neuefische.backend.repository.EmployeeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class EmployeeService {

    private final EmployeeRepository employeeRepository;
    private final IdService idService;


    public List<Employee> list() {
        return employeeRepository.findAll();
    }

    public Employee findById(String id) {
        Optional<Employee> optionalEmployee = employeeRepository.findById(id);
        if (optionalEmployee.isPresent()) {
            return optionalEmployee.get();
        }
        throw new IllegalArgumentException("Id not found!");
    }

    public Employee addEmployee(Employee employee) {
        employee.setId(idService.generateId());
        return employeeRepository.save(employee);
    }

    public List<Employee> searchEmployee(String s) {
        List<Employee> searchResultList = new ArrayList<>();
        for (Employee employee : list()) {
            if (employee.getName().contains(s)) {
                searchResultList.add(employee);
            }
        }

        return searchResultList;
    }

    public void deleteEmployee(String id) {
        Employee employee = findById(id);
        employeeRepository.delete(employee);
    }

    public Employee saveEmployee(Employee employeeUpdate) {
        return
                employeeRepository.save(employeeUpdate);
    }

}
