var keystone = require('keystone');
var User = keystone.list('User');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// var routes = {
	// 	views: importRoutes('./views'),
	// 	api: importRoutes('./api'),
	//   };

	//on POST Request
	view.on('post',{action:'SignUp'}, function(next){

		var newUser = new User.model();
		var updater = newUser.getUpdateHandler(req);

		updater.process(req.body, {
			flashErrors: true,
			fields: 'name, email,  phone, DOB, Password',
			errorMessage: 'There was a problem creating user:',
		}, function (err) {
			if (err) {
				locals.validationErrors = err.errors;
			} else {
				//locals.enquirySubmitted = true;

			}
			next();
		});
	});

	// Render the view
	view.render('SignUp');
};
