import pluginHelper from './helper';

export default ({ types: t }) => {
    return {
        visitor: {
            ImportDeclaration(path, state) {
                const givenPath = path.node.source.value;
                const testPathFolder = state && state.opts && typeof state.opts.testPathFolder === 'string' ? state.opts.testPathFolder : '';
                if (pluginHelper.startsWith(givenPath, '$/')) {
                    console.log(JSON.stringify({ givenPath, filename: state.file.opts.filename, testPathFolder }, null, 4))
                    path.node.source.value = pluginHelper.transformReflectiveToRootPath(givenPath, state.file.opts.filename, testPathFolder);
                }
            }
        }
    };
};