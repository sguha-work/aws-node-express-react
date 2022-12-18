import CreateUser from "../../components/User/CreateUser_component";
import ListUser from "../../components/User/ListUser_component";
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