import React, {Component} from 'react'
import Header from './Header'
import SearchBar from "./SearchBar";
import Advertisement from "./Advertisement";
import Footer from "./Footer";
import '../../sass/Home.css';
import SideMenu from "./SideMenu";


class Home extends Component {

    render() {
        return (
            <div>
                <Header link="Logout"/>
                <SearchBar/>
                <Advertisement/>
                <div className="rw rwstyle">
                    <div className="col-lg-3">
                        <SideMenu/>
                    </div>
                    <div className="col-lg-9">
                        hello
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Home