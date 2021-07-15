import React, { Component } from 'react';
import { connect } from 'react-redux';
class Onexe extends Component {
    ischange = () =>{
      this.props.changestatus1();
      if(this.props.stt2){
        this.props.changestatus2();
      }
      this.props.Getdata(this.props.xe);
    }
    ischange1 = () =>{
      if(this.props.stt1){
        this.props.changestatus1();
      }
      this.props.changestatus2();
    }
    ischange2 =()=>{
      this.props.Trashdataonexe(this.props.xe.id);
    }
    render() {
      
        return (
            <div className="card">
  <div className="card-header" role="tab" id="section1HeaderId">
    <h5 className="mb-0">
      <a data-toggle="collapse" data-parent="#Listxe" style={{color: 'tomato'}} href={"#"+this.props.idd} aria-expanded="true" aria-controls="section1ContentId">
        {this.props.tengia}
      </a>
      <div class="form-group" style={{float: 'right'}}>
      <button type="button" onClick={() => this.ischange()} name id className="btn btn-danger" btn-block > <i className="fa fa-check" /> Sửa</button>
      <button type="button" onClick={() => this.ischange1()} name id className="btn"  > <i className="fa fa-car" /> Thêm</button>
      <button type="button" onClick={() => this.ischange2()} name id className="btn"  > <i className="fa fa-trash" /> Xóa</button>
      </div>
    </h5>
  </div>
  <div id={this.props.idd} className="collapse in" role="tabpanel" aria-labelledby="section1HeaderId">
    <div className="card-body">
      <img src={this.props.hinhanh} className="rounded mx-auto d-block" width={500} alt="" />
      <p />
      {this.props.noidung}
    </div>
  </div>
</div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
  return {
    stt1: state.status1,
    stt2: state.status2
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changestatus1: () => {
      dispatch({
        type:"Changestt1"
      })
    },
    changestatus2: () => {
      dispatch({
        type:"Changestt2"
      })
    },
    Getdata: (tmp) =>{
      dispatch({
        type:"editdata", tmp
      }
      )
    },
    Trashdataonexe: (tmp) =>{
      dispatch({
        type:"Trashdata", tmp
      }
      )
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Onexe)