
function CreateLink(name, address)
{
   var liTag = document.createElement("li");
   var aTag = document.createElement("a");

   aTag.innerHTML = "&#10148 " + name;
   aTag.href = address;

   liTag.appendChild(aTag);
   return liTag;
}

function GenMenu()
{
   var tag = document.getElementById("Menu");
   var ulTag = document.createElement("ul");
   
   ulTag.appendChild(CreateLink("ホーム", "Index.html"));
   ulTag.appendChild(CreateLink("事業", "Projects.html"));
   ulTag.appendChild(CreateLink("ギットハブ", "https://github.com/Xenose?tab=repositories"));
   ulTag.appendChild(CreateLink("Mods", "Error.html"));
   ulTag.appendChild(CreateLink("僕に就いて", "About.html"));
   ulTag.appendChild(CreateLink("連絡", "Error.html"));
   ulTag.appendChild(CreateLink("About", "Error.html"));

   tag.appendChild(ulTag);
}
