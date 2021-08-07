const Employee = require('../lib/Employee');

describe("Employee class", () => {
    describe("getName method", () => {
        it("Gets name input from getName method", () => {
            const employee = new Employee("David", "1", "gaitherdb@gmail.com");
            const name = "David";
            const expectedResult = "David";
            const actualResult = employee.getName(name);
            expect(actualResult).toEqual(expectedResult);
        });
    });

    describe("getName method", () => {
        it("Gets name input from getName method", () => {
            const name = "David";
            const employee = new Employee(name, "1", "gaitherdb@gmail.com");
            expect(employee.getName()).toEqual(name);
        });
    });

    describe("Name contructor", () => {
        it("Name contructor is properly set", () => {
            const name = "David";
            const employee = new Employee(name, "1", "gaitherdb@gmail.com");
            expect(employee.name).toBe(name);
        });
    });

    describe("getId method", () => {
        it("gets id input from getId method", () => {
            const id = "1";
            const employee = new Employee("David", id, "gaitherdb@gmail.com");
            expect(employee.getId()).toEqual(id);
        });
    });

    describe("getId method", () => {
        it("gets id input from getId method", () => {
            const employee = new Employee("David", "1", "gaitherdb@gmail.com");
            const id = "1";
            const expectedResult = "1";
            const actualResult = employee.getId(id);
            expect(actualResult).toEqual(expectedResult);
        });
    });

    describe("getEmail method", () => {
        it("gets email input from getEmail method", () => {
            const email = "gaitherdb@gmail.com";
            const employee = new Employee("David", "1", email);
            expect(employee.getEmail()).toEqual(email);
        });
    });

    describe("getEmail method", () => {
        it("gets email input from getEmail method", () => {
            const employee = new Employee("David", "1", "gaitherdb@gmail.com");
            const email = "gaitherdb@gmail.com";
            const expectedResult = "gaitherdb@gmail.com";
            const actualResult = employee.getEmail(email);
            expect(actualResult).toEqual(expectedResult);
        });
    });
    describe("getRole method", () => {
        it("gets employee role from inquirer", () => {
            const employee = new Employee("David", "1", "gaitherdb@gmail.com");
            const type = "Employee";
            expect(employee.getRole()).toEqual(type);
        });
    });
});