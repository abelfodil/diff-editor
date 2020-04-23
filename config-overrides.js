const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = function override(config, env) {
    config.plugins.push(
        new MonacoWebpackPlugin({
            languages: [
                'cpp',
                'csharp',
                'css',
                'dockerfile',
                'go',
                'html',
                'java',
                'javascript',
                'json',
                'kotlin',
                'lua',
                'markdown',
                'php',
                'python',
                'rust',
                'shell',
                'sql',
                'typescript',
                'xml',
                'yaml',
            ],
        })
    );
    return config;
};
