import UserForm from "./UserForm";

const UserFormView = ({onLogin}) => {
    return (
        <div>
            <UserForm onLogin={onLogin} />
        </div>
    );
}

export default UserFormView;