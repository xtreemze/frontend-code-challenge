import * as OfflinePluginRuntime from "offline-plugin/runtime";
import M from "materialize-css";
// require("./../../node_modules/materialize-css/dist/js/materialize");

OfflinePluginRuntime.install({
  onInstalled: function() {},

  onUpdating: function() {},

  onUpdateReady: function() {
    OfflinePluginRuntime.applyUpdate();
  },
  onUpdated: function() {
    setTimeout(function() {
      window.location.reload();
    }, 500);
  }
});
