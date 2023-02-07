package de.neuefische.backend.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Objects;

@Data
//@AllArgsConstructor
@NoArgsConstructor
//@Document(collection = "employees")
public class Employee {
    @Id
    private String id;
    private String name;
    private int age;
    private String position;
    private String gender;


    public Employee(String id, String name, int age, String position, String gender) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.position = position;
        this.gender = gender;

    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Employee employee = (Employee) o;
        return age == employee.age && Objects.equals(id, employee.id) && Objects.equals(name, employee.name) && Objects.equals(position, employee.position) && Objects.equals(gender, employee.gender);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, age, position, gender);
    }

    public String getPosition() {
        return position;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    @Override
    public String toString() {
        return "Employee{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", age=" + age +
                ", position='" + position + '\'' +
                ", gender='" + gender + '\'' +
                '}';
    }

//    @Override
//    public String toString() {
//        return "Employee{" +
//                "id=" + id +
//                ", name='" + name + '\'' +
//                '}';
}

