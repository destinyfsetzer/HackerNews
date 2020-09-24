import React, { Component } from 'react'

class DisplayArticleCard extends Component {
  render() {
    const {url, title, author, created_at, points} = this.props.article;
    return (
      <div>
        <h6> {url} </h6>
        <a href = {url}>
          <h3> {title} </h3>
        </a>
        <h4> {author} | {created_at} | {points} </h4>
      </div>
    )
  }
}

export default DisplayArticleCard;
