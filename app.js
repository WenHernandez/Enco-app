// ==========================================
// TUS IMÁGENES VAN AQUÍ (Base de datos local)
// ==========================================
const MY_DELIVERY_POINTS = [
    {
        "id": 1,
        "city": "ACAJUTLA",
        "locationName": "AGENCIA",
        "imageUrl": "imagenes/ACAJUTLA - AGENCIA.jpg"
    },
    {
        "id": 2,
        "city": "ACAJUTLA",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/ACAJUTLA.jpg"
    },
    {
        "id": 3,
        "city": "AGUA CALIENTE",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/AGUA CALIENTE.jpg"
    },
    {
        "id": 4,
        "city": "AGUILARES",
        "locationName": "AGENCIA",
        "imageUrl": "imagenes/AGUILARES - AGENCIA.jpg"
    },
    {
        "id": 5,
        "city": "AGUILARES",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/AGUILARES.jpg"
    },
    {
        "id": 6,
        "city": "AHUACHAPAN AGENCIA",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/AHUACHAPAN AGENCIA.jpg"
    },
    {
        "id": 7,
        "city": "AHUACHAPAN",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/AHUACHAPAN.jpg"
    },
    {
        "id": 8,
        "city": "ALEGRIA",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/ALEGRIA.jpg"
    },
    {
        "id": 9,
        "city": "ALTAVISTA",
        "locationName": "AGENCIA",
        "imageUrl": "imagenes/ALTAVISTA - AGENCIA.png"
    },
    {
        "id": 10,
        "city": "ANAMOROS",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/ANAMOROS.jpg"
    },
    {
        "id": 11,
        "city": "ANTIGUO CUSCATLAN",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/ANTIGUO CUSCATLAN.jpg"
    },
    {
        "id": 12,
        "city": "APANECA",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/APANECA.jpg"
    },
    {
        "id": 13,
        "city": "APASTEPEQUE",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/APASTEPEQUE.jpg"
    },
    {
        "id": 14,
        "city": "APOPA",
        "locationName": "AGENCIA",
        "imageUrl": "imagenes/APOPA - AGENCIA.jpg"
    },
    {
        "id": 15,
        "city": "APOPA",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/APOPA.jpg"
    },
    {
        "id": 16,
        "city": "ARAMBALA",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/ARAMBALA.jpg"
    },
    {
        "id": 17,
        "city": "ARMENIA",
        "locationName": "AGENCIA",
        "imageUrl": "imagenes/ARMENIA - AGENCIA.jpg"
    },
    {
        "id": 18,
        "city": "ARMENIA",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/ARMENIA.jpg"
    },
    {
        "id": 19,
        "city": "ATACO",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/ATACO.jpg"
    },
    {
        "id": 20,
        "city": "ATEOS",
        "locationName": "MELO",
        "imageUrl": "imagenes/ATEOS - MELO.jpg"
    },
    {
        "id": 21,
        "city": "ATEOS",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/ATEOS.jpg"
    },
    {
        "id": 22,
        "city": "ATIQUIZAYA",
        "locationName": "AGENCIA",
        "imageUrl": "imagenes/ATIQUIZAYA - AGENCIA.png"
    },
    {
        "id": 23,
        "city": "ATIQUIZAYA",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/ATIQUIZAYA.jpg"
    },
    {
        "id": 24,
        "city": "BERLIN",
        "locationName": "AGENCIA",
        "imageUrl": "imagenes/BERLIN - AGENCIA.jpg"
    },
    {
        "id": 25,
        "city": "BOLIVAR",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/BOLIVAR.jpg"
    },
    {
        "id": 26,
        "city": "CACAOPERA",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/CACAOPERA.jpg"
    },
    {
        "id": 27,
        "city": "CANDELARIA DE LA FRONTERA",
        "locationName": "AGENCIA",
        "imageUrl": "imagenes/CANDELARIA DE LA FRONTERA - AGENCIA.jpg"
    },
    {
        "id": 28,
        "city": "CANDELARIA DE LA FRONTERA",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/CANDELARIA DE LA FRONTERA.jpg"
    },
    {
        "id": 29,
        "city": "CARA SUCIA",
        "locationName": "AGENCIA",
        "imageUrl": "imagenes/CARA SUCIA - AGENCIA.jpg"
    },
    {
        "id": 30,
        "city": "CARA SUCIA",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/CARA SUCIA.jpg"
    },
    {
        "id": 31,
        "city": "CHALATENANGO",
        "locationName": "AGENCIA",
        "imageUrl": "imagenes/CHALATENANGO - AGENCIA.jpg"
    },
    {
        "id": 32,
        "city": "CHALATENANGO",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/CHALATENANGO.jpg"
    },
    {
        "id": 33,
        "city": "CHALCHUAPA",
        "locationName": "AGENCIA",
        "imageUrl": "imagenes/CHALCHUAPA - AGENCIA.jpg"
    },
    {
        "id": 34,
        "city": "CHALCHUAPA",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/CHALCHUAPA.jpg"
    },
    {
        "id": 35,
        "city": "CHAPELTIQUE",
        "locationName": "MELO",
        "imageUrl": "imagenes/CHAPELTIQUE - MELO.jpg"
    },
    {
        "id": 36,
        "city": "CHAPELTIQUE",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/CHAPELTIQUE.jpg"
    },
    {
        "id": 37,
        "city": "CHILANGA",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/CHILANGA.jpg"
    },
    {
        "id": 38,
        "city": "CHINAMECA",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/CHINAMECA.jpg"
    },
    {
        "id": 39,
        "city": "CHIRILAGUA",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/CHIRILAGUA.jpg"
    },
    {
        "id": 40,
        "city": "CIUDAD ARCE",
        "locationName": "AGENCIA",
        "imageUrl": "imagenes/CIUDAD ARCE - AGENCIA.jpg"
    },
    {
        "id": 41,
        "city": "CIUDAD BARRIOS",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/CIUDAD BARRIOS.jpg"
    },
    {
        "id": 42,
        "city": "CIUDAD DELGADO",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/CIUDAD DELGADO.jpg"
    },
    {
        "id": 43,
        "city": "CIUDAD EL TRIUNFO",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/CIUDAD EL TRIUNFO.jpg"
    },
    {
        "id": 44,
        "city": "CIUDAD MARSELLA",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/CIUDAD MARSELLA.jpg"
    },
    {
        "id": 45,
        "city": "CIUDAD REAL",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/CIUDAD REAL.jpg"
    },
    {
        "id": 46,
        "city": "CIUDAD VERSALLES",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/CIUDAD VERSALLES.jpg"
    },
    {
        "id": 47,
        "city": "COATEPEQUE",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/COATEPEQUE.jpg"
    },
    {
        "id": 48,
        "city": "COJUTEPEQUE",
        "locationName": "AGENCIA",
        "imageUrl": "imagenes/COJUTEPEQUE - AGENCIA.jpg"
    },
    {
        "id": 49,
        "city": "COJUTEPEQUE",
        "locationName": "MELO",
        "imageUrl": "imagenes/COJUTEPEQUE - MELO.jpg"
    },
    {
        "id": 50,
        "city": "COMACARAN",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/COMACARAN.jpg"
    },
    {
        "id": 51,
        "city": "COMOLAPA",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/COMOLAPA.jpg"
    },
    {
        "id": 52,
        "city": "CONCEPCION BATRES",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/CONCEPCION BATRES.jpg"
    },
    {
        "id": 53,
        "city": "CONCEPCION DE ORIENTE",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/CONCEPCION DE ORIENTE.jpg"
    },
    {
        "id": 54,
        "city": "CONCHAGUA",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/CONCHAGUA.jpg"
    },
    {
        "id": 55,
        "city": "CORINTO",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/CORINTO.jpg"
    },
    {
        "id": 56,
        "city": "COSTA DEL SOL",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/COSTA DEL SOL.jpg"
    },
    {
        "id": 57,
        "city": "CUIDAD ARCE",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/CUIDAD ARCE.jpg"
    },
    {
        "id": 58,
        "city": "CUIDAD BARRIOS",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/CUIDAD BARRIOS.jpg"
    },
    {
        "id": 59,
        "city": "CUIDAD REAL",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/CUIDAD REAL.jpg"
    },
    {
        "id": 60,
        "city": "DELICIAS DE CONCEPCIÓN",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/DELICIAS DE CONCEPCIÓN.jpg"
    },
    {
        "id": 61,
        "city": "DESVIO DE AMAYO",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/DESVIO DE AMAYO.jpg"
    },
    {
        "id": 62,
        "city": "DESVIO DE OPICO",
        "locationName": "MELO",
        "imageUrl": "imagenes/DESVIO DE OPICO - MELO.jpg"
    },
    {
        "id": 63,
        "city": "DESVIO DE OPICO",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/DESVIO DE OPICO.jpg"
    },
    {
        "id": 64,
        "city": "DOLORES",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/DOLORES.jpg"
    },
    {
        "id": 65,
        "city": "DULCE NOMBRE DE MARIA",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/DULCE NOMBRE DE MARIA.jpg"
    },
    {
        "id": 66,
        "city": "EL AMATILLO",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/EL AMATILLO.jpg"
    },
    {
        "id": 67,
        "city": "EL CARMEN",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/EL CARMEN.jpg"
    },
    {
        "id": 68,
        "city": "EL CONGO",
        "locationName": "MELO",
        "imageUrl": "imagenes/EL CONGO - MELO.jpg"
    },
    {
        "id": 69,
        "city": "EL CONGO",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/EL CONGO.jpg"
    },
    {
        "id": 70,
        "city": "EL DIVISADERO",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/EL DIVISADERO.jpg"
    },
    {
        "id": 71,
        "city": "EL ENCUENTRO SAN MARCOS",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/EL ENCUENTRO SAN MARCOS.jpg"
    },
    {
        "id": 72,
        "city": "EL PARAISO CHALATE",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/EL PARAISO CHALATE.jpg"
    },
    {
        "id": 73,
        "city": "EL PARAISO",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/EL PARAISO.jpg"
    },
    {
        "id": 74,
        "city": "EL REFUGIO",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/EL REFUGIO.jpg"
    },
    {
        "id": 75,
        "city": "EL ROSARIO",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/EL ROSARIO.jpg"
    },
    {
        "id": 76,
        "city": "EL SAUCE",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/EL SAUCE.jpg"
    },
    {
        "id": 77,
        "city": "EL TRANSITO",
        "locationName": "MELO",
        "imageUrl": "imagenes/EL TRANSITO - MELO.jpg"
    },
    {
        "id": 78,
        "city": "EL TRANSITO",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/EL TRANSITO.jpg"
    },
    {
        "id": 79,
        "city": "EREGUAYQUIN",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/EREGUAYQUIN.jpg"
    },
    {
        "id": 80,
        "city": "ESTANUELAS",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/ESTANUELAS.jpg"
    },
    {
        "id": 81,
        "city": "GUALOCOCTI",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/GUALOCOCTI.jpg"
    },
    {
        "id": 82,
        "city": "GUATAJIAGUA",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/GUATAJIAGUA.jpg"
    },
    {
        "id": 83,
        "city": "GUAYMANGO",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/GUAYMANGO.jpg"
    },
    {
        "id": 84,
        "city": "GUAZAPA",
        "locationName": "MELO",
        "imageUrl": "imagenes/GUAZAPA - MELO.jpg"
    },
    {
        "id": 85,
        "city": "GUAZAPA",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/GUAZAPA.jpg"
    },
    {
        "id": 86,
        "city": "HATO NUEVO SAN MIGUEL",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/HATO NUEVO SAN MIGUEL.jpg"
    },
    {
        "id": 87,
        "city": "ILOBASCO",
        "locationName": "MELO",
        "imageUrl": "imagenes/ILOBASCO - MELO.jpg"
    },
    {
        "id": 88,
        "city": "ILOBASCO",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/ILOBASCO.jpg"
    },
    {
        "id": 89,
        "city": "ILOPANGO",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/ILOPANGO.jpg"
    },
    {
        "id": 90,
        "city": "INTIPUCA",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/INTIPUCA.jpg"
    },
    {
        "id": 91,
        "city": "IZALCO",
        "locationName": "AGENCIA",
        "imageUrl": "imagenes/IZALCO - AGENCIA.jpg"
    },
    {
        "id": 92,
        "city": "IZALCO",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/IZALCO.jpg"
    },
    {
        "id": 93,
        "city": "JIQUILISCO",
        "locationName": "AGENCIA",
        "imageUrl": "imagenes/JIQUILISCO - AGENCIA.jpg"
    },
    {
        "id": 94,
        "city": "JIQUILISCO",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/JIQUILISCO.jpg"
    },
    {
        "id": 95,
        "city": "JOCOAITIQUE",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/JOCOAITIQUE.jpg"
    },
    {
        "id": 96,
        "city": "JOCORO",
        "locationName": "MELO",
        "imageUrl": "imagenes/JOCORO - MELO.jpg"
    },
    {
        "id": 97,
        "city": "JOCORO",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/JOCORO.jpg"
    },
    {
        "id": 98,
        "city": "JUAYUA",
        "locationName": "AGENCIA",
        "imageUrl": "imagenes/JUAYUA - AGENCIA.jpg"
    },
    {
        "id": 99,
        "city": "JUAYUA",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/JUAYUA.jpg"
    },
    {
        "id": 100,
        "city": "JUCUAPA",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/JUCUAPA.jpg"
    },
    {
        "id": 101,
        "city": "JUCUARAN",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/JUCUARAN.jpg"
    },
    {
        "id": 102,
        "city": "JUJUTLA",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/JUJUTLA.jpg"
    },
    {
        "id": 103,
        "city": "LA GRAN VIA",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/LA GRAN VIA.jpg"
    },
    {
        "id": 104,
        "city": "LA PALMA",
        "locationName": "MELO",
        "imageUrl": "imagenes/LA PALMA - MELO.jpg"
    },
    {
        "id": 105,
        "city": "LA PALMA",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/LA PALMA.jpg"
    },
    {
        "id": 106,
        "city": "LA REINA",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/LA REINA.jpg"
    },
    {
        "id": 107,
        "city": "LA UNION",
        "locationName": "AGENCIA",
        "imageUrl": "imagenes/LA UNION - AGENCIA.jpg"
    },
    {
        "id": 108,
        "city": "LA UNION",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/LA UNION.jpg"
    },
    {
        "id": 109,
        "city": "LISLIQUE",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/LISLIQUE.jpg"
    },
    {
        "id": 110,
        "city": "LOLOTIQUE",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/LOLOTIQUE.jpg"
    },
    {
        "id": 111,
        "city": "LOLOTIQUILLO",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/LOLOTIQUILLO.jpg"
    },
    {
        "id": 112,
        "city": "LOS NARANJOS",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/LOS NARANJOS.jpg"
    },
    {
        "id": 113,
        "city": "LOURDES",
        "locationName": "AGENCIA",
        "imageUrl": "imagenes/LOURDES - AGENCIA.jpg"
    },
    {
        "id": 114,
        "city": "MARSELLA",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/MARSELLA.jpg"
    },
    {
        "id": 115,
        "city": "MERCEDES UMAÑA",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/MERCEDES UMAÑA.jpg"
    },
    {
        "id": 116,
        "city": "MERLIOT",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/MERLIOT.jpg"
    },
    {
        "id": 117,
        "city": "METALIO",
        "locationName": "AGENCIA",
        "imageUrl": "imagenes/METALIO - AGENCIA.jpg"
    },
    {
        "id": 118,
        "city": "METALIO",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/METALIO.jpg"
    },
    {
        "id": 119,
        "city": "METAPAN",
        "locationName": "AGENCIA",
        "imageUrl": "imagenes/METAPAN - AGENCIA.jpg"
    },
    {
        "id": 120,
        "city": "METAPAN",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/METAPAN.jpg"
    },
    {
        "id": 121,
        "city": "METROCENTRO LOURDES",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/METROCENTRO LOURDES.jpg"
    },
    {
        "id": 122,
        "city": "METROCENTRO SAN MIGUEL",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/METROCENTRO SAN MIGUEL.jpg"
    },
    {
        "id": 123,
        "city": "METROCENTRO SONSONATE",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/METROCENTRO SONSONATE.jpg"
    },
    {
        "id": 124,
        "city": "MONCAGUA",
        "locationName": "MELO",
        "imageUrl": "imagenes/MONCAGUA - MELO.jpg"
    },
    {
        "id": 125,
        "city": "MONCAGUA",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/MONCAGUA.jpg"
    },
    {
        "id": 126,
        "city": "MONTELIMAR",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/MONTELIMAR.jpg"
    },
    {
        "id": 127,
        "city": "NAHUIZALCO",
        "locationName": "AGENCIA",
        "imageUrl": "imagenes/NAHUIZALCO - AGENCIA.jpg"
    },
    {
        "id": 128,
        "city": "NAHUIZALCO",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/NAHUIZALCO.jpg"
    },
    {
        "id": 129,
        "city": "NEJAPA",
        "locationName": "AGENCIA",
        "imageUrl": "imagenes/NEJAPA - AGENCIA.png"
    },
    {
        "id": 130,
        "city": "NUEVA CONCEPCION",
        "locationName": "MELO",
        "imageUrl": "imagenes/NUEVA CONCEPCION - MELO.jpg"
    },
    {
        "id": 131,
        "city": "NUEVA CONCEPCION",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/NUEVA CONCEPCION.jpg"
    },
    {
        "id": 132,
        "city": "NUEVA ESPARTA",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/NUEVA ESPARTA.jpg"
    },
    {
        "id": 133,
        "city": "NUEVA GRANADA",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/NUEVA GRANADA.jpg"
    },
    {
        "id": 134,
        "city": "NUEVA GUADALUPE",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/NUEVA GUADALUPE.jpg"
    },
    {
        "id": 135,
        "city": "NUEVO EDEN",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/NUEVO EDEN.jpg"
    },
    {
        "id": 136,
        "city": "NUEVO LOURDES",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/NUEVO LOURDES.jpg"
    },
    {
        "id": 137,
        "city": "OLOCUILTA",
        "locationName": "MELO",
        "imageUrl": "imagenes/OLOCUILTA - MELO.jpg"
    },
    {
        "id": 138,
        "city": "OLOCUILTA",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/OLOCUILTA.jpg"
    },
    {
        "id": 139,
        "city": "OPICO CENTRO",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/OPICO CENTRO.jpg"
    },
    {
        "id": 140,
        "city": "OSICALA",
        "locationName": "MELO",
        "imageUrl": "imagenes/OSICALA - MELO.jpg"
    },
    {
        "id": 141,
        "city": "OSICALA",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/OSICALA.jpg"
    },
    {
        "id": 142,
        "city": "OZATLAN",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/OZATLAN.jpg"
    },
    {
        "id": 143,
        "city": "PARAJE GALAN",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/PARAJE GALAN.jpg"
    },
    {
        "id": 144,
        "city": "PASAQUINA",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/PASAQUINA.jpg"
    },
    {
        "id": 145,
        "city": "PASEO VENECIA",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/PASEO VENECIA.jpg"
    },
    {
        "id": 146,
        "city": "PERQUIN",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/PERQUIN.jpg"
    },
    {
        "id": 147,
        "city": "PLANES DE RENDEROS",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/PLANES DE RENDEROS.jpg"
    },
    {
        "id": 148,
        "city": "PLAYA EL CUCO",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/PLAYA EL CUCO.jpg"
    },
    {
        "id": 149,
        "city": "PLAYA EL ESPINO",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/PLAYA EL ESPINO.jpg"
    },
    {
        "id": 150,
        "city": "PLAZA DON YON",
        "locationName": "MELO",
        "imageUrl": "imagenes/PLAZA DON YON - MELO.jpg"
    },
    {
        "id": 151,
        "city": "PLAZA DON YON",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/PLAZA DON YON.jpg"
    },
    {
        "id": 152,
        "city": "PLAZA SANTO TOMAS",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/PLAZA SANTO TOMAS.jpg"
    },
    {
        "id": 153,
        "city": "POLOROS",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/POLOROS.jpg"
    },
    {
        "id": 154,
        "city": "PUERTO DE LA LIBERTAD",
        "locationName": "MELO",
        "imageUrl": "imagenes/PUERTO DE LA LIBERTAD - MELO.jpg"
    },
    {
        "id": 155,
        "city": "PUERTO DE LA LIBERTAD",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/PUERTO DE LA LIBERTAD.jpg"
    },
    {
        "id": 156,
        "city": "PUERTO EL TRIUNFO",
        "locationName": "MELO",
        "imageUrl": "imagenes/PUERTO EL TRIUNFO - MELO.jpg"
    },
    {
        "id": 157,
        "city": "PUERTO EL TRIUNFO",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/PUERTO EL TRIUNFO.jpg"
    },
    {
        "id": 158,
        "city": "PUERTO PARADA",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/PUERTO PARADA.jpg"
    },
    {
        "id": 159,
        "city": "QUELEPA",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/QUELEPA.jpg"
    },
    {
        "id": 160,
        "city": "QUEZALTEPEQUE",
        "locationName": "AGENCIA",
        "imageUrl": "imagenes/QUEZALTEPEQUE - AGENCIA.jpg"
    },
    {
        "id": 161,
        "city": "QUEZALTEPEQUE",
        "locationName": "AGENCIA",
        "imageUrl": "imagenes/QUEZALTEPEQUE - AGENCIA.png"
    },
    {
        "id": 162,
        "city": "QUEZALTEPEQUE",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/QUEZALTEPEQUE.jpg"
    },
    {
        "id": 163,
        "city": "SALCOATITAN",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/SALCOATITAN.jpg"
    },
    {
        "id": 164,
        "city": "SALVADOR DEL MUNDO",
        "locationName": "AGENCIA",
        "imageUrl": "imagenes/SALVADOR DEL MUNDO - AGENCIA.jpg"
    },
    {
        "id": 165,
        "city": "SAN ALEJO",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/SAN ALEJO.jpg"
    },
    {
        "id": 166,
        "city": "SAN ANTONIO PAJONAL",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/SAN ANTONIO PAJONAL.jpg"
    },
    {
        "id": 167,
        "city": "SAN BARTOLO",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/SAN BARTOLO.jpg"
    },
    {
        "id": 168,
        "city": "SAN BARTOLOMÉ PERULAPIA",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/SAN BARTOLOMÉ PERULAPIA.jpg"
    },
    {
        "id": 169,
        "city": "SAN BUENAVENTURA",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/SAN BUENAVENTURA.jpg"
    },
    {
        "id": 170,
        "city": "SAN CARLOS",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/SAN CARLOS.jpg"
    },
    {
        "id": 171,
        "city": "SAN ESTEBA CATARINA",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/SAN ESTEBA CATARINA.jpg"
    },
    {
        "id": 172,
        "city": "SAN FRANCISCO GOTERA",
        "locationName": "AGENCIA",
        "imageUrl": "imagenes/SAN FRANCISCO GOTERA - AGENCIA.jpg"
    },
    {
        "id": 173,
        "city": "SAN FRANCISCO GOTERA",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/SAN FRANCISCO GOTERA.jpg"
    },
    {
        "id": 174,
        "city": "SAN GERARDO",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/SAN GERARDO.jpg"
    },
    {
        "id": 175,
        "city": "SAN IDELFONSO",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/SAN IDELFONSO.jpg"
    },
    {
        "id": 176,
        "city": "SAN IGNACIO",
        "locationName": "MELO",
        "imageUrl": "imagenes/SAN IGNACIO - MELO.jpg"
    },
    {
        "id": 177,
        "city": "SAN IGNACIO",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/SAN IGNACIO.jpg"
    },
    {
        "id": 178,
        "city": "SAN ISIDRO",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/SAN ISIDRO.jpg"
    },
    {
        "id": 179,
        "city": "SAN JACINTO",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/SAN JACINTO.jpg"
    },
    {
        "id": 180,
        "city": "SAN JORGE",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/SAN JORGE.png"
    },
    {
        "id": 181,
        "city": "SAN JOSE VILLANUEVA",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/SAN JOSE VILLANUEVA.jpg"
    },
    {
        "id": 182,
        "city": "SAN JUAN NONUALCO",
        "locationName": "MELO",
        "imageUrl": "imagenes/SAN JUAN NONUALCO - MELO.jpg"
    },
    {
        "id": 183,
        "city": "SAN JUAN NONUALCO",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/SAN JUAN NONUALCO.jpg"
    },
    {
        "id": 184,
        "city": "SAN JUAN OPICO",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/SAN JUAN OPICO.jpg"
    },
    {
        "id": 185,
        "city": "SAN JUAN TALPA",
        "locationName": "MELO",
        "imageUrl": "imagenes/SAN JUAN TALPA - MELO.jpg"
    },
    {
        "id": 186,
        "city": "SAN JUAN TALPA",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/SAN JUAN TALPA.jpg"
    },
    {
        "id": 187,
        "city": "SAN JULIAN",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/SAN JULIAN.jpg"
    },
    {
        "id": 188,
        "city": "SAN LUIS DE LA REINA",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/SAN LUIS DE LA REINA.jpg"
    },
    {
        "id": 189,
        "city": "SAN LUIS LA HERRADURA",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/SAN LUIS LA HERRADURA.jpg"
    },
    {
        "id": 190,
        "city": "SAN LUIS TALPA",
        "locationName": "MELO",
        "imageUrl": "imagenes/SAN LUIS TALPA - MELO.jpg"
    },
    {
        "id": 191,
        "city": "SAN LUIS TALPA",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/SAN LUIS TALPA.jpg"
    },
    {
        "id": 192,
        "city": "SAN MARCOS LEMPA",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/SAN MARCOS LEMPA.jpg"
    },
    {
        "id": 193,
        "city": "SAN MARCOS",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/SAN MARCOS.jpg"
    },
    {
        "id": 194,
        "city": "SAN MARTIN",
        "locationName": "AGENCIA",
        "imageUrl": "imagenes/SAN MARTIN - AGENCIA.png"
    },
    {
        "id": 195,
        "city": "SAN MATIAS",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/SAN MATIAS.jpg"
    },
    {
        "id": 196,
        "city": "SAN MIGUEL",
        "locationName": "AGENCIA MELO",
        "imageUrl": "imagenes/SAN MIGUEL - AGENCIA MELO.jpg"
    },
    {
        "id": 197,
        "city": "SAN MIGUEL",
        "locationName": "AGENCIA",
        "imageUrl": "imagenes/SAN MIGUEL - AGENCIA.jpg"
    },
    {
        "id": 198,
        "city": "SAN MIGUEL",
        "locationName": "BODEGA AGENCIA",
        "imageUrl": "imagenes/SAN MIGUEL - BODEGA AGENCIA.jpg"
    },
    {
        "id": 199,
        "city": "SAN PEDRO PERULAPAN",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/SAN PEDRO PERULAPAN.jpg"
    },
    {
        "id": 200,
        "city": "SAN RAFAEL CEDROS",
        "locationName": "MELO",
        "imageUrl": "imagenes/SAN RAFAEL CEDROS - MELO.jpg"
    },
    {
        "id": 201,
        "city": "SAN RAFAEL CEDROS",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/SAN RAFAEL CEDROS.jpg"
    },
    {
        "id": 202,
        "city": "SAN RAFAEL OBRAJUELO",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/SAN RAFAEL OBRAJUELO.jpg"
    },
    {
        "id": 203,
        "city": "SAN RAFAEL OBRAJUELOS",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/SAN RAFAEL OBRAJUELOS.jpg"
    },
    {
        "id": 204,
        "city": "SAN RAFAEL ORIENTE",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/SAN RAFAEL ORIENTE.jpg"
    },
    {
        "id": 205,
        "city": "SAN SALVADOR CENTRO",
        "locationName": "AGENCIA",
        "imageUrl": "imagenes/SAN SALVADOR CENTRO - AGENCIA.png"
    },
    {
        "id": 206,
        "city": "SAN SALVADOR METROGALERIAS",
        "locationName": "AGENCIA",
        "imageUrl": "imagenes/SAN SALVADOR METROGALERIAS - AGENCIA.jpg"
    },
    {
        "id": 207,
        "city": "SAN SALVADOR PLAZA JEREZ",
        "locationName": "AGENCIA",
        "imageUrl": "imagenes/SAN SALVADOR PLAZA JEREZ - AGENCIA.jpg"
    },
    {
        "id": 208,
        "city": "SAN SEBASTIAN",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/SAN SEBASTIAN.jpg"
    },
    {
        "id": 209,
        "city": "SAN SIMON",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/SAN SIMON.jpg"
    },
    {
        "id": 210,
        "city": "SAN VICENTE",
        "locationName": "AGENCIA",
        "imageUrl": "imagenes/SAN VICENTE - AGENCIA.jpg"
    },
    {
        "id": 211,
        "city": "SAN VICENTE",
        "locationName": "MELO",
        "imageUrl": "imagenes/SAN VICENTE - MELO.jpg"
    },
    {
        "id": 212,
        "city": "SANTA ANA",
        "locationName": "AGENCIA",
        "imageUrl": "imagenes/SANTA ANA - AGENCIA.jpg"
    },
    {
        "id": 213,
        "city": "SANTA ANA 1 Y 2",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/SANTA ANA 1 Y 2.jpg"
    },
    {
        "id": 214,
        "city": "SANTA ANA CENTRO",
        "locationName": "AGENCIA",
        "imageUrl": "imagenes/SANTA ANA CENTRO - AGENCIA.jpg"
    },
    {
        "id": 215,
        "city": "SANTA ANA PLAZA 33",
        "locationName": "AGENCIA",
        "imageUrl": "imagenes/SANTA ANA PLAZA 33 - AGENCIA.jpg"
    },
    {
        "id": 216,
        "city": "SANTA ELENA",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/SANTA ELENA.jpg"
    },
    {
        "id": 217,
        "city": "SANTA MARIA",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/SANTA MARIA.jpg"
    },
    {
        "id": 218,
        "city": "SANTA ROSA DE LIMA",
        "locationName": "AGENCIA",
        "imageUrl": "imagenes/SANTA ROSA DE LIMA - AGENCIA.jpg"
    },
    {
        "id": 219,
        "city": "SANTA ROSA DE LIMA",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/SANTA ROSA DE LIMA.jpg"
    },
    {
        "id": 220,
        "city": "SANTA TECLA AGENCIA",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/SANTA TECLA AGENCIA.jpg"
    },
    {
        "id": 221,
        "city": "SANTIAGO DE LA FRONTERA",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/SANTIAGO DE LA FRONTERA.jpg"
    },
    {
        "id": 222,
        "city": "SANTIAGO DE MARIA",
        "locationName": "AGENCIA",
        "imageUrl": "imagenes/SANTIAGO DE MARIA - AGENCIA.jpg"
    },
    {
        "id": 223,
        "city": "SANTIAGO NONUALCO",
        "locationName": "MELO",
        "imageUrl": "imagenes/SANTIAGO NONUALCO - MELO.jpg"
    },
    {
        "id": 224,
        "city": "SANTIAGO NONUALCO",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/SANTIAGO NONUALCO.jpg"
    },
    {
        "id": 225,
        "city": "SANTIAGO TEXACUANGO",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/SANTIAGO TEXACUANGO.jpg"
    },
    {
        "id": 226,
        "city": "SANTO DOMINGO",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/SANTO DOMINGO.jpg"
    },
    {
        "id": 227,
        "city": "SANTO TOMAS",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/SANTO TOMAS.jpg"
    },
    {
        "id": 228,
        "city": "SENSEMBRA",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/SENSEMBRA.jpg"
    },
    {
        "id": 229,
        "city": "SENSUNTEPEQUE",
        "locationName": "MELO",
        "imageUrl": "imagenes/SENSUNTEPEQUE - MELO.jpg"
    },
    {
        "id": 230,
        "city": "SENSUNTEPEQUE",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/SENSUNTEPEQUE.jpg"
    },
    {
        "id": 231,
        "city": "SESORI",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/SESORI.jpg"
    },
    {
        "id": 232,
        "city": "SOCIEDAD",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/SOCIEDAD.jpg"
    },
    {
        "id": 233,
        "city": "SONSONATE",
        "locationName": "AGENCIA",
        "imageUrl": "imagenes/SONSONATE - AGENCIA.jpg"
    },
    {
        "id": 234,
        "city": "SONZACATE",
        "locationName": "AGENCIA",
        "imageUrl": "imagenes/SONZACATE - AGENCIA.jpg"
    },
    {
        "id": 235,
        "city": "SONZACATE",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/SONZACATE.jpg"
    },
    {
        "id": 236,
        "city": "SOYAPANGO",
        "locationName": "AGENCIA",
        "imageUrl": "imagenes/SOYAPANGO - AGENCIA.jpg"
    },
    {
        "id": 237,
        "city": "SOYAPANGO PLAZA MUNDO",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/SOYAPANGO PLAZA MUNDO.jpg"
    },
    {
        "id": 238,
        "city": "SOYAPANGO UNICENTRO",
        "locationName": "AGENCIA",
        "imageUrl": "imagenes/SOYAPANGO UNICENTRO - AGENCIA.jpg"
    },
    {
        "id": 239,
        "city": "SUCHITOTO",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/SUCHITOTO.jpg"
    },
    {
        "id": 240,
        "city": "TACACHICO",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/TACACHICO.jpg"
    },
    {
        "id": 241,
        "city": "TECAPAN",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/TECAPAN.jpg"
    },
    {
        "id": 242,
        "city": "TECOLUCA",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/TECOLUCA.jpg"
    },
    {
        "id": 243,
        "city": "TEJUTEPEQUE",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/TEJUTEPEQUE.jpg"
    },
    {
        "id": 244,
        "city": "TEJUTLA",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/TEJUTLA.jpg"
    },
    {
        "id": 245,
        "city": "TERMINAL DE SONSONATE",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/TERMINAL DE SONSONATE.jpg"
    },
    {
        "id": 246,
        "city": "TEXISTEPEQUE",
        "locationName": "MELO",
        "imageUrl": "imagenes/TEXISTEPEQUE - MELO.jpg"
    },
    {
        "id": 247,
        "city": "TEXISTEPEQUE",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/TEXISTEPEQUE.jpg"
    },
    {
        "id": 248,
        "city": "TIERRA BLANCA",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/TIERRA BLANCA.jpg"
    },
    {
        "id": 249,
        "city": "TONACATEPEQUE",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/TONACATEPEQUE.jpg"
    },
    {
        "id": 250,
        "city": "TURIN",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/TURIN.jpg"
    },
    {
        "id": 251,
        "city": "ULUAZAPA",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/ULUAZAPA.jpg"
    },
    {
        "id": 252,
        "city": "USULUTAN",
        "locationName": "AGENCIA",
        "imageUrl": "imagenes/USULUTAN - AGENCIA.jpg"
    },
    {
        "id": 253,
        "city": "USULUTAN",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/USULUTAN.jpg"
    },
    {
        "id": 254,
        "city": "VERSALLES",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/VERSALLES.jpg"
    },
    {
        "id": 255,
        "city": "YAMABAL",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/YAMABAL.jpg"
    },
    {
        "id": 256,
        "city": "YOLOAIQUIN",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/YOLOAIQUIN.jpg"
    },
    {
        "id": 257,
        "city": "YUCUAIQUIN",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/YUCUAIQUIN.jpg"
    },
    {
        "id": 258,
        "city": "ZACATECOLUCA",
        "locationName": "AGENCIA",
        "imageUrl": "imagenes/ZACATECOLUCA - AGENCIA.jpg"
    },
    {
        "id": 259,
        "city": "ZACATECOLUCA",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/ZACATECOLUCA.jpg"
    },
    {
        "id": 260,
        "city": "ZARAGOZA",
        "locationName": "MELO",
        "imageUrl": "imagenes/ZARAGOZA - MELO.jpg"
    },
    {
        "id": 261,
        "city": "ZARAGOZA",
        "locationName": "Punto de entrega",
        "imageUrl": "imagenes/ZARAGOZA.jpg"
    }
];

        // Elementos del DOM (Interfaz)
        const searchInput = document.getElementById('searchInput');
        const clearBtn = document.getElementById('clearBtn');
        const galleryGrid = document.getElementById('galleryGrid');
        const resultsCount = document.getElementById('resultsCount');
        const emptyState = document.getElementById('emptyState');
        const emptyStateMessage = document.getElementById('emptyStateMessage');

        // Función principal para renderizar las tarjetas
        function renderGallery(points) {
            // Actualizar texto del contador
            resultsCount.textContent = `Mostrando ${points.length} puntos de entrega`;

            // Manejar si no hay resultados
            if (points.length === 0) {
                galleryGrid.classList.add('hidden');
                emptyState.classList.remove('hidden');
                emptyStateMessage.textContent = `No hay ciudades o lugares que coincidan con "${searchInput.value}".`;
                return;
            }

            // Mostrar el grid y ocultar el estado vacío
            galleryGrid.classList.remove('hidden');
            emptyState.classList.add('hidden');

            // Generar el HTML de cada tarjeta
            const cardsHTML = points.map(point => `
                <div class="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-transky-y-1 
                border border-sky-100 transition-all duration-300 flex flex-col h-[320px]">
                    
                    <!-- Contenedor de la Imagen -->
                    <div class="w-full h-48 overflow-hidden bg-sky-200 relative">
                        <img 
                            src="${point.imageUrl}" 
                            alt="Punto de entrega en ${point.city}" 
                            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                            onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1555861496-faa3e3e94ec9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';"
                        />
                        
                        <!-- Etiqueta de Ciudad -->
                        <div class="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-sky-800 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1">
                            <i data-lucide="map-pin" class="w-3 h-3"></i>
                            ${point.city}
                        </div>
                    </div>
                    
                    <!-- Información -->
                    <div class="p-4 flex flex-col flex-grow justify-between bg-white ">
                        <div>
                            <h4 class="text-sky-800 font-bold text-lg mb-1 leading-tight">
                                ${point.locationName}
                            </h4>
                        </div>
                        
                        <div class="mt-4 pt-3 border-t border-sky-100">
                            <a href="${point.imageUrl}" target="_blank" rel="noreferrer" class="text-sky-600 hover:text-sky-700 text-sm font-semibold flex items-center gap-1 transition-colors">
                                <i data-lucide="download" class="w-4 h-4"></i>
                                Ver foto completa
                            </a>
                        </div>
                    </div>
                </div>
            `).join(''); // Unir todo el HTML generado en un solo string

            // Insertar el HTML en el contenedor
            galleryGrid.innerHTML = cardsHTML;

            // Re-renderizar los iconos de Lucide en las nuevas tarjetas
            lucide.createIcons();
        }

        // Evento: Escribir en el buscador
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            
            // Mostrar u ocultar el botón de la "X"
            if (query.length > 0) {
                clearBtn.classList.remove('hidden');
            } else {
                clearBtn.classList.add('hidden');
            }

            // Filtrar los datos
            const filteredPoints = MY_DELIVERY_POINTS.filter(point => 
                point.city.toLowerCase().includes(query) ||
                point.locationName.toLowerCase().includes(query)
            );
            
            // Renderizar los resultados filtrados
            renderGallery(filteredPoints);
        });

        // Evento: Clic en el botón "X" para limpiar búsqueda
        clearBtn.addEventListener('click', () => {
            searchInput.value = '';
            clearBtn.classList.add('hidden');
            renderGallery(MY_DELIVERY_POINTS); // Mostrar todos los puntos de nuevo
            searchInput.focus(); // Devolver el foco al input
        });

        // Inicialización: Renderizar por primera vez e inicializar iconos fijos
        lucide.createIcons();
        renderGallery(MY_DELIVERY_POINTS);