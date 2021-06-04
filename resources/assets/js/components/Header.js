import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import 'glyphicons-only-bootstrap/css/bootstrap.css'
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../sass/Home.css';
import axios from 'axios'
import { withRouter } from 'react-router-dom'



class Header extends Component {

  constructor(props){
      super(props);
  } 
  
  logout(e){
       e.preventDefault();  
       axios.post('api/logout')
          .then(response=> {
            this.props.history.push('/');
          })
          .catch(error=> {
            console.log(error);
          });
  }
  
  handleClick(e){

    e.preventDefault();
    this.props.history.push('/');

  }
  render() {

    if (this.props.link) {
      return (
          <nav className="navb navbar-expand-lg navbar-dark bg-dark">
              <div className="collapse navbar-collapse">
                  <ul className="navbar-nav mr-auto">
                      <li className="nav-item">
                          <a className="nav-link" href="#" onClick={this.handleClick.bind(this)}>Basic
                              Authentication</a>
                      </li>
                  </ul>
                  <ul className="nav navbar-nav navbar-right">
                      <li className="nav-item"><a className="nav-link" href="#" onClick={this.logout.bind(this)}>{this.props.link}</a></li>
                      <li className="nav-item"><Link to="/profile" className="nav-link">{sessionStorage.getItem('email')}</Link></li>
                  </ul>
              </div>
          </nav>
        )
    }
    return (
        <nav className="navb navbar-expand-lg navbar-dark bg-dark">
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#" onClick={this.handleClick.bind(this)}>Copik Online BookStore</a>
                    </li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                    <li className="nav-item"><Link to="/feedback" className="nav-link">
                        <span className="glyphicon glyphicon-log-in"> </span> feedback</Link></li>
                    <li className="nav-item"><Link to="/login" className="nav-link">
                        <span className="glyphicon glyphicon-log-in"> </span> Login</Link></li>
                    <li className="nav-item"><Link to="/register" className="nav-link">
                        <span className="glyphicon glyphicon-user"> </span> Register</Link></li>
                </ul>
            </div>
        </nav>
      
    )
  }
}

export default  withRouter(Header)