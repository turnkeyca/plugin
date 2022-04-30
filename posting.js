window.onload = function () {
    console.log("Turnkey posting plugin loaded");
    const turnkeyEl = document.getElementById("turnkey-posting");
    if (!turnkeyEl) {
        throw 'Turnkey posting plugin missing matching HTML - please put <div id="turnkey-posting" tk-id="<your tk client id here>"></div> somewhere on the page';
    }
    if (!turnkeyEl.getAttribute("tk-id")) {
        throw 'Turnkey posting plugin missing tk-id - please put <div id="turnkey-posting" tk-id="<your tk client id here>"></div> somewhere on the page';
    }
    if (checkTkId(turnkeyEl.getAttribute("tk-id"))) {
        throw 'Turnkey posting plugin invalid tk-id - please check that the correct tk-id has been provided or register for a tk-id by contacting support';
    }
    createButton(turnkeyEl);
}

function checkTkId(tkId) {
    const res = await fetch("https://testapi.turnkeyapp.ca/plugin/" + tkId);
    return res.ok;
}

function createButton(el) {

}