import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getCardsQuery } from '../queries/queries.js';
import { Helmet } from 'react-helmet';
import { Col, Row, Image, Button } from 'react-bootstrap';

const head = () => {
  return (
    <Helmet bodyAttributes={{ class: 'allCardsPage' }}>
      <title>All Cards</title>
    </Helmet>
  );
};

export class CardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    };
  }
  displayCards() {
    let data = this.props.data;
    if (data.loading) {
      return <div>Loading cards...</div>;
    } else {
      return data.Cards.map(card => {
        return (
          <Col md={4} style={{ marginBottom: '20px' }}>
            <a href={`/cards/${card.name}`}>
              <Image
                src={`/images/${card.image}`}
                style={{
                  width: '100%'
                }}
                thumbnail
              />
              <p style={{ textAlign: 'center' }}>{card.name}</p>
            </a>
          </Col>

          //   <a href={`/cards/${card.name}`}>{card.name}</a>
          //   <Image
          //     src={`/images/${card.image}`}
          //     style={{
          //       border: 'none',
          //       background: 'none',
          //       padding: 'none',
          //       margin: '0 0 0 10px',
          //       width: '88%'
          //     }}
          //     thumbnail
          //   />
          // </li>
        );
      });
    }
  }
  render() {
    return (
      <Row>
        {head()}
        {this.displayCards()}
      </Row>
    );
  }
}

export default graphql(getCardsQuery)(CardList);
