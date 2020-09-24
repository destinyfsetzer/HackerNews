import React, { Component } from 'react'

class DisplayArticleCard extends Component {

  render() {
    const items = this.props.items
    const rawDate = new Date(items.created_at)
    const formattedDate = rawDate.toLocaleDateString();

    return (
      <div>
        <h6> {items.url} </h6>
        <a href = {items.url}>
          <h3> {items.title} </h3>
        </a>
        <h4> Author: {items.author} | Date Created: {formattedDate} | Points: {items.points} </h4>
      </div>
    )
  }
}

export default DisplayArticleCard;
