import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import axios from "axios";
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  heading:{
    marginTop: 20
  },
  formDesign:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  }
});

const Comments = () => {
  const classess = useStyles();

  const [comments, setComments] = useState([]);
  const [searchComments, setSearchComments] = useState('');

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments")
      .then((result) => setComments(result.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
    <Typography variant="h5" align="center" className={classess.heading}>Todo Comments</Typography>
    <form className={classess.formDesign}>
            <input
              type="text"
              className="search-input"
              placeholder="Search Todo"
              onChange={(e) => setSearchComments(e.target.value)}
            />
          </form>
      <TableContainer>
        <Table className={classess.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Id</TableCell>
              <TableCell align="center">Post Id</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Body</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {comments.filter((item) => {
                return searchComments.toLowerCase() === "" ? item : item.name.toLowerCase().includes(searchComments)
            }).map((comment) => (
              <TableRow key={comment.id}>
                <TableCell component="th" scope="row">
                  {comment.id}
                </TableCell>
                <TableCell align="right">{comment.postId}</TableCell>
                <TableCell align="right">{comment.name}</TableCell>
                <TableCell align="right">{comment.email}</TableCell>
                <TableCell align="right">{comment.body}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Comments;
