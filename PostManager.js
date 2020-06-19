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

      console.log(lenght);
      console.log(data);

      for (i = 0; i < lenght; i++)
      {
         console.log("./posts/" + data.postList[i]);
         fetch("./posts/" + data.postList[i])
            .then(function(resp)
            {
               return resp.json();
            })
            .then(function(data2)
            {
               console.log(data2);
            });
      }
   });
