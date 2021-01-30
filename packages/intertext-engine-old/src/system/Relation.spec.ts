import { relationCtrl } from './Relation';

describe('Relation', () => {  

  test('validate should work', () => {
    expect(relationCtrl.validate({})).toBe(false);
    expect(relationCtrl.validate({ id: '123' })).toBe(false);
    expect(relationCtrl.validate({ id: '123', isRelation: true })).toBe(true);
  })

})