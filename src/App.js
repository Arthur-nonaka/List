import './index.css';
import Button from './components/Button';
import { useState } from 'react';
import List from './components/List';
import Add from './components/Add';


function App() {
    const [students, setStudents] = useState([
        { name: 'Arthur' },
        { name: 'Pedro' },
    ]);

    return (
        <div className='flex justify-center bg-slate-300 h-screen items-center'>
            <h1 className='absolute pt-2 text-2xl top-2'>
                Students List
            </h1>
            <div className=' h-max w-96 flex flex-col justify-center items-center pt-10 bg-slate-400 '>
                <Add students={students} setStudents={setStudents}/>
                <List students={students} setStudents={setStudents} />
            </div>
        </div>
    );
};

export default App;