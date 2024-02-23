function sendOTP() {
	const email = document.getElementById('email');
    const bname = document.getElementById('bname');
	const otpverify = document.getElementsByClassName('otpverify')[0];

	let otp_val = Math.floor(Math.random() * 1000000);

	let otpemailbody = `<h2>Your OTP is </h2>${otp_val}`;
    let interestemailbody = `<h2>Business name : ${bname.value}, is interested. <br> Their e-mail : ${email.value} </h2>`
	Email.send({
    SecureToken : "35129c17-7878-43d3-ad7e-d4ed37b56c5b",
    To : email.value,
    From : "anirudh1997@hotmail.com",
    Subject : "Email OTP using JavaScript",
    Body : otpemailbody,
}).then(

	message => {
		if (message === "OK") {
			alert("OTP sent to your email " + email.value);

			otpverify.style.display = "flex";
			const otp_inp = document.getElementById('otp_inp');
			const otp_btn = document.getElementById('otp-btn');

			otp_btn.addEventListener('click', () => {
				if (otp_inp.value == otp_val) {
					alert("Email address verified.");
                    Email.send({
                        SecureToken : "35129c17-7878-43d3-ad7e-d4ed37b56c5b",
                        To : 'anirudh1997@hotmail.com',
                        From : "anirudh1997@hotmail.com",
                        Subject : `Interest from ${bname.value}`,
                        Body : interestemailbody
                    }).then(
                      console.log("E-mail sent to admin.")
                    );
				}
				else {
					alert("Invalid OTP");
				}
			})
		}
	}
);
}


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 