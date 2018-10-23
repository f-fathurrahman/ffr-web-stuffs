var vm = new Vue({
  el: "#vue_det",
  data: {
    firstname: "Fadjar",
    lastname: "Fathurrahman",
    address: "Bandung",
    place_of_birth: "Pekanbaru"
  },
  methods: {
    mydetails: function() {
      return "My name is " + this.firstname + " " + this.lastname + ". " +
             "I am from " + this.address + ". " +
             "I was born in " + this.place_of_birth;
    }
  }
})