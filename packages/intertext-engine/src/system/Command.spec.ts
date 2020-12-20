import { commandCtrl } from './Command';

describe('Command', () => {  

  test('validate should work', () => {
    expect(commandCtrl.validate({})).toBe(false);
    expect(commandCtrl.validate({ id: '123' })).toBe(false);
    expect(commandCtrl.validate({ id: '123', isCommand: true })).toBe(true);
  })

})