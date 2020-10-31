import React, { Fragment } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Illustration from '../media/frame0.svg'
// import logoBonnus from '../media/logo.png'
import {Fab,
        Tooltip,
        TextField,
        FormControl,
        InputLabel,
        Select,
        MenuItem,
        OutlinedInput
} from '@material-ui/core/';
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

class Step5 extends React.Component {
  constructor() {
    super();
    this.state = {
      display: true,
      navBarDisplay: true,
      sizecompany:''
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };


  render() {
    if (this.props.display === true) {
      return (
        <Fragment>
            <div className='stepsWrapperCtrl'>
              <div className='stepDotCtrl ' id='step1' />
              <div className='stepDotCtrl ' id='step2' />
              <div className='stepDotCtrl' id='step3' />
              <div className='stepDotCtrl ' id='step4' />
              <div className='stepDotCtrl activeStepCtrl' id='step5' />
            </div>
            <div className='cardCtrl'>
            {/* <FormControl className='selectFrmCtrl'> */}
            <FormControl variant="outlined" className='selectFrmCtrl'>
                <InputLabel
                  ref={ref => {
                    this.InputLabelRef = ref;
                  }}
                  htmlFor="outlined-age-simple"
                >
                 A qué categoría pertenece tu negocio?
                </InputLabel>
                <Select
                  value={this.state.age}
                  onChange={this.handleChange}
                  input={
                    <OutlinedInput
                      labelWidth={this.state.labelWidth}
                      name="age"
                      id="outlined-age-simple"
                    />
                  }
                >
                  <MenuItem value={10}>cat1</MenuItem>
                  <MenuItem value={20}>cat2</MenuItem>
                  <MenuItem value={30}>Otra</MenuItem>
                </Select>
              </FormControl>
              <div className='spacerCtrl' />
            <div className='buttonsFloatCtrl'>
            <div className='secondaryButton floatedButtonCtrl noMarginCtrl' onClick={()=>this.props.changeView(4)}>
                  Anterior
                </div>
                <div className='primaryButton floatedButtonCtrl noMarginCtrl'  onClick={()=>this.props.changeView('f')}>
                  Finalizar
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

export default Step5;