var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Y Model
 * ==========
 */
var Y = new keystone.List('Y');

Y.add({
	name: { type: Types.Name, required: true, index: true },
	dob: { type: String},
	phone: { type: String },
	email: { type: Types.Email, initial: true, required: true, unique: true, index: true },
	password: { type: Types.Password, initial: true, required: true },
}, 'Permissions', {
	isAdmin: { type: Boolean, label: 'Can access Keystone', index: true },
});

// Provide access to Keystone
Y.schema.virtual('canAccessKeystone').get(function () {
	return this.isAdmin;
});


/**
 * Relationships
 */
Y.relationship({ ref: 'Post', path: 'posts', refPath: 'author' });


/**
 * Registration2
 */
Y.defaultColumns = 'name, email, phone, dob, isAdmin';
Y.register();
