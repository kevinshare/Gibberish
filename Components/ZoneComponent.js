/*eslint-disable*/
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {Paper, Grid, Typography} from '@material-ui/core/';
import DropZone from './DropZone';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  topBox: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
  },
  bottomBox: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    fontSize: '12px',
    fontWeight: '100',
  },
  or: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '15px',
    fontWeight: '100',
  },
});

const style = {
  display: 'flex',
  flexBasis: '45%',
  backgroundColor: 'rgba(225, 225, 225, 0.5)',
  alignContent: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'dotted 1px',
  borderRadius: '8px',
  minHeight: '50px',
  fontSize: '12px',
  fontWeight: '100',
  transition: 'all 0.3s',
}

const style2 = {
  display: 'flex',
  flexBasis: '45%',
  backgroundColor: 'rgba(225, 225, 225, 0.99)',
  alignContent: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'dotted 1px',
  borderColor: '#19BED8',
  borderRadius: '8px',
  minHeight: '50px',
  fontSize: '12px',
  fontWeight: '100',
  transition: 'all 0.3s',
}

const styleB = {
  display: 'flex',
  backgroundColor: 'rgba(225, 225, 225, 0.5)',
  alignContent: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'dotted 1px',
  borderRadius: '8px',
  minHeight: '50px',
  marginTop: '2%',
  transition: 'all 0.3s',
}

const styleB2 = {
  display: 'flex',
  backgroundColor: 'rgba(225, 225, 225, 0.99)',
  alignContent: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'dotted 1px',
  borderColor: '#19BED8',
  borderRadius: '8px',
  minHeight: '50px',
  marginTop: '2%',
  transition: 'all 0.3s',
}

class DropZoneContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      styleTop: style,
      styleTop2: style,
      styleBottom: styleB,
      styleTopDisable: false,
      styleTop2Disable: false,
      styleBottomDisable: false,
    }
  }
  mouseOver = (target, style) => {
    if (this.state[`${target}Disable`] === false) {
      this.setState({
        [target]: style,
      })
    }
  }
  mouseOff = (target, style) => {
    if (this.state[`${target}Disable`] === false) {
      this.setState({
        [target]: style,
      })
    }
  }
  handleDisable = (disableTitle) => {
    this.setState({
      [disableTitle]: !this.state[disableTitle],
    })
  }
  render() {
  const { classes } = this.props;
    return (
      <Grid container direction="column">
        <Grid item>
          <Grid container direction="row" >
            <Grid item 
              style={this.state.styleTop} 
              className={classes.topbox}
              onMouseEnter={() => this.mouseOver('styleTop', style2)}
              onMouseLeave={() => this.mouseOff('styleTop', style)} 
            >
              <DropZone 
                title={'Decision Table'} 
                description={'Drag and drop or click here'}
                returnDisableState={this.handleDisable}
                disableLabel={'styleTopDisable'}
              />
            </Grid>
            <Grid item className={classes.or} style={{flexBasis: '10%'}}>
              <Typography align="center" variant="body1">
                OR
              </Typography>
            </Grid>
            <Grid item 
              style={this.state.styleTop2} 
              className={classes.topbox}
              onMouseEnter={() => this.mouseOver('styleTop2', style2)}
              onMouseLeave={() => this.mouseOff('styleTop2', style)} 
            >
              <DropZone 
                title={'Business Template'}
                description={'Drag and drop or click here'}
                returnDisableState={this.handleDisable}
                disableLabel={'styleTop2Disable'}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="row" style={{paddingBottom: '10%'}}>
            <Grid item xs={12} 
              style={this.state.styleBottom} 
              className={classes.bottomBox}
              onMouseEnter={() => this.mouseOver('styleBottom', styleB2)}
              onMouseLeave={() => this.mouseOff('styleBottom', styleB)} 
            >
              <DropZone 
                title={'Cucumber Feature File'} 
                description={'Drag and drop or click here'}
                returnDisableState={this.handleDisable}
                disableLabel={'styleBottomDisable'}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(DropZoneContainer);
