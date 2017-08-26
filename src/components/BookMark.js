import React, {Component} from 'react';
import propTypes from 'prop-types';
// import Linkify from 'react-linkify';


class BookMark extends Component{
    
    render(){
        console.log(this.props);
        const {name, link} = this.props.bookmark;
        return(
            <div className="col s12 m3 l2 card teal lighten-2" style={{marginRight: '1%'}} >
                <div className="card-image">
                <span className="card-title"></span>
                </div>
                <div className="card-content">
                <p>{name}</p>
                </div>
                <div className="card-action">
                <a href={link} target="_blank" className="b-link">Visit Link</a>
                </div>
            </div>
        );
    }
}

export default BookMark;

BookMark.propTypes = {
    bookmark: propTypes.object.isRequired
}



