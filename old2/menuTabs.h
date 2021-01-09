
var lastTabName = "";

SwitchTab("Self")

function SwitchTab(name)
{
   var tab = document.getElementById(name);
   var lastTab = document.getElementById(lastTabName);

   lastTab.style.display = "none";
   tab.style.display = "block";
}
