import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import {Home ,Complains,
       Contact,AboutUs,View
      } from './Containers';
import ApplyforJob from '../src/Containers/applyForJob/applyForJob'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>

      <Route path="/web/" exact component={Home} />
        <Route path="/web/home" exact component={Home} />
        <Route path="/web/category/:id/:subid" name="Home Page" component={View} />
        <Route path="/web/contact" name="Contact Us Page" component={Contact} />
        <Route path="/web/complain" name="Complains Page" component={Complains} />
        <Route path="/web/about" name="About Us Page" component={AboutUs} />
        <Route path="/web/apply" name="Apply For Job Page" component={ApplyforJob} />
      </div>
    </BrowserRouter>
    );
  }
}
export default App;
