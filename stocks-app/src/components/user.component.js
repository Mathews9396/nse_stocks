import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

function UserProfile(){
    return(
        <div className="user-management">
        <h1>Manage your Profile</h1>
        <h4>Logged in as Test user</h4>
        <ul>
        <Link to="/create-table">
        <li>Create Table</li>
        </Link>

        <Link to="/add-data">
        <li>Import Data</li>
        </Link>
        
        <Link to="/delete-data">
        <li>Delete Data</li>
        </Link>
        
        <Link to="/delete-table">
        <li>Delete Table</li>
        </Link>

        </ul>
        </div>
    )
}

export default UserProfile;