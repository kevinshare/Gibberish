/*eslint-disable*/  
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const StepperComponent = (props) => (
    <Stepper orientation="vertical">
      <Step completed={true} key={props.index}>
        <StepLabel icon={props.index + 1} active={true} completed={false} >{props.label}</StepLabel>
        <StepContent completed={true} >
          {props.content}
          <div className="2">
            <div>
              <Button
                style={{width: '16%', height: '2px'}}
                variant="contained"
                color="primary"
                className="3"
                size="small"
              >
                <div className="buttonText">
                  {props.buttonText}
                </div>
                <div className="svg">
                  {props.svg}
                </div>
              </Button>
            </div>
          </div>
        </StepContent>
      </Step>
      <Step hidden={true} completed={true} key={2}/>          
    </Stepper>
);
export default StepperComponent;

