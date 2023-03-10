import Button from "./Button";
import { useState, useContext } from "react";
import ListContext from '../context';


function Edit({ student, setEditShow, index }) {
    const [value, setValue] = useState(student.name);
    const { Edit } = useContext(ListContext);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div className="flex m-2.5 justify-between items-center">
            <input onChange={handleChange} value={value} className={'focus:outline-none'}>
            </input>
            <Button onClick={() => { Edit(index, value); setEditShow(false) }}>
                Done
            </Button>
        </div>
    );
};

export default Edit;