import React, { Component } from 'react';
import {Menu} from 'semantic-ui-react';

import UserPanel from './UserPanel';
import Channels from './Channels';
import DirectMessages from './DirectMessages';
import Starred from './Starred';

class SidePanel extends Component{
    render(){

        const {currentUser,primaryColor} = this.props;

        return(
            <Menu
              size='large'
              vertical 
              style={{background:primaryColor,fontSize:'12.rem',marginLeft:'50px',height:'100vh'}} 
              >
                <UserPanel primaryColor={primaryColor} currentUser={currentUser}/>
                <Starred currentUser={currentUser}/>
                <Channels currentUser={currentUser}/>
                <DirectMessages currentUser={currentUser} />
            </Menu>
        )
    }
}

export default SidePanel;