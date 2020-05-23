function onError(error) {
    console.log(`Error: ${error}`);
}

function onGot(item) {
    if (item.url && item.url.length != 0) {
        document.getElementById("BLWRTiframe").src = item.url + '/notes'
        document.getElementById("BLWRTiframe").style.display = "block"
        document.getElementById("pleaseChooseUrl").style.display = "none"
        document.body.style.display = "block"
    }
    else {
        showNoUrl()
    }
}

showNoUrl = () => {
    document.getElementById("BLWRTiframe").style.display = "none"
    document.getElementById("pleaseChooseUrl").style.display = "block"
    document.body.style.display = "flex"
}
  
var getting = browser.storage.sync.get("url");
getting.then(onGot, onError);


document.getElementById("chooseUrl").onclick = () => {
    var openingPage = browser.runtime.openOptionsPage()
}