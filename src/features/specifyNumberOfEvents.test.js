import React from 'react';
import { loadFeature, defineFeature } from 'jest-cucumber';
import { mount } from 'enzyme';
import App from '../App';
import NumberOfEvents from '../NumberOfEvents';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
  test("When the user hasn't specified a number, 32 is the default number", ({ given, when, then }) => {
    let AppWrapper;
    given('the user had not specified the number of events', () => {
    });

    when('the user loads the list of events', () => {
      AppWrapper = mount(<App />);
    });

    then('32 events should be shown', () => {
      AppWrapper.update();
      expect(AppWrapper.find(".event").length).toBeLessThanOrEqual(32);
    });
  });

  test('User can change the number of events they want to selects', ({ given, when, then }) => {
    let AppWrapper;
    given('the user wanted to see a certain number of events', () => {
      AppWrapper = mount(<App />);
    });

    when('the user selects a certain number of events', () => {
      const numberOfEvents = { target: { value: 13 } };
      AppWrapper.find('.NumberOfEvents').simulate('change', numberOfEvents);
    });

    then('the chosen number of events are visible', () => {
      const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
      expect(NumberOfEventsWrapper.state('eventNumber')).toBe(32);
    });
  });
});