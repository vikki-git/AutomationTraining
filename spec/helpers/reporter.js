const jasmineSpecReporter = require('jasmine-spec-reporter');
const SpecReporter = jasmineSpecReporter.SpecReporter;

jasmine.getEnv().clearReporters();

class CustomProcessor extends jasmineSpecReporter.DisplayProcessor {
    displayJasmineStarted(info, log) {
        return `${JSON.stringify(info)}, ${log}`;
    }

    displaySuccessfulSpec(info, log) {
        return `${JSON.stringify(info)}, ${log}`;
        info.failedExpectations.message = 'TEST MESSAGE'
    }

    displayFailedSpec(info, log) {
        return `${JSON.stringify(info)}, ${log}`;
    }
}

jasmine.getEnv().addReporter(new SpecReporter({
    spec: {
        displayStacktrace: true,
        displaySuccessful: true,
        displayFailed: true,
        displayPending: true,
        displayDuration: true,
    },
    summary: {
        displayStacktrace: true,
        displayErrorMessages: true,
        displaySuccessful: true,
        displayFailed: true,
        displayPending: true,
        displayDuration: true,
    },
    customProcessors: [CustomProcessor],
}));
//# sourceMappingURL=reporter.js.map