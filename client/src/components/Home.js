import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getCardsQuery } from '../queries/queries.js';
import { Container, Row, Col } from 'react-bootstrap';
import {
  MdLocalGasStation,
  MdRestaurant,
  MdCardTravel,
  MdComputer,
  MdPhoneIphone
} from 'react-icons/md';
import { TiHomeOutline } from 'react-icons/ti';
import { GiCeilingLight } from 'react-icons/gi';

import Category from './Category';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
      category: 'gas'
    };
  }

  render() {
    const { data } = this.props;
    const { category } = this.state;
    return (
      <Row>
        <Col xs={11} sm={5}>
          <Row style={{ margin: 'auto', width: '95%' }}>
            <Col xs={4} className="categories">
              <button
                className="category_container"
                onClick={e => this.setState({ category: 'gas' })}
              >
                <MdLocalGasStation />
                <span>Gas</span>
              </button>
            </Col>
            <Col xs={4} className="categories">
              <button
                className="category_container"
                onClick={e => this.setState({ category: 'restaurant' })}
              >
                <MdRestaurant />
                <span>Restaurant</span>
              </button>
            </Col>
            <Col xs={4} className="categories">
              <button
                className="category_container"
                onClick={e => this.setState({ category: 'travel' })}
              >
                <MdCardTravel />
                <span>Travel</span>
              </button>
            </Col>
            <Col xs={4} className="categories">
              <button
                className="category_container"
                onClick={e => this.setState({ category: 'online' })}
              >
                <MdComputer />
                <span>Online Shopping</span>
              </button>
            </Col>
            <Col xs={4} className="categories">
              <button
                className="category_container"
                onClick={e => this.setState({ category: 'furnitures' })}
              >
                <TiHomeOutline />
                <span>Furnitures Store</span>
              </button>
            </Col>
            <Col xs={4} className="categories">
              <button
                className="category_container"
                onClick={e => this.setState({ category: 'utilities' })}
              >
                <GiCeilingLight />
                <span>Utilities</span>
              </button>
            </Col>
            <Col xs={4} className="categories">
              <button
                className="category_container"
                onClick={e => this.setState({ category: 'phone' })}
              >
                <MdPhoneIphone />
                <span>Phone Bill</span>
              </button>
            </Col>
          </Row>
        </Col>
        <Col
          xs={11}
          sm={7}
          style={{
            background: 'aliceblue'
          }}
        >
          <h3 style={{ paddingLeft: '10px' }}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </h3>
          <Category data={data} category={category} />
        </Col>
      </Row>
    );
  }
}

export default graphql(getCardsQuery)(Home);
