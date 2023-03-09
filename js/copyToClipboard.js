// set the success message display
document.getElementById("displayMessage").style.display = "none";

// set the event handler
document.getElementById("copyBtn").addEventListener("click", function () {
  // get the server id
  const serverId = document.getElementById("serverId").innerText;
  console.log(serverId);

  let timeLimit = 1500;

  // calling the function
  copyToClipboard(serverId, timeLimit);
});

// copyToClipboard function
async function copyToClipboard(text, timeout) {
  try {
    // get the display message
    const copyText = document.getElementById("displayMessage").innerText;
    // console.log(copyText);

    // copy to clipboard
    await navigator.clipboard.writeText(text);
    // console.log("Text copied to clipboard");

    // hide the button &&
    // show the message
    document.getElementById("copyBtn").style.display = "none";
    document.getElementById("displayMessage").style.display = "block";

    // wait for the specified time
    await new Promise((resolve) => setTimeout(resolve, timeout));

    // show the button &&
    // hide the message
    document.getElementById("displayMessage").style.display = "none";
    document.getElementById("copyBtn").style.display = "block";
  } catch (err) {
    console.error("Failed to copy text: ", err);
  }
}
