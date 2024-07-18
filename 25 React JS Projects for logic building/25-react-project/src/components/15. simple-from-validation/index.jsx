import { useState } from "react";
import './form.css'


const FormValidation = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
  });

  //validation using onchange

  function handleFormChange(event) {
    const { name, value } = event.target; //destructuring
    setFormData({
      ...formData,
      [name]: value,
    });
    validateInput(name, value);

    //not clean
    // setFormData({
    //     ...formData,
    //   [event.target.name]: event.target.value, //dynamically set values on change
    // });
  }
  function validateInput(getName, getValue) {
    switch (getName) {
      case "username":
        setErrors((prevErrors) => ({
          ...prevErrors,
          username:
            getValue.length < 3
              ? "UserName must be greater than 3 character"
              : "",
        }));
        break;
      case "email":
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
            getValue
          )
            ? ""
            : "Invalid Email Address",
        }));
        break;
      case "password":
        setErrors((prevErrors) => ({
          ...prevErrors,
          password:
            getValue.length < 5 ? "Password must be at least 5 character" : "",
        }));
        break;

      default:
        break;
    }
  }

  //validation using form submit
  function handleFromSubmit(event) {
    event.preventDefault();

    const validateErrors = {};

    Object.keys(formData).forEach((dataItem) => {
      validateInput(dataItem, formData[dataItem]); // passing form key and value
      if (errors[dataItem]) {
        //checking if errors os name,email and pass exist than setting the same in the validateErrors object
        validateErrors[dataItem] = errors[dataItem];
      }
    });

    setErrors((prevErrors) => ({
      ...prevErrors,
      ...validateErrors,
    }));

    if (Object.values(validateErrors).every((error) => error === "")) {
      //perform form submission logic
    } else {
      console.log("Error is present but fix this issue");
    }
  }

  console.log(formData);

  return (
    <div className="form-validation-container">
      <h2>Simple Form Validation</h2>
      <form onSubmit={handleFromSubmit}>
        <div className="input-wrapper">
          <label htmlFor="username">User Name</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter Your Name"
            value={formData.username}
            onChange={handleFormChange}
          />
          <span>{errors?.username}</span>
        </div>
        <div className="input-wrapper">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={handleFormChange}
          />
          <span>{errors?.email}</span>
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter Your Password"
            value={formData.password}
            onChange={handleFormChange}
          />
          <span>{errors?.password}</span>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormValidation;
