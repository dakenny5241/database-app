// Require necessary packages
const inquirer = require("inquirer");
const mysql = require("mysql2");

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'test_db'
});

// simple query
connection.query(
  'SELECT * FROM `table` WHERE `name` = "Page" AND `age` > 45',
  function (err, results, fields) {
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  }
);

// with placeholder
connection.query(
  'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
  ['Page', 45],
  function (err, results) {
    console.log(results);
  }
);


// Function to start the application and prompt user for action

function startApp() {
  inquirer
    .prompt([
      {
        name: "action",
        type: "list",
        message: "What would you like to do?",
        choices: [
          "View all departments",
          "View all roles",
          "View all employees",
          "Add a department",
          "Add a role",
          "Add an employee",
          "Update an employee role",
          "Exit"
        ]
      }
    ])
    .then(function (answer) {
      switch (answer.action) {
        case "View all departments":
          viewDepartments();
          break;
        case "View all roles":
          viewRoles();
          break;
        case "View all employees":
          viewEmployees();
          break;
        case "Add a department":
          addDepartment();
          break;
        case "Add a role":
          addRole();
          break;
        case "Add an employee":
          addEmployee();
          break;

      }
    });
}
// Function to view all departments
function viewDepartments() {
  connection.query("SELECT * FROM department", (err, res) => {
    if (err) throw err;
    console.table(res);
    startApp();
  });
}

// Function to view all roles
function viewRoles() {
  connection.query("SELECT * FROM role", (err, res) => {
    if (err) throw err;
    console.table(res);
    startApp();
  });
}

// Function to view all employees
function viewEmployees() {
  connection.query("SELECT * FROM employee", (err, res) => {
    if (err) throw err;
    console.table(res);
    startApp();
  });
}

// Function to add a department
function addDepartment() {
  inquirer
    .prompt({
      name: "name",
      type: "input",
      message: "What is the name of the department you would like to add?"
    })
    .then(answer => {
      connection.query(
        "INSERT INTO department SET ?",
        {
          name: answer.name
        },
        err => {
          if (err) throw err;
          console.log("Department added successfully!");
          startApp();
        }
      );
    });
}

// Function to add a role
function addRole() {
  inquirer
    .prompt([
      {
        name: "title",
        type: "input",
        message: "What is the title of the role you would like to add?"
      },
      {
        name: "salary",
        type: "input",
        message: "What is the salary for this role?"
      },
      {
        name: "department_id",
        type: "input",
        message: "What is the department id for this role?"
      }
    ])
    .then(answer => {
      connection.query(
        "INSERT INTO role SET ?",
        {
          title: answer.title,
          salary: answer.salary,
          department_id: answer.department_id
        },
        err => {
          if (err) throw err;
          console.log("Role added successfully!");
          startApp();
        }
      );
    });
}

// Function to add an employee
function addEmployee() {
  inquirer
    .prompt([
      {
        name: "first_name",
        type: "input",
        message: "What is the employee's first name?"
      },
      {
        name: "last_name",
        type: "input",
        message: "What is the employee's last name?"
      },
      {
        name: "role_id",
        type: "input",
        message: "What is the employee's role id?"
      },
      {
        name: "manager_id",
        type: "input",
        message: "What is the employee's manager id?"
      }
    ])
    .then(answer => {
      connection.query(
        "INSERT INTO employee SET ?",
        {
          first_name: answer.first_name,
          last_name: answer.last_name,
          role_id: answer.role_id,
          manager_id: answer.manager_id
        },
        err => {
          if (err) throw err;
          console.log("Employee added successfully!");
          startApp();
        }
      );
    });
}

// Function to update an employee role
function updateEmployeeRole() {
  inquirer
    .prompt([
      {
        name: "employee_id",
        type: "input",
        message: "What is the id of the employee whose role you would like to update?"
      },
      {
        name: "role_id",
        type: "input",
        message: "What is the new role id for this employee?"
      }
    ])
    .then(answer => {
      connection.query(
        "UPDATE employee SET role_id = ? WHERE id = ?",
        [answer.role_id, answer.employee_id],
        err => {
          if (err) throw err;
          console.log("Employee role updated successfully!");
          startApp();
        }
      );
    });
}
startApp();

