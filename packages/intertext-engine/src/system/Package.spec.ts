import { packageCtrl } from './Package';

describe('Package', () => {  

  test('validate should work', () => {
    expect(packageCtrl.validate({ id: '123' })).toBe(true);
    expect(packageCtrl.validate({})).toBe(false);
  })

})