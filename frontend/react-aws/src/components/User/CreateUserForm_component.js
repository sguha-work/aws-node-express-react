import "./CreateUserForm_component.css";
function CreateUserForm() {
    return (
    <div id="div_createUserForm">
        <form>
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <td><input type="text"/></td>
                    </tr>
                    <tr>
                        <th>Address</th>
                        <td><input type="text"/></td>
                    </tr>
                    <tr>
                        <th>Phonenumber</th>
                        <td><input type="number"/></td>
                    </tr>
                    <tr>
                        <th>SEX</th>
                        <td><input type="text"/></td>
                    </tr>
                </tbody>
            </table>
            <button>Click to Submit</button>
        </form>
    </div>
    );
}
export default CreateUserForm;