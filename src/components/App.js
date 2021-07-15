import '../css/App.css';
import React, { Component } from 'react';
import Nav from './Nav';
import Editform from './Editform';
import Dsxe from './Dsxe';
import Footer from './Footer';
import { connect } from 'react-redux';
import Addform from './Addform';
import Notifier from './Notifier';
class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state={
  //   }
  // }
  // additem=(item)=>{
  //     firebaseConnect.push(item);
  // }
  Ischange = () => {
    if(this.props.stt1){
      return <Editform/>
    }
    if(this.props.stt2){
        return <Addform/>
      }
    
  }
  render() {
    // firebaseConnect.once('value').then(function(snapshot){
    //   console.log(snapshot.val());
    // });
    return (
      <div>
      <Nav/>
      <Notifier/>
      <div className="container" style={{marginTop: '100px'}}>
        <div className="row">
              <Dsxe/>
            {
              this.Ischange()
            }
            {/* getdata={(item)=>{this.additem(item)}} */}
        </div>
      </div>
      <Footer/>
      </div>

    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    stt1: state.status1,
    stt2: state.status2,
  }
}


export default connect(mapStateToProps)(App);



