import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BookMarkForm from './components/BookMarkForm';
import BookMarkList from './components/BookMarkList';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      bookMarks: [
        {link: 'www.goggle.com', name: 'goggle'},
        {link: 'www.Quora.com', name: 'Quora'},
        {link: 'www.facebook.com', name: 'facebook'}
        ] 
    }
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2><br/>
          <BookMarkForm />
          <BookMarkList bookmarks = {this.state.bookMarks} />
        </div>
       
      </div>
    );
  }
}

export default App;
