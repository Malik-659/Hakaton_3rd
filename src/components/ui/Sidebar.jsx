import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../store/comments/commentSlice";
import { checkUserLogin, logout } from "../../helpers/function";
import { Link } from "react-router-dom";
import HelpIcon from "@mui/icons-material/Help";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import PublicIcon from "@mui/icons-material/Public";
import HandshakeIcon from "@mui/icons-material/Handshake";
import LogoutIcon from "@mui/icons-material/Logout";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import LoginIcon from "@mui/icons-material/Login";
import HouseIcon from "@mui/icons-material/House";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import logo from "../../assets/icons/redux-removebg-preview.png";
import TelegramIcon from "@mui/icons-material/Telegram";

const Sidebar = () => {
  const { sidebar } = useSelector((state) => state.comments);
  const dispatch = useDispatch();
  return (
    <div>
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={() => dispatch(toggleSidebar())}
        onKeyDown={() => dispatch(toggleSidebar())}
      >
        <img src={logo} alt="logo" className="w-48 h-48 ml-6 -mb-16" />
        <List sx={{ position: "fixed", paddingTop: 43 }}>
          {["Lesson"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton component={Link} to={`/${text.toLowerCase()}`}>
                <ListItemIcon>
                  {index % 2 == 0 ? <AutoStoriesIcon /> : <PublicIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <List sx={{ position: "fixed", paddingTop: 13 }}>
          {["Tenders", "Help", "Organizations", "Map"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton component={Link} to={`/${text.toLowerCase()}`}>
                <ListItemIcon>
                  {index % 2 == 0 ? <HelpIcon /> : <Diversity3Icon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem key="Telegram" disablePadding>
            <ListItemButton
              component="a"
              href="https://web.telegram.org/k/#@ReduxGosZap_Bot"
              target="_blank"
            >
              <ListItemIcon>
                <TelegramIcon />
              </ListItemIcon>
              <ListItemText primary="Telegram" />
            </ListItemButton>
          </ListItem>
        </List>

        {checkUserLogin() ? (
          <List sx={{ position: "fixed", bottom: 80 }}>
            {["logout"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton
                  component={Link}
                  to={
                    text.toLowerCase() === "logout"
                      ? "#"
                      : `/${text.toLowerCase()}`
                  }
                  onClick={
                    text.toLowerCase() === "logout" ? () => logout() : null
                  }
                >
                  <ListItemIcon>
                    {index % 2 === 0 ? <LogoutIcon /> : <HowToRegIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        ) : (
          <List sx={{ position: "fixed", bottom: 80 }}>
            {["Register", "Login"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton component={Link} to={`/${text.toLowerCase()}`}>
                  <ListItemIcon>
                    {index % 2 === 0 ? <HowToRegIcon /> : <LoginIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        )}
      
      </Box>
    </div>
  );
};

export default Sidebar;
