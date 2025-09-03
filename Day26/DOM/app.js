let oldImage = document.getElementsByClassName("oldImg"); // It return HTML collection
console.dir(oldImage);

console.log("run for loop");

for (let i = 0; i < oldImage.length; i++) {
    oldImage[i].src = "assets/spiderman_img.png";
  console.dir(oldImage[i]);
}


let tagName = document.getElementsByTagName('p'); // it return html collection 
console.dir(tagName)


let variable = document.querySelector('.oldImg'); // it select only single element first if multiple
variable.src = "assets/creation_1.png"