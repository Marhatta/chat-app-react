import React, { Component } from 'react';
import {Segment,Comment} from 'semantic-ui-react';

class Messages extends Component{
    render(){
        return(
            <React.Fragment>
                <MessagesHeader />

                <Segment>
                    <Comment.group classname='messages'>
                        
                    </Comment.group>
                </Segment>

                <MessageForm />
            </React.Fragment>
        )
    }
}

export default Messages;