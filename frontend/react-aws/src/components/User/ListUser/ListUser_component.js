import UserTable from "../UserTable/UserTable_component.js";
import "./ListUser_component.css";
function ListUser() {
    return (
    <div id="div_listUser">
        <h2> List User</h2>
        <UserTable></UserTable>
    </div>
    );
}
export default ListUser;