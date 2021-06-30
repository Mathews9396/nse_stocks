import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import http from '../http-common';

function UserProfile() {

  const createTable = () => {
    http.post(`/user/create-table`, {
    }).then((response) => {
      console.log(response);
    }).catch((err) => {
      alert("Need to authenticate to use this page");
      throw err;
    })
  }

  const deleteTable = () => {
    http.post(`/user/delete-table`, {
    }).then((response) => {
    }).catch((err) => {
      console.log("error - ", err);
      alert("Need to authenticate to use this page");
      throw err;
    })
  }

  const addData = () => {
    http.post(`/user/add-data`, {
    }).then((response) => {
      // console.log((response.data.message));
    }).catch((err) => {
      console.log("error - ", err);
      alert("Need to authenticate to use this page");
      throw err;
    })
  }


  const deleteData = () => {
    http.post(`/user/delete-data`, {
    }).then((response) => {
      console.log(response);

    }).catch((err) => {
      alert("Need to authenticate to use this");
      throw err;
    })
  }

  const createUsersTable = () => {
    http.post(`/user/create-users`, {
    }).then((response) => {
      console.log(response);
    }).catch((err) => {
      alert("Need to authenticate to use this");
      throw err;
    })
  }

  const getAllUsers = () => {
    http.get(`/user/get-all-users`, {
    }).then((response) => {
      console.log(response);
    }).catch((err) => {
      alert("Need to authenticate to use this page");
      throw err;
    })
  }

  return (
    <div className="user-management">
      <h1>Manage the Database</h1>
      <h4>Logged in as Test user</h4>
      <ul className="user-buttons">
        <Link to="/user/create-table" onClick={createTable}>
          <li>Create Stock Table</li>
        </Link>

        <Link to="/user/add-data" onClick={addData}>
          <li>Import Stock Data</li>
        </Link>

        <Link to="/user/delete-data" onClick={deleteData}>
          <li>Delete Stock Data</li>
        </Link>

        <Link to="/user/delete-table" onClick={deleteTable}>
          <li>Delete Stock Table</li>
        </Link>

        <Link to="/user/create-users" onClick={createUsersTable}>
          <li>Create Users Table</li>
        </Link>

        <Link to="/user/get-all-users" onClick={getAllUsers}>
          <li>Get All Users</li>
        </Link>
      </ul>
    </div>
  )
}

export default UserProfile;