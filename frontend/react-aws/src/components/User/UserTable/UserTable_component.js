import "./UserTable_component.css";
function UserTable(props) {
    return (
        <div id="div_userTable">
            <table>
                <thead>
                    <tr>
                        <th> Name</th>
                        <th>Phone number</th>
                        <th>Address</th>
                        <th>Sex</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.length === 0 && (
                        <tr>
                            <td>No</td>
                            <td>data</td>
                            <td>to</td>
                            <td>display</td>
                        </tr>
                    )}
                    {props.data.map((individualData) => (
                        <tr>
                            <td>{individualData.name}</td>
                            <td>{individualData.phonenumber}</td>
                            <td>{individualData.address}</td>
                            <td>{individualData.sex}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    );
}
export default UserTable;