const Intern = require('../lib/Intern.js');

test('creates a intern object', () => {
  const intern = new Intern('John Hancock', '555', 'intern@improv.com', 'A Team');

  expect(intern.name).toBe('John Hancock');
  expect(intern.id).toBe('555');
  expect(intern.email).toBe('intern@improv.com');
  expect(intern.school).toBe('A Team');
});

test('gets intern name, id, email, school, and role', () => {
  const intern = new Intern('John Hancock', '555', 'intern@improv.com', 'A Team');

  expect(intern.getName()).toEqual(intern.name);
  expect(intern.getId()).toEqual(intern.id);
  expect(intern.getEmail()).toEqual(intern.email);
  expect(intern.getSchool()).toEqual(intern.school);
  expect(intern.getRole()).toEqual('Intern');
});