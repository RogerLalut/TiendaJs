const productos = [
  {
    id: 1,
    nombre: "Polera Faith No More",
    precio: 10000,
    cantidad: 1,
    img: "../Img/p-fnm.jpg",
  },
  {
    id: 2,
    nombre: "Polera AC/DC",
    precio: 10000,
    cantidad: 1,
    img: "../Img/P-acdc.jpg",
  },
  {
    id: 3,
    nombre: "Polera Metallica",
    precio: 10000,
    cantidad: 1,
    img: "../Img/p-metallica.jpg",
  },
  {
    id: 4,
    nombre: "Polera Led Zeppelin",
    precio: 10000,
    cantidad: 1,
    img: "../Img/P-LedZeppelin.jpg",
  },
  {
    id: 5,
    nombre: "Polera System Of A Down",
    precio: 10000,
    cantidad: 1,
    img: "../Img/P-SystemOfADown.jpg",
  },
  {
    id: 6,
    nombre: "Polera Pearl Jam",
    precio: 10000,
    cantidad: 1,
    img: "../Img/P-PearlJam.jpg",
  },
  {
    id: 7,
    nombre: "Polera Alice In Chains",
    precio: 10000,
    cantidad: 1,
    img: "../Img/P-AliceInChains.jpg",
  },
  {
    id: 8,
    nombre: "Polera The Doors",
    precio: 10000,
    cantidad: 1,
    img: "../Img/P-TheDoors.jpg",
  },
  {
    id: 9,
    nombre: "Polera Foo Fighters",
    precio: 10000,
    cantidad: 1,
    img: "../Img/P-Foo-Fighters.png",
  },
  {
    id: 10,
    nombre: "Polera Slipknot",
    precio: 10000,
    cantidad: 1,
    img: "../Img/P-Slipknot.png",
  },
  {
    id: 11,
    nombre: "Polera Slayer",
    precio: 10000,
    cantidad: 1,
    img: "../Img/p-Slayer.png",
  },
  {
    id: 12,
    nombre: "Polera Testament",
    precio: 10000,
    cantidad: 1,
    img: "../Img/P-Testament.png",
  },
  {
    id: 13,
    nombre: "Poleron Faith No More",
    precio: 20000,
    cantidad: 1,
    img: "../Img/Poleron-FaithNoMore.jpg",
  },
  {
    id: 14,
    nombre: "Poleron Alice In Chains",
    precio: 20000,
    cantidad: 1,
    img: "../Img/Poleron-AliceInChains.jpg",
  },
  {
    id: 15,
    nombre: "Poleron Iron Maiden",
    precio: 20000,
    cantidad: 1,
    img: "../Img/Poleron-IronMaiden.jpg",
  },
  {
    id: 16,
    nombre: "Poleron Rammstein",
    precio: 20000,
    cantidad: 1,
    img: "../Img/Poleron-Rammstein.jpg",
  },
  {
    id: 17,
    nombre: "DISCO VINILO DOBLE  QUEEN A KIND OF MAGIC",
    precio: 35000,
    cantidad: 1,
    img: "../Img/Vinillo-Queen1.jpg",
  },
  {
    id: 18,
    nombre: "DISCO VINILO QUEEN SHEER HEART ATTACK",
    precio: 30000,
    cantidad: 1,
    img: "../Img/Vinillo-Queen3.jpg",
  },
  {
    id: 19,
    nombre: "DISCO VINILO QUEEN A NIGHT AT THE OPERA",
    precio: 30000,
    cantidad: 1,
    img: "../Img/Vinillo-Queen2.jpg",
  },
  {
    id: 20,
    nombre: "Accept BALLS TO THE WALL ",
    precio: 10990,
    cantidad: 1,
    img: "../Img/CD-Accept.jpg",
  },
  {
    id: 21,
    nombre: "Alice In Chains ALICE IN CHAINS",
    precio: 11990,
    cantidad: 1,
    img: "../Img/CD-AliceInChains.jpg",
  },
  {
    id: 22,
    nombre: "Judas Priest TURBO",
    precio: 10990,
    cantidad: 1,
    img: "../Img/CD-JudasPriest.jpg",
  },
  {
    id: 23,
    nombre: "Testament DARK ROOTS OF EARTH",
    precio: 18990,
    cantidad: 1,
    img: "../Img/CD-Testament.jpg",
  },
  {
    id: 24,
    nombre: "Duran Duran RIO",
    precio: 16990,
    cantidad: 1,
    img: "../Img/CD-DuranDuran.jpg",
  },
  {
    id: 25,
    nombre: "David Bowie LEGACY",
    precio: 20990,
    cantidad: 1,
    img: "../Img/CD-DavidBowie.jpg",
  },
  {
    id: 26,
    nombre: "Brazalete Calavera",
    precio: 8990,
    cantidad: 1,
    img: "../Img/ACC-BrazaleteBronce.jpg",
  },
  {
    id: 27,
    nombre: "Pañuelo Burdeo",
    precio: 5990,
    cantidad: 1,
    img: "../Img/ACC-PanueloBurdeo.jpg",
  },
  {
    id: 28,
    nombre: "Anillo Madera",
    precio: 3990,
    cantidad: 1,
    img: "../Img/ACC-Anillo.jpg",
  },
  {
    id: 29,
    nombre: "Brazalete Balas",
    precio: 8990,
    cantidad: 1,
    img: "../Img/ACC-BrazaleteBalas.jpg",
  },
  {
    id: 30,
    nombre: "Cinturon Motorhead",
    precio: 12990,
    cantidad: 1,
    img: "../Img/ACC-Cinturon.jpg",
  },
];


let carrito = [];

const contenedor = document.querySelector("#contenedor");
const carritoContenedor = document.querySelector("#carritoContenedor");
const vaciarCarrito = document.querySelector("#vaciarCarrito");
const precioTotal = document.querySelector("#precioTotal");
const procesarCompra = document.querySelector("#procesarCompra");

document.addEventListener('DOMContentLoaded', ()=>{
  carrito=JSON.parse(localStorage.getItem('carrito')) || [];
  mostrarCarrito();
})



productos.forEach((product) => {
  const { id, nombre, precio, cantidad, img } = product;
  contenedor.innerHTML += `
      <div class="card text-center m-5 " style="width: 18rem;">
      <img class="card-img-top mt-2" src="${img}" alt="Card image cap">
      <div class="card-body">
          <h5 class="card-title">${nombre}</h5>
          <p class="card-text">Precio: $${precio}</p>        
          <button onclick = "agregarProducto(${id})" class="btn btn-warning ml-2">Agregar al carrito</button>
      </div>
  </div>
      `;
});

vaciarCarrito.addEventListener("click", () => {
  carrito.length = [];
  mostrarCarrito();
});


procesarCompra.addEventListener("click", () => {
  if (carrito.length === 0) {
    Swal.fire({
      title: "El carrito está vacío",
      icon: "error",
      confirmButtonText: "Aceptar",
    });
  } else {
    Swal.fire({
      title: "Compra Finalizada",
      icon: "success",
      confirmButtonText: "Aceptar",
    });
    carrito.length = [];
    mostrarCarrito();
  }
});

function agregarProducto(id) {
  const item = carrito.some(product => product.id === id);
  
  if (item) {
    const product = carrito.map(product => {
      if (product.id === id) {
        product.cantidad++;
        Swal.fire({
          icon: "success",
          title: 'Producto Agregado al carrito',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          },
          showConfirmButton: false,
          timer: 900
        });
      }
    });
  } else {
    const item = productos.find((product) => product.id === id);
    carrito.push(item);
    Swal.fire({
      icon: "success",
      title: 'Producto Agregado al carrito',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      },
      showConfirmButton: false,
      timer: 900
    });
  }
  mostrarCarrito();
}

const mostrarCarrito = () => {
  const carroCompras = document.querySelector(".modal .modal-body");

  carroCompras.innerHTML = "";

  carrito.forEach((product) => {
    const { id, nombre, precio, cantidad, img } = product;
    
    carroCompras.innerHTML += `
    <div class = "contenedor-carrito">
    <div>
    <img class="img-fluid img-carrito" src="${img}"/>
    </div>
    <div>
    <p>${nombre}</p>
    <p>precio: $${precio}</p>
    <p>cantidad: ${cantidad}</p>
    <button onclick = "eliminarProducto(${id})"class="btn btn-danger">Eliminar Producto</button>
    </div>
    </div>
          `;
});

  if (carrito.length === 0) {
    carroCompras.innerHTML = `
          <p class="text-center text-primary">Carrito Vacío</p>`;
  } 
  
  carritoContenedor.textContent = carrito.length;

  precioTotal.textContent = carrito.reduce(
    (acc, product) => acc + product.cantidad * product.precio,
    0
  );
  guardarStorage();
};
function eliminarProducto(id) {
  const productoId = id;
  carrito = carrito.filter((prod) => prod.id !== productoId);
  mostrarCarrito();
}
function guardarStorage(){
localStorage.setItem("carrito", JSON.stringify(carrito))
}