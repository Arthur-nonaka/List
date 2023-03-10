import { useState, useContext } from "react";
import Button from "./Button";
import ListContext from "../context";

function Add() {
    const [text, setText] = useState('');
    const { Add } = useContext(ListContext);

    const handleChange = (event) => {
        setText(event.target.value)
    };

    return (
        <div>
            <input onChange={handleChange} value={text} className="focus:outline-none" />
            <Button onClick={() => { Add(text); setText('') }}>
                Add
            </Button>
        </div >
    );
};

export default Add;