/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

import { expect } from 'chai';
import App from '../../client/src/components/app';
import Header from '../../client/src/components/header';
import Options from '../../client/src/components/options';

configure({ adapter: new Adapter() });

describe('Test App component', () => {
  it('App component returns one element', () => {
    const matchProps = { params: { id: 1 } };
    const wrapper = shallow(<App match={matchProps} />);
    expect(wrapper).to.have.lengthOf(1);
  });

  it('App child returns 2 children', () => {
    const matchProps = { params: { id: 1 } };
    const wrapper = shallow(<App match={matchProps} />);
    expect(wrapper.find('div').children()).to.have.lengthOf(2);
  });
});

describe('Test Header component', () => {
  it('Header component returns one element', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).to.have.lengthOf(1);
  });

  it('Header child returns 5 children', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('div').children()).to.have.lengthOf(5);
  });
});

describe('Test Options component', () => {
  const productId = 1;

  it('Options component returns one element', async () => {
    const wrapper = await shallow(<Options productId={productId} />);
    expect(wrapper).to.have.lengthOf(1);
  });

  it('Options child returns 5 children', async () => {
    const wrapper = await shallow(<Options productId={productId} />);
    expect(wrapper.state('productId')).to.equal(productId);
  });

  it('Calls componentDidMount', async () => {
    sinon.spy(Options.prototype, 'componentDidMount');
    const wrapper = await mount(<Options productId={productId} />);
    expect(Options.prototype.componentDidMount).to.have.property('callCount', 1);
  });
});
