
function InsertPosts() {
   const element = document.getElementById("posts");

   fetch("https://xenose.github.io/posts.json").then((raw) => {
      var jsonData = raw.json()

      for (let i in jsonData.posts) {
         element.insertAdjacentHTML('beforeend', "<div><h2>" + jsonData.posts[i].title + "</h2></div>");
      }
   });



}
