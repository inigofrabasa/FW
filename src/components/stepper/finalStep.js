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
import small1 from '../../media/small1.svg'
import small2 from '../../media/small2.svg'

const styles = theme => ({
    fab: {
      margin: theme.spacing.unit,
    },
    extendedIcon: {
      marginRight: theme.spacing.unit,
    },
  });

class FinalStep extends React.Component {
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
        <div>
            <h1 className='jumboTitleCtrl prpleTextCtrl centeredTextCtrl'>¡Listo!</h1>
            <div className='bodyTextCtrl centeredTextCtrl'>
            Ahora puedes crear campañas y/o momentos cuando quieras <br/> y donde quieras. <br/> <br/> ¿Qué deseas hacer?
            </div>
            <div className='spacerCtrl' />
            <div className='jumboImgButtonCtrl'>
              <img src={small1} alt='illustration' className='illustrationCtrl ' id='smallImageBtnCtrl1' />
              <div>
                
              <h2 className='jumboButtonTitle'>recompensar</h2>
              <div className='bodyTextCtrl jumboButtonBody'>Entrega recompensas premium a los usuarios de tu aplicación, ya seaweb o móbil, genera más tráfico, mas actividad, mejor engagement, disminuye el porcentaje de deserción y sobre todo, entrega felicidad a tus clientes.</div>
              </div>
            </div>

            <div className='jumboImgButtonCtrl'>
              <img src={small2} alt='illustration' className='illustrationCtrl' id='smallImageBtnCtrl2' />
              <div>
                
              <h2 className='jumboButtonTitle'>anunciarme</h2>
              <div className='bodyTextCtrl jumboButtonBody'>Sube cupones de promociones y descuentos sobre tu producto o servicio para que se entreguen como recompensas en todo tipo de aplicaciones, incrementa tu alcance y tus clientes de forma práctica y eficiente.</div>
              </div>
            </div>

            <span className='linkTextCtrl'>Dejarlo para más tarde</span>
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

export default FinalStep;