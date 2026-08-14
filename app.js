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
        "locationName": "ACAJUTLA",
        "imageUrl": "imagenes/ACAJUTLA.jpg"
    },
    {
        "id": 3,
        "city": "AGUA CALIENTE",
        "locationName": "AGUA CALIENTE",
        "imageUrl": "imagenes/AGUA CALIENTE.jpg"
    },
    {
        "id": 4,
        "city": "AGUILARES",
        "locationName": "AGENCIA",
        "imageUrl": "imagenes/AGUILARES - AGENCIA.jpeg"
    },
    {
        "id": 5,
        "city": "AGUILARES",
        "locationName": "AGUILARES",
        "imageUrl": "imagenes/AGUILARES.jpg"
    },
    {
        "id": 6,
        "city": "AHUACHAPAN",
        "locationName": "AGENCIA MELO",
        "imageUrl": "imagenes/AHUACHAPAN - AGENCIA MELO.jpg"
    },
    {
        "id": 7,
        "city": "AHUACHAPAN",
        "locationName": "AGENCIA",
        "imageUrl": "imagenes/AHUACHAPAN - AGENCIA.jpg"
    },
    {
        "id": 8,
        "city": "ALEGRIA",
        "locationName": "ALEGRIA",
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
        "locationName": "ANAMOROS",
        "imageUrl": "imagenes/ANAMOROS.jpg"
    },
    {
        "id": 11,
        "city": "ANTIGUO CUSCATLAN",
        "locationName": "AGENCIA",
        "imageUrl": "imagenes/ANTIGUO CUSCATLAN -  AGENCIA.jpg"
    },
    {
        "id": 12,
        "city": "APANECA",
        "locationName": "APANECA",
        "imageUrl": "imagenes/APANECA.jpg"
    },
    {
        "id": 13,
        "city": "APASTEPEQUE",
        "locationName": "APASTEPEQUE",
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
        "locationName": "APOPA",
        "imageUrl": "imagenes/APOPA.jpg"
    },
    {
        "id": 16,
        "city": "ARAMBALA",
        "locationName": "ARAMBALA",
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
        "locationName": "ARMENIA",
        "imageUrl": "imagenes/ARMENIA.jpg"
    },
    {
        "id": 19,
        "city": "ATACO",
        "locationName": "ATACO",
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
        "locationName": "ATEOS",
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
        "locationName": "ATIQUIZAYA",
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
        "locationName": "BOLIVAR",
        "imageUrl": "imagenes/BOLIVAR.jpg"
    },
    {
        "id": 26,
        "city": "CACAOPERA",
        "locationName": "CACAOPERA",
        "imageUrl": "imagenes/CACAOPERA.jpg"
    },
    {
        "id": 27,
        "city": "CANDELARIA DE LA FRONTERA",
        "locationName": "AGENCIA MELO",
        "imageUrl": "imagenes/CANDELARIA DE LA FRONTERA - AGENCIA MELO.jpg"
    },
    {
        "id": 28,
        "city": "CANDELARIA DE LA FRONTERA",
        "locationName": "AGENCIA",
        "imageUrl": "imagenes/CANDELARIA DE LA FRONTERA - AGENCIA.jpg"
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
        "locationName": "CARA SUCIA",
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
        "locationName": "CHALATENANGO",
        "imageUrl": "imagenes/CHALATENANGO.jpg"
    },
    {
        "id": 33,
        "city": "CHALCHUAPA",
        "locationName": "AGENCIA MELO",
        "imageUrl": "imagenes/CHALCHUAPA - AGENCIA MELO.jpg"
    },
    {
        "id": 34,
        "city": "CHALCHUAPA",
        "locationName": "AGENCIA",
        "imageUrl": "imagenes/CHALCHUAPA - AGENCIA.jpg"
    },
    {
        "id": 35,
        "city": "CHAPELTIQUE",
        "locationName": "AGENCIA",
        "imageUrl": "imagenes/CHAPELTIQUE - AGENCIA.jpeg"
    },
    {
        "id": 36,
        "city": "CHAPELTIQUE",
        "locationName": "MELO",
        "imageUrl": "imagenes/CHAPELTIQUE - MELO.jpg"
    },
    {
        "id": 37,
        "city": "CHILANGA",
        "locationName": "CHILANGA",
        "imageUrl": "imagenes/CHILANGA.jpg"
    },
    {
        "id": 38,
        "city": "CHINAMECA",
        "locationName": "CHINAMECA",
        "imageUrl": "imagenes/CHINAMECA.jpg"
    },
    {
        "id": 39,
        "city": "CHIRILAGUA",
        "locationName": "CHIRILAGUA",
        "imageUrl": "imagenes/CHIRILAGUA.jpg"
    },
    {
        "id": 40,
        "city": "CIUDAD ARCE",
        "locationName": "AGENCIA MELO",
        "imageUrl": "imagenes/CIUDAD ARCE - AGENCIA MELO.jpg"
    },
    {
        "id": 41,
        "city": "CIUDAD ARCE",
        "locationName": "AGENCIA",
        "imageUrl": "imagenes/CIUDAD ARCE - AGENCIA.jpg"
    },
    {
        "id": 42,
        "city": "CIUDAD BARRIOS",
        "locationName": "AGENCIA",
        "imageUrl": "imagenes/CIUDAD BARRIOS - AGENCIA.jpg"
    },
    {
        "id": 43,
        "city": "CIUDAD DELGADO",
        "locationName": "CIUDAD DELGADO",
        "imageUrl": "imagenes/CIUDAD DELGADO.jpg"
    },
    {
        "id": 44,
        "city": "CIUDAD EL TRIUNFO",
        "locationName": "CIUDAD EL TRIUNFO",
        "imageUrl": "imagenes/CIUDAD EL TRIUNFO.jpg"
    },
    {
        "id": 45,
        "city": "CIUDAD MARSELLA",
        "locationName": "CIUDAD MARSELLA",
        "imageUrl": "imagenes/CIUDAD MARSELLA.jpg"
    },
    {
        "id": 46,
        "city": "CIUDAD REAL",
        "locationName": "CIUDAD REAL",
        "imageUrl": "imagenes/CIUDAD REAL.jpg"
    },
    {
        "id": 47,
        "city": "CIUDAD VERSALLES",
        "locationName": "CIUDAD VERSALLES",
        "imageUrl": "imagenes/CIUDAD VERSALLES.jpg"
    },
    {
        "id": 48,
        "city": "COATEPEQUE",
        "locationName": "COATEPEQUE",
        "imageUrl": "imagenes/COATEPEQUE.jpg"
    },
    {
        "id": 49,
        "city": "COJUTEPEQUE",
        "locationName": "AGENCIA MELO",
        "imageUrl": "imagenes/COJUTEPEQUE - AGENCIA MELO.jpg"
    },
    {
        "id": 50,
        "city": "COJUTEPEQUE",
        "locationName": "AGENCIA",
        "imageUrl": "imagenes/COJUTEPEQUE - AGENCIA.jpg"
    },
    {
        "id": 51,
        "city": "COMACARAN",
        "locationName": "COMACARAN",
        "imageUrl": "imagenes/COMACARAN.jpg"
    },
    {
        "id": 52,
        "city": "COMOLAPA",
        "locationName": "COMOLAPA",
        "imageUrl": "imagenes/COMOLAPA.jpg"
    },
    {
        "id": 53,
        "city": "CONCEPCION BATRES",
        "locationName": "CONCEPCION BATRES",
        "imageUrl": "imagenes/CONCEPCION BATRES.jpg"
    },
    {
        "id": 54,
        "city": "CONCEPCION DE ORIENTE",
        "locationName": "CONCEPCION DE ORIENTE",
        "imageUrl": "imagenes/CONCEPCION DE ORIENTE.jpg"
    },
    {
        "id": 55,
        "city": "CONCHAGUA",
        "locationName": "CONCHAGUA",
        "imageUrl": "imagenes/CONCHAGUA.jpg"
    },
    {
        "id": 56,
        "city": "CORINTO",
        "locationName": "CORINTO",
        "imageUrl": "imagenes/CORINTO.jpg"
    },
    {
        "id": 57,
        "city": "COSTA DEL SOL",
        "locationName": "COSTA DEL SOL",
        "imageUrl": "imagenes/COSTA DEL SOL.jpg"
    },
    {
        "id": 58,
        "city": "CUIDAD BARRIOS",
        "locationName": "MELO",
        "imageUrl": "imagenes/CUIDAD BARRIOS - MELO.jpg"
    },
    {
        "id": 59,
        "city": "CUIDAD REAL",
        "locationName": "CUIDAD REAL",
        "imageUrl": "imagenes/CUIDAD REAL.jpg"
    },
    {
        "id": 60,
        "city": "DELICIAS DE CONCEPCIÓN",
        "locationName": "DELICIAS DE CONCEPCIÓN",
        "imageUrl": "imagenes/DELICIAS DE CONCEPCIÓN.jpg"
    },
    {
        "id": 61,
        "city": "DESVIO DE AMAYO",
        "locationName": "DESVIO DE AMAYO",
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
        "locationName": "DESVIO DE OPICO",
        "imageUrl": "imagenes/DESVIO DE OPICO.jpg"
    },
    {
        "id": 64,
        "city": "DOLORES",
        "locationName": "DOLORES",
        "imageUrl": "imagenes/DOLORES.jpg"
    },
    {
        "id": 65,
        "city": "DULCE NOMBRE DE MARIA",
        "locationName": "DULCE NOMBRE DE MARIA",
        "imageUrl": "imagenes/DULCE NOMBRE DE MARIA.jpg"
    },
    {
        "id": 66,
        "city": "EL AMATILLO",
        "locationName": "EL AMATILLO",
        "imageUrl": "imagenes/EL AMATILLO.jpg"
    },
    {
        "id": 67,
        "city": "EL CARMEN",
        "locationName": "EL CARMEN",
        "imageUrl": "imagenes/EL CARMEN.jpg"
    },
    {
        "id": 68,
        "city": "EL CONGO",
        "locationName": "AGENCIA",
        "imageUrl": "imagenes/EL CONGO - AGENCIA.jpeg"
    },
    {
        "id": 69,
        "city": "EL CONGO",
        "locationName": "MELO",
        "imageUrl": "imagenes/EL CONGO - MELO.jpg"
    },
    {
        "id": 70,
        "city": "EL DIVISADERO",
        "locationName": "EL DIVISADERO",
        "imageUrl": "imagenes/EL DIVISADERO.jpg"
    },
    {
        "id": 71,
        "city": "EL ENCUENTRO SAN MARCOS",
        "locationName": "EL ENCUENTRO SAN MARCOS",
        "imageUrl": "imagenes/EL ENCUENTRO SAN MARCOS.jpg"
    },
    {
        "id": 72,
        "city": "EL PARAISO CHALATE",
        "locationName": "EL PARAISO CHALATE",
        "imageUrl": "imagenes/EL PARAISO CHALATE.jpg"
    },
    {
        "id": 73,
        "city": "EL PARAISO",
        "locationName": "EL PARAISO",
        "imageUrl": "imagenes/EL PARAISO.jpg"
    },
    {
        "id": 74,
        "city": "EL REFUGIO",
        "locationName": "EL REFUGIO",
        "imageUrl": "imagenes/EL REFUGIO.jpg"
    },
    {
        "id": 75,
        "city": "EL ROSARIO",
        "locationName": "EL ROSARIO",
        "imageUrl": "imagenes/EL ROSARIO.jpg"
    },
    {
        "id": 76,
        "city": "EL SAUCE",
        "locationName": "EL SAUCE",
        "imageUrl": "imagenes/EL SAUCE.jpg"
    },
    {
        "id": 77,
        "city": "EL TRANSITO",
        "locationName": "AGENCIA",
        "imageUrl": "imagenes/EL TRANSITO - AGENCIA.jpg"
    },
    {
        "id": 78,
        "city": "EL TRANSITO",
        "locationName": "MELO",
        "imageUrl": "imagenes/EL TRANSITO - MELO.jpg"
    },
    {
        "id": 79,
        "city": "EREGUAYQUIN",
        "locationName": "EREGUAYQUIN",
        "imageUrl": "imagenes/EREGUAYQUIN.jpg"
    },
    {
        "id": 80,
        "city": "ESTANUELAS",
        "locationName": "ESTANUELAS",
        "imageUrl": "imagenes/ESTANUELAS.jpg"
    },
    {
        "id": 81,
        "city": "GUALOCOCTI",
        "locationName": "GUALOCOCTI",
        "imageUrl": "imagenes/GUALOCOCTI.jpg"
    },
    {
        "id": 82,
        "city": "GUATAJIAGUA",
        "locationName": "GUATAJIAGUA",
        "imageUrl": "imagenes/GUATAJIAGUA.jpg"
    },
    {
        "id": 83,
        "city": "GUAYMANGO",
        "locationName": "GUAYMANGO",
        "imageUrl": "imagenes/GUAYMANGO.jpg"
    },
    {
        "id": 84,
        "city": "GUAZAPA",
        "locationName": "AGENCIA",
        "imageUrl": "imagenes/GUAZAPA - AGENCIA.jpeg"
    },
    {
        "id": 85,
        "city": "GUAZAPA",
        "locationName": "MELO",
        "imageUrl": "imagenes/GUAZAPA - MELO.jpg"
    },
    {
        "id": 86,
        "city": "HATO NUEVO SAN MIGUEL",
        "locationName": "HATO NUEVO SAN MIGUEL",
        "imageUrl": "imagenes/HATO NUEVO SAN MIGUEL.jpg"
    },
    {
        "id": 87,
        "city": "ILOBASCO",
        "locationName": "AGENCIA MELO",
        "imageUrl": "imagenes/ILOBASCO - AGENCIA MELO.jpg"
    },
    {
        "id": 88,
        "city": "ILOBASCO",
        "locationName": "ILOBASCO",
        "imageUrl": "imagenes/ILOBASCO.jpg"
    },
    {
        "id": 89,
        "city": "ILOPANGO",
        "locationName": "ILOPANGO",
        "imageUrl": "imagenes/ILOPANGO.jpg"
    },
    {
        "id": 90,
        "city": "INTIPUCA",
        "locationName": "INTIPUCA",
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
        "locationName": "IZALCO",
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
        "locationName": "JIQUILISCO",
        "imageUrl": "imagenes/JIQUILISCO.jpg"
    },
    {
        "id": 95,
        "city": "JOCOAITIQUE",
        "locationName": "JOCOAITIQUE",
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
        "locationName": "JOCORO",
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
        "locationName": "JUAYUA",
        "imageUrl": "imagenes/JUAYUA.jpg"
    },
    {
        "id": 100,
        "city": "JUCUAPA",
        "locationName": "JUCUAPA",
        "imageUrl": "imagenes/JUCUAPA.jpg"
    },
    {
        "id": 101,
        "city": "JUCUARAN",
        "locationName": "JUCUARAN",
        "imageUrl": "imagenes/JUCUARAN.jpg"
    },
    {
        "id": 102,
        "city": "JUJUTLA",
        "locationName": "JUJUTLA",
        "imageUrl": "imagenes/JUJUTLA.jpg"
    },
    {
        "id": 103,
        "city": "LA GRAN VIA",
        "locationName": "LA GRAN VIA",
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
        "locationName": "LA PALMA",
        "imageUrl": "imagenes/LA PALMA.jpg"
    },
    {
        "id": 106,
        "city": "LA REINA",
        "locationName": "LA REINA",
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
        "locationName": "LA UNION",
        "imageUrl": "imagenes/LA UNION.jpg"
    },
    {
        "id": 109,
        "city": "LISLIQUE",
        "locationName": "LISLIQUE",
        "imageUrl": "imagenes/LISLIQUE.jpg"
    },
    {
        "id": 110,
        "city": "LOLOTIQUE",
        "locationName": "LOLOTIQUE",
        "imageUrl": "imagenes/LOLOTIQUE.jpg"
    },
    {
        "id": 111,
        "city": "LOLOTIQUILLO",
        "locationName": "LOLOTIQUILLO",
        "imageUrl": "imagenes/LOLOTIQUILLO.jpg"
    },
    {
        "id": 112,
        "city": "LOS NARANJOS",
        "locationName": "LOS NARANJOS",
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
        "locationName": "MARSELLA",
        "imageUrl": "imagenes/MARSELLA.jpg"
    },
    {
        "id": 115,
        "city": "MEANGUERA",
        "locationName": "MEANGUERA",
        "imageUrl": "imagenes/MEANGUERA.jpg"
    },
    {
        "id": 116,
        "city": "MERCEDES UMAÑA",
        "locationName": "MERCEDES UMAÑA",
        "imageUrl": "imagenes/MERCEDES UMAÑA.jpg"
    },
    {
        "id": 117,
        "city": "MERLIOT",
        "locationName": "MERLIOT",
        "imageUrl": "imagenes/MERLIOT.jpg"
    },
    {
        "id": 118,
        "city": "METALIO",
        "locationName": "AGENCIA",
        "imageUrl": "imagenes/METALIO - AGENCIA.jpg"
    },
    {
        "id": 119,
        "city": "METALIO",
        "locationName": "METALIO",
        "imageUrl": "imagenes/METALIO.jpg"
    },
    {
        "id": 120,
        "city": "METAPAN",
        "locationName": "AGENCIA",
        "imageUrl": "imagenes/METAPAN - AGENCIA.jpg"
    },
    {
        "id": 121,
        "city": "METAPAN",
        "locationName": "METAPAN",
        "imageUrl": "imagenes/METAPAN.jpg"
    },
    {
        "id": 122,
        "city": "METROCENTRO LOURDES",
        "locationName": "METROCENTRO LOURDES",
        "imageUrl": "imagenes/METROCENTRO LOURDES.jpg"
    },
    {
        "id": 123,
        "city": "METROCENTRO SAN MIGUEL",
        "locationName": "METROCENTRO SAN MIGUEL",
        "imageUrl": "imagenes/METROCENTRO SAN MIGUEL.jpg"
    },
    {
        "id": 124,
        "city": "METROCENTRO SONSONATE",
        "locationName": "METROCENTRO SONSONATE",
        "imageUrl": "imagenes/METROCENTRO SONSONATE.jpg"
    },
    {
        "id": 125,
        "city": "MIRAMONTE SAN SALVADOR",
        "locationName": "BODEGA AGENCIA",
        "imageUrl": "imagenes/MIRAMONTE SAN SALVADOR - BODEGA AGENCIA.jpg"
    },
    {
        "id": 126,
        "city": "MONCAGUA",
        "locationName": "MELO",
        "imageUrl": "imagenes/MONCAGUA - MELO.jpg"
    },
    {
        "id": 127,
        "city": "MONCAGUA",
        "locationName": "MONCAGUA",
        "imageUrl": "imagenes/MONCAGUA.jpg"
    },
    {
        "id": 128,
        "city": "MONTELIMAR",
        "locationName": "MONTELIMAR",
        "imageUrl": "imagenes/MONTELIMAR.jpg"
    },
    {
        "id": 129,
        "city": "NAHUIZALCO",
        "locationName": "AGENCIA",
        "imageUrl": "imagenes/NAHUIZALCO - AGENCIA.jpg"
    },
    {
        "id": 130,
        "city": "NAHUIZALCO",
        "locationName": "NAHUIZALCO",
        "imageUrl": "imagenes/NAHUIZALCO.jpg"
    },
    {
        "id": 131,
        "city": "NEJAPA",
        "locationName": "AGENCIA",
        "imageUrl": "imagenes/NEJAPA - AGENCIA.png"
    },
    {
        "id": 132,
        "city": "NUEVA CONCEPCION",
        "locationName": "AGENCIA",
        "imageUrl": "imagenes/NUEVA CONCEPCION - AGENCIA.jpg"
    },
    {
        "id": 133,
        "city": "NUEVA CONCEPCION",
        "locationName": "MELO",
        "imageUrl": "imagenes/NUEVA CONCEPCION - MELO.jpg"
    },
    {
        "id": 134,
        "city": "NUEVA ESPARTA",
        "locationName": "NUEVA ESPARTA",
        "imageUrl": "imagenes/NUEVA ESPARTA.jpg"
    },
    {
        "id": 135,
        "city": "NUEVA GRANADA",
        "locationName": "NUEVA GRANADA",
        "imageUrl": "imagenes/NUEVA GRANADA.jpg"
    },
    {
        "id": 136,
        "city": "NUEVA GUADALUPE",
        "locationName": "NUEVA GUADALUPE",
        "imageUrl": "imagenes/NUEVA GUADALUPE.jpg"
    },
    {
        "id": 137,
        "city": "NUEVO EDEN",
        "locationName": "NUEVO EDEN",
        "imageUrl": "imagenes/NUEVO EDEN.jpg"
    },
    {
        "id": 138,
        "city": "NUEVO LOURDES",
        "locationName": "NUEVO LOURDES",
        "imageUrl": "imagenes/NUEVO LOURDES.jpg"
    },
    {
        "id": 139,
        "city": "OLOCUILTA",
        "locationName": "MELO",
        "imageUrl": "imagenes/OLOCUILTA - MELO.jpg"
    },
    {
        "id": 140,
        "city": "OLOCUILTA",
        "locationName": "OLOCUILTA",
        "imageUrl": "imagenes/OLOCUILTA.jpg"
    },
    {
        "id": 141,
        "city": "OPICO CENTRO",
        "locationName": "AGENCIA",
        "imageUrl": "imagenes/OPICO CENTRO - AGENCIA.jpeg"
    },
    {
        "id": 142,
        "city": "OSICALA",
        "locationName": "MELO",
        "imageUrl": "imagenes/OSICALA - MELO.jpg"
    },
    {
        "id": 143,
        "city": "OSICALA",
        "locationName": "OSICALA",
        "imageUrl": "imagenes/OSICALA.jpg"
    },
    {
        "id": 144,
        "city": "OZATLAN",
        "locationName": "OZATLAN",
        "imageUrl": "imagenes/OZATLAN.jpg"
    },
    {
        "id": 145,
        "city": "PARAJE GALAN",
        "locationName": "PARAJE GALAN",
        "imageUrl": "imagenes/PARAJE GALAN.jpg"
    },
    {
        "id": 146,
        "city": "PASAQUINA",
        "locationName": "PASAQUINA",
        "imageUrl": "imagenes/PASAQUINA.jpg"
    },
    {
        "id": 147,
        "city": "PASEO VENECIA",
        "locationName": "PASEO VENECIA",
        "imageUrl": "imagenes/PASEO VENECIA.jpg"
    },
    {
        "id": 148,
        "city": "PERQUIN",
        "locationName": "PERQUIN",
        "imageUrl": "imagenes/PERQUIN.jpg"
    },
    {
        "id": 149,
        "city": "PLANES DE RENDEROS",
        "locationName": "PLANES DE RENDEROS",
        "imageUrl": "imagenes/PLANES DE RENDEROS.jpg"
    },
    {
        "id": 150,
        "city": "PLAYA EL CUCO",
        "locationName": "PLAYA EL CUCO",
        "imageUrl": "imagenes/PLAYA EL CUCO.jpg"
    },
    {
        "id": 151,
        "city": "PLAYA EL ESPINO",
        "locationName": "PLAYA EL ESPINO",
        "imageUrl": "imagenes/PLAYA EL ESPINO.jpg"
    },
    {
        "id": 152,
        "city": "PLAZA DON YON",
        "locationName": "MELO",
        "imageUrl": "imagenes/PLAZA DON YON - MELO.jpg"
    },
    {
        "id": 153,
        "city": "PLAZA DON YON",
        "locationName": "PLAZA DON YON",
        "imageUrl": "imagenes/PLAZA DON YON.jpg"
    },
    {
        "id": 154,
        "city": "PLAZA SANTO TOMAS",
        "locationName": "PLAZA SANTO TOMAS",
        "imageUrl": "imagenes/PLAZA SANTO TOMAS.jpg"
    },
    {
        "id": 155,
        "city": "POLOROS",
        "locationName": "POLOROS",
        "imageUrl": "imagenes/POLOROS.jpg"
    },
    {
        "id": 156,
        "city": "PUERTO DE LA LIBERTAD",
        "locationName": "AGENCIA",
        "imageUrl": "imagenes/PUERTO DE LA LIBERTAD - AGENCIA.jpg"
    },
    {
        "id": 157,
        "city": "PUERTO DE LA LIBERTAD",
        "locationName": "MELO",
        "imageUrl": "imagenes/PUERTO DE LA LIBERTAD - MELO.jpg"
    },
    {
        "id": 158,
        "city": "PUERTO EL TRIUNFO",
        "locationName": "MELO",
        "imageUrl": "imagenes/PUERTO EL TRIUNFO - MELO.jpg"
    },
    {
        "id": 159,
        "city": "PUERTO EL TRIUNFO",
        "locationName": "PUERTO EL TRIUNFO",
        "imageUrl": "imagenes/PUERTO EL TRIUNFO.jpg"
    },
    {
        "id": 160,
        "city": "PUERTO PARADA",
        "locationName": "PUERTO PARADA",
        "imageUrl": "imagenes/PUERTO PARADA.jpg"
    },
    {
        "id": 161,
        "city": "QUELEPA",
        "locationName": "QUELEPA",
        "imageUrl": "imagenes/QUELEPA.jpg"
    },
    {
        "id": 162,
        "city": "QUEZALTEPEQUE",
        "locationName": "AGENCIA",
        "imageUrl": "imagenes/QUEZALTEPEQUE - AGENCIA.png"
    },
    {
        "id": 163,
        "city": "QUEZALTEPEQUE",
        "locationName": "QUEZALTEPEQUE",
        "imageUrl": "imagenes/QUEZALTEPEQUE.jpg"
    },
    {
        "id": 164,
        "city": "SALCOATITAN",
        "locationName": "SALCOATITAN",
        "imageUrl": "imagenes/SALCOATITAN.jpg"
    },
    {
        "id": 165,
        "city": "SALVADOR DEL MUNDO",
        "locationName": "AGENCIA",
        "imageUrl": "imagenes/SALVADOR DEL MUNDO - AGENCIA.jpg"
    },
    {
        "id": 166,
        "city": "SAN ALEJO",
        "locationName": "SAN ALEJO",
        "imageUrl": "imagenes/SAN ALEJO.jpg"
    },
    {
        "id": 167,
        "city": "SAN ANTONIO PAJONAL",
        "locationName": "SAN ANTONIO PAJONAL",
        "imageUrl": "imagenes/SAN ANTONIO PAJONAL.jpg"
    },
    {
        "id": 168,
        "city": "SAN BARTOLO",
        "locationName": "SAN BARTOLO",
        "imageUrl": "imagenes/SAN BARTOLO.jpg"
    },
    {
        "id": 169,
        "city": "SAN BARTOLOMÉ PERULAPIA",
        "locationName": "SAN BARTOLOMÉ PERULAPIA",
        "imageUrl": "imagenes/SAN BARTOLOMÉ PERULAPIA.jpg"
    },
    {
        "id": 170,
        "city": "SAN BUENAVENTURA",
        "locationName": "SAN BUENAVENTURA",
        "imageUrl": "imagenes/SAN BUENAVENTURA.jpg"
    },
    {
        "id": 171,
        "city": "SAN CARLOS",
        "locationName": "SAN CARLOS",
        "imageUrl": "imagenes/SAN CARLOS.jpg"
    },
    {
        "id": 172,
        "city": "SAN ESTEBA CATARINA",
        "locationName": "SAN ESTEBA CATARINA",
        "imageUrl": "imagenes/SAN ESTEBA CATARINA.jpg"
    },
    {
        "id": 173,
        "city": "SAN FRANCISCO GOTERA",
        "locationName": "AGENCIA",
        "imageUrl": "imagenes/SAN FRANCISCO GOTERA - AGENCIA.jpg"
    },
    {
        "id": 174,
        "city": "SAN FRANCISCO GOTERA",
        "locationName": "SAN FRANCISCO GOTERA",
        "imageUrl": "imagenes/SAN FRANCISCO GOTERA.jpg"
    },
    {
        "id": 175,
        "city": "SAN GERARDO",
        "locationName": "SAN GERARDO",
        "imageUrl": "imagenes/SAN GERARDO.jpg"
    },
    {
        "id": 176,
        "city": "SAN IDELFONSO",
        "locationName": "SAN IDELFONSO",
        "imageUrl": "imagenes/SAN IDELFONSO.jpg"
    },
    {
        "id": 177,
        "city": "SAN IGNACIO",
        "locationName": "MELO",
        "imageUrl": "imagenes/SAN IGNACIO - MELO.jpg"
    },
    {
        "id": 178,
        "city": "SAN IGNACIO",
        "locationName": "SAN IGNACIO",
        "imageUrl": "imagenes/SAN IGNACIO.jpg"
    },
    {
        "id": 179,
        "city": "SAN ISIDRO",
        "locationName": "SAN ISIDRO",
        "imageUrl": "imagenes/SAN ISIDRO.jpg"
    },
    {
        "id": 180,
        "city": "SAN JACINTO",
        "locationName": "SAN JACINTO",
        "imageUrl": "imagenes/SAN JACINTO.jpg"
    },
    {
        "id": 181,
        "city": "SAN JORGE",
        "locationName": "SAN JORGE",
        "imageUrl": "imagenes/SAN JORGE.png"
    },
    {
        "id": 182,
        "city": "SAN JOSE VILLANUEVA",
        "locationName": "SAN JOSE VILLANUEVA",
        "imageUrl": "imagenes/SAN JOSE VILLANUEVA.jpg"
    },
    {
        "id": 183,
        "city": "SAN JUAN NONUALCO",
        "locationName": "MELO",
        "imageUrl": "imagenes/SAN JUAN NONUALCO - MELO.jpg"
    },
    {
        "id": 184,
        "city": "SAN JUAN NONUALCO",
        "locationName": "SAN JUAN NONUALCO",
        "imageUrl": "imagenes/SAN JUAN NONUALCO.jpg"
    },
    {
        "id": 185,
        "city": "SAN JUAN OPICO",
        "locationName": "SAN JUAN OPICO",
        "imageUrl": "imagenes/SAN JUAN OPICO.jpg"
    },
    {
        "id": 186,
        "city": "SAN JUAN TALPA",
        "locationName": "MELO",
        "imageUrl": "imagenes/SAN JUAN TALPA - MELO.jpg"
    },
    {
        "id": 187,
        "city": "SAN JUAN TALPA",
        "locationName": "SAN JUAN TALPA",
        "imageUrl": "imagenes/SAN JUAN TALPA.jpg"
    },
    {
        "id": 188,
        "city": "SAN JULIAN",
        "locationName": "SAN JULIAN",
        "imageUrl": "imagenes/SAN JULIAN.jpg"
    },
    {
        "id": 189,
        "city": "SAN LUIS DE LA REINA",
        "locationName": "SAN LUIS DE LA REINA",
        "imageUrl": "imagenes/SAN LUIS DE LA REINA.jpg"
    },
    {
        "id": 190,
        "city": "SAN LUIS LA HERRADURA",
        "locationName": "SAN LUIS LA HERRADURA",
        "imageUrl": "imagenes/SAN LUIS LA HERRADURA.jpg"
    },
    {
        "id": 191,
        "city": "SAN LUIS TALPA",
        "locationName": "MELO",
        "imageUrl": "imagenes/SAN LUIS TALPA - MELO.jpg"
    },
    {
        "id": 192,
        "city": "SAN LUIS TALPA",
        "locationName": "SAN LUIS TALPA",
        "imageUrl": "imagenes/SAN LUIS TALPA.jpg"
    },
    {
        "id": 193,
        "city": "SAN MARCOS",
        "locationName": "AGENCIA",
        "imageUrl": "imagenes/SAN MARCOS - AGENCIA.jpeg"
    },
    {
        "id": 194,
        "city": "SAN MARCOS LEMPA",
        "locationName": "SAN MARCOS LEMPA",
        "imageUrl": "imagenes/SAN MARCOS LEMPA.jpg"
    },
    {
        "id": 195,
        "city": "SAN MARTIN",
        "locationName": "AGENCIA",
        "imageUrl": "imagenes/SAN MARTIN - AGENCIA.png"
    },
    {
        "id": 196,
        "city": "SAN MATIAS",
        "locationName": "SAN MATIAS",
        "imageUrl": "imagenes/SAN MATIAS.jpg"
    },
    {
        "id": 197,
        "city": "SAN MIGUEL",
        "locationName": "AGENCIA MELO",
        "imageUrl": "imagenes/SAN MIGUEL - AGENCIA MELO.jpg"
    },
    {
        "id": 198,
        "city": "SAN MIGUEL",
        "locationName": "AGENCIA",
        "imageUrl": "imagenes/SAN MIGUEL - AGENCIA.jpg"
    },
    {
        "id": 199,
        "city": "SAN MIGUEL",
        "locationName": "BODEGA AGENCIA",
        "imageUrl": "imagenes/SAN MIGUEL - BODEGA AGENCIA.jpg"
    },
    {
        "id": 200,
        "city": "SAN PEDRO PERULAPAN",
        "locationName": "SAN PEDRO PERULAPAN",
        "imageUrl": "imagenes/SAN PEDRO PERULAPAN.jpg"
    },
    {
        "id": 201,
        "city": "SAN RAFAEL CEDROS",
        "locationName": "AGENCIA MELO",
        "imageUrl": "imagenes/SAN RAFAEL CEDROS - AGENCIA MELO.jpg"
    },
    {
        "id": 202,
        "city": "SAN RAFAEL CEDROS",
        "locationName": "SAN RAFAEL CEDROS",
        "imageUrl": "imagenes/SAN RAFAEL CEDROS.jpg"
    },
    {
        "id": 203,
        "city": "SAN RAFAEL OBRAJUELO",
        "locationName": "SAN RAFAEL OBRAJUELO",
        "imageUrl": "imagenes/SAN RAFAEL OBRAJUELO.jpg"
    },
    {
        "id": 204,
        "city": "SAN RAFAEL OBRAJUELOS",
        "locationName": "SAN RAFAEL OBRAJUELOS",
        "imageUrl": "imagenes/SAN RAFAEL OBRAJUELOS.jpg"
    },
    {
        "id": 205,
        "city": "SAN RAFAEL ORIENTE",
        "locationName": "SAN RAFAEL ORIENTE",
        "imageUrl": "imagenes/SAN RAFAEL ORIENTE.jpg"
    },
    {
        "id": 206,
        "city": "SAN SALVADOR",
        "locationName": "BODEGA",
        "imageUrl": "imagenes/SAN SALVADOR - BODEGA.jpg"
    },
    {
        "id": 207,
        "city": "SAN SALVADOR CENTRO",
        "locationName": "AGENCIA",
        "imageUrl": "imagenes/SAN SALVADOR CENTRO - AGENCIA.png"
    },
    {
        "id": 208,
        "city": "SAN SALVADOR METROGALERIAS",
        "locationName": "AGENCIA MELO",
        "imageUrl": "imagenes/SAN SALVADOR METROGALERIAS - AGENCIA MELO.jpg"
    },
    {
        "id": 209,
        "city": "SAN SALVADOR METROGALERIAS",
        "locationName": "AGENCIA",
        "imageUrl": "imagenes/SAN SALVADOR METROGALERIAS - AGENCIA.jpeg"
    },
    {
        "id": 210,
        "city": "SAN SALVADOR PLAZA JEREZ",
        "locationName": "AGENCIA",
        "imageUrl": "imagenes/SAN SALVADOR PLAZA JEREZ - AGENCIA.jpg"
    },
    {
        "id": 211,
        "city": "SAN SEBASTIAN",
        "locationName": "SAN SEBASTIAN",
        "imageUrl": "imagenes/SAN SEBASTIAN.jpg"
    },
    {
        "id": 212,
        "city": "SAN SIMON",
        "locationName": "SAN SIMON",
        "imageUrl": "imagenes/SAN SIMON.jpg"
    },
    {
        "id": 213,
        "city": "SAN VICENTE",
        "locationName": "AGENCIA MELO",
        "imageUrl": "imagenes/SAN VICENTE - AGENCIA MELO.jpg"
    },
    {
        "id": 214,
        "city": "SAN VICENTE",
        "locationName": "AGENCIA",
        "imageUrl": "imagenes/SAN VICENTE - AGENCIA.jpg"
    },
    {
        "id": 215,
        "city": "SANTA ANA",
        "locationName": "AGENCIA MELO",
        "imageUrl": "imagenes/SANTA ANA - AGENCIA MELO.jpg"
    },
    {
        "id": 216,
        "city": "SANTA ANA CENTRO",
        "locationName": "AGENCIA",
        "imageUrl": "imagenes/SANTA ANA CENTRO - AGENCIA.jpg"
    },
    {
        "id": 217,
        "city": "SANTA ANA PLAZA 33",
        "locationName": "AGENCIA",
        "imageUrl": "imagenes/SANTA ANA PLAZA 33 - AGENCIA.jpg"
    },
    {
        "id": 218,
        "city": "SANTA ELENA",
        "locationName": "SANTA ELENA",
        "imageUrl": "imagenes/SANTA ELENA.jpg"
    },
    {
        "id": 219,
        "city": "SANTA MARIA",
        "locationName": "SANTA MARIA",
        "imageUrl": "imagenes/SANTA MARIA.jpg"
    },
    {
        "id": 220,
        "city": "SANTA ROSA DE LIMA",
        "locationName": "AGENCIA",
        "imageUrl": "imagenes/SANTA ROSA DE LIMA - AGENCIA.jpg"
    },
    {
        "id": 221,
        "city": "SANTA ROSA DE LIMA",
        "locationName": "SANTA ROSA DE LIMA",
        "imageUrl": "imagenes/SANTA ROSA DE LIMA.jpg"
    },
    {
        "id": 222,
        "city": "SANTA TECLA",
        "locationName": "AGENCIA",
        "imageUrl": "imagenes/SANTA TECLA - AGENCIA.jpg"
    },
    {
        "id": 223,
        "city": "SANTIAGO DE LA FRONTERA",
        "locationName": "SANTIAGO DE LA FRONTERA",
        "imageUrl": "imagenes/SANTIAGO DE LA FRONTERA.jpg"
    },
    {
        "id": 224,
        "city": "SANTIAGO DE MARIA",
        "locationName": "AGENCIA",
        "imageUrl": "imagenes/SANTIAGO DE MARIA - AGENCIA.jpg"
    },
    {
        "id": 225,
        "city": "SANTIAGO NONUALCO",
        "locationName": "MELO",
        "imageUrl": "imagenes/SANTIAGO NONUALCO - MELO.jpg"
    },
    {
        "id": 226,
        "city": "SANTIAGO NONUALCO",
        "locationName": "SANTIAGO NONUALCO",
        "imageUrl": "imagenes/SANTIAGO NONUALCO.jpg"
    },
    {
        "id": 227,
        "city": "SANTIAGO TEXACUANGO",
        "locationName": "SANTIAGO TEXACUANGO",
        "imageUrl": "imagenes/SANTIAGO TEXACUANGO.jpg"
    },
    {
        "id": 228,
        "city": "SANTO DOMINGO",
        "locationName": "SANTO DOMINGO",
        "imageUrl": "imagenes/SANTO DOMINGO.jpg"
    },
    {
        "id": 229,
        "city": "SANTO TOMAS",
        "locationName": "SANTO TOMAS",
        "imageUrl": "imagenes/SANTO TOMAS.jpg"
    },
    {
        "id": 230,
        "city": "SENSEMBRA",
        "locationName": "SENSEMBRA",
        "imageUrl": "imagenes/SENSEMBRA.jpg"
    },
    {
        "id": 231,
        "city": "SENSUNTEPEQUE",
        "locationName": "AGENCIA MELO",
        "imageUrl": "imagenes/SENSUNTEPEQUE - AGENCIA MELO.jpg"
    },
    {
        "id": 232,
        "city": "SENSUNTEPEQUE",
        "locationName": "SENSUNTEPEQUE",
        "imageUrl": "imagenes/SENSUNTEPEQUE.jpg"
    },
    {
        "id": 233,
        "city": "SESORI",
        "locationName": "SESORI",
        "imageUrl": "imagenes/SESORI.jpg"
    },
    {
        "id": 234,
        "city": "SOCIEDAD",
        "locationName": "SOCIEDAD",
        "imageUrl": "imagenes/SOCIEDAD.jpg"
    },
    {
        "id": 235,
        "city": "SONSONATE",
        "locationName": "AGENCIA",
        "imageUrl": "imagenes/SONSONATE - AGENCIA.jpg"
    },
    {
        "id": 236,
        "city": "SONZACATE",
        "locationName": "AGENCIA",
        "imageUrl": "imagenes/SONZACATE - AGENCIA.jpg"
    },
    {
        "id": 237,
        "city": "SONZACATE",
        "locationName": "SONZACATE",
        "imageUrl": "imagenes/SONZACATE.jpg"
    },
    {
        "id": 238,
        "city": "SOYAPANGO",
        "locationName": "AGENCIA",
        "imageUrl": "imagenes/SOYAPANGO - AGENCIA.jpg"
    },
    {
        "id": 239,
        "city": "SOYAPANGO PLAZA MUNDO",
        "locationName": "SOYAPANGO PLAZA MUNDO",
        "imageUrl": "imagenes/SOYAPANGO PLAZA MUNDO.jpg"
    },
    {
        "id": 240,
        "city": "SOYAPANGO UNICENTRO",
        "locationName": "AGENCIA",
        "imageUrl": "imagenes/SOYAPANGO UNICENTRO - AGENCIA.jpg"
    },
    {
        "id": 241,
        "city": "SUCHITOTO",
        "locationName": "SUCHITOTO",
        "imageUrl": "imagenes/SUCHITOTO.jpg"
    },
    {
        "id": 242,
        "city": "TACACHICO",
        "locationName": "TACACHICO",
        "imageUrl": "imagenes/TACACHICO.jpg"
    },
    {
        "id": 243,
        "city": "TECAPAN",
        "locationName": "TECAPAN",
        "imageUrl": "imagenes/TECAPAN.jpg"
    },
    {
        "id": 244,
        "city": "TECOLUCA",
        "locationName": "TECOLUCA",
        "imageUrl": "imagenes/TECOLUCA.jpg"
    },
    {
        "id": 245,
        "city": "TEJUTEPEQUE",
        "locationName": "TEJUTEPEQUE",
        "imageUrl": "imagenes/TEJUTEPEQUE.jpg"
    },
    {
        "id": 246,
        "city": "TEJUTLA",
        "locationName": "TEJUTLA",
        "imageUrl": "imagenes/TEJUTLA.jpg"
    },
    {
        "id": 247,
        "city": "TERMINAL DE SONSONATE",
        "locationName": "TERMINAL DE SONSONATE",
        "imageUrl": "imagenes/TERMINAL DE SONSONATE.jpg"
    },
    {
        "id": 248,
        "city": "TEXISTEPEQUE",
        "locationName": "MELO",
        "imageUrl": "imagenes/TEXISTEPEQUE - MELO.jpg"
    },
    {
        "id": 249,
        "city": "TEXISTEPEQUE",
        "locationName": "TEXISTEPEQUE",
        "imageUrl": "imagenes/TEXISTEPEQUE.jpg"
    },
    {
        "id": 250,
        "city": "TIERRA BLANCA",
        "locationName": "TIERRA BLANCA",
        "imageUrl": "imagenes/TIERRA BLANCA.jpg"
    },
    {
        "id": 251,
        "city": "TONACATEPEQUE",
        "locationName": "TONACATEPEQUE",
        "imageUrl": "imagenes/TONACATEPEQUE.jpg"
    },
    {
        "id": 252,
        "city": "TURIN",
        "locationName": "TURIN",
        "imageUrl": "imagenes/TURIN.jpg"
    },
    {
        "id": 253,
        "city": "ULUAZAPA",
        "locationName": "ULUAZAPA",
        "imageUrl": "imagenes/ULUAZAPA.jpg"
    },
    {
        "id": 254,
        "city": "USULUTAN",
        "locationName": "AGENCIA MELO",
        "imageUrl": "imagenes/USULUTAN - AGENCIA MELO.jpg"
    },
    {
        "id": 255,
        "city": "USULUTAN",
        "locationName": "AGENCIA",
        "imageUrl": "imagenes/USULUTAN - AGENCIA.jpg"
    },
    {
        "id": 256,
        "city": "VERSALLES",
        "locationName": "VERSALLES",
        "imageUrl": "imagenes/VERSALLES.jpg"
    },
    {
        "id": 257,
        "city": "YAMABAL",
        "locationName": "YAMABAL",
        "imageUrl": "imagenes/YAMABAL.jpg"
    },
    {
        "id": 258,
        "city": "YOLOAIQUIN",
        "locationName": "YOLOAIQUIN",
        "imageUrl": "imagenes/YOLOAIQUIN.jpg"
    },
    {
        "id": 259,
        "city": "YUCUAIQUIN",
        "locationName": "YUCUAIQUIN",
        "imageUrl": "imagenes/YUCUAIQUIN.jpg"
    },
    {
        "id": 260,
        "city": "ZACATECOLUCA",
        "locationName": "AGENCIA",
        "imageUrl": "imagenes/ZACATECOLUCA - AGENCIA.jpg"
    },
    {
        "id": 261,
        "city": "ZACATECOLUCA",
        "locationName": "ZACATECOLUCA",
        "imageUrl": "imagenes/ZACATECOLUCA.jpg"
    },
    {
        "id": 262,
        "city": "ZARAGOZA",
        "locationName": "AGENCIA",
        "imageUrl": "imagenes/ZARAGOZA - AGENCIA.jpg"
    },
    {
        "id": 263,
        "city": "ZARAGOZA",
        "locationName": "MELO",
        "imageUrl": "imagenes/ZARAGOZA - MELO.jpg"
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
                    ${
                        point.locationName.toUpperCase().includes('BODEGA') 
                            ? 'Bodega' 
                            : point.locationName.toUpperCase().includes('AGENCIA') 
                                ? 'Agencia' 
                                : 'Punto de Entrega'
                    }
                </div>
            </div>
            
            <!-- Información -->
            <div class="p-4 flex flex-col flex-grow justify-between bg-white ">
                <div>
                    <h4 class="text-sky-800 font-bold text-lg mb-1 leading-tight">
                        ${point.city}
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
