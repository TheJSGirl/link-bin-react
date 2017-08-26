import React, {Component} from 'react';
import propTypes from 'prop-types';

class BookMarkForm extends Component{
    _handleSubmit(e){
        e.preventDefault();
        const {addBookMark} = this.props;
        const name = this.refs.name.value;
        const link = this.refs.link.value;
        const bookmark = {
            name,
            link
        }
        addBookMark(bookmark);
        console.log(bookmark);
        this.refs.name.value = '';
        this.refs.link.value = '';
    }

    render(){
        return(
            <form onSubmit= {this._handleSubmit.bind(this)} >
                <div className="row">
                <input ref= "name" type="text"  placeholder="Enter a name" className="col l4 offset-l1 m8 offset-m2 s10 offset-s1 "/>
                <input ref= "link" type="text" placeholder="Enter a link" className="col l4 offset-l2 m8 offset-m2 s10 offset-s1"/>
                </div>
                <div className="row">
                <button className="btn waves-effect waves-light col l6 offset-l3 m8 offset-m2 s10 offset-s1">Add</button>  
                </div>
            </form>
        )
    }

}
export default BookMarkForm;

BookMarkForm.propTypes = {
    addBookMark: propTypes.func.isRequired
}
