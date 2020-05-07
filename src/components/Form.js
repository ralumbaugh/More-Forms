import React, {useState} from 'react';
import './Form.css';

    const UserForm = (props) => {
        const [firstname, setFirstname] = useState("");
        const [firstnameError, setFirstnameError] = useState("");
        const [lastname, setLastname] = useState("");
        const [lastnameError, setLastnameError] = useState("");
        const [email, setEmail] = useState("");
        const [emailError, setEmailError] = useState("");
        const [password, setPassword] = useState("");
        const [passwordError, setPasswordError] = useState("");
        const [confirmpassword, setConfirmpassword] = useState("");
        const [confirmpasswordError, setConfirmpasswordError] = useState("");


    const createUser = (e) => {
        e.preventDefault ();
        const newUser = {firstname, lastname, email, password, confirmpassword}
    };

    const checkBoxes = () => {
        if (firstname.length + lastname.length + email.length + password.length + confirmpassword.length === 0){
            return true;
        }
        else{
            return false;
        }
    }

    const handleFirstname = (e) => {
        setFirstname(e.target.value);
        if(e.target.value.length < 1) {
            setFirstnameError("First name is required!");
        }
        else if(e.target.value.length <3) {
            setFirstnameError("First name must be 3 characters or longer!");
        }
        else{
            setFirstnameError()
        }
    }

    const handleLastname = (e) => {
        setLastname(e.target.value);
        if(e.target.value.length < 1){
            setLastnameError("Last name is required!");
        }
        else if(e.target.value.length <3){
            setLastnameError("Last name must be 3 characters or longer!");
        }
        else{
            setLastnameError()
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        let patt = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        // let newemail = e.target.value
        if(patt.test(e.target.value)){
            setEmailError()
        }
        else{
            setEmailError("Please enter a valid email.")
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 8){
            setPasswordError("Password must be at least 8 characters long!")
        }
        else{
            setPasswordError()
        }
    }

    const handleConfirmPassword = (e) =>{
        setConfirmpassword(e.target.value);
        if(e.target.value.length < 8){
            console.log("Test in passwords under 8 characters")
            setConfirmpasswordError("Password must be at least 8 characters long!")
        }
        else if(password != e.target.value){
            console.log("Test in passwords don't match")
            setConfirmpasswordError("Passwords must match")
        }
        else{
            setConfirmpasswordError()
        }
    }

    return(
        <form onSubmit={createUser}>
            <div className="inputbox">
                <label>First Name: </label>
                <input type = "text" onChange={ handleFirstname } />
            </div>
                {
                    firstnameError && checkBoxes() == false ?
                    <p style={{color:'red'}}>{ firstnameError }</p>:
                    ''
                }
            <div className="inputbox">
                <label>Last Name: </label>
                <input type = "text" onChange={ handleLastname} />
            </div>
                {
                    lastnameError && checkBoxes() == false ?
                    <p style={{color:'red'}}>{ lastnameError }</p>:
                    ''
                }
            <div className="inputbox">
                <label>Email: </label>
                <input type = "text" onChange={ handleEmail } />
            </div>
                {
                    emailError && checkBoxes() == false ?
                    <p style={{color:'red'}}>{ emailError }</p>:
                    ''
                }
            <div className="inputbox">
                <label>Password: </label>
                <input type = "password" onChange={ handlePassword } />
            </div>
                {
                    passwordError && checkBoxes() == false ?
                    <p style={{color:'red'}}>{ passwordError }</p>:
                    ''
                }
            <div className="inputbox">
                <label>Confirm Password: </label>
                <input type = "password" onChange={ handleConfirmPassword } />
            </div>
                {
                    confirmpasswordError && checkBoxes() == false ?
                    <p style={{color:'red'}}>{ confirmpasswordError }</p>:
                    ''
                }
                <p>Your Form Data:</p>
            <div className = "display">
                <p> First Name: {firstname}</p>
                <p>Last Name: {lastname}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmpassword}</p>
            </div>
        </form>
    )
}

export default UserForm;