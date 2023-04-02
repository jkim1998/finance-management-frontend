import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Typography,
  useTheme,
  Button,
  List,
  ListItem,
} from "@mui/material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

type Props = {};

const Sidebar = () => {
  const { palette } = useTheme();
  const [selected, setSelected] = useState("dashboard");

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "auto",
          width: "10vw",
          border: "1px solid black",
        }}
      >
        <List>
          <ListItem>
            <Button>
              <AccountBalanceIcon />
            </Button>
          </ListItem>
          <ListItem>
            <Button>
              <AccountBalanceIcon />
            </Button>
          </ListItem>
          <ListItem>
            <Button>
              <AccountBalanceIcon />
            </Button>
          </ListItem>
        </List>
      </Box>
    </>
  );
};

export default Sidebar;
