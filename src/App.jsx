import React, { Fragment, useState } from "react";
import "./App.css";
import { TextInput } from "./components/TextInput";
import { RadioInput } from "./components/RadioInput";
import { SelectInput } from "./components/SelectInput";

const App = () => {
  const [fields, setFields] = useState({
    fname: "",
    email: "",
    gender: "",
    country: "",
    skills: [],
  });
  const [errorFields, setErrorFields] = useState({
    fname: false,
    email: false,
    gender: false,
    country: false,
    skills: false,
  });

  const [options, setOptions] = useState([
    {
      label: "Select",
      value: "",
    },
    {
      label: "UAE",
      value: "uae",
    },
    {
      label: "India",
      value: "india",
    },
    {
      label: "Qatar",
      value: "qatar",
    },
  ]);

  // This for handling the fields
  const handleChange = (event) => {
    setFields((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));

    isFormValidOnBlur(event);
  };

  const handleSkills = (event) => {
    const { value } = event.target;
    let newSkills = [...fields.skills];


    if (event.target.checked) {
      newSkills.push(value);
    } else {
      newSkills = newSkills.filter((skill) => skill !== value);
    }

    setFields((prev) => ({
      ...prev,
      [event.target.name]: newSkills,
    }));

    
  };

  //This for submitting the form
  const handleSubmit = (event) => {
    event.preventDefault();

    // Validation on onSubmit
    if (isFormvalidOnSubmit()) {
      console.log("valid");
      alert("Submitted");
      return;
    }
    console.log("Invalid");
    console.log(errorFields);
  };

  // Validation onSubmit solution
  const isFormvalidOnSubmit = () => {
    const errors = {
      fname: false,
      email: false,
      gender: false,
      country: false,
      skills: false,
    };

    if (fields.fname === "") {
      errors.fname = true;
    }
    if (fields.email === "") {
      errors.email = true;
    }
    if (fields.country === "") {
      errors.country = true;
    }
    if (fields.gender === "") {
      errors.gender = true;
    }
    if (fields.skills.length === 0) {
      errors.skills = true;
    }

    if (Object.values(errors).some((error) => error === true)) {
      setErrorFields(errors);
      return false;
    }

    return true;
  };

  //Validation on onBlur() solution
  const isFormValidOnBlur = (event) => {
    const { name, value } = event.target;
    let error = false;

    if (name === "fname" && value === "") {
      error = true;
    } else if (
      name === "email" &&
      (value === "" ||
        !/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
          value
        ))
    ) {
      error = true;
    } else if (name === "gender" && value === "") {
      error = true;
    } else if (name === "country" && value === "") {
      error = true;
    }


    setErrorFields((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit} className="container" noValidate="off ">
        <div className="sub-container">
          <div className="title">
            <h1>Register</h1>
            <p>
              Create your account to get started. It's fast, easy, and free!
            </p>
          </div>

          <TextInput
            type="text"
            name="fname"
            id="fname"
            handleChange={handleChange}
            isFormValidOnBlur={isFormValidOnBlur}
            placeholder="John Doe"
            label="First Name"
            errorFields={errorFields}
          />

          <TextInput
            type="email"
            name="email"
            id="email"
            handleChange={handleChange}
            isFormValidOnBlur={isFormValidOnBlur}
            placeholder="example@gmail.com"
            label="Email"
            errorFields={errorFields}
          />

          <div className="input-group">
            <label htmlFor="">Gender</label>
            <div className="field">
              <RadioInput
                type="radio"
                name="gender"
                id="male"
                value="male"
                label="Male"
                handleChange={handleChange}
              />
              <RadioInput
                type="radio"
                name="gender"
                id="female"
                value="female"
                label="Female"
                handleChange={handleChange}
              />
            </div>
            {errorFields.gender && (
              <p className="danger">Gender is required!</p>
            )}
          </div>

          <div className="input-group">
            <label htmlFor="skills">Skills</label>
            <div className="field">
              <RadioInput
                type="checkbox"
                name="skills"
                id="javascript"
                value="Javascript"
                label="Javascript"
                handleChange={handleSkills}
                isFormValidOnBlur={isFormValidOnBlur}
              />
              <RadioInput
                type="checkbox"
                name="skills"
                id="Python"
                value="python"
                label="python"
                handleChange={handleSkills}
                isFormValidOnBlur={isFormValidOnBlur}
              />
              <RadioInput
                type="checkbox"
                name="skills"
                id="php"
                value="php"
                label="php"
                handleChange={handleSkills}
                isFormValidOnBlur={isFormValidOnBlur}
              />

            </div>
            {errorFields.skills && (
              <p className="danger">Skills is required!</p>
            )}
          </div>

          <SelectInput
            label="Country"
            name="country"
            id="courtry"
            handleChange={handleChange}
            isFormValidOnBlur={isFormValidOnBlur}
            errorFields={errorFields}
            options={options}
          />

          <button type="submit">Submit</button>
        </div>
      </form>
    </Fragment>
  );
};

export default App;
