
var pageIndex = 0;

var pageTabs =
   [
      'Home',
      'Projects',
      'Contact',
   ]

/// using the feather icon pack
/// under the MIT License 2020-06-14

var tabIcons = 
   [
      // home
      'https://raw.githubusercontent.com/feathericons/feather/8263ca93c4b338dcfafed62321c27a88368ba7cc/icons/home.svg',
      // folder
      'https://raw.githubusercontent.com/feathericons/feather/8263ca93c4b338dcfafed62321c27a88368ba7cc/icons/folder-minus.svg',

      'https://raw.githubusercontent.com/feathericons/feather/8263ca93c4b338dcfafed62321c27a88368ba7cc/icons/mail.svg',

   ]

function CreateIcon(name, imgSrc, index)
{
   var li = document.createElement("li");
   var img = document.createElement("img");
   var p = document.createElement("p");

   img.src = imgSrc;
   img.setAttribute("onclick", "SetTab(" + index + ")");
   img.id = name + "Img" + "Tab";
   p.innerHTML = "~" + name;

   li.appendChild(img);
   li.appendChild(p);
   return li;
}

function GenrateMenu()
{
   // getting the menu tag from the document 
   var tag = document.getElementById("mainMenu");
   // adding a container for all the icons in the manu
   var ul  = document.createElement("ul");

   for (var i = 0; i < pageTabs.length; i++)
   {
      var li = CreateIcon(pageTabs[i], tabIcons[i], i);
      ul.appendChild(li);
   }

   // adding the container element to the menu object
   tag.appendChild(ul);

   for (var i = 1; i < pageTabs.length; i++)
   {
      var element = document.getElementById(pageTabs[i]);
      element.style.display = "none";
   }

   SetTab(0);
}

function SetTab(index)
{
   var element = document.getElementById(pageTabs[index]);
   var lastElement = document.getElementById(pageTabs[pageIndex]);

   var button = document.getElementById(pageTabs[index] + "Img" + "Tab");
   var lastButton = document.getElementById(pageTabs[pageIndex] + "Img" + "Tab");

   lastElement.style.display = "none";
   element.style.display = "block";
   
   lastButton.style.filter = "invert(0)";
   button.style.filter = "invert(100%)";

   pageIndex = index;
}

