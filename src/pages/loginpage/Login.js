import { NavLink, useNavigate } from 'react-router-dom';
import React, { useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import './Login.css';
import { UserContext } from "../../App";
import { useFormik } from 'formik';
import * as Yup from 'yup';

const initialValues = {
  userNameOrEmail: "",
  password: ""
};

const validationSchema = Yup.object({
  userNameOrEmail: Yup.string().required('Email is required'),
  password: Yup.string().required('Password is required'),
});

export const Login = ({ handleModal, showLogin, handleHide }) => {
  const { isLogin, } = useContext(UserContext);
  const navigate = useNavigate();


  const onSubmit = (values) => {
    console.log("Form Submitted");
    alert(1);
    alert(JSON.stringify(values, null, 2));
    handleHide();  // Hide the modal after successful login
    navigate('/menu');  // Navigate to the menu page
    console.log(values);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <>
      <li onClick={handleModal}>
        Login
      </li>
      <Modal show={showLogin} onHide={handleHide} centered>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {console.log(formik.values, formik.errors)}
          <div className="model_content">
            <form onSubmit={formik.handleSubmit}>
              <label htmlFor="userNameOrEmail">Username or Email</label>
              <input
                className="input_text"
                id="userNameOrEmail"
                name="userNameOrEmail"
                type="text"
                value={formik.values.userNameOrEmail}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.userNameOrEmail && formik.errors.userNameOrEmail ? (
                <div className="error">{formik.errors.userNameOrEmail}</div>
              ) : null}
              <label htmlFor="password">Password</label>
              <input
                className="input_text"
                id="password"
                name="password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="error">{formik.errors.password}</div>
              ) : null}
              <div className="checkbox_outer">
                <NavLink to="/forgot-password" className="forget_password">Forgot Your Password</NavLink>
              </div>
              <button type="submit" className="login_btn">Login</button>
              <div className="checkbox_outer1">
                <NavLink to="/signup" className="forget_password">Sign Up?</NavLink>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
