// @ts-check
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
    testDir: './tests',

    timeout: 60 * 1000,

    expect: {
        timeout: 40 * 1000
    },

    reporter: 'html',

    use: {
        browserName: 'chromium',
        headless: false
    }
});