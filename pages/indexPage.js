/*eslint-disable*/
import { Component } from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import RaisedDiv from '@material-ui/core/Paper';
import StepperComponent from '../Components/Stepper';
import SVG from '../Components/SVG';
import ZoneComponent from '../Components/ZoneComponent';

const style = {
  borderRadius: 10,
  maxWidth: '45%',
  marginLeft: 'auto',
  marginRight: 'auto',
}
const wrapStyle = {
  marginTop: '8%',
}

function getSteps() {
  return [
    {
      label: 'Select, then upload your Rules & Test Files', 
      content: <ZoneComponent />,
      svg: <SVG type={"upload"}/>,
      buttonText: 'UPLOAD FILES',
    },
    {
      label: 'Run your Tests', 
      svg: <SVG type={"redo-alt"}/>,
      buttonText: 'RUN TESTS',
    },
    {
      label: 'Build and deploy your Rules!', 
      svg: <SVG type={"rocket"}/>,
      buttonText: 'DEPLOY',
    },
  ];
}

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    const steps = getSteps();
    return (
      <div className="rulesWrapper" style={wrapStyle}>
        <RaisedDiv 
          elevation={2}
          rounded={'10px'}
          style={style}
        >
          {steps.map((step, index) => {
            return (
              <StepperComponent
                index={index} 
                svg={step.svg} 
                label={step.label} 
                content={step.content}
                buttonText={step.buttonText}
              />
            )
          })}
        </RaisedDiv>
      </div>
    );
  }
}
