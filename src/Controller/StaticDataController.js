const homeCarousel = require('../Models/home_carouse');
const Category = require('../Models/category');
const Products = require('../Models/Products');

const AddhomeCarousel = async (req, res) => {

    await homeCarousel.insertMany([
        {
            "image": "airpos.jpeg",
            "category": "phone"
        },
        {
            "image": "privacy.jpg",
            "category": "phone"
        },
        {
            "image": "samsung.jpg",
            "category": "phone"
        },
        {
            "image": "samsunggalaxy.jpg",
            "category": "phone"
        }
       
    
    ]);

    res.json({
        resp: true
    });
}


const addCategoryStatic = async (req, res) => {

    await Category.insertMany([
        {
            "category": "Headphones",
            "picture": "airpods3.png"
        },
        {
            "category": "Computing",
            "picture": "surfacebook.png"
        },
        {
            "category": "Smart home",
            "picture": "philips.png"
        },
        {
            "category": "Sport and Fitness",
            "picture": "watch7.png"
        },
        {
            "category": "Phones",
            "picture": "a70.png"
        },
        {
            "category": "Tablets",
            "picture": "ipadair20.png"
        },
        {
            "category": "Drones",
            "picture": "djipro.png"
        },
        {
            "category": "Camera",
            "picture": "a700sony.png"
        },
        {
            "category": "Watch",
            "picture": "watch7.png"
        },
       
       
       

    ]);

    res.json({
        resp: true,
        msj : 'Data inserted correctly - Category'
    });

} 


const addProductsStatic = async ( req, res ) => {

    await Products.insertMany([
        {
            "nameProduct": "Apple iPhone 11 Pro 64 Gb",
            "description": "EQUIPOS NUEVOS, LIBRES DE FABRICA CON BOLETA DE VENTA. ¡SE BRINDA 12 MESES DE GARANTIA!!!!!",
            "codeProduct": "0000001",
            "stock" : 15,
            "price": 4890.90,
            "status": "active",
            "picture": "iphonemini.png",
            "category_id" :"60ff4ea2071b3b2cb0951d1b"
        },
        {
            "nameProduct": "Audifonos Apple AirPods Pro",
            "description": "Entregamos Factura y/o Boleta, todos los precios incluyen IGV",
            "codeProduct": "0000002",
            "stock" : 10,
            "price": 619.00,
            "status": "active",
            "picture": "applepro.png",
            "category_id" :"60ff4ea2071b3b2cb0951d1c"
        },
        {
            "nameProduct": "Audífonos Inalámbricos Con Noise Cancelling Wh1000 xm4",
            "description": "Los intuitivos e inteligentes audífonos WH-1000XM4 te ofrecen nuevas mejoras en la tecnología de noise cancelling líder del sector ",
            "codeProduct": "0000003",
            "stock" : 10,
            "price": 1000.06,
            "status": "active",
            "picture": "sonyx4.png",
            "category_id" :"60ff4ea2071b3b2cb0951d1c"
        },
        {
            "nameProduct": "Drone Dji Mavic 2 Pro Capacitación Mtc",
            "description": "DRONE DJI MAVIC 2 PRO",
            "codeProduct": "0000004",
            "stock" : 15,
            "price": 1725.25,
            "status": "active",
            "picture": "djimavic.png",
            "category_id" :"60ff4ea2071b3b2cb0951d2b"
        },
        {
            "nameProduct": "Laptop Macbook Pro 13 2021",
            "description": "Laptop Macbook Pro 13 2021 is amazing laptop",
            "codeProduct": "0000005",
            "stock" : 14,
            "price": 3000,
            "status": "active",
            "picture": "macbook.png",
            "category_id" :"60ff4ea2071b3b2cb0951d15"
        },
        {
            "nameProduct": "Camera a70 sony",
            "description": "is the best camera in the world",
            "codeProduct": "0000006",
            "stock" : 16,
            "price": 5952.00,
            "status": "active",
            "picture": "a700sony.png",
            "category_id" :"60ff4ea2071b3b2cb0951d15"
        },
        {
            "nameProduct": "airpods 3",
            "description": "EN STOCK OCULUS QUEST 2!!! ENTREGA INMEDIATA, TIENDA FISICA, GARANTIA, COMPLETAMENTE SELLADO",
            "codeProduct": "0000007",
            "stock" : 20,
            "price": 2500.00,
            "status": "active",
            "picture": "airpods3.png",
            "category_id" :"60ff4ea2071b3b2cb0951d2b"
        },
        {
            "nameProduct": "amazon watch",
            "description": "Mochila Hombre Lona Canvas Importada Vintage Bolso Maletin",
            "codeProduct": "0000008",
            "stock" : 11,
            "price": 500.00,
            "status": "active",
            "picture": "amazon.png",
            "category_id" :"60ff4ea2071b3b2cb0951d1d"
        },
        {
            "nameProduct": "Dji gopro",
            "description": "Mouse-Logitech-G-Pro-Wireless-Hero-25k.jpg",
            "codeProduct": "0000009",
            "stock" : 12,
            "price": 832.00,
            "status": "active",
            "picture": "djiprocam.png",
            "category_id" :"60ff4ea2071b3b2cb0951d15"
        },
        {
            "nameProduct": "Samsung s22",
            "description": "Samsung-S21-Ultra-5g-256gb-12ram.jpg",
            "codeProduct": "0000010",
            "stock" : 22,
            "price": 5962.00,
            "status": "active",
            "picture": "s22.png",
            "category_id" :"60ff4ea2071b3b2cb0951d1b"
        },
        {
            "nameProduct": "Philips hue",
            "description": "Tv Xiaomi 43 Ultra Hd Smart",
            "codeProduct": "0000011",
            "stock" : 6,
            "price": 3520.00,
            "status": "active",
            "picture": "philips.png",
            "category_id" :"60ff4ea2071b3b2cb0951d1c"
        },
        {
            "nameProduct": "Surface Pro",
            "description": "Laptop-Lenovo-14-W-Amd-A6",
            "codeProduct": "0000012",
            "stock" : 11,
            "price": 1599.00,
            "status": "active",
            "picture": "surcepro.png",
            "category_id" :"60ff4ea2071b3b2cb0951d15"
        },
        {
            "nameProduct": "Surface book",
            "description": "Macbook-Pro-13-Chip-M1-Apple",
            "codeProduct": "0000013",
            "stock" : 10,
            "price": 6499.00,
            "status": "active",
            "picture": "surfacebook.png",
            "category_id" :"60ff4ea2071b3b2cb0951d15"
        },
        {
            "nameProduct": "Beats studio",
            "description": "Laptop-Asus-Zenbook-14",
            "codeProduct": "0000014",
            "stock" : 19,
            "price": 3499.00,
            "status": "active",
            "picture": "beatsstudio.png",
            "category_id" :"60ff4ea2071b3b2cb0951d15"
        },
        {
            "nameProduct": "dji pro",
            "description": "Laptop-Lenovo-Ideapadflex",
            "codeProduct": "0000015",
            "stock" : 6,
            "price": 4599.00,
            "status": "active",
            "picture": "djipro.png",
            "category_id" :"60ff4ea2071b3b2cb0951d15"
        },
        {
            "nameProduct": "camera dji x4",
            "description": "Laptop-Asus-Rog-Strix-G512li-bi7n10",
            "codeProduct": "0000016",
            "stock" : 8,
            "price": 5059.00,
            "status": "active",
            "picture": "djix4.png",
            "category_id" :"60ff4ea2071b3b2cb0951d15"
        },
        {
            "nameProduct": "camera sony profesional videos",
            "description": "Laptop Lenovo Celeron",
            "codeProduct": "0000017",
            "stock" : 6,
            "price": 1059.00,
            "status": "active",
            "picture": "sonypro.png",
            "category_id" :"60ff4ea2071b3b2cb0951d15"
        },
        {
            "nameProduct": "ipad air 2020",
            "description": "Apple iPhone 11 128gb",
            "codeProduct": "0000018",
            "stock" : 18,
            "price": 3149.00,
            "status": "active",
            "picture": "ipadair20.png",
            "category_id" :"60ff4ea2071b3b2cb0951d1b"
        },
        {
            "nameProduct": "ipad pro",
            "description": "Samsung Galaxy A12",
            "codeProduct": "0000019",
            "stock" : 15,
            "price": 658.00,
            "status": "active",
            "picture": "ipadpro.png",
            "category_id" :"60ff4ea2071b3b2cb0951d1b"
        },
        {
            "nameProduct": "headphones",
            "description": "Xiaomi Poco X3 Nfc",
            "codeProduct": "0000020",
            "stock" : 16,
            "price": 1169.00,
            "status": "active",
            "picture": "headpohnes.png",
            "category_id" :"60ff4ea2071b3b2cb0951d1b"
        },
        {
            "nameProduct": "iPhone 12 Pro Max",
            "description": "iPhone 12 Pro Max",
            "codeProduct": "0000021",
            "stock" : 17,
            "price": 5499.00,
            "status": "active",
            "picture": "iphonemini.png",
            "category_id" :"60ff4ea2071b3b2cb0951d1b"
        },
        {
            "nameProduct": "iphone 13 pro max",
            "description": "Xiaomi Redmi Note 10",
            "codeProduct": "0000022",
            "stock" : 14,
            "price": 889.00,
            "status": "active",
            "picture": "iphonepro.png",
            "category_id" :"60ff4ea2071b3b2cb0951d1b"
        },
        {
            "nameProduct": "watch se",
            "description": "Samsung Galaxy A71",
            "codeProduct": "0000023",
            "stock" : 14,
            "price": 1669.00,
            "status": "active",
            "picture": "watchse.png",
            "category_id" :"60ff4ea2071b3b2cb0951d1b"
        },
        {
            "nameProduct": "apple watch s7",
            "description": "this watch is very cool because it is very good",
            "codeProduct": "0000024",
            "stock" : 11,
            "price": 3399.00,
            "status": "active",
            "picture": "watch7.png",
            "category_id" :"60ff4ea2071b3b2cb0951d1b"
        }
    ]);

    res.json({
        resp: true,
        msj : 'Data inserted correctly - Products'
    });

}


module.exports = {
    AddhomeCarousel,
    addCategoryStatic,
    addProductsStatic
}