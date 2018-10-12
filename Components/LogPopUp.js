/*eslint-disable*/
import { Modal, Typography, Button } from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';
import React, { Component } from 'react';
import SVG from './SVG';


function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: 'rgb(225, 225, 225, 0.7)',
    padding: theme.spacing.unit * 4,
    overflow: 'scroll',
    maxHeight: '60%',
    minWidth: '50%'
  },
});

class SimpleModal extends Component {

  render() {
    console.log(this.props.open)
    const { classes } = this.props;

    return (
      <div > 
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.props.open}
          onClose={() => this.props.handler('Build and deploy your Rules!')}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Button
              style={{
                position: 'fixed', 
                zIndex: 500, 
                top: 5, 
                right: 5, 
              }}
              onClick={(e) => this.props.handler('Build and deploy your Rules!', e)}
              color="rgb(225, 225, 225, 0.9)"
              className="3"
              size="small"
            >
              <SVG style={{ fontColor: 'red', color: 'red' }} type={'times'}/> 
            </Button>
            <Typography variant="h6" id="modal-title">
              {this.props.log}
            </Typography>
          </div>
        </Modal>
      </div>
    );
  }
}
export default withStyles(styles)(SimpleModal);
