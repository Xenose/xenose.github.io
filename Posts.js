

function GenratePosts(dir)
{
   var xhr = new XMLHttpRequest();
   xhr.open = ('POST', "FileIo.php", true);


   xhr.onload = function()
   {
      console.log("test");
      var res = JSON.prase(this.response);

      if (res.status)
      {
         alert(res.message);
      }
      else
      {
         alert("Error");
      }
   }
}
