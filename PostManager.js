"use strict";



function GenratePosts()
{
   console.log("creating posts...");

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
                        var tab = document.getElementById(data.type);
                        var article = document.createElement("article");
                        var h2 = document.createElement("h2");

                        h2.innerHTML = data.name;

                        article.appendChild(h2);
                        tab.appendChild(article);
                     });
            }
         });
}

