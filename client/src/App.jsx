import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Route, BrowserRouter } from 'react-router-dom';
import About from './components/about.jsx';
import Contact from './components/contact.jsx';
import Portfolio from './components/portfolio.jsx';
import Welcome from './components/welcome.jsx';



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: null,
        }
    }



    render () {
        return (
            <div id="Homepage">
                <nav>
                    <Link to='/welcome'>Welcome</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/portfolio'>Portfolio</Link>
                    <Link to='/contact'>Contact</Link>
                </nav>
                <div className="wrapper">
                    <div className="fixed-bg bg-1">
                        <Route path='/welcome' Component={Welcome} exact />
                        {/* <Welcome path='/welcome'/> */}
                    </div>
                    <div className="fixed-bg bg-2">
                        <Route path='/about' Component={About} exact />
                        <About />
                    </div>
                    <div className="fixed-bg bg-3">
                        <Route path='/portfolio' Component={Portfolio} exact />
                        {/* <Portfolio /> */}
                    </div>
                    <div className="fixed-bg bg-4">
                        <Route path='contact' Component={Contact} exact />
                        {/* <Contact /> */}
                    </div>
                </div>
            </div>
        )
    }
}


// ReactDOM.render(<App />, document.getElementById('app'));

ReactDOM.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>,
    document.getElementById('app')
    );