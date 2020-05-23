function saveOptions(e) {

    let formUrl = document.querySelector("#url").value

    if(formUrl != "") {
        if(!formUrl.startsWith("http://") || !formUrl.startsWith("https://")) {
            formUrl = "http://" + formUrl
        }
    }

    e.preventDefault();
    browser.storage.sync.set({
        url: formUrl
    });

    browser.runtime.reload()
}

function restoreOptions() {
  
    function setCurrentChoice(result) {
        document.querySelector("#url").value = result.url || "";
    }
  
    function onError(error) {
        console.log(`Error: ${error}`);
    }
  
    var getting = browser.storage.sync.get("url");
    getting.then(setCurrentChoice, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);