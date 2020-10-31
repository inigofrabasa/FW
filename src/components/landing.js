import React, { Fragment } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Illustration from '../media/frame0.svg'
import logoBonnus from '../media/logo.png'
import {Fab} from '@material-ui/core/';
import Icon from '@material-ui/core/Icon';

const styles = theme => ({
    fab: {
      margin: theme.spacing.unit,
    },
    extendedIcon: {
      marginRight: theme.spacing.unit,
    },
  });

class LandingView extends React.Component {
  constructor() {
    super();
    this.state = {
      display: true,
    }
  }


  render() {

    if (this.props.display === true) {
      return (
        <div className='displayContainerRow'>
            <div className='contentCtrl'>
            <img src={logoBonnus} alt='illustration' />
            <span>
            Bienvenido a Flat White by Bonnus, una plataforma donde podras agregar y administrar de forma más eficiente tus integraciones con cualquiera de los productos Bonnus, sin intermediarios, en tus propios términos.
            </span>
            <div className='primaryButton'>
            <i className="material-icons " >check</i> INGRESAR
             </div>
            </div>
            <img src={Illustration} alt='illustration' className='illustrationCtrl' />
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

export default LandingView;