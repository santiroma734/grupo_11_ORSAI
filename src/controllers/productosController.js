const controller = {
  view: (req, res) => {
    const pizzas = [
      {
        src: "/imgs/productos/PRODUCTO-pizza-6.jpg",
        nombre: "Pizza la Scaloneta",
        precio: 1000,
        descripcion: "descripcion",
      },
      {
        src: "/imgs/productos/PRODUCTO-pizza-5.jpg",
        nombre: "Pizza el Kuni",
        precio: 1000,
        descripcion: "descripcion",
      },
      {
        src: "/imgs/productos/PRODUCTO-pizza-2.jpg",
        nombre: "Pizza el Diego",
        precio: 1000,
        descripcion: "descripcion",
      },
      {
        src: "/imgs/productos/PRODUCTO-pizza-1.jpg",
        nombre: "Pizza",
        precio: 1000,
        descripcion: "descripcion",
      },
      {
        src: "/imgs/productos/PRODUCTO-pizza-4.jpg",
        nombre: "Pizza",
        precio: 1000,
        descripcion: "descripcion",
      },
      {
        src: "/imgs/productos/PRODUCTO-pizza-3.jpg",
        nombre: "Pizza",
        precio: 1000,
        descripcion: "descripcion",
      },
      {
        src: "/imgs/productos/PRODUCTO-pizza-7.jpg",
        nombre: "Pizza",
        precio: 1000,
        descripcion: "descripcion",
      },
      {
        src: "/imgs/productos/PRODUCTO-pizza-8.jpg",
        nombre: "Pizza",
        precio: 1000,
        descripcion: "descripcion",
      },
    ];
    const empanadas = [
      {
        src: "/imgs/productos/PRODUCTO-empanada.jpg",
        nombre: "Carne a cuchillo",
        precio: 200,
      },
      {
        src: "/imgs/productos/PRODUCTO-empanada.jpg",
        nombre: "Pollo",
        precio: 200,
      },
      {
        src: "/imgs/productos/PRODUCTO-empanada.jpg",
        nombre: "Jamon y queso",
        precio: 200,
      },
      {
        src: "/imgs/productos/PRODUCTO-empanada.jpg",
        nombre: "Jamon y queso",
        precio: 200,
      },
      {
        src: "/imgs/productos/PRODUCTO-empanada.jpg",
        nombre: "Jamon y queso",
        precio: 200,
      },
      {
        src: "/imgs/productos/PRODUCTO-empanada.jpg",
        nombre: "Jamon y queso",
        precio: 200,
      },
    ];
    res.render("productos", {
      pizzas: pizzas,
      empanadas: empanadas,
    });
  },
};

module.exports = controller;
