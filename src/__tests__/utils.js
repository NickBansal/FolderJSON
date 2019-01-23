import { nameSort, dateSort, sizeSort } from '../utils'

describe('Testing all the utils functions', () => {
    it('Sorting arrays by the name - alphabetically', () => {
        const data1 = [{ name: 'A' }, { name: 'C'},  { name: 'B'}]
        const data1Answer =  [{ name: 'A' }, { name: 'B'},  { name: 'C'}]
        expect(data1.sort(nameSort)).toEqual(data1Answer)

        const data2 = [{ name: 'abcc' }, { name: 'abcb'},  { name: 'abca'}]
        const data2Answer =  [{ name: 'abca' }, { name: 'abcb'},  { name: 'abcc'}]
        expect(data2.sort(nameSort)).toEqual(data2Answer)

        const data3 = [{ name: 'AAb' }, { name: 'Aaa'},  { name: 'aAC'}]
        const data3Answer =  [{ name: 'Aaa' }, { name: 'AAb'},  { name: 'aAC'}]
        expect(data3.sort(nameSort)).toEqual(data3Answer)
    })
    it('Sorting arrays by the date', () => {
        const data1 = [{ added: '2017-01-06' }, { added: '2014-05-02'},  { added: '2015-08-10'}]
        const data1Answer =  [{ added: '2017-01-06' }, { added: '2015-08-10'},  { added: '2014-05-02'}]
        expect(data1.sort(dateSort)).toEqual(data1Answer)

        const data2 = [{ added: '2017-05-02'}, { added: '2017-01-06' }, { added: '2017-08-10'}]
        const data2Answer =  [{ added: '2017-08-10'}, { added: '2017-05-02'},  { added: '2017-01-06' }]
        expect(data2.sort(dateSort)).toEqual(data2Answer)

        const data3 = [{ added: '2017-05-02'}, { added: '2017-05-06' }, { added: '2017-05-10'}]
        const data3Answer =  [{ added: '2017-05-10'}, { added: '2017-05-06'},  { added: '2017-05-02' }]
        expect(data3.sort(dateSort)).toEqual(data3Answer)
    })
    it('Sorting arrays by the date', () => {
        const data1 = [{size: 1}, {size: 4}, { size: 3}, {size: 2}]
        const data1Answer = [{size: 1}, {size: 2}, { size: 3}, {size: 4}]
        expect(data1.sort(dateSort)).toEqual(data1Answer)
    })

})