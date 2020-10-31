import React, { Fragment } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Illustration from '../media/frame0.svg'
import logoBonnus from '../media/logo.png'
import {Fab, Tooltip} from '@material-ui/core/';
import Icon from '@material-ui/core/Icon';
import LandingView from './landing'
import OnBoardingView from './onboarding'

const styles = theme => ({
    fab: {
      margin: theme.spacing.unit,
    },
    extendedIcon: {
      marginRight: theme.spacing.unit,
    },
  });

class DefaultLayout extends React.Component {
  constructor() {
    super();
    this.state = {
      display: true,
      navBarDisplay: true,
    }
  }


  render() {
      return (
        <div className={this.state.navBarDisplay?'globalContainerCtrl globalCntnrPaddedCtrl':'globalContainerCtrl '}>
            <div className={this.state.navBarDisplay?'navContainerCtrl':'hideNavCtrl'}>
              <div className='avatarNavCtrl'>
                <i className="material-icons " >account_circle</i> 
              </div>
              <div className='usrNameCtrl'>USERNAMEasdasdasdas</div>
              <hr className='wrapperDividerCtrl'/>
              <div className='itemNavCtrl itemNavCtrl_disabled'>    
              <Tooltip title="Campañas" placement="right">
                <i className="material-icons " >track_changes</i> 
              </Tooltip>
                
              </div>
            </div>
            <LandingView display={false} />
            <OnBoardingView display={true} />
        </div>

      )

  }
}

export default DefaultLayout;