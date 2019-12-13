const mongoose = require('mongoose');
const Event = require('./Event');


describe('Event model', () => {
  it('has a required recipeId', () => {
    const event = new Event();
    const { errors } = event.validateSync();

    expect(errors.recipeId.message).toEqual('Path `recipeId` is required.');
  });

  it('has a required dateOfEvent', () => {
    const event = new Event();
    const { errors } = event.validateSync();

    expect(errors.dateOfEvent.message).toEqual('Path `dateOfEvent` is required.');
  });

  it('has a required rating', () => {
    const event = new Event();
    const { errors } = event.validateSync();

    expect(errors.rating.message).toEqual('Path `rating` is required.');
  });

  it('has a rating 0 or above', () => {
    const event = new Event({
      rating: -1
    });
    const { errors } = event.validateSync();

    expect(errors.rating.message).toEqual('Path `rating` (-1) is less than minimum allowed value (0).');
  });

  it('has a rating 5 or below', () => {
    const event = new Event({
      rating: 6
    });
    const { errors } = event.validateSync();

    expect(errors.rating.message).toEqual('Path `rating` (6) is more than maximum allowed value (5).');
  });
  
  it('has a day get virtual', () => {
    const event = new Event({
      dateOfEvent: new Date('2019-12-10T00:00:00')
    });
    expect(event.day).toEqual(10);
  });
  it('has a day set', ()=> {
    const event = new Event({
      dateOfEvent: new Date('2019-12-10T00:00:00')
    });
    event.day = 11;
    expect(event.dateOfEvent).toEqual(new Date('2019-12-11T00:00:00'));
  });
  it('has a month get', () => {
    const event = new Event({
      dateOfEvent: new Date('2019-10-11T00:00:00')
    });

    expect(event.month).toEqual(10);
  });

  it('has a month set', () => {
    const event = new Event({
      dateOfEvent: new Date('2019-12-11T00:00:00')
    });
    event.month = 10;
    expect(event.dateOfEvent).toEqual(new Date('2019-10-11T00:00:00'));
  });
  it('has a year get', () => {
    const event = new Event({
      dateOfEvent: new Date('2010-12-11T00:00:00')
    });

    expect(event.year).toEqual(2010);
  });

  it('has a year set', () => {
    const event = new Event({
      dateOfEvent: new Date('2019-12-11T00:00:00')
    });
    event.year = 2018;
    expect(event.dateOfEvent).toEqual(new Date('2018-12-11T00:00:00'));
  });
});
