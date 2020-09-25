import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import ListArticles from './components/ListArticles';
import SearchForm from './components/SearchForm';

class App extends Component {
    state = {
      articles: []
    }

  getArticles = () => {
        return axios.get('http://hn.algolia.com/api/v1/search?tags=front_page')
        .then(res => {
          // console.log('data', res.data.hits)
          const articles = res.data.hits
          this.setState({ articles: [...articles]})
        })
      }
      render() {
        // console.log(this.state.articles)
        return(
            <div>
              <SearchForm />
              <button onClick={this.getArticles}>Oi mate</button>
              <ListArticles articles={this.state.articles}/>
            </div>
          )
       }
}
 export default App;

