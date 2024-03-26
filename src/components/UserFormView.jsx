import Modal from "./Modal";
import UserForm from "./UserForm";

const UserFormView = ({onLogin}) => {
    return (
        <div className="bg-blue-200">
            <Modal>
                <div>This is a modal!</div>
            </Modal>
            <UserForm onLogin={onLogin} />
            <div className="w-screen align-middle text-center">Photo by Name Nameswell</div>
        </div>
    );
}

export default UserFormView;