import parseIds from './parseIds';

describe('parser: paseIds', () => {

  it('works when `id` is omitted', () => {
    const res = parseIds({})
    expect(res.package.id).toBeDefined()
  })

  it('works with `id` syntax', () => {
    const res = parseIds({ 'id': '123' })
    expect(res.package.id).toBe('123');
  })

  it('works with `id:...` syntax', () => {
    const res = parseIds({ 'id:type:subtype': '123' })
    expect(res.package['id:type:subtype']).toBe('123')
  })

  it('generates id when `id` set to true', () => {
    const res = parseIds({ 'id': true })
    expect(res.package.id).not.toBe(true);
    expect(res.package.id).toBeDefined();
  })

  it('works with `id:...` syntax', () => {
    const res = parseIds({ 'id:type:subtype': true })
    expect(res.package.id).not.toBe(true);
    expect(res.package.id).toBeDefined();
    // keeps the original field as it is
    expect(res.package['id:type:subtype']).toBe(true);
  })

})