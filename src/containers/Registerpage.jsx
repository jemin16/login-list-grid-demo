import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

const Registerpage = () => {
  const login_redirect = useNavigate();

  const [submit, setSubmit] = useState(null);

  let loginpage = yup.object().shape({
    first_name: yup.string().required(),
    email: yup
      .string()
      .email("Invalid email")
      .required("This is a required question"),
    password: yup
      .string()
      .required("Please enter your password")
      .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Password must contain at least 8 characters, one uppercase, one number and one special case character"
      ),
  });

  const formik = useFormik({
    initialValues: {
      first_name: "",
      email: "",
      password: "",
    },

    validationSchema: loginpage,
    onSubmit: (values) => {
      console.log(values);

      let localdata = JSON.parse(localStorage.getItem("RegisterData"));
      console.log(localdata);

      if (localdata) {
        localdata.push(values);
        localStorage.setItem("RegisterData", JSON.stringify(localdata));
      } else {
        localStorage.setItem("RegisterData", JSON.stringify([values]));
      }

      login_redirect("/Login");
      event.preventDefault();
    },
  });

  const headlKeyUP = (values) => {
    const localdata = JSON.parse(localStorage.getItem("RegisterData"));

    let fData = localdata.filter((v) => v.email === values);

    console.log(fData);

    if (fData.length == 1) {
      console.log("JJJ");
      alert("user already exist");
      setSubmit(1);
    }else {
      setSubmit(null)
    }

    console.log(localdata.email);
    console.log(values);
  };

  const { handleBlur, handleChange, handleSubmit, values, errors, touched } =
    formik;
  return (
    <div className="wrappers">
      <form onSubmit={handleSubmit}>
        <h1 className="register">REGISTER PAGE</h1>
        <div className="input-box">
          NAME :
          <input
            type="text"
            id="form3Example3"
            name="first_name"
            className="form-control form-control-lg"
            placeholder="Enter your name"
            value={values.first_name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <span className="error">
            {errors.first_name && touched.first_name ? errors.first_name : ""}
          </span>
        </div>
        <div className="input-box">
          EMAIL :
          <input
            type="email"
            id="form3Example4"
            name="email"
            className="form-control form-control-lg"
            placeholder="Enter your email"
            value={values.email}
            onKeyUp={(e) => headlKeyUP(e.target.value)}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <span className="error">
            {errors.email && touched.email ? errors.email : ""}
          </span>
        </div>
        <div className="input-box">
          PASSWORD :
          <input
            type="password"
            id="form3Example4"
            name="password"
            className="form-control form-control-lg"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <span className="error">
            {errors.password && touched.password ? errors.password : ""}
          </span>
        </div>

        {submit == 1 ? (
          <div className="btn">
            <button type="submit" disabled>
              REGISTER
            </button>
          </div>
        ) : (
          <div className="btn">
            <button type="submit">REGISTER</button>
          </div>
        )}

        <div className="login-r">
          <a href="http://localhost:5173/login">LOG IN</a>
        </div>
      </form>
    </div>
  );
};

export default Registerpage;
