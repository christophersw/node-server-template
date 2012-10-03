/************************************************************
 *                         SERVER.js                        *
 *----------------------------------------------------------*
 * AUTHOR: Christopher Webster                              *
 * DATE:   Oct. 3rd 2012                                    *
 *----------------------------------------------------------*
 * PURPOSE:                                                 *
 * To set up a Node server, and listen on a given port.     *
 * listen events are routed to "route" function             *
 *                                                          *
 *                                                          *
 *----------------------------------------------------------*
 * NOTES:                                                   *
 *   'process.env.PORT' is used b/c this file was written   *
 *   and tested in the Cloud 9 IDE enviroment               *
 *                                                          *
 *----------------------------------------------------------*   
 * CHANGES:                                                 *
 *      DATE:                                               *
 *      CHANGE:                                             *
 * **********************************************************/
 
var http = require("http"),
    url = require("url"),
    util = require('util');

function start(route, handle) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");
        route(request, handle, pathname, response);
    }
    
    http.createServer(onRequest).listen(process.env.PORT); //use 'process.env.PORT' for code running within C9
    util.log("Server has started.");
}

exports.start = start;