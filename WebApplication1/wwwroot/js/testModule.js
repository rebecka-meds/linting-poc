"use strict";
let updateTestModule = () => {
    let testModuleElement = document.querySelector(".test-module");
    if (!testModuleElement) {
        return;
    }
    setTimeout(() => {
        testModuleElement.innerHTML += "<br>And this text is added in the client.";
    }, 500);
};
updateTestModule();
