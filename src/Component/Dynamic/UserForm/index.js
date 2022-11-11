import React from "react";
import TextField from "@mui/material/TextField";
import { Button, InputLabel, Box } from "@mui/material";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UserForm() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      Name: "",
      Position: "",
      Office: "",
      Age: "",
      Startdate: "",
      Salary: "",
    },
    validate: (values) => {
      let error = {};
      if (values.Name === "") {
        error.Name = "Please Enter Name";
      }
      if (values.Name.length < 4) {
        error.Name = "Name length Should Greater 5 ";
      }
      if (values.Position === "") {
        error.Position = "Please Enter Position";
      }
      if (values.Office === "") {
        error.Office = "Please Enter Office Name";
      }
      return error;
    },
    onSubmit: async (values) => {
      let user = await axios.post(
        "https://631d700ecc652771a4859a9c.mockapi.io/Users",
        values
      );
      navigate("/Users");
    },
  });
  return (
    <>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <div className="col-lg-6 col-md-8 col-sm-12 m-auto">
          <form className="d-flex flex-column">
            <TextField
              id="outlined-basic"
              label="Name"
              value={formik.values.Name}
              onChange={formik.handleChange}
              name="Name"
              variant="outlined"
            />
            <span style={{ color: "red" }}>{formik.errors.Name}</span>
            <TextField
              id="outlined-basic"
              label="Position"
              value={formik.values.Position}
              onChange={formik.handleChange}
              name="Position"
              variant="outlined"
            />
            <span style={{ color: "red" }}>{formik.errors.Position}</span>
            <TextField
              id="outlined-basic"
              label="Age"
              value={formik.values.Age}
              onChange={formik.handleChange}
              name="Age"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Office"
              value={formik.values.Office}
              onChange={formik.handleChange}
              name="Office"
              variant="outlined"
            />
            <span style={{ color: "red" }}>{formik.errors.Office}</span>
            <InputLabel>Starting Date:</InputLabel>
            <TextField
              id="standard-basic"
              type="date"
              value={formik.values.Startdate}
              onChange={formik.handleChange}
              name="Startdate"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Salary"
              value={formik.values.Salary}
              onChange={formik.handleChange}
              name="Salary"
              variant="outlined"
            />
            <Button
              variant="contained"
              disabled={!formik.isValid}
              onClick={formik.handleSubmit}
            >
              Submit
            </Button>
          </form>
        </div>
      </Box>
    </>
  );
}

export default UserForm;
