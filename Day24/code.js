const student = {
  name: "Muzzamal",
  math: 95,

  getmarks: function () {
    console.log(this);
  },

  getmarks2 : () => {
    console.log(this); 
  },

  getinfo : function()  {
    setTimeout(() => {
        console.log(this);
    }, 2000);
  },

  

};




student.getmarks();
student.getmarks2();
student.getinfo();

// when we use arrow function this work as the relative to parent 
/*
for example ager arrow function main this keyword use kiya gya ho to wo apny parent ka this property use karta ha jesy k student object main arrow function use kiya gya ha is this keyword b use kiya gya ha jab is ko print kraya jata ha to ye window object print krata ha jo k student ka this property ha student ka this window object hota ha is lya arrow function main b this araha ha 

jab ham normal function ki bat karty hain to is main this usi object ko show krata ha jis object main this mojood ho 
*/