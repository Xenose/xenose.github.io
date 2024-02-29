
function InsertPosts() {
   const element = document.getElementById("posts");

   fetch("https://github.com/Xenose/xenose.github.io/blob/master/posts.json" ,
      { headers : {  'Content-Type': 'application/json', 'Accept': 'application/json' }}).then((jd) => {
      console.log(jd.json());
   });


   element.innerText = "hello";
}
