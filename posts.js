
function InsertPosts() {
   const element = document.getElementById("posts");

   fetch("https://raw.githubusercontent.com/Xenose/xenose.github.io/master/posts.js").then((jd) => {
      console.log(jd.json());
   });


   element.innerText = "hello";
}
