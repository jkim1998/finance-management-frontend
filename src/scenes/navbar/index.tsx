import { useState } from "react";
import { Link } from "react-router-dom";
import PixIcon from "@mui/icons-material/Pix";
import { Box, Typography, useTheme, Button } from "@mui/material";
import FlexBetween from "@/components/FlexBetween";
import MenuIcon from "@mui/icons-material/Menu";

type Props = {
  onToggleSidebar: () => void;
};

const Navbar = ({ onToggleSidebar }: Props) => {
  const { palette } = useTheme();
  const [selected, setSelected] = useState("dashboard");

  const togglesidebar = () => onToggleSidebar();

  return (
    <Box sx={{}}>
      <FlexBetween p="0.5rem 0rem" color={palette.grey[300]}>
        {/* LEFT SIDE */}
        <FlexBetween gap="0.75rem">
          <Button onClick={() => togglesidebar()}>
            <MenuIcon />
          </Button>
          <PixIcon sx={{ fontSize: "28px" }} />
          <Typography variant="h4" fontSize="16px">
            Finanseer
          </Typography>
        </FlexBetween>

        {/* RIGHT SIDE */}
        <FlexBetween gap="2rem" paddingRight="0.75rem">
          <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
            <Link
              to="/"
              onClick={() => setSelected("dashboard")}
              style={{
                color: selected === "dashboard" ? "inherit" : palette.grey[700],
                textDecoration: "inherit",
              }}
            >
              dashboard
            </Link>
          </Box>
          <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
            <Link
              to="/predictions"
              onClick={() => setSelected("predictions")}
              style={{
                color:
                  selected === "predictions" ? "inherit" : palette.grey[700],
                textDecoration: "inherit",
              }}
            >
              predictions
            </Link>
          </Box>
          <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
            <Link
              to="/plaid"
              onClick={() => setSelected("plaid")}
              style={{
                color:
                  selected === "plaid" ? "inherit" : palette.grey[700],
                textDecoration: "inherit",
              }}
            >
              plaid
            </Link>
          </Box>
        </FlexBetween>
      </FlexBetween>
    </Box>
  );
};

export default Navbar;
