const apiKeyInput = document.querySelector(".apikey");
const redirectButton = document.querySelector(".redirect");

window.onload = function () {
  redirectButton.addEventListener("click", (e) => {
    const apiKey = apiKeyInput.value;

    if (!apiKey.length) return;

    fetch("https://kyc.biometric.kz/api/v1/flows/session/create/", {
      method: "POST",
      body: JSON.stringify({
        api_key: apiKey,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        const { session_id, technologies } = data;
        const url = "https://remote.biometric.kz/flow/" + session_id;
        window.open(url, "_blank");
      });
  });
};
