import React, { Component } from 'react';

class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark mb-4 fixed-top" style={{background: 'linear-gradient(to left,#7b4397,#dc1130)'}}>
  <a className="navbar-brand" href="index.html" style={{color: 'rgb(102, 211, 231)', fontSize: '130%', fontFamily: 'cursive'}}> <img src="https://i.pinimg.com/originals/f6/5d/3f/f65d3f678f041ffac20096826e948d11.jpg" width={40} alt="#" /> CVIEN</a>
  <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
  <div className="collapse navbar-collapse" id="collapsibleNavId">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item">
        <a className="nav-link" href="index.html">Trang Chủ </a>
      </li>
      <li className="nav-item  ">
        <a className="nav-link" href="Xemdsxe.html">Xem danh sách xe <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="Xemdsxe.html" id="dropdownId" data-toggle="dropdown" aria-expanded="false">Xem thêm</a>
        <div className="dropdown-menu" aria-labelledby="dropdownId">
          <a className="dropdown-item " href="Dichvu.html">Xem dịch vụ &amp; khuyến mãi</a>
          <a className="dropdown-item" href="Lienhe.html">Liên hệ thuê xe</a>
        </div>
      </li>
    </ul>
  </div>
</nav>

        );
    }
}

export default Nav;