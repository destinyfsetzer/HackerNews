import React, { Component } from 'react';
import DisplayArticleCard from './DisplayArticleCard'


class ListArticles extends Component {
    state = {
        articles: []
    }

    render() {
      return(
        <div>
            {this.state.articles.map((article) => {return <DisplayArticleCard key ={article.id} info={article} />
    })}
        </div>
      );
    }
}


export default ListArticles;