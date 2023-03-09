import Button from "./Button";

function List({ students, setStudents }) {

    const handleClick = (index) => {
        const updatedStudents = [
            ...students.slice(0,index),
            ...students.slice(index+1)
        ];

        setStudents(updatedStudents);

    };

    const renderedList = students.map((student, index) =>
        <div key={index} className="flex mb-5 justify-between items-center">
            {student.name} 
            <Button onClick={() => handleClick(index)}>
                Remove
            </Button>
        </div>
    );

    return (
        <div className="flex flex-col p-4 mt-2 w-72">
            {renderedList} 
        </div>
    );
};

export default List;