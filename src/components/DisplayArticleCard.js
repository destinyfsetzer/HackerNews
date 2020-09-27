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
        <a href = {items.url}>
        <h4> {items.title} </h4>
        </a>
         <h6>( {items.url} )</h6>
        </span>
        <h5> Author: {items.author} | Date Created: {formattedDate} | Points: {items.points} </h5>
        </ol>
      </div>
    )
  }
}

export default DisplayArticleCard;
