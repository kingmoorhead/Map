let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 39.89933469413448, lng: -80.18612559962311},
    zoom: 18,
    styles: 
[
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#b10103"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#f68600"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#8d0002"
            }
        ]
    },
    {
        "featureType": "poi.attraction",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "hue": "#ff0000"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.government",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.place_of_worship",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.school",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#ff0000"
            }
        ]
    },
    {
        "featureType": "poi.school",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "poi.school",
        "elementType": "labels",
        "stylers": [
            {
                "hue": "#ff0000"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#020202"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "transit.station.airport",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "off"
            },
            {
                "hue": "#ff0000"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    }
]
  });
const westhall = new google.maps.Marker({
    position: { lat: 39.90042982503932, lng: -80.18630740689083 },
    map,
    title: "West Hall",
    icon: "youthhostel.png",
  });
 const infowindow = new google.maps.InfoWindow({
    content: "This is West Hall. West hall is home to upperclass women. They have private bathrooms and the have AC.",
  });
 
  westhall.addListener("click", () => {
    infowindow.open({
      anchor: westhall,
      map,
      shouldFocus: false,
    });
  });

const WesthallCoords = [
    { lat: 39.90055455879919, lng: -80.18640635436637},
    { lat: 39.90055198669842, lng: -80.1862192702881 },
    { lat: 39.900233045452175,lng: -80.18622731691512 },
    { lat: 39.90023253102962, lng: -80.1864157420979 },
    { lat: 39.90055455879919, lng: -80.18640635436637}
  ];
  
  // Construct the polygon.
  const Westhallpolygon = new google.maps.Polygon({
    paths: WesthallCoords,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });


 Westhallpolygon.setMap(map);

const bulhhall = new google.maps.Marker({
    position: {lat: 39.89934789527352, lng: -80.18544579411318}, 
    map,
    title: "Buhl Hall",
    icon: "https://i.imgur.com/7EK5BLj.png",
  });

const BuhlhallCoords = [
  { lat: 39.89950878796206,  lng: -80.18562837849694},
  { lat: 39.899509816818046, lng: -80.18551304351189},
  { lat: 39.89954891333424,  lng: -80.18551304351189},
  { lat: 39.899546855623434, lng: -80.18537356864626},
  { lat: 39.89950055711358,  lng: -80.18537222754178},
  { lat: 39.899497470545185, lng: -80.18525689255674},
  { lat: 39.899184697556294, lng: -80.18526091587017},
  { lat: 39.899188812999625, lng: -80.18564178954172},
  { lat: 39.89950878796206,  lng: -80.18562837849694},  
];

// Construct the polygon.
  const Buhlhallpolygon = new google.maps.Polygon({
    paths: BuhlhallCoords,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });

 Buhlhallpolygon.setMap(map);
 
const PAC = new google.maps.Marker({
    position: {lat: 39.899935822573, lng: -80.18783288307253}, 
    map,
    title: "PAC",
    icon: "music_live.png",
  });

const GpacCoords = [
    { lat: 39.90003, lng: -80.18801},
    { lat: 39.90002, lng: -80.18771},
    { lat: 39.89980, lng: -80.18772},
    { lat: 39.89981, lng: -80.18802},
    { lat: 39.90003, lng: -80.18801} ];

    const GpacPolygon = new google.maps.Polygon({
        paths: GpacCoords,
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
    });
    GpacPolygon.setMap(map);

const Thayer = new google.maps.Marker({
    position: { lat: 39.89959028468613, lng: -80.18422601266899 },
    map,
    title: "Thayer",
    icon: "youthhostel.png",
  });

const ThayerCoords = [
    { lat: 39.89980, lng: -80.18429},
    { lat: 39.89979, lng: -80.18416},
    { lat: 39.89947, lng: -80.18416},
    { lat: 39.89947, lng: -80.18415},
    { lat: 39.89940, lng: -80.18415},
    { lat: 39.89939, lng: -80.18409},
    { lat: 39.89922, lng: -80.18409},
    { lat: 39.89922, lng: -80.18430},
    { lat: 39.89980, lng: -80.18429} ];

    const ThayerPolygon = new google.maps.Polygon({
        paths: ThayerCoords,
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
    });
        ThayerPolygon.setMap(map);

const Pollock = new google.maps.Marker({
    position: { lat: 39.89926928124459, lng: -80.18493948027596 },
    map,
    title: "Pollock",
    icon: "youthhostel.png",
  });

const PollockCoords = [
    { lat: 39.89932966350404, lng: -80.18516459443458 }, 
     { lat: 39.89932674703466, lng: -80.18474261889916 }, 
     { lat: 39.89918383988418, lng: -80.18474185858288 }, 
     { lat:39.89918675635962, lng: -80.18516611506715 }, 
    { lat: 39.89932966350404 , lng: -80.18516459443458}
  ];

const PollockPolygon = new google.maps.Polygon({
        paths: PollockCoords,
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
    });
        PollockPolygon.setMap(map);

const Stewart = new google.maps.Marker({
    position: {lat: 39.89798735396588, lng: -80.1866356100646}, 
    map,
    title: "Stewart",
    icon: "https://i.imgur.com/7EK5BLj.png",
  });

  const StewartCoords = [
    { lat: 39.89820313942542, lng: -80.18674222997413 },
    { lat: 39.898196966171525, lng: -80.1864800440406 },
    { lat: 39.8977313983387, lng: -80.1864981489516 },
    { lat: 39.89773808607581, lng: -80.18675966433287 },
    { lat: 39.89820313942542, lng: -80.18674222997413 },
  ];
  // Construct the polygon.
  const Stewartpolygon = new google.maps.Polygon({
    paths: StewartCoords,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });

  Stewartpolygon.setMap(map);

const South = new google.maps.Marker({
    position: { lat: 39.900298133115086, lng: -80.18591043995161 },
    map,
    title: "South",
    icon: "youthhostel.png",
  });

const SouthInfo = new google.maps.InfoWindow({
    content: "This is South Hall. South hall is middle upperclass dorm for women between West and East. It can be found on top of the hill. They have private bathrooms and the have AC.",
  });

  South.addListener("click", () => {
    SouthInfo.open({
      anchor: South,
      map,
      shouldFocus: false,
    });
  }); 

const SouthCoords = [
    { lat: 39.90036605487646, lng: -80.18613153937626 },
    { lat: 39.90036296834702, lng: -80.18572786691594 },
    { lat: 39.90022304553257, lng: -80.18572786691594 },
    { lat: 39.90022407437784, lng: -80.18613556268981 },
    { lat: 39.90036605487646, lng: -80.18613153937626 },
  ];
  // Construct the polygon.
  const Southpolygon = new google.maps.Polygon({
    paths: SouthCoords,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: .35,
  });

  Southpolygon.setMap(map);

const East= new google.maps.Marker({
    position: { lat: 39.90040924819283, lng: -80.1855242018486 },
    map,
    title: "East",
    icon: "youthhostel.png",
  });

const EastInfo = new google.maps.InfoWindow({
    content: "This is East Hall. East hall is upperclass dorm for women on the far right. It can be found on top of the hill right on the edge of the bank. It also has private bathrooms and the have AC.",
  });

  East.addListener("click", () => {
    EastInfo.open({
      anchor: East,
      map,
      shouldFocus: false,
    });
  }); 

const EastCoords = [
    { lat: 39.90053762015809, lng: -80.18560529398341 },
    { lat: 39.90053762015809, lng: -80.18542619172558 },
    { lat: 39.90022538413387, lng: -80.18542096905911 },
    { lat: 39.90022435528863, lng: -80.18560604147535 },
    { lat: 39.90053762015809, lng: -80.18560529398341 },
  ];

  //Construct the polygon.
  const Eastpolygon = new google.maps.Polygon({
    paths: EastCoords,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });
  Eastpolygon.setMap(map);

const Willison= new google.maps.Marker({
    position: {lat: 39.89739058005974, lng: -80.18630647265098}, 
    map,
    title: "Willison",
    icon: "youthhostel.png",
  });

const WillisonCoords = [
  { lat: 39.897538998708136, lng: -80.18620531789718 },
  { lat: 39.897541056479255, lng: -80.18638502589995 },
  { lat: 39.89711509654142, lng: -80.18639307252694 },
  { lat: 39.89711509654142, lng: -80.18621604673316 },
  { lat: 39.897538998708136, lng: -80.18620531789718 }
  ];

// Construct the polygon.
  const Willisonpolygon = new google.maps.Polygon({
    paths: WillisonCoords,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });

  Willisonpolygon.setMap(map);

const Lib= new google.maps.Marker({
    position: {lat: 39.899880787281326, lng:-80.18527764614515}, 
    map,
    title: "Lib",
    icon: "library.png",
  });

const EberlyCoords = [

{ lat: 39.90005305490059, lng: -80.18549297214429 },
{ lat: 39.900042602452224, lng: -80.18519237546121 },
{ lat: 39.899704856856225, lng: -80.18517193829295 },
{ lat: 39.89971138966885, lng: -80.18550233917973 },
{ lat: 39.90005305490059, lng: -80.18549297214429 },
];

const EberlyPolygon = new google.maps.Polygon({
    paths: EberlyCoords,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });

  EberlyPolygon.setMap(map);

const FieldHouse = new google.maps.Marker({
    position: {lat: 39.898116948810646, lng: -80.18758950281614}, 
    map,
    title: "FieldHouse",
    icon: "basketballfield.png",

    });

const FieldhouseCoords = [
    { lat: 39.89822129557472, lng: -80.18785727074538 },
    { lat: 39.89821720506465, lng: -80.18727432259585 },
    { lat: 39.89798540909532, lng: -80.18727609987678 },
    { lat: 39.89798677260331, lng: -80.18785904802633 },
    { lat: 39.89822129557472, lng: -80.18785727074538 },
    ];

const FieldhousePolygon = new google.maps.Polygon({
    paths: FieldhouseCoords,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });

  FieldhousePolygon.setMap(map);

const Hanna = new google.maps.Marker({
    position: {lat: 39.89949141305661, lng: -80.18705531414793}, 
    map,
    title: "Hanna",
    icon: "https://i.imgur.com/7EK5BLj.png",
  });

  const HannaCoords = [
    { lat: 39.899575902129406, lng: -80.18715171790629 },
    { lat: 39.89957230113685, lng: -80.18694183506034 },
    { lat: 39.89937424625455, lng: -80.18694787003034 },
    { lat: 39.89937784725752, lng: -80.18715708232408 },
    { lat: 39.899575902129406, lng: -80.18715171790629 }
  ];

const HannaPolygon = new google.maps.Polygon({
    paths: HannaCoords,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });

    HannaPolygon.setMap(map);

const CRED = new google.maps.Marker({
    position: {lat: 39.89812763084787, lng: -80.18623811925933}, 
    map,
    title: "CRED",
    icon: "https://i.imgur.com/7EK5BLj.png",
  });

const CREDCoords = [
    { lat: 39.89820789567786, lng: -80.1863954019053 },
    { lat: 39.898204677891705, lng:  -80.18609970550332 },
    { lat: 39.89802287272942, lng:  -80.18610389977852 },
    { lat: 39.89802930831865,  lng:  -80.18640588759332 },
    { lat: 39.89820789567786, lng: -80.1863954019053 }
  ];
  const CREDPolygon = new google.maps.Polygon({
    paths: CREDCoords,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });

  CREDPolygon.setMap(map);

const Caf = new google.maps.Marker({
    position: {lat: 39.90041802194958, lng: -80.18793441238984}, 
    map,
    title: "Caf",
    icon: "burger.png",
  });

const CafCoords = [
  {lat: 39.900203456792106, lng: -80.18817887398245},
  {lat: 39.900590052054156, lng: -80.18815381174599},
  {lat: 39.900671765515945, lng: -80.18796763513225},
  {lat: 39.900573572016434, lng: -80.18770358656951},
  {lat: 39.90018903667797, lng: -80.18772506848647},
  ];

const CafPolygon = new google.maps.Polygon({
    paths: CafCoords,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });

  CafPolygon.setMap(map);

const Nest = new google.maps.Marker({
    position: {lat: 39.89813419748737, lng: -80.18556765442732}, 
    map,
    title: "Nest",
    icon: "market.png",
});

const TheNest = [
    {lat: 39.8982031743014, lng: -80.18528256249408},
    {lat: 39.89803340961704, lng: -80.1852906091205},
    {lat: 39.89803958288567, lng: -80.18549915085532},
    {lat: 39.89820883311696, lng: -80.18549512754211}

  ];

    const TheNestPolygon = new google.maps.Polygon({
    paths: TheNest,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });

  TheNestPolygon.setMap(map);

const CSI = new google.maps.Marker({
    position: {lat: 39.900348124112384, lng: -80.18885112597961}, 
    map,
    title: "CSI",
    icon: "https://i.imgur.com/7EK5BLj.png",
  });

  const CjHouseCoords = [
    { lat: 39.900381516505455, lng: -80.18875312061515 },
    { lat: 39.90030229555674, lng: -80.18875312061515 },
    { lat: 39.900303838822865, lng: -80.1890005543931 },
    { lat: 39.90038357419121, lng: -80.18899988384086 },
    { lat: 39.900381516505455, lng: -80.18875312061515 },
    ];

    const CjHousePolygon = new google.maps.Polygon({
        paths: CjHouseCoords,
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
    });
    CjHousePolygon.setMap(map);

const Chap = new google.maps.Marker({
    position: {lat: 39.90073048356578, lng: -80.18717399648509}, 
    map,
    title: "Chap",
    icon: "chapel-2.png",
  });

const ChapelCoords = [
    { lat: 39.90094412190922, lng: -80.18730816171713 },
    { lat: 39.900937434485016, lng:-80.18702518866414  },
    { lat: 39.90050687827982 , lng:-80.18703994081373  },
    { lat: 39.90051099364375, lng: -80.18732090220995 },
    { lat: 39.90094412190922, lng: -80.18730816171713 }
    ];
const ChapelHousepolygon = new google.maps.Polygon({
        paths: ChapelCoords,
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
    });
    ChapelHousepolygon.setMap(map);

const Wiley = new google.maps.Marker({
    position: {lat: 39.89327039847301, lng: -80.18157457039973}, 
    map,
    title: "Wiley",
    icon: "soccerfield.png",
  });


const WILEYCoords = [
    { lat: 39.89374122290278, lng: -80.18141765250145 }, 
    { lat: 39.89344457523539, lng: -80.18097259447454 }, 
    { lat: 39.89269548080125, lng: -80.18182098635022 },  
    { lat: 39.89298252792902, lng: -80.18225352711973 },
    { lat: 39.89374122290278, lng: -80.18141765250145 }, 
  ];
  
  // Construct the polygon.
  const Wileypolygon = new google.maps.Polygon({
    paths: WILEYCoords,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });

    Wileypolygon.setMap(map);

const Stover = new google.maps.Marker({
    position: {lat: 39.89989633132516, lng: -80.186175962707}, 
    map,
    title: "Stover",
    icon: "burger.png",
  });

const StoverCoords = [
    {lat: 39.899772227541916, lng: -80.18636360069222},
    {lat: 39.89980309309625, lng: -80.18636695345333},
    {lat: 39.89980309309625, lng: -80.18640517492993},
    {lat: 39.89999548807153, lng: -80.18639712830327},
    {lat: 39.89999548807153, lng: -80.18635823627444},
    {lat: 39.90002841122172, lng: -80.18635756572223},
    {lat: 39.90002326698055, lng: -80.18596864543396},
    {lat: 39.89976502557723, lng: -80.18597803316504},
    {lat: 39.899772227541916, lng: -80.18636360069222}
];
 
 // Construct the polygon.
  const Stoverpolygon = new google.maps.Polygon({
    paths: StoverCoords,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });

   Stoverpolygon.setMap(map);

   const buhlInfo = new google.maps.InfoWindow({
    content: "Buhl is home to the good old Communication Department and many other departments.",
  });

  bulhhall.addListener("click", () => {
    buhlInfo.open({
      anchor: bulhhall,
      map,
      shouldFocus: false,
    });
  });

const PACinfo = new google.maps.InfoWindow({
    content: "This is the GPAC, this is where the peforming arts is done on campus. A lot of live performance are done here.",
  });
 
  PAC.addListener("click", () => {
    PACinfo.open({
      anchor: PAC,
      map,
      shouldFocus: false,
    });
});

const Wileyinfo = new google.maps.InfoWindow({
    content: "This the home of the Waynesburg University athletics teams for football, soccer, and lacrosse. This is also where you can hear the great Bobby Fox say Flack on the carry during football games.",
  });
 
  Wiley.addListener("click", () => {
    Wileyinfo.open({
      anchor: Wiley,
      map,
      shouldFocus: false,
    });
});
const Chapinfo =new google.maps.InfoWindow({
    content: "This is the Waynesburg University church. It holds services on Tuesday at 11 and on Sundays. It is also where upper room is held",
});
   Chap.addListener("click", () => {
    Chapinfo.open({
      anchor: Chap,
      map,
      shouldFocus: false,
    });
});
     const CSIInfo = new google.maps.InfoWindow({
    content: "This is the CSI house it is home to the CJ department. This house is where they do alot of mock crime scenes and other CJ related things.",
  });

  CSI.addListener("click", () => {
    CSIInfo.open({
      anchor: CSI,
      map,
      shouldFocus: false,
    });
  }); 

   const StoverInfo = new google.maps.InfoWindow({
    content: "Stover is home to the Beehive and the Market, which are two of the best food places on campus. Stover is also home to the Comm Theory class at 12 on MWF. ",
  });

  Stover.addListener("click", () => {
    StoverInfo.open({
      anchor: Stover,
      map,
      shouldFocus: false,
    });
  }); 

 const NestInfo = new google.maps.InfoWindow({
    content: "The Nest is a remodeled house that has now turned into a store that sells Waynesburg gear. The Nest also has games that you can play on the second floor.",
  });

  Nest.addListener("click", () => {
    NestInfo.open({
      anchor: Nest,
      map,
      shouldFocus: false,
    });
  }); 
  
  const CREDInfo = new google.maps.InfoWindow({
    content: "CRED is know as the Center for Research and Economic Development. It partners with local business, and nonprofits in the area."
});
  CRED.addListener("click", () => {
    CREDInfo.open({
      anchor: CRED,
      map,
      shouldFocus: false,
    });
  });

   const WillisonInfo = new google.maps.InfoWindow({
    content: "Willison Hall is the only male upperclass dorm it has six floors. The first floor does not have any dorm rooms but the remaining floors do."
});
  Willison.addListener("click", () => {
    WillisonInfo.open({
      anchor: Willison,
      map,
      shouldFocus: false,
    });
  });

 const StewartInfo = new google.maps.InfoWindow({
    content: "Stewart is home to the Science departments. The bottom floor of Stewart has a practice nurses station."
});
  Stewart.addListener("click", () => {
    StewartInfo.open({
      anchor: Stewart,
      map,
      shouldFocus: false,
    });
  });


const HannaInfo = new google.maps.InfoWindow({
    content: "Hanna Hall is where you can find most of the business department classes. This building is a two story building."
});
  Hanna.addListener("click", () => {
    HannaInfo.open({
      anchor: Hanna,
      map,
      shouldFocus: false,
    });
  });

const PollockInfo = new google.maps.InfoWindow({
    content: "Pollock is the final upperclass dorm for women. The parking lot for this dorm can be found up the hill from Thayer Hall"
});
  Pollock.addListener("click", () => {
    PollockInfo.open({
      anchor: Pollock,
      map,
      shouldFocus: false,
    });
  });

const CafInfo = new google.maps.InfoWindow({
    content: "The Cafe is the main eating place on campus. It is a buffet style eating area. There are many different station of food in the Cafe."
});
  Caf.addListener("click", () => {
    CafInfo.open({
      anchor: Caf,
      map,
      shouldFocus: false,
    });
  });

const ThayerInfo = new google.maps.InfoWindow({
    content: "Thayer is one of the two underclass male dorms. It is known for it communitty that it has and the weird layout of the hallways."
});
  Thayer.addListener("click", () => {
    ThayerInfo.open({
      anchor: Thayer,
      map,
      shouldFocus: false,
    });
  });

const FieldHouseInfo = new google.maps.InfoWindow({
    content: "The Rudy Marisa Fieldhouse is home to all your indoor Waynesburg sporting events. It is named after legendary head coach Rudy Marisa."
});
  FieldHouse.addListener("click", () => {
    FieldHouseInfo.open({
      anchor: FieldHouse,
      map,
      shouldFocus: false,
    });
  });
  const LibInfo = new google.maps.InfoWindow({
    content: "The Eberly Library has three floors. Each floor seems to have its own volume level. Each floor also have a different layout. That gives the library an intresting look."
});
  Lib.addListener("click", () => {
    LibInfo.open({
      anchor: Lib,
      map,
      shouldFocus: false,
 });
  });
}

