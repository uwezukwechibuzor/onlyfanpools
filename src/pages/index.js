import React, { Component } from 'react';
import Footer from '../components/Footer';
import Herosection from '../components/Herosection';
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/infoSection/Data';
import InfoSection from '../components/infoSection/Info';
import Navbar from '../components/Navbar';
import Services from '../components/services/Services';
import Sidebar from '../components/Sidebar';

class Home extends Component {
   constructor(props) {
       super(props);
       this.state = {
         isOpen: false,
         hover: false
       };
   }

   toggle = (arg) => { 
     this.setState({isOpen: arg });
  } 

  onHover = (arg) => { 
    this.setState({hover: arg });
    }
   
    render() {
        return (
            <div>
            <Sidebar isOpen={this.state.isOpen } toggle={() =>this.toggle(false)} />
            <Navbar toggle={() => this.toggle(true)} />
            <Herosection hover={this.state.hover} onHover={() =>this.onHover(false)} />
             <InfoSection {...homeObjOne} />
             <InfoSection {...homeObjTwo} />
             <Services />
             <InfoSection {...homeObjThree} />
             <Footer />
            </div>
        );
    }
}

export default Home;
