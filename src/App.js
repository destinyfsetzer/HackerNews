import React, { Component } from 'react';
import './App.css';
// import ListArticles from './ListArticles';
// import SearchForm from './SeachForm';
import axios from 'axios';

class App extends Component {
    state = {
      articles: []
    }
  

  getArticles = () => {
        return axios.get('http://hn.algolia.com/api/v1/search?tags=front_page')
        .then(res => {
          const articles = res.data
          console.log(articles)
            this.setState({ article: articles})
            
          })
          
   }
        render() {
          return(
            <div>
              <button onClick={this.getArticles}>Oi mate</button>
              {/* <ListArticles />
              <SearchForm /> */}
            </div>
          )
       }
       
}
 export default App;
        

            
          
