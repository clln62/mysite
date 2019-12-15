import React from 'react';
import ReactDOM from 'react-dom';
import About from './components/about.jsx';
import Contact from './components/contact.jsx';
import Portfolio from './components/portfolio.jsx';
import Welcome from './components/welcome.jsx';
import ReactPageScroller from "react-page-scroller";



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        // this.goToPage = this.goToPage.bind(this);
    }

    // goToPage (pageNumber) => {
    //     this.reactPageScroller.goToPage(pageNumber);
    //   }

    render () {
        return (
            <div id='overall'>
                <ReactPageScroller >
                    <Welcome />
                    <About />
                    <Portfolio />
                    <Contact />
                </ReactPageScroller>
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('app'));