import { useState, createRef } from "react"
import { UserAuth } from "../userAuth";

const FormType = {
    Login: 0,
    Register: 1
};

const UserForm = ({onLogin}) => {
    const [loginType, setLoginType] = useState(FormType.Login);

    const email = createRef();
    const password = createRef();

    function onSubmit(e) {
        e.preventDefault();
        const userAuth = new UserAuth(email.current.value, 
            password.current.value);
        
        const validity = userAuth.checkValidity();
        if (validity.valid) {
            onLogin(userAuth);
        } else {
            alert("Invalid email or password");
        }
    }

    function changeLoginType(e) {
        if (loginType == FormType.Login)
            setLoginType(FormType.Register);
        else
            setLoginType(FormType.Login);
    }
    
    function renderLoginForm() {
        return (
            <form onSubmit={onSubmit}>
                <h2 className="text-3xl font-bold text-yellow-600 m-4">Login</h2>
                <label>Email</label>
                <input type="text" ref={email} />
                <label>Password</label>
                <input type="password" ref={password} />
                <button type="submit">Login</button>
                <button type="button" onClick={changeLoginType}>Don't have an Account? Register here</button>
            </form>
        );
    }

    function renderRegisterForm() {
        return (
            <form onSubmit={onSubmit}>
                <h2>Register</h2>
                <label>Email</label>
                <input type="text" ref={email} />
                <label>Password</label>
                <input type="password" ref={password} />
                <button type="submit">Login</button>
                <button type="button" onClick={changeLoginType}>Already have an account? Login here</button>
            </form>
        );
    }

    if (loginType == FormType.Login)
        return renderLoginForm();
    return renderRegisterForm();
}

export default UserForm;