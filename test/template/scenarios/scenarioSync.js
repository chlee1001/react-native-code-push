var CodePushWrapper = require("../codePushWrapper.js");
import CodePush from "@chlee1001/react-native-code-push";

module.exports = {
    startTest: function (testApp) {
        CodePushWrapper.sync(testApp, undefined, undefined, { installMode: CodePush.InstallMode.IMMEDIATE });
    },

    getScenarioName: function () {
        return "Sync";
    }
};
