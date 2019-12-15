import React from 'react';
import ReactDOM from 'react-dom';
import About from './components/about.jsx';
import Contact from './components/contact.jsx';
import Portfolio from './components/portfolio.jsx';



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render () {
        return (
            <div>
                <About />
                <Portfolio />
                <Contact />
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('app'));