module.exports = () => ({
    autoDetect: true,
    debug: true,
    files: [
        'src/**/*.ts',
        { pattern: 'src/**/*.test.ts', ignore: true }
    ],
    testFramework: 'jest',
    tests: ['src/**/*.test.ts'],
    trace: true,
});