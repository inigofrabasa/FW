import React, { Fragment } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Illustration from '../media/frame0.svg'
import logoBonnus from '../media/logo.png'
import {Fab} from '@material-ui/core/';
import Icon from '@material-ui/core/Icon';
import { withAuth0 } from '@auth0/auth0-react';

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

  loginLanding = () => {
    this.props.auth0.loginWithRedirect()
  }

  fetchBuilder = async(token) => {
    const settings = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization' : `Bearer ${token}`
        }
    };

    try{
      
      const response = await fetch('https://flatwhiteapidev.azurewebsites.net/api/User', settings);
      const result = await response.json();

      console.log("response")
      console.log(response)
      console.log("result")
      console.log(result)
    } catch(error){
      console.log("error")
      console.log(error)
    }
  }

  getAccessToken = async () => {
    var token = await this.props.auth0.getAccessTokenSilently()
    console.log("getAccessTokenSilently")
    console.log(token)
  }

  render() {
    if (this.props.auth0.error){
        return (
        <div style={{color : "#ffffff"}}>
        Error: {this.props.auth0.error.message}
        </div>
      )
    }

    if (this.props.auth0.user){
      console.log("Auth")
      console.log(this.props.auth0)

      //console.log(this.props.auth0)
      this.getAccessToken()
      return (
      <div style={{color : "#ffffff"}}>
      {this.props.auth0.user.name}
      </div>
    )
  }
      
    if (this.props.display === true) {
      return (
        <div className='displayContainerRow'>
            <div className='contentCtrl'>
            <img src={logoBonnus} alt='illustration' />
            <span>
            Bienvenido a Flat White by Bonnus, una plataforma donde podras agregar y administrar de forma más eficiente tus integraciones con cualquiera de los productos Bonnus, sin intermediarios, en tus propios términos.
            </span>
            <div className='primaryButton' onClick={this.loginLanding}>
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

export default withAuth0(LandingView);