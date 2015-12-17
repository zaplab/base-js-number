
import {
    length as zapObjectLength,
} from 'zap-base-js-object';

import {
    parseInt as zapNumberParseInt,
    parseFloat as zapNumberParseFloat,
    random as zapNumberRandom,
} from 'zap-base-js-number';

describe('zap-base-js-number', () => {
    beforeEach(() => {});

    afterEach(() => {});

    describe('zap-base-js-number should have the following methods', () => {
        it('parseInt', () => {
            expect(zapNumberParseInt).toEqual(jasmine.any(Function));
        });

        it('parseFloat', () => {
            expect(zapNumberParseFloat).toEqual(jasmine.any(Function));
        });

        it('random', () => {
            expect(zapNumberRandom).toEqual(jasmine.any(Function));
        });
    });

    describe('parseInt', () => {
        it('parseInt("ABC") should return 0', () => {
            expect(zapNumberParseInt('ABC')).toEqual(0);
        });

        it('parseInt({}) should return 0', () => {
            expect(zapNumberParseInt({})).toEqual(0);
        });

        it('parseInt(1) should return 1', () => {
            expect(zapNumberParseInt(1)).toEqual(1);
        });

        it('parseInt(12345.12345) should return 12345', () => {
            expect(zapNumberParseInt(12345.12345)).toEqual(12345);
        });
    });

    describe('parseFloat', () => {
        it('parseFloat("ABC") should return 0', () => {
            expect(zapNumberParseFloat('ABC')).toEqual(0);
        });

        it('parseFloat({}) should return 0', () => {
            expect(zapNumberParseFloat({})).toEqual(0);
        });

        it('parseFloat(1) should return 1', () => {
            expect(zapNumberParseFloat(1)).toEqual(1);
        });

        it('parseFloat(12345.12345) should return 12345', () => {
            expect(zapNumberParseFloat(12345.12345)).toEqual(12345.12345);
        });
    });

    describe('random', () => {
        it('random(1, 5) should return a number between 1 and 5', () => {
            let numbers = {};
            let i = 0;
            let numberCache;

            for (; i < 1000; ++i) {
                numberCache = zapNumberRandom(1, 5);

                numbers[numberCache] = (typeof numbers[numberCache] === 'undefined') ? 1 : (numbers[numberCache] + 1);
            }

            expect(zapObjectLength(numbers)).toBeGreaterThan(1);
            expect(zapObjectLength(numbers)).toBeLessThan(6);
        });
    });
});
