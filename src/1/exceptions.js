function tryEx() {
    throw Error('ERR')
}

try {
    tryEx()
} catch (err) {
    console.log(err.message)
} finally {
    console.log('log file created')
}
