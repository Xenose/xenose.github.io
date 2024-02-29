
function InsertPosts() {
   const element = document.getElementById("posts");

   fetch("./__posts.json" ,{ headers : {  'Content-Type': 'application/json', 'Accept': 'application/json' }}).then((jd) => {
      console.log(jd.json());
   });


   element.innerText = "hello";
}
