import React, { Component, useState } from 'react';
import { Row, Col, Image, Container, Jumbotron } from 'react-bootstrap';
import 'animate.css/animate.min.css';
import ScrollAnimation from 'react-animate-on-scroll';
import { graphql } from 'react-apollo';
import { getCategoryQuery } from '../queries/queries.js';

import {
  MdLocalGasStation,
  MdRestaurant,
  MdCardTravel,
  MdComputer,
  MdPhoneIphone,
  MdLocalGroceryStore
} from 'react-icons/md';
import { TiHomeOutline } from 'react-icons/ti';
import { GiCeilingLight } from 'react-icons/gi';
import { IoIosDesktop } from 'react-icons/io';

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
      return data.Cards.sort((a, b) => {
        if (b[`${category}`] === a[`${category}`]) {
          return b.name.length - a.name.length;
        } else {
          return b[`${category}`] - a[`${category}`];
        }
      })
        .slice(0, 8)
        .map(card => {
          return (
            <ScrollAnimation key={card.name} animateIn="fadeIn" animateOnce={true}>
              <Card card={card} category={category} />
            </ScrollAnimation>
          );
        });
    }
  }

  displayCategoryIcon() {
    let { data, category } = this.props;
    if (data.loading) {
      return <div>...</div>;
    } else {
      if (category === 'gas') return <MdLocalGasStation />;
      if (category === 'restaurant') return <MdRestaurant />;
      if (category === 'travel') return <MdCardTravel />;
      if (category === 'online') return <MdComputer />;
      if (category === 'phone') return <MdPhoneIphone />;
      if (category === 'grocery') return <MdLocalGroceryStore />;
      if (category === 'furnitures') return <TiHomeOutline />;
      if (category === 'streaming') return <IoIosDesktop />;
      if (category === 'utilities') return <GiCeilingLight />;
    }
  }

  displayCategoryHead() {
    let { data, category } = this.props;
    if (data.loading) {
      return <div>Loading cards...</div>;
    } else {
      const { Category } = this.props.data;
      return (
        <Jumbotron style={{ padding: '1rem 1rem', marginTop: '1rem' }} fluid>
          <Container>
            <h3>
              <span style={{ fontSize: 'larger', margin: '-3px 3px' }}>
                {this.displayCategoryIcon()}
              </span>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </h3>
            <p>{Category.detail}</p>
            <p style={{ fontSize: '12px' }}>
              * Below is a list of popular merchants in this category. While the list can be a
              helpful guide, we does not control how credit card publishers identify merchants or
              purchases are categorized.
            </p>
            <Row>
              {Category.merchant.map(merchant => (
                <Col xs={4} key={merchant} style={{ color: 'indianred', fontSize: '14px' }}>
                  <p style={{ textAlign: 'center' }}>{merchant}</p>
                </Col>
              ))}
            </Row>
          </Container>
        </Jumbotron>
      );
    }
  }

  render() {
    return (
      <Container>
        {this.displayCategoryHead()}
        <ol>{this.displayCards()}</ol>
      </Container>
    );
  }
}

const Card = props => {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);
  const { card, category } = props;
  return (
    <li
      className={hovered ? 'pulse animated ' : ''}
      style={{ marginBottom: '18px' }}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      <a href={`/cards/${card.name}`}>
        <div>
          <p style={{ margin: 0 }}>
            {card.name} - {card[`${category}`]}%
            <span style={{ paddingLeft: '5px', color: 'hotpink', fontStyle: 'oblique' }}>
              {card[`${category}Additional`] && '(' + card[`${category}Additional`] + ')'}
            </span>
          </p>
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
      </a>
    </li>
  );
};

// export default Category;
export default graphql(getCategoryQuery, {
  options: props => {
    return {
      variables: {
        name: `${props.category}`
      }
    };
  }
})(Category);
