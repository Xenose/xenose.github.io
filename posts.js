
function InsertPosts() {
   const element = document.getElementById("posts");

   fetch("https://xenose.github.io/posts.json").then((raw) => {
      var jsonData = JSON.parse(raw);

      jsonData.posts.forEach(function (post) {
         element.insertAdjacentHTML('beforeend', "<div><h2>" + post.title + "</h2></div>");
      });
   });



}
