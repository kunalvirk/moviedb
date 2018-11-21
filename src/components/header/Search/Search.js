import React, { Component } from 'react';
import axios from 'axios';

import {API_KEY, API_ROOT} from '../../../config';
import SearchList from './SearchList';

class Search extends Component {

    state = {
        mode : this.props.mode,
        results : []
    }

    getVal = (e)  => {

        let keyword = e.target.value;

        if (keyword === '') { 
            this.setState({
                results : []
            })
        } else {
            axios.get(`${API_ROOT}/search/${this.state.mode}?query=${keyword}&api_key=${API_KEY}`)
            .then(response => {
                this.setState({
                    results : response.data.results
                })
            })
        }

    }

    componentDidMount() {
        let searchbox = document.getElementById('searchbox');
        document.onclick = (e) => {
            if (e.target !== searchbox) {
                searchbox.nextSibling.style.display = 'none';
            } else {
                searchbox.nextSibling.style.display = 'block';
            }
        }
    }


    render() {
        return (
            <React.Fragment>
                <input type="text" id="searchbox" onChange={this.getVal} placeholder="Search for movies, tv shows and more..." />
                <SearchList suggestions={this.state.results} />
            </React.Fragment>
        );
    }
}

export default Search;

