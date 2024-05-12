function persona(nombre,email,clave){
    this.nombre = nombre;
    this.email = email;
    this.clave = clave;
}

function administrador(nombre,email,clave,admin){
    persona.call(this,nombre,email,clave);
    this.admin = admin;
}

administrador.prototype = Object.create(persona.prototype);
administrador.prototype.constructor = administrador;

administrador.prototype.agregarProducto = function(){
    return console.log(`Producto ingresado correctamente`);
};
administrador.prototype.modificarProducto = function(){
    return console.log(`Producto modificado`);
};
administrador.prototype.eliminarUsuario = function(){
    return console.log(`Usuario eliminado`);
};

function usuario(nombre,email,clave,puntosAcumulados){
    persona.call(this,nombre,email,clave);
    this.puntosAcumulados = puntosAcumulados;
}

usuario.prototype = Object.create(persona.prototype);
usuario.prototype.constructor = usuario;

usuario.prototype.acumularPuntos = function(){
    return console.log(`Felicidades, puntos acumulados`);
};

usuario.prototype.canjearPuntos = function(){
    return console.log(`Tus puntos han sido canjeados`);
};


function producto(nombre,puntosNecesarios,cantidadDisponible,precio,stock){
  this.nombre = nombre;
  this.puntosNecesarios = puntosNecesarios;
  this.cantidadDisponible = cantidadDisponible;
  this.precio = precio;
  this.stock = stock;
}

function productoFisico(nombre,puntosNecesarios,cantidadDisponible,precio,stock,peso){
    producto.call(this,nombre,puntosNecesarios,cantidadDisponible,precio,stock);
    this.peso = peso;
}

productoFisico.prototype = Object.create(producto.prototype);
productoFisico.prototype.constructor = ProductoFisico;

productoFisico.prototype.actualizarStock = function(){
  return  console.log(`Stock actualizado`);
}
productoFisico.prototype.obtnereInfo = function(){
  return  console.log(`Información obtenida`);
}
productoFisico.prototype.enviarProductos = function(){
  return  console.log(`Producto enviado`);
}

function productoDigital(nombre,puntosNecesarios,cantidadDisponible,precio,stock,url){
  producto.call(this,nombre,puntosNecesarios,cantidadDisponible,precio,stock);
  this.url = url;
}

productoDigital.prototype = Object.create(producto.prototype);
productoDigital.prototype.constructor = productoDigital;

roductoDigital.prototype.descargar = function(){
return  console.log(`Producto descargado`);
}
roductoDigital.prototype.obtnereInfo = function(){
return  console.log(`Información obtenida`);
}
productoDigital.prototype.obtenerProductoEmail = function(){
return  console.log(`Se ha enviado el producto por email`);
}

function actividad(tipo,puntosOtorgados){
  this.tipo = tipo;
  this.puntosOtorgados = puntosOtorgados;
}

actividad.prototype.completarActividad = function(){
  console.log(`Completaste la actividad`);
}

function categoriaProductos(nombre,descripcion){
  this.nombre = nombre;
  this.descripcion = descripcion;plato
  plato
}
ordenEncaje.prototype.confirmarOrden = function(){
  console.log(`Orden Confirmada`);
}
ordenEncaje.prototype.cancelarOrden = function(){
  console.log(`Orden Cancelada`);
}

