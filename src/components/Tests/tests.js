import { quiz } from "../../quiz";
import { quiz1 } from "../../quiz1";
import { quiz2 } from "../../quiz2";
import { quiz3 } from "../../quiz3";
import { quiz4 } from "../../quiz4";
import { quiz5 } from "../../quiz5";

import Quiz from "react-quiz-component";
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
import AssignmentIcon from "@mui/icons-material/Assignment";
import DeleteIcon from "@mui/icons-material/Delete";
import Article from "../Article/article";
// import { IconButton } from '@mui/material';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { BrowserView, isMobile } from "react-device-detect";
// import { quiz } from "../../quiz";
// import Quiz from "react-quiz-component";
import "./tests.css";

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

function Tests() {
  const [dense, setDense] = React.useState(false);
  // const [secondary, setSecondary] = React.useState(false);
  const [test, setTest] = React.useState(null);

  //   const df = isMobile();
  //   debugger;

  return (
    <div className="list">
      {!test && (
        <Box
          sx={{
            flexGrow: 1,
            ...(isMobile ? { maxWidth: 752 } : { width: 752 }),
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                Selecteaza o materie pentru a da test
              </Typography>
              <Demo>
                <List dense={dense}>
                  {/* {generate( */}
                  <ListItem onClick={() => setTest(quiz5)}>
                    <ListItemAvatar>
                      <Avatar>
                        <AssignmentIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Limba si literatura romana"
                      secondary={"5 intrebari"}
                    />
                  </ListItem>
                  <ListItem onClick={() => setTest(quiz3)}>
                    <ListItemAvatar>
                      <Avatar>
                        <AssignmentIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Matematica" secondary={"5 lectii"} />
                  </ListItem>
                  <ListItem onClick={() => setTest(quiz1)}>
                    <ListItemAvatar>
                      <Avatar>
                        <AssignmentIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Geografie"
                      secondary={"5 intrebari"}
                    />
                  </ListItem>
                  <ListItem onClick={() => setTest(quiz2)}>
                    <ListItemAvatar>
                      <Avatar>
                        <AssignmentIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Istorie" secondary={"5 intrebari"} />
                  </ListItem>
                  <ListItem onClick={() => setTest(quiz4)}>
                    <ListItemAvatar>
                      <Avatar>
                        <AssignmentIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Biologie"
                      secondary={"5 intrebari"}
                    />
                  </ListItem>
                  {/* )} */}
                </List>
              </Demo>
            </Grid>
          </Grid>
        </Box>
      )}
      {test && (
        <div className="article">
          <IconButton onClick={() => setTest(null)}>
            <ArrowBackIcon />
            <p> Inapoi</p>
          </IconButton>

          <div className="quiz">
            <Quiz className="main" quiz={test} />
          </div>
        </div>
      )}
    </div>
  );

}

export default Tests;
