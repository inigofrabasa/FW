import React, { Fragment } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Illustration from '../media/frame0.svg'
import logoBonnus from '../media/logo.png'
import {Fab, TextField} from '@material-ui/core/';
import Icon from '@material-ui/core/Icon';
import Illustration0 from '../media/illustration0.svg'
import Illustration1 from '../media/illustration1.svg'
import Illustration2 from '../media/illustration2.svg'
import Illustration3 from '../media/illustration3.svg'
import Step1 from '../components/stepper/step1'
import Step2 from '../components/stepper/step2'
import Step3 from '../components/stepper/step3'
import Step4 from '../components/stepper/step4'
import Step5 from '../components/stepper/step5'
import FinalStep from '../components/stepper/finalStep'


const styles = theme => ({
    fab: {
      margin: theme.spacing.unit,
    },
    extendedIcon: {
      marginRight: theme.spacing.unit,
    },
  });

class OnBoardingView extends React.Component {
  constructor() {
    super();
    this.state = {
      display: true,
      question1: true,
      question2:false,
      question3:false,
      question4:false,
      question5:false,
      finalStep:false
    }
  }

  setActiveView=(nameView)=>{
    this.setState({
      question1: false,
      question2: false,
      question3: false,
      question4: false,
      question5: false,
      finalStep: false,
      question1: nameView=='1'?true:false,
      question2: nameView=='2'?true:false,
      question3: nameView=='3'?true:false,
      question4: nameView=='4'?true:false,
      question5: nameView=='5'?true:false,
      finalStep: nameView=='f'?true:false,
    });
    // alert('sended:' + nameView);
  }


  render() {

    if (this.props.display === true) {
      return (
        <div className='displayContainerRow'>
          <div className='stepperContainerCtrl'>
           <Step1 display={this.state.question1} changeView={this.setActiveView} />
           <Step2 display={this.state.question2} changeView={this.setActiveView}  />
           <Step3 display={this.state.question3} changeView={this.setActiveView}  />
           <Step4 display={this.state.question4} changeView={this.setActiveView}  />
           <Step5 display={this.state.question5} changeView={this.setActiveView}  />
           <FinalStep display={this.state.finalStep} />
          </div>


          <img src={Illustration0} alt='illustration' className={this.state.question1||this.state.question5?'illustrationCtrl':'noDisplayedImg'} />
          <img src={Illustration1} alt='illustration' className={this.state.question2?'illustrationCtrl':'noDisplayedImg'}/>
          <img src={Illustration2} alt='illustration' className={this.state.question3?'illustrationCtrl':'noDisplayedImg'}/>
          <img src={Illustration3} alt='illustration' className={this.state.question4?'illustrationCtrl':'noDisplayedImg'}/>

        </div>

      )
    }
    if (this.props.display === false) {
      return (
        <Fragment></Fragment>
      )
    }

  }
}

export default OnBoardingView;