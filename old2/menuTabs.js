
var tabNames = 
   [
      'self',
      'team',
      'networking',
      'other'
   ];

var lastTabName = tabNames[0];

function SwitchTab(name)
{
   var lastTab = document.getElementById(lastTabName);
   var tab = document.getElementById(name);

   if (null != lastTab)
   {
      lastTab.style.display = "none";
      tab.style.display = "flex";
      lastTabName = name;
   }
}

function HideTabs()
{
   for (var i = 0; i < tabNames.length; i++)
   {
      var tab = document.getElementById(tabNames[i]);
      
      if (null != tab)
      {
         tab.style.display = "none";
      }
   }

   SwitchTab(tabNames[0])
}
