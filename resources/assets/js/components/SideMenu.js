import React, {Component} from "react";
import {NavLink, HashRouter, Route, Router, Switch, Link} from 'react-router-dom';
import 'glyphicons-only-bootstrap/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import '../../sass/Home.css';


class SideMenu extends Component {
    render() {
        return (
            <div>
                <div className="templatemo_content_left_section">
                    <div className="card border-dark mb-3 lm">
                        <div className="card-header">Best</div>
                        <div className="crd-bdy">
                            <div className="list-group">
                                <Link to="/trending-books"
                                      className="list-group-item list-group-item-action">
                                    Trending Books
                                </Link>
                                <Link to="/best-books-of-month"
                                      className="list-group-item list-group-item-action">
                                    Best books of month
                                </Link>
                                <Link to="/best-books-of-year"
                                      className="list-group-item list-group-item-action">
                                    Best books of year
                                </Link>
                                <Link to="/top-rated-books"
                                      className="list-group-item list-group-item-action">
                                    Top rated Books
                                </Link>
                                <Link to="/best-authors"
                                      className="list-group-item list-group-item-action">
                                    Best authors
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card border-dark mb-3 lm">
                    <div className="card-header">Book Categories</div>
                    <div className="crd-bdy">
                        <div className="list-group">
                            <Link to="/category-adventure"
                                  className="list-group-item list-group-item-action">
                                Adventure
                            </Link>
                            <Link to="/category-short-stories"
                                  className="list-group-item list-group-item-action">
                                Short Stories
                            </Link>
                            <Link to="/category-education"
                                  className="list-group-item list-group-item-action">
                                Education
                            </Link>
                            <Link to="/categories" className="list-group-item list-group-item-action">
                                All Categories->
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="card border-dark mb-3 lm">
                    <div className="card-header">Authors</div>
                    <div className="crd-bdy">
                        <div className="list-group">
                            <Link to="/martine-wikramasinghe"
                                  className="list-group-item list-group-item-action">
                                Martine Wikramasinghe
                            </Link>
                            <Link to="/chandana-mendis"
                                  className="list-group-item list-group-item-action">
                                Chandana Mendis
                            </Link>
                            <Link to="/ather-c-clerk" className="list-group-item list-group-item-action">
                                Ather c clerk
                            </Link>
                            <Link to="/authors" className="list-group-item list-group-item-action">
                                All Authors->
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="card border-dark mb-3 lm">
                    <div className="card-header">Advertisement</div>
                    <div className="crd-bdy">
                        adveties here
                    </div>
                </div>
                <div className="card border-dark mb-3 lm">
                    <div className="card-header">Shopping Cart</div>
                    <div className="crd-bdy">
                        about shopping cart
                    </div>
                </div>
            </div>
        );
    }
}

export default SideMenu;
