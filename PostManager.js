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
                        var head = document.createElement("div");
                        var h2 = document.createElement("h2");
                        var text = document.createElement("p");

                        head.classList.add("head");

                        h2.innerHTML = data.name;
                        article.appendChild(h2);

                        if (null != data.video)
                        {
                           var video = document.createElement("video");
                           var source = document.createElement("source");

                           video.controls = "";
                           video.preload = "none";
                           source.src = data.video;
                           
                           if (null != data.img)
                           {
                              video.poster = data.img;
                           }

                           video.appendChild(source);
                           head.appendChild(video);

                        }
                        else if (null != data.img)
                        {
                           var img = document.createElement("img");
                           img.src = data.img;
                           head.appendChild(img);
                        }

                        if (0 < data.info.length)
                        {
                           var ul = document.createElement("ul");

                           for (var i = 0; i < data.info.length; i++)
                           {
                              var li = document.createElement("li");
                              li.innerHTML = data.info[i++] + ": " + data.info[i];
                              ul.appendChild(li);
                           }

                           head.appendChild(ul);
                        }

                        article.appendChild(head);
                        text.innerHTML = data.text;
                        article.appendChild(text);

                        for (var i = 0; i < data.icons.length; i++)
                        {
                           var iconLink = document.createElement("a");
                           iconLink.target = "_blank";

                           var icon = document.createElement("img");
                           icon.classList.add("icon");

                           icon.src = data.icons[i++];
                           iconLink.href = data.icons[i];

                           iconLink.appendChild(icon);
                           article.appendChild(iconLink);
                        }

                        tab.appendChild(article);
                     });
            }
         });
}

