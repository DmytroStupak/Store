import { Box, Typography, colors } from "@mui/material";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import LoginStore from "./Login/LoginStore";
import { AppStoreContext } from "../App";

export default function ProductsPage() {
  const appStore = useContext(AppStoreContext);
  const store = new LoginStore(appStore.authStore);
  const [data, setData] = React.useState([]);
  const [user, setUser] = React.useState({});
  React.useEffect(() => {
    store.authStore.mgr.getUser().then(function (user) {
      if (user != null) {
        fetch("http://localhost:5013/identity", {
          headers: { Authorization: `Bearer ${user.access_token}` },
        })
          .then((resp) => resp.json())
          .then((json) => setData(json));
        setUser(user);
      }
    });
  }, []);
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "grey",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
      }}
    >
      {(!!user.access_token && (
        <TableContainer
          component={Paper}
          sx={{
            backgroundColor: "darkgrey",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Table sx={{ minWidth: 650, width: 1300 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                  Image
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                  Name
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                  Discription
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                  Brand
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                  Cost
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontWeight: "bold" }}
                ></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">
                    <img
                      recuire
                      src={`${row.Image}`}
                      height={300}
                      align="center"
                    />
                  </TableCell>
                  <TableCell align="center">{row.Name}</TableCell>
                  <TableCell align="left">{row.Discription}</TableCell>
                  <TableCell align="center">{row.Brand}</TableCell>
                  <TableCell align="center">{row.Cost} UAH</TableCell>
                  <TableCell align="center">
                    <Button
                      variant="contained"
                      component={NavLink}
                      to={`/product/${row.Id}`}
                      color="button"
                    >
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )) || (
        <Typography variant="h3" align="center">
          You are not login
        </Typography>
      )}
    </Box>
  );
}
