import {useState} from 'react';
import './UserCreateForm_Component.css';
import UserService from '../../../services/User_service';
function UserCreateForm() {
    const [name, setName] = useState('');
    const [phonenumber, setPhonenumber] = useState(0);
    const [address, setAddress] = useState('');
    const [sex, setSex] = useState('');
    let serverCallTimeoutForUserFormSubmit = null;
    const submitUserForm = (event)=>{
        event.preventDefault();
        // applying debouncing to prevent unwanted multiple call to server
        if(serverCallTimeoutForUserFormSubmit!=null) {
            window.clearTimeout(serverCallTimeoutForUserFormSubmit);
            serverCallTimeoutForUserFormSubmit = null;
        }
        console.log('clicked');
        serverCallTimeoutForUserFormSubmit = window.setTimeout(()=>{
            const intPhonenumber = parseInt(phonenumber);
            const user = {name,phonenumber:intPhonenumber,address, sex};
            const userService = UserService.instance;
            console.log('user to submit',user);
            userService.submitUser(user).then(()=>{
                alert('User data submitted successfully');
                setName('');
                setPhonenumber(0);
                setAddress('');
                setSex('');
            }).catch((error)=>{
                console.log(error);
                alert('User data submission failed');
            });
            console.log('server called');
        },5000);
    }
    return (
        <div className="UserCreateForm_Component">
            <h3>By this form add user please </h3>
            <form>
                <p>Please enter your name</p>
                <input type="text" onChange={(e)=>setName(e.target.value)}/>
                <p>Please enter your phone number</p>
                <input type="text" onChange={(e)=>setPhonenumber(e.target.value)}/>
                <p>Please enter your address</p>
                <input type="text" onChange={(e)=>setAddress(e.target.value)}/>
                <p>Please enter your sex</p>
                <input type="text" onChange={(e)=>setSex(e.target.value)}/>
                <p>All fields are mandatory</p>
                <button onClick={submitUserForm}>Click to submit</button>
            </form>
        </div>
    );
}
export default UserCreateForm;