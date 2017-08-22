import React, {Component} from 'react';
import propTypes from 'prop-types';

class BookMark extends Component{
    
    render(){
        console.log(this.props);
        // const bookmark = this.props.bookmark;
        // const {bookmark} = this.props;
        const {name, link} = this.props.bookmark;
        return(
            <li>
                <strong>Name: {name} </strong>
                <p>Link:{link} </p>
            </li>
        )
    }
}

export default BookMark;

BookMark.propTypes = {
    bookmark: propTypes.object.isRequired
}



