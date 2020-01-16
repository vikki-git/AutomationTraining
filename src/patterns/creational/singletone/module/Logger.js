const logs = [];

function count() {
    return logs.length;
}

function log(message) {
    const timestamp = new Date().toISOString();
    this.logs.push({message, timestamp});
    console.log(`${timestamp} - ${message}`);
}

module.exports = {logs, count, log,};
