/*eslint-disable*/
import DropZone from 'react-dropzone';
import {Grid, Typography} from '@material-ui/core/';
import React, { Component } from 'react';
import SVG from './SVG';

const style = {
  flex: 1,
  borderRadius: '8px',
  minHeight: '10%',
  paddingTop: '20px',
  cursor: 'pointer'
}

const noDropStyle = {
  fontStyle: 'italic', 
  color: 'rgb(112, 112, 112, 0.8)',
}
const fileAddedStyle = {
  color: '#19BED8', 
}

export default class DropZoneComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      disable: false,
    }
  }
  onDrop = (file) => {
    this.setState({
      file: file,
      disable: true,
    }, () => {
      localStorage.setItem(`local-${file}`, JSON.stringify(file));
      console.log(this.props.title, localStorage.getItem(`local-${file}`));
      console.log(this.state.file[0].name);
    })
  }
  handleDelete = () => {
    localStorage.removeItem(`local-${this.state.file}`);
    this.setState({
      file: null,
    })
  }

  render() {
    return (
      <Grid container direction="column" style={{position: 'relative'}}>
      {this.state.file ? 
        <div 
          style={{position:'absolute', zIndex:500, top: 5, right: 5, cursor: 'pointer'}} 
          onClick={this.handleDelete}
        >
        <SVG style={{fontColor: 'red', color: 'red'}} type={'times-circle'}/> 
        </div>        
      : 
        null
      } 
        <Grid item>
          <DropZone 
            onDrop={this.onDrop}
            accept="application/pdf, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
            multiple={false}
            style={style}
            disabled={this.state.disable}
          >
            <Grid container direction="row">
              
              <Grid item xs={12}>
                <Typography align="center" variant="body1">
                  {this.props.title}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography 
                  align="center" 
                  variant="body1" 
                  style={this.state.file ? fileAddedStyle : noDropStyle}
                >
                  {this.state.file ? this.state.file[0].name : this.props.description}
                </Typography>
              </Grid>
            </Grid>
          </DropZone>
        </Grid>
      </Grid>
    );
  }
}
