
function CreateLink(name, address, deco)
{
   var liTag = document.createElement("li");
   var aTag = document.createElement("a");

   if (deco)
      aTag.innerHTML = "&#10148; " + name;
   else
      aTag.innerHTML = name;
   
   aTag.href = address;

   liTag.appendChild(aTag);
   return liTag;
}

function GenMenu(deco)
{
   var tag = document.getElementById("Menu");
   var ulTag = document.createElement("ul");
   
   ulTag.appendChild(CreateLink("ホーム", "Index.html", deco));
   ulTag.appendChild(CreateLink("事業", "Projects.html", deco));
   ulTag.appendChild(CreateLink("モッド", "Mods.html", deco));
   //ulTag.appendChild(CreateLink("3D Models", "Models3D.html", deco));
   ulTag.appendChild(CreateLink("ギットハブ", 
      "https://github.com/Xenose?tab=repositories", deco));
   //ulTag.appendChild(CreateLink("僕に就いて", "About.html", deco));
   //ulTag.appendChild(CreateLink("連絡", "Contact.html", deco));
   //ulTag.appendChild(CreateLink("About", "Error.html", deco));

   tag.appendChild(ulTag);
}
