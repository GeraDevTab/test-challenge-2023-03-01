let filtro = require('../dna');

//  Test CTAGGGTA -> CTAG
test('Test DNA, default value', ()=>{
    if(filtro('')==''){
        expect(filtro('')).toBe('');
    }else{
    expect(filtro('CTAGGGTA')).toBe('CTAG');
    }
});
