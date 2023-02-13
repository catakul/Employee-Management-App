package de.neuefische.backend.service;

import de.neuefische.backend.model.Employee;
import de.neuefische.backend.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService {

    private final EmployeeRepository employeeRepository;
    private final IdService idService;

    @Autowired
    public EmployeeService(EmployeeRepository employeeRepository, IdService idService) {
        this.employeeRepository = employeeRepository;
        this.idService = idService;
    }

    public List<Employee> list() {
        return employeeRepository.getEmployees();
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
        return employeeRepository.add(employee);
    }

    public List<Employee> search(String s) {
        List<Employee> searchResultList = new ArrayList<>();
        for (Employee employee: list()) {
            if (employee.getName().contains(s)){
                searchResultList.add(employee);
            }
        }

        return searchResultList;
    }

    public void delete(String id) {
        Employee employee = findById(id);
        employeeRepository.delete(employee);
    }

}
