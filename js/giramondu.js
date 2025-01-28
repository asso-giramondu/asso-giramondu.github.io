
var currentPageId = "accueil";
var isMapLoaded = false;
var isInitialized = false;

function initialize() {
  changePage('accueil');
  isInitialized = true;
}

function changePage(targetPageId) {
  if (isInitialized == true) {
    if (currentPageId != "") {
      document.getElementById(currentPageId + "_div").className = "invisible_content";
      document.getElementById(currentPageId + "_link").className = "not_current_item";
      document.getElementById(currentPageId + "_pics").className = "invisible_left_pane";
    }
    
    document.getElementById(targetPageId + "_div").className = "visible_content";
    document.getElementById(targetPageId + "_link").className = "current_item";
    document.getElementById(targetPageId + "_pics").className = "left_pane";
    if (isMapLoaded == false && targetPageId == "contact") {
      document.getElementById("map_iframe").src=document.getElementById("map_iframe").src;
      isMapLoaded = true;
    }
    currentPageId = targetPageId;
  }
}
