/*eslint-disable*/  
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import {Grid, Typography} from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import ProgressTextArea from './ProgressTextArea';
const styles = {
  palette: {
    primary: '#19BED8',
    secondary: '#19BED8',
  },
  raisedButton: {
    primary: '#19BED8',
  }
};

const styleLabel = {
  minHeight: '70px',
  borderLeft: '90px',
  color: 'white'
}

const stepperStyle = {
  paddingTop: 0,
  paddingBottom: 10,
  borderLeft: 'rgba(225, 225, 225, 0.3)',
}

const contentStyle ={
  paddingBottom: '1%',
  minHeight: '40%'
}

const svgStyle = {
  marginLeft: '10%',
}

const StepperComponent = (props) => {
  const { classes } = props;
  return (
      <Stepper style={stepperStyle} orientation="vertical">
        <Step completed={true} key={props.index}>
          <StepLabel 
            className={classes.label}
            style={styleLabel} 
            icon={props.index + 1}
            active={true} 
            completed={false}
          >
            <Typography style={{fontSize: '18px'}}variant="title">
              {props.label}
            </Typography>
          </StepLabel>
          <StepContent completed={true} >
            {props.content ? 
              <div style={contentStyle} className="contentWrap">
                {props.content}
              </div> 
              : 
              props.content
            }
            <Grid container direction="row">
              <Grid item style={{ flexBasis: '45%', paddingBottom: '2px' }}>
                <Button
                  style={{
                    width: '55%',
                    color: 'white',
                    fontSize: '12px',
                    fontWeight: '100',
                    backgroundColor: '#19BED8',
                    paddingBottom: '5px',
                  }}
                  variant="contained"
                  className="3"
                  size="small"
                >
                  <div className="buttonText">
                    {props.buttonText}
                  </div>
                  <div style={svgStyle} className="svg">
                    {props.svg}
                  </div>
                </Button>
              </Grid>
              <Grid item style={{ flexBasis: '35%'}}>
                <Grid container direction="row">
                  {props.progressText.map(text => 
                    <Grid item xs={12}>
                      <ProgressTextArea progressText={text}/>
                    </Grid>
                  )}
                </Grid>
              </Grid>
            </Grid>
          </StepContent>
        </Step>
        <Step hidden={true} completed={true} key={2}/>          
      </Stepper>
  )
};
export default withStyles(styles)(StepperComponent);

