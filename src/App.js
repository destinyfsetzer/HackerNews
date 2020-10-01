import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import ListArticles from './components/ListArticles';
import SearchForm from './components/SearchForm';

class App extends Component {
    state = {
      articles: [],
      searchfield: ''
    }

  getArticles = () => {
        return axios.get('http://hn.algolia.com/api/v1/search?tags=front_page')
        .then(res => {
          const articles = res.data.hits
          this.setState({ articles: [...articles]})
        })
  }

  componentDidMount() {
    this.getArticles()
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value })
  }

  render() {
    const filterOnTitle = this.state.articles.filter(article =>{
      return article.title.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })

    const filterOnAuthor = this.state.articles.filter(article =>{
      return article.author.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })

     const filterOnTags = this.state.articles.filter(article =>{
      return article._tags.includes(this.state.searchfield.toLowerCase());
    })

    if (this.state.articles.length === 0) {
      return <h1>Loading</h1>
    } else {
      return (
          <div>
            <SearchForm articles={this.state.articles} filterChange={this.onSearchChange}/>
            <ListArticles  articles={filterOnAuthor}/>
            <ListArticles  articles={filterOnTitle}/>
            <ListArticles  articles={filterOnTags}/>
          </div>
      );
    }
  }
}
 export default App;

