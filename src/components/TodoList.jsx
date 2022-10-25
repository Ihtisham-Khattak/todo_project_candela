import React, { useState, useEffect } from "react";
import "./TodoList.css";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Button } from "@material-ui/core";
import axios from "axios";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  formDesign: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  buttonDesign:{
    marginTop: 10
  }
});

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((results) => setTodos(results.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const classes = useStyles();

  return (
    <>
      <h2 style={{ textAlign: "center" }}>Todo Using Json Placeholder</h2>

      <form className={classes.formDesign}>
        <input
          type="text"
          className="search-input"
          placeholder="Search Todo"
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <Button color="inherit" className={classes.buttonDesign}>
            <Link
              to="/user"
              varient="contained"
              color="secondary"
              style={{ textDecoration: "none", color: "#3F51B5" }}
            >
              User Info
            </Link>
          </Button>
      {/* <ToggleUser /> */}

      <TableContainer>
        <Table className={classes.table} sx={{ minWidth: 500 }}>
          <TableHead>
            <TableRow>
              <TableCell algin="center">ID</TableCell>
              <TableCell algin="center">Title</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {todos
              .filter((item) => {
                return search.toLowerCase === " "
                  ? item
                  : item.title.toLowerCase().includes(search);
              })
              .map((todo) => (
                <TableRow key={todo.id}>
                  <TableCell component="th" scope="row">
                    {todo.id}
                  </TableCell>
                  <TableCell align="left">{todo.title}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TodoList;
