import React, { Component } from 'react';

class Card extends Component {
  
    constructor() {
      super();
      this.state = {
        showAnswer: false
      }
    }
   
    render() {

      const content = this.state.showAnswer ? this.props.backContent : this.props.frontContent;
      const iconClass = this.state.showAnswer ? 'reply' : 'share';
      const cardClass = this.state.showAnswer ? 'back' : '';
      const contentClass = this.state.showAnswer ? 'back' : 'front';
      const actionClass = this.state.showAnswer ? 'active' : '';
  
      return (
        <div 
          className={`flashcard ${cardClass}`}
          onClick={() => this.setState({showAnswer: !this.state.showAnswer})}
        >
        <span className='card__counter'></span>
          <div 
            className='card__flip-card'
            onClick={ () => {
              this.setState({showAnswer: !this.state.showAnswer});
            }}
          >
  
            <span className={`fa fa-${iconClass}`}/>
          </div>
          <div className={`card__content--${contentClass}`}>
            {content}
          </div>
          <div className={`card__actions ${actionClass}`}>
            <button 
              type ="button"
              className={this.state.showAnswer? 'card__prev-button btn btn-success' : 'hide'}
              onClick={() => {
                this.props.showNextCard({"fc_id": this.props.cardId, "pref": 1});
                this.setState({showAnswer: false});
              }}
            >
              <b>Easy</b>
            </button>
            <button 
              type ="button"
              className={this.state.showAnswer? 'card__prev-button btn btn-warning' : 'hide'}
              onClick={() => {
                this.props.showNextCard({"fc_id": this.props.cardId, "pref": 2});
                this.setState({showAnswer: false});
              }}
            >
              <b>Medium</b>
            </button>
            <button 
              type ="button"
              className={this.state.showAnswer? 'card__prev-button btn btn-danger' : 'hide'}
              onClick={() => {
                this.props.showNextCard({"fc_id": this.props.cardId, "pref": 3});
                this.setState({showAnswer: false});
              }}
            >
              <b>Hard</b>
            </button>
          </div>
        </div>
      );
    }
  }
export default Card;  