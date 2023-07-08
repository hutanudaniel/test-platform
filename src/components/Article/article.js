import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

function Article({ title, text }) {
  return (
    <Card sx={{ minWidth: "100%", minHeight: "100%", boxShadow: "none" }}>
      <CardContent>
        <Typography variant="h5" component="h2" textAlign={'center'}>
          {title}
        </Typography>
        <br/>
        <Typography variant="body1" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Article;