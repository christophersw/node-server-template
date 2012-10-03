# README for Node Server Template

This is a set of NODE.js files to run a basic server. 

This is intended as a starting point for larger, and more complex Node server projects.

It works by registering a set of routes that are matched to incoming requests. Each route is a reference to a request handler, which is a function for responding to the request.

Two basic request handler functions are provided - one for responding with a static file, the other for responding with an html file created using a basic wrapper. The later passes basic meta-data and header-region information, and a static html file to a to a wrapper function that is responsible for reading the static html file containing the html body, wrapping it with the proper meta-data and head tags, and then delvering the result. 

 
