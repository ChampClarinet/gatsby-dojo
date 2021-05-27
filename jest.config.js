module.exports = {
    collectCoverageFrom: ['src/components/*.{js,jsx}', '!**/node_modules/**'],
    testPathIgnorePatterns: ['<rootDir>/(build|config|node_modules)/'],
    transform: {
        ["^.+\\.(js|jsx)$"]: "babel-jest",
        // [".+\\.(css|styl|less|sass|scss)$"]: "<rootDir>/node_modules/jest-css-modules-transform",
        ["^.+\\.(ts|tsx)$"]: "<rootDir>/node_modules/ts-jest/preprocessor.js"
    },
    transformIgnorePatterns: [
        "/node_modules/(?!test-component).+\\.js$"
    ]
}
