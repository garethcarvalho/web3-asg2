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
            <div className="flex h-screen">
                <form onSubmit={onSubmit} className="bg-gray-200 m-auto pt-8 px-16 pb-16 flex flex-col rounded-lg shadow-md">
                    <h2 className="font-bold text-xl text-center mb-8">Login</h2>
                    <div className="m-1 flex justify-between">
                        <label className="mr-4 text-sm">Email</label>
                        <input className="px-1 focus:drop-shadow-lg transition-all duration-300 text-sm" type="text" ref={email} />
                    </div>
                    <div className="m-1 flex justify-between">
                        <label className="mr-4 text-sm">Password</label>
                        <input className="px-1 focus:drop-shadow-lg transition-all duration-300 text-sm" type="password" ref={password} />
                    </div>
                    <div className="flex flex-col mt-4 text-center">
                        <button type="submit" className="text-white font-bold text-sm py-2 px-4 rounded-full bg-blue-500 hover:bg-blue-600 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg transition-all duration-300">LOGIN</button>
                        <span className="text-xs">Don't have an Account? <button type="button" onClick={changeLoginType} className="text-blue-600 hover:underline hover:text-blue-500">Register here!   </button></span>
                    </div>
                </form>
            </div>
        );
    }

    function renderRegisterForm() {
        return (
            <div className="flex h-screen">
                <form onSubmit={onSubmit} className="bg-gray-200 m-auto pt-8 px-16 pb-16 flex flex-col rounded-lg shadow-md">
                    <h2 className="font-bold text-xl text-center mb-8">Register</h2>
                    <div className="m-1 flex justify-between">
                        <label className="mr-4 text-sm">Email</label>
                        <input className="px-1 focus:drop-shadow-lg transition-all duration-300 text-sm" type="text" ref={email} />
                    </div>
                    <div className="m-1 flex justify-between">
                        <label className="mr-4 text-sm">Password</label>
                        <input className="px-1 focus:drop-shadow-lg transition-all duration-300 text-sm" type="password" ref={password} />
                    </div>
                    <div className="flex flex-col mt-4 text-center">
                        <button type="submit" className="text-white font-bold text-sm py-2 px-4 rounded-full bg-blue-500 hover:bg-blue-600 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg transition-all duration-300">LOGIN</button>
                        <span className="text-xs">Already have an account? <button type="button" onClick={changeLoginType} className="text-blue-600 hover:underline hover:text-blue-500">Login here!</button></span>
                    </div>
                </form>
            </div>
        );
    }

    if (loginType == FormType.Login)
        return renderLoginForm();
    return renderRegisterForm();
}

export default UserForm;