
function InsertPosts() {
   const element = document.getElementById("posts");

   fetch("https://xenose.github.io/posts.js").then((jd) => {

      for (j in jd.json()) {
         element.innerHtml += "<div><h2>" + j.title + "</h2></div>";
      }

   });



}
