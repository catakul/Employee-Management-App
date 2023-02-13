package de.neuefische.backend.repository;

import de.neuefische.backend.model.Employee;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Repository
public class EmployeeRepository {
    private static List<Employee> employees = new ArrayList<>();

    public List<Employee> getEmployees() {
        return employees;
    }

    public void setEmployees(List<Employee> employees) {
        this.employees = employees;
    }

    public Employee add(Employee employee) {
        employees.add(employee);
        return employee;
    }


    public static Optional<Employee> findById(String id) {
        for (Employee employee: employees) {
            if (employee.getId().equals(id)) {
                return Optional.of(employee);
            }
        }
        return Optional.empty();
    }

    public void delete(Employee employee) {
        employees.remove(employee);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        EmployeeRepository that = (EmployeeRepository) o;
        return Objects.equals(employees, that.employees);
    }

    @Override
    public int hashCode() {
        return Objects.hash(employees);
    }


    @Override
    public String toString() {
        return "EmployeeRepository{" +
                "employees=" + employees +
                '}';
    }


}
