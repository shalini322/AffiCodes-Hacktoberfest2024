// Create a new QRCode instance
let qrcode = new QRCode(document.querySelector(".qrcode"));

// Generate a default QR code
qrcode.makeCode("Why did you scan me?");

// Function to generate a QR code based on user input
function generateQr() {
    const inputField = document.querySelector("input");
    const inputValue = inputField.value.trim(); // Trim whitespace from the input

    // Check if the input field is empty
    if (inputValue === "") {
        alert("Input field cannot be blank! Please enter a valid URL or text.");
        return; // Exit the function if the input is invalid
    }

    // Check if the input value is a valid URL (simple regex)
    const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
    if (!urlPattern.test(inputValue)) {
        alert("Please enter a valid URL starting with http:// or https://");
        return; // Exit the function if the URL is invalid
    }

    // Generate the QR code based on the user input
    qrcode.makeCode(inputValue);
    
    // Optionally, provide feedback to the user
    alert("QR Code generated successfully!");
}
