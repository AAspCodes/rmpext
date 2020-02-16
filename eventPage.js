{
    var contextMenuItem = {
        "id": "search",
        "title": "Search",
        "contexts": ["selection"]
    };

    chrome.contextMenus.create(contextMenuItem);
    chrome.contextMenus.onClicked.addListener(function (clickData) {
        if (clickData.menuItemId == "search" && clickData.selectionText) {

            var input = clickData.selectionText;
            console.log(input);
        }
    });

}




