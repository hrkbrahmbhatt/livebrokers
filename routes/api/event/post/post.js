var keystone = require('keystone');
var User = keystone.list('User');

exports = module.exports = function (req, res) {

    if (!req.body.name || !req.body.startTime || !req.body.endTime) {
        return res.sendError('incomplete data set');
      }
      var newUser = new User();

      User.updateItem(newUser, req.body);

      User.updateItem(newUser, req.body, function (error) {
        res.locals.enquirySubmitted = true;
        if (error) res.locals.saveError = true;
        res.render('addEvent');
      });
};
