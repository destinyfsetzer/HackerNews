import React, { Component } from 'react'

class DisplayArticleCard extends Component {

  render() {
    const items = this.props.items
    const rawDate = new Date(items.created_at)
    const formattedDate = rawDate.toLocaleDateString();

    return (
      <div>
        <ol>
        <span>
        <a href = {items.url} target="_blank" rel="noopener noreferrer">
          <h4> {items.title} </h4>
        </a>
        </span>
        <h5> Author: {items.author} | Date Created: {formattedDate} | Points: {items.points} </h5>
        <h6>Tags: {items._tags}</h6>
        <h6> {items.url} </h6>
        </ol>
      </div>
    )
  }
}

export default DisplayArticleCard;
