window.onload = function () {
    console.log("Loading components...");

    Promise.all([
        fetch("/components/header.html?v=" + new Date().getTime()).then(response => response.text()),
        fetch("/components/sidebar.html?v=" + new Date().getTime()),
    ])
    .then(([headerData, sidebarData, navbarData]) => {
        console.log("Fetched components successfully");

        insertComponents(headerData, sidebarData);
    })
    .catch(error => console.error("Error loading components:", error));
};

function insertComponents(headerData, sidebarData, navbarData) {
    if (document.querySelector("#header-template")) {
        document.querySelector("#header-template").innerHTML = headerData;
    }
    if (document.querySelector("#sidebar")) {
        document.querySelector("#sidebar").innerHTML = sidebarData;
    }
}