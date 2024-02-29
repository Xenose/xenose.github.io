
function InsertPosts() {
   const element = document.getElementById("posts");

   fetch("https://xenose.github.io/posts.js").then((jd) => {

      for (v in jd) {
         element.innerHtml += "<div><h2>" + v.title + "</h2></div>";
      }

   });



}
