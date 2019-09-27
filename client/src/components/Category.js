import React, { Component } from 'react';
import { Image, Container } from 'react-bootstrap';

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
      console.log(data);
      return data.Cards.sort((a, b) => b[`${category}`] - a[`${category}`])
        .slice(0, 10)
        .map(card => {
          return (
            <li key={card.id}>
              <a href={`/cards/${card.name}`}>
                {card.name} - {card[`${category}`]}%
                {card[`${category}Additional`] ? ' (' + card[`${category}Additional`] + ')' : null}
              </a>
              <div>
                <Image
                  src={`/images/${card.image}`}
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
