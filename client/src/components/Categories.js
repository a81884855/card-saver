import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getCardsQuery } from '../queries/queries.js';
import { Row, Col } from 'react-bootstrap';
import Category from './Category';
import displayIcon from '../assets/helper/displayIcon';

const allCategory = [
  'gas',
  'restaurant',
  'grocery',
  'travel',
  'online',
  'furnitures',
  'streaming',
  'utilities',
  'phone'
];

export class Categories extends Component {
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
        <Col sm={12} lg={5}>
          <h4 style={{ margin: '0px 0px 20px 20px' }}>Category</h4>
          <Row style={{ margin: '0 auto 10px', width: '95%' }}>
            {allCategory.map(category => (
              <Col xs={4} className="categories">
                <button className="category_container" onClick={() => this.setState({ category })}>
                  {displayIcon(category)}
                  <span style={{ textTransform: 'capitalize' }}>{category}</span>
                </button>
              </Col>
            ))}
          </Row>
        </Col>
        <Col style={{ background: 'aliceblue' }}>
          <Category data={data} category={category} />
        </Col>
      </Row>
    );
  }
}

export default graphql(getCardsQuery)(Categories);
