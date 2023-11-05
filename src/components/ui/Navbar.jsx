import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import logo from "../../assets/icons/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../store/comments/commentSlice";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Navbar = () => {
  const { sidebar } = useSelector((state) => state.comments);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{ background: "#230571", color: "white" }}
        >
          <Toolbar>
            <React.Fragment>
              <Button onClick={() => dispatch(toggleSidebar())}>
                <IconButton
                  size="large"
                  edge="start"
                  aria-label="open drawer"
                  sx={{ mr: 2, color: "white" }}
                >
                  <MenuIcon />
                </IconButton>
              </Button>
              <Drawer open={sidebar} onClose={() => dispatch(toggleSidebar())}>
                <Sidebar />
              </Drawer>
            </React.Fragment>
            <img
              onClick={() => {
                navigate("/");
              }}
              className="w-36 h-18 mr-4 cursor-pointer"
              src={logo}
              alt="logo"
            />
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            ></Typography>
          </Toolbar>
        </AppBar>
      </Box>
      {sidebar && <Sidebar />}
    </>
  );
};

export default Navbar;
