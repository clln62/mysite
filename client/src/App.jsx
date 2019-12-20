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

    // render () {
    //     return (
    //         <div id='overall'>          
    //             <ReactPageScroller  pageOnChange={this.handlePageChange}
    //                                 customPageNumber={this.state.currentPage}>
    //                 <Welcome />
    //                 <About />
    //                 <Portfolio />
    //                 <Contact />
    //             </ReactPageScroller>
    //             {/* <Pager className="pagination-additional-class" bsSize="large">
    //             {this.state.currentPage}
    //             </Pager> */}
    //         </div>
    //     )
    // }

    render () {
        return (
            <div id="Homepage">
                <div className="wrapper">
                        <div className="fixed-bg bg-1">
                            {/* <div className="introline">
                                <h1> Become the Hero Your Food Deserves </h1>
                            </div> */}
                            <div className="arrow bounce"></div>
                            <Welcome />
                        </div>
                        {/* <div className="scroll-bg">
                            <div className="scrollInfo">
                                <h2> Our Mission</h2>
                                <p> To help you save money and reduce waste from your perishable items.</p>
                                <p> If you are looking for food, I can tell you we don't have any. But what we do have are a very particular set of skills, skills gained by changing stuff and seeing what happens. Skills that make us a nightmare for people who waste food. Fear no more as Ingredient Hero is here to help!</p>
                            </div>
                        </div> */}
                        <div className="fixed-bg bg-2">
                            {/* <h1></h1> */}
                            <About />
                        </div>
                        {/* <div className="scroll-bg">
                            <div className="scrollInfo">
                                <p> How to Join: 1. Click on the Signup Button. 2. Fill out the information. 3. Enjoy the site.  </p>
                                <p> Already a user? Just Login and enjoy the fruits of our labor. </p>
                            </div>
                        </div> */}
                        <div className="fixed-bg bg-3">
                            {/* <h1></h1> */}
                            <Portfolio />
                        </div>
                        {/* <div className="scroll-bg">
                            <div className="scrollInfo"> 
                                <p> How to Add an Item: 1. Once logged in locate the Add to Pantry button. 2. Click it and add your perishable item.</p>
                                <p> How to Remove an Item: 1. Once an item is added and populating in your Perishable Items column click the Remove button. </p>
                            </div>
                        </div> */}
                        <div className="fixed-bg bg-4">
                            <div className="oneliner">
                                {/* <div className="onelinerPt1">
                                    <h1> Even Food Needs Saving </h1>
                                </div> */}
                                <Contact />
                            
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('app'));