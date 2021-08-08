const Intern = require('../lib/Intern');
describe("Intern class", () => {
    //Tests to see if the method getSchool() will give you what you put as the 4th parameter property
    describe("getSchool method", () => {
        it("Gets school propety from getSchool method", () => {
            const school = "University of Richmond";
            const intern = new Intern("David", "1", "gaitherdb@gmail.com", school);
            expect(intern.getSchool()).toEqual(school);
        });
    });

    describe("getRole method", () => {
        it("gets Intern role from getRoll() method", () => {
            const intern = new Intern("David", "1", "gaitherdb@gmail.com", "University of Richmond");
            const role = "Intern";
            expect(intern.getRole()).toEqual(role);
        });
    });
});