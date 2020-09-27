import React, {Component} from 'react';
import axios from 'axios';


class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            articles: {},
         }
    }

    fetchSearchResults = (updatedPageNo = '', query) =>{
        const pageNumber = updatedPageNo ? `&page=${updatedPageNo}` : '';
        const searchUrl = `http://hn.algolia.com/api/v1/search?query=${query}${pageNumber}`
        axios.get({searchUrl})
        .then(response => response.json())

    };

    handleOnInputChange = (e) => {
        e.preventDefault()
         const query = e.target.value;
         this.setState({input: query}, () => {
             this.fetchSearchResults(1, query);
         })
    };


    render() {
        const {query} = this.state;
        return (
            <div className='topnav'>
               <a href='https://hn.algolia.com/'> <img src='https://d3nb9u6x572n0.cloudfront.net/packs/media/images/logo-hn-search-a822432b.png' alt="hacker rank logo" height='50px' width='50px'/></a>
                <h4 className='header'> Search <br/> Hacker News</h4>
                <label>
                    <input
                        type='text'
                        value={query}
                        id='search-field'
                        placeholder= "🔎 Search stories by title, url or author"
                        onChange={this.handleOnInputChange}
                    />
                </label>
            </div>
          );
    }
}
export default SearchForm;



