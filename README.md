 Employee Management System

This is a command-line application that allows users to view and manage employee information. It uses Node.js, Inquirer, and MySQL.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You will need to have Node.js installed on your machine. You can download it [here](https://nodejs.org/en/).

### Installing

Clone the repository to your local machine.

```
git clone https://github.com/username/project-name.git
```

Navigate to the project directory and install the necessary packages.

```
cd project-name
npm install
```

Create a MySQL database called `employees_db`. You can do this by running the following command in your terminal:

```
mysql -u root -p
```

Once you are in the MySQL shell, run the following command to create the database:

```
CREATE DATABASE employees_db;
```

You will also need to create the necessary tables in the database. You can do this by running the `schema.sql` file in the project directory.

## Usage

To start the application, run the following command in your terminal:

```
node index.js
```

You will be prompted with a list of actions you can take. You can view all departments, roles, and employees, as well as add departments, roles, and employees. You can also update an employee's role.

## Built With

* [Node.js](https://nodejs.org/en/) - JavaScript runtime
* [Inquirer](https://www.npmjs.com/package/inquirer) - Command-line user interface
* [MySQL](https://www.mysql.com/) - Database management system

## Authors

* *dakenny** - [Github Profile](https://github.com/dakenny)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.