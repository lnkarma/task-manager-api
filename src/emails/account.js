const sgMail = require('@sendgrid/mail');

// const sendGridAPIKey =
// 	'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';
//     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

// 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

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
	sgMail.send({
		to: email,
		from: 'ilokenathkarmakar@gmail.com',
		subject: 'Thanks for joining in!',
		text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
	});
};

const sendCancellationEmail = (email, name) => {
	sgMail.send({
		to: email,
		from: 'ilokenathkarmakar@gmail.com',
		subject: 'Sorry to see you go!',
		text: `Good bye, ${name}. I hope to see you back sometime soon.`,
	});
};

module.exports = {
	sendWelcomeEmail,
	sendCancellationEmail,
};
