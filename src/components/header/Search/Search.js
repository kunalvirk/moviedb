import React, { Component } from 'react';

import SearchList from './SearchList';

class Search extends Component {

    state = {
        init : ''
    }

    getVal = (e)  => {
        console.log(e.target.value);
    }

    render() {
        return (
            <div>
                <input type="text" onKeyUp={this.getVal} />
            </div>
        );
    }
}

export default Search;

