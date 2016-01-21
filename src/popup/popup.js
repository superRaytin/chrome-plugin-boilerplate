function openOptions() {
  var optionsUrl = chrome.extension.getURL('options/options.html');

  chrome.tabs.query({url: optionsUrl}, function (tabs) {
    if (tabs.length) {
      chrome.tabs.update(tabs[0].id, {active: true});
    } else {
      chrome.tabs.create({url: optionsUrl});
    }
  });
}

window.addEventListener('load', function(e) {
  var githubLink = document.getElementById("github-link");
  var notificationBtn = document.getElementById("btn-notification");
  var optionsButton = document.getElementById("btn-options");
  var iconUrl = chrome.extension.getURL('images/icon64.jpg');

  githubLink.onclick = function () {
    window.open("https://github.com/superRaytin/chrome-plugin-boilerplate");
  };

  notificationBtn.onclick = function() {
    new Notification('hello', {
      icon: iconUrl,
      body: 'I am a notification.'
    });
  };

  optionsButton.addEventListener("click", function () {
    openOptions();
  }, false);
});