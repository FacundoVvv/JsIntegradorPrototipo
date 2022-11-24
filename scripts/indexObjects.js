const banners = [
    {
        src: "/assets/mainImages/banners/newStyle.svg",
        alt:"Banner image",
        id:"actualBannerImage",
        classs:"bannerImage",
    },
    {
        src: "/assets/mainImages/banners/coreracer.svg",
        alt:"Banner image",
        id:"actualBannerImage",
        classs:"bannerImage",
    },
    {
        src: "/assets/mainImages/banners/nikeStarRunner.svg",
        alt:"Banner image",
        id:"actualBannerImage",
        classs:"bannerImage",
    },
    {
        src: "/assets/mainImages/banners/dcMidway.svg",
        alt:"Banner image",
        id:"actualBannerImage",
        classs:"bannerImage",
    },
    {
        src: "/assets/mainImages/banners/vans.svg",
        alt:"Banner image",
        id:"actualBannerImage",
        classs:"bannerImage",
    },
    {
        src: "/assets/mainImages/banners/johnfoos.svg",
        alt:"Banner image",
        id:"actualBannerImage",
        classs:"bannerImage",
    },
    {
        src: "/assets/mainImages/banners/showthewayadidas.svg",
        alt:"Banner image",
        id:"actualBannerImage",
        classs:"bannerImage",
    },
    

]
const points = [
    {
        src:"/assets/mainImages/redPoint.svg"
    },
    {
        src:"/assets/mainImages/whitePoint.svg"
    }
]

const shoes = [
    // start only banner shoes
    {
        nombre: "Adidas ShowTheWay",
        precio: 13900,
        src: `/assets/shoesImages/adidasShowTheWayShoes.svg`,
        category: "Deportivas",
        marca:"Adidas",
        talles: [40, 41, 42, 43, 44],
        stock: 25,
        color: "Negro",
        oferta: false,
        infoText: `Lorem ipsum dolor sit amet 
        consectetur adipisicing elit. 
        Molestiae maxime voluptatem quam, `,
        id:1,

    },
    {
        nombre: "New Style",
        precio: 13000,
        src: `/assets/shoesImages/newStyleShoe.svg`,
        category: "Deportivas",
        marca:"New Style",
        talles: [40,41,42,43,44],
        stock: 15,
        color: "Negro",
        oferta: false,
        infoText: `Lorem ipsum dolor sit amet 
        consectetur adipisicing elit. 
        Molestiae maxime voluptatem quam, `,
        id:2,
    },
    {
        nombre: "Star Runner",
        precio: 15000,
        src: `/assets/shoesImages/nikeStarRunnerShoe.svg`,
        category: "Deportivas",
        marca:"Nike",
        talles: [41,42,43,44],
        stock: 15,
        color: "Negro",
        oferta: false,
        infoText: `Lorem ipsum dolor sit amet 
        consectetur adipisicing elit. 
        Molestiae maxime voluptatem quam, `,
        id:3,
    },
    {
        nombre: "Coreracer",
        precio: 15999,
        src: `/assets/shoesImages/coreRacerAdidasShoes.svg`,
        category: "Deportivas",
        marca:"Adidas",
        talles: [40,41,42,43,44],
        stock: 20,
        color: "Negro",
        oferta: false,
        infoText: `Lorem ipsum dolor sit amet 
        consectetur adipisicing elit. 
        Molestiae maxime voluptatem quam, `,
        id:4,
    },
    {
        nombre: "DC MidWay",
        precio: 16999,
        src: `/assets/shoesImages/dcMidwayShoes.svg`,
        category: "Deportivas",
        marca:"DC",
        talles: [40,41,42],
        stock: 30,
        color: "Negro",
        oferta: true,
        infoText: `Lorem ipsum dolor sit amet 
        consectetur adipisicing elit. 
        Molestiae maxime voluptatem quam, `,
        id:5,
    },
    {
        nombre: "Vans",
        precio: 14999,
        src: `/assets/shoesImages/vansShoes.svg`,
        category: "Skateboarding",
        marca:"Vans",
        talles: [40,41,42],
        stock: 30,
        color: "Negro",
        oferta: true,
        infoText: `Lorem ipsum dolor sit amet 
        consectetur adipisicing elit. 
        Molestiae maxime voluptatem quam, `,
        id:6,
    },
    {
        nombre: "John Foos",
        precio: 16079,
        src: `/assets/shoesImages/johnFoosShoes.svg`,
        category: "Casuales",
        marca:"John Foos",
        talles: [40,41,42],
        stock: 40,
        color: "Gris",
        oferta: false,
        infoText: `Lorem ipsum dolor sit amet 
        consectetur adipisicing elit. 
        Molestiae maxime voluptatem quam, `
        ,
        id:7,
    },
    // END banner shoes
    {
        nombre: "Cony",
        precio: 23000,
        src: `/assets/shoesImages/conyShoes.svg`,
        category: "Casuales",
        marca:"Cony",
        talles: [40,41,42,43,44],
        stock: 10,
        color: "Blanco",
        oferta: false,
        infoText: `Lorem ipsum dolor sit amet 
        consectetur adipisicing elit. 
        Molestiae maxime voluptatem quam, `,
        id:8,
        
    },
    {
        nombre: "Cozy Sport Sa",
        precio: 20000,
        src: `/assets/shoesImages/cozySportSaShoes.svg`,
        category: "Deportivas",
        marca:"Cozy",
        talles: [40,41,42],
        stock: 10,
        color: "Negro",
        oferta: true,
        infoText: `Lorem ipsum dolor sit amet 
        consectetur adipisicing elit. 
        Molestiae maxime voluptatem quam, `,
        id:9,
    },
    {
        nombre: "Etnies Scout",
        precio: 19000,
        src: `/assets/shoesImages/etniesScoutShoes.svg`,
        category: "Skateboarding",
        marca:"Etnies",
        talles: [39,40,41,42,43],
        stock: 40,
        color: "Verde",
        oferta: false,
        infoText: `Lorem ipsum dolor sit amet 
        consectetur adipisicing elit. 
        Molestiae maxime voluptatem quam, `,
        id:10,
    },
    {
        nombre: "Etnies Eco Black Gum",
        precio: 22000,
        src: `/assets/shoesImages/etniesEcoBlackGum.svg`,
        category: "Skateboarding",
        marca:"Etnies",
        talles: [40,41],
        stock: 20,
        color: "Negro",
        oferta: true,
        infoText: `Lorem ipsum dolor sit amet 
        consectetur adipisicing elit. 
        Molestiae maxime voluptatem quam, `,
        id:11,
    },
    {
        nombre: "DC",
        precio: 18000,
        src: `/assets/shoesImages/dcShoes.svg`,
        category: "Skateboarding",
        talles: [39,40,41],
        marca:"DC",
        stock: 20,
        color: "Negro",
        oferta: true,
        infoText: `Lorem ipsum dolor sit amet 
        consectetur adipisicing elit. 
        Molestiae maxime voluptatem quam, `,
        id:12,
    },
    {
        nombre: "Topper Tenis X Forcer",
        precio: 14000,
        src: `/assets/shoesImages/topperTenisXForcerShoes.svg`,
        category: "Casuales",
        marca:"Topper",
        talles: [38,39,40,41,42],
        stock: 100,
        color: "Negro",
        oferta: false,
        infoText: `Lorem ipsum dolor sit amet 
        consectetur adipisicing elit. 
        Molestiae maxime voluptatem quam, `,
        id:13,
    },
    {
        nombre: "Adidas Grand Court",
        precio: 22000,
        src: `/assets/shoesImages/adidasGrandCourtShoes.svg`,
        category: "Casuales",
        marca:"Adidas",
        talles: [38,39,40,41,42],
        stock: 20,
        color: "Blanco",
        oferta: false,
        infoText: `Lorem ipsum dolor sit amet 
        consectetur adipisicing elit. 
        Molestiae maxime voluptatem quam, `,
        id:14,
    },
    {
        nombre: "Nike Air Max Bolt",
        precio: 15000,
        src: `/assets/shoesImages/nikeAirMaxBolt.svg`,
        category: "Casuales",
        marca:"Nike",
        talles: [40,41,42],
        stock: 10,
        color: "Negro",
        oferta: false,
        infoText: `Lorem ipsum dolor sit amet 
        consectetur adipisicing elit. 
        Molestiae maxime voluptatem quam, `,
        id:15,
    },
    {
        nombre: "Nike Quest 5",
        precio: 20000,
        src: `/assets/shoesImages/nikeQuestFive.svg`,
        category: "Deportivas",
        marca:"Nike",
        talles: [40,41,42,43,44],
        stock: 20,
        color: "Negro",
        oferta: false,
        infoText: `Lorem ipsum dolor sit amet 
        consectetur adipisicing elit. 
        Molestiae maxime voluptatem quam, `,
        id:16,
    },
    {
        nombre: "Nike Downshifter",
        precio: 25000,
        src: `/assets/shoesImages/nikeDownshifterShoes.svg`,
        category: "Deportivas",
        marca:"Nike",
        talles: [40,41,42],
        stock: 30,
        color: "Negro",
        oferta: false,
        infoText: `Lorem ipsum dolor sit amet 
        consectetur adipisicing elit. 
        Molestiae maxime voluptatem quam, `,
        id:17,
    },
    {
        nombre: "Nike Tanjun",
        precio: 18000,
        src: `/assets/shoesImages/nikeTanjunShoes.svg`,
        category: "Deportivas",
        marca:"Nike",
        talles: [40,41],
        stock: 40,
        color: "Negro",
        oferta: true,
        infoText: `Lorem ipsum dolor sit amet 
        consectetur adipisicing elit. 
        Molestiae maxime voluptatem quam, `,
        id:18,
    },
    {
        nombre: "Adidas Lite Racer",
        precio: 15000,
        src: `/assets/shoesImages/adidasLiteRacerShoes.svg`,
        category: "Deportivas",
        marca:"Adidas",
        talles: [40,41,42,43],
        stock: 10,
        color: "Negro",
        oferta: false,
        infoText: `Lorem ipsum dolor sit amet 
        consectetur adipisicing elit. 
        Molestiae maxime voluptatem quam, `,
        id:19,
    },
    {
        nombre: "Converse Chuck Taylor",
        precio: 18000,
        src: `/assets/shoesImages/converseChuckTaylorShoes.svg`,
        category: "Casuales",
        marca:"Converse",
        talles: [40,41,42,43],
        stock: 20,
        color: "Negro",
        oferta: false,
        infoText: `Lorem ipsum dolor sit amet 
        consectetur adipisicing elit. 
        Molestiae maxime voluptatem quam, `,
        id:20,
    },
    {
        nombre: "Adidas Lite Racer",
        precio: 15000,
        src: `/assets/shoesImages/adidasLiteRacerShoes.svg`,
        category: "Deportivas",
        marca:"Adidas",
        talles: [40,41,42,43],
        stock: 10,
        color: "Negro",
        oferta: false,
        infoText: `Lorem ipsum dolor sit amet 
        consectetur adipisicing elit. 
        Molestiae maxime voluptatem quam, `,
        id:21,
    },
    {
        nombre: "Vans Mn Atwood",
        precio: 25000,
        src: `/assets/shoesImages/vansMnAtwoodShoes.svg`,
        category: "Casuales",
        marca:"Vans",
        talles: [40,41,42,43],
        stock: 30,
        color: "Gris",
        oferta: true,
        infoText: `Lorem ipsum dolor sit amet 
        consectetur adipisicing elit. 
        Molestiae maxime voluptatem quam, `,
        id:22,
    },
    {
        nombre: "Converse clasicas",
        precio: 15000,
        src: `/assets/shoesImages/converseOriginales.svg`,
        category: "Casuales",
        marca:"Converse",
        talles: [40,41,42,43],
        stock: 10,
        color: "Negro",
        oferta: false,
        infoText: `Lorem ipsum dolor sit amet 
        consectetur adipisicing elit. 
        Molestiae maxime voluptatem quam, `,
        id:23,
    },
    {
        nombre: "Converse Net Star",
        precio: 12000,
        src: `/assets/shoesImages/converseNetStarShoes.svg`,
        category: "Casuales",
        marca:"Converse",
        talles: [42,43],
        stock: 40,
        color: "Negro",
        oferta: true,
        infoText: `Lorem ipsum dolor sit amet 
        consectetur adipisicing elit. 
        Molestiae maxime voluptatem quam, `,
        id:24,
    },
    {
        nombre: "Converse Clasicas Azules",
        precio: 13000,
        src: `/assets/shoesImages/converseOriginalesAzul.svg`,
        category: "Casuales",
        marca:"Converse",
        talles: [39,40,41,42,43],
        stock: 10,
        color: "Azul",
        oferta: false,
        infoText: `Lorem ipsum dolor sit amet 
        consectetur adipisicing elit. 
        Molestiae maxime voluptatem quam, `,
        id:25,
    },
    {
        nombre: "Converse Slip",
        precio: 15000,
        src: `/assets/shoesImages/converseSlipShoes.svg`,
        category: "Casuales",
        marca:"Converse",
        talles: [40,41,42,43],
        stock: 10,
        color: "Blanco",
        oferta: false,
        infoText: `Lorem ipsum dolor sit amet 
        consectetur adipisicing elit. 
        Molestiae maxime voluptatem quam, `,
        id:26,
    },
    {
        nombre: "Converse One Star",
        precio: 22000,
        src: `/assets/shoesImages/converseOneStarShoes.svg`,
        category: "Casuales",
        marca:"Converse",
        talles: [40,41,42,43],
        stock: 50,
        color: "Rojo",
        oferta: false,
        infoText: `Lorem ipsum dolor sit amet 
        consectetur adipisicing elit. 
        Molestiae maxime voluptatem quam, `,
        id:27,
    },
    {
        nombre: "Adidas Lite Racer",
        precio: 15000,
        src: `/assets/shoesImages/adidasLiteRacerShoes.svg`,
        category: "Deportivas",
        marca:"Adidas",
        talles: [40,41,42,43],
        stock: 10,
        color: "Negro",
        oferta: true,
        infoText: `Lorem ipsum dolor sit amet 
        consectetur adipisicing elit. 
        Molestiae maxime voluptatem quam, `,
        id:28,
    },
    {
        nombre: "John Foos clasicas",
        precio: 12000,
        src: `/assets/shoesImages/johnFoosRojasShoes.svg`,
        category: "Casuales",
        marca:"John Foos",
        talles: [40,41,42,43],
        stock: 14,
        color: "Rojo",
        oferta: false,
        infoText: `Lorem ipsum dolor sit amet 
        consectetur adipisicing elit. 
        Molestiae maxime voluptatem quam, `,
        id:29,
    },
    {
        nombre: "John Foos clasicas",
        precio: 12000,
        src: `/assets/shoesImages/johnFoosVioletasShoes.svg`,
        category: "Casuales",
        marca:"John Foos",
        talles: [40,41,42,43],
        stock: 30,
        color: "Violeta",
        oferta: false,
        infoText: `Lorem ipsum dolor sit amet 
        consectetur adipisicing elit. 
        Molestiae maxime voluptatem quam, `,
        id:30,
    },
    {
        nombre: "John Foos clasicas",
        precio: 12000,
        src: `/assets/shoesImages/johnFoosVerdesShoes.svg`,
        category: "Casuales",
        marca:"John Foos",
        talles: [40,41,42,43],
        stock: 30,
        color: "Verde",
        oferta: true,
        infoText: `Lorem ipsum dolor sit amet 
        consectetur adipisicing elit. 
        Molestiae maxime voluptatem quam, `,
        id:31,
    },
    {
        nombre: "Adidas Gazelle",
        precio: 20000,
        src: `/assets/shoesImages/adidasGazelleShoes.svg`,
        category: "Casuales",
        marca:"Adidas",
        talles: [40,41,42,43],
        stock: 20,
        color: "Rojo",
        oferta: false,
        infoText: `Lorem ipsum dolor sit amet 
        consectetur adipisicing elit. 
        Molestiae maxime voluptatem quam, `,
        id:32,
    },
    {
        nombre: "Adidas ShowTheWay",
        precio: 19000,
        src: `/assets/shoesImages/adidasShowTheWayShoesAzules.svg`,
        category: "Deportivas",
        marca:"Adidas",
        talles: [40,41,42,43],
        stock: 40,
        color: "Azul",
        oferta: false,
        infoText: `Lorem ipsum dolor sit amet 
        consectetur adipisicing elit. 
        Molestiae maxime voluptatem quam, `,
        id:33,
    },
    {
        nombre: "DC Crisis Cl",
        precio: 18000,
        src: `/assets/shoesImages/dcShoesAzules.svg`,
        category: "Skateboarding",
        marca:"DC",
        talles: [42,43],
        stock: 20,
        color: "Azul",
        oferta: false,
        infoText: `Lorem ipsum dolor sit amet 
        consectetur adipisicing elit. 
        Molestiae maxime voluptatem quam, `,
        id:34,
    },
    {
        nombre: "DC Tonik Tx",
        precio: 20000,
        src: `/assets/shoesImages/DcTonicTx.svg`,
        category: "Skateboarding",
        marca:"DC",
        talles: [40,41,42,43],
        stock: 10,
        color: "Marrón",
        oferta: false,
        infoText: `Lorem ipsum dolor sit amet 
        consectetur adipisicing elit. 
        Molestiae maxime voluptatem quam, `,
        id:35,
    },
    {
        nombre: "DC Trase Tx",
        precio: 20000,
        src: `/assets/shoesImages/dcTraseTx.svg`,
        category: "Skateboarding",
        marca:"DC",
        talles: [40,41,42,43],
        stock: 20,
        color: "Verde",
        oferta: true,
        infoText: `Lorem ipsum dolor sit amet 
        consectetur adipisicing elit. 
        Molestiae maxime voluptatem quam, `,
        id:36,
    },
    {
        nombre: "Airwalk Ntx Lyte",
        precio: 18000,
        src: `/assets/shoesImages/AirwalkNtxLyte.svg`,
        category: "Skateboarding",
        marca:"Airwalk",
        talles: [42,43],
        stock: 20,
        color: "Negro",
        oferta: false,
        infoText: `Lorem ipsum dolor sit amet 
        consectetur adipisicing elit. 
        Molestiae maxime voluptatem quam, `,
        id:37,
    },
    {
        nombre: "airwalk Ntl Stones",
        precio: 15000,
        src: `/assets/shoesImages/airwalkNtlStones.svg`,
        category: "Skateboarding",
        marca:"Airwalk",
        talles: [42,43],
        stock: 20,
        color: "Marrón",
        oferta: false,
        infoText: `Lorem ipsum dolor sit amet 
        consectetur adipisicing elit. 
        Molestiae maxime voluptatem quam, `,
        id:38,
    },
    {
        nombre: "Airwalk Yatch",
        precio: 17000,
        src: `/assets/shoesImages/airwalkYatch.svg`,
        category: "Skateboarding",
        marca:"Airwalk",
        talles: [42,43],
        stock: 10,
        color: "Negro",
        oferta: false,
        infoText: `Lorem ipsum dolor sit amet 
        consectetur adipisicing elit. 
        Molestiae maxime voluptatem quam, `,
        id:39,
    },
    // {
    //     nombre: "Adidas Lite Racer",
    //     precio: 15000,
    //     src: `/assets/shoesImages/adidasLiteRacerShoes.svg`,
    //     category: "Deportivas",
    //     marca:"Adidas",
    //     talles: [40,41,42,43],
    //     stock: 10,
    //     color: "Negro",
    // },
    // {
    //     nombre: "Adidas Lite Racer",
    //     precio: 15000,
    //     src: `/assets/shoesImages/adidasLiteRacerShoes.svg`,
    //     category: "Deportivas",
    //     marca:"Adidas",
    //     talles: [40,41,42,43],
    //     stock: 10,
    //     color: "Negro",
    // },
    // {
    //     nombre: "Adidas Lite Racer",
    //     precio: 15000,
    //     src: `/assets/shoesImages/adidasLiteRacerShoes.svg`,
    //     category: "Deportivas",
    //     marca:"Adidas",
    //     talles: [40,41,42,43],
    //     stock: 10,
    //     color: "Negro",
    // },
    // {
    //     nombre: "Adidas Lite Racer",
    //     precio: 15000,
    //     src: `/assets/shoesImages/adidasLiteRacerShoes.svg`,
    //     category: "Deportivas",
    //     marca:"Adidas",
    //     talles: [40,41,42,43],
    //     stock: 10,
    //     color: "Negro",
    // },
    // {
    //     nombre: "Adidas Lite Racer",
    //     precio: 15000,
    //     src: `/assets/shoesImages/adidasLiteRacerShoes.svg`,
    //     category: "Deportivas",
    //     marca:"Adidas",
    //     talles: [40,41,42,43],
    //     stock: 10,
    //     color: "Negro",
    // },
    // {
    //     nombre: "Adidas Lite Racer",
    //     precio: 15000,
    //     src: `/assets/shoesImages/adidasLiteRacerShoes.svg`,
    //     category: "Deportivas",
    //     marca:"Adidas",
    //     talles: [40,41,42,43],
    //     stock: 10,
    //     color: "Negro",
    // },
    // {
    //     nombre: "Adidas Lite Racer",
    //     precio: 15000,
    //     src: `/assets/shoesImages/adidasLiteRacerShoes.svg`,
    //     category: "Deportivas",
    //     marca:"Adidas",
    //     talles: [40,41,42,43],
    //     stock: 10,
    //     color: "Negro",
    // },
    // {
    //     nombre: "Adidas Lite Racer",
    //     precio: 15000,
    //     src: `/assets/shoesImages/adidasLiteRacerShoes.svg`,
    //     category: "Deportivas",
    //     marca:"Adidas",
    //     talles: [40,41,42,43],
    //     stock: 10,
    //     color: "Negro",
    // },
    // {
    //     nombre: "Adidas Lite Racer",
    //     precio: 15000,
    //     src: `/assets/shoesImages/adidasLiteRacerShoes.svg`,
    //     category: "Deportivas",
    //     marca:"Adidas",
    //     talles: [40,41,42,43],
    //     stock: 10,
    //     color: "Negro",
    // },
    // {
    //     nombre: "Adidas Lite Racer",
    //     precio: 15000,
    //     src: `/assets/shoesImages/adidasLiteRacerShoes.svg`,
    //     category: "Deportivas",
    //     marca:"Adidas",
    //     talles: [40,41,42,43],
    //     stock: 10,
    //     color: "Negro",
    // },
    // {
    //     nombre: "Adidas Lite Racer",
    //     precio: 15000,
    //     src: `/assets/shoesImages/adidasLiteRacerShoes.svg`,
    //     category: "Deportivas",
    //     marca:"Adidas",
    //     talles: [40,41,42,43],
    //     stock: 10,
    //     color: "Negro",
    // },
    // {
    //     nombre: "Adidas Lite Racer",
    //     precio: 15000,
    //     src: `/assets/shoesImages/adidasLiteRacerShoes.svg`,
    //     category: "Deportivas",
    //     marca:"Adidas",
    //     talles: [40,41,42,43],
    //     stock: 10,
    //     color: "Negro",
    // },
    // {
    //     nombre: "Adidas Lite Racer",
    //     precio: 15000,
    //     src: `/assets/shoesImages/adidasLiteRacerShoes.svg`,
    //     category: "Deportivas",
    //     marca:"Adidas",
    //     talles: [40,41,42,43],
    //     stock: 10,
    //     color: "Negro",
    // },
]