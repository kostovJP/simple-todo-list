import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

export default function TodoItem({value, labelId, handleToggle, chekboxClickHandler, deleteButtonClick}) {
  return (
    <ListItem
      key={value.id}
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => {
            deleteButtonClick(value.id);
          }}
        >
          <DeleteIcon sx={{ color: "red" }} />
        </IconButton>
      }
      disablePadding
      sx={{borderBottom: "1px solid #d3d3d3"}}
    >
      <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={value.completed}
            onClick={() => {
              chekboxClickHandler(value.id);
            }}
            tabIndex={-1}
            disableRipple
            inputProps={{ "aria-labelledby": labelId }}
          />
        </ListItemIcon>
        <ListItemText id={labelId} primary={value.title} />
      </ListItemButton>
    </ListItem>
  );
}
