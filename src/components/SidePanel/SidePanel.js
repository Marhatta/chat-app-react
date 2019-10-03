import React, { Component } from 'react';
import {Menu} from 'semantic-ui-react';

import UserPanel from './UserPanel';
import Channels from './Channels';

class SidePanel extends Component{
    render(){

        const {currentUser} = this.props;

        return(
            <Menu
              size='large'
              vertical 
              style={{background:'#4c3c4c',fontSize:'12.rem',marginLeft:'50px'}} 
              >
                <UserPanel currentUser={currentUser}/>
                <Channels currentUser={currentUser}/>
            </Menu>
        )
    }
}

export default SidePanel;