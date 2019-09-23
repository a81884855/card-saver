import React, { Component } from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { getCardQuery } from '../queries/queries.js';
import { graphql } from 'react-apollo';

export class Card extends Component {
  displayCard() {
    let { data, category } = this.props;
    let { Card } = data;
    if (data.loading) {
      return <div>Loading cards...</div>;
    } else {
      return (
        <React.Fragment>
          <Button variant="success" onClick={() => this.props.history.push('/')}>
            Back
          </Button>
          <div style={{ margin: '0 auto', width: '80%' }}>
            <h1>{Card.name}</h1>
            <div>
              <Image
                src={Card.image}
                style={{
                  border: 'none',
                  background: 'none',
                  padding: 'none',
                  margin: '0 0 0 10px',
                  width: '88%'
                }}
                thumbnail
              />
            </div>
            <div>
              <h2>All Reward</h2>
              <ul>
                <li>
                  Gas Reward:
                  {Card.gasReward}%
                  {Card.gasReward_additional ? ' (' + Card.gasReward_additional + ')' : null}
                </li>
                <li>
                  Restaurant Reward:
                  {Card.restaurantReward}%
                  {Card.restaurantReward_additional
                    ? ' (' + Card.restaurantReward_additional + ')'
                    : null}
                </li>
                <li>
                  Online Shopping Reward:
                  {Card.onlineReward}%
                  {Card.onlineReward_additional ? ' (' + Card.onlineReward_additional + ')' : null}
                </li>
                <li>
                  Travel Reward:
                  {Card.travelReward}%
                  {Card.travelReward_additional ? ' (' + Card.travelReward_additional + ')' : null}
                </li>
              </ul>
            </div>
          </div>
        </React.Fragment>
      );
    }
  }

  render() {
    const { data } = this.props;
    return <Container>{this.displayCard()}</Container>;
  }
}

export default graphql(getCardQuery, {
  options: props => {
    console.log(`${props.match.params.name}`);

    return {
      variables: {
        name: props.match.params.name
      }
    };
  }
})(Card);
