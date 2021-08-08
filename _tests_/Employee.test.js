const Employee = require('../lib/Employee');

describe("Employee class", () => {
    //Tests to see if the method getName() will give you what you put as the first parameter property
    describe("getName method", () => {
        it("Gets name propety from getName method", () => {
            const name = "David";
            const employee = new Employee(name, "1", "gaitherdb@gmail.com");
            expect(employee.getName()).toEqual(name);
        });
    });
    //checks to see if the name property on the employee constructor is the name
    describe("Name contructor property", () => {
        it("Name property is properly set", () => {
            const name = "David";
            const employee = new Employee(name, "1", "gaitherdb@gmail.com");
            expect(employee.name).toBe(name);
        });
    });
    //Tests to see if the method getId() will give you what you put as the 2nd parameter property
    describe("getId method", () => {
        it("gets id input from getId method", () => {
            const id = "1";
            const employee = new Employee("David", id, "gaitherdb@gmail.com");
            expect(employee.getId()).toEqual(id);
        });
    });

    describe("Id contructor property", () => {
        it("Id property is properly set", () => {
            const id = "1";
            const employee = new Employee("David", id, "gaitherdb@gmail.com");
            expect(employee.id).toBe(id);
        });
    });
    //Tests to see if the method getEmail() will give you what you put as the third parameter property
    describe("getEmail method", () => {
        it("gets email input from getEmail method", () => {
            const email = "gaitherdb@gmail.com";
            const employee = new Employee("David", "1", email);
            expect(employee.getEmail()).toEqual(email);
        });
    });

    describe("Email contructor property", () => {
        it("Email property is properly set", () => {
            const email = "gaitherdb@gmail.com";
            const employee = new Employee("David", "1", email);
            expect(employee.email).toBe(email);
        });
    });

    //Makes sure that Employee is overridden as the role for the employee class getRole() method
    describe("getRole method", () => {
        it("gets employee role from getRole() method", () => {
            const employee = new Employee("David", "1", "gaitherdb@gmail.com");
            const role = "Employee";
            expect(employee.getRole()).toEqual(role);
        });
    });
});
