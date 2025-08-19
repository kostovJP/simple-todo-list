import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Fab from "@mui/material/Fab";
import EditIcon from "@mui/icons-material/Edit";

export default function Navbar({form_state}) {
    const handleClickFab = () => {
        form_state((prev) => !prev);
    }
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            TODO LIST
          </Typography>
          <Fab color="transparent" aria-label="edit" 
            size="medium"
            onClick={handleClickFab}
          >
            <EditIcon />
          </Fab>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
