var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello World!'
  },
  methods: {
    initialVue: function(){
      return 'Function initial Vuew: ' + this.message;
    }
  }
});
