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
        this.boundShowPrevCard = this.showPrevCard.bind(this);
        this.boundShowNextCard = this.showNextCard.bind(this);
    }

    showNextCard() {
        if ((this.state.cardNumber + 1) !== this.state.cards.size) {
            this.setState({ cardNumber: this.state.cardNumber + 1 });
        }
    }

    showPrevCard() {
        if (this.state.cardNumber !== 0) {
            this.setState({ cardNumber: this.state.cardNumber - 1 });
        }
    }

    generateDots() {
        const times = this.state.cards.size;
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

    generateCards() {
        const cards = this.state.cards;
        //add the last card to the props. 
        //The last card will have the word and description as 
        //"Congratulations! You've completed this flashcard set."
        const cardsList = cards.map((card, index) => {
            return (
                <Card
                    key={index}
                    frontContent={card.get('word')}
                    backContent={card.get('description')}
                    showNextCard={this.boundShowNextCard}
                    showPrevCard={this.boundShowPrevCard}
                    cardNumber={this.state.cardNumber}
                />
            );
        })
        return (cardsList.toJS()[this.state.cardNumber]);
    }
    render() {
        return (
            <div>
                {this.generateCards()}
                <div className='card-container__dots-wrapper'>
                    {this.generateDots()}
                </div>
            </div>
        );
    }
}
export default CardContainer;