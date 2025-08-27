function getElement(id) {
  const element = document.getElementById(id);
  return element;
}

document
  .getElementById("all-cards")
  .addEventListener("click", function (event) {
    if (event.target.className.includes("heart-icon")) {
      const heartCount = getElement("heart-count").innerText;
      const currentHeartCount = Number(heartCount) + 1;
      getElement("heart-count").innerText = currentHeartCount;
      console.log(currentHeartCount);
    }
    if (event.target.className.includes("call-btn")) {
      const heartIcon = event.target;
    }
  });
