import React, { useEffect } from 'react';
import '../css/Admin.css';
import { withFormik } from "formik";
import * as Yup from 'yup';
import axios from 'axios';
import AdminApp from './admin/AdminApp';
import Loader from 'react-loader-spinner';

const Admin = (props) => {
      
  const [valid, setValid] = React.useState(false);

  const hadlerValid = (status) => {

      setValid(status);
  }

  useEffect(  ()=> {
    const getToken = sessionStorage.getItem('auth_token');
    getToken && axios.post("/api/login/auth", {token:getToken})
       .then(function (response) {
         if(response.status === 200) {

            setValid(true);
         }
       }).catch(({ response }) => {
        sessionStorage.removeItem('auth_token');
       });
  },[valid])



      return (
              <div className="container-fluid text-center pt-5 pb-5">
                  <div className="row  justify-content-center">
                        <div className="col   alignCenter">
                            {valid ? 
                                <AdminApp/>
                              : <LoginFormFormik
                                    hadlerValid={hadlerValid}
                            />  }
                        </div>
                  </div>
            </div>
      );
}


const SignupSchema = Yup.object().shape({
  login: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('must'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('must')
});

const LoginForm = (props) => {
  return (
      <form onSubmit={props.handleSubmit} className="col-4 offset-4 loginForm">
          <input
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.login}
            name="login"
            type="text"
            aria-label="תוכן ההודעה"
            placeholder="login"
          />
          {props.errors.login && (
            <div>{props.errors.login}</div>
          )}
          <input
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.password}
            name="password"
            type="password"
            aria-label="תוכן ההודעה"
            placeholder="password"
          />

          {props.errors.password && (
            <div>{props.errors.password}</div>
          )}
          <button type="submit"  className="fadeIn fourth" >
            {props.isSubmitting ?  <Loader type="Circles" color="#00BFFF" height={20} width={100} /> : ""}
            Login
            </button>
        </form>
  )
}

const LoginFormFormik = withFormik({
              enableReinitialize:true,
              mapPropsToValues: (props)=> ({
                login: "",
                password: "",
              }),
              validationSchema: () => SignupSchema,
              handleSubmit: async (values, bag) => {
               await axios.post("/api/login", values)
                .then(function (response) {
                  if(response.status === 200) {
                    const {auth, token} = response && response.data;
                    sessionStorage.setItem('auth_token', token);
                    bag.setSubmitting(false);
                    bag.props.hadlerValid(auth);
                  }
                }).catch(({ response }) => {
                 console.log(response);
                });
              }
})(LoginForm);



export default Admin;