"use strict";

//var Projects = document.createElement("Projects");

fetch("./posts/posts.json")
   .then(function(resp)
   {
      return resp.json();
   })
   .then(function(data)
   {
      var lenght = data.postList.lenght;
      var i;

      for (i = 0; i < lenght; i++)
      {
         fetch("./posts/" + data.postList[i])
            .then(function(resp)
            {
               return resp.json();
            })
            .then(function(data)
            {
               console.log(data);
            });
      }
   });
