const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('Jason', '87', 'someid@improv.com');
    expect(employee.name).toBe('Jason');
  expect(employee.id).toBe('Jason');
  expect(employee.email).toBe('someid@improv.com');
});

test('gets employee name, id, email and role', () => {
  const employee = new Employee('Jason', '87', 'someid@improv.com');
  expect(employee.getName()).toEqual(employee.name);
  expect(employee.getId()).toEqual(employee.id);
  expect(employee.getEmail()).toEqual(employee.email);
  expect(employee.getRole()).toEqual('Employee');
});