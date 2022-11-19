import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import { Button, Box } from "@mui/material";
import { useFormik } from "formik";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import * as yup from "yup";

function UserEdit() {
  const param = useParams();
  const formikValidation = yup.object({
    Name: yup
      .string()
      .min(5, "Name Must Contain Min 5 characters")
      .required("Please Fill The Name"),
    Position: yup.string().required("Ur Position I the Company Please"),
    Office: yup.string().required("Please Enter The Office Name"),
    Age: yup
      .number()
      .min(18, "Ur Age Must Be greater The 18")
      .required("Please Fill the Age"),
    Startdate: yup
      .string()
      .required("Please Fill The Date That U Join In the Company"),
    Salary: yup
      .number()
      .min(1000, "Ur Salary Must Be Greater The 1000$")
      .required("Please Enter the Salary"),
  });
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
    validationSchema: formikValidation,
    onSubmit: async (value) => {
      await axios.put(
        `https://631d700ecc652771a4859a9c.mockapi.io/Users/${param.id}`,
        value
      );
      navigate("/Users");
    },
  });
  useEffect(() => {
    loadUser();
  }, []);
  let loadUser = async () => {
    try {
      let users = await axios.get(
        `https://631d700ecc652771a4859a9c.mockapi.io/Users/${param.id}`
      );
      formik.setValues({
        Name: users.data.Name,
        Position: users.data.Position,
        Office: users.data.Office,
        Age: users.data.Age,
        Startdate: users.data.Startdate,
        Salary: users.data.Salary,
      });
    } catch (error) {
      console.log("Somthing Wend Worring");
    }
  };

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
              onBlur={formik.handleBlur}
              name="Name"
              variant="outlined"
              error={formik.touched.Name && formik.errors.Name}
              helperText={
                formik.touched.Name && formik.errors.Name
                  ? formik.errors.Name
                  : null
              }
            />

            <TextField
              id="outlined-basic"
              label="Position"
              value={formik.values.Position}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="Position"
              variant="outlined"
              error={formik.touched.Position && formik.errors.Position}
              helperText={
                formik.touched.Position && formik.errors.Position
                  ? formik.errors.Position
                  : null
              }
            />

            <TextField
              id="outlined-basic"
              label="Age"
              value={formik.values.Age}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="Age"
              variant="outlined"
              error={formik.touched.Age && formik.errors.Age}
              helperText={
                formik.touched.Age && formik.errors.Age
                  ? formik.errors.Age
                  : null
              }
            />

            <TextField
              id="outlined-basic"
              label="Office"
              value={formik.values.Office}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="Office"
              variant="outlined"
              error={formik.touched.Office && formik.errors.Office}
              helperText={
                formik.touched.Office && formik.errors.Office
                  ? formik.errors.Office
                  : null
              }
            />

            <TextField
              id="standard-basic"
              label="Starting Date"
              value={formik.values.Startdate}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="Startdate"
              variant="outlined"
              error={formik.touched.Startdate && formik.errors.Startdate}
              helperText={
                formik.touched.Startdate && formik.errors.Startdate
                  ? formik.errors.Startdate
                  : null
              }
            />

            <TextField
              id="outlined-basic"
              label="Salary"
              value={formik.values.Salary}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="Salary"
              variant="outlined"
              error={formik.touched.Salary && formik.errors.Salary}
              helperText={
                formik.touched.Salary && formik.errors.Salary
                  ? formik.errors.Salary
                  : null
              }
            />

            <Button
              variant="contained"
              disabled={!formik.isValid}
              onClick={formik.handleSubmit}
            >
              Submit
            </Button>

            <Link to="/" className="btn btn-primary mt-2">
              Back
            </Link>
          </form>
        </div>
      </Box>
    </>
  );
}

export default UserEdit;
