import CreateUser from "../../components/User/CreateUser/CreateUser_component.js";
import ListUser from "../../components/User/ListUser/ListUser_component.js";
import "./User_page.css";
function User() {
    return (
        <div id="div_userPage">
            <h1> This is user creation and user listing page</h1>
            <div>
                <h2>In this section you can add new User</h2>
                <CreateUser></CreateUser>
            </div>
            <div>
                <h2>In this section you will see the list of User</h2>
                <ListUser></ListUser>
            </div>
        </div>
    );
}
export default User;