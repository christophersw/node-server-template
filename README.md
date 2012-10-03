# README for Node Server Template

This is a set of NODE.js files to run a basic server. 

This is intended as a starting point for larger, and more complex Node server projects.

It works by using registering a set of routes that are matched to incoming requests. 
Each route is reference to a request handler, which is a function for responding to the request. 
Two basic request handler functions are provided - one for responding with a static file, 
the other for responding with an html file created using a basic wrapper. The later passes basic meta
data and header-region information, and a static body file reference to a wrapper, which is responsible
reading the static body, wrapping it with meta-data, and responding. 

 
