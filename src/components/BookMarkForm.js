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
            <div>
                <form onSubmit= {this._handleSubmit.bind(this)}>
                    <input ref= "name" type="text" placeholder="website name"/> &nbsp;
                    <input ref= "link" type="text" placeholder= "website link"/> &nbsp;
                    <button >Submit</button>
                </form>
            </div>
        )
    }

}
export default BookMarkForm;

BookMarkForm.propTypes = {
    addBookMark: propTypes.func.isRequired
}
