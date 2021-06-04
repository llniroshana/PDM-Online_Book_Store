import React, {Component} from 'react';
import 'glyphicons-only-bootstrap/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import '../../sass/Home.css';

class Footer extends Component {
    render() {
        return (
            <footer className="page-footer font-small bg-dark pt-0 bd bg-primary">
                <div className="container mt-5 mb-4 text-center text-md-left">
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mb-4">
                            <h6 className="text-uppercase font-weight-bold">
                                <strong>Copik Book Shop</strong>
                            </h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"/>
                            <p>Brief description about our site..................................
                                .........................</p>
                        </div>
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase font-weight-bold">
                                <strong>Our Services</strong>
                            </h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"/>
                            <p>
                                <a href="#!">Reader's Community</a>
                            </p>
                            <p>
                                <a href="#!">Gift Vouchers</a>
                            </p>
                            <p>
                                <a href="#!">Feedback</a>
                            </p>
                            <p>
                                <a href="#!">Order Status</a>
                            </p>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase font-weight-bold">
                                <strong>Useful links</strong>
                            </h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"/>
                            <p>
                                <a href="#!">My Profile</a>
                            </p>
                            <p>
                                <a href="#!">About Us</a>
                            </p>
                            <p>
                                <a href="#!">Contact Us</a>
                            </p>
                            <p>
                                <a href="#!">Help</a>
                            </p>
                        </div>
                        <div className="col-md-4 col-lg-3 col-xl-3">
                            <h6 className="text-uppercase font-weight-bold">
                                <strong>Contact</strong>
                            </h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"/>
                            <p>
                                <i className="fa fa-home mr-3"></i> Copik, 2nd Lane, Kaduwela</p>
                            <p>
                                <i className="fa fa-envelope mr-3"></i> copik.book@hotmail.com</p>
                            <p>
                                <i className="fa fa-phone mr-3"></i> +94 11 335 1004</p>
                            <p>
                                <i className="fa fa-print mr-3"></i> +94 11 235 1004</p>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright py-3 text-center">
                    © 2018 Copyright:
                    <a href="https://mdbootstrap.com/material-design-for-bootstrap/">
                        <strong> Copik Foundation</strong>
                    </a>
                </div>
            </footer>
        );
    }
}

export default Footer;
