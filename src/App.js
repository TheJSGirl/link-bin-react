import React, { Component } from 'react';
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
        <nav className="teal lighten-2">
          <div>
            <a href={''} className="brand-logo center">List Bin</a>
          </div>
        </nav><br/>
        <div className="container">
          <div className="row">
            <BookMarkForm addBookMark= {this._addBookMark.bind(this)}/>          
          </div>
            <BookMarkList bookmarks = {this.state.bookMarks} />        
        </div>
      </div>
    );
  }
}

export default App;
