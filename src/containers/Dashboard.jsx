import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Paper,
  Slide,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function FormRow() {
  return (
    <React.Fragment>
      <Grid item xs={3}>
        <Item>
          {" "}
          <Card sx={{ display: "flex" }}>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image="../../public/img/download.jpeg"
              alt="Live from space album cover"
            />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5">
                  iphone 14
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  launched
                </Typography>
              </CardContent>
            </Box>
          </Card>
        </Item>
      </Grid>
      <Grid item xs={3}>
        <Item>
          {" "}
          <Card sx={{ display: "flex" }}>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image="../../public/img/download.jpeg"
              alt="Live from space album cover"
            />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5">
                  iphone 14
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  launched
                </Typography>
              </CardContent>
            </Box>
          </Card>
        </Item>
      </Grid>
      <Grid item xs={3}>
        <Item>
          {" "}
          <Card sx={{ display: "flex" }}>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image="../../public/img/download.jpeg"
              alt="Live from space album cover"
            />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5">
                  iphone 14
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  launched  
                </Typography>
              </CardContent>
            </Box>
          </Card>
        </Item>
      </Grid>
      <Grid item xs={3}>
        <Item>
          {" "}
          <Card sx={{ display: "flex" }}>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image="../../public/img/download.jpeg"
              alt="Live from space album cover"
            />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5">
                  iphone 14
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  launched
                </Typography>
              </CardContent>
            </Box>
          </Card>
        </Item>
      </Grid>
    </React.Fragment>
  );
}

const Dashboard = () => {
  const [userData, setUserData] = useState();
  const [open, setOpen] = useState(false);
  const login_redirect = useNavigate();

  console.log("userData", userData);

  const hendalLogout = () => {
    login_redirect("/Login");
    localStorage.clear();
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("loginUserData"));
    console.log(data);
    setUserData(data[0].first_name);
  }, []);

  return (
    <>
      <Box sx={{ flexGrow: 1, width: "100%" }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <img src="https://placehold.co/200x100?text=LOGO" alt="" />
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <Box>Hello, {userData}</Box>
              <Button onClick={handleClickOpen} color="inherit">
                Log out
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid container item spacing={3}>
            <FormRow />
          </Grid>
          <Grid container item spacing={3}>
            <FormRow />
          </Grid>
          <Grid container item spacing={3}>
            <FormRow />
          </Grid>
          <Grid container item spacing={3}>
            <FormRow />
          </Grid>
        </Grid>
      </Box>
      <React.Fragment>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>{"Use Google's location service?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              Are you sure you wants to logout ?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>No</Button>
            <Button onClick={hendalLogout}>Yes</Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    </>
  );
};

export default Dashboard;
