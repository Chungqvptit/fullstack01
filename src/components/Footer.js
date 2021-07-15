import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="bg-dark text-center text-white mt-4">
                    {/* Grid container */}
                    <div className="container p-4">
                        {/* Section: Social media */}
                        <section className="mb-4">
                        Liên hệ 
                        <p>
                            <i className="fa fa-phone" aria-hidden="true" />
                            Tổng đài (24/24H): <a href="tel:0396259244" data-wpel-link="internal">039 625 9244</a>
                        </p>
                        <p>
                            <i className="fa fa-phone" aria-hidden="true" />
                            Địa chỉ: <a href="https://www.google.com/maps/place/Ph%C3%B9ng+X%C3%A1,+M%E1%BB%B9+%C4%90%E1%BB%A9c,+H%C3%A0+N%E1%BB%99i,+Vi%E1%BB%87t+Nam/@20.7187212,105.7492352,15z/data=!3m1!4b1!4m5!3m4!1s0x3134356a71bd5f6b:0x3b62598f56d59850!8m2!3d20.7179437!4d105.7556564?hl=vi-VN" data-wpel-link="internal">phùng xã-mỹ đức-hà nội</a>
                        </p>
                        <p>
                            <i className="fa fa-envelope" aria-hidden="true" />
                            <a href="mailto:chungqv0@gmail.com">
                            chungqv0@gmail.com
                            </a>
                        </p><p>
                            <i className="fa fa-clock-o" aria-hidden="true" />
                            Thứ 2- Chủ Nhật: 8:00 AM - 9:00 PM </p>
                        <p />
                        <a href="https://www.facebook.com/ngoc.vien.px2k" style={{marginRight: '20px'}} data-wpel-link="external" rel="nofollow noopener noreferrer">
                            <i className="fa fa-facebook " aria-hidden="true" />
                        </a>
                        <a href="https://www.instagram.com" style={{marginRight: '20px'}} data-wpel-link="external" rel="nofollow noopener noreferrer">
                            <i className="fa fa-instagram" aria-hidden="true" />
                        </a>
                        <a href="https://www.linkedin.com" style={{marginRight: '20px'}} data-wpel-link="external" rel="nofollow noopener noreferrer">
                            <i className="fa fa-linkedin" aria-hidden="true" />
                        </a>
                        <a href="https://twitter.com" data-wpel-link="external" style={{marginRight: '20px'}} rel="nofollow noopener noreferrer">
                            <i className="fa fa-twitter" aria-hidden="true" />
                        </a>
                        <a href="https://www.youtube.com/watch?v=_mgAP2qZPEg" data-wpel-link="external" rel="nofollow noopener noreferrer">
                            <i className="fa fa-youtube" aria-hidden="true" />
                        </a>
                        </section>
                        {/* Section: Social media */}
  </div>
  {/* Grid container */}
  {/* Copyright */}
  <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
    © 2021 Bản Quyền:
    <a className="text-white" href="https://www.facebook.com/ngoc.vien.px2k">Công ty cho thuê xe CVIEN</a>
  </div>
  {/* Copyright */}
</footer>

            </div>
        );
    }
}

export default Footer;