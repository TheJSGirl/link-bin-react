import React, { Component } from 'react';
import './App.css';
import BookMarkForm from './components/BookMarkForm';
import BookMarkList from './components/BookMarkList';
import axios from 'axios';


const BASE_URL = 'http://localhost:5000/api/v1';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      bookMarks: [] 
    }
  }

  componentWillMount(){
    console.log('before mounting...')
    // fetch(BASE_URL + '/bookmarks', {method: 'GET'}).then((response) =>{
    //   return response.json();
    // }).then((data) => {
    //   console.log(data);
    //   console.log(data.data);
    //   this.setState({bookMarks: data.data});
    // })
    // .catch((err) => {
    //   console.log(err);
    // })
    axios.get(BASE_URL + '/bookmarks')
    .then(response => {
      console.log(response);
      console.log(response.data);
      this.setState({bookMarks: response.data.data});
    })
    .catch(err => {
      alert(err);
      console.log(err)
    });
  }  

  _addBookMark(bookmark){
    console.log('bookmark is :', bookmark)

    // fetch(BASE_URL+ '/bookmarks', {
    //   headers: {'Content-Type' : 'application/json'}, 
    //   method: 'POST', 
    //   body: JSON.stringify(bookmark)
    // })
    // .then((response)=>{
    //   console.log('response data', response);
    //   return response.json();
    // })
    // .then((data) => {
    //   console.log('api data', data);
    //   this.setState({bookMarks: [bookmark, ...this.state.bookMarks]});
    // })
    // .catch((err) => {
    //   console.log('Error', err);
    //   alert('failed to add');
    // });

    axios.post(BASE_URL + '/bookmarks', bookmark)
    .then(response => {
      console.log(response);
      console.log(response.data);
      return this.setState({bookMarks: [bookmark, ...this.state.bookMarks]});      
    })
    .catch(err => {
      alert(err);
      return console.log(err);
    })
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
