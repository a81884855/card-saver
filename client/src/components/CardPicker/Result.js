import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getCardsQuery } from '../../queries/queries.js';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Container, Row, Col, Image } from 'react-bootstrap';

export class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.compare = this.compare.bind(this);
  }

  compare(cards) {
    const { selected } = this.props;
    const categories = Array.from(selected);
    cards.forEach(card => {
      categories.forEach((category, index) => {
        let total_reward = card[category] * 12 * this.props[index][category];
        if (total_reward > card[`${category}Limit`]) {
          total_reward -= (card[category] - 1) * 12 * this.props[index][category];
        }
        total_reward = total_reward / 100 - card.annual;
        if (!this.state[category] || (total_reward > this.state[category] || 0))
          this.setState({ [category]: total_reward, [`${category}Card`]: card });
      });
    });
  }

  displayResult = props => {
    const { data, selected } = props;
    const categories = Array.from(selected);
    if (data.loading) {
      return (
        <span>
          Calculating
          <CircularProgress />
        </span>
      );
    } else {
      this.compare(data.Cards);
      return categories.map(category => {
        console.log(this.state);
        return <Card key={1} card={this.state[`${category}Card`]} />;
      });
    }
  };

  render() {
    return <Container>{this.displayResult(this.props)}</Container>;
  }
}

export class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false
    };
    this.toggleHover = this.toggleHover.bind(this);
  }
  toggleHover() {
    this.setState({
      hovered: true
    });
    setTimeout(() => {
      this.setState({
        hovered: false
      });
    }, 1500);
  }
  render() {
    const { card } = this.props;
    console.log(card);
    const { hovered } = this.state;
    return (
      <>
        {card && (
          <Col
            xs={10}
            md={6}
            lg={4}
            key={card.id}
            style={{ marginBottom: '15px' }}
            onClick={() => this.props.handleShow(card.name, card.website)}
          >
            <Image
              src={`/images/${card.image}`}
              style={{
                width: '100%',
                border: 'none'
              }}
              onMouseEnter={this.toggleHover}
              className={hovered ? 'flipInX animated' : ''}
              thumbnail
            />
            <p style={{ textAlign: 'center' }}>{card.name}</p>
          </Col>
        )}
      </>
    );
  }
}

export default graphql(getCardsQuery)(Result);
