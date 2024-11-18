const input = document.getElementById("mail");
const input_btn = document.getElementById("send_btn");
const otp_input = document.getElementById("otp_input");
const verify_btn = document.getElementById("verify_btn");
const verify_container = document.querySelector(".verify");


const otp = Math.floor(Math.random() * 10000);

input_btn.addEventListener("click", () => {
    console.log(otp);
    alert("open console for otp");
    input_btn.style.display = "none";
    verify_container.style.display = "flex";
});

verify_btn.addEventListener("click", () => {
    const verify_val = otp_input.value;
    if (verify_val == otp) {
        alert("verification successful");
        window.location.href = "home.html";
    } else {
        alert("invalid otp");
    }
})

