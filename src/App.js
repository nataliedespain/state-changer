import React, { Component } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

class App extends Component {

  state = {
    name: 'Natalie'
  }

  changeName = (name) => {
    this.setState({
      name
    })
  }

  render() {
    return (
      <div className='container'>
        <Header name='Natalie' />
        <Body name={this.state.name} changeName={this.changeName}/>
        <Footer name='Natalie' />
      </div>
    );
  }
}

export default App;
