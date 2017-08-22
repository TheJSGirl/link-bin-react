import React, {Component} from 'react';
import propTypes from 'prop-types';
import BookMark from './BookMark';

class BookMarkList extends Component{

    render(){
        console.log(this.props);
        const {bookmarks} = this.props;
        let i = 0;
        return(
            <ul>
                {
                    bookmarks.map((bookmark) => <BookMark key={i++} bookmark={bookmark}/>)
                }
            </ul>
        )
    }
}

export default BookMarkList;

BookMarkList.propTypes = {
    bookmarks : propTypes.array.isRequired
}

