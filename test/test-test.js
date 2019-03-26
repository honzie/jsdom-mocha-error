const jsdom = require('mocha-jsdom');

describe('mocha tests', function () {
  jsdom();
 
  it('works', function () {
    // Except when it doesn't :)

    // Output: > npm test
    //  mocha tests
    //    1) "before all" hook
    //
    //
    //  0 passing (955ms)
    //  1 failing
    //
    //  1) mocha tests
    //       "before all" hook:
    //     Uncaught SecurityError: localStorage is not available for opaque origins
    //      at Window.get localStorage [as localStorage] (node_modules/jsdom/lib/jsdom/browser/Window.js:257:15)
    //      at propagateToGlobal (node_modules/mocha-jsdom/index.js:108:27)
    //      at Object.done (node_modules/mocha-jsdom/index.js:59:9)
    //      at process.nextTick (node_modules/jsdom/lib/old-api.js:366:18)
    //      at _combinedTickCallback (internal/process/next_tick.js:132:7)
    //      at process._tickCallback (internal/process/next_tick.js:181:9)
  });
});
