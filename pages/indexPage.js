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
import LogPopUp from '../Components/LogPopUp';

function getSteps() {
  return [
    {
      label: 'Select, then upload your Rules & Test Files', 
      content: <ZoneComponent />,
      svg: <SVG type={"upload"}/>,
      buttonText: 'UPLOAD FILES',
      progressText: ['business-auth-match-template.xlsx', 'Testing Auths v5.feature']
    },
    {
      label: 'Run your Tests', 
      svg: <SVG type={"redo-alt"}/>,
      buttonText: 'RUN TESTS',
      progressText: ['4 out of 4 Tests passed!', 'Rules are ready for deployment.']
    },
    {
      label: 'Build and deploy your Rules!', 
      svg: <SVG type={"rocket"}/>,
      buttonText: 'DEPLOY',
      progressText: ['Deployment succesful!']
    },
  ];
}

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      testPass: false,
    };

  }

  handleLinkClick = (currentButtonLabel, e) => {
    e.preventDefault();
    if (currentButtonLabel === 'Build and deploy your Rules!') {
      this.setState({
        modalOpen: !this.state.modalOpen,
        log: 'THIS IS YOUR LOG THIS IS YOUR LOG THIS IS YOUR LOG THIS IS YOUR LOG THIS IS YOUR LOG THIS IS YOUR LOG THIS IS YOUR LOG THIS IS YOUR LOG THIS IS YOUR LOG THIS IS YOUR LOG THIS IS YOUR LOG THIS IS YOUR LOG THIS IS YOUR LOG THIS IS YOUR LOG THIS IS YOUR LOG THIS IS YOUR LOG THIS IS YOUR LOG THIS IS YOUR LOG THIS IS YOUR LOG THIS IS YOUR LOG THIS IS YOUR LOG THIS IS YOUR LOG THIS IS YOUR LOG THIS IS YOUR LOG THIS IS YOUR LOG THIS IS YOUR LOG THIS IS YOUR LOG THIS IS YOUR LOG THIS IS YOUR LOG THIS IS YOUR LOG THIS IS YOUR LOG THIS IS YOUR LOG THIS IS YOUR LOG THIS IS YOUR LOG THIS IS YOUR LOG THIS IS YOUR LOG THIS IS YOUR LOG THIS IS YOUR LOG THIS IS YOUR LOG THIS IS YOUR LOG THIS IS YOUR LOG THIS IS YOUR LOG THIS IS YOUR LOG THIS IS YOUR LOG THIS IS YOUR LOG THIS IS YOUR LOG THIS IS YOUR LOG THIS IS YOUR LOG ',
      })
    } 
  }
  render() {
    const steps = getSteps();
    if (this.state.testPass === false) {
      steps[1]["progressText"][1] = 
        <a 
          onClick={(e) => this.handleLinkClick('Build and deploy your Rules!', e)} 
          href="javascript:void(0)">View Test Log
        </a>
    }
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
                  rounded={10}
                >
                  {steps.map((step, index) => {
                    return (
                      <StepperComponent
                        index={index}
                        svg={step.svg} 
                        label={step.label} 
                        content={step.content}
                        buttonText={step.buttonText}
                        progressText={step.progressText}
                      />
                    )
                  })}
                </RaisedDiv>
              </Grid>
            </Grid>
          </Grid>
          <LogPopUp open={this.state.modalOpen} log={this.state.log} handler={this.handleLinkClick} />
      </Grid>
    );
  }
}



