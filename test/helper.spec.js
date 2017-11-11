import pluginHelper from '../src/helper';
import path from 'path';
import { expect } from 'chai';

describe('helper', () => {

    describe('transformReflectiveToRootPath', () => {
        it('returns a string', () => {
            const func = pluginHelper.transformReflectiveToRootPath('');
            expect(func).to.be.a('string');
        });

        it('transforms given path relative root-path', () => {
            const result = pluginHelper.transformReflectiveToRootPath('$/some/path', __filename, 'src', 'test');
            expect(result).to.equal('./some/path');
        });

        it('throws error if no string is passed', () => {
            expect(() => {
                pluginHelper.transformReflectiveToRootPath();
            }).to.throw(Error);
        });
    });

});