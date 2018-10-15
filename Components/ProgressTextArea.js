/*eslint-disable*/
import React from 'react';
import { Component } from 'react';
import SVG from './SVG';
import {Grid, Typography} from '@material-ui/core/';

const styleProgress = {
  paddingTop: 6,
}

const styleSVG = {
  paddingTop: 8,
}



const TextArea = (props) => (
  <Grid container direction="row">
    <Grid item xs={2} style={styleSVG}>
      <Typography variant="body1">
        <SVG type={"check-circle"} />
      </Typography>
    </Grid>
    <Grid item xs={10} style={styleProgress}> 
      <Typography variant="body1">
        {props.progressText}
      </Typography>
    </Grid>
  </Grid>
);

export default TextArea;
