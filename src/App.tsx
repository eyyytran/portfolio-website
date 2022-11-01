import { Route, Routes } from 'react-router-dom'
import Main from './pages/Main'
import './App.css'
import Header from './components/header/Header'

function App() {
    return (
        <div className='App'>
            <Header />
            <Routes>
                <Route path='/' element={<Main />} />
            </Routes>
        </div>
    )
}

export default App
