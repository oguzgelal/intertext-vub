import { componentCtrl } from './Component';

describe('Component', () => {  

  test('validate should work', () => {
    expect(componentCtrl.validate({})).toBe(false);
    expect(componentCtrl.validate({ id: '123' })).toBe(false);
    expect(componentCtrl.validate({ id: '123', isComponent: true })).toBe(true);
  })

})