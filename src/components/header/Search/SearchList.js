import React from 'react';
import {Link} from 'react-router-dom';

const SearchList = (props) => {
    
    let results = props.suggestions;
    const showSuggetions = () => {
        return results.map((result, i) => {
            let contentType = result.media_type;
            switch(contentType) {
                case 'movie' :
                    contentType = 'Movies';
                    break;
                case 'tv' :
                    contentType = 'TV Shows';
                    break;
                default : 
                    contentType =  null;
                    break;
            }
            return (
                <li key={i}>
                        <Link to={`${result.media_type}/${result.id}`}>
                        {result.name ? result.name : result.original_title}
                        <span> in {contentType}</span>
                    </Link>
                </li>
            )
        })
        // console.log(results);
    }

    return (
        <ul style={{
            display : results.length > 0 ? 'block' : 'none'
        }}>
            {showSuggetions()}
        </ul>
    );
};

export default SearchList;