package de.neuefische.backend.repository;

import de.neuefische.backend.model.Employee;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TestRepo extends MongoRepository<Employee, String> {

}
