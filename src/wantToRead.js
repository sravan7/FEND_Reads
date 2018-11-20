import React, {Component} from 'react';
class WantToRead extends Component{
  render(){
    return (
      <ol className="books-grid">
      {
        this.props.book.map((book)=>{
        let image =  book.imageLinks ? book.imageLinks.thumbnail : "https://dummyimage.com/128x193/2e7c31/fff.png&text=Cover+Missing" ;
        return <li key={book.id}>
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${image}")` }}></div>
                <div className="book-shelf-changer">
                  <select>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{book.title}</div>
              <div className="book-authors">{book.authors ? book.authors.join(", "): ""}</div>
              <div className="book-ratings">Avg Rating:{book.averageRating} </div>
            </div>
          </li>;
        })
      }
      </ol>

    )


  }
}

export default WantToRead;
