import React from 'react';
import ReactDOM from 'react-dom';
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
                <div className="wrapper">
                    <div className="fixed-bg bg-1">
                        <Welcome />
                    </div>
                    <div className="fixed-bg bg-2">
                        <About />
                    </div>
                    <div className="fixed-bg bg-3">
                        <Portfolio />
                    </div>
                    <div className="fixed-bg bg-4">
                        <Contact />
                    </div>
                </div>
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('app'));