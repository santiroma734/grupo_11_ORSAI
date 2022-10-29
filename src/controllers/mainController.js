const controller = {
  index: (req, res) => {
    const promos = [
      {
        imagen: "/imgs/productos/PRODUCTO-pizza-3.jpg",
        nombre: "Pizza a Elección + Bebida",
        precio: 2200,
        descripcion: "Pizza a elección mas una cerveza o gaseosa.",
      },
      {
        imagen: "/imgs/productos/PRODUCTO-pizza-1.jpg",
        nombre: "Pizza el Dibu + 1 cerveza o 1 gaseosa",
        precio: 2200,
        descripcion: "Pizza a elección mas una cerveza o gaseosa.",
      },
      {
        imagen: "/imgs/productos/PRODUCTO-pizza-4.jpg",
        nombre: "Pizza Messirve + 2 cervezas o 2 gasesosas",
        precio: 2200,
        descripcion: "Pizza a elección mas una cerveza o gaseosa.",
      },
    ];
    const pizzas = [
      {
        "id": 4,
        "nombre": "Orsai",
        "descripcion": "Salsa de Tomate, Mozzarella, Champiñones, Tomates Secos, Chorizo Colorado y Burrata",
        "imagen": "/imgs/productos/PRODUCTO-pizza-7.jpg",
        "categoria": "Pizza",
        "esPromocion": false,
        "precio": 1600
      },
      {
        "id": 5,
        "nombre": "La Albiceleste",
        "descripcion": "Fugazzeta Clásica: Mozzarella, Cebolla, Oregano, Pimienta y Aceitunas Negras.",
        "imagen": "/imgs/productos/PRODUCTO-pizza-5.jpg",
        "categoria": "Pizza",
        "esPromocion": false,
        "precio": 1200
      },
      {
        "id": 6,
        "nombre": "Tango",
        "descripcion": "Muzzarella, Salsa de Tomate, Pimientos Morrones, Aceitunas Negras, Tomates Cherry, Jamón Serrano, Semillas de Sésamo y Masa Integral.",
        "imagen": "/imgs/productos/PRODUCTO-pizza-6.jpg",
        "categoria": "Pizza",
        "esPromocion": false,
        "precio": 1500
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
    ];
    res.render("index", {
      promos: promos,
      pizzas: pizzas,
      empanadas: empanadas,
    });
  },
};

module.exports = controller;
