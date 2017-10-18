import Ember from 'ember';

export default Ember.Component.extend({
	store: Ember.inject.service('store'),
	actions:{
		save(){
			//Logica necesaria para crear el evento
			//0) inicializar el modelo(contenedor)
			//se pasa a la ruta nuevo-evento.js --> let evento= this.get('store').createRecord('event', {});
			let evento = this.get('evento'); //El evento que esta aqui es diferente al de model asi que se tiene que inicializar

			//1)llenar campos
			//--> se llena desde form evento.hbs con evento.[algo]
			//evento.set('nombre', this.get('nombreEvento'));
			//evento.set('inicio', this.get('inicioEvento'));
			//evento.set('fin', this.get('finEvento'));

			//2) validar los campos
			if(Ember.isBlank(evento.get('nombre'))){
				alert('El campo de nombre no puede estar vacio');
				return;
			}
			//desde que se crea la actividad ya se hace, por eso se quitan estas lineas
					//this.get('actividadesArray').forEach((a)=>{
					//	a.set('evento', evento); })

			//3) Mandar a guardar
			evento.save().then(()=>{//para conservar el this
				//esta en el mismo contexto que arriba
				//aqui ya se esta seguro que ya se guardo
				Ember.RSVP.all( this.get('evento.actividades').invoke('save') ).then(()=>{
					alert('Ya se guardo');
				this.sendAction('didSave');
				})
			}); // es asincrono
			//es posible que aun no se haya guardado
		},

		saveActivity(){
			//inicializa una nueva actividad en el store
			//y le llena sus atributos con las variables del formulario 
			let actividad = this.get('store').createRecord('actividad', {
				evento: this.get('evento'), //enlazamos la actividad con el evento
				//nombre: this.get('nombreActividad'),
				//inicio: this.get('inicioActividad'),
				//fin: this.get('finActividad')
			});

			//la nueva actividad creada  la insertamos en un arreglo temporal

			//--->se quita el arreglo temporal 
					//if(!Ember.isPresent(this.get('actividadesArray'))){
					//	this.set('actividadesArray', [])
					//}this.get('actividadesArray').pushObject(actividad);

			//limpiamos(Reset) las variables del formulario
					//this.setProperties({
						//nombreActividad: null,
						//inicioActividad: null,
						//finActividad: null
					//});

		}
	}
});
