package de.neuefische.backend.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Collection;
import java.util.List;
import java.util.Objects;

@Data
@AllArgsConstructor
public abstract class Employee {
    @Id
    private String id;
    private static String name;
    private static String age;
    private static String position;
    private static String gender;
    private static String emailId;


    abstract List<Employee> findByName(String name);

}