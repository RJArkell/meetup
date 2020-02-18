import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => { }} />);
  });

  test('render text input', () => {
    expect(NumberOfEventsWrapper.find('.NumberOfEvents')).toHaveLength(1);
  });

  test('render text input correctly', () => {
    const eventNumber = NumberOfEventsWrapper.state('eventNumber');
    expect(NumberOfEventsWrapper.find('.eventNumberInput').prop('value')).toBe(eventNumber);
  });

  test('32 events should be shown by default', () => {
    expect(NumberOfEventsWrapper.state('eventNumber')).toBe(32)
  });

  test('change state when input changes', () => {
    const eventObject = { target: { value: 30 } };
    NumberOfEventsWrapper.find('.eventNumberInput').simulate('change', eventObject);
    expect(NumberOfEventsWrapper.state('eventNumber')).toBe(30);
  });
});