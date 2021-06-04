import React, {Component} from 'react';
import '../../sass/Home.css';
import {Link} from "react-router-dom";
import ReactStars from 'react-stars'
import Header from "./Header";
import SearchBar from "./SearchBar";
import Footer from "./Footer";

class Feedback extends Component {

    constructor() {
        super();
        this.state = {
            username: '',
            email: '',
            comment: '',
            isLoading: false,
            msg: {},
            msgCls: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        let _this = this;
        this.setState({
            isLoading: true
        });
        let {
            username,
            email,
            comment,
        } = this.state;

        fetch('api/feedback/', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                email: email,
                comment: comment
            })
        }).then(function (response) {
            console.log(response.status);
            return response.json();
        }).then(function (data) {
            console.log(data);
            _this.setState({
                username: '',
                email: '',
                comment: '',
            })
        });
    }

    render() {

        let {username, email, comment} = this.state;

        return (
            <div>
                <Header/>
                <SearchBar/>
                <div className="container25 mgb">
                    <h1 className="h123">Feedback & Rating </h1>
                    <br/>
                    <div className="row">
                        <div className="col-md-8">
                            <form className="form-horizontal" action="" method="post" onSubmit={this.handleSubmit}>
                                <fieldset>
                                    <legend>Feedback</legend>
                                    <div className="form-group">
                                        <label htmlFor="InputEmail1">Email address:</label>
                                        <input type="email" className="form-control" name="email" value={email}
                                               aria-describedby="emailHelp" placeholder="Enter email"
                                               onChange={this.handleChange}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputName">User Name:</label>
                                        <input type="text" className="form-control" name="username" value={username}
                                               aria-describedby="nameHelp" placeholder="name"
                                               onChange={this.handleChange}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleTextarea">Commment</label>
                                        <textarea className="form-control" name="comment" value={comment} rows="3"
                                                  onChange={this.handleChange}/>
                                    </div>
                                    <div className="form-group">

                                        <ReactStars id="c" half={false} value={0} count={4} onChange={ratingChanged}
                                                    size={24}
                                                    color2={'#ffd700'}/>

                                    </div>
                                    <input type="submit" value="Feedback" className="btn btn-primary"/>
                                </fieldset>
                            </form>
                        </div>


                    </div>
                </div>
                <Footer/>
            </div>

        );

    }
}

const ratingChanged = (newRating) => {
    console.log(newRating);
    sessionStorage.setItem('rat', newRating)
};
export default Feedback
