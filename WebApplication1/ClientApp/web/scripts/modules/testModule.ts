var updateTestModule = () => {
  var testModuleElement = document.querySelector(".test-module") as HTMLElement;
  if (!testModuleElement) {
    return;
  }

  setTimeout(() => {
    testModuleElement.innerHTML += "<br>And this text is added in the client.";
  }, 500);
};

updateTestModule();