import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Paper, Typography } from "@mui/material";

export default function Student() {
  const paperStyle = { padding: "50px 20px", width: 600, margin: "20px auto" };
  return (
    <form>
      <Paper elevation={3} style={paperStyle}>
        <Typography variant="h4" sx={{ color: "blue", fontWeight: "bold" }}>
          Add Student
        </Typography>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            fullWidth
          />
          <TextField
            id="outlined-basic"
            label="Address"
            variant="outlined"
            fullWidth
          />
        </Box>
      </Paper>
    </form>
  );
}
