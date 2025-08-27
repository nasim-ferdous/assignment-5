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
      const coinCount = getElement("coin-count").innerText;
      if (Number(coinCount) < 20) {
        alert("আপনার পর্যাপ্ত কয়েন নেই। কল করতে কমপক্ষে ২০ কয়েন লাগবে।");
        return;
      }
      // alert
      const heartIcon = event.target;
      const serviceName = heartIcon.parentNode.parentNode.children[2].innerText;
      const serviceNumber =
        heartIcon.parentNode.parentNode.children[3].innerText;
      alert("Calling" + " " + serviceName + " " + serviceNumber + "...");

      //   coin count

      const currentCoin = Number(coinCount) - 20;
      getElement("coin-count").innerText = currentCoin;
      console.log(currentCoin);
    }
  });
