// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  pokedexBaseUrl: 'https://pokeapi.co/api/v2',
  pokeStatisticsUrl: 'wss://pokemon-statistics-be19c4542f3c.herokuapp.com/',
  firebase: {
    apiKey: "AIzaSyAxq_XhJObKOB6EZn7Thh_VZ3C-yj7pCQ8",
    authDomain: "pokemon-pokedex-6fe89.firebaseapp.com",
    projectId: "pokemon-pokedex-6fe89",
    storageBucket: "pokemon-pokedex-6fe89.appspot.com",
    messagingSenderId: "613075548789",
    appId: "1:613075548789:web:b4ffc72287880e46a0963c",
    measurementId: "G-QDP45X3SHV"
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
