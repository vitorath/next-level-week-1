import { User } from '@models/User';

test('it shoud be ok', () => {
  const user = new User('Vitor', 'teste@teste');

  expect(user.name).toEqual('Vitor');
});
