/************************************************************
 *                          WRAPPERS                        *
 *----------------------------------------------------------*
 * AUTHOR: Christopher Webster                              *
 * DATE:   Oct. 3rd 2012                                    *
 *----------------------------------------------------------*
 * PURPOSE:                                                 *
 *  This file contains the response wrappers.               *      
 *  Each wrapper consumes a meta data object (css and       *
 *  scripts), as well as the body                           *
 *                                                          *
 *----------------------------------------------------------*
 * NOTES:                                                   *
 *  none                                                    *
 *----------------------------------------------------------*   
 * CHANGES:                                                 *
 *      DATE:                                               *
 *      CHANGE:                                             *
 * **********************************************************/
 
var util = require("util");

function standard(meta, body, response) {
    var headerTagged = '<head>' + '<meta charset=\"utf-8\"/>' + '<title>' + meta.title + '</title>';
    
    for (var i = 0; i < meta.css.length; i++) {
    headerTagged += '<link rel="stylesheet" href="' + meta.css[i] + '" type="text/css" />';
    }

    for (i = 0; i < meta.jscripts.length; i++) {
      headerTagged += '<script src="' + meta.jscripts[i] + '" type="text/javascript"></script>';
    }
        
    headerTagged += '</head>';

    //complete the call...
    var bodyTagged = '<body id="body">' + body + '</body>';
    
    response.setHeader('Content-Type', "text/html");
    response.writeHead(200);
    response.write('<!DOCTYPE html>' + '<html>' + headerTagged + bodyTagged + '</html>');
    response.end();
    util.log("served page" + meta.title );
}

exports.standard = standard;