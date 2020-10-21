
function sendEmail() {
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var phone = document.getElementById("mob").value;
	var message = document.getElementById("message").value;
	var mail_body = "Hi, you have a new message from your Vbuild Site contact form.<html><br><br></html>Here are the details:<html><br><br><br></html>Name:  "+ name+"<html><br><br></html>Email:  " +email+ "<html><br><br></html>Phone:  " +phone+ "<html><br><br></html> Message:  <html><br></html>"+message + "<html><br><br><br><br><br><br><b>Have a Nice Day!</b><br><em>Thanks and Regards,<br>Team Vbuild</em></html>";
	
	Email.send({
	Host: "smtp.gmail.com",
	Username : "vbuildvebsites@gmail.com",
	Password : "cgdnnqagsingmatx", // using secure code
	To : 'vbuildvebsites@gmail.com',
	From : "vbuildvebsites@gmail.com",
	Subject : "Hey! Vbuild, you have a new message",
	Body : mail_body,
	// Body : 	'<html><table border=0> <tr><td><p><b>Name:</b> <input TYPE="TEXT" SIZE="20" value="name"></td></tr> </table></html>',
	    // Body : "<html><h2>Header</h2><strong>Bold text</strong><br></br><em>Italic</em></html>"
	// Body : '"You have received a new message from your website contact form.\n\n"."Here are the details:\n\nName: $name\n\nEmail: $email_address\n\nPhone: $phone\n\nMessage:\n$message"',
	}).then(
		message => alert("Thank you! We received your message. We will get in touch with you shortly!")
	);
}