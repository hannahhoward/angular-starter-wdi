"use strict";

(function(){
  angular
  .module("phonebook", [])
  .controller("phonebookCtrl",PhonebookCtrl);

   function PhonebookCtrl(){
     var vm = this;
     vm.data = superheroList;
  vm.addHero = function(newname, newnumber, newgroup,newimg){
    var newhero = {
      name: newname,
      number: newnumber,
      group: newgroup,
      img: newimg
    };
    vm.data.push(newhero)
  }


}
})();
