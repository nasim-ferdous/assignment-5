function getElement(id) {
  const element = document.getElementById(id);
  return element;
}

document
  .getElementById("all-cards")
  .addEventListener("click", function (event) {
    // heart icon
    if (event.target.className.includes("heart-icon")) {
      const heartCount = getElement("heart-count").innerText;
      const currentHeartCount = Number(heartCount) + 1;
      getElement("heart-count").innerText = currentHeartCount;
      console.log(currentHeartCount);
    }
    // call button
    if (event.target.className.includes("call-btn")) {
      const heartIcon = event.target;
      const serviceName = heartIcon.parentNode.parentNode.children[2].innerText;
      const serviceNumber =
        heartIcon.parentNode.parentNode.children[3].innerText;
      alert("Calling" + " " + serviceName + " " + serviceNumber + "...");
      console.log(serviceNumber);
    }
  });
