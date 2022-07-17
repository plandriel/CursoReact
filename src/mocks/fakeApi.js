// const products = [
//     {id:"01", name:"producto1", description:"Descripcion de producto, no tan largo.", img:"https://picsum.photos/200", stock:5},
//     {id:"02", name:"producto2", description:"Descripcion de producto, no tan largo.", img:"https://picsum.photos/201", stock:15},
//     {id:"03", name:"producto3", description:"Descripcion de producto, no tan largo.", img:"https://picsum.photos/202", stock:8},
//     {id:"04", name:"producto4", description:"Descripcion de producto, no tan largo.", img:"https://picsum.photos/203", stock:2},
//     {id:"05", name:"producto5", description:"Descripcion de producto, no tan largo.", img:"https://picsum.photos/204", stock:3},
//     {id:"06", name:"producto6", description:"Descripcion de producto, no tan largo.", img:"https://picsum.photos/205", stock:2}
// ]


// ARRAY DE PRODUCTOS OBTENIDOS DE FAKE-STORE Y ADAPTADO AL PROYECTO
const products = [
    {
    id: 1,
    title: "HPE ProLiant ML110 Gen10",
    price: 109,
    description: "El servidor HPE ProLiant ML110 Gen10 es una torre mejorada con rendimiento, capacidad de expansión y crecimiento a un precio asequible. Satisface la mayoría de las necesidades empresariales de las pymes al tiempo que acelera la computación de su negocio. ProLiant ML110 Gen10 es un factor de forma de torre con un solo procesador que también puede colocarse en un armario de bastidor de servidor al utilizar 4,5U de espacio del bastidor. Incluye hasta cinco ranuras PCIe con espacio para ampliarse con 8 unidades de disco de factor de forma grande (LFF) o 16 de factor de forma reducido (SFF). Proporciona seis ranuras DDR4 DIMM que admiten HPE SmartMemory DDR4 con una capacidad máxima de 192 GB. ",
    category: "Hombres",
    image: "https://http2.mlstatic.com/D_NQ_NP_962122-MLA49863081487_052022-O.webp",
    stock:5,
    rating: {
    rate: 3.9,
    count: 120,
    route: '',
    }
    },
    {
    id: 2,
    title: "Servidor Hp Proliant Ml350 Gen9",
    price: 22,
    description: "Uno de los servidores perfectamente dimensionados de HP es el HP ProLiant ML350 Gen9: que entrega una combinación líder en su clase de rendimiento, disponibilidad, capacidad de ampliación, facilidad de gestión, fiabilidad y facilidad de servicio. Proponiendo las capacidades estándar de HP Integrated Lights-Out (iLO) para una gestión simplificada de la infraestructura de TI, ranuras para DDR4 HP SmartMemory con un rendimiento hasta un 14 % superior1 (un máximo de 48 unidades) y un NIC integrado de x4 1 GbE",
    category: "Hombres",
    image: "https://http2.mlstatic.com/D_NQ_NP_762348-MLA43822458570_102020-O.webp",
    stock:5,
    rating: {
    rate: 4.1,
    count: 259
    }
    },
    {
    id: 3,
    title: "HPE PROLIANT DL380 GEN10",
    price: 103900.99,
    description: "El servidor HPE ProLiant DL380 Gen10 ofrece lo último en seguridad, rendimiento y capacidad de expansión, respaldado por una garantía completa. Estandarizado en la plataforma de procesamiento más fiable del sector. Implemente, actualice, supervise y mantenga su servidor con facilidad al automatizar las tareas esenciales de gestión del ciclo de vida del servidor con HPE OneView y HPE Integrated Lights Out 5 (iLO 5). Implemente esta plataforma 2P segura para diversas cargas de trabajo en entornos con limitaciones de espacio.",
    category: "Hombres",
    image: "https://www.tradeinn.com/f/13786/137860170/hpe-proliant-dl380-gen10-intel-xeon-gold-6234.jpg",
    stock:15,
    rating: {
    rate: 4.7,
    count: 500
    }
    },
    {
    id: 4,
    title: "Mens Casual Slim Fit",
    price: 16,
    description: "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    category: "Hombres",
    image: "https://http2.mlstatic.com/D_NQ_NP_762348-MLA43822458570_102020-O.webp",
    stock:6,
    rating: {
    rate: 2.1,
    count: 430
    }
    },
    {
    id: 5,
    title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    description: "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    category: "Joyas",
    image: "https://http2.mlstatic.com/D_NQ_NP_762348-MLA43822458570_102020-O.webp",
    stock:4,
    rating: {
    rate: 4.6,
    count: 400
    }
    },
    {
    id: 6,
    title: "Solid Gold Petite Micropave ",
    price: 168,
    description: "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    category: "Joyas",
    image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    stock:2,
    rating: {
    rate: 3.9,
    count: 70
    }
    },
    {
    id: 7,
    title: "White Gold Plated Princess",
    price: 9.99,
    description: "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    category: "Joyas",
    image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    stock:8,
    rating: {
    rate: 3,
    count: 400
    }
    },
    {
    id: 8,
    title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
    price: 10.99,
    description: "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    category: "Joyas",
    image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
    stock:8,
    rating: {
    rate: 1.9,
    count: 100
    }
    },
    {
    id: 9,
    title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
    price: 64,
    description: "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    category: "Electronica",
    image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    stock:5,
    rating: {
    rate: 3.3,
    count: 203
    }
    },
    {
    id: 10,
    title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    price: 109,
    description: "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
    category: "Electronica",
    image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    stock:5,
    rating: {
    rate: 2.9,
    count: 470
    }
    },
    {
    id: 11,
    title: "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    price: 109,
    description: "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
    category: "Electronica",
    image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
    stock:5,
    rating: {
    rate: 4.8,
    count: 319
    }
    },
    {
    id: 12,
    title: "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
    price: 114,
    description: "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
    category: "Electronica",
    image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
    stock:5,
    rating: {
    rate: 4.8,
    count: 400
    }
    },
    {
    id: 13,
    title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
    price: 599,
    description: "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
    category: "Electronica",
    image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
    stock:5,
    rating: {
    rate: 2.9,
    count: 250
    }
    },
    {
    id: 14,
    title: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
    price: 999.99,
    description: "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
    category: "Electronica",
    image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
    stock:5,
    rating: {
    rate: 2.2,
    count: 140
    }
    },
    {
    id: 15,
    title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    price: 56.99,
    description: "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
    category: "Mujeres",
    image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
    stock:5,
    rating: {
    rate: 2.6,
    count: 235
    }
    },
    {
    id: 16,
    title: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    price: 29.95,
    description: "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
    category: "Mujeres",
    image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
    stock:5,
    rating: {
    rate: 2.9,
    count: 340
    }
    },
    {
    id: 17,
    title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    price: 39.99,
    description: "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
    category: "Mujeres",
    image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    stock:5,
    rating: {
    rate: 3.8,
    count: 679
    }
    },
    {
    id: 18,
    title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
    price: 9.85,
    description: "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
    category: "Mujeres",
    image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
    stock:5,
    rating: {
    rate: 4.7,
    count: 130
    }
    },
    {
    id: 19,
    title: "Opna Women's Short Sleeve Moisture",
    price: 7.95,
    description: "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
    category: "Mujeres",
    image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
    stock:5,
    rating: {
    rate: 4.5,
    count: 146
    }
    },
    {
    id: 20,
    title: "DANVOUY Womens T Shirt Casual Cotton Short",
    price: 12.99,
    description: "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
    category: "Mujeres",
    image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
    stock:5,
    rating: {
    rate: 3.6,
    count: 145,
    }
    }
    ]

export const getData = new Promise((resolve, reject) => {
    let condition = true
    setTimeout(() => {
        if (condition) {
            resolve(products)
        }else{
            reject("error - rechazado")
        }
    }, 1000)
})

// PROMESA PARA OBTENER SOLO UN PRODUCTO
export const getProd = (id) => {
    return new Promise((resolve, reject) => {
        const productoEncontrado = products.find(
            (prod) => prod.id === Number(id)
        );
        setTimeout(() => {
            resolve(productoEncontrado);
        }, 1000);
    });
};

// PROMESA PARA OBTENER TODOS LOS PRODUCTOS, VALIDANDO TAMBIEN EL ID PARA FILTRAR POR CATEGORIAS
export const getProds = (categoryId) => {
    return new Promise((resolve, reject) => {
        const productosFiltrados = products.filter(
            (prod) => prod.category === categoryId
        );
        setTimeout(() => {
            categoryId ? resolve(productosFiltrados) : resolve(products);
        }, 1000);
    });
};