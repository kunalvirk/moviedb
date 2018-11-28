import React, { Component } from 'react';
import axios from 'axios';
import {API_IMAGE,API_KEY,API_ROOT} from '../../config';
import css from './moviesView.css';

class MoviesView extends Component {

    state = {
        category : this.props.match.params.category,
        id : this.props.match.params.id,
        content : [],
        loader : 1
    }

    shouldComponentUpdate(nextState) {
        if (nextState.content !== this.state.content) {
            axios.get(`${API_ROOT}/${this.state.category}/${this.state.id}?api_key=${API_KEY}`)
            .then(response => {
                this.setState({
                    content : response.data
                }, () => {
                    this.setState({
                        loader : 0
                    })
                })
            });
        } else {
            console.log('no need to update!!!')
        }
    }

    renderItems = () => {
        let data = this.state.content;
        return (
            <div className={css.contentInfo}>
            <div className={css.contentBackdrop}><img src={`${API_IMAGE}/${data.poster_path}`} alt="" /></div>
            <div className={`container ${css.contentFront}`}>
                <div className={css.contentHeader}>
                    <div className={css.contentPoster}>
                        <img src={`${API_IMAGE}/${data.poster_path}`} alt="" />
                    </div>
                    <div className={css.contentBrief}>
                        <h2>{data.name}</h2>
                        <p>{data.overview}</p>
                    </div>
                </div>
            </div>
            </div>
        )
    }


    render() {
        return (
            <div>
                <div className="loader" style={{opacity : this.state.loader}}>Loading</div>
                {this.renderItems()}
            </div>
        );
    }
}

export default MoviesView;