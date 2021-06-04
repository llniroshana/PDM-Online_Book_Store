import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import 'glyphicons-only-bootstrap/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Header'
import SearchBar from "./SearchBar";
import axios from 'axios'
import Footer from "./Footer";

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
        }
    }

    onSubmit(e) {
        e.preventDefault();
        const {name, email, password, password_confirmation} = this.state;
        axios.post('api/register', {
            name,
            email,
            password,
            password_confirmation
        })
            .then(response => {
                this.setState({err: false});
                this.props.history.push("home");
            })
            .catch(error => {
                this.refs.name.value = "";
                this.refs.password.value = "";
                this.refs.email.value = "";
                this.refs.confirm.value = "";
                this.setState({err: true});
            });
    }

    onChange(e) {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    render() {
        let error = this.state.err;
        let msg = (!error) ? 'Registered Successfully' : 'Oops! , Something went wrong.';
        let name = (!error) ? 'alert alert-success' : 'alert alert-danger';
        return (
            <div>
                <Header/>
                <SearchBar/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                            <div className="panel panel-default">
                                <div className="panel-heading">Register</div>
                                <div className="panel-body">
                                    <div className="col-md-offset-2 col-md-8 col-md-offset-2">
                                        {error !== undefined && <div className={name} role="alert">{msg}</div>}
                                    </div>
                                    <form className="form-horizontal" role="form" method="POST"
                                          onSubmit={this.onSubmit.bind(this)}>
                                        <div className="form-group">
                                            <label htmlFor="name" className="col-md-4 control-label">Name</label>

                                            <div className="col-md-6">
                                                <input id="name" type="text" className="form-control" ref="name"
                                                       name="name" onChange={this.onChange.bind(this)} required
                                                       autoFocus/>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="email" className="col-md-4 control-label">E-Mail
                                                Address</label>

                                            <div className="col-md-6">
                                                <input id="email" type="email" className="form-control" ref="email"
                                                       name="email" onChange={this.onChange.bind(this)} required/>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="password"
                                                   className="col-md-4 control-label">Password</label>

                                            <div className="col-md-6">
                                                <input id="password" type="password" className="form-control"
                                                       ref="password" name="password"
                                                       onChange={this.onChange.bind(this)} required/>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="password-confirm" className="col-md-4 control-label">Confirm
                                                Password</label>

                                            <div className="col-md-6">
                                                <input id="password-confirm" type="password" className="form-control"
                                                       ref="confirm" name="password_confirmation"
                                                       onChange={this.onChange.bind(this)} required/>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="col-md-6 col-md-offset-4">
                                                <button type="submit" className="btn btn-primary">
                                                    Register
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Register