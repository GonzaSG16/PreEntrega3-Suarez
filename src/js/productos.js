const productos = [
    {
        id: 1,
        nombre: "MSI RTX 3080 Gaming Trio",
        imagen: "images/3080.png",
        precio: 325000
    },
    {
        id: 2,
        nombre: "Asus 1060 6GB Aorus",
        imagen: "images/1060aorus.png",
        precio: 55000
    },
    {
        id: 3,
        nombre: "Asus RTX 4080 16GB",
        imagen: "images/4080.jpg",
        precio: 560000
    },
    {
        id: 4,
        nombre: "Asus RTX 4080 16GB TUF",
        imagen: "images/4080tuf.jpg",
        precio: 600000
    },
    {
        id: 5,
        nombre: "AMD Ryzen 9 5950x 3.4GHz",
        imagen: "images/5950x.jpg",
        precio: 432900
    },
    {
        id: 6,
        nombre: "Intel Core i3 9100F 3.6GHz",
        imagen: "images/9100f.png",
        precio: 45000
    },
    {
        id: 7,
        nombre: "Intel Core i9-11900k 3.5GHz",
        imagen: "images/11900k.png",
        precio: 150000
    },
    {
        id: 8,
        nombre: "MSI X670 WiFi AM5",
        imagen: "images/x670wifi.jpg",
        precio: 300000
    },
    {
        id: 9,
        nombre: "Gabinete Thermaltake T600 Full Tower",
        imagen: "images/thermaltaket600.png",
        precio: 125000
    },
    {
        id: 10,
        nombre: "Gigabyte H310M Socket 1151",
        imagen: "images/h310m.png",
        precio: 90000
    },
    {
        id: 11,
        nombre: "Kingston HyperX Fury DDR3 8GB 1333MHz",
        imagen: "images/ddr3.png",
        precio: 8950
    },
    {
        id: 12,
        nombre: "Kingston Fury DDR4 8GB 3200MHz",
        imagen: "images/ddr4.png",
        precio: 15600
    },
    {
        id: 13,
        nombre: "Kingston Fury DDR5 8GB 4800MHz",
        imagen: "images/ddr5.png",
        precio: 32000
    },
    {
        id: 14,
        nombre: "Intel Core i5 9400F 2.9GHz",
        imagen: "images/9400f.jpg",
        precio: 67500
    }
];

function crearTarjetaDeProducto(producto) {
    const divColumna = document.createElement("div");
    const divTarjeta = document.createElement("div");
    const aImagen = document.createElement("a");
    const imgProducto = document.createElement("img");
    const h4Nombre = document.createElement("h4");
    const divRating = document.createElement("div");
    const iEstrella = document.createElement("i");
    const pPrecio = document.createElement("p");
    const botonAgregar = document.createElement("button");

    divColumna.classList.add("col-4");
    divTarjeta.classList.add("tarjeta-de-producto");
    aImagen.href = "#";
    imgProducto.src = producto.imagen;
    h4Nombre.textContent = producto.nombre;
    divRating.classList.add("rating");
    iEstrella.classList.add("fa", "fa-star");
    pPrecio.textContent = `$${producto.precio}`;
    botonAgregar.textContent = "Agregar al carrito";
    botonAgregar.classList.add("boton-agregar");

    divColumna.appendChild(divTarjeta);
    divTarjeta.appendChild(aImagen);
    aImagen.appendChild(imgProducto);
    divTarjeta.appendChild(h4Nombre);
    divTarjeta.appendChild(divRating);
    divRating.appendChild(iEstrella.cloneNode(true));
    divRating.appendChild(iEstrella.cloneNode(true));
    divRating.appendChild(iEstrella.cloneNode(true));
    divRating.appendChild(iEstrella.cloneNode(true));
    divRating.appendChild(iEstrella.cloneNode(true));
    divTarjeta.appendChild(pPrecio);
    divTarjeta.appendChild(botonAgregar);

    botonAgregar.addEventListener("click", () => {
        agregarAlCarrito(producto);
    });

    return divColumna;
}

function crearTarjetasDeProductos() {
    const contenedorDeProductos = document.getElementById("contenedor-de-productos");

    productos.forEach((producto) => {
        const tarjetaDeProducto = crearTarjetaDeProducto(producto);
        contenedorDeProductos.appendChild(tarjetaDeProducto);
    });
}

document.addEventListener("DOMContentLoaded", crearTarjetasDeProductos);