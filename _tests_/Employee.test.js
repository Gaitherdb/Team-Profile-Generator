const Employee = require('../lib/Employee');

describe("Employee class", () => {
    describe("getName method", () => {
        it("Gets name input from Employee constructor", () => {
            const employee = new Employee("David", "1", "gaitherdb@gmail.com");
            const name = "David";
            const expectedResult = "David";
            const actualResult = employee.getName(name);
            expect(actualResult).toEqual(expectedResult);
        });
    });


    describe("getID method", () => {
        it("gets id input from Employee constructor", () => {
            const employee = new Employee("David", "1", "gaitherdb@gmail.com");
            const id = "1";
            const expectedResult = "1";
            const actualResult = employee.getId(id);
            expect(actualResult).toEqual(expectedResult);
        });
    });
    describe("getEmail method", () => {
        it("gets email input from Employee constructor", () => {
            const employee = new Employee("David", "1", "gaitherdb@gmail.com");
            const email = "gaitherdb@gmail.com";
            const expectedResult = "gaitherdb@gmail.com";
            const actualResult = employee.getEmail(email);
            expect(actualResult).toEqual(expectedResult);
        });
    });
});