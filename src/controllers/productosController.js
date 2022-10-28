const controller = {
  view: (req, res) => {
    const pizzas = [
      {
        src: "/imgs/pizza-producto-6.jpg",
        nombre: "Pizza la Scaloneta",
        precio: 1000,
        descripcion: "descripcion",
      },
      {
        src: "/imgs/pizza-producto-5.jpg",
        nombre: "Pizza el Kuni",
        precio: 1000,
        descripcion: "descripcion",
      },
      {
        src: "/imgs/pizza-producto-2.jpg",
        nombre: "Pizza el Diego",
        precio: 1000,
        descripcion: "descripcion",
      },
      {
        src: "/imgs/pizza-producto-1.jpg",
        nombre: "Pizza",
        precio: 1000,
        descripcion: "descripcion",
      },
      {
        src: "/imgs/pizza-producto-4.jpg",
        nombre: "Pizza",
        precio: 1000,
        descripcion: "descripcion",
      },
      {
        src: "/imgs/pizza-producto-3.jpg",
        nombre: "Pizza",
        precio: 1000,
        descripcion: "descripcion",
      },
      {
        src: "/imgs/pizza-producto-7.jpg",
        nombre: "Pizza",
        precio: 1000,
        descripcion: "descripcion",
      },
      {
        src: "/imgs/pizza-producto-8.jpg",
        nombre: "Pizza",
        precio: 1000,
        descripcion: "descripcion",
      },
    ];
    const empanadas = [
      {
        src: "/imgs/empanadas.jpg",
        nombre: "Carne a cuchillo",
        precio: 200,
      },
      {
        src: "/imgs/empanadas.jpg",
        nombre: "Pollo",
        precio: 200,
      },
      {
        src: "/imgs/empanadas.jpg",
        nombre: "Jamon y queso",
        precio: 200,
      },
      {
        src: "/imgs/empanadas.jpg",
        nombre: "Jamon y queso",
        precio: 200,
      },
      {
        src: "/imgs/empanadas.jpg",
        nombre: "Jamon y queso",
        precio: 200,
      },
      {
        src: "/imgs/empanadas.jpg",
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
