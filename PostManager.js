"use strict";

var Projects = document.createElement("Projects");

fetch('posts/posts.json')
   .then(function(resp)
   {
      return resp.json();
   })
   .then(function data)
   {
      console.log(data);
   });
