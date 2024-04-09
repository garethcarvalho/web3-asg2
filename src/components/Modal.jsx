const Modal = ({shouldDisplay, children, onCloseButton}) => {
    let parentClass = "fixed w-full h-full z-10 bg-[#00000080] left-0 top-0 align-middle pt-16";

    if (!shouldDisplay)
        parentClass += " hidden";

    return (
        <div className={parentClass}>
            <div className="bg-gray-200 w-5/6 h-5/6 m-auto shadow-md rounded-md py-6 px-8">
                <button onClick={onCloseButton} className="font-extrabold text-xl float-right text-gray-700 hover:text-gray-500 px-1 pb-1">&times;</button>
                {children}
            </div>
        </div>
    );
}

export default Modal;