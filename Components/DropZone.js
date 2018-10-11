/*eslint-disable*/
import DropZone from 'react-dropzone';
import {Grid, Typography} from '@material-ui/core/';
import React, { Component } from 'react';

const style = {
  flex: 1,
  borderRadius: '8px',
  minHeight: '10%',
  paddingTop: '20px'

}

export default class DropZoneComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
    }
    this.onDrop = this.onDrop.bind(this);
  }
  onDrop = (file) => {
    this.setState({
      file: file,
    }, () => {
      localStorage.setItem(`local-${file}`, JSON.stringify(file));
      console.log(this.props.title, localStorage.getItem(`local-${file}`));
    })
  }
  render() {
    return (
      <DropZone 
        onDrop={this.onDrop}
        accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
        multiple={false}
        style={style}
      >
        <Typography align="center" variant="body1">
          {this.props.title}
        </Typography>
      </DropZone>
    );
  }
}

// application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel, application/text, 
