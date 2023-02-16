package de.neuefische.backend.model;

import lombok.*;
import org.springframework.data.annotation.Id;

@Data
@AllArgsConstructor
public class Employee {
    @Id
    String id;
    String name;
    String age;
    String position;
    String gender;
    String emailId;

}