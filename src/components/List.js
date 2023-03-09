import StudentShow from "./StudentShow";

function List({ students, setStudents}) {

    const renderedList = students.map((student, index) => {
        return (
            <StudentShow key={index} index={index} student={student} setStudents={setStudents} students={students} />
        );
    });

    return (
        <div className="flex flex-col p-4 mt-2 w-96">
            {renderedList}
        </div>
    );
};

export default List;