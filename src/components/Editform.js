
import React, { Component } from 'react';
import {connect} from 'react-redux';
class Editform extends Component {
    constructor(props){
        super(props);
        this.state={
            id:"",
            tengia:"",
            noidung:"",
            hinhanh:""
        }
    }
    // khoi tao cho state ban dau co gia tri 
    componentWillMount() {
        this.setState({
            id:this.props.getDataEdit.id,
            tengia: this.props.getDataEdit.tengia,
            noidung: this.props.getDataEdit.noidung,
            hinhanh:this.props.getDataEdit.hinhanh
        });
    }
    // ham thay doi du lieu khi nhap
    isChange=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        this.setState({
            [name]:value
        });
    }
    //chuyen du lieu can update sang store khi click nut luu 
    isClick=(Title,Content,hinhanh)=>{
        var tmp={};
        tmp.id=this.props.getDataEdit.id;
        tmp.tengia=Title;
        tmp.noidung=Content;
        tmp.hinhanh=hinhanh; 
        this.props.updateEditData(tmp);
        this.props.changestatus1();
        this.props.onNotify("Lưu Thành Công !!!   ");
    }
    render() {
        return (
            <div className="col-4">
            <div className="form-group ">
                <label htmlFor="title" style={{color: 'rgb(45, 113, 158)'}}>Sửa Tên Xe </label>
                <input defaultValue={this.props.getDataEdit.tengia} type="text" onChange={(event)=>this.isChange(event)} className="form-control" name="tengia" id="tengia" aria-describedby="helpId"  />
                <p/>
                <label htmlFor="Hinhanh" style={{color: 'rgb(45, 113, 158)'}}>Nhập link ảnh cần sửa</label>
                <input defaultValue={this.props.getDataEdit.hinhanh} type="text" onChange={(event)=>this.isChange(event)} className="form-control" name="hinhanh" id="hinhanh" aria-describedby="helpId"  />
                <p/>
                <label htmlFor="Content" style={{color: 'rgb(45, 113, 158)'}}>Sửa nội dung </label>
                <textarea type="text" onChange={(event)=>this.isChange(event)} className="form-control" name="noidung" id="noidung" aria-describedby="helpId" defaultValue={this.props.getDataEdit.noidung} />
                <small>Mời nhập nội dung cần sửa</small> 
                <p/>
                <button type="reset" onClick={()=>(this.isClick(this.state.tengia,this.state.noidung,this.state.hinhanh))} className="btn btn-outline-info btn-block"><i className="fa fa-save" /> Lưu</button>
            </div>
            </div>
        );
    }
}
// du lieu can sua cua 1 xe
const mapStateToProps = (state, ownProps) => {
    return {
        getDataEdit: state.Editdata
    }
}
//ham tu store
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changestatus1: () => {
            dispatch({
              type:"Changestt1"
            })
          },
        updateEditData: (tmp) => {
            dispatch({type:'UpdateEdit',tmp})
        },
        onNotify: (title) => {
            dispatch({
                type:'Onnotify',title
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Editform);