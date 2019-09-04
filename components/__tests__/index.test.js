import React, { Component } from 'react';
import { shallow } from 'enzyme';
import { Button } from '../index.tsx';


//expect(Object.keys(Button)).toMatchSnapshot();

describe('Button test', () => {
   const button = shallow(<Button type="warn" message="Button test"  />);
   it('exports  correctly', () => {
     expect(button);
   });
})