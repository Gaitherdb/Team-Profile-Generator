const Engineer = require('../lib/Engineer');
describe("Engineer class", () => {
     //Tests to see if the method getGithub() will give you what you put as the 4th parameter property
    describe("getGithub method", () => {
        it("Gets Github propety from getGithub method", () => {
            const github = "https://github.com/Gaitherdb";
            const engineer = new Engineer("David", "1", "gaitherdb@gmail.com", github);
            expect(engineer.getGithub()).toEqual(github);
        });
    });

    describe("getRole method", () => {
        it("gets Engineer role from getRole() method", () => {
            const engineer = new Engineer("David", "1", "gaitherdb@gmail.com", "https://github.com/Gaitherdb");
            const role = "Engineer";
            expect(engineer.getRole()).toEqual(role);
        });
    });
});