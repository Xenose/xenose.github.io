
function InsertPosts() {
   const element = document.getElementById("posts");

   fetch("./posts.js").then((jd) => {
      console.log(jd.json());
   });


   element.innerText = "hello";
}
