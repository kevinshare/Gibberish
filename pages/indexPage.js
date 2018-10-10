/*eslint-disable*/
import { Component } from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import RaisedDiv from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import StepperComponent from '../Components/Stepper';
import SVG from '../Components/SVG';
import ZoneComponent from '../Components/ZoneComponent';
import DownloadComponent from '../Components/DownloadComponent';

const style = {
  // borderRadius: 10,
  // minWidth: '60%',
  // maxWidth: '70%',
  // marginLeft: 'auto',
  // marginRight: 'auto',
  // marginTop: '8%',
}
// const wrapStyle = {
  
// }

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
      <Grid container direction="row">
        <Grid item xs={3}>
          <div className="downloader"> 
            <DownloadComponent />
          </div>
        </Grid>
          <Grid item alignContent="stretch" style={{marginLeft: '5%', flex: 1}}>
            <Grid container direction="row" alignItems="stretch">
              <Grid item style={{width: '100%', height: '100%'}}>
                <RaisedDiv 
                  elevation={2}
                  rounded={'10px'}
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
              </Grid>
            </Grid>
          </Grid>
      </Grid>
    );
  }
}



