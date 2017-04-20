import test from 'ava';
import reportAggregation from '../solutions/reportAggregation';


test('should group by type and color and pick the largest by size', (t) => {
  const initialReport = {
    currentMonth: {
      numberOfEmployees: 5,
      numberOfLeaders: 1,
      inactiveEmployees: 1,
      hoursWorked: 100,
    },
    ever: {
      numberOfEmployees: 10,
      hoursWorked: 3500,
    },
  };

  const timesheets = [
    { id: 1, name: 'Johnny', hours: 70, leader: true, active: true },
    { id: 2, name: 'Derek', hours: 80, leader: false, active: true },
    { id: 3, name: 'Michel', hours: 10, leader: false, active: true },
    { id: 4, name: 'Daniel', hours: 0, leader: false, active: false },
    { id: 5, name: 'Marie', hours: 10, leader: true, active: true },
    { id: 6, name: 'Norton', hours: 15, leader: false, active: true },
    { id: 7, name: 'Clare', hours: 30, leader: false, active: true },
    { id: 8, name: 'Diana', hours: 30, leader: false, active: false },
    { id: 9, name: 'Daisy', hours: 30, leader: false, active: true },
    { id: 10, name: 'Don', hours: 30, leader: false, active: true },
  ];

  const expected = {
    currentMonth: {
      numberOfEmployees: 8,
      numberOfLeaders: 2,
      inactiveEmployees: 2,
      hoursWorked: 100,
    },
    ever: {
      numberOfEmployees: 10,
      hoursWorked: 3500,
    },
  };

  const result = reportAggregation(initialReport)(timesheets);
  t.deepEqual(result, expected);
});
