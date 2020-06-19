"use strict";

//var Projects = document.createElement("Projects");

fetch("./posts/posts.json")
   .then(function(resp)
   {
      return resp.json();
   })
   .then(function(data)
   {
      var length = data.postList.length;
      var i;

      for (i = 0; i < length; i++)
      {
         fetch("./posts/" + data.postList[i])
            .then(function(resp2)
            {
               console.log(resp2);
               return resp2.json();
            })
            .then(function(data2)
            {
               console.log(data2);
            });
      }
   });
