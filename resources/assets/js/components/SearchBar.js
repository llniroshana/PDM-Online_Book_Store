import React, {Component} from "react";
import 'glyphicons-only-bootstrap/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import '../../sass/Home.css';
import {Link} from "react-router-dom";


class SearchBar extends Component {
    render() {
        return (
            <nav className="navbarrrr navbar-expand-lg navbar-dark bgcolor navbar-fixed-top">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Catagories <span
                            className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Comming Soon</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Free Shipping Areas</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Gift Vouchers</a>
                    </li>
                    <li className="nav-item">
                        <Link to="/reader-com" className="nav-link">Reader's Community</Link>
                    </li>
                </ul>
                <div>
                    <form className="form-inline my-2 my-lg-0">
                        <input type="text" className="searchb" placeholder="Search Books"/>
                        <button type="button" className="buttn btn-info">Search</button>
                        <button type="button" className="btn btn-outline-secondary">Advance Search</button>
                    </form>
                </div>
            </nav>
        );
    }
}

export default SearchBar;