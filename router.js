/************************************************************
 *                         ROUTER.js                        *
 *----------------------------------------------------------*
 * AUTHOR: Christopher Webster                              *
 * DATE:   Oct. 3rd 2012                                    *
 *----------------------------------------------------------*
 * PURPOSE:                                                 *
 * Responds to web requests by:                             *
 *  a) matching them to a route, and executing that route   *
 *  b) responding with 404 - Not Found                      *
 *                                                          *
 *----------------------------------------------------------*
 * NOTES:                                                   *
 *   none                                                   *
 *----------------------------------------------------------*   
 * CHANGES:                                                 *
 *      DATE:                                               *
 *      CHANGE:                                             *
 * **********************************************************/

var util = require('util');

function route(request, handle, pathname, response) {
    util.log("About to route a request for " + pathname);
    
    if (typeof handle[pathname] === 'function') {
        handle[pathname](response, request);
    } 
    
    else{
        util.log("No request handler found for " + pathname);
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("404 Not Found");
        response.end();
    }
}

exports.route = route;