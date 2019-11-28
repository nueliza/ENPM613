import React, { Component } from 'react';
import Card from "./card";
import Immutable from 'immutable';
import _ from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { iconMapping } from "../utils/iconsMapping.js";

import "./flashcards.css";

class CardContainer extends Component {
    constructor() {
        super();
        this.state = {
            cards: Immutable.fromJS([{
                word: 'Jazz',
                description: 'A type of music of black American origin characterized by improvisation, syncopation, and usually a regular or forceful rhythm, emerging at the beginning of the 20th century.',
            }, {
                word: 'Reggae',
                description: 'Music like Bob Marley, man.',
            }, {
                word: 'Folk',
                description: 'Music like Bob Dylan, man.',
            }
            ]),
            cardNumber: 0
        };
        this.boundShowNextCard = this.showNextCard.bind(this);
    }

    showNextCard(payload) {
        this.props.setPreference(payload);
        
    }

    generateDots() {
        const times = 1;
        let arr = [];
        _.times(times).forEach((num, index) => {
            const dotClass = num === this.state.cardNumber ? 'active' : '';
            arr.push(
                <FontAwesomeIcon icon={iconMapping["Circle"]} 
                    className={`card-container__dot fa fa-circle ${dotClass}`}
                    onClick={() => this.setState({ cardNumber: num })} size="1x" 
                    key ={index}
                    />
        )
        });
        return arr;
    }

    render() {
        const card = this.props.flashcard;
        return (
            <div>
                <Card
                    frontContent={card.question}
                    backContent={card.answer}
                    cardId = {card.fc_id}
                    showNextCard={this.boundShowNextCard}
                   // showPrevCard={this.boundShowPrevCard}
                    cardNumber={this.state.cardNumber}
                />
                <div className='card-container__dots-wrapper'>
                   
                </div>
            </div>
        );
    }
}
export default CardContainer;