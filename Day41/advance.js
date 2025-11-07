// synch Programing
/*
In syncronus Programming 
the next task perform after completion of first one util its is in queue


Asynchronus Programming
-----------------------
    in async programing if there is a delayin forst task the next task or statement dont wait for the completion first one either it starts its exicution 

*/

// Synchronous
console.log("Step 1");
console.log("Step 2");
console.log("Step 3");

// Asynchronous
console.log("Step 1");
setTimeout(() => {
  console.log("Step 2 (afetr 2s)");
}, 2000);
console.log("Step 3");
