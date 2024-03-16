const Button = ({children, onClick, type = "button", styles}) => {
    let stylesStr = "font-bold text-sm py-2 px-4 rounded-full transition-all";


    for (let s of styles.normal) {
        stylesStr += ` ${s}`;
    }

    for (let s of styles.hover) {
        stylesStr += ` hover:${s}`;
    }

    for (let s of styles.focus) {
        stylesStr += ` focus:${s}`;
    }

    if (styles.transitionDuration) {
        stylesStr += ` duration-${styles.transitionDuration}`;
    }

    console.log(stylesStr);

    return (
        <button type={type} className={stylesStr} onClick={onClick}>{children}</button>
    );
}

export default Button;