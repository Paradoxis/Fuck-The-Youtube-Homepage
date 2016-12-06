(function() { "use strict";

    /**
     * Changes the home button to default to the subscriptions page 
     * @returns {void}
     */
    function changeHomeButtonLink()
    {
        document.querySelector("#yt-masthead a").href = "https://www.youtube.com/feed/subscriptions";
    }

    /**
     * Aint' nobody got time for Google+
     * @returns {void}
     */
    function changeChannelIconLink()
    {
        document.querySelector(".yt-masthead-picker-photo-wrapper").href = getMyChannelUrl();
    }

    /**
     * Get the channel url belonging to the current user
     * @returns {String}
     */
    function getMyChannelUrl()
    {
        return document.querySelectorAll(".guide-user-links a")[1].href;
    }

    /**
     * Main entry point of the script 
     * @returns {void}
     */
    function main()
    {
        changeHomeButtonLink();
        changeChannelIconLink();
    }
    
    return main;
})()();