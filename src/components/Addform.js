import React, { Component } from 'react';
import {connect} from 'react-redux';
class Addform extends Component {
    constructor(props){
        super(props);
        this.state={
            tengia:"",
            noidung:"",
            hinhanh:""
        }
    }
    isChange=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        // console.log(name);
        // console.log(value);
        this.setState({
            [name]:value
        });
    }
    isClick=(Title,Content,hinhanh)=>{
        var tmp={};
        tmp.tengia=Title;
        tmp.noidung=Content;
        tmp.hinhanh=hinhanh; 
        // this.props.getdata(tmp);
        this.props.dispatch({type:'ADD_DATA',tmp});
        this.props.changestatus2();
    }
    render() {
        return (
            <div className="col-4">
            <div className="form-group ">
                <label htmlFor="title" style={{color: 'rgb(45, 113, 158)'}}>Tên Xe Cần Thêm</label>
                <input type="text" onChange={(event)=>this.isChange(event)} className="form-control" name="tengia" id="tengia" aria-describedby="helpId" placeholder="Nhập Tên cần sửa" />
                <p/>
                <label htmlFor="Hinhanh" style={{color: 'rgb(45, 113, 158)'}}>Hình ảnh cần thêm </label>
                <input type="text" onChange={(event)=>this.isChange(event)} className="form-control" name="hinhanh" id="hinhanh" aria-describedby="helpId" placeholder="Nhập link ảnh xe" />
                <p/>
                <label htmlFor="Content" style={{color: 'rgb(45, 113, 158)'}}>Nội dung mô tả về xe </label>
                <textarea type="text" onChange={(event)=>this.isChange(event)} className="form-control" name="noidung" id="noidung" aria-describedby="helpId" placeholder="Nhập nội dung cần sửa" defaultValue={" "} />
                <small>Mời nhập nội dung cần sửa</small> 
                <p/>
                <button type="reset" onClick={()=>{this.isClick(this.state.tengia,this.state.noidung,this.state.hinhanh)}}className="btn btn-outline-info btn-block"><i className="fa fa-save" /> Thêm</button>
            </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        prop: state.name
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changestatus2: () => {
            dispatch({
              type:"Changestt2"
            })
          },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Addform);