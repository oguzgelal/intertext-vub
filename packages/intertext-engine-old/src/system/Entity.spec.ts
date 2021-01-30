import { entityCtrl } from './Entity';

describe('Entity', () => {  

  test('validate should work', () => {
    expect(entityCtrl.validate({})).toBe(false);
    expect(entityCtrl.validate({ id: '123' })).toBe(false);
    expect(entityCtrl.validate({ id: '123', isEntity: true })).toBe(true);
  })

})