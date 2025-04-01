import React from "react";
import { Dialog, DialogTitle, DialogContent, List, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

interface DialogBoxProps {
  open: boolean;
  onClose: () => void;
}

const DialogBox: React.FC<DialogBoxProps> = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Navigation</DialogTitle>
      <DialogContent>
        <List>
          <ListItem component={Link} to="/" onClick={onClose}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem component={Link} to="/about" onClick={onClose}>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem component={Link} to="/contact" onClick={onClose}>
            <ListItemText primary="Contact" />
          </ListItem>
          <ListItem component={Link} to="/directory" onClick={onClose}>
            <ListItemText primary="Directory" />
          </ListItem>
        </List>
      </DialogContent>
    </Dialog>
  );
};

export default DialogBox;
