import './index.css';
import List from './components/List';
import Add from './components/Add';


function App() {

    return (
        <div className='flex justify-center bg-slate-300 h-screen items-center'>
            <h1 className='absolute pt-2 text-2xl top-2'>
                Students List
            </h1>
            <div className=' h-max w-96 flex flex-col justify-center items-center pt-10 bg-slate-400 '>
                <Add />
                <List/>
            </div>
        </div>
    );
};

export default App;