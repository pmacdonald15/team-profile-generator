const Manager = require('../lib/Manager.js');

test('creates a manager object', () => {
  const manager = new Manager('Phillip MacDonald', '555', 'pmacdonald2015@yahoo.com', '777b');

  expect(manager.name).toBe('Phillip MacDonald');
  expect(manager.id).toBe('555');
  expect(manager.email).toBe('mngr@improv.com');
  expect(manager.officeNumber).toBe('355A');
});

test('gets manager name, id, email and role', () => {
  const manager = new Manager('Phillip MacDonald', '555', 'pmacdonald2015@yahoo.com', '777b');
  expect(manager.getName()).toEqual(manager.name);
  expect(manager.getId()).toEqual(manager.id);
  expect(manager.getEmail()).toEqual(manager.email);
  expect(manager.getRole()).toEqual('Manager');
});