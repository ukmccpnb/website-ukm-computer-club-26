function Button(props){
    const {href, text, divClass ="", variant = "primary", target = ""} = props;
    const variants = {
        primary: "inline-flex items-center gap-1 py-2 px-3 md:px-4 font-bold text-sm md:text-base bg-secondary rounded-md my-2 text-white hover:bg-primary ease-in-out transition-all whitespace-nowrap",
        secondary: "px-8 py-4 bg-gray-700 rounded-2xl mb-5 font-medium text-white hover:bg-gray-900 ease-in-out transition-all",
    }
    return(
        <div className={divClass}>
            <a href={`${href}`} className={`${variants[variant]}`} target={`${target}`}>{text}</a>
        </div>
    )
}

export default Button