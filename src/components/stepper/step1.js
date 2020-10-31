import React, { Fragment } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Illustration from '../media/frame0.svg'
// import logoBonnus from '../media/logo.png'
import {Fab, Tooltip,TextField} from '@material-ui/core/';
import Icon from '@material-ui/core/Icon';
import LandingView from '../landing'
import OnBoardingView from '../onboarding'

const styles = theme => ({
    fab: {
      margin: theme.spacing.unit,
    },
    extendedIcon: {
      marginRight: theme.spacing.unit,
    },
  });

class Step1 extends React.Component {
  constructor() {
    super();
    this.state = {
      display: true,
      navBarDisplay: true,
    }
  }


  render() {
    if (this.props.display === true) {
      return (
        <Fragment>
             <h1 className='jumboTitleCtrl prpleTextCtrl'>Antes de <br/>comenzar</h1>
            <div className='bodyTextCtrl'>
              Permítenos hacerte algunas preguntas para saber más de tu negocio y poder ofrecerte un mejor servicio
            </div>
            <div className='stepsWrapperCtrl'>
              <div className='stepDotCtrl activeStepCtrl' id='step1' />
              <div className='stepDotCtrl' id='step2' />
              <div className='stepDotCtrl' id='step3' />
              <div className='stepDotCtrl' id='step4' />
              <div className='stepDotCtrl' id='step5' />
            </div>
            <div className='cardCtrl'>
            <TextField
              id="outlined-email-input"
              label="Cuál es el nombre de tu negocio?"
              type="text"
              // name="email"
              // autoComplete="email"
              className='mainInputCtrl'
              fullWidth
              margin="normal"
              variant="outlined"
              helperText='Nombre con el que te reconocen tus clientes'
            />
            <div className='buttonsFloatCtrl'>
                <div className='primaryButton floatedButtonCtrl noMarginCtrl' onClick={()=>this.props.changeView(2)}>
                  Siguiente
                </div>
            </div>
            </div>
        </Fragment>

      )
    }
    if (this.props.display === false) {
      return (
        <Fragment></Fragment>
      )
    }
     

  }
}

export default Step1;