import { Box, Container, Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CardCreater from "../CardCreater";

function DashBoard() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    loadData();
  }, []);

  let loadData = async () => {
    let user = await axios.get(
      "https://631d700ecc652771a4859a9c.mockapi.io/Users"
    );
    setUsers(user.data);
  };
  let deleteStudent = async (id) => {
    let user = await axios.delete(
      `https://631d700ecc652771a4859a9c.mockapi.io/Users/${id}`
    );
    loadData();
  };
  return (
    <div>
      <Container className="container" minwidth="sm">
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 12, md: 12 }}
          >
            {users.map((users) => {
              return (
                <Grid key={users.id} item xs={3} sm={12} md={3}>
                  <CardCreater
                    deleteStudent={deleteStudent}
                    data={users}
                    id={users.id}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default DashBoard;
