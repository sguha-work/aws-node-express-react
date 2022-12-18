import CreateUserForm from "../CreateUserForm/CreateUserForm_component.js";
import "./CreateUser_component.css";
function CreateUser() {
    return (
        <div id="div_createUser">
            <h3> Create User</h3>
            <CreateUserForm></CreateUserForm>
        </div>
    );
}
export default CreateUser;