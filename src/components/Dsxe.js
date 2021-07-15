import React, { Component } from 'react';
import Onexe from './Onexe';
import { firebaseConnect } from './firebaseConnect';
class Dsxe extends Component {
  constructor(props) {
    super(props);
    this.state={
      Datafirebase:[]
    }
  }
  
  componentWillMount() {
    firebaseConnect.on('value',(ones)=>{// xet cac xe trong firebase
      var Arraydata = [] ;
      ones.forEach(element => {// với mỗi xe thì add vào mảng arraydata
        const key= element.key;
        const tengia = element.val().tengia;
        const hinhanh=element.val().hinhanh;
        const noidung=element.val().noidung;
        Arraydata.push({
          id:key,
          tengia:tengia,
          hinhanh:hinhanh,
          noidung:noidung
        });
      });
        
        console.log(ones.val());
        console.log(Arraydata);
        //set cho mảng datafirebase trong state thành mảng arraydata vừa nhận được
        this.setState({
          Datafirebase:Arraydata
        });
    })
  }
  //  lay du lieu tung xe
  getData = () => {
    if(this.state.Datafirebase){
      return this.state.Datafirebase.map((value,key)=> {
          return <Onexe
          key={key}
          xe={value}
          idd={value.id}
          tengia ={value.tengia}
          hinhanh={value.hinhanh}
          noidung={value.noidung}
          />
      })
    }
  }
    render() {
        return (
              <div className="col">
            <div id="Listxe" role="tablist" aria-multiselectable="true">
            {this.getData()}
  
</div>
</div>
        );
    }
}

export default Dsxe;