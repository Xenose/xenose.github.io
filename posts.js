
function InsertPosts() {
   const element = document.getElementById("posts");

   fetch("https://xenose.github.io/posts.js").then((jd) => {
      for (x in jd) {
         element.innerHtml += "<div><h2>" + x.title + "</h2></div>";
      }
   });



}
