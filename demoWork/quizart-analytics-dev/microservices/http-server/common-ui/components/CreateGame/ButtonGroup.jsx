// Start game and Exit Game Buttons

import React from 'react';

// Material Components
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import base64 from 'base-64';

// Component
var ButtonGroup = React.createClass({
    getInitialState: function() {
        return {
            open: false,
            openExit: false
        };
    },
    handleOpen: function() {
        this.setState({open: true});
    },
    handleOpenExit: function() {
        this.setState({openExit: true});
    },
    handleClose: function() {
        this.setState({open: false});
    },
    handleCloseExit: function() {
        this.setState({openExit: false});
    },
    exitLobby: function() {
        var username = (JSON.parse(base64.decode(localStorage.token.split('.')[1])).sub);

        var url = window.location.href;
        var startPos = url.lastIndexOf('/lobby/') + 7;
        var lobbyId = url.substr(startPos, 13);

        var dataToPass = {
            player: username,
            lobby: lobbyId
        }

        this.context.socket.emit('leaveLobby', {data: dataToPass});
        this.context.router.push('/');
    },
    render: function() {
        const actions = [
            <FlatButton
                label="Ok"
                primary={true}
                onTouchTap={this.handleClose}
            />
        ];
        const actionsExit = [
            <FlatButton
                label="Leave"
                secondary={true}
                onTouchTap={this.exitLobby}
            />, 
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleCloseExit}
            />
        ];
        console.log('Button Group User : ' + this.props.user);
        if(this.props.user == 'admin')
        {
            return (
                <div>
                    <div style={{margin: '10px'}}>
                        <RaisedButton
                            label="Start Game"
                            primary={true}
                            fullWidth={true}
                            onTouchTap={this.handleOpen}
                        />
                        <RaisedButton
                            label="Leave Lobby"
                            fullWidth={true}
                            style={{marginTop: '10px'}}
                            onTouchTap={this.handleOpenExit}
                        />
                    </div>
                    <Dialog
                        actions={actions}
                        modal={false}
                        open={this.state.open}
                        onRequestClose={this.handleClose}
                    >
                        Come on...Let's Play!
                    </Dialog>
                    <Dialog
                        actions={actionsExit}
                        modal={false}
                        open={this.state.openExit}
                        onRequestClose={this.handleCloseExit}
                    >
                        Not Interested?
                    </Dialog>
                </div>
           );
        }
        else
        {
            return (
                <div>
                    <div style={{margin: '10px'}}>
                        <RaisedButton
                            label="Leave Lobby"
                            fullWidth={true} 
                            onTouchTap={this.handleOpenExit}
                        />
                        <Dialog
                            actions={actionsExit}
                            modal={false}
                            open={this.state.openExit}
                            onRequestClose={this.handleCloseExit}
                        >
                            Not Interested?
                        </Dialog>
                    </div>
                </div>
           );
        }
    }
});

ButtonGroup.contextTypes = {
    router: React.PropTypes.object.isRequired,
    socket: React.PropTypes.object.isRequired
};

export default ButtonGroup;