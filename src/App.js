import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import ListArticles from './components/ListArticles';
import SearchForm from './components/SearchForm';
import { Button } from '@material-ui/core';

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
                <Button onClick={this.getArticles} variant="contained" color="primary" >
                    Get me Articles!
                </Button>
              {/* <Button onClick={this.getArticles}>Oi mate</Button> */}
              <ListArticles articles={this.state.articles}/>
            </div>
          )
       }
}
 export default App;

