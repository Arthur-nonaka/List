import StudentShow from "./StudentShow";
import { useContext } from 'react';
import ListContext from '../context';

function List() {
    const { students } = useContext(ListContext);

    const renderedList = students.map((student, index) => {
        return (
            <StudentShow key={index} student={student} index={index}/>
        );
    });

    return (
        <div className="flex flex-col p-4 mt-2 w-96">
            {renderedList}
        </div>
    );
};

export default List;