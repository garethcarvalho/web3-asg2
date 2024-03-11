const usernameMinimumLength = 4;
const passwordMininmumLength = 6;

export class UserAuth {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    checkValidity() {
        const validity = {};

        validity.validUsername = this.email 
            && this.email.length >= usernameMinimumLength;
        validity.validPassword = this.password
            && this.password.length >= passwordMininmumLength;
        validity.valid = validity.validUsername && validity.validPassword;

        return validity;
    }
}