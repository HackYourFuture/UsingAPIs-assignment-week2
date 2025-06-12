// Instructions: https://github.com/HackYourFuture/UsingAPIs-assignment-week2#instructions--ex1

function requestData(url) {
  // TODO#1
}

function renderImage(data) {
  // TODO#2
  console.log(data);
}

function renderError(error) {
  // TODO#3
  console.log(error);
}

// TODO#4
function main() {
  requestData('https://xkcd.now.sh/?comic=latest')
    .then((data) => {
      renderImage(data);
    })
    .catch((error) => {
      renderError(error);
    });
}

window.addEventListener('load', main);
