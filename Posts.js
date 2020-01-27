function CreatePost(media, title, msg)
{
   var e = document.getElementById("main_content");

   var article = document.createElement("article");
   var h2 = document.createElement("h2");
   var div = document.createElement("div");
   var video = document.createElement("video");
   var source = document.createElement("source");
   var p = document.createElement("p");
   var b = document.createElement("b");

   article.className = "post_content"; 

   h2.innerHTML = title;
   
   video.controls = true;
   video.preload = "none";
   video.poster = "img/" + media + ".png";

   source.src = "videos/" + media + ".mp4";

   p.innerHTML = msg;

   video.appendChild(source);
   div.appendChild(video);
   div.appendChild(p);
   article.appendChild(h2);
   article.appendChild(div);

   e.appendChild(article);
}
 

/*   <article class="post_content">
            <h2>Astroid Wars "アストロイ・ワォー"</h2>

            <div>
               <video poster="img/astroid_wars.png" controls preload="none">
                  <source src="videos/astroid_wars.mp4" type="video/webm">
               </video>
               <p>
                  <b>Supports ・ プラットホーム</b><br>                  
                  &#10148;Windows ・ ウィンドウズ<br>
                  &#10148;Linux ・ リナックス<br><br>
                  このアステロイド・ワォーは小惑星を誤魔化すのゲームです。コードの言語がC/C＋＋とSFMLライブライー。</p>
            </div>
         </article>

         */
