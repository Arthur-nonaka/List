import Edit from "./Edit";
import Button from './Button';
import { useState } from 'react';

function StudentShow({ index, student, setStudents, students }) {
    const [editShow, setEditShow] = useState(false);

    const handleClickDelete = (index) => {
        if (!editShow) {
            const updatedStudents = [
                ...students.slice(0, index),
                ...students.slice(index + 1)
            ];
            setStudents(updatedStudents);
        } else {
            alert('Não delete enquanto está editando!')
        }

    };
    let content =
        <div className="flex m-2.5 justify-between items-center">
            <div>{student.name}</div>
            <div>
                <Button onClick={() => handleClickDelete(index)}>
                    Delete
                </Button>
                <Button onClick={() => handleClickEdit()} >
                    Edit
                </Button>
            </div>
        </div>;

    const handleClickEdit = () => {
        setEditShow(!editShow);
    };
    if (editShow) {
        content = <Edit student={student} setStudents={setStudents} students={students} setEditShow={setEditShow} editShow={editShow} index={index}/>
    };

    return (
        <div >
            {content}
        </div>

    );
};

export default StudentShow;