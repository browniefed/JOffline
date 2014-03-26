JOffline.UserRoute = Ember.Route.extend({
	model: function() {
		this.store.find('user');
	}
})