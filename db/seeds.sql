INSERT INTO department (name)
VALUES ("Sales");
INSERT INTO department (name)
VALUES ("Engineering");
INSERT INTO department (name)
VALUES ("Finance");
INSERT INTO department (name)
VALUES ("Legal");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 100000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("Salesperson", 80000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("Lead Engineer", 150000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Software Engineer", 120000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Account Manager", 160000, 3);
INSERT INTO role (title, salary, department_id)
VALUES ("Accountant", 125000, 3);
INSERT INTO role (title, salary, department_id)
VALUES ("Legal Team Lead", 250000, 4);
INSERT INTO role (title, salary, department_id)
VALUES ("Lawyer", 190000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "kend", 1, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Mike", "Chu", 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Ashley", "Rodi", 3, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Kevin", "Tup", 4, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Sunal", "Singh", 5, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Salia", "Brown", 6, 5);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES (Karah", "Lourd", 7, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Tom", "Alli", 8, 7);  