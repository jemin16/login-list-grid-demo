import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

const Login = () => {
const Dashboard_redirect = useNavigate()

  let loginpage = yup.object().shape({
    email: yup
      .string()
      .email("Invalid email")
      .required("This is a required question"),
    password: yup
      .string()
      .required("Please enter your password")
      .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Password must contain at least 8 characters"
      ),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: loginpage,
    onSubmit: (values) => {
      let localdata = JSON.parse(localStorage.getItem("RegisterData"));

      let fData = localdata?.filter((v) => v.email === values.email);
      // const filteredUser = localdata.find(user => user.email === values.email && user.password === values.password);

      if(fData){
        localStorage.setItem("loginUserData", JSON.stringify(fData))
      }

      if (fData.length == 1) {
        if (
          fData[0].email == values.email &&
          fData[0].password == values.password
        ) {
          console.log("Login Done");
          Dashboard_redirect('/Dashbord')
        } else {
          console.log("Login failed");
          alert("Invalid username or password");
        }
      } else {
        console.log("Login failed");
        alert("Invalid username or password");
      }

      event.preventDefault();
    },
  });

  const { handleBlur, handleChange, handleSubmit, values, errors, touched } =
    formik;

  return (
    <div className="wrappers">
      <form onSubmit={handleSubmit}>
        <h1 className="login">LOGIN</h1>
        <div className="input-box">
          USERNAME :
          <input
            type="email"
            id="form3Example3"
            name="email"
            className="form-control form-control-lg"
            placeholder="Email address"
            value={values.email}
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
            id="form3Example3"
            name="password"
            className="form-control form-control-lg"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <span className="error">
          {errors.password && touched.password ? errors.password : ""}
        </span>
        <div className="btn">
          <button type="submit">login</button>
        </div>

        <div className="registerlink">
          <a href="http://localhost:5173/registerpage">NEW USER REGISTER</a>
        </div>
      </form>
    </div>
  );
};

export default Login;
