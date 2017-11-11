import pluginHelper from './helper';

export default ({ types: t }) => {
    return {
        visitor: {
            ImportDeclaration(path, state) {
                const givenPath = path.node.source.value;
                const rootPathSuffix = state && state.opts && typeof state.opts.srcFolder === 'string' ? state.opts.srcFolder : undefined;
                const testFolder = state && state.opts && typeof state.opts.testFolder === 'string' ? state.opts.testFolder : undefined
                if (pluginHelper.startsWith(givenPath, '$/')) {
                    path.node.source.value = pluginHelper.transformReflectiveToRootPath(
                        givenPath,
                        state.file.opts.filename,
                        rootPathSuffix,
                        testFolder,
                    );
                }
            }
        }
    };
};