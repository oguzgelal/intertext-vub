import parser from './parser'
import parseIds from './parseIds';
import runTests from './utils/runTests';

describe('parser: paseIds', () => {  
  
  const run = runTests({
    unit: pack => parseIds(pack)?.package,
    integration: pack => parser([pack])[0],
  })

  run(`works when 'id' is omitted`, ({ parse }) => {
    const res = parse({})
    expect(res.id).toBeDefined()
  })

  run('works with `id` syntax', ({ parse }) => {
    const res = parse({ 'id': '123' })
    expect(res.id).toBe('123');
  })

  run('works with `id:...` syntax', ({ parse }) => {
    const res = parse({ 'id:type:subtype': '123' })
    expect(res['id:type:subtype']).toBe('123')
    // generates `id` field
    expect(res.id).toBe('123')
  })

  run('generates id when `id` set to true', ({ parse }) => {
    const res = parse({ 'id': true })
    expect(res.id).not.toBe(true);
    expect(res.id).toBeDefined();
  })

  run('works with `id:...` syntax', ({ parse }) => {
    const res = parse({ 'id:type:subtype': true })
    expect(res.id).not.toBe(true);
    expect(res.id).toBeDefined();
    // keeps the original field as it is
    expect(res['id:type:subtype']).toBe(true);
  })

})