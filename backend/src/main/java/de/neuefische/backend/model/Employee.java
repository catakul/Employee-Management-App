package de.neuefische.backend.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Objects;

@Data
//@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "employees")
public class Employee {
    @Id
    private String id;
    private static String name;
    private static int age;
    private static String position;
    private static String gender;
    private static String emailId;




    public Employee(String id, String name, int age, String position, String gender, String emailId) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.position = position;
        this.gender = gender;
        this.emailId = emailId;

    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public static String getPosition() {return position;}

    public static String getGender() {return gender;}

    public void setGender(String gender) {this.gender = gender;}

    public void setPosition(String position) {this.position = position;}

    public static String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public static int getAge() {return age;}

    public void setAge(int age) {this.age = age;}

    public static String getEmailId() {return emailId;}

    public void setEmailId(String emailId) {this.emailId = emailId;}

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Employee employee = (Employee) o;
        return age == employee.age && Objects.equals(id, employee.id) && Objects.equals(name, employee.name) && Objects.equals(position, employee.position) && Objects.equals(gender, employee.gender) && Objects.equals(emailId, employee.emailId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, age, position, gender, emailId);
    }

    @Override
    public String toString() {
        return "Employee{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", age=" + age +
                ", position='" + position + '\'' +
                ", gender='" + gender + '\'' +
                ", emailId='" + emailId + '\'' +
                '}';
    }

//    @Override
//    public String toString() {
//        return "Employee{" +
//                "id=" + id +
//                ", name='" + name + '\'' +
//                '}';
}

