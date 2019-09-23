import React, { Component } from 'react';
import { Image, Container, Row, Col } from 'react-bootstrap';

export class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  displayCards() {
    let { data, category } = this.props;
    if (data.loading) {
      return <div>Loading cards...</div>;
    } else {
      console.log(data.Cards.sort((a, b) => b[`${category}Reward`] - a[`${category}Reward`]));
      return data.Cards.sort((a, b) => b[`${category}Reward`] - a[`${category}Reward`])
        .slice(0, 10)
        .map(card => {
          return (
            <li key={card.id}>
              <a href={`/cards/${card.name}`}>
                {card.name} - {card[`${category}Reward`]}%
                {card[`${category}Reward_additional`]
                  ? ' (' + card[`${category}Reward_additional`] + ')'
                  : null}
              </a>
              <div>
                <Image
                  src={card.image}
                  style={{
                    border: 'none',
                    background: 'none',
                    padding: 'none',
                    width: '80%'
                  }}
                  thumbnail
                />
              </div>
            </li>
          );
        });
    }
  }

  render() {
    return (
      <Container>
        <ol>{this.displayCards()}</ol>
      </Container>
    );
  }
}

export default Category;
