import DS from 'ember-data';

export default DS.Model.extend({
	registros: DS.hasMany('registro')

});
