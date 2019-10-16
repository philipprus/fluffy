import React from 'react';
import '../css/Admin.css';
import { withFormik } from "formik";
import * as Yup from 'yup';
import axios from 'axios';
import AdminApp from './admin/AdminApp';

const Admin = (props) => {
      
  const [valid, setValid] = React.useState(true);

  const hadlerValid = (status) => {
      setValid(status);
  }



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
    .required('נדרש'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('נדרש')
});

const LoginForm = (props) => {
  return (
      <form onSubmit={props.handleSubmit} className="col-5 loginForm">
          <input
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.login}
            name="login"
            type="text"
            aria-label="תוכן ההודעה"
            placeholder="שם משתמש"
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
            placeholder="סיסמא"
          />

          {props.errors.password && (
            <div>{props.errors.password}</div>
          )}
          <button type="submit"  class="fadeIn fourth" >Login</button>
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
              handleSubmit: (values, bag) => {
                axios.post("/api/login", values)
                .then(function (response) {
                  if(response.status === 200) {
                    const valid = response && response.data;
                    bag.props.hadlerValid(valid);
                  }
                }).catch(({ response }) => {
                 console.log(response);
                });
              }
})(LoginForm);



export default Admin;