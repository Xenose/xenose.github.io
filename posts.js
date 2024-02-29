
function InsertPosts() {
   const element = document.getElementById("posts");

   fetch("https://xenose.github.io/posts.json").then((raw) => {
      var jsonData = raw.json();

      element.insertAdjacentHTML('beforeend', "<div><h2> Test </h2></div>");

      console.log(jsonData);

      for (let i = 0; i < jsonData.posts.length; i++) {
         console.log(jsonData.posts[i])
         element.insertAdjacentHTML('beforeend', "<div><h2>" + jsonData.posts[i].title + "</h2></div>");
      }

      /*for (let i in jsonData.posts) {
         console.log(jsonData.posts[i])
         element.insertAdjacentHTML('beforeend', "<div><h2>" + jsonData.posts[i].title + "</h2></div>");
      }*/
   });



}
