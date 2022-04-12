import styles from "./Forms.module.css"
import { Link } from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AuthService from "../../utils/AuthService";
import Validations from "../../utils/Validations"
import { useState, useRef } from "react";

function RegisterForm() {
  const form = useRef();
  const checkBtn = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeName = (e) => {
    const name = e.target.value;
    setName(name);
  };

  const onChangePhone = (e) => {
      const phone = e.target.value;
      setPhone(phone);
    };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setMessage("");
    setSuccessful(false);

    form.current.validateAll();
  
    if (checkBtn.current.context._errors.length === 0) {
      setMessage("Registration successful");
      setSuccessful(true);
    }
  };

  return (
    <Form className={styles.formContainer} onSubmit={handleRegister} ref={form}>
      <div className={styles.formTitle}>
        <p>REGISTER</p>
      </div>
      <div className={styles.formSection}>
        <p>Name</p>
        <Input 
          className={styles.formInput}
          type="text"
          name="name"
          value={name}
          onChange={onChangeName}
          validations={[Validations.required, Validations.validName]}
        />
      </div>
      <div className={styles.formSection}>
        <p>Email</p>
        <Input 
          className={styles.formInput}
          type="text"
          name="email"
          value={email}
          onChange={onChangeEmail}
          validations={[Validations.required, Validations.validEmail]}
        />
      </div>
      <div className={styles.formSection}>
        <p>Password</p>
        <Input 
          className={styles.formInput}
          type="password"
          name="password"
          value={password}
          onChange={onChangePassword}
          validations={[Validations.required, Validations.validPassword]}
        />
      </div>
      <div className={styles.formSection}>
        <p>Phone number</p>
        <Input 
          className={styles.formInput}
          type="text"
          name="phone"
          value={phone}
          onChange={onChangePhone}
          validations={[Validations.required, Validations.validPhone]}
        />
      </div>
      <CheckButton className={styles.formSubmitButton} ref={checkBtn}> REGISTER </CheckButton>
      {!successful && (<p className={styles.formText}>Already have an account? <Link className={styles.linkToRegister} to="/login">Login</Link></p>)}
      {message && (
        <div className={styles.registerMessage}>
          <div
            className={ successful ? "alert alert-success" : "alert alert-danger" }
            role="alert"
          >
          {message}
          </div>
          <p className={styles.formText}>You can log in now: <Link className={styles.linkToRegister} to="/login">Login</Link></p>
        </div>
      )}
    </Form>
  );
}

export default RegisterForm;
