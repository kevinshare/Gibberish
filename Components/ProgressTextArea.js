/*eslint-disable*/
import React from 'react';
import { Component } from 'react';
import SVG from './SVG';
import {Grid, Typography} from '@material-ui/core/';

const styleProgress = {
  padding: '2%',
}


const TextArea = (props) => (
  <Grid container direction="row">
    <Grid item style={styleProgress}>
        <Typography variant="body1">
          <SVG type={"check-circle"} /> {props.progressText}
        </Typography>
    </Grid>
  </Grid>
);

export default TextArea;
