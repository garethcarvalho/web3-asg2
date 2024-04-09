import Modal from "./Modal";
import UserForm from "./UserForm";

const UserFormView = ({onLogin}) => {
    return (
        <div className="bg-blue-200 bg-hero-pattern bg-cover h-full">
            <div className="w-screen align-middle text-center text-white text-xs">Photo by Karo Kujanpaa <a href="https://unsplash.com/photos/blue-and-yellow-porsche-911-on-road-during-daytime-TSoUMY6mJI8?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash">(link)</a></div>
            <div className="w-screen align-middle text-center text-white text-xl font-bold">Gareth's Cool F1 Application!</div>
            <UserForm onLogin={onLogin} />
        </div>
    );
}

export default UserFormView;