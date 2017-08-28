import React, {Component} from 'react';
import propTypes from 'prop-types';
import BookMark from './BookMark';

class BookMarkList extends Component{

    render(){
        console.log(this.props);
        const {bookmarks} = this.props;
        let i = 0;
        return(
            <div className="row">
                {
                    bookmarks.map((bookmark) => <BookMark key={i++} bookmark={bookmark}/>)
                }
            </div>
        )
    }
}

export default BookMarkList;

BookMarkList.propTypes = {
    bookmarks : propTypes.array.isRequired
}

