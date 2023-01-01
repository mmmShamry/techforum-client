import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import "./style.css";

const Navigation = () => {
  return (
    <div className="sidebar">
      <List>
        <Link  style={{textDecoration: 'none'}}  to="/questions">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <QuestionAnswerIcon />
              </ListItemIcon>
              <ListItemText 
              disableTypography
              primary={<Typography style={{ color: 'black', fontWeight : 700 }}>Questions</Typography>}/>
            </ListItemButton>
          </ListItem>
        </Link>
        <Link style={{textDecoration: 'none'}} to="/tags">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LocalOfferIcon />
              </ListItemIcon>
              <ListItemText 
              disableTypography
              primary={<Typography style={{ color: 'black', fontWeight : 700 }}>Tags</Typography>}/>
            </ListItemButton>
          </ListItem>
        </Link>

        <Link style={{textDecoration: 'none'}}  to="/users">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PeopleAltIcon />
              </ListItemIcon>
              <ListItemText 
              disableTypography
              primary={<Typography style={{ color: 'black', fontWeight : 700 }}>Users</Typography>}/>
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </div>
  );
};

export default Navigation;
