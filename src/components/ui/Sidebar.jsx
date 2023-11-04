import * as React from "react";
import Box from "@mui/material/Box";

import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../store/comments/commentSlice";
import { checkUserLogin, logout } from "../../helpers/function";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { sidebar } = useSelector((state) => state.comments);
  const dispatch = useDispatch();
  return (
    <div className={sidebar ? "block" : "hidden"}>
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={() => dispatch(toggleSidebar())}
        onKeyDown={() => dispatch(toggleSidebar())}
      >
        <List sx={{ position: "fixed", paddingTop: 4 }}>
          {["Tenders", "Map", "Organizations"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton component={Link} to={`/${text.toLowerCase()}`}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        {checkUserLogin() ? (
          <List sx={{ position: "fixed", bottom: 80 }}>
            {["Logout"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton
                  component={Link}
                  to={
                    text.toLowerCase() === "logout"
                      ? () => logout()
                      : `/${text.toLowerCase()}`
                  }
                >
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
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
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
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
