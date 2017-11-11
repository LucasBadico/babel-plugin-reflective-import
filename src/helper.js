import {
    pipe,
    split,
    indexOf,
    flip,
    concat,
    remove,
    join,
} from 'ramda'
import { dirname, relative } from 'path';
import findPkg from 'find-pkg';

const root = process.cwd();

const testPath = (testDir, srcDir) => dir => pipe(
    split('/'),
    arr => pipe(
        indexOf(testDir),
        index => pipe(
            remove(0, index + 1),
            folders => pipe(
                reduce((a, i) => [...a, '..'], ['..']),
                flip(concat)([srcDir, ...folders]),
                join('/'),
            )(folders),
        )(arr),
    )(arr),
)(dir)

const transformReflectiveToRootPath = (path, filePath, rootPathSuffix = 'src', testPathFolder = '__tests__') => {
    // console.log(path, filePath, rootPathSuffix, testPathFolder)
    if (startsWith(path, '$/')) {
        const fileBase = dirname(filePath);
        return testPath(testPathFolder, rootPathSuffix)(fileBase);
    }
    if (typeof path === 'string') {
        return path;
    }
    throw new Error('ERROR: No path passed');
}

const startsWith(string, target) => {
    let startsWithTarget = false;

    if (typeof string === 'string') {
        const firstCharactersOfString = string.substring(0, target.length);
        if (firstCharactersOfString === target) {
            startsWithTarget = true;
        }
    }

    return startsWithTarget;
}

export default { startsWith, transformReflectiveToRootPath };