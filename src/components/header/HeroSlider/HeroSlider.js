import React, { Component } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import Button from '../../reusableComponents/Button';

import {API_ROOT, API_KEY, API_IMAGE} from '../../../config';

import css from './heroSlider.css';

class HeroSlider extends Component {

    state = {
        items : [],
        slides : this.props.slides
    }


    componentWillMount() {
        axios.get(`${API_ROOT}/trending/movie/day?api_key=${API_KEY}`)
        .then(response => {            
            this.setState({
                items : response.data.results.slice(0, 5)
            })
        })
    }


    sliderTemplate = () => {
        let obj = this.state.items;
        return obj.map((item, i) => {        
            return (
                <div key={i}>
                    <div className={css.sliderImage}>
                        <img src={`${API_IMAGE + item.poster_path}`} alt={(item.original_title) ? item.original_title : item.original_name} />
                    </div> 
                    <div className={css.sliderTitle}>
                        <h2>{(item.original_title) ? item.original_title : item.original_name}</h2>
                        <p>{item.overview}</p>
                        <div className={css.slideInfo}>
                            <span>
                                {item.vote_average * 10}% likes this!
                            </span>
                            <Button text="View More" action={true} link={"movie/" + item.id} />
                        </div>
                    </div>
                </div>
            )
        })
    }

    render() {
        let settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        }
        return (
            <div className={css.heroSlider}>
                <Slider {...settings}>
                    {this.sliderTemplate()}
                </Slider>
            </div>
        );
    }
}

export default HeroSlider;