import React from 'react';
import { loadFeature, defineFeature } from 'jest-cucumber';
import { mount } from 'enzyme';
import App from '../App';
import Event from '../Event';

const feature = loadFeature('./src/features/showAndHideEventDetails.feature');

defineFeature(feature, test => {
  test('An event element is collapsed by default', ({ given, when, then }) => {
    let AppWrapper;
    given('the user has viewed the list of events', () => {
      AppWrapper = mount(<App />);
    });

    when('the user looks at the events', () => {
    });

    then("the event's info should not be shown in detail", () => {
      expect(AppWrapper.find('.eventDetails')).toHaveLength(0)
    });
  });

  test('User can expand an event to see its details', ({ given, when, then }) => {
    let AppWrapper;
    given('the user has chosen an event to look at', () => {
      AppWrapper = mount(<App />);
    });

    when('the user clicks on the event', () => {
      AppWrapper.update()
      AppWrapper.find('.details').at(0).simulate('click');
    });

    then("the event's info should be shown in detail", () => {
      expect(AppWrapper.find('.eventDetails')).toHaveLength(1)
    });
  });

  test('User can collapse an event to hide its details', ({ given, when, then }) => {
    let AppWrapper;
    given("the user no longer wannted to see a chosen event's details", () => {
      AppWrapper = mount(<App />);
    });

    when('the user clicks on the event', () => {
      AppWrapper.update()
      AppWrapper.find('.details').at(0).simulate('click');
      expect(AppWrapper.find('.eventDetails')).toHaveLength(1)
    });

    then("the event's info should not be shown in detail", () => {
      AppWrapper.find('.details').at(0).simulate('click');
      expect(AppWrapper.find('.eventDetails')).toHaveLength(0)
    });
  });
});