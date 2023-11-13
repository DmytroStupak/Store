import { Box } from "@mui/material";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useParams, NavLink, json } from "react-router-dom";
import { useContext } from "react";
import LoginStore from "./Login/LoginStore";
import { AppStoreContext } from "../App";

export default function ProductPage() {
  let { id } = useParams();
  let url = "C:ProgDiplomajs\frontendsrc";
  const [row, setRow] = React.useState([]);
  const [img, setImg] = React.useState("");
  const appStore = useContext(AppStoreContext);
  const store = new LoginStore(appStore.authStore);
  React.useEffect(() => {
    store.authStore.mgr.getUser().then(function (user) {
      if (user != null)
        fetch(`http://localhost:5013/identity/${id}`, {
          headers: { Authorization: `Bearer ${user.access_token}` },
        })
          .then((resp) => resp.json())
          .then((json) => {
            setRow(json);
            setImg(`../img/${json.Image}`);
          });
    });
  }, [id]);
  return (
    <Box
      sx={{
        width: "100%",
        flexGrow: 1,
        backgroundColor: "darkgrey",
        display: "flow",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
      }}
    >
      <TableContainer
        sx={{
          backgroundColor: "darkgrey",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Table sx={{ minWidth: 650, width: 1000 }} aria-label="simple table">
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
              <TableCell align="center" sx={{ fontWeight: "bold" }}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableCell>
              <img
                //Prog/Diploma/js/frontend/src/img/leatherman_mut.jpeg
                recuire
                src={`${row.Image}`}
                height={400}
              />
            </TableCell>
            <TableCell align="center">{row.Name}</TableCell>
            <TableCell align="left">{row.Discription}</TableCell>
            <TableCell align="center">{row.Brand}</TableCell>
            <TableCell align="center">{row.Cost} UAH</TableCell>
          </TableBody>
        </Table>
      </TableContainer>
      <div align="center">
        <Button
          variant="contained"
          component={NavLink}
          to={`/products`}
          color="button"
          style={{ margin: 20 }}
        >
          Back
        </Button>
      </div>
    </Box>
  );
}
