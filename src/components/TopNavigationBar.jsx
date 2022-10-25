import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: 20,
  },
  title: {
    flexGrow: 1,
  },
});

const TopNavigationBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          ></IconButton>
          <Typography variant="h6" className={classes.title}>
            Todo's
          </Typography>

          <Button color="inherit">
            <Link
              to="/"
              underline="none"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              Dashboard
            </Link>
          </Button>

          <Button color="inherit">
            <Link
              to="/socket"
              underline="none"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              Socket Chat
            </Link>
          </Button>

          <Button color="inherit">
            <Link
              to="/todos"
              underline="none"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              Todo
            </Link>
          </Button>

          <Button color="inherit">
            {" "}
            <Link
              to="/comments"
              underline="none"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              {" "}
              Comments
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default TopNavigationBar;
