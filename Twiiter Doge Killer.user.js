// ==UserScript==
// @name         Twitter Doge Killer
// @namespace    https://github.com/ohcrider/twitter-doge-killer
// @version      0.1
// @description  remove the doge icon for twitter issue.
// @author       fewspider
// @match        *.twitter.com*
// @icon         data:image/png;base64,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
// @grant        none
// ==/UserScript==

(function() {
  'use strict';
  let homeRetry = 6;
  let loadingRetry = 6;
  let timer = null;

  const qEl = (name) => {
    return document.querySelectorAll(name);
  }

  const clearTimer = () => {
    timer && clearTimeout(timer);
  }

  const rmEl = (name, retryType, timer) => {
    const matchList = qEl(name);

    // debug
    // console.log(matchList);
    // if match than remove.
    if (matchList.length) {
      matchList[0].remove();
      // claer timeout func.
      clearTimer();
    } else {
      let retry = 0;

      if (retryType === 'home') {
        homeRetry -= 1;
        retry = homeRetry;
      } else if (retryType === 'loading') {
        loadingRetry -= 1;
        retry = loadingRetry;
      }
      
      if (retry >= 0) {
        console.log(new Date());
        console.log(`${retryType} Retry:${retry}`);
        check();
      } else {
        // claer timeout func.
        clearTimer();
      }
    }
  }

  const check = () => {
    // timer to avoid element not rendered
    timer = setTimeout(() => {
      // loading icon
      rmEl('div[aria-label="Loading…"]', 'loading');
      // home icon
      rmEl('a[aria-label="Twitter"]', 'home');
    }, 1000);
  }

  try {
    check();
  } catch (e) {
    console.log(e);
  }
})();
