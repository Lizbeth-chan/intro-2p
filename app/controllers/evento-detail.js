import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    borrar(){
    //  this.get('model').deleteRecord(); //quita el registro del store
      this.get('model').destroyRecord();//quita el registro del store y storage
      return this.transitionToRoute('lista-eventos');
    },
    veALaLista(){
    	return this.transitionToRoute('lista-eventos');
    }
  }
});
