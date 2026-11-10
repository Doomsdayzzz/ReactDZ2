import {useState} from 'react'

import './App.css'
import UserList from "./components/UserList/UserList.jsx";
function App() {
    const [user, setUser] = useState("");
    const [showHeader, setShowHeader] = useState(true);


    return (
        <>
        <UserList></UserList>
        </>
    )
}

export default App;
