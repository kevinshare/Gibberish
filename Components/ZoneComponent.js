/*eslint-disable*/
import { withStyles } from '@material-ui/core/styles';
import {Paper, Grid, Typography} from '@material-ui/core/';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  topBox: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  bottomBox: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: '12px',
    fontWeight: '100',
  },
  or: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    fontSize: '15px',
    fontWeight: '100',
  },
});

const style = {
  display: 'flex',
  backgroundColor: 'rgba(225, 225, 225, 0.5)',
  textAlign: 'center',
  alignContent: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'dotted 1px',
  borderRadius: '8px',
  minHeight: '50px',
  fontSize: '12px',
  fontWeight: '100',
}
const styleB = {
  display: 'flex',
  backgroundColor: 'rgba(225, 225, 225, 0.5)',
  textAlign: 'center',
  alignContent: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'dotted 1px',
  borderRadius: '8px',
  minHeight: '50px',
}
const DropZoneContainer = (props) => {
  const { classes } = props;
  return (
      <div className={classes.root}>
        <Grid container spacing={16}>
          <Grid item xs={12}>
            <Grid container >
                <Grid item style={{flexBasis: '45%'}}>
                  <div style={style} className={classes.topbox} id="topBoxes"> 
                    <Typography variant="body1">
                      Decision Table
                    </Typography>
                  </div>
                </Grid>
                <Grid item className={classes.or} style={{flexBasis: '10%'}}>
                  <Typography variant="body1">
                    OR
                  </Typography>
                </Grid>
                <Grid item style={{flexBasis: '45%'}}>
                  <div style={style} className={classes.topbox}  id="topBoxes">
                    <Typography variant="body1">
                      Business Template
                    </Typography>
                  </div> 
                </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <div style={styleB} className={classes.bottomBox}  id="bottomBox">
              <Typography variant="body1">
                Cucumber Feature File
              </Typography>
            </div> 
          </Grid>
        </Grid>
      </div>
  );
}

export default withStyles(styles)(DropZoneContainer);
