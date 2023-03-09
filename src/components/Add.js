import Button from "./Button";
import { useState } from "react";

function Add({ students, setStudents }) {
    const [text, setText] = useState('');

    
    const handleSubmit = () => {
        if(text !== '')
        {
            const updatedStudents = [
                ...students.slice(0),
                {name: text}
            ];
            setStudents(updatedStudents);
            setText('');
        }

    }

    const handleChange = (event) => {
        setText(event.target.value)
    };

    return (
        <div>
            <input onChange={handleChange} value={text} className="focus:outline-none"/>
            <Button onClick={handleSubmit}>
                Add
            </Button>
        </div>
    );
};

export default Add;