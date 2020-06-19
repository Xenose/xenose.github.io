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
                        var text = document.createElement("p");

                        h2.innerHTML = data.name;
                        article.appendChild(h2);
                        
                        if (null != data.video)
                        {
                           if (null != data.img)
                           {
                              var img = document.createElement("img");
                              img.src = data.img;
                              article.appendChild(img);
                           }

                        }
                        else if (null != data.img)
                        {
                           var img = document.createElement("img");
                           img.src = data.img;
                           article.appendChild(img);
                        }

                        if (0 < data.info.length)
                        {
                           var ul = document.createElement("ul");

                           for (var i = 0; i < data.info.length; i++)
                           {
                              var li = document.createElement("li");
                              li.innerHTML = data.info[i++] + ": " + data.info[i];
                              ul.appendChild(ul);
                           }

                           article.appendChild(ul);
                        }

                        text.innerHTML = data.text;

                        article.appendChild(text);
                        tab.appendChild(article);
                     });
            }
         });
}

