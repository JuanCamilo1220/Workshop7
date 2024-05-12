function persona(nombre,email,clave, autenticacion){
    this.nombre = nombre;
    this.email = email;
    this.clave = clave;
    this.autenticacion = autenticacion;
  }
  

  function cliente(nombre,email,clave,direccion,telefono){
    persona.call(this,nombre,email,clave);
    this.direccion = direccion;
    this.telefono = telefono;
  }
  
  cliente.prototype = Object.create(persona.prototype);
  cliente.prototype.constructor = cliente;
  
  cliente.prototype.realizarPedido = function(){
    console.log("Pedido realizado");
  }
  
  cliente.prototype.verHistorialPedido = function(){
    console.log(`Mira tu historial de pedidos:`);
  }

  function repartidor(nombre,email,clave,vehiculo,disponibilidad){
    persona.call(this, nombre,email,clave);
    this.vehiculo = vehiculo;
    this.disponibilidad = disponibilidad;
  }
  
  repartidor.prototype = Object.create(Persona.prototype);
  repartidor.prototype.constructor = repartidor;
  
  repartidor.prototype.aceptarEnvio = function(){
    console.log("Envio aceptado");
  }
  
  repartidor.prototype.actualizarUbicacion = function(){
    console.log("Ubicacion actualizada");
  }
  
  repartidor.prototype.completarEntrega = function(){
    console.log("Entrega completada");
  }
  
  repartidor.prototype.actualizarEstado = function(){
    console.log("Estado actualizado");
  }
  
  function restaurante(nombre){
    this.nombre = nombre;
    this.agregarPlato = agregarPlato;
    this.actualizarPlato = actualizarPlato;
  }
  
  function restauranteDigital(nombre,menuqr){
    restaurante.call(this,nombre);
    this.menuqr = menuqr;
  }
  
  restauranteDigital.prototype = Object.create(restaurante.prototype);
  restauranteDigital.prototype.constructor = restauranteDigital;
  

  function restauranteFisico(nombre,direccion,menufisico){
    restaurante.call(this,nombre);
    this.direccion = direccion;
    this.menufisico = menufisico;
  }
  
  restauranteFisico.prototype = Object.create(restaurante.prototype);
  restauranteFisico.prototype.constructor = restauranteFisico;
  
  restauranteFisico.prototype.eliminarPlato = function(){
    console.log("Plato eliminado");
  }
  
  function menu(plato){
    this.plato = plato;
  }
  
  function menuFisico(plato,carta){
    menu.call(this,plato)
    this.carta = carta;
  }
  
  menuFisico.prototype = Object.create(menu.prototype);
  menuFisico.prototype.constructor = menuFisico;
  
  menuFisico.prototype.impresion = function(){
    console.log("ver impresion");
  }
  
  menuFisico.prototype.visualizacio = function(){
    console.log("visualizado");
  }
  
  function menuDigital(plato,url){
    menu.call(this,plato)
    this.url = url;
  }
  
  menuDigital.prototype = Object.create(menu.prototype);
  menuDigital.prototype.constructor = menuDigital;
  
  menuDigital.prototype.generalQr = function(){
    console.log("QR generado");
  }
  
  function pedido(nombre,descripcion,cliente, restaurante, detallesPedido, estadoPedido){
    this.nombre = nombre;
    this.descargar = descripcion;
    this.cliente = cliente;
    this.restaurante = restaurante;
    this.detallesPedido = detallesPedido;
    this.estadoPedido = estadoPedido;
  }
  
  function Plato(nombre, precio, ingredientes){
    this.nombre = nombre;
    this.precio = precio;
    this.ingredientes = ingredientes;
  }
  plato.prototype.obtenerInfo = function(){
    console.log(`La informacion ha sido obtenida`)
  }