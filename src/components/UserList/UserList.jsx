import {useEffect, useState} from "react";
import axios from 'axios';
import './UserList.css';
import Header from '../../Header/Header.jsx';


const API_URL = import.meta.env.VITE_API_URL;

function UserList() {
    const [users, setUsers] = useState([]);


    useEffect(() => {
        axios.get(API_URL + '/users')
            .then(res => setUsers(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="user-list">
            <Header />
            {users.length > 0 ? (
                <ul>
                    {users.map(user => (
                        <li key={user.id} className="user-item">
                            <p>{user.id}. {user.name} - {user.email}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="loading-message">Нет данных...</p>
            )}
        </div>
    );
}

export default UserList;
