import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import FileViewer from "react-file-viewer";
import "./article.css";

function Article({ title, file }) {
  const filePath = process.env.REACT_APP_HOMEPAGE + "/" + file;
  // debugger
  return (
    <Card sx={{ minWidth: "100%", minHeight: "100%", boxShadow: "none" }}>
      <CardContent>
        <Typography variant="h5" component="h2" textAlign={"center"}>
          {title}
        </Typography>
        <br />
        {/* <Typography variant="body1" color="text.secondary">
          {text}
        </Typography> */}
        <div className="file-viewer-container">
          <FileViewer
            fileType="docx"
            filePath={filePath}
            errorComponent={<div>Error</div>}
            onError={() => {}}
            style={{ width: "100%", height: "100%", overflow: "hidden" }}
          />
        </div>
      </CardContent>
    </Card>
  );
}

export default Article;
