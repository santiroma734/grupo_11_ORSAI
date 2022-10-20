const controller = {
  index: (req, res) => {
    const promos = [
      {
        src: "/imgs/pizza-producto-3.jpg",
        nombre: "Pizza de Dios + 2 cervezas o 2 gasesosas",
        precio: 1200,
        descripcion: "descripción",
      },
      {
        src: "/imgs/pizza-producto-1.jpg",
        nombre: "Pizza el Dibu + 1 cerveza o 1 gaseosa",
        precio: 1000,
        descripcion: "descripción",
      },
      {
        src: "/imgs/pizza-producto-4.jpg",
        nombre: "Pizza Messirve + 2 cervezas o 2 gasesosas",
        precio: 1100,
        descripcion: "descripción",
      },
    ];
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
    ];
    res.render("index", {
      promos: promos,
      pizzas: pizzas,
      empanadas: empanadas,
    });
  },
};

module.exports = controller;
