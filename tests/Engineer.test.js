const Engineer = require('../lib/Engineer.js');

test('creates a engineer object', () => {
  const engineer = new Engineer('George Washington', '432', 'engnr@improv.com', 'gwashington');

  expect(engineer.name).toBe('George Washington');
  expect(engineer.id).toBe('432');
  expect(engineer.email).toBe('engnr@improv.com');
  expect(engineer.githubUser).toBe('gwashington');
});

test('gets engineer name, id, email, githubUser, and role', () => {
  const engineer = new Engineer('George Washington', '432', 'engnr@improv.com', 'gwashington');

  expect(engineer.getName()).toEqual(engineer.name);
  expect(engineer.getId()).toEqual(engineer.id);
  expect(engineer.getEmail()).toEqual(engineer.email);
  expect(engineer.getGithubUser()).toEqual(engineer.githubUser);
  expect(engineer.getRole()).toEqual('Engineer');
});