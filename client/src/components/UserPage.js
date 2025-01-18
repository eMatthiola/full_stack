import React, { useEffect, useState } from "react";

function UserPage() {
    const [users, setUsers] = useState([]);


    // Fetch user data from the backend
    useEffect(() => {
        fetch("http://localhost:5000/users")
            .then((response) => response.json())
            .then((data) => setUsers(data))
            .catch((error) => console.error("Error fetching users:", error));
    }, []);//[] render for first loading

    return (
        <div>
            <h1>Users</h1>
            {users.length > 0 ? (
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>  
                            <p>Username: {user.username}</p>
                            <p>Email: {user.email}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No users found</p>
            )}
        </div>
    );
}

export default UserPage;
