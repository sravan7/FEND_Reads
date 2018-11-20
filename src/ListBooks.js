import React, {Component} from 'react';
import Read from './Read'
class ListBooks extends Component{
 state = {
   currentlyReading:[],
   read:[],
   wantToRead:[]
 }

  render(){
    this.props.books.map((array)=>{

      if(array.shelf==="currentlyReading"){
        this.state.currentlyReading.push(array);
      }
      else if (array.shelf==="wantToRead") {
        this.state.wantToRead.push(array)
      }
      else if (array.shelf==="read") {
        this.state.read.push(array)
      }
      else {
        console.log(array)
      }
    return ;
    })

    //console.log(this.state.currentlyReading);
    return(
   <div>
   <div className="bookshelf">
             <h2 className="bookshelf-title">currently Reading</h2>
             <div className="bookshelf-books">
             {<Read book={this.state.currentlyReading} moveShelf={this.props.moveShelf} keyID="currentlyReading" />}
             </div>
  </div>
  <div className="bookshelf">
            <h2 className="bookshelf-title">want to Read</h2>
            <div className="bookshelf-books"
              {
                <Read book={this.state.wantToRead} moveShelf={this.props.moveShelf} keyId="wantToRead" />
              }
            </div>
 </div>;
 <div className="bookshelf">
           <h2 className="bookshelf-title">Read</h2>
           <div className="bookshelf-books">
               { <Read book={this.state.read} moveShelf={this.props.moveShelf} keyID="Read" /> }
           </div>
</div>;
</div>
)
  }
}

export default ListBooks;
