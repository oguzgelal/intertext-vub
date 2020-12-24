import parser from './parser';
import parseInlines from './parseInlines';
import runTests from './utils/runTests';

describe('parser: parseInlines', () => {  
  
  const run = runTests({
    unit: pack => parseInlines(pack, parser)?.packages,
    integration: pack => parser([ pack ]),
  })

  run(`should parse inline packages`, ({ parse }) => {
    
    const res = parse({
      'id': '123',
      'il:cmp:text:h1': { id: 'c1', bar: 'foo' }
    })
    
    expect(res).toEqual([
      { id: '123' },
      {
        id: 'c1',
        isComponent: true,
        type: 'text:h1',
        bar: 'foo'
      }
    ])
  })

  run(`should parse inline without an id`, ({ parse }) => {
    
    const res = parse({
      'id': '123',
      'il:cmp:text:h1': { bar: 'foo' }
    })
    
    expect(res[1].id).toBeDefined();
    expect(res[1].type).toEqual('text:h1');
    expect(res[1].isComponent).toEqual(true);
    expect(res[1].bar).toEqual('foo');
  })

  run(`should parse nested inline packages`, ({ parse }) => {
    
    const res = parse({
      id: '123',
      'il:cmp:text:h1': {
        id: 'c1',
        bar: 'foo1',
        'il:cmp:text:p': {
          id: 'c2',
          bar: 'foo2',
        }
      }
    })
    
    expect(res).toEqual([
      { id: '123' },
      {
        id: 'c1',
        isComponent: true,
        type: 'text:h1',
        bar: 'foo1'
      },
      {
        id: 'c2',
        isComponent: true,
        type: 'text:p',
        bar: 'foo2'
      },
    ])
  })

})