const mrtStations = [
  // {
  //   "id": "NS1",
  //   "name": "Jurong East"
  // },
  // {
  //   "id": "NS2",
  //   "name": "Bukit Batok"
  // },
  // {
  //   "id": "NS3",
  //   "name": "Bukit Gombak"
  // },
  // {
  //   "id": "NS4",
  //   "name": "Choa Chu Kang"
  // },
  // {
  //   "id": "NS5",
  //   "name": "Yew Tee"
  // },
  // {
  //   "id": "NS7",
  //   "name": "Kranji"
  // },
  // {
  //   "id": "NS8",
  //   "name": "Marsiling"
  // },
  // {
  //   "id": "NS9",
  //   "name": "Woodlands"
  // },
  // {
  //   "id": "NS10",
  //   "name": "Admiralty"
  // },
  // {
  //   "id": "NS11",
  //   "name": "Sembawang"
  // },
  // {
  //   "id": "NS13",
  //   "name": "Yishun"
  // },
  // {
  //   "id": "NS14",
  //   "name": "Khatib"
  // },
  // {
  //   "id": "NS15",
  //   "name": "Yio Chu Kang"
  // },
  // {
  //   "id": "NS16",
  //   "name": "Ang Mo Kio"
  // },
  // {
  //   "id": "NS17",
  //   "name": "Bishan"
  // },
  // {
  //   "id": "NS18",
  //   "name": "Braddell"
  // },
  // {
  //   "id": "NS19",
  //   "name": "Toa Payoh"
  // },
  // {
  //   "id": "NS20",
  //   "name": "Novena"
  // },
  // {
  //   "id": "NS21",
  //   "name": "Newton"
  // },
  // {
  //   "id": "NS22",
  //   "name": "Orchard"
  // },
  // {
  //   "id": "NS23",
  //   "name": "Somerset"
  // },
  // {
  //   "id": "NS24",
  //   "name": "Dhoby Ghaut"
  // },
  // {
  //   "id": "NS25",
  //   "name": "City Hall"
  // },
  // {
  //   "id": "NS26",
  //   "name": "Raffles Place"
  // },
  // {
  //   "id": "NS27",
  //   "name": "Marina Bay"
  // },
  // {
  //   "id": "NS28",
  //   "name": "Marina South Pier"
  // },
  // {
  //   "id": "EW1",
  //   "name": "Pasir Ris"
  // },
  // {
  //   "id": "EW2",
  //   "name": "Tampines"
  // },
  // {
  //   "id": "EW3",
  //   "name": "Simei"
  // },
  // {
  //   "id": "EW4",
  //   "name": "Tanah Merah"
  // },
  // {
  //   "id": "EW5",
  //   "name": "Bedok"
  // },
  // {
  //   "id": "EW6",
  //   "name": "Kembangan"
  // },
  // {
  //   "id": "EW7",
  //   "name": "Eunos"
  // },
  // {
  //   "id": "EW8",
  //   "name": "Paya Lebar"
  // },
  // {
  //   "id": "EW9",
  //   "name": "Aljunied"
  // },
  // {
  //   "id": "EW10",
  //   "name": "Kallang"
  // },
  // {
  //   "id": "EW11",
  //   "name": "Lavender"
  // },
  // {
  //   "id": "EW12",
  //   "name": "Bugis"
  // },
  // {
  //   "id": "EW13",
  //   "name": "City Hall"
  // },
  // {
  //   "id": "EW14",
  //   "name": "Raffles Place"
  // },
  // {
  //   "id": "EW15",
  //   "name": "Tanjong Pagar"
  // },
  // {
  //   "id": "EW16",
  //   "name": "Outram Park"
  // },
  // {
  //   "id": "EW17",
  //   "name": "Tiong Bahru"
  // },
  // {
  //   "id": "EW18",
  //   "name": "Redhill"
  // },
  // {
  //   "id": "EW19",
  //   "name": "Queenstown"
  // },
  // {
  //   "id": "EW20",
  //   "name": "Commonwealth"
  // },
  // {
  //   "id": "EW21",
  //   "name": "Buona Vista"
  // },
  // {
  //   "id": "EW22",
  //   "name": "Dover"
  // },
  // {
  //   "id": "EW23",
  //   "name": "Clementi"
  // },
  // {
  //   "id": "EW24",
  //   "name": "Jurong East"
  // },
  // {
  //   "id": "EW25",
  //   "name": "Chinese Garden"
  // },
  // {
  //   "id": "EW26",
  //   "name": "Lakeside"
  // },
  // {
  //   "id": "EW27",
  //   "name": "Boon Lay"
  // },
  // {
  //   "id": "EW28",
  //   "name": "Pioneer"
  // },
  // {
  //   "id": "EW29",
  //   "name": "Joo Koon"
  // },
  // {
  //   "id": "EW30",
  //   "name": "Gul Circle"
  // },
  // {
  //   "id": "EW31",
  //   "name": "Tuas Crescent"
  // },
  // {
  //   "id": "EW32",
  //   "name": "Tuas West Road"
  // },
  // {
  //   "id": "EW33",
  //   "name": "Tuas Link"
  // },
  // {
  //   "id": "CG1",
  //   "name": "Expo"
  // },
  // {
  //   "id": "CG2",
  //   "name": "Changi Airport"
  // },
  {
    "id": "NE1",
    "name": "HarbourFront"
  },
  {
    "id": "NE3",
    "name": "Outram Park"
  },
  {
    "id": "NE4",
    "name": "Chinatown"
  },
  {
    "id": "NE5",
    "name": "Clarke Quay"
  },
  {
    "id": "NE6",
    "name": "Dhoby Ghaut"
  },
  {
    "id": "NE7",
    "name": "Little India"
  },
  {
    "id": "NE8",
    "name": "Farrer Park"
  },
  {
    "id": "NE9",
    "name": "Boon Keng"
  },
  {
    "id": "NE10",
    "name": "Potong Pasir"
  },
  {
    "id": "NE11",
    "name": "Woodleigh"
  },
  {
    "id": "NE12",
    "name": "Serangoon"
  },
  {
    "id": "NE13",
    "name": "Kovan"
  },
  {
    "id": "NE14",
    "name": "Hougang"
  },
  {
    "id": "NE15",
    "name": "Buangkok"
  },
  {
    "id": "NE16",
    "name": "Sengkang"
  },
  {
    "id": "NE17",
    "name": "Punggol"
  },
  {
    "id": "CC1",
    "name": "Dhoby Ghaut"
  },
  {
    "id": "CC2",
    "name": "Bras Basah"
  },
  {
    "id": "CC3",
    "name": "Esplanade"
  },
  {
    "id": "CC4",
    "name": "Promenade"
  },
  {
    "id": "CC5",
    "name": "Nicoll Highway"
  },
  {
    "id": "CC6",
    "name": "Stadium"
  },
  {
    "id": "CC7",
    "name": "Mountbatten"
  },
  {
    "id": "CC8",
    "name": "Dakota"
  },
  {
    "id": "CC9",
    "name": "Paya Lebar"
  },
  {
    "id": "CC10",
    "name": "MacPherson"
  },
  {
    "id": "CC11",
    "name": "Tai Seng"
  },
  {
    "id": "CC12",
    "name": "Bartley"
  },
  {
    "id": "CC13",
    "name": "Serangoon"
  },
  {
    "id": "CC14",
    "name": "Lorong Chuan"
  },
  {
    "id": "CC15",
    "name": "Bishan"
  },
  {
    "id": "CC16",
    "name": "Marymount"
  },
  {
    "id": "CC17",
    "name": "Caldecott"
  },
  {
    "id": "CC19",
    "name": "Botanic Gardens"
  },
  {
    "id": "CC20",
    "name": "Farrer Road"
  },
  {
    "id": "CC21",
    "name": "Holland Village"
  },
  {
    "id": "CC22",
    "name": "Buona Vista"
  },
  {
    "id": "CC23",
    "name": "one-north"
  },
  {
    "id": "CC24",
    "name": "Kent Ridge"
  },
  {
    "id": "CC25",
    "name": "Haw Par Villa"
  },
  {
    "id": "CC26",
    "name": "Pasir Panjang"
  },
  {
    "id": "CC27",
    "name": "Labrador Park"
  },
  {
    "id": "CC28",
    "name": "Telok Blangah"
  },
  {
    "id": "CC29",
    "name": "HarbourFront"
  },
  {
    "id": "CE1",
    "name": "Bayfront"
  },
  {
    "id": "CE2",
    "name": "Marina Bay"
  },
  {
    "id": "DT1",
    "name": "Bukit Panjang"
  },
  {
    "id": "DT2",
    "name": "Cashew"
  },
  {
    "id": "DT3",
    "name": "Hillview"
  },
  {
    "id": "DT5",
    "name": "Beauty World"
  },
  {
    "id": "DT6",
    "name": "King Albert Park"
  },
  {
    "id": "DT7",
    "name": "Sixth Avenue"
  },
  {
    "id": "DT8",
    "name": "Tan Kah Kee"
  },
  {
    "id": "DT9",
    "name": "Botanic Gardens"
  },
  {
    "id": "DT10",
    "name": "Stevens"
  },
  {
    "id": "DT11",
    "name": "Newton"
  },
  {
    "id": "DT12",
    "name": "Little India"
  },
  {
    "id": "DT13",
    "name": "Rochor"
  },
  {
    "id": "DT14",
    "name": "Bugis"
  },
  {
    "id": "DT15",
    "name": "Promenade"
  },
  {
    "id": "DT16",
    "name": "Bayfront"
  },
  {
    "id": "DT17",
    "name": "Downtown"
  },
  {
    "id": "DT18",
    "name": "Telok Ayer"
  },
  {
    "id": "DT19",
    "name": "Chinatown"
  },
  {
    "id": "DT20",
    "name": "Fort Canning"
  },
  {
    "id": "DT21",
    "name": "Bencoolen"
  },
  {
    "id": "DT22",
    "name": "Jalan Besar"
  },
  {
    "id": "DT23",
    "name": "Bendemeer"
  },
  {
    "id": "DT24",
    "name": "Geylang Bahru"
  },
  {
    "id": "DT25",
    "name": "Mattar"
  },
  {
    "id": "DT26",
    "name": "MacPherson"
  },
  {
    "id": "DT27",
    "name": "Ubi"
  },
  {
    "id": "DT28",
    "name": "Kaki Bukit"
  },
  {
    "id": "DT29",
    "name": "Bedok North"
  },
  {
    "id": "DT30",
    "name": "Bedok Reservoir"
  },
  {
    "id": "DT31",
    "name": "Tampines West"
  },
  {
    "id": "DT32",
    "name": "Tampines"
  },
  {
    "id": "DT33",
    "name": "Tampines East"
  },
  {
    "id": "DT34",
    "name": "Upper Changi"
  },
  {
    "id": "DT35",
    "name": "Expo"
  }
]

const mrtStationsAdjacencyList =
{
  "NE1": [{ id: "NE3", cost: 4 }, { id: "CC29", cost: 5 }],
  "NE3": [{ id: "NE1", cost: 4 }, { id: "NE4", cost: 1 }],
  "NE4": [{ id: "NE3", cost: 1 }, { id: "NE5", cost: 2 }, { id: "DT19", cost: 5 }],
  "NE5": [{ id: "NE4", cost: 2 }, { id: "NE6", cost: 3 }],
  "NE6": [{ id: "NE5", cost: 3 }, { id: "NE7", cost: 1 }, { id: "CC1", cost: 5 }],
  "NE7": [{ id: "NE6", cost: 1 }, { id: "NE8", cost: 1 }, { id: "DT12", cost: 5 }],
  "NE8": [{ id: "NE7", cost: 1 }, { id: "NE9", cost: 2 }],
  "NE9": [{ id: "NE8", cost: 2 }, { id: "NE10", cost: 3 }],
  "NE10": [{ id: "NE9", cost: 3 }, { id: "NE11", cost: 1 }],
  "NE11": [{ id: "NE10", cost: 1 }, { id: "NE12", cost: 2 }],
  "NE12": [{ id: "NE13", cost: 3 }, { id: "NE11", cost: 2 }, { id: "CC13", cost: 5 } ],
  "NE13": [{ id: "NE12", cost: 3 }, { id: "NE14", cost: 2 }],
  "NE14": [{ id: "NE13", cost: 2 }, { id: "NE15", cost: 2 }],
  "NE15": [{ id: "NE14", cost: 2 }, { id: "NE16", cost: 2 }],
  "NE16": [{ id: "NE15", cost: 2 }, { id: "NE17", cost: 3 }],
  "NE17": [{ id: "NE16", cost: 3 }],
  "DT1": [{ id: "DT2", cost: 2 }],
  "DT2": [{ id: "DT1", cost: 2 }, { id: "DT3", cost: 2 }],
  "DT3": [{ id: "DT2", cost: 2 }, { id: "DT5", cost: 3 }],
  "DT5": [{ id: "DT3", cost: 3 }, { id: "DT6", cost: 2 }],
  "DT6": [{ id: "DT5", cost: 2 }, { id: "DT7", cost: 2 }],
  "DT7": [{ id: "DT6", cost: 2 }, { id: "DT8", cost: 2 }],
  "DT8": [{ id: "DT7", cost: 2 }, { id: "DT9", cost: 2 }],
  "DT9": [{ id: "DT8", cost: 2 }, { id: "DT10", cost: 2 }, { id: "CC19", cost: 5}],
  "DT10": [{ id: "DT9", cost: 2 }, { id: "DT11", cost: 2 }],
  "DT11": [{ id: "DT10", cost: 2 }, { id: "DT12", cost: 3 }, { id: "NE7", cost: 5 }],
  "DT12": [{ id: "DT11", cost: 3 }, { id: "DT13", cost: 1 }],
  "DT13": [{ id: "DT12", cost: 1 }, { id: "DT14", cost: 2 }],
  "DT14": [{ id: "DT13", cost: 2 }, { id: "DT15", cost: 2 }],
  "DT15": [{ id: "DT16", cost: 2 }, { id: "DT14", cost: 2 }, { id: "CC4", cost: 5 }],
  "DT16": [{ id: "DT15", cost: 2 }, { id: "DT17", cost: 1 }, { id: "CE1", cost: 5 }],
  "DT17": [{ id: "DT16", cost: 2 }, { id: "DT18", cost: 1 }],
  "DT18": [{ id: "DT17", cost: 1 }, { id: "DT19", cost: 2 }],
  "DT19": [{ id: "DT18", cost: 2 }, { id: "DT20", cost: 2 }, { id: "NE4", cost: 2 }],
  "DT20": [{ id: "DT19", cost: 2 }, { id: "DT21", cost: 2 }],
  "DT21": [{ id: "DT20", cost: 2 }, { id: "DT22", cost: 1 }],
  "DT22": [{ id: "DT21", cost: 1 }, { id: "DT23", cost: 2 }],
  "DT23": [{ id: "DT22", cost: 2 }, { id: "DT24", cost: 2 }],
  "DT24": [{ id: "DT23", cost: 2 }, { id: "DT25", cost: 2 }],
  "DT25": [{ id: "DT24", cost: 2 }, { id: "DT26", cost: 2 }],
  "DT26": [{ id: "DT25", cost: 2 }, { id: "DT27", cost: 2 }, { id: "CC10", cost: 5 }],
  "DT27": [{ id: "DT26", cost: 2 }, { id: "DT28", cost: 2 }],
  "DT28": [{ id: "DT27", cost: 2 }, { id: "DT29", cost: 2 }],
  "DT29": [{ id: "DT28", cost: 2 }, { id: "DT30", cost: 2 }],
  "DT30": [{ id: "DT29", cost: 2 }, { id: "DT31", cost: 3 }],
  "DT31": [{ id: "DT30", cost: 3 }, { id: "DT32", cost: 2 }],
  "DT32": [{ id: "DT31", cost: 2 }, { id: "DT33", cost: 2 }],
  "DT33": [{ id: "DT32", cost: 2 }, { id: "DT34", cost: 3 }],
  "DT34": [{ id: "DT33", cost: 3 }, { id: "DT35", cost: 2 }],
  "DT35": [{ id: "DT34", cost: 2 }],
  "CC1": [{ id: "CC2", cost: 2 }, { id: "NE6", cost: 5 }],
  "CC2": [{ id: "CC1", cost: 2 }, { id: "CC3", cost: 1 }],
  "CC3": [{ id: "CC2", cost: 1 }, { id: "CC4", cost: 2 }],
  "CC4": [{ id: "CC3", cost: 2 }, { id: "CC5", cost: 2 }, { id: "CE1", cost: 6 }, { id: "DT15", cost: 5 }],
  "CE1": [{ id: "CC4", cost: 6 }, { id: "CE2", cost: 2 }, { id: "DT16", cost: 5 }],
  "CE2": [{ id: "CE1", cost: 2 }],
  "CC5": [{ id: "CC4", cost: 2 }, { id: "CC6", cost: 3 }],
  "CC6": [{ id: "CC5", cost: 3 }, { id: "CC7", cost: 1 }],
  "CC7": [{ id: "CC6", cost: 1 }, { id: "CC8", cost: 2 }],
  "CC8": [{ id: "CC7", cost: 2 }, { id: "CC9", cost: 3 }],
  "CC9": [{ id: "CC8", cost: 3}, { id: "CC10", cost: 2 }],
  "CC10": [{ id: "CC9", cost: 2 }, { id: "CC11", cost: 2 }, { id: "DT26", cost: 5 }],
  "CC11": [{ id: "CC10", cost: 2 }, { id: "CC12", cost: 2 }],
  "CC12": [{ id: "CC11", cost: 2 }, { id: "CC13", cost: 3 }],
  "CC13": [{ id: "CC12", cost: 3 }, { id: "CC14", cost: 1 }, { id: "NE12", cost: 5 }],
  "CC14": [{ id: "CC13", cost: 1 }, { id: "CC15", cost: 3 }],
  "CC15": [{ id: "CC14", cost: 3 }, { id: "CC16", cost: 3 }],
  "CC16": [{ id: "CC15", cost: 3 }, { id: "CC17", cost: 2 }],
  "CC17": [{ id: "CC16", cost: 2 }, { id: "CC19", cost: 5 }],
  "CC19": [{ id: "CC17", cost: 5 }, { id: "CC20", cost: 2 }, { id: "DT9", cost: 5 }],
  "CC20": [{ id: "CC19", cost: 2 }, { id: "CC21", cost: 2 }],
  "CC21": [{ id: "CC20", cost: 2 }, { id: "CC22", cost: 3 }],
  "CC22": [{ id: "CC21", cost: 3 }, { id: "CC23", cost: 2 }],
  "CC23": [{ id: "CC22", cost: 2 }, { id: "CC24", cost: 1 }],
  "CC24": [{ id: "CC23", cost: 1 }, { id: "CC25", cost: 3 }],
  "CC25": [{ id: "CC24", cost: 3 }, { id: "CC26", cost: 2 }],
  "CC26": [{ id: "CC25", cost: 2 }, { id: "CC27", cost: 2 }],
  "CC27": [{ id: "CC26", cost: 2 }, { id: "CC28", cost: 2 }],
  "CC28": [{ id: "CC27", cost: 2 }, { id: "CC29", cost: 3 }],
  "CC29": [{ id: "CC28", cost: 3 }, { id: "NE1", cost: 5 }],
}

module.exports = { mrtStations, mrtStationsAdjacencyList };