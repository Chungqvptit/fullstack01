import React, { Component } from 'react';
import { Alert, AlertContainer } from "react-bs-notifier";
import { connect } from 'react-redux';
class Notifier extends Component {
    handel=()=>{
        this.props.offNotify();
    }
    render() {
        if(this.props.sttNtf === false) return null;
        return (
        <AlertContainer>
            <Alert type="success" onDismiss={()=>this.handel()} timeout={1000}> {this.props.Alertcontent}</Alert>
        </AlertContainer>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        sttNtf: state.sttNotify,
        Alertcontent: state.Alertcontent
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        offNotify: () => {
            dispatch({
                type:"Offnotify"
            })
        }
    }
}
//<Alert type="info">Hello, world</Alert>
export default connect(mapStateToProps, mapDispatchToProps)(Notifier)