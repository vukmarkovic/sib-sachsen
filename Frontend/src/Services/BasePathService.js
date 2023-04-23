// @TODO(Coaches) Change this to be dynamic path
function getCurrentAPIBasePath() {
    return process.env.REACT_APP_API_URL || ''
}

function getCurrentFrontendBasePath() {
    return process.env.REACT_APP_WEB_URL || ''
}

export { getCurrentAPIBasePath, getCurrentFrontendBasePath }
