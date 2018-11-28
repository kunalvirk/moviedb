import React, { Component } from 'react';
import {API_IMAGE, API_KEY, API_ROOT} from '../../config';
import axios from 'axios';
import {Link} from 'react-router-dom';

import css from './trending.css';

class TrendingSection extends Component {

    state = {
        genre : this.props.genre,
        trendingMovies : [],
        trendingTVShows : []
    }

    getCurrMonth = () => {
        let date = new Date();
        return date.getFullYear() + '-' + date.getMonth();
    } 

    // getTVGenres = () => {
    //     axios.get(`${API_ROOT}/genre/tv/list?api_key=${API_KEY}`)
    //     .then(response => console.log('tv genres', response.data.genres))
    // }

    // getMovieGenres = () => {
    //     axios.get(`${API_ROOT}/genre/movie/list?api_key=${API_KEY}`)
    //     .then(response => console.log('movies genres',response.data.genres))
    // }

    componentWillMount() {

        //Get Trending movies
        axios.get(`${API_ROOT}/discover/tv?&language=en-US&sort_by=popularity.desc&api_key=${API_KEY}`)
        .then(response => {
            this.setState({
                trendingMovies : response.data.results.slice(0, 5)
            })
        });

    }

    getTrendingShows = () => {
        let data = this.state.trendingMovies;
        return data.map((movie, i) => {
            return (
                <div id="showsBox" className="flexBox" key={i}>
                    <div className={css.flexImg}>
                        <img src={API_IMAGE + '/' + movie.backdrop_path} alt="" />
                    </div>
                    <div className={css.showTitle}>
                        <h2>{movie.name}</h2>
                        <p>{movie.overview.substr(0, 80)}...</p>
                        <Link to={`tv/${movie.id}`}>Explore Show</Link>
                    </div>
                </div>
            )
        })
    }


    render() {
        console.log(this.state.trendingMovies)
        return (
            <div className="container">
                <h2>Trending TV Shows</h2>
                <div className="flexGrid">
                    {this.getTrendingShows()}
                </div>
            </div>
        );
    }
}

export default TrendingSection;