function Button({children, onClick}) {
    
    
    
    return (
        <button onClick={onClick} className="transition ease-in  bg-white text-black border-2 border-cyan-400 ml-1  h-10 py-1.5 px-2  rounded hover:bg-cyan-500 hover:text-white" >
            {children}
        </button>
    );
};

export default Button;