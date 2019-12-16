import React from 'react';
import ReactDOM from 'react-dom';
import About from './components/about.jsx';
import Contact from './components/contact.jsx';
import Portfolio from './components/portfolio.jsx';
import Welcome from './components/welcome.jsx';
import ReactPageScroller from "react-page-scroller";
// import { Pager } from "react-bootstrap";
// import Navbar from './components/navbar.jsx';



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: null,
        }
    }

    // handlePageChange (number) {
    //     this.setState({ currentPage: number }); // set currentPage number, to reset it from the previous selected.
    //   };
    
    // getPagesNumbers () {
    // const pageNumbers = [];

    // for (let i = 1; i <= 5; i++) {
    //     pageNumbers.push(
    //     <Pager.Item key={i} eventKey={i - 1} onSelect={this.handlePageChange}>
    //         {i}
    //     </Pager.Item>,
    //     );
    // }

    // return [...pageNumbers];
    // };

    render () {
        return (
            <div id='overall'>          
                <ReactPageScroller  pageOnChange={this.handlePageChange}
                                    customPageNumber={this.state.currentPage}>
                    <Welcome />
                    <About />
                    <Portfolio />
                    <Contact />
                </ReactPageScroller>
                {/* <Pager className="pagination-additional-class" bsSize="large">
                {this.state.currentPage}
                </Pager> */}
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('app'));