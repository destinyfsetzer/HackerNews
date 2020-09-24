import React, { Component } from 'react'

class DisplayArticleCard extends Component {
  render() {
    const items = this.props.items
    // const {url, title, author, created_at, points} = this.props.article;
    return (
      <div>
        <h6> {items.url} </h6>
        <a href = {items.url}>
          <h3> {items.title} </h3>
        </a>
        <h4> {items.author} | {items.created_at} | {items.points} </h4>
      </div>
    )
  }
}

export default DisplayArticleCard;
