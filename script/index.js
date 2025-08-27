function getElement(id) {
  const element = document.getElementById(id);
  return element;
}
// the card section
document
  .getElementById("all-cards")
  .addEventListener("click", function (event) {
    // heart icon
    if (event.target.className.includes("heart-icon")) {
      const heartCount = getElement("heart-count").innerText;
      const currentHeartCount = Number(heartCount) + 1;
      getElement("heart-count").innerText = currentHeartCount;
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
      const serviceTitle =
        heartIcon.parentNode.parentNode.children[1].innerText;
      console.log(serviceTitle);

      const serviceName = heartIcon.parentNode.parentNode.children[2].innerText;
      const serviceNumber =
        heartIcon.parentNode.parentNode.children[3].innerText;

      alert("Calling" + " " + serviceName + " " + serviceNumber + "...");

      //   coin count

      const currentCoin = Number(coinCount) - 20;
      getElement("coin-count").innerText = currentCoin;
      console.log(currentCoin);

      //   call history
      const time = new Date().toLocaleTimeString();

      const callContainer = getElement("call-container");
      const callHistory = document.createElement("div");
      callHistory.innerHTML = `
            <div
                class="bg-gray-100 flex justify-between items-center rounded-lg p-4"
              >
                <div>
                  <h1 class="text[#111111]">${serviceTitle}</h1>
                  <p>${serviceNumber}</p>
                </div>
                <p>${time}</p>
              </div>
      `;
      callContainer.appendChild(callHistory);
    }
    // copy button
    if (event.target.className.includes("copy-btn")) {
      // copy count
      const copyButton = event.target;
      const copyNumber = copyButton.parentNode.parentNode.children[3].innerText;
      alert("নম্বর কপি হয়েছেঃ" + " " + copyNumber);
      const copyCount = getElement("copy-count").innerText;
      const currentCopyCount = Number(copyCount) + 1;
      getElement("copy-count").innerText = currentCopyCount;
      console.log(currentCopyCount);
    }
  });

//   clear button
document.getElementById("clear-button").addEventListener("click", function () {
  const callContainer = getElement("call-container");
  callContainer.innerText = "";
  console.log(callContainer);
});
