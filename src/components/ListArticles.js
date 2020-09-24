import React, { Component } from 'react';
import DisplayArticleCard from './DisplayArticleCard'


class ListArticles extends Component {
    constructor(props){
        super(props)
        this.state = {
        articles: ["poop", "more poop"]
        }
    }

    render() {
        console.log("list articles", this.props.articles)
      return(
        <div>
            {this.props.articles.map((article) => {return <DisplayArticleCard key={article.url} items={article} />
    })}
        </div>
      );
    }
}


export default ListArticles;