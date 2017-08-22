import React, {Component} from 'react';
import propTypes from 'prop-types';
import Linkify from 'react-linkify';


class BookMark extends Component{
    
    render(){
        console.log(this.props);
        // const bookmark = this.props.bookmark;
        // const {bookmark} = this.props;
        const {name, link} = this.props.bookmark;
        return(
            
            <li>
                <strong>Name: {name} </strong>
                <Linkify><p>Link:{link}</p></Linkify> 
            </li>
            
        )
    }
}

export default BookMark;

BookMark.propTypes = {
    bookmark: propTypes.object.isRequired
}



