
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

   ulTag.appendChild(CreateLink("Home", "Index.html"));
   ulTag.appendChild(CreateLink("Projects", "Projects.html"));
   ulTag.appendChild(CreateLink("Github", "https://github.com/Xenose?tab=repositories"));
   ulTag.appendChild(CreateLink("Mods", "Error.html"));
   ulTag.appendChild(CreateLink("About Me", "About.html"));
   ulTag.appendChild(CreateLink("Contact", "Error.html"));
   ulTag.appendChild(CreateLink("Skills", "Error.html"));
   ulTag.appendChild(CreateLink("About", "Error.html"));

   tag.appendChild(ulTag);
}
