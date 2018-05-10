

var keystone = require('keystone'),
    Types = keystone.Field.Types;

var User = new keystone.List('User');

User.add({
    name: { type: Types.Name, required: true, index: true },
    email: { type: Types.Email, initial: true, required: true, index: true },
    password: { type: Types.Password, initial: true },
    DOB: {type: Types.Date, required: true, index: true, initial: false},
    PhoneNumber: {type: Types.Number, required: true, index: true, initial: false}
});

User.relationship({ ref: 'Post', path: 'posts', refPath: 'SignUp' });

User.defaulColoumns = 'name, email, password, DOB, PhoneNumber';

User.register();
