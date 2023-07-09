
import "./Lessons.css";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import Article from "../Article/article";
// import { IconButton } from '@mui/material';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { BrowserView, isMobile } from "react-device-detect";

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

function Lessons() {
  const [dense, setDense] = React.useState(false);
  // const [secondary, setSecondary] = React.useState(false);
  const [article, setArticle] = React.useState(null);

  //   const df = isMobile();
  //   debugger;

  return (
    <div className="list">
      {!article && (
        <Box
          sx={{
            flexGrow: 1,
            ...(isMobile ? { maxWidth: 752 } : { width: 752 }),
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                Selecteaza o lectie pentru a invata
              </Typography>
              <Demo>
                <List dense={dense}>
                  {/* {generate( */}
                  <ListItem
                    onClick={() =>
                      setArticle({
                        title: "Limba si literatura romana",
                        text: "texxhgchjvmhvmvmv ihdfsg rgdfg dfg df gdf g dr g retg er ger ge  gre t",
                      })
                    }
                  >
                    <ListItemAvatar>
                      <Avatar>
                        <FolderIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Limba si literatura romana"
                      secondary={"2 lectii"}
                    />
                  </ListItem>
                  <ListItem
                    onClick={() =>
                      setArticle({
                        title: "Matematica",
                        text: "texxhgchjvmhvmvmv ihdfsg rgdfg dfg df gdf g dr g retg er ger ge  gre t",
                      })
                    }
                  >
                    <ListItemAvatar>
                      <Avatar>
                        <FolderIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Matematica" secondary={"5 lectii"} />
                  </ListItem>
                  <ListItem
                    onClick={() =>
                      setArticle({
                        title: "Geografie",
                        text: "texxhgchjvmhvmvmv ihdfsg rgdfg dfg df gdf g dr g retg er ger ge  gre t",
                      })
                    }
                  >
                    <ListItemAvatar>
                      <Avatar>
                        <FolderIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Geografie" secondary={"3 lectii"} />
                  </ListItem>
                  <ListItem
                    onClick={() =>
                      setArticle({
                        title: "Engleza",
                        text: "texxhgchjvmhvmvmv ihdfsg rgdfg dfg df gdf g dr g retg er ger ge  gre t",
                      })
                    }
                  >
                    <ListItemAvatar>
                      <Avatar>
                        <FolderIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Engleza" secondary={"3 lectii"} />
                  </ListItem>
                  <ListItem
                    onClick={() =>
                      setArticle({
                        title: "Stiintele naturii",
                        text: "texxhgchjvmhvmvmv ihdfsg rgdfg dfg df gdf g dr g retg er ger ge  gre t",
                      })
                    }
                  >
                    <ListItemAvatar>
                      <Avatar>
                        <FolderIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Stiintele naturii"
                      secondary={"3 lectii"}
                    />
                  </ListItem>
                  <ListItem
                    onClick={() =>
                      setArticle({
                        title: "Franceza",
                        text: "texxhgchjvmhvmvmv ihdfsg rgdfg dfg df gdf g dr g retg er ger ge  gre t",
                      })
                    }
                  >
                    <ListItemAvatar>
                      <Avatar>
                        <FolderIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Franceza" secondary={"3 lectii"} />
                  </ListItem>
                  {/* )} */}
                </List>
              </Demo>
            </Grid>
          </Grid>
        </Box>
      )}
      {article && (
        <div className="article">

          <IconButton onClick={() => setArticle(null)}>
             <ArrowBackIcon />
            <p> Inapoi</p>
          </IconButton>

          <Article text={article.text} title={article.title} />
        </div>
      )}
    </div>
  );
}

export default Lessons;
