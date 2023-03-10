import Edit from "./Edit";
import Button from './Button';
import { useState, useContext } from 'react';
import ListContext from '../context';

function StudentShow({ index, student }) {
    const [editShow, setEditShow] = useState(false);
    const { Delete } = useContext(ListContext);


    let content =
        <div className="flex m-2.5 justify-between items-center">
            <div>{student.name}</div>
            <div>
                <Button onClick={() => {
                    if (!editShow) { Delete(index) }
                }
                }>
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
        content = <Edit setEditShow={setEditShow} editShow={editShow} index={index} student={student} />
    };

    return (
        <div >
            {content}
        </div>

    );
};

export default StudentShow;