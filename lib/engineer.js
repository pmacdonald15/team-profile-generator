const Employee = require('./employee')

class Engineer extends Employee {
    constructor(name, id, email, githubuser){
        super(name, id, email);
        this.githubuser = githubuser;
    }

    getRole() {
        return 'Engineer';

    }

    getGitHubUser() {
        return this.githubuser;
    }
};

module.exports = Engineer;