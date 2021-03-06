// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: `AIzaSyADDmrWsgk4WWvdBlQND68Gu2W99vGNYwA`,
    authDomain: `newagent-gayibp.firebaseapp.com`,
    databaseURL: `https://newagent-gayibp.firebaseio.com`,
    projectId: `newagent-gayibp`,
    storageBucket: `newagent-gayibp.appspot.com`,
    messagingSenderId: `612899790435`
  },
  kairos: {
    appId: `0e50c860`,
    appKey: `bd72d5db5096ec99a040148fc211f71f`,
  }
};
