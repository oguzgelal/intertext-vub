import parser from './parser'
import parseTypeDeclarations from './parseTypeDeclarations';
import runTests from './utils/runTests';

describe('parser: paseIds', () => {  
  
  const run = runTests({
    unit: pack => parseTypeDeclarations(pack)?.package,
    integration: pack => parser([pack])[0],
  })

  run(`should be unchanged without type declaration`, ({ parse }) => {
    const res = parse({ id: '123' })
    expect(res).toEqual({ id: '123' })
  })

  run(`should parse type declarations`, ({ parse }) => {
    expect(parse({ 'id:cmp': '123' }).isComponent).toBeDefined();
    expect(parse({ 'id:component': '123' }).isComponent).toBeDefined();
    expect(parse({ 'id:cmd': '123' }).isCommand).toBeDefined();
    expect(parse({ 'id:command': '123' }).isCommand).toBeDefined();
    expect(parse({ 'id:ent': '123' }).isEntity).toBeDefined();
    expect(parse({ 'id:entity': '123' }).isEntity).toBeDefined();
    expect(parse({ 'id:rel': '123' }).isRelation).toBeDefined();
    expect(parse({ 'id:relation': '123' }).isRelation).toBeDefined();
  })

  run('should not parse invalid type declarations', ({ parse }) => {
    expect(parse({ 'id:invalud': '123' })).toBeUndefined();
  })

  run(`should parse subtypes`, ({ parse }) => {
    const parsed = parse({ 'id:cmp:text': '123' });
    expect(parsed.isComponent).toBeDefined();
    expect(parsed.type).toBe('text')
  })

  run(`should parse multiple subtypes`, ({ parse }) => {
    const parsed = parse({ 'id:cmp:text:h1': '123' });
    expect(parsed.isComponent).toBeDefined();
    expect(parsed.type).toBe('text:h1')
  })

})