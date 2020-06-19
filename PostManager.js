"use strict";



function GenratePosts()
{
   var Projects = document.createElement("Projects");

   fetch("posts/posts.json")
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
               var url = "posts/" + data.postList[i];

               fetch(url)
                  .then(function(resp)
                     {
                        return resp.json();
                     })
                  .then(function(data)
                     {
                        console.log(data2);


                     });
            }
         });
}

