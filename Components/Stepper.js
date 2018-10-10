/*eslint-disable*/  
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#19BED8' },
    secondary: { main: '#19BED8' },
  },
});

const styleLabel = {
  minHeight: '70px',
  borderLeft: '90px',
}
const stepperStyle = {
  marginBottom: '-60px',
  marginTop: '-37px',
  borderLeft: 'rgba(225, 225, 225, 0.3)',
  maxHeight: '70%',
}
const contentStyle ={
  paddingBottom: '1%',
}
const svgStyle = {
  marginLeft: '10%',
}
const StepperComponent = (props) => {
  return (
    <MuiThemeProvider theme={theme}>
      <Stepper style={stepperStyle} orientation="vertical">
        <Step completed={true} key={props.index}>
          <StepLabel 
            style={styleLabel} 
            icon={props.index + 1} 
            active={true} completed={false}>
            {props.label}
          </StepLabel>
          <StepContent completed={true} >
            {props.content ? 
              <div style={contentStyle} className="contentWrap">
                {props.content}
              </div> 
              : 
              props.content
            }
            <div className="2">
              <div>
                <Button
                  style={{
                    width: '30%', 
                    marginTop: '10px', 
                    color: 'white',
                    fontSize: '10px',
                    fontWeight: '100',
                  }}
                  variant="contained"
                  color="primary"
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
              </div>
            </div>
          </StepContent>
        </Step>
        <Step hidden={true} completed={true} key={2}/>          
      </Stepper>
    </MuiThemeProvider>
  )
};
export default StepperComponent;

