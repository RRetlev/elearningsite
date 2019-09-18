const {override, fixBabelImports, addLessLoader} = require('customize-cra');

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: {
            '@primary-color': '#111',
            '@heading-color':'#fff',
            '@text-color':'#777',
            '@text-color-secondary':'#fff',
            '@border-color-base':'#111',
            '@disabled-color':'#027b00',
            '@primary-7':'#6cff77',
            '@primary-8':'#004861',
            '@primary-9':'#ff394f',
            '@primary-10':'#5dffe5',

        },
    }),
);