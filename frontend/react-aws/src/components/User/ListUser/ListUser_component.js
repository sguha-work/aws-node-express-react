import { useState,useEffect } from "react";
import UserTable from "../UserTable/UserTable_component.js";
import "./ListUser_component.css";
import UserService from "./../../../services/User_service.js";

function ListUser() {
    const [userData, setUserData]=useState([]);
    useEffect(() => {
        (async () => {
            const us = UserService.getInstance();
            const data = await us.getAllUser();
            console.log('data', data.data);
            setUserData(data.data);
        })();
    }, []);
    return (
        <div id="div_listUser">
            <h2> List User</h2>
            <UserTable data={userData}></UserTable>
        </div>
    );
}
export default ListUser;