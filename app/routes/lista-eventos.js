import Ember from 'ember';

export default Ember.Route.extend({
//  beforeModel(){},
  model(){
    //Se ejecuta cada que se entra
    //return "";
    //return 123;
    //return {};
    return this.store.findAll('event');

  },
//  afterModel(){},
//  setupController(){},
});
