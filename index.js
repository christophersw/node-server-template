/************************************************************
 *                         INDEX.js                         *
 *----------------------------------------------------------*
 * AUTHOR: Christopher Webster                              *
 * DATE:   Oct. 3rd 2012                                    *
 *----------------------------------------------------------*
 * PURPOSE:                                                 *
 * This is the first file to run.                           *
 * The purpose of this code is to:                          *
 *  a)register initial routes                               *
 *  b)launch the server                                     *
 *  c)expose basic functions for adding and checking routes *
 *                                                          *
 *----------------------------------------------------------*
 * NOTES:                                                   *
 *   none                                                   *
 *                                                          *
 *----------------------------------------------------------*   
 * CHANGES:                                                 *
 *      DATE:                                               *
 *      CHANGE:                                             *
 * **********************************************************/
 
var server = require("./server"),
    router = require("./router"),
    requestHandlers = require("./requestHandlers"),
    util = require("util");

//State Variable for tracking initialization
var intialized = false;


var routes = {};

/************************************************************
 * Register routes here                                     *
 * use "isHandle" to check if route is already registered   *
 * otherwise add it to the list of handles.                 *
 * **********************************************************/
(function registerInitialRoutes(){
    
    //Served with wrappers created by request handlers. 
    if(!isRoute("/")) {
        addToRoutes("/", requestHandlers.main);
    }    
    
    //Static Files.
    if(!isRoute("/staticTest.html")) {
        addToRoutes("/staticTest.html", function(response){requestHandlers.staticFile("./static_pages/staticTest.html","text/html",response);});
    }
    
    if(!isRoute("/styles/site.css")) {
        addToRoutes("/styles/site.css", function(response){requestHandlers.staticFile("./styles/site.css","text/css",response);});
    }
    
    if(!isRoute("/scripts/main.js")) {
        addToRoutes("/scripts/main.js", function(response){requestHandlers.staticFile("./scripts/main.js","text/javascript",response);});
    }
    
})();

/************************************************************
 * Start the Server                                         *
 ************************************************************/
server.start(router.route, routes);
intialized = true;



/************************************************************
 * Route Management Functions                                *
 * This are provided and exported - so that routes can be   *
 * checked and registered from elsewhere                    *
 ************************************************************/
function addToRoutes(key, funcRoute)
{
    routes[key] = funcRoute;
    util.log("added " + key + " as route");
}

function isRoute(pathToCheck)
{
    util.log("check path:" + pathToCheck);
    return(typeof routes[pathToCheck] === 'function');
}

exports.isRoutes = isRoute;
exports.addToRoutes = addToRoutes;