import './User_Component.css';
import UserCreateForm from '../UserCreateForm/UserCreateForm_Component';
function UserComponent() {
    return (
    <div className="User_Component">
        <h2>This is UserComponent</h2>
        <UserCreateForm></UserCreateForm>
    </div>
    );
}
export default UserComponent;