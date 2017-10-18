import Ember from 'ember';

export default Ember.Route.extend({
	model(params){
		//crear un participante
		//crear un registro
		//elegir actividades
		return{
			participante: this.store.createRecord('participante'),
			actividades: this.store.query('actividad',
				{orderBy: 'evento', equalTo: params.event})
		};
	}
});
