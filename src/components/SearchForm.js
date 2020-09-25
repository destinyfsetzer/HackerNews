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
        axios.get(searchUrl)
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
            <div className='search'>
                <h2 className='header'>Hacker News Search App</h2>
                <label>

                    <input
                        type='text'
                        value={query}
                        id='search-field'
                        placeholder="Search..."
                        onChange={this.handleOnInputChange}
                    />

                </label>
            </div>
          );
    }
}
export default SearchForm;