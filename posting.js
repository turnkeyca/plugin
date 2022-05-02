window.onload = function () {
    console.log("Turnkey posting plugin loaded");
    const turnkeyEl = document.getElementById("turnkey-posting");
    if (!turnkeyEl) {
        throw 'Turnkey posting plugin missing matching HTML - please put <div id="turnkey-posting" tk-id="<your tk client id here>"></div> somewhere on the page';
    }
    if (!turnkeyEl.getAttribute("tk-id")) {
        throw 'Turnkey posting plugin missing tk-id - please put <div id="turnkey-posting" tk-id="<your tk client id here>"></div> somewhere on the page';
    }
    if (!checkTkId(turnkeyEl.getAttribute("tk-id"))) {
        throw 'Turnkey posting plugin invalid tk-id - please check that the correct tk-id has been provided or register for a tk-id by contacting support';
    }
    createButton(turnkeyEl);
}

async function checkTkId(tkId) {
    // const res = await fetch("https://testapi.turnkeyapp.ca/plugin/" + tkId);
    // return res.ok;
    return true;
}

function createButton(el) {
    shadow = el.attachShadow({ mode: 'closed' });
    shadow.innerHTML = `
        <button id="turnkey-posting-button"
            onclick="console.log('clicked')"
            onmouseover="this.style.backgroundColor='#ffffff';this.style.color='#53d3d1';"
            onmouseout="this.style.backgroundColor='#53d3d1';this.style.color='#ffffff'"
            style="cursor: pointer; padding: 0.5rem; border: 2px solid #53d3d1; border-radius: 0.25rem; font-weight: 600; color: #ffffff; background-color: #53d3d1; -webkit-transition-duration: 0.4s; transition-duration: 0.4s;">
            Apply on Turnkey
        </button>
    `;

}