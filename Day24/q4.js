const object = {
    message : "Muzzamal",
    longMessage() {
        console.log(this.message);
    }
}


setTimeout(object.longMessage.bind(object), 1000);