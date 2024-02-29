
function InsertPosts() {
   const element = document.getElementById("posts");

   fetch("https://xenose.github.io/posts.js").then((jd) => {
      console.log(jd.json());
   });


   element.innerText = "hello";
}
