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
        {link: 'www.google.com', name: 'google'},
        {link: 'www.Quora.com', name: 'Quora'},
        {link: 'www.facebook.com', name: 'facebook'},
        {link: 'github.com/thejsgirl', name: 'thejsgirl'}
        ] 
    }
  }

  _addBookMark(bookmark){
    this.setState({bookMarks: [bookmark, ...this.state.bookMarks]});
  }
  render() {
    return (
      <div>
          <h2>Welcome to React</h2><br/>
          <BookMarkForm addBookMark= {this._addBookMark.bind(this)}/>
          <BookMarkList bookmarks = {this.state.bookMarks} />
       
      </div>
    );
  }
}

export default App;
