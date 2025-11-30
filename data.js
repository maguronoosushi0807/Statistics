const setLists = {
  agriculture: [
    {index:"三大穀物"},
    {name: "米", id:"agriculture_rice"},
    {name: "小麦", id:"agriculture_wheat"},
    {name: "とうもころし", id:"agriculture_corn"},
    {index:"その他"},
    {name: "大豆", id:"agriculture_soybeans"},
    {name: "綿花", id:"menka"},
    {name: "農業(地中海)", id:"agriculture_mediterranean"},
    {name: "農業(その他)", id:"agriculture_others"},
    {index:"飲料"},
    {name: "茶", id:"agriculture_tea"},
    {name: "コーヒー", id:"agriculture_coffe"},
    {name: "カカオ豆", id:"agriculture_cacao"},
    {index:"畜産"},
    {name: "羊", id:"agriculture_sheep"},
    {name: "牛", id:"agriculture_cow"},
    {name: "豚", id:"agriculture_pig"},
    {name: "鶏", id:"agriculture_bird"},
    {index: "林業"},
    {name: "木材", id:"agriculture_wood"},
    {index: "水産業"},
    {name: "水産業", id:"agriculture_fish"},
    {index: "エネルギー"},
    {name: "石炭", id:"energy_coal"},
    {name: "原油", id:"energy_oil"},
    {name: "天然ガス", id:"energy_gas"},
    {name: "その他", id:"energy_other"},
    {index: "鉱業"},
    {name: "鉄", id:"mining_iron"},
    {name: "アルミニウム", id:"mining_alminium"},
    {name: "その他", id:"mining_others"},

    // {name: "", id:""},
    // {name: "dammy", id:"dammy"},
  ]
};

const problemSets = {
  agriculture_rice: [
    {
      title: "米の生産(2022)",
      unit: "万トン",
      rankings: [
        { country:"中国", value:20849},
        { country:"インド", value:19625},
        { country:"バングラデシュ", value:5719},
        { country:"インドネシア", value:5475},
        { country:"ベトナム", value:4267},
        /*
        { country:"タイ", value:3432},
        { country:"ミャンマー", value:2468},
        { country:"フィリピン", value:1976},
        { country:"カンボジア", value:1162},
        { country:"パキスタン", value:1098},
        */
      ],
    },
    {
      title: "米の輸出(2022)",
      unit: "万トン",
      rankings: [
        { country:"インド", value:2207},
        { country:"タイ", value:768},
        { country:"ベトナム", value:544},
        { country:"パキスタン", value:457},
        { country:"中国", value:218},
      ],
    },
    {
      title: "米の輸入(2022)",
      unit: "万トン",
      rankings: [
        { country:"中国", value:616},
        { country:"フィリピン", value:318},
        { country:"イラク", value:213},
        { country:"ペナン", value:158},
        { country:"コートジボワール", value:156},
      ],
    },
  ],
  agriculture_wheat: [
    {
      title: "小麦の生産(2022)",
      unit: "万トン",
      rankings: [
        { country:"中国", value:13772},
        { country:"インド", value:10774},
        { country:"ロシア", value:10423},
        { country:"アメリカ", value:4490},
        { country:"オーストラリア", value:3624},
        /*
        { country:"フランス", value:3463},
        { country:"カナダ", value:3433},
        { country:"パキスタン", value:2621},
        { country:"ドイツ", value:2259},
        { country:"アルゼンチン", value:2215},
        */
      ],
    },
    {
      title: "小麦の輸出(2022)",
      unit: "万トン",
      rankings: [
        { country:"オーストラリア", value:2878},
        { country:"アメリカ", value:2092},
        { country:"フランス", value:2015},
        { country:"カナダ", value:1855},
        { country:"ロシア", value:1783},
      ],
    },
    {
      title: "小麦の輸入(2022)",
      unit: "万トン",
      rankings: [
        { country:"中国", value:987},
        { country:"インドネシア", value:946},
        { country:"トルコ", value:891},
        { country:"エジプト", value:801},
        { country:"アルジェリア", value:702},
      ],
    },
  ],
  agriculture_corn: [
    {
      title: "とうもろこしの生産(2022)",
      unit: "万トン",
      rankings: [
        { country:"アメリカ", value:34875},
        { country:"中国", value:27720},
        { country:"ブラジル", value:10942},
        { country:"アルゼンチン", value:5904},
        { country:"インド", value:3373},
        /*
        { country:"メキシコ", value:2663},
        { country:"ウクライナ", value:2619},
        { country:"インドネシア", value:2356},
        { country:"南アフリカ", value:1614},
        { country:"ロシア", value:1586},
        */
      ],
    },
    {
      title: "とうもろこしの輸出(2022)",
      unit: "万トン",
      rankings: [
        { country:"アメリカ", value:5860},
        { country:"ブラジル", value:4339},
        { country:"アルゼンチン", value:3541},
        { country:"ウクライナ", value:2518},
        { country:"ルーマニア", value:554},
      ],
    },
    {
      title: "とうもろこしの輸入(2022)",
      unit: "万トン",
      rankings: [
        { country:"中国", value:2062},
        { country:"メキシコ", value:1626},
        { country:"日本", value:1527},
        { country:"韓国", value:1181},
        { country:"スペイン", value:1128},
      ],
    },
  ],
  agriculture_soybeans: [
    {
      title: "大豆の生産(2022)",
      unit: "万トン",
      rankings: [
        { country:"ブラジル", value:12070},
        { country:"アメリカ", value:11638},
        { country:"アルゼンチン", value:4386},
        { country:"中国", value:2028},
        { country:"インド", value:1299},
      ],
    },
    {
      title: "大豆の輸出(2022)",
      unit: "万トン",
      rankings: [
        { country:"ブラジル", value:7893},
        { country:"アメリカ", value:5733},
        { country:"アルゼンチン", value:520},
        { country:"カナダ", value:428},
        { country:"ウルグアイ", value:307},
      ],
    },
  ],
  agriculture_menka:[
    {
      title: "綿花の生産(2021)",
      unit: "万トン",
      rankings: [
        { country:"インド", value:599},
        { country:"中国", value:573},
        { country:"アメリカ", value:382},
        { country:"ブラジル", value:223},
        { country:"パキスタン", value:142},
      ],
    },
    {
      title: "綿花の輸出(2022)",
      unit: "万トン",
      rankings: [
        { country:"アメリカ", value:345},
        { country:"ブラジル", value:180},
        { country:"オーストラリア", value:112},
        { country:"インド", value:43},
        { country:"ペナン", value:32},
      ],
    },
    {
      title: "綿花の輸入(2022)",
      unit: "万トン",
      rankings: [
        { country:"中国", value:193},
        { country:"ベトナム", value:125},
        { country:"バングラデシュ", value:122},
        { country:"トルコ", value:115},
        { country:"パキスタン", value:78},
      ],
    },

  ],
  agriculture_mediterranean: [
    {
      title: "ぶどうの生産(2022)",
      unit: "万トン",
      rankings: [
        { country:"中国", value:1260},
        { country:"イタリア", value:844},
        { country:"フランス", value:620},
        { country:"スペイン", value:590},
        { country:"アメリカ", value:537},
      ],
    },
    {
      title: "オリーブの生産(2022)",
      unit: "千トン",
      rankings: [
        { country:"スペイン", value:3940},
        { country:"トルコ", value:2976},
        { country:"イタリア", value:2160},
        { country:"モロッコ", value:1968},
        { country:"チュニジア", value:1200},
      ],
    },
    {
      title: "ワインの生産(2022)",
      unit: "万トン",
      rankings: [
        { country:"イタリア", value:509},
        { country:"フランス", value:371},
        { country:"スペイン", value:370},
        { country:"アメリカ", value:206},
        { country:"中国", value:181},
      ],
    },
  ],
  agriculture_others: [
    {
      title: "ばれいしょ（じゃがいも）の生産(2022)",
      unit: "万トン",
      rankings: [
        { country:"中国", value:9557},
        { country:"インド", value:5618},
        { country:"ウクライナ", value:2090},
        { country:"ロシア", value:1889},
        { country:"アメリカ", value:1779},
      ],
    },
    {
      title: "キャッサバの生産(2022)",
      unit: "万トン",
      rankings: [
        { country:"ナイジェリア", value:6084},
        { country:"コンゴ民主", value:4877},
        { country:"タイ", value:3407},
        { country:"ガーナ", value:2559},
        { country:"カンボジア", value:1770},
      ],
    },
  ],
  agriculture_cacao: [
    {
      title: "カカオ豆の生産(2022)",
      unit: "千トン",
      rankings: [
        { country:"コートジボワール", value:2230},
        { country:"ガーナ", value:1109},
        { country:"インドネシア", value:667},
        { country:"エクアドル", value:337},
        { country:"カメルーン", value:300},
      ],
    },
  ],
  agriculture_tea: [
    {
      title: "茶の生産(2022)",
      unit: "千トン",
      rankings: [
        { country:"中国", value:14531},
        { country:"インド", value:5969},
        { country:"ケニア", value:2326},
        { country:"スリランカ", value:1400},
        { country:"トルコ", value:1300},
      ],
    },
    {
      title: "茶の輸出(2022)",
      unit: "千トン",
      rankings: [
        { country:"ケニア", value:552},
        { country:"中国", value:375},
        { country:"スリランカ", value:247},
        { country:"インド", value:231},
        { country:"アラブ首長", value:77},
      ],
    },
    {
      title: "茶の輸入(2022)",
      unit: "千トン",
      rankings: [
        { country:"パキスタン", value:252},
        { country:"ロシア", value:138},
        { country:"アメリカ", value:120},
        { country:"イギリス", value:117},
        { country:"エジプト", value:95},
      ],
    },
    {
      title: "茶の消費(2020~2022)",
      unit: "kg/人",
      rankings: [
        { country:"トルコ", value:3.11},
        { country:"リビア", value:2.07},
        { country:"モロッコ", value:2.02},
        { country:"香港", value:1.97},
        { country:"中国", value:1.86},
        /*
        { country:"アイルランド", value:1.78},
        { country:"カタール", value:1.60},
        { country:"イギリス", value:1.50},
        { country:"スリランカ", value:1.34},
        { country:"台湾", value:1.25},
        */

      ],
    },
  ],
  agriculture_coffe: [
    {
      title: "コーヒー豆の生産(2022)",
      unit: "千トン",
      rankings: [
        { country:"ブラジル", value:3173},
        { country:"ベトナム", value:1954},
        { country:"インドネシア", value:795},
        { country:"コロンビア", value:665},
        { country:"エチオピア", value:496},
      ],
    },
    {
      title: "コーヒー豆の輸出(2022)",
      unit: "千トン",
      rankings: [
        { country:"ブラジル", value:2132},
        { country:"ベトナム", value:1314},
        { country:"コロンビア", value:630},
        { country:"インドネシア", value:434},
        { country:"ドイツ", value:318},
      ],
    },
    {
      title: "コーヒー豆の輸入(2022)",
      unit: "千トン",
      rankings: [
        { country:"アメリカ", value:1513},
        { country:"ドイツ", value:1151},
        { country:"イタリア", value:674},
        { country:"日本", value:390},
        { country:"ベルギー", value:386},
      ],
    },
    {
      title: "コーヒーの消費(2021)",
      unit: "kg/人",
      rankings: [
        { country:"ルクセンブルク", value:24.10},
        { country:"フィンランド", value:10.20},
        { country:"スウェーデン", value:9.10},
        { country:"ノルウェー", value:8.30},
        { country:"スイス", value:7.80},
        /*
        { country:"オーストリア", value:7.70},
        { country:"ブラジル", value:6.35},
        { country:"ドイツ", value:6.00},
        { country:"イギリス", value:2.30},
        */
      ],
    },
  ],
  agriculture_cow: [
    {
      title: "牛の頭数(2022)",
      unit: "万頭",
      rankings: [
        { country:"ブラジル", value:23435},
        { country:"インド", value:19361},
        { country:"アメリカ", value:9208},
        { country:"エチオピア", value:6796},
        { country:"中国", value:6123},
      ],
    },
    {
      title: "牛肉の生産(2022)",
      unit: "万トン",
      rankings: [
        { country:"アメリカ", value:1289},
        { country:"ブラジル", value:1035},
        { country:"中国", value:718},
        { country:"アルゼンチン", value:313},
        { country:"メキシコ", value:218},
      ],
    },
    {
      title: "牛肉の輸出(2022)",
      unit: "万トン",
      rankings: [
        { country:"ブラジル", value:198},
        { country:"アメリカ", value:97},
        { country:"オーストラリア", value:82},
        { country:"アルゼンチン", value:53},
        { country:"ニュージーランド", value:40},
      ],
    },
    {
      title: "牛肉の輸入(2022)",
      unit: "万トン",
      rankings: [
        { country:"中国", value:226},
        { country:"アメリカ", value:95},
        { country:"日本", value:56},
        { country:"韓国", value:32},
        { country:"チリ", value:26},
      ],
    },

  ],
  agriculture_pig: [
    
    {
      title: "豚の頭数(2022)",
      unit: "万頭",
      rankings: [
        { country:"中国", value:45256},
        { country:"アメリカ", value:7440},
        { country:"ブラジル", value:4439},
        { country:"スペイン", value:3407},
        { country:"ロシア", value:2619},
      ],
    },
    {
      title: "豚肉の生産(2022)",
      unit: "万トン",
      rankings: [
        { country:"中国", value:5541},
        { country:"アメリカ", value:1225},
        { country:"ブラジル", value:519},
        { country:"スペイン", value:507},
        { country:"ロシア", value:453},
      ],
    }
  ],
  agriculture_bird: [
    
    {
      title: "鶏肉の生産(2022)",
      unit: "万トン",
      rankings: [
        { country:"アメリカ", value:1960},
        { country:"ブラジル", value:1452},
        { country:"中国", value:1430},
        { country:"ロシア", value:531},
        { country:"インド", value:491},
      ],
    },
  ],
  agriculture_sheep: [
    {
      title: "羊の頭数(2022)",
      unit: "万頭",
      rankings: [
        { country:"中国", value:19403},
        { country:"インド", value:7535},
        { country:"オーストラリア", value:7023},
        { country:"イラン", value:5558},
        { country:"ナイジェリア", value:5028},
      ],
    },
    {
      title: "羊毛の生産(2022)",
      unit: "千トン",
      rankings: [
        { country:"中国", value:356},
        { country:"オーストラリア", value:328},
        { country:"ニュージーランド", value:127},
        { country:"トルコ", value:85},
        { country:"イギリス", value:72},
      ],
    },
  ],
  agriculture_wood: [
    {
      title: "木材伐採量(2022)",
      unit: "百万㎡",
      rankings: [
        { country:"アメリカ", value:459},
        { country:"インド", value:348},
        { country:"中国", value:317},
        { country:"ブラジル", value:304},
        { country:"ロシア", value:197},
      ],
    },
    {
      title: "木材の輸出(2022)",
      unit: "万㎡",
      rankings: [
        { country:"カナダ", value:2846},
        { country:"ロシア", value:2744},
        { country:"ドイツ", value:2160},
        { country:"ニュージーランド", value:2158},
        { country:"スウェーデン", value:1609},
      ],
    },
    {
      title: "木材の輸入(2022)",
      unit: "万㎡",
      rankings: [
        { country:"中国", value:7009},
        { country:"アメリカ", value:2802},
        { country:"オーストリア", value:1070},
        { country:"ドイツ", value:1004},
        { country:"イタリア", value:967},
      ],
    },
    {
      title: "日本の木材輸入先(2023)",
      unit: "億円",
      rankings: [
        { country:"カナダ", value:698},
        { country:"アメリカ", value:650},
        { country:"スウェーデン", value:268},
        { country:"フィンランド", value:259},
        { country:"ロシア", value:255},
      ],
    },
  ],
  agriculture_fish: [
    {
      title: "漁獲量+養殖業の生産量(2022)",
      unit: "万トン",
      rankings: [
        { country: "中国", value: 8857 },
        { country: "インドネシア", value: 2203 },
        { country: "インド", value: 1577 },
        { country: "ベトナム", value: 876 },
        { country: "ペルー", value: 551 }
      ]
    },
    {
      title: "日本のエビの輸入先(2023)",
      unit: "億円",
      rankings: [
        { country:"インド", value:395},
        { country:"ベトナム", value:364},
        { country:"インドネシア", value:329},
        { country:"アルゼンチン", value:176},
        { country:"タイ", value:110},
      ],
    },
  ],
  energy_coal: [
    {
      title: "石炭の埋蔵量(2020)",
      unit: "億トン",
      rankings: [
        { country:"アメリカ", value:2189},
        { country:"中国", value:1351},
        { country:"インド", value:1060},
        { country:"オーストラリア", value:737},
        { country:"ロシア", value:717},
      ],
    },
    {
      title: "石炭の産出量(2021)",
      unit: "万トン",
      rankings: [
        { country:"中国", value:412583},
        { country:"インド", value:77819},
        { country:"インドネシア", value:59584},
        { country:"オーストラリア", value:39401},
        { country:"ロシア", value:35686},
      ],
    },
    {
      title: "石炭の輸出量(2021)",
      unit: "万トン",
      rankings: [
        { country:"インドネシア", value:42046},
        { country:"オーストラリア", value:36451},
        { country:"ロシア", value:19779},
        { country:"アメリカ", value:7137},
        { country:"南アフリカ", value:6356},
      ],
    },
    {
      title: "石炭の輸入量(2021)",
      unit: "万トン",
      rankings: [
        { country:"中国", value:32327},
        { country:"インド", value:20893},
        { country:"日本", value:18395},
        { country:"韓国", value:11730},
        { country:"ドイツ", value:3842},
      ],
    },
  ],
  energy_oil: [
    {
      title: "原油埋蔵量(2020)",
      unit: "億トン",
      rankings: [
        { country:"ベネズエラ", value:480},
        { country:"サウジアラビア", value:409},
        { country:"カナダ", value:271},
        { country:"イラン", value:217},
        { country:"イラク", value:196},
      ],
    },
    {
      title: "原油産出量(2022)",
      unit: "万トン",
      rankings: [
        { country:"アメリカ", value:58632},
        { country:"サウジアラビア", value:52318},
        { country:"ロシア", value:50334},
        { country:"イラク", value:21839},
        { country:"中国", value:20472},
      ],
    },
    {
      title: "原油の輸出量(2021)",
      unit: "万トン",
      rankings: [
        { country:"サウジアラビア", value:30943},
        { country:"ロシア", value:23271},
        { country:"イラク", value:16897},
        { country:"カナダ", value:15788},
        { country:"アメリカ", value:14600},
      ],
    },
    {
      title: "原油の輸入量(2021)",
      unit: "万トン",
      rankings: [
        { country:"中国", value:51292},
        { country:"アメリカ", value:30236},
        { country:"インド", value:21198},
        { country:"韓国", value:12941},
        { country:"日本", value:12652},
      ],
    },
    {
      title: "日本の原油輸入先(2023)",
      unit: "千kL",
      rankings: [
        { country:"サウジアラビア", value:60689},
        { country:"アラブ首長国", value:58605},
        { country:"クウェート", value:13348},
        { country:"カタール", value:7271},
        { country:"アメリカ", value:2879},
      ],
    },
  ],
  energy_gas: [
    {
      title: "天然ガスの埋蔵量(2020)",
      unit: "百億㎥",
      rankings: [
        { country:"ロシア", value:3739},
        { country:"イラン", value:3210},
        { country:"カタール", value:2467},
        { country:"トルクメニスタン", value:1360},
        { country:"アメリカ", value:1262},
      ],
    },
    {
      title: "天然ガスの産出量(2022)",
      unit: "億㎥",
      rankings: [
        { country:"アメリカ", value:10300},
        { country:"ロシア", value:6890},
        { country:"イラン", value:2662},
        { country:"中国", value:2201},
        { country:"カナダ", value:2033},
      ],
    },
    {
      title: "天然ガスの輸出量(2022)",
      unit: "億㎥",
      rankings: [
        { country:"アメリカ", value:1955},
        { country:"ロシア", value:1680},
        { country:"カタール", value:1261},
        { country:"ノルウェー", value:1237},
        { country:"オーストラリア", value:1129},
      ],
    },
    {
      title: "天然ガスの輸入量(2022)",
      unit: "億㎥",
      rankings: [
        { country:"中国", value:1412},
        { country:"日本", value:938},
        { country:"ドイツ", value:877},
        { country:"アメリカ", value:856},
        { country:"イタリア", value:726},
      ],
    },
  ],
  energy_other: [
    {
      title: "液体バイオ燃料の生産量(2022)",
      unit: "万トン",
      rankings: [
        { country:"アメリカ", value:5674},
        { country:"ブラジル", value:3054},
        { country:"インドネシア", value:970},
        { country:"中国", value:517},
        { country:"ドイツ", value:401},
      ],
    },
    {
      title: "発電量(2022)",
      unit: "億kWh",
      rankings: [
        { country:"中国", value:89506},
        { country:"アメリカ", value:44954},
        { country:"インド", value:18141},
        { country:"ロシア", value:11512},
        { country:"日本", value:10186},
      ],
    },

  ],
  mining_iron:[
    {
      title: "鉄鉱石の産出量(2021)",
      unit: "万トン",
      rankings: [
        { country:"オーストラリア", value:56503},
        { country:"ブラジル", value:27286},
        { country:"中国", value:24600},
        { country:"インド", value:16900},
        { country:"ロシア", value:6670},
      ],
    },
    {
      title: "銑鉄の生産(2022)",
      unit: "万トン",
      rankings: [
        { country:"中国", value:86383},
        { country:"インド", value:7986},
        { country:"日本", value:6415},
        { country:"ロシア", value:5161},
        { country:"韓国", value:4220},
      ],
    },
    {
      title: "粗鋼の生産(2023)",
      unit: "万トン",
      rankings: [
        { country:"中国", value:101908},
        { country:"インド", value:14076},
        { country:"日本", value:8700},
        { country:"アメリカ", value:8139},
        { country:"ロシア", value:7603},
      ],
    },
    {
      title: "鉄鋼の輸出(2022)",
      unit: "万トン",
      rankings: [
        { country:"中国", value:7648},
        { country:"日本", value:3230},
        { country:"韓国", value:2616},
        { country:"ドイツ", value:2453},
        { country:"イタリア", value:1695},
      ],
    },
    {
      title: "鉄鋼の輸入(2023)",
      unit: "万トン",
      rankings: [
        { country:"アメリカ", value:4169},
        { country:"中国", value:2781},
        { country:"ドイツ", value:2610},
        { country:"イタリア", value:2375},
        { country:"韓国", value:1568},
      ],
    },
    {
      title: "鉄鋼の消費",
      unit: "万トン",
      rankings: [
        { country:"中国", value:92565},
        { country:"インド", value:11616},
        { country:"アメリカ", value:9453},
        { country:"日本", value:5498},
        { country:"韓国", value:5130},
      ],
    },
    // {
    //   title: "鉄鉱石の埋蔵量(2023)",
    //   unit: "億トン",
    //   rankings: [
    //     { country:"オーストラリア", value:270},
    //     { country:"ブラジル", value:150},
    //     { country:"ロシア", value:140},
    //     { country:"中国", value:69},
    //     { country:"インド", value:34},
    //   ],
    // },
    // {
    //   title: "鉄鉱石の輸出量(2022)",
    //   unit: "万トン",
    //   rankings: [
    //     { country:"", value:88798},
    //     { country:"", value:34618},
    //     { country:"", value:5831},
    //     { country:"", value:5374},
    //     { country:"", value:2399},
    //   ],
    // },
  ],
  mining_alminium:[
    {
      title: "ボーキサイトの産出(2021)",
      unit: "万トン",
      rankings: [
        { country:"オーストラリア", value:10306},
        { country:"中国", value:9000},
        { country:"ギニア", value:8600},
        { country:"ブラジル", value:3300},
        { country:"インドネシア", value:2100},
      ],
    },
    {
      title: "アルミニウムの生産(2021)",
      unit: "千トン",
      rankings: [
        { country:"中国", value:38900},
        { country:"インド", value:3967},
        { country:"ロシア", value:3640},
        { country:"カナダ", value:3137},
        { country:"アラブ首長国", value:2540},
      ],
    },
    {
      title: "アルミニウムの輸出(2021)",
      unit: "千トン",
      rankings: [
        { country:"ロシア", value:3481},
        { country:"カナダ", value:2777},
        { country:"オランダ", value:2693},
        { country:"インド", value:2668},
        { country:"アラブ首長国", value:2645},
      ],
    },
    {
      title: "アルミニウムの輸入(2021)",
      unit: "千トン",
      rankings: [
        { country:"アメリカ", value:3980},
        { country:"中国", value:2734},
        { country:"日本", value:2537},
        { country:"オランダ", value:2503},
        { country:"ドイツ", value:2350},
      ],
    },
  ],
  mining_others:[
    {
      title: "銅鉱の産出(2020)",
      unit: "万トン",
      rankings: [
        { country:"チリ", value:573.3},
        { country:"ペルー", value:215.4},
        { country:"中国", value:172.3},
        { country:"コンゴ民主", value:160.2},
        { country:"アメリカ", value:120.0},
      ],
    },
    {
      title: "金鉱の産出(2022)",
      unit: "トン",
      rankings: [
        { country:"中国", value:372},
        { country:"オーストラリア", value:314},
        { country:"ロシア", value:310},
        { country:"カナダ", value:206},
        { country:"アメリカ", value:173},
      ],
    },

  ],
  dammy: [
    {
      title: "dammy",
      unit: "dammy",
      rankings:[
        {country: "dammy_1", value: -1},
        {country: "dammy_2", value: -2},
        {country: "dammy_3", value: -3},
        {country: "dammy_4", value: -4},
        {country: "dammy_5", value: -5},
      ]
    }
  ]
};

/*


    {
      title: "",
      unit: "",
      rankings: [
        { country:"", value:},
        { country:"", value:},
        { country:"", value:},
        { country:"", value:},
        { country:"", value:},
      ],
    },
      
    */