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
  flexBasis: '45%',
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
  marginTop: '2%',
}
const DropZoneContainer = (props) => {
  const { classes } = props;
  return (
    <Grid container direction="column">
      <Grid item>
        <Grid container direction="row" >
          <Grid item style={style} className={classes.topbox}>
            <Typography variant="body1">
              Decision Table
            </Typography>
          </Grid>
          <Grid item className={classes.or} style={{flexBasis: '10%'}}>
            <Typography variant="body1">
              OR
            </Typography>
          </Grid>
          <Grid item style={style} className={classes.topbox}>
            <Typography variant="body1">
              Business Template
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction="row" style={{paddingBottom: '10%'}}>
          <Grid item xs={12} style={styleB} className={classes.bottomBox}>
            <Typography variant="body1">
              Cucumber Feature File
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(DropZoneContainer);
