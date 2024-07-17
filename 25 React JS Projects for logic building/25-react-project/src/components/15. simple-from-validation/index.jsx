import { useState } from "react";

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
      case "userName":
        setErrors((prevErrors) => ({
          ...prevErrors,
          username: getName.length < 3 ? 'UserName must be greater than 3 character': '',
        }));
        break;
      case "email":
        break;
      case "password":
        break;

      default:
        break;
    }
  }

  console.log(formData);

  return (
    <div>
      <h2>Simple Form Validation</h2>
      <form>
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
