(function() { "use strict";

    chrome.webRequest.onBeforeRequest.addListener(details => {
        return {
            "redirectUrl": "https://www.youtube.com/feed/subscriptions"
        };
    }, {
        "urls": [
            "https://www.youtube.com/"
        ],
        "types": [
            "main_frame"
        ]
    }, [
        "blocking"
    ]);
    
})();
