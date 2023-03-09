import Button from "./Button";
import { useState } from "react";


function Edit({ student, setEditShow, setStudents, index, students}) {
    const [value, setValue] = useState(student.name);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleClick = () => {
        const updatedStudents = students.map((s, i) => {
            if(i === index) {
                return s = {name: value};
            } else {
                return s
            }
        })

        setStudents(updatedStudents);
        setEditShow(false);
    };

    return (
        <div className="flex m-2.5 justify-between items-center">
            <input onChange={handleChange} value={value} className={'focus:outline-none'}>
            </input>
            <Button onClick={handleClick}>
                Done
            </Button>
        </div>
    );
};

export default Edit;