import { Route, Routes } from 'react-router-dom'
import Main from './pages/Main'
import './App.css'

function App() {
    return (
        <div className='App'>
            <h1>Hi My name is Andrea</h1>
            <Routes>
                <Route path='/' element={<Main />} />
            </Routes>
        </div>
    )
}

export default App
