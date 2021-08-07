const Manager = require('../lib/Manager');
describe("Manager class", () => {
    //Tests to see if the method getOfficeNmber() will give you what you put as the 4th parameter property
    describe("getOfficeNumber method", () => {
        it("Gets OfficeNumber propety from getOfficeNumber method", () => {
            const officeNumber = "10";
            const manager = new Manager("David", "1", "gaitherdb@gmail.com", officeNumber);
            expect(manager.getOfficeNumber()).toEqual(officeNumber);
        });
    });

    describe("getRole method", () => {
        it("gets Manager role from inquirer", () => {
            const manager = new Manager("David", "1", "gaitherdb@gmail.com", "10");
            const role = "Manager";
            expect(manager.getRole()).toEqual(role);
        });
    });
});