import { createContext, useState } from "react";

const ListContext = createContext();

function Provider({ children }) {
    const [students, setStudents] = useState([]);

    const Delete = (i) => {
            const updatedStudents = [
                ...students.slice(0, i),
                ...students.slice(i + 1)
            ];
            setStudents(updatedStudents);
    };

    const Edit = (index, value) => {
        const updatedStudents = students.map((s, i) => {
            if (i === index) {
                return s = { name: value };
            } else {
                return s
            }
        })

        setStudents(updatedStudents);
    };

    const Add = (text) => {
        if(text !== '')
        {
            const updatedStudents = [
                ...students.slice(0),
                {name: text}
            ];
            setStudents(updatedStudents);
        }

    }

    const valueToShare = {
        students,
        setStudents,
        Delete,
        Edit,
        Add

    };

    return (
        <ListContext.Provider value={valueToShare}>
            {children}
        </ListContext.Provider>
    );

};

export { Provider };
export default ListContext;