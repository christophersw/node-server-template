/************************************************************
 *                   REQUEST HANDLERS                       *
 *----------------------------------------------------------*
 * AUTHOR: Christopher Webster                              *
 * DATE:   Oct. 3rd 2012                                    *
 *----------------------------------------------------------*
 * PURPOSE:                                                 *
 * This file contains (and exports) all of the request      *
 * handler functions. There are two basic types:            *
 *  a) Those that prepare a wrapper object, and route to a  *
 *     specific wrapper, and                                *
 *  b) Those that server static content, such as a static   *
 *     file                                                 *
 *                                                          *
 *----------------------------------------------------------*
 * NOTES:                                                   *
 *  none                                                    *
 *----------------------------------------------------------*   
 * CHANGES:                                                 *
 *      DATE:                                               *
 *      CHANGE:                                             *
 * **********************************************************/
 
"use strict";

var wrappers = require('./wrappers'),
    fs = require('fs'),
    util = require('util'); 

    
function main(response) {
    var meta = {
        title: 'Main Page!'
    };
    meta.css = ['styles/site.css'];
    meta.jscripts = ['/scripts/main.js'];

    fs.readFile("./pages/main.html", function(err, content) {
        if (err) {
            throw err;
        }
        else {
            var body = content;
            wrappers.standard(meta, body, response);
        }
    });
    
}


function staticFile(path,contentType, response)
{
     fs.readFile(path, function (err, content) {
        if (err) {
            throw err;
        }
        else{
            response.setHeader('Content-Type', contentType);
            response.writeHead(200);
            response.write(content);
            response.end();
            util.log("Served" + path);
        }
    });
}

exports.staticFile = staticFile;
exports.main = main;