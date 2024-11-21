const menu = [

  {
    category: "ENTRÉES",
    description:
      "De délicieux hors-d'œuvre pour commencer votre repas, avec une variété d'options fraîches et savoureuses.",
  },

  {
    category: "SALADS",
    description:
      "Des salades fraîches et savoureuses pour accompagner votre repas.",
    items: [
      {
        name: "SALADE AU POULET",
        description:
          "Salade verte, poulet,concombre, tomate, coriandre fraîches",
        price: 7.00
      },
      {
        name: "RAITA",
        description:
          "Yaourt nature avec concombre, tomate, carotte râpéé coriandre fraîches",
        price: 5.00
      },
      {
        name: "ALLO RAITA",
        description: "Yaourt nature avec pomme de terre",
        price: 5.00
      },
      {
        name: "SALADE INDIENNE",
        description:
          "Salade verte, concombre, tomate,poivrons, carottes, mais",
        price: 7.00
      },
      {
        name: "SALADE POISSON",
        description:
          "Salade verte, poissan,concombre, tomate, coriandre",
        price: 7.00
      },
      {
        name: "PRAWNS CHAT",
        description:
          "Crevettes macérées dans du jus de citron vert et salade composée tomate,concombre, pommes et herbes fraîches",
        price: 8.50
      }
    ]
  },
  {
    category: "SOUPES",
    description:
      "Une sélection de soupes réconfortantes, parfaites pour un début de repas léger mais satisfaisant.",
    items: [
      {
        name: "RASAM SOUPE",
        description: "Soupe de lentilles, carottes, céleri",
        price: 6.50
      },
      {
        name: "CHICKEN SOUPE",
        description: "Soupe de poulet parfumée au gingembre",
        price: 7.50
      }
    ]
  },

  {
    category: "KEBABE BAHAR-GRILL",
    description:
      "SPÉCIALITÉS TANDOORI",
    items: [
      {
        name: "MUTTON TIKKA",
        description: "Brochettes d'agneau macérées dans du yaourt, jus de citron, ail, gingembre",
        price: 9.50
      },
      {
        name: "RASHMI KABAB",
        description: "Blanc de poulet haché préparé à la coriandre, servis avec une herbe indienne présenté sous forme de saucisses grillées",
        price: 7.00
      },
      {
        name: "SHEAK KABAB",
        description:
          "Palets de viande d'agneau hachés épice avec gingembre. herbes fraîches",
        price: 7.50
      },
      {
        name: "MURGHI TIKKA",
        description:
          "Morceaux de poulet aux herbes fraîchess, grillés au tandoor",
        price: 8.50
      },
      {
        name: "SAUMON TIKKA",
        description: "Saumon mariné, sauce à la crème, jus de citron vert",
        price: 12.00
      },
      {
        name: "CHICKEN TANDOORI",
        description: "Poulet grillé aromatisé d'herbes fraîchess",
        price: 8.00
      },
      {
        name: "GAMBAS TANDOORI",
        description: "Gambas grillées aux herbes fraîches (6 pcs)",
        price: 16.00
      },
      {
        name: "BARA KEBAB",
        description: "Jarret d'agneau grillé au tandoor, épices, herbes fraîches",
        price: 9.00
      },
      {
        name: "BATERA TANDOORI",
        description: "Cailles entières grillé, sauce au yaourt et épices indiennes",
        price: 10.50
      },
      {
        name: "MIXTE GRILL (1 pers)",
        description:
          "Morceaux de poulet, agneau, gambas,kebab cuits au tandoor avec beignets de légumes",
        price: 12.00
      },
      {
        name: "MIXTE GRILL (2 pers)",
        description:
          "Morceaux de poulet, agneau, gambas,kebab cuits au tandoor avec beignets de légumes",
        price: 22.00
      }
    ]
  },
  
  {
    category: "PAKORA (BEIGNETS)",
    description:
      "Des beignets croustillants et frits qui constituent une collation ou un apéritif parfait.",
    items: [
      {
        name: "ONION BHAJI",
        description: "Beignets d'oignons",
        price: 4.50
      },
      {
        name: "CREVETTES PAKORA",
        description: "Marceaux de crevettes gratinées (beignets de crevettes)",
        price: 9.00
      },
      {
        name: "SAMOSA DE VIANDE",
        description: "Chausson de viande d'agneau hachée, avec petits pois",
        price: 6.00
      },
      {
        name: "SAMOSA VEGETABLE",
        description: "Ehausson de légumes, pommes de terre et petits pois, raisins secs et noix de eajou",
        price: 5.00
      },
      {
        name: "MIXED PAKORA",
        description:
          "Beignets d'aubergine, pommes de terre, chou-fleur, oignons ",
        price: 7.50
      },
      {
        name: "ALLO PAKORA",
        description: "Beignets de pomme de terre",
        price: 6.50
      },
      {
        name: "FISH PAKORA",
        description: "Beignets de poisson",
        price: 8.00
      },
      {
        name: "VEG SPRING ROLL",
        description: "Chou blanc, carottes, légumes, épices indienne",
        price: 5.50
      }
    ]
  },
  {
    category: "PLATS POULET",
    description:
      "LES PLATS SONT SERVIS SANS RIZ",
    items: [
      {
        name: "MURGHI SHAI KORMA",
        description: "Spécialité du chef Poulet à la sauce noix de cajou amandes, crème fraîches et raisin secs",
        price: 13.00
      },
      {
        name: "MURGHI PISTESHEWALA",
        description: "Morceaux de poulet aux pistaches fraîches",
        price: 12.00
      },
      {
        name: "MURGI TIKKA MASALA",
        description: "Poulet grillé au four tandoor, sauce au curry, créme fraîches",
        price: 13.00
      },
      {
        name: "BUTTER CHICKEN",
        description:
          "Poulet au curry avec sauce créme beurre, épices indienne",
        price: 13.00
      },
      {
        name: "MURGHI VINDALLO",
        description: "Poulet au curry, pommes de terre, herbes indienne (relevé)",
        price: 12.00
      },
      {
        name: "MURGHI MASALA",
        description:
          "Poulet au curry, poivrons, tomates, petits pois, meyennement relevé",
        price: 12.00
      },
      {
        name: "MURGHI MUGHLAI",
        description: "Poulet au curry à la crème et aux oeufs",
        price: 12.00
      },
      {
        name: "MURGHI SAAGWALA",
        description: "Poulet au curry avec épinard",
        price: 12.00
      },
      {
        name: "MURGHI CURRY",
        description: "Poulet sauce curry coriandre fraîches",
        price: 11.00
      },
      {
        name: "MURGHI BAIGAN",
        description: "Poulet curry avec des aubergines, coriandre, crème fraîches",
        price: 12.00
      }
    ]
  },

  {
    category: "PLATS AGNEAU",
    description:
      "Plats d'agneau exquis cuits à la perfection avec des épices traditionnelles et des saveurs riches.",
    items: [
      {
        name: "GHOST MASALA",
        description: "Agneau au curry, poivrons, tomates, petits pois (moyennement relevé)",
        price: 13.00
      },
      {
        name: "GHOST TIKKA MASALA",
        description: "Agneau grillé au four tandoor, sauce au curry",
        price: 13.00
      },
      {
        name: "GHOST SHAI KORMA",
        description:
          "Spécialité du chef. Agneau sauce de noix de cajou, amandes, crème fraîches et raisins secs",
        price: 13.00
      },
      {
        name: "GHOST SAAGWALA",
        description: "Agneau au curry avec des épinards (moyennement relevé)",
        price: 12.50
      },
      {
        name: "GHOST RADA KHUMBE",
        description:
          "Agneau au curry, feuillus de fenouil, coriandre, ail, gingembre et champignons frais",
        price: 13.00
      },
      {
        name: "GHOST VINDALOO",
        description: "Agneau au curry, pommes de terre, herbes fralches, épices indiennes",
        price: 13.00
      },
      {
        name: "GHOST MILANE",
        description:
          "Morceau choisis d'agneau, épice, sauce tomate et amandes (releve)",
        price: 13.00
      },
      {
        name: "GHOST BAIGAN",
        description:
          "Agneau sauce curry avec des aubergines, coriandre, crème fraîche",
        price: 13.00
      },
      {
        name: "GHOST CURRY",
        description: "Agneau sauce curry, coriandre fraîche",
        price: 12.00
      }
    ]
  },

  {
    category: "MASHLI YA JHINGHA",
    description:
      "SPÉCIALITÉS DE POISSON ET CRUSTACÉS",
    items: [
      {
        name: "FISH CURRY",
        description: "Poisson sauce curry, coriandre fraîche",
        price: 11.50
      },
      {
        name: "MASHLI MASALA",
        description: "Spécialité de Calcutta. Filet de poisson au curry, tomate, poivron vert, ail, gingembre, cumin, coriandre fraîche",
        price: 12.50
      },
      {
        name: "MASHLI MALABARI",
        description: "Spécialité du chef. Poisson, sauce au fromage et curry",
        price: 12.50
      },
      {
        name: "SAUMON TIKKA MASALA",
        description: "Filet de saumon au curry, herbes indiennes",
        price: 14.50
      },
      {
        name: "PRAWNS MADRAS",
        description: "Spécialité du sud. Crevettes au curry (épicé)",
        price: 13.00
      },
      {
        name: "PRAWNS MASALA",
        description: "Crevettes au curry moyennement épicées, poivron, tomate, petits pois, herbes fraîchess",
        price: 13.00
      },
      {
        name: "JHINGHA KORMA",
        description: "Spécialité du chef. Gambas préparées à la crème de noix de cajou, raisins secs, cumin, ail, gingembre (peu relevé)",
        price: 18.00
      },
      {
        name: "JHINGHA CURRY",
        description: "Gambas accomodées à la sauce curry (moyennement relevé)",
        price: 16.00
      },
    ]
  },

  {
    category: "RIZ BASMATI",
    description:
      "Special Rice",
    items: [
      {
        name: "RIZ PULAO",
        description: "Riz à la graine de cumin et cardamone",
        price: 4.00
      },
      {
        name: "KASHMIRI PULAO",
        description: "Riz à la cannelle, tomates, graines de cumin, fruits secs",
        price: 5.00
      },
      {
        name: "GREEN PEAS PULAO",
        description: "Riz avec petits pois et coriandre fraîche",
        price: 4.50
      },
      {
        name: "EGG RICE",
        description: "Graines de cumin, oeuf, coriandre fraîche",
        price: 5.00
      }
    ]
  },

  {
    category: "SUBZ BAHAR",
    description:
      "LÉGUMES",
    items: [
      {
        name: "KHUMBI BHAJEE",
        description: "Chapignons frais, oignons, petits pois, coriandre fraîche",
        price: 8.50
      },
      {
        name: "VEGETABLE KORMA",
        description: "Légumes variés, crème fraîche, amandes, ail, gingembre, herbes fraîches (peu relevé)",
        price: 9.00
      },
      {
        name: "DALL TARKA",
        description: "Lentilles accommodées aux herbes et aromate de l'Inde",
        price: 8.50
      },
      {
        name: "PALAK PANNER",
        description: "Épinards fromage maison, sauce aux épices et aux herbes (peu relevé)",
        price: 9.00
      },
      {
        name: "ALLO PALAK",
        description: "Épinards préparés avec des pommes de terre aux herbes",
        price: 9.00
      },
      {
        name: "RAITA",
        description: "Yaourt aux carottes, concombre, coriandre, tomate",
        price: 5.50
      },
      {
        name: "BAIGAN BARTHA",
        description: "Aubergines, crème fraîche, sauce aux épices et herbes (peu relevé)",
        price: 9.00
      },
      {
        name: "ALLO MATAR",
        description: "Pommes de terre, petits pois, sauce curry",
        price: 8.50
      },
      {
        name: "BOMBAY ALLO",
        description: "Pommes de terre frites, crème fraîche, sauce riche en épices, coriandre fraîche",
        price: 8.50
      }
    ]
  },

  {
    category: "SHAHI",
    description:
      "PAINS TANDOORI",
    items: [
      {
        name: "NAN",
        description: "Pain à la farine de froment",
        price: 3.00
      },
      {
        name: "PANEER NAN",
        description: "Pain au fromage",
        price: 3.50
      },
      {
        name: "MASALA KULCHA",
        description: "Pain aromatisé aux légumes",
        price: 4.00
      },
      {
        name: "KEEMA NAN",
        description: "Pain fourré à la viande haché d'agneau",
        price: 4.00
      },
      {
        name: "TANDOORI PARATHA",
        description: "Galette à base de farine de froment et beurre",
        price: 3.50
      },
      {
        name: "ROTI",
        description: "Galette",
        price: 2.50
      },
      {
        name: "GARLIC NAN",
        description: "Pain à l'ail",
        price: 3.50
      },
      {
        name: "MIX NAN",
        description: "Pain au fromage et à l’ail",
        price: 4.00
      }
    ]
  },

  {
    category: "BIRYANI",
    description:
      "LE BIRYANI EST LE PLAT MAGHLAI COMPOSÉ DE RIZ BASMATI, ACCOMODÉ SOIT DE VIANDE EPICEE (AGNEAU OU POULET), DE CREVETTES OU DE LEGUMES SERVI AVEC RAITA",
    items: [
      {
        name: "GHOST BIRYANI",
        description: "Agneau",
        price: 14.50
      },
      {
        name: "MURGH BIRYANI",
        description: "Poulet",
        price: 13.50
      },
      {
        name: "VEGETABLE BIRYANI",
        description: "Légumes",
        price: 12.50
      },
      {
        name: "JHINGHA BIRYANI",
        description: "Crevettes",
        price: 14.50
      },
      {
        name: "MIXTE BIRYANI",
        description: "Poulet, agneau, crevettes, légumes",
        price: 15.00
      }
    ]
  },

  {
    category: "PLATS DE NOUILLES",
    description:
      "NOUILLES SAUTÉES AVEC SAUCE AU CURRY ET ÉPICES INDIENNES",
    items: [
      {
        name: "POULET OU AGNEAU",
        description: "...................",
        price: 14.00
      },
      {
        name: "CREVETTE",
        description: "...................",
        price: 15.00
      },
      {
        name: "LÉGUMES VARIÉS",
        description: "...................",
        price: 13.00
      }
    ]
  },

  {
    category: "DESSERTS",
    description:
      "Que diriez-vous d'un peu de douceur ?",
    items: [
      {
        name: "HALWA",
        description: "Gâteau de semoule, sucre, beurre, lait, cardamone, noix de coco",
        price: 4.00
      },
      {
        name: "GULAB JAMUN",
        description: "Boule préparée à base de lait parfumé à la rose",
        price: 5.00
      },
      {
        name: "KULFI PISTACHE",
        description: "Glace maison parfumée à la cardamone avec amandes et pistaches",
        price: 5.50
      },
      {
        name: "MANGO KULFI",
        description: "Glace maison parfumée à la mangue fraîches",
        price: 6.00
      },
      {
        name: "SORBET EXOTIQUE ET GLACE",
        description: "2 Boules au choix Noix de coco, fruits de la passion, mangue, citron, fraise, vanille ou chocolat",
        price: 5.50
      },
      {
        name: "MANGO ICE CREAM",
        description: "Boule de glace vanille avec coulis de mangue fraîche",
        price: 5.00
      },
      {
        name: "SALADE DE FRUITS",
        description: "Servie avec un coulis de mangue fraîche",
        price: 6.00
      },
      {
        name: "MIX KULFI",
        description: "Glace maison parfumée mangue et pistaches",
        price: 6.00
      },
    ]
  }
];
export default menu;

export const specialMenu = [
  {
    name: "MENU ENFANT 11,00",
    description:
      "Salade + Poulet grillé + Riz + Allo Pakora +Nan fromage + GLACE",
    price: 11.00,
  },
  {
    name: "MENU EXPRESS 12,00",
    description:
      "(Sauf dimanche et jours fériés). Tous ces plats sont servis avec une galette maison (nan ou panner nan) et du riz basmati.",
    price: 12.00,
    items: [
      {
        PLATS: [
          {
            name: "Chicken Tandoori",
            description:
              "Poulet mariné et grillé aux herbesfraîches, cuit au tandoor"
          },
          {
            name: "Mixed Pakora",
            description: "Beignet de pommed de terre etoignon"
          },
          {
            name: "Prawns Chaat",
            description:
              " Crevettes macérées dans un jus de citron vertgarnies d'une salade composée (tomate,concombre, pommes) et herbes fraîches"
          },
          {
            name: "Chicken Curry",
            description:
              "2 Boules au choix Noix de coco, fruits de lapassion, mangue, citron, fraise, vanille ouchocolat"
          }
        ],
        DESSERT: [
          {
            name: "HALWA",
            description:
              "Gâteau de semoule : sucre, beurre,lait, amandes, cardamone, noix de"
          }
        ]
      }
    ]
  },
  {
    name: "MENU 20,00",
    description:
      "Toutes nos entrées sont servies avec une de nos galettes maison (nan ou nan fromage)",
    price: 20.00,
    items: [
      {
        ENTRÉES: [
          {
            name: "RESHMI KABAB",
            description:
              "Blanc de poulet haché, coriandre, présenté sous forme de saucisses grillées"
          },
          {
            name: "SAMOSA VEGETABLE",
            description: "Chausson delegtumes"
          },
          {
            name: "PYAJ PKADRA",
            description: "Oignon servi en lamelles"
          },
          {
            name: "RAITA",
            description: "Yaourt aux crudités et épices"
          }
        ],
        Plats: [
          {
            name: "CHICKEN CURRY",
            description: "Poulet au curry, herbes et,epices"
          },
          {
            name: "FISH CURRY",
            description: "Fllets de poisson au curry, herbes etépices"
          },
          {
            name: "VEGETABLE CURRY",
            description: "Variété de légumes au curry"
          },
          {
            name: "DALL MAKHNI",
            description: "Lentilles au curry et beurre"
          }
        ],
        Desset: [
          {
            name: "HALWA ",
            description:
              " Gâteau de semoule : sucre, beurre,lait, amandes, cardamone, noix de coco "
          },
          {
            name: "MANGO ICE CREAM ",
            description:
              " Boule de glace à la vanille et coulisde mangue fraîche "
          }
        ]
      }
    ]
  },
  {
    name: "MENU 23,00",
    description:
      "Tous nos plats sont servis avec une de nos galettes maison (nan ou nan fromage)",
    price: 23.00,
    items: [
      {
        ENTRÉES: [
          {
            name: "PRAWNS CHAT ",
            description:
              " Crevettes macérées dan ils de citron vert,garies une salade composée (tomate,concombre, pommes) et herbes fraiches "
          },
          {
            name: "CHICKEN TANDOORI ",
            description: " Poulet mariné grilé cuit au tandor etherbes fraiche "
          },
          {
            name: "SAMOSA DE VIANDE ",
            description: " Chausson de viande d agneau hachéeavec petts pois "
          },
          {
            name: "BAIGAN BHARTA ",
            description:
              " Aubergines grillée au tandor, réparéesavec tomate, oignons et crème fraîche "
          }
        ],
        Plats: [
          {
            name: "CHICKEN BADAMI ",
            description:
              "Morceaux de poulet accammodés à lacrème fraîche et de noix de cajou. amandes, all, gingembre et herbes indienne "
          },
          {
            name: "ROGAN JOSH ",
            description:
              " Agneau au cury assaisonné d'une sauceriche en épices et herbes indienne "
          },

          {
            name: "FISH BANGALI(SELON ARRIVAGE) ",
            description:
              "Poisson au curry avec piments verts,oignon, coriandre, farine de pois chicheet jus de citron vert "
          },
          {
            name: "VEGETABLE KORMA ",
            description:
              "Variété de légumes, de noix de cajou, raisinssecs, crème fraîche, amandes, ail, gingembre "
          }
        ],
        Desset: [
          {
            name: "HALWA ",
            description:
              "Gâteau de semoule : sucre, beurre,lait, amandes, cardamone, noix deCOCO "
          },
          {
            name: "GULAB JAMUN ",
            description: "Boule préparée à base de lait parfumé à la rose "
          },

          {
            name: "MANGO ICE CREAM ",
            description:
              "Boule de glaco à la vanille aveccoulis de mangue fraîche "
          }
        ]
      }
    ]
  }
];
