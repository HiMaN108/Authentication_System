import toast from "react-hot-toast";
import { authenticate } from "./helper.js";

//validate login page username

<<<<<<< HEAD
export async function usernameValidate(values){
    const errors = usernameVerify({}, values);

    if(values.username){
        // check user existenve or not
        const { status } = await authenticate(values.username);

        if(status !== 200){

            errors.exit = toast.error(' User does not exist...!')
        }
    }
    return errors;
              
}
// validate password
export async function passwordValidate(values){
    const errors = passwordVerify({}, values);

    return errors;
=======
export async function usernameValidate(values) {
  const errors = usernameVerify({}, values);

  if (values.username) {
    // check user existenve or not
    const { status } = await authenticate(values.username);

    if (status !== 200) {
      errors.exit = toast.error(" User does not exist...!");
    }
  }
  return errors;
}
// validate password
export async function passwordValidate(values) {
  const errors = passwordVerify({}, values);

  return errors;
>>>>>>> fea394d (updating the some files)
}

//validate reset password

<<<<<<< HEAD
export async function resetPasswordValidation(values){
    const errors = passwordVerify({}, values);

    if(values.password !== values.confirm_pwd){
        errors.exist = toast.error("Password not match...!");
    }

    return errors;
}

/** validate register form */
export async function registerValidation(values){
    const errors = usernameVerify({}, values);
    passwordVerify(errors, values);
    emailVerify(errors, values);

    return errors;
}



/** validate profile page */
export async function profileValidation(values){
    const errors = emailVerify({}, values);
    return errors;
=======
export async function resetPasswordValidation(values) {
  const errors = passwordVerify({}, values);

  if (values.password !== values.confirm_pwd) {
    errors.exist = toast.error("Password not match...!");
  }

  return errors;
}

/** validate register form */
export async function registerValidation(values) {
  const errors = usernameVerify({}, values);
  passwordVerify(errors, values);
  emailVerify(errors, values);

  return errors;
}

/** validate profile page */
export async function profileValidation(values) {
  const errors = emailVerify({}, values);
  return errors;
>>>>>>> fea394d (updating the some files)
}

//********************************************************************************************************8 */

<<<<<<< HEAD


//validate password 

function passwordVerify(errors = {} , values){

    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    if(!values.password){
        errors.password = toast.error("Password Required...!");
    }else if(values.password.includes(" ")){
        errors.password = toast.error("wrong password..!");
    }else if(values.password.length <4){
        errors.password = toast.error("Password must be more than 4");
    }else if(!specialChars.test(values.password)){
        errors.password = toast.error("Password must have special character");
    }

    return errors;
}
//validate for username

function usernameVerify(error = {}, values){
    if(!values.username){
        error.username = toast.error('Username Required...!');
    }else if(values.username.includes(" ")){
        error.username = toast.error('Invalid Username...!')
    }

    return error;
}

/** validate email */
function emailVerify(error ={}, values){
    if(!values.email){
        error.email = toast.error("Email Required...!");
    }else if(values.email.includes(" ")){
        error.email = toast.error("Wrong Email...!")
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        error.email = toast.error("Invalid email address...!")
    }

    return error;
}
=======
//validate password

function passwordVerify(errors = {}, values) {
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?~]/;

  if (!values.password) {
    errors.password = toast.error("Password Required...!");
  } else if (values.password.includes(" ")) {
    errors.password = toast.error("wrong password..!");
  } else if (values.password.length < 4) {
    errors.password = toast.error("Password must be more than 4");
  } else if (!specialChars.test(values.password)) {
    errors.password = toast.error("Password must have special character");
  }

  return errors;
}
//validate for username

function usernameVerify(error = {}, values) {
  if (!values.username) {
    error.username = toast.error("Username Required...!");
  } else if (values.username.includes(" ")) {
    error.username = toast.error("Invalid Username...!");
  }

  return error;
}

/** validate email */
function emailVerify(error = {}, values) {
  if (!values.email) {
    error.email = toast.error("Email Required...!");
  } else if (values.email.includes(" ")) {
    error.email = toast.error("Wrong Email...!");
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    error.email = toast.error("Invalid email address...!");
  }

  return error;
}
>>>>>>> fea394d (updating the some files)
