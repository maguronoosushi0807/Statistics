const setLists = {
  agriculture: [
    {name: "米", id:"agriculture_rice"},
    {name: "小麦", id:"agriculture_wheat"},
    {name: "とうもころし", id:"agriculture_corn"},
    {name: "大豆", id:"agriculture_soybeans"},
    {name: "地中海の作物", id:"agriculture_mediterranean"},
    {name: "その他の作物", id:"agriculture_others"},
    {name: "コーヒー", id:"agriculture_coffe"},
    {name: "カカオ豆", id:"agriculture_cacao"},
    {name: "茶", id:"agriculture_tea"},
    {name: "牛", id:"agriculture_cow"},
    {name: "豚", id:"agriculture_pig"},
    {name: "羊", id:"agriculture_sheep"},
    {name: "鶏", id:"agriculture_bird"},
    {name: "dammy", id:"dammy"},
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
  agriculture_9: [
    {
      title: "漁獲量",
      unit: "千トン",
      rankings: [
        { country: "中国", value: 65000 },
        { country: "インドネシア", value: 22000 },
        { country: "ペルー", value: 17000 },
        { country: "ロシア", value: 16000 },
        { country: "アメリカ", value: 11000 }
      ]
    }
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