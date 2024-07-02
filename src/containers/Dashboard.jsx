import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Paper,
  Slide,
  Stack,
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
  margin: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ListItem = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  margin: theme.spacing(1),
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

function FormListRow() {
  return (
    <React.Fragment>
      <Grid listItem xs={0}>
        <ListItem>
          {" "}
          <Card sx={{ display: "flex" }}>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image="../../public/img/download.jpeg"
              alt="Live from space album cover"
            />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto", marginLeft: 80 }}>
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
        </ListItem>
      </Grid>
      <Grid listItem xs={0}>
        <ListItem>
          {" "}
          <Card sx={{ display: "flex" }}>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image="../../public/img/download.jpeg"
              alt="Live from space album cover"
            />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto", marginLeft: 80 }}>
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
        </ListItem>
      </Grid>
      <Grid listItem xs={0}>
        <ListItem>
          {" "}
          <Card sx={{ display: "flex" }}>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image="../../public/img/download.jpeg"
              alt="Live from space album cover"
            />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto", marginLeft: 80 }}>
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
        </ListItem>
      </Grid>
      <Grid listItem xs={0}>
        <ListItem>
          {" "}
          <Card sx={{ display: "flex" }}>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image="../../public/img/download.jpeg"
              alt="Live from space album cover"
            />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto", marginLeft: 80 }}>
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
        </ListItem>
      </Grid>
    </React.Fragment>
  );
}

const Dashboard = () => {
  const [userData, setUserData] = useState();
  const [userViwe, setUserviwe] = useState(0);
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

  const listView = () => {
    console.log("LLL");
    setUserviwe(1);
  };

  const gridView = () => {
    setUserviwe(0);
  };

  return (
    <Container maxWidth="full">
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
      <Stack>
        {userViwe === 0 ? (
          <>
            <div id="btnContainer">
              <button className="btn active" onClick={gridView}>
                <i className="fa fa-th-large"></i> Grid
              </button>
              <button className="btn active" onClick={listView}>
                <i className="fa fa-bars"></i> List
              </button>
            </div>
            <Box sx={{ flexGrow: 1, width: "100%" }}>
              <Grid spacing={2} margin={2}>
                <Grid
                  container
                  item
                  spacing={1}
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <FormRow />
                </Grid>
                <Grid
                  container
                  item
                  spacing={1}
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <FormRow />
                </Grid>
                <Grid
                  container
                  item
                  spacing={1}
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <FormRow />
                </Grid>
                <Grid
                  container
                  item
                  spacing={1}
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <FormRow />
                </Grid>
              </Grid>
            </Box>
          </>
        ) : (
          <>
            <div id="btnContainer">
              <button className="btn active" onClick={gridView}>
                <i className="fa fa-th-large"></i> Grid
              </button>
              <button className="btn active" onClick={listView}>
                <i className="fa fa-bars"></i> List
              </button>
            </div>
            <Box sx={{ flexGrow: 1, width: "100%" }}>
              <Grid spacing={2} margin={2}>
                <Grid container listItem spacing={1} sx={{ display: "block" }}>
                  <FormListRow />
                </Grid>
                <Grid container listItem spacing={1} sx={{ display: "block" }}>
                  <FormListRow />
                </Grid>
                <Grid container listItem spacing={1} sx={{ display: "block" }}>
                  <FormListRow />
                </Grid>
                <Grid container listItem spacing={1} sx={{ display: "block" }}>
                  <FormListRow />
                </Grid>
              </Grid>
            </Box>
          </>
        )}
      </Stack>
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
    </Container>
  );
};

export default Dashboard;
