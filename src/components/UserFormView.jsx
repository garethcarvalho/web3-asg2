import UserForm from "./UserForm";

const UserFormView = ({onLogin}) => {
    return (
        <div className="bg-blue-200">
            <UserForm onLogin={onLogin} />
            <div className="w-screen align-middle text-center">Photo by Name Nameswell</div>
        </div>
    );
}

export default UserFormView;