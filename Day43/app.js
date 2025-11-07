async function greet() {
  return "Hello World";
}

async function changeBg(color) {
  setTimeout(() => {
    document.body.style.backgroundColor = color;
    resolve();
  }, 3000);
}


