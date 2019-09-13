import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getCardsQuery } from '../queries/queries.js';

export class CardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    };
  }
  displayCards() {
    let data = this.props.data;
    console.log(data);
    if (data.loading) {
      return <div>Loading cards...</div>;
    } else {
      return data.Cards.map(card => {
        return (
          <li
            key={card.id}
            onClick={e => {
              this.setState({ selected: card.id });
            }}
          >
            {card.name}
          </li>
        );
      });
    }
  }
  render() {
    return (
      <div>
        <ul id="book-list">{this.displayCards()}</ul>
      </div>
    );
  }
}

export default graphql(getCardsQuery)(CardList);
