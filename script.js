// Structure for game data
const gameDataSets = [
    {
        columnWords: ['Apple', 'Book', 'Cat'],
        rowWords: ['Dog', 'Tree', 'Water'],
        correctAnswers: [
            ['Bite', 'Learn', 'Pet'],
            ['Fruit', 'Leaf', 'Climb'],
            ['Juice', 'Drawing', 'Avoid']
        ]
    },
    {
        columnWords: ['Chair', 'Flower', 'Music'],
        rowWords: ['Paint', 'Car', 'Coffee'],
        correctAnswers: [
            ['Stain', 'Bright', 'Art'],
            ['Driver', 'Bug', 'Radio'],
            ['Breakfast', 'Bean', 'Relax']
        ]
    },
    {
        "columnWords": [
            "world",
            "agent",
            "hope"
        ],
        "rowWords": [
            "bank",
            "care",
            "outside"
        ],
        "correctAnswers": [
            [
                "monetary",
                "transaction",
                "chase"
            ],
            [
                "nutrition",
                "specialist",
                "continuing"
            ],
            [
                "virtually",
                "prior",
                "wherever"
            ]
        ],
        "gridQuality": [
            0.04240828641321037,
            0.11085712563740047,
            0.04159912985244385,
            0.06821237540962011,
            0.0954158795640998,
            0.107612436107003,
            0.07637669758544341,
            0.043037772110001704,
            0.11484091020948584
        ]
    },
    {
        "columnWords": [
            "percent",
            "shoot",
            "mention"
        ],
        "rowWords": [
            "season",
            "produce",
            "family"
        ],
        "correctAnswers": [
            [
                "consecutive",
                "spring",
                "coming"
            ],
            [
                "annually",
                "capture",
                "hence"
            ],
            [
                "household",
                "photography",
                "dear"
            ]
        ],
        "gridQuality": [
            0.17541237754079664,
            0.019116465244104264,
            0.09322079413675954,
            0.11160847347359337,
            0.09150028220424555,
            0.19971118427908463,
            0.022479027362775073,
            0.050039126245750465,
            0.12421939921593883
        ]
    },
    {
        "columnWords": [
            "million",
            "affect",
            "page"
        ],
        "rowWords": [
            "bank",
            "mother",
            "victim"
        ],
        "correctAnswers": [
            [
                "treasury",
                "monetary",
                "register"
            ],
            [
                "lost",
                "thinking",
                "birthday"
            ],
            [
                "alleged",
                "perceived",
                "crash"
            ]
        ],
        "gridQuality": [
            0.12926164994753397,
            0.06189193377298963,
            0.12238715570990966,
            0.045548658130461495,
            0.11445761915863262,
            0.09752658860730468,
            -0.016994164035786907,
            0.15477511978050185,
            -0.011381491155452395
        ]
    },
    {
        "columnWords": [
            "food",
            "mouth",
            "agency"
        ],
        "rowWords": [
            "feel",
            "woman",
            "chair"
        ],
        "correctAnswers": [
            [
                "friendly",
                "soft",
                "regarding"
            ],
            [
                "grocery",
                "babe",
                "senior"
            ],
            [
                "cafe",
                "chest",
                "vice"
            ]
        ],
        "gridQuality": [
            0.13601796230785912,
            0.09200674533273834,
            0.08869344414023761,
            0.047305254502882255,
            0.12295874208070856,
            0.025243798632340164,
            0.03109636361884316,
            -0.008739939472519165,
            0.09520414302168312
        ]
    },
    {
        "columnWords": [
            "bag",
            "cover",
            "subject"
        ],
        "rowWords": [
            "food",
            "wait",
            "event"
        ],
        "correctAnswers": [
            [
                "grocery",
                "dish",
                "agriculture"
            ],
            [
                "bunch",
                "barely",
                "reply"
            ],
            [
                "package",
                "highlight",
                "registration"
            ]
        ],
        "gridQuality": [
            0.10451184897912891,
            0.00111870853281415,
            0.11557240178118122,
            0.04307460002634256,
            0.05834802154232355,
            0.15551315860946435,
            -0.007078062289344267,
            0.03300764542635093,
            0.10655228236579539
        ]
    },
    {
        "columnWords": [
            "value",
            "freedom",
            "staff"
        ],
        "rowWords": [
            "leave",
            "order",
            "purpose"
        ],
        "correctAnswers": [
            [
                "missing",
                "forever",
                "crew"
            ],
            [
                "discount",
                "honor",
                "schedule"
            ],
            [
                "significance",
                "unity",
                "guidance"
            ]
        ],
        "gridQuality": [
            0.038482787763783,
            0.09307169609238586,
            0.08258882249005872,
            0.13329520992436716,
            0.03305504315812502,
            0.03506214550021736,
            0.13940418128217702,
            0.11830663606119596,
            0.06527046420835536
        ]
    },
    {
        "columnWords": [
            "comment",
            "handle",
            "wind"
        ],
        "rowWords": [
            "side",
            "cover",
            "total"
        ],
        "correctAnswers": [
            [
                "thinking",
                "counter",
                "direction"
            ],
            [
                "written",
                "fit",
                "rolling"
            ],
            [
                "rating",
                "maximum",
                "expected"
            ]
        ],
        "gridQuality": [
            0.08615146339767699,
            0.09617695615766997,
            0.12301737550892544,
            0.09416631545679166,
            0.04114403317072435,
            0.021539871781824038,
            0.16332852240391382,
            0.0374983931922368,
            0.020546793150785225
        ]
    },
    {
        "columnWords": [
            "sea",
            "son",
            "hour"
        ],
        "rowWords": [
            "beat",
            "front",
            "data"
        ],
        "correctAnswers": [
            [
                "tide",
                "daddy",
                "twice"
            ],
            [
                "gulf",
                "beside",
                "parking"
            ],
            [
                "marine",
                "given",
                "required"
            ]
        ],
        "gridQuality": [
            -0.004601732654721413,
            0.10891265432045882,
            0.10513815185383457,
            0.07187782219589511,
            0.0054970423441311755,
            0.1432988361921539,
            0.01192168220726264,
            -0.004996072064083257,
            0.09426492948849174
        ]
    },
    {
        "columnWords": [
            "lay",
            "growth",
            "book"
        ],
        "rowWords": [
            "line",
            "dark",
            "church"
        ],
        "correctAnswers": [
            [
                "across",
                "improved",
                "reference"
            ],
            [
                "beneath",
                "medium",
                "fiction"
            ],
            [
                "bishop",
                "formation",
                "christianity"
            ]
        ],
        "gridQuality": [
            0.04659058312451303,
            0.10478335144875561,
            0.15779141695817045,
            0.14357460605542804,
            0.003094402207711955,
            0.13336589062749327,
            0.06187009257287712,
            0.041941308632789776,
            0.08276992722621523
        ]
    },
    {
        "columnWords": [
            "finger",
            "dad",
            "council"
        ],
        "rowWords": [
            "black",
            "book",
            "sunday"
        ],
        "correctAnswers": [
            [
                "grip",
                "shirt",
                "alliance"
            ],
            [
                "tip",
                "gift",
                "chapter"
            ],
            [
                "closed",
                "shortly",
                "parliament"
            ]
        ],
        "gridQuality": [
            0.1542144632074427,
            0.1123265810480174,
            0.04536930152317886,
            0.02744642372118511,
            0.13257699087934527,
            0.12818458466110538,
            -0.017826528020666976,
            0.0511212707911175,
            0.11126262205125537
        ]
    },
    {
        "columnWords": [
            "space",
            "union",
            "chair"
        ],
        "rowWords": [
            "city",
            "act",
            "month"
        ],
        "correctAnswers": [
            [
                "surrounding",
                "headquarters",
                "mayor"
            ],
            [
                "necessary",
                "reform",
                "standing"
            ],
            [
                "minimum",
                "membership",
                "appointment"
            ]
        ],
        "gridQuality": [
            0.13235743544154732,
            0.10977596164429904,
            0.010574787044460021,
            0.05281645536334112,
            0.13841392868722968,
            -0.007751401706649119,
            0.07286776833255737,
            0.13096162662878397,
            0.08895918896846078
        ]
    },
    {
        "columnWords": [
            "company",
            "figure",
            "check"
        ],
        "rowWords": [
            "country",
            "mention",
            "content"
        ],
        "correctAnswers": [
            [
                "worldwide",
                "standing",
                "holiday"
            ],
            [
                "pleased",
                "impressive",
                "whenever"
            ],
            [
                "publishing",
                "text",
                "submit"
            ]
        ],
        "gridQuality": [
            0.108480758568269,
            -0.009319200225889945,
            0.050385960456692525,
            0.12935820770696416,
            0.06291641942096926,
            0.12358055731651651,
            0.13858508378471124,
            -0.02960662566143546,
            0.07970104868706995
        ]
    },
    {
        "columnWords": [
            "notice",
            "freedom",
            "thought"
        ],
        "rowWords": [
            "paper",
            "church",
            "threat"
        ],
        "correctAnswers": [
            [
                "sheet",
                "stamp",
                "piece"
            ],
            [
                "registration",
                "unity",
                "priest"
            ],
            [
                "warrant",
                "terror",
                "unlikely"
            ]
        ],
        "gridQuality": [
            0.054229162276404064,
            -0.013997107629418082,
            0.13555990597731238,
            0.016105461996190007,
            0.16354850420371925,
            0.11297733177967229,
            0.050040856842288095,
            0.06814754202177342,
            0.1257582382587934
        ]
    },
    {
        "columnWords": [
            "pain",
            "owner",
            "degree"
        ],
        "rowWords": [
            "role",
            "plan",
            "man"
        ],
        "correctAnswers": [
            [
                "associated",
                "principal",
                "profession"
            ],
            [
                "medication",
                "purchase",
                "minimum"
            ],
            [
                "throat",
                "lucky",
                "straight"
            ]
        ],
        "gridQuality": [
            0.09037499265437487,
            0.05736201075158587,
            0.15414312143599962,
            0.07270942286719828,
            0.16919803270505995,
            0.12101063405513202,
            0.1408547615700778,
            0.1289880511379503,
            -0.0025313318072759383
        ]
    },
    {
        "columnWords": [
            "deep",
            "process",
            "legal"
        ],
        "rowWords": [
            "fight",
            "skill",
            "rate"
        ],
        "correctAnswers": [
            [
                "massive",
                "eventually",
                "lawsuit"
            ],
            [
                "depth",
                "creativity",
                "intellectual"
            ],
            [
                "lower",
                "calculation",
                "liability"
            ]
        ],
        "gridQuality": [
            0.09316045785109639,
            0.11677524923854299,
            0.08945836716223632,
            0.09596113415858332,
            0.10265231516885354,
            0.022792535613288423,
            0.01874543194470102,
            0.11041106906009734,
            0.044048630221480756
        ]
    },
    {
        "columnWords": [
            "evening",
            "common",
            "nature"
        ],
        "rowWords": [
            "blue",
            "movie",
            "task"
        ],
        "correctAnswers": [
            [
                "silk",
                "used",
                "ocean"
            ],
            [
                "concert",
                "funny",
                "documentary"
            ],
            [
                "busy",
                "required",
                "creation"
            ]
        ],
        "gridQuality": [
            0.1256407685742732,
            0.06852119263434675,
            0.11145746673057921,
            0.09643281964090444,
            0.01607081441093061,
            0.05600345701457421,
            0.1252608290503785,
            0.1266767399566463,
            0.10634667093970329
        ]
    },
    {
        "columnWords": [
            "action",
            "system",
            "truth"
        ],
        "rowWords": [
            "money",
            "run",
            "site"
        ],
        "correctAnswers": [
            [
                "equity",
                "banking",
                "happiness"
            ],
            [
                "pace",
                "operating",
                "exist"
            ],
            [
                "forum",
                "database",
                "significance"
            ]
        ],
        "gridQuality": [
            0.0810681877199868,
            0.10186261911221917,
            0.13586073673420718,
            0.08485457628302451,
            0.14724943217524433,
            0.024012792380947223,
            0.02817896998258429,
            0.10213860297562904,
            0.03776439572778589
        ]
    },
    {
        "columnWords": [
            "note",
            "meet",
            "partner"
        ],
        "rowWords": [
            "ground",
            "cost",
            "client"
        ],
        "correctAnswers": [
            [
                "dry",
                "lay",
                "standing"
            ],
            [
                "additional",
                "exceed",
                "invest"
            ],
            [
                "browser",
                "satisfy",
                "vendor"
            ]
        ],
        "gridQuality": [
            0.0700837110995125,
            0.059714048133310604,
            -0.029727977430112018,
            0.0947781840896722,
            0.12934035690742507,
            0.03316439385320813,
            0.122039020654796,
            0.0724791426182324,
            0.10361545998389654
        ]
    },
    {
        "columnWords": [
            "main",
            "truth",
            "type"
        ],
        "rowWords": [
            "keep",
            "user",
            "web"
        ],
        "correctAnswers": [
            [
                "onto",
                "pray",
                "normally"
            ],
            [
                "entry",
                "anonymous",
                "default"
            ],
            [
                "map",
                "insight",
                "flash"
            ]
        ],
        "gridQuality": [
            0.11826807414315421,
            0.2456801698442358,
            0.11195792516393499,
            0.020698153696629973,
            -0.02330175244934707,
            0.11568198489606041,
            0.030678486475391953,
            0.03548633209299168,
            0.04270913040917346
        ]
    },
    {
        "columnWords": [
            "piece",
            "track",
            "pay"
        ],
        "rowWords": [
            "season",
            "society",
            "energy"
        ],
        "correctAnswers": [
            [
                "round",
                "debut",
                "expected"
            ],
            [
                "contemporary",
                "progress",
                "membership"
            ],
            [
                "wood",
                "flow",
                "saving"
            ]
        ],
        "gridQuality": [
            0.04104865827368709,
            0.09983131253269073,
            0.07464291851314397,
            0.1373178449695689,
            0.02509327100085934,
            0.13684173966500024,
            0.04280292187974122,
            0.1052762559156315,
            0.14432012083498835
        ]
    },
    {
        "columnWords": [
            "plan",
            "wear",
            "risk"
        ],
        "rowWords": [
            "device",
            "family",
            "pay"
        ],
        "correctAnswers": [
            [
                "invention",
                "belt",
                "thereby"
            ],
            [
                "shared",
                "casual",
                "genetic"
            ],
            [
                "incentive",
                "slip",
                "proportion"
            ]
        ],
        "gridQuality": [
            0.06977896094061475,
            0.03789897612054194,
            0.10907794705751683,
            0.08233927472502445,
            0.038371390060018995,
            0.10330946304373045,
            0.15627639250825598,
            0.05570474997563857,
            0.13677181590763343
        ]
    },
    {
        "columnWords": [
            "second",
            "father",
            "win"
        ],
        "rowWords": [
            "young",
            "sound",
            "budget"
        ],
        "correctAnswers": [
            [
                "senior",
                "loving",
                "lucky"
            ],
            [
                "instrument",
                "guitar",
                "incredible"
            ],
            [
                "proposed",
                "bill",
                "compromise"
            ]
        ],
        "gridQuality": [
            0.09791883915415733,
            0.18465271460691302,
            0.09344591392171875,
            0.09663217988847617,
            0.003692507361461872,
            0.004672034349163856,
            0.12640179384391492,
            0.00204892564499104,
            0.007112047958111045
        ]
    },
    {
        "columnWords": [
            "event",
            "option",
            "table"
        ],
        "rowWords": [
            "union",
            "decade",
            "edge"
        ],
        "correctAnswers": [
            [
                "headquarters",
                "opposed",
                "standing"
            ],
            [
                "worldwide",
                "unlike",
                "fifteen"
            ],
            [
                "opening",
                "advantage",
                "knife"
            ]
        ],
        "gridQuality": [
            0.1034187535897505,
            0.0586923636401252,
            -0.013930804999686464,
            0.10579867735776993,
            0.07268099339685319,
            0.028383925442934554,
            0.061021875422724636,
            0.11340870307271367,
            0.11091775656979574
        ]
    },
    {
        "columnWords": [
            "deep",
            "decade",
            "student"
        ],
        "rowWords": [
            "death",
            "task",
            "rise"
        ],
        "correctAnswers": [
            [
                "grave",
                "shortly",
                "victim"
            ],
            [
                "depth",
                "considering",
                "assistance"
            ],
            [
                "ocean",
                "popularity",
                "loan"
            ]
        ],
        "gridQuality": [
            0.09874617669623631,
            0.06328824513815223,
            0.10078808167640607,
            0.030166135068343758,
            0.07155872037189892,
            0.16166281323506415,
            0.09187822677429824,
            0.19809056864142638,
            0.025301068647456848
        ]
    },
    {
        "columnWords": [
            "hair",
            "culture",
            "trust"
        ],
        "rowWords": [
            "body",
            "image",
            "visit"
        ],
        "correctAnswers": [
            [
                "makeup",
                "lifestyle",
                "balance"
            ],
            [
                "portrait",
                "artistic",
                "document"
            ],
            [
                "appointment",
                "explore",
                "behalf"
            ]
        ],
        "gridQuality": [
            0.1429686618328111,
            0.05080623668506856,
            0.10357840571661936,
            0.006092653175806317,
            0.07335444459534579,
            0.0015707180973482116,
            -0.008958595307610118,
            0.14948752965533985,
            0.10940266335355331
        ]
    },
    {
        "columnWords": [
            "brain",
            "thanks",
            "turn"
        ],
        "rowWords": [
            "kill",
            "night",
            "owner"
        ],
        "correctAnswers": [
            [
                "harm",
                "rob",
                "rid"
            ],
            [
                "sleep",
                "birthday",
                "walking"
            ],
            [
                "injury",
                "info",
                "estate"
            ]
        ],
        "gridQuality": [
            -0.017737830628355766,
            0.04227666580405631,
            0.15564615869842757,
            0.03467825941189839,
            0.12281122818466139,
            0.1343138430049482,
            0.012311178291664504,
            0.06502940893915832,
            0.09453626629826384
        ]
    },
    {
        "columnWords": [
            "service",
            "river",
            "past"
        ],
        "rowWords": [
            "high",
            "faith",
            "state"
        ],
        "correctAnswers": [
            [
                "affordable",
                "ridge",
                "above"
            ],
            [
                "praise",
                "wilderness",
                "convinced"
            ],
            [
                "request",
                "northwest",
                "congress"
            ]
        ],
        "gridQuality": [
            0.12120225038765997,
            0.05556183852493091,
            0.11411958476968587,
            0.034463483975099796,
            -0.014560365729599845,
            0.13862472943058124,
            0.06197971366007782,
            0.0454628449021659,
            0.10029246415975424
        ]
    },
    {
        "columnWords": [
            "simple",
            "door",
            "element"
        ],
        "rowWords": [
            "author",
            "economy",
            "base"
        ],
        "correctAnswers": [
            [
                "creator",
                "mark",
                "literature"
            ],
            [
                "sustainable",
                "domestic",
                "thereby"
            ],
            [
                "solid",
                "cab",
                "portion"
            ]
        ],
        "gridQuality": [
            0.14454563620456573,
            -0.018071011123682368,
            -0.005429798929607266,
            0.10619248303214479,
            -0.0008594320162633728,
            0.009833600007231214,
            0.07794521854257741,
            0.09197687105682395,
            0.11533388961293922
        ]
    },
    {
        "columnWords": [
            "pick",
            "officer",
            "bed"
        ],
        "rowWords": [
            "quality",
            "race",
            "east"
        ],
        "correctAnswers": [
            [
                "decent",
                "technical",
                "furniture"
            ],
            [
                "running",
                "veteran",
                "lap"
            ],
            [
                "downtown",
                "branch",
                "ridge"
            ]
        ],
        "gridQuality": [
            0.16311443946030524,
            0.08699079092639073,
            0.11900961331457882,
            0.09662854809172483,
            -0.00785801603065861,
            0.026139256923827014,
            0.03424109121519503,
            0.11915129955960657,
            0.07966327503438508
        ]
    },
    {
        "columnWords": [
            "young",
            "leave",
            "study"
        ],
        "rowWords": [
            "loss",
            "talk",
            "view"
        ],
        "correctAnswers": [
            [
                "fat",
                "permanent",
                "associated"
            ],
            [
                "gay",
                "bother",
                "lecture"
            ],
            [
                "gallery",
                "submit",
                "summary"
            ]
        ],
        "gridQuality": [
            0.06869408486582129,
            0.07087142096756949,
            0.10924443764674019,
            0.09842798421061039,
            0.22393332024816714,
            0.12844729928146337,
            0.07723381479981017,
            0.09409722708002055,
            0.12110425823071125
        ]
    },
    {
        "columnWords": [
            "answer",
            "fish",
            "war"
        ],
        "rowWords": [
            "street",
            "agency",
            "wind"
        ],
        "correctAnswers": [
            [
                "corner",
                "square",
                "parade"
            ],
            [
                "advise",
                "animal",
                "civilian"
            ],
            [
                "whenever",
                "ocean",
                "wave"
            ]
        ],
        "gridQuality": [
            0.0429984329089238,
            0.034045173729010614,
            0.13842957969886505,
            0.2037324268731895,
            0.04189100765091858,
            0.16674865010827544,
            0.019274552889653407,
            0.12070144105760328,
            0.031170175604250505
        ]
    },
    {
        "columnWords": [
            "option",
            "sister",
            "major"
        ],
        "rowWords": [
            "west",
            "student",
            "number"
        ],
        "correctAnswers": [
            [
                "close",
                "grace",
                "northeast"
            ],
            [
                "fee",
                "teenage",
                "continuing"
            ],
            [
                "specify",
                "lucky",
                "worldwide"
            ]
        ],
        "gridQuality": [
            0.00044264713986474913,
            0.02916304968049288,
            0.11042603897728509,
            0.03257048716902111,
            0.08997751038479862,
            0.08715569318882788,
            0.19413763832839281,
            0.09838387078756727,
            0.12613483162014605
        ]
    },
    {
        "columnWords": [
            "left",
            "state",
            "road"
        ],
        "rowWords": [
            "death",
            "list",
            "poor"
        ],
        "correctAnswers": [
            [
                "shortly",
                "terror",
                "driving"
            ],
            [
                "click",
                "membership",
                "map"
            ],
            [
                "badly",
                "regard",
                "driving"
            ]
        ],
        "gridQuality": [
            0.09967641157276586,
            0.0465968429022563,
            0.006296903498519191,
            0.1321565806282664,
            0.0976746442170977,
            0.017294641791736343,
            0.09355913479055733,
            0.06130260138108845,
            -0.011537335680865346
        ]
    },
    {
        "columnWords": [
            "earth",
            "lawyer",
            "play"
        ],
        "rowWords": [
            "size",
            "century",
            "travel"
        ],
        "correctAnswers": [
            [
                "tall",
                "suit",
                "overall"
            ],
            [
                "civilization",
                "estate",
                "classical"
            ],
            [
                "abroad",
                "consultant",
                "online"
            ]
        ],
        "gridQuality": [
            0.05030981232934528,
            0.08356085533265223,
            0.08873784656246197,
            0.18609381232581934,
            0.016419829111124606,
            0.1370673985714801,
            0.026374752239641364,
            0.15430752103906187,
            0.1475032384628936
        ]
    },
    {
        "columnWords": [
            "family",
            "worker",
            "focus"
        ],
        "rowWords": [
            "play",
            "window",
            "church"
        ],
        "correctAnswers": [
            [
                "favorite",
                "assistant",
                "competition"
            ],
            [
                "bathroom",
                "installation",
                "lens"
            ],
            [
                "jewish",
                "ministry",
                "theology"
            ]
        ],
        "gridQuality": [
            0.11339717465703536,
            -0.021376000043227705,
            0.12669308200056772,
            0.08756483904470824,
            -0.016228954184263067,
            0.114269025332975,
            0.13549316465008887,
            -0.007502660257466709,
            0.14918006855409338
        ]
    },
    {
        "columnWords": [
            "amount",
            "trip",
            "yard"
        ],
        "rowWords": [
            "support",
            "return",
            "artist"
        ],
        "correctAnswers": [
            [
                "generous",
                "planning",
                "running"
            ],
            [
                "expected",
                "destination",
                "outside"
            ],
            [
                "drawing",
                "photography",
                "painting"
            ]
        ],
        "gridQuality": [
            0.16059371287748836,
            0.09227058107378394,
            -0.002108475820957856,
            0.12414252156249628,
            0.18120496552583143,
            0.017781383771487413,
            0.05212143368121247,
            0.09970238054298275,
            0.04726220772392897
        ]
    },
    {
        "columnWords": [
            "team",
            "bed",
            "kill"
        ],
        "rowWords": [
            "reach",
            "second",
            "cover"
        ],
        "correctAnswers": [
            [
                "compete",
                "beside",
                "harm"
            ],
            [
                "junior",
                "double",
                "murder"
            ],
            [
                "personnel",
                "blanket",
                "bomb"
            ]
        ],
        "gridQuality": [
            0.06719703759835982,
            0.06298602880485604,
            0.07410169224397523,
            0.14217583033461645,
            0.11661061224818636,
            0.09014193923392666,
            -0.01191421957228811,
            0.16830295734205092,
            -0.016061165621983786
        ]
    },
    {
        "columnWords": [
            "room",
            "pattern",
            "memory"
        ],
        "rowWords": [
            "threat",
            "owner",
            "web"
        ],
        "correctAnswers": [
            [
                "standing",
                "apparent",
                "conflict"
            ],
            [
                "residence",
                "detail",
                "card"
            ],
            [
                "chat",
                "print",
                "browser"
            ]
        ],
        "gridQuality": [
            0.04457183564663536,
            0.06194963389376884,
            0.026944286851271926,
            0.22798579863915402,
            -0.022983243126679653,
            -0.013852763902202803,
            0.14620836605418086,
            0.1314552923364647,
            0.11072206744169955
        ]
    },
    {
        "columnWords": [
            "data",
            "school",
            "range"
        ],
        "rowWords": [
            "office",
            "catch",
            "post"
        ],
        "correctAnswers": [
            [
                "bureau",
                "assistant",
                "affordable"
            ],
            [
                "retrieve",
                "dance",
                "plenty"
            ],
            [
                "info",
                "reading",
                "fantastic"
            ]
        ],
        "gridQuality": [
            0.119669733167592,
            0.17552539262658073,
            0.07044929063781258,
            0.122866281593079,
            0.05395316173159714,
            0.11467307248813752,
            0.09348649090718142,
            0.0860290299019364,
            0.060349540056854334
        ]
    },
    {
        "columnWords": [
            "economy",
            "speech",
            "school"
        ],
        "rowWords": [
            "answer",
            "truth",
            "budget"
        ],
        "correctAnswers": [
            [
                "changing",
                "phrase",
                "math"
            ],
            [
                "humanity",
                "islam",
                "catholic"
            ],
            [
                "inflation",
                "legislative",
                "charter"
            ]
        ],
        "gridQuality": [
            0.03564819208036474,
            0.03006091998044569,
            0.10760774128985529,
            0.1077724586311033,
            0.045491131281444,
            0.06480503795335624,
            0.16598601355301013,
            0.04931197713753721,
            0.11192837992809779
        ]
    },
    {
        "columnWords": [
            "student",
            "sun",
            "box"
        ],
        "rowWords": [
            "foot",
            "kid",
            "force"
        ],
        "correctAnswers": [
            [
                "standing",
                "rain",
                "square"
            ],
            [
                "junior",
                "rain",
                "candy"
            ],
            [
                "principal",
                "due",
                "command"
            ]
        ],
        "gridQuality": [
            0.02166857586345683,
            -0.01810544218571375,
            0.13825453068165627,
            0.14452795386592054,
            0.01810544218571375,
            0.1824706145249445,
            0.15275189846996762,
            -0.019368354315366543,
            0.0925841195853414
        ]
    },
    {
        "columnWords": [
            "fine",
            "task",
            "type"
        ],
        "rowWords": [
            "choice",
            "season",
            "group"
        ],
        "correctAnswers": [
            [
                "brilliant",
                "crucial",
                "opt"
            ],
            [
                "debut",
                "expected",
                "previous"
            ],
            [
                "band",
                "committee",
                "related"
            ]
        ],
        "gridQuality": [
            0.13063157274611148,
            0.11473068505640605,
            0.1706274926078497,
            0.041950304879027844,
            -0.010926145993831682,
            -0.004721931950668501,
            0.03587321378519759,
            0.14224455840661743,
            0.05400186292657161
        ]
    },
    {
        "columnWords": [
            "look",
            "state",
            "dog"
        ],
        "rowWords": [
            "star",
            "son",
            "room"
        ],
        "correctAnswers": [
            [
                "celebrity",
                "valley",
                "monkey"
            ],
            [
                "wise",
                "governor",
                "daddy"
            ],
            [
                "elegant",
                "facility",
                "outdoor"
            ]
        ],
        "gridQuality": [
            0.11648279401934136,
            0.041579276238948304,
            -0.01880622826621603,
            0.06661066034936991,
            0.0961085791308337,
            0.07024729300959864,
            0.14090555414335237,
            0.097995023781973,
            0.059034080930597366
        ]
    },
    {
        "columnWords": [
            "leg",
            "account",
            "wall"
        ],
        "rowWords": [
            "doctor",
            "report",
            "item"
        ],
        "correctAnswers": [
            [
                "stomach",
                "immediately",
                "bathroom"
            ],
            [
                "wednesday",
                "statistics",
                "panel"
            ],
            [
                "tie",
                "cart",
                "lamp"
            ]
        ],
        "gridQuality": [
            0.10361030717212516,
            0.04301182083346089,
            0.005326359360685817,
            -0.011415130849082966,
            0.17852443650347682,
            0.11202533073887766,
            0.023729839208819326,
            0.09758547045793453,
            0.09536231043502319
        ]
    },
    {
        "columnWords": [
            "value",
            "half",
            "blood"
        ],
        "rowWords": [
            "rate",
            "call",
            "beat"
        ],
        "correctAnswers": [
            [
                "threshold",
                "cent",
                "fluid"
            ],
            [
                "context",
                "outside",
                "emergency"
            ],
            [
                "confidence",
                "mix",
                "rhythm"
            ]
        ],
        "gridQuality": [
            0.13781817563254495,
            0.08326664550363505,
            0.02045620245669888,
            0.09815901984138076,
            0.11020380457487167,
            0.0055142184852224885,
            -0.01931316737086719,
            0.10835101019473203,
            0.06790619624421357
        ]
    },
    {
        "columnWords": [
            "week",
            "top",
            "ability"
        ],
        "rowWords": [
            "cost",
            "draw",
            "wall"
        ],
        "correctAnswers": [
            [
                "monthly",
                "discount",
                "dependent"
            ],
            [
                "contest",
                "tie",
                "spell"
            ],
            [
                "christmas",
                "interior",
                "flow"
            ]
        ],
        "gridQuality": [
            0.18295722915882962,
            0.06801414281469287,
            0.1609834272077756,
            0.06927174149034276,
            0.14656092188815606,
            0.10525369397166717,
            0.03942987295477973,
            0.1404347343071516,
            0.01476886205474659
        ]
    },
    {
        "columnWords": [
            "south",
            "friend",
            "process"
        ],
        "rowWords": [
            "special",
            "policy",
            "king"
        ],
        "correctAnswers": [
            [
                "bay",
                "birthday",
                "highly"
            ],
            [
                "regional",
                "suggestion",
                "framework"
            ],
            [
                "avenue",
                "lord",
                "latter"
            ]
        ],
        "gridQuality": [
            0.046238604606986256,
            0.16939457328217766,
            0.12674675021392878,
            0.015256383440200305,
            0.04411607449766475,
            0.18083168827743734,
            0.058266446657033844,
            0.11645411044116827,
            -0.021962656438605732
        ]
    },
    {
        "columnWords": [
            "news",
            "general",
            "kid"
        ],
        "rowWords": [
            "treat",
            "teacher",
            "river"
        ],
        "correctAnswers": [
            [
                "cure",
                "regard",
                "candy"
            ],
            [
                "reporter",
                "mathematics",
                "teen"
            ],
            [
                "northwest",
                "ridge",
                "trail"
            ]
        ],
        "gridQuality": [
            -0.012259980221462019,
            0.11414891920479442,
            0.17532060562501228,
            0.06692591957054095,
            0.17434549020446077,
            0.14930629033334597,
            0.04235589437609699,
            0.010539756210747098,
            0.022938777529102117
        ]
    },
    {
        "columnWords": [
            "size",
            "cause",
            "piece"
        ],
        "rowWords": [
            "economy",
            "staff",
            "justice"
        ],
        "correctAnswers": [
            [
                "changing",
                "collapse",
                "modern"
            ],
            [
                "accommodate",
                "experienced",
                "desk"
            ],
            [
                "supreme",
                "punishment",
                "liberty"
            ]
        ],
        "gridQuality": [
            -0.026574548661037145,
            0.17381985263910416,
            0.04471648167497888,
            0.09912241434816282,
            0.1457927465984643,
            0.10135586582281098,
            -0.02007747345519828,
            0.138740567178958,
            -0.007775586211764107
        ]
    },
    {
        "columnWords": [
            "evening",
            "bar",
            "care"
        ],
        "rowWords": [
            "hall",
            "place",
            "level"
        ],
        "correctAnswers": [
            [
                "reception",
                "booth",
                "clinic"
            ],
            [
                "pleasant",
                "straight",
                "clean"
            ],
            [
                "expected",
                "zero",
                "specialist"
            ]
        ],
        "gridQuality": [
            0.11017175084051123,
            -0.0207124417344553,
            -0.01169853248554964,
            0.1430497409240139,
            0.06985782246276107,
            0.10896874102453435,
            -0.014137617206948505,
            0.00574256416945107,
            0.09422655248474698
        ]
    },
    {
        "columnWords": [
            "former",
            "address",
            "produce"
        ],
        "rowWords": [
            "word",
            "web",
            "wrong"
        ],
        "correctAnswers": [
            [
                "known",
                "key",
                "commonly"
            ],
            [
                "founder",
                "domain",
                "innovative"
            ],
            [
                "convinced",
                "priority",
                "equally"
            ]
        ],
        "gridQuality": [
            0.0035543504028464623,
            0.06862791040607952,
            0.09377486480597652,
            0.06278426958984806,
            0.12771945888154823,
            0.1251956001241794,
            0.10377010816370846,
            0.06500671535962943,
            0.1272601801464086
        ]
    },
    {
        "columnWords": [
            "fight",
            "council",
            "growth"
        ],
        "rowWords": [
            "major",
            "husband",
            "comment"
        ],
        "correctAnswers": [
            [
                "victory",
                "regional",
                "emerging"
            ],
            [
                "marriage",
                "pastor",
                "spending"
            ],
            [
                "stupid",
                "forum",
                "profile"
            ]
        ],
        "gridQuality": [
            0.09392343577740281,
            0.140643436677526,
            0.18465619098083708,
            0.07775460538242407,
            0.04740474420986607,
            -0.023560379516511132,
            0.09024851382793109,
            0.08725158422659862,
            0.031398536840348656
        ]
    },
    {
        "columnWords": [
            "client",
            "buy",
            "message"
        ],
        "rowWords": [
            "image",
            "agency",
            "table"
        ],
        "correctAnswers": [
            [
                "dynamic",
                "stock",
                "icon"
            ],
            [
                "consultant",
                "united",
                "ministry"
            ],
            [
                "instance",
                "furniture",
                "given"
            ]
        ],
        "gridQuality": [
            0.10163679415737836,
            0.10140318799483272,
            0.06853788511278636,
            0.2618610096889876,
            0.02630639462106177,
            0.06687594069771097,
            0.03383444442069883,
            0.13139939231309405,
            0.034526617481346666
        ]
    },
    {
        "columnWords": [
            "trade",
            "word",
            "amount"
        ],
        "rowWords": [
            "court",
            "bank",
            "boy"
        ],
        "correctAnswers": [
            [
                "proceedings",
                "testimony",
                "subsequent"
            ],
            [
                "currency",
                "trust",
                "deposit"
            ],
            [
                "coming",
                "monkey",
                "tiny"
            ]
        ],
        "gridQuality": [
            0.10699447824549402,
            0.06787944034277704,
            0.07704380501094366,
            0.0986709129785891,
            -0.024224836558518814,
            0.22908981210139534,
            -0.011090777892239001,
            0.13221370947610112,
            0.057142209865386207
        ]
    },
    {
        "columnWords": [
            "book",
            "state",
            "cause"
        ],
        "rowWords": [
            "region",
            "carry",
            "author"
        ],
        "correctAnswers": [
            [
                "trip",
                "northeast",
                "continent"
            ],
            [
                "practical",
                "provided",
                "wherever"
            ],
            [
                "publishing",
                "secretary",
                "cancer"
            ]
        ],
        "gridQuality": [
            -0.01853333337893348,
            0.2427554312333946,
            0.05040790012612051,
            0.0911989817024711,
            0.019895192594819422,
            0.18557204861558263,
            0.25179210964807164,
            0.045777284608494395,
            0.012115210538151122
        ]
    },
    {
        "columnWords": [
            "box",
            "beat",
            "animal"
        ],
        "rowWords": [
            "room",
            "goal",
            "mother"
        ],
        "correctAnswers": [
            [
                "suite",
                "tonight",
                "shelter"
            ],
            [
                "target",
                "opponent",
                "conservation"
            ],
            [
                "found",
                "upset",
                "loving"
            ]
        ],
        "gridQuality": [
            0.17575169688316195,
            0.062484752127953125,
            0.024319849744117272,
            0.04689519904087658,
            0.16601514404868545,
            0.1048393999487578,
            0.02587296392759697,
            0.11917433452441517,
            0.09344756557922551
        ]
    },
    {
        "columnWords": [
            "ground",
            "form",
            "carry"
        ],
        "rowWords": [
            "cold",
            "start",
            "career"
        ],
        "correctAnswers": [
            [
                "frozen",
                "mild",
                "extremely"
            ],
            [
                "kick",
                "registration",
                "intend"
            ],
            [
                "reputation",
                "employment",
                "profession"
            ]
        ],
        "gridQuality": [
            0.1459254635263303,
            0.026952916907829527,
            0.018841315752046728,
            0.09993102840198298,
            0.15218753793349482,
            0.15298685861730177,
            -0.02241815016474935,
            0.042091428073560366,
            -0.00845743676159505
        ]
    },
    {
        "columnWords": [
            "officer",
            "hurt",
            "drive"
        ],
        "rowWords": [
            "press",
            "company",
            "user"
        ],
        "correctAnswers": [
            [
                "spokesman",
                "shut",
                "wheel"
            ],
            [
                "consultant",
                "considering",
                "motor"
            ],
            [
                "instructor",
                "physically",
                "disk"
            ]
        ],
        "gridQuality": [
            -0.01768874386938868,
            0.0023513077838215324,
            0.008339448451307518,
            0.1974698088325504,
            0.11243840170163688,
            0.10798637051423599,
            0.013994754646232233,
            0.0259841086847179,
            0.13887654210793832
        ]
    },
    {
        "columnWords": [
            "life",
            "review",
            "mom"
        ],
        "rowWords": [
            "news",
            "artist",
            "second"
        ],
        "correctAnswers": [
            [
                "daily",
                "info",
                "celebrity"
            ],
            [
                "inspiration",
                "graphic",
                "talented"
            ],
            [
                "hence",
                "complaint",
                "surprise"
            ]
        ],
        "gridQuality": [
            0.10368901529840735,
            0.11914243583964179,
            0.02437955791280677,
            0.11040904962405029,
            0.004021432767154609,
            -0.00244530168532775,
            0.17115605436540182,
            0.0744005901746434,
            0.05591510450884207
        ]
    },
    {
        "columnWords": [
            "earth",
            "talk",
            "color"
        ],
        "rowWords": [
            "patient",
            "release",
            "hello"
        ],
        "correctAnswers": [
            [
                "therefore",
                "clinic",
                "contrast"
            ],
            [
                "gravity",
                "upcoming",
                "label"
            ],
            [
                "heaven",
                "chat",
                "gorgeous"
            ]
        ],
        "gridQuality": [
            0.07655567135587515,
            0.1017767054331854,
            0.04790338546009265,
            0.0345425436729343,
            0.14492903037298377,
            0.10272459462074957,
            0.03218292865555494,
            0.17028592127324738,
            0.1223528007840925
        ]
    },
    {
        "columnWords": [
            "growth",
            "wait",
            "field"
        ],
        "rowWords": [
            "brain",
            "road",
            "miss"
        ],
        "correctAnswers": [
            [
                "liver",
                "literally",
                "injury"
            ],
            [
                "rapid",
                "proceed",
                "ridge"
            ],
            [
                "presence",
                "dear",
                "third"
            ]
        ],
        "gridQuality": [
            0.11223695345410112,
            0.08541437063967239,
            0.031477860944185365,
            -0.02413282452158505,
            0.11222757437361308,
            0.11150065392312836,
            -0.021001792350020865,
            0.2160425569723028,
            -0.0010150769133917548
        ]
    },
    {
        "columnWords": [
            "pain",
            "minute",
            "high"
        ],
        "rowWords": [
            "stuff",
            "door",
            "period"
        ],
        "correctAnswers": [
            [
                "horrible",
                "boring",
                "used"
            ],
            [
                "panic",
                "alarm",
                "ceiling"
            ],
            [
                "diagnosis",
                "interval",
                "combined"
            ]
        ],
        "gridQuality": [
            0.10797917761844156,
            0.10404348650210116,
            0.0925302379408206,
            0.03343836666774891,
            -0.00011974454108387711,
            0.12459348350855948,
            0.030460721411642133,
            0.21743878396476446,
            0.08084081334817095
        ]
    },
    {
        "columnWords": [
            "road",
            "author",
            "reach"
        ],
        "rowWords": [
            "brother",
            "sleep",
            "door"
        ],
        "correctAnswers": [
            [
                "king",
                "poet",
                "surely"
            ],
            [
                "driving",
                "writing",
                "relax"
            ],
            [
                "garage",
                "entry",
                "ceiling"
            ]
        ],
        "gridQuality": [
            -0.004440782913967434,
            0.17014615916245135,
            0.03662753773695371,
            -0.027947384321268642,
            0.005500778351451241,
            0.11559618488950152,
            0.11251402461365267,
            0.03889813831670097,
            0.15021459038191065
        ]
    },
    {
        "columnWords": [
            "level",
            "land",
            "hair"
        ],
        "rowWords": [
            "special",
            "hurt",
            "stand"
        ],
        "correctAnswers": [
            [
                "bonus",
                "sale",
                "makeup"
            ],
            [
                "damage",
                "killing",
                "kinda"
            ],
            [
                "above",
                "desert",
                "brush"
            ]
        ],
        "gridQuality": [
            0.15426195752756677,
            0.12083234828336453,
            0.07270804433468958,
            0.10150768774544472,
            0.00852232340631176,
            -0.01062770517650391,
            0.08414406319692402,
            0.03851083890131557,
            0.09055141511049336
        ]
    },
    {
        "columnWords": [
            "victim",
            "crazy",
            "floor"
        ],
        "rowWords": [
            "stand",
            "final",
            "dead"
        ],
        "correctAnswers": [
            [
                "unable",
                "enjoy",
                "rack"
            ],
            [
                "subsequent",
                "exciting",
                "seventh"
            ],
            [
                "killing",
                "scary",
                "carpet"
            ]
        ],
        "gridQuality": [
            0.0531945558908864,
            0.12975938511630614,
            0.24242929157390436,
            0.09768216942359398,
            0.08520077862155384,
            0.048519655662065286,
            0.11372670441361865,
            0.10728748525392706,
            0.006727123369149601
        ]
    },
    {
        "columnWords": [
            "notice",
            "drug",
            "style"
        ],
        "rowWords": [
            "legal",
            "common",
            "success"
        ],
        "correctAnswers": [
            [
                "petition",
                "fraud",
                "custom"
            ],
            [
                "normally",
                "prevention",
                "typical"
            ],
            [
                "hopefully",
                "promising",
                "creativity"
            ]
        ],
        "gridQuality": [
            0.16841486422655072,
            0.08819580189862575,
            -0.02521632499242421,
            0.1137528049396026,
            0.05131569734473573,
            0.10747772565979852,
            0.11420938640088552,
            0.07487524192086814,
            0.12749765808459124
        ]
    },
    {
        "columnWords": [
            "scene",
            "energy",
            "rest"
        ],
        "rowWords": [
            "design",
            "sort",
            "church"
        ],
        "correctAnswers": [
            [
                "graphic",
                "electrical",
                "frame"
            ],
            [
                "bizarre",
                "alternative",
                "regardless"
            ],
            [
                "saint",
                "ministry",
                "grace"
            ]
        ],
        "gridQuality": [
            0.07638293426115184,
            0.1615050703596791,
            0.07236647285717202,
            0.18334295710517645,
            0.029637760058442764,
            0.19356006250745295,
            0.014510130838415125,
            0.042171460464879074,
            0.102096497967059
        ]
    },
    {
        "columnWords": [
            "level",
            "control",
            "sense"
        ],
        "rowWords": [
            "ability",
            "hour",
            "outside"
        ],
        "correctAnswers": [
            [
                "rank",
                "modify",
                "importantly"
            ],
            [
                "minimum",
                "automatic",
                "odd"
            ],
            [
                "location",
                "northern",
                "inner"
            ]
        ],
        "gridQuality": [
            0.08042459846136951,
            0.0948712272307517,
            0.1583492578049207,
            0.11293132911074155,
            -0.004445609578124454,
            0.013240163243665615,
            0.07943097168711755,
            0.056268954155611395,
            0.10338445679060326
        ]
    },
    {
        "columnWords": [
            "present",
            "heart",
            "theory"
        ],
        "rowWords": [
            "doctor",
            "folk",
            "produce"
        ],
        "correctAnswers": [
            [
                "consult",
                "stroke",
                "psychology"
            ],
            [
                "festival",
                "guitar",
                "classical"
            ],
            [
                "readily",
                "liver",
                "rational"
            ]
        ],
        "gridQuality": [
            0.11395225865619985,
            0.08911308106224114,
            0.017735581418553914,
            0.09869042122325222,
            0.008850820623359068,
            0.14080491071301038,
            0.22491791782132786,
            -0.018524225951469298,
            -0.014978569167660383
        ]
    },
    {
        "columnWords": [
            "arm",
            "journal",
            "trust"
        ],
        "rowWords": [
            "woman",
            "space",
            "size"
        ],
        "correctAnswers": [
            [
                "standing",
                "chronicle",
                "loving"
            ],
            [
                "upper",
                "conference",
                "shared"
            ],
            [
                "grip",
                "publication",
                "client"
            ]
        ],
        "gridQuality": [
            0.09705417103356384,
            0.06125369472801223,
            0.15262135880295014,
            0.028895986707347943,
            0.06315333122029443,
            0.09596039922351363,
            0.09891839471512165,
            0.0001591286341064979,
            -0.009380607802438323
        ]
    },
    {
        "columnWords": [
            "wait",
            "concern",
            "handle"
        ],
        "rowWords": [
            "action",
            "hold",
            "style"
        ],
        "correctAnswers": [
            [
                "ending",
                "ongoing",
                "combat"
            ],
            [
                "bet",
                "likewise",
                "grip"
            ],
            [
                "gorgeous",
                "greatly",
                "accent"
            ]
        ],
        "gridQuality": [
            0.04275980066841356,
            0.07800519349870205,
            -0.01322434434171893,
            0.18744091529396245,
            0.10143851412799942,
            0.1322545795516914,
            0.1196742657014096,
            0.02159541577918922,
            0.05988613964024225
        ]
    },
    {
        "columnWords": [
            "pay",
            "text",
            "young"
        ],
        "rowWords": [
            "history",
            "power",
            "income"
        ],
        "correctAnswers": [
            [
                "online",
                "outline",
                "famous"
            ],
            [
                "operate",
                "output",
                "male"
            ],
            [
                "pension",
                "paragraph",
                "elderly"
            ]
        ],
        "gridQuality": [
            0.0662635901627523,
            0.1539098074434332,
            0.15448208667322794,
            0.10833605951995562,
            0.11178148941051624,
            0.04441966429209532,
            0.31056449322128843,
            0.042446237589917724,
            0.007121455327602888
        ]
    },
    {
        "columnWords": [
            "news",
            "camera",
            "thought"
        ],
        "rowWords": [
            "task",
            "past",
            "card"
        ],
        "correctAnswers": [
            [
                "reporting",
                "motion",
                "complicated"
            ],
            [
                "upcoming",
                "extended",
                "lately"
            ],
            [
                "info",
                "laptop",
                "bet"
            ]
        ],
        "gridQuality": [
            0.026151516409251285,
            -0.022358930646398045,
            0.09771273293965144,
            0.1435203088776188,
            -0.022068271892318525,
            0.18142196112415332,
            -0.02010091848781126,
            0.12408831858792302,
            0.038118412557548
        ]
    },
    {
        "columnWords": [
            "rise",
            "effort",
            "folk"
        ],
        "rowWords": [
            "heavy",
            "hit",
            "meeting"
        ],
        "correctAnswers": [
            [
                "iron",
                "minimal",
                "classical"
            ],
            [
                "cent",
                "mistake",
                "tune"
            ],
            [
                "summit",
                "cooperation",
                "venue"
            ]
        ],
        "gridQuality": [
            0.05960066448801382,
            0.1560549768290036,
            0.042016558574949237,
            0.09766017974811403,
            0.14666724648364304,
            0.09123645130894009,
            0.017683158873144422,
            0.2043174168023314,
            0.013153109271919261
        ]
    },
    {
        "columnWords": [
            "wife",
            "student",
            "weight"
        ],
        "rowWords": [
            "nobody",
            "church",
            "owner"
        ],
        "correctAnswers": [
            [
                "stranger",
                "given",
                "pill"
            ],
            [
                "bishop",
                "theology",
                "shape"
            ],
            [
                "spouse",
                "loan",
                "fitness"
            ]
        ],
        "gridQuality": [
            0.150947829421318,
            0.03925024720646719,
            0.11355857683175674,
            0.07912491968157687,
            0.15970148214980995,
            -0.019160755464684653,
            0.01987365210674108,
            0.1746595238069184,
            -0.00037044359258842086
        ]
    },
    {
        "columnWords": [
            "fear",
            "dark",
            "future"
        ],
        "rowWords": [
            "treat",
            "half",
            "hit"
        ],
        "correctAnswers": [
            [
                "suffering",
                "candy",
                "inform"
            ],
            [
                "aside",
                "medium",
                "working"
            ],
            [
                "sudden",
                "dawn",
                "upcoming"
            ]
        ],
        "gridQuality": [
            0.09619745379025979,
            0.07107628923926979,
            0.1266175089104684,
            0.03460959568516475,
            0.12058027862247234,
            0.12121828754667863,
            0.05718717719758726,
            -0.013416502840729705,
            0.06631225285453679
        ]
    },
    {
        "columnWords": [
            "show",
            "push",
            "kill"
        ],
        "rowWords": [
            "produce",
            "economy",
            "issue"
        ],
        "correctAnswers": [
            [
                "fantastic",
                "utilize",
                "deadly"
            ],
            [
                "reality",
                "momentum",
                "dying"
            ],
            [
                "august",
                "aside",
                "unless"
            ]
        ],
        "gridQuality": [
            0.10461819298259734,
            0.09718050742456974,
            0.03915355773560991,
            0.019192530015729625,
            0.13317985066269733,
            -0.0022597003049377173,
            0.18067941607835103,
            0.09167051399600634,
            0.0013619180953153842
        ]
    },
    {
        "columnWords": [
            "income",
            "guy",
            "art"
        ],
        "rowWords": [
            "beat",
            "loss",
            "degree"
        ],
        "correctAnswers": [
            [
                "sum",
                "daddy",
                "festival"
            ],
            [
                "estimated",
                "fat",
                "nature"
            ],
            [
                "accounting",
                "standing",
                "architecture"
            ]
        ],
        "gridQuality": [
            -0.025899690893962157,
            0.1821519272723997,
            0.03807237612909553,
            0.16318280362610937,
            0.07579414968458875,
            0.036880460068310694,
            0.13482292863255574,
            0.017909814592121154,
            0.1657614745523749
        ]
    },
    {
        "columnWords": [
            "park",
            "want",
            "chair"
        ],
        "rowWords": [
            "family",
            "sleep",
            "bag"
        ],
        "correctAnswers": [
            [
                "residence",
                "involved",
                "dining"
            ],
            [
                "walking",
                "mood",
                "pillow"
            ],
            [
                "golf",
                "wrap",
                "canvas"
            ]
        ],
        "gridQuality": [
            0.11970896035864875,
            0.20170867842098839,
            0.042943365188930716,
            -0.009646849643422217,
            0.13653606510383076,
            -0.022911264992039326,
            0.016755269643010218,
            0.11447924782135477,
            0.04455908132904862
        ]
    },
    {
        "columnWords": [
            "range",
            "lawyer",
            "debate"
        ],
        "rowWords": [
            "defense",
            "worry",
            "street"
        ],
        "correctAnswers": [
            [
                "combined",
                "investigator",
                "opposition"
            ],
            [
                "depending",
                "advise",
                "confusion"
            ],
            [
                "square",
                "neighborhood",
                "protest"
            ]
        ],
        "gridQuality": [
            0.08238164692068395,
            0.1655864304117043,
            0.09087074424408115,
            0.14952189675195804,
            0.10543335704662571,
            0.17677605531321405,
            0.14843712656629915,
            0.02490255969798194,
            0.03321111004769295
        ]
    },
    {
        "columnWords": [
            "star",
            "bag",
            "quality"
        ],
        "rowWords": [
            "safety",
            "real",
            "pay"
        ],
        "correctAnswers": [
            [
                "guard",
                "protective",
                "improved"
            ],
            [
                "legend",
                "fake",
                "genuine"
            ],
            [
                "guest",
                "lunch",
                "premium"
            ]
        ],
        "gridQuality": [
            0.058865593402440464,
            0.011836691083963347,
            0.1194958914149078,
            0.0817021926922914,
            -0.0038679158946428593,
            0.1188273475591084,
            -0.003387883638074629,
            0.0984828692814641,
            0.14809827262845465
        ]
    },
    {
        "columnWords": [
            "purpose",
            "army",
            "police"
        ],
        "rowWords": [
            "charge",
            "date",
            "son"
        ],
        "correctAnswers": [
            [
                "thereby",
                "command",
                "jail"
            ],
            [
                "exact",
                "august",
                "thursday"
            ],
            [
                "sake",
                "prince",
                "mayor"
            ]
        ],
        "gridQuality": [
            0.17608887931148354,
            -0.021337430151263548,
            0.16446311603210872,
            0.1260503733673528,
            -0.0049575616489424545,
            0.08682607606153936,
            0.10358309711061531,
            0.08537078089975625,
            0.09427847641088083
        ]
    },
    {
        "columnWords": [
            "care",
            "man",
            "state"
        ],
        "rowWords": [
            "health",
            "club",
            "family"
        ],
        "correctAnswers": [
            [
                "medication",
                "serious",
                "legislative"
            ],
            [
                "welcome",
                "boss",
                "tournament"
            ],
            [
                "visit",
                "husband",
                "present"
            ]
        ],
        "gridQuality": [
            0.19381775328715378,
            -0.0042492734514603114,
            0.07701112464471005,
            -0.017038616016370356,
            0.09264529905438246,
            0.10125092532342383,
            0.05487369003273779,
            0.14772845829286474,
            0.04128370762675393
        ]
    },
    {
        "columnWords": [
            "normal",
            "chair",
            "offer"
        ],
        "rowWords": [
            "charge",
            "course",
            "debate"
        ],
        "correctAnswers": [
            [
                "minimum",
                "vice",
                "payment"
            ],
            [
                "previous",
                "instructor",
                "fantastic"
            ],
            [
                "versus",
                "presidential",
                "compromise"
            ]
        ],
        "gridQuality": [
            0.028562064011909305,
            0.04485079200683839,
            0.13052849150422696,
            0.10664241071577452,
            0.053085373803681835,
            0.16280300247581725,
            0.05800577430476683,
            -0.010027553439866499,
            0.1032661437593374
        ]
    },
    {
        "columnWords": [
            "opinion",
            "group",
            "wonder"
        ],
        "rowWords": [
            "show",
            "word",
            "nation"
        ],
        "correctAnswers": [
            [
                "previous",
                "gallery",
                "incredible"
            ],
            [
                "written",
                "key",
                "spell"
            ],
            [
                "ruling",
                "alliance",
                "continent"
            ]
        ],
        "gridQuality": [
            0.06093161751854037,
            0.1381053075291656,
            0.13504237893241433,
            0.10163407876393771,
            0.021630422941693483,
            0.16534750436260492,
            0.09025602667893351,
            0.12489040238516758,
            0.043219132615105016
        ]
    },
    {
        "columnWords": [
            "hold",
            "word",
            "site"
        ],
        "rowWords": [
            "subject",
            "freedom",
            "growth"
        ],
        "correctAnswers": [
            [
                "limit",
                "vocabulary",
                "related"
            ],
            [
                "struggle",
                "joy",
                "privacy"
            ],
            [
                "steady",
                "productivity",
                "improved"
            ]
        ],
        "gridQuality": [
            0.10250328548906384,
            0.13100585314230906,
            0.12046976813544019,
            0.09639209405909477,
            0.05757011608238927,
            0.06781468199499263,
            0.2041473570372414,
            -0.013407829926355586,
            0.030505788479442852
        ]
    },
    {
        "columnWords": [
            "site",
            "dog",
            "base"
        ],
        "rowWords": [
            "section",
            "stay",
            "product"
        ],
        "correctAnswers": [
            [
                "archive",
                "pit",
                "plate"
            ],
            [
                "totally",
                "walking",
                "comfortable"
            ],
            [
                "marketing",
                "bull",
                "combined"
            ]
        ],
        "gridQuality": [
            0.09316637949652329,
            -0.014734436628145442,
            0.05043731240621918,
            0.08870917451696947,
            0.1363743002022254,
            0.037046105951622166,
            0.12521995235352357,
            0.004298692109926172,
            0.0990240726272078
        ]
    },
    {
        "columnWords": [
            "drive",
            "report",
            "skill"
        ],
        "rowWords": [
            "machine",
            "service",
            "local"
        ],
        "correctAnswers": [
            [
                "disk",
                "maker",
                "technique"
            ],
            [
                "storage",
                "inquiry",
                "required"
            ],
            [
                "main",
                "council",
                "passion"
            ]
        ],
        "gridQuality": [
            0.11632731221169468,
            -0.025939422248166588,
            0.15211815052787125,
            0.026035318164940313,
            0.09529901200731894,
            0.055553865793145474,
            0.05258350246684651,
            0.12236507153428022,
            0.014918840233001385
        ]
    },
    {
        "columnWords": [
            "king",
            "baby",
            "date"
        ],
        "rowWords": [
            "earth",
            "letter",
            "fan"
        ],
        "correctAnswers": [
            [
                "evil",
                "alien",
                "due"
            ],
            [
                "secretary",
                "invitation",
                "registration"
            ],
            [
                "legend",
                "shower",
                "info"
            ]
        ],
        "gridQuality": [
            0.15807389870725652,
            0.055788400356065915,
            0.026146938212454618,
            0.0044136346295780005,
            0.03625431709107563,
            0.16130435525610687,
            0.12249990228687246,
            0.10335553628166427,
            0.009191039392638212
        ]
    },
    {
        "columnWords": [
            "talk",
            "island",
            "skin"
        ],
        "rowWords": [
            "judge",
            "bed",
            "area"
        ],
        "correctAnswers": [
            [
                "sue",
                "jail",
                "appearance"
            ],
            [
                "crazy",
                "vacation",
                "smooth"
            ],
            [
                "chat",
                "northeast",
                "tissue"
            ]
        ],
        "gridQuality": [
            0.14001422692182353,
            -0.0050944466379183595,
            -0.002205079026689871,
            0.04643083056412434,
            0.03312827822465092,
            -0.007196074004900521,
            0.12998702374415405,
            0.18995359719370553,
            0.12689891258607822
        ]
    },
    {
        "columnWords": [
            "control",
            "left",
            "fan"
        ],
        "rowWords": [
            "music",
            "animal",
            "light"
        ],
        "correctAnswers": [
            [
                "integration",
                "hip",
                "genre"
            ],
            [
                "prevention",
                "rabbit",
                "toy"
            ],
            [
                "output",
                "gray",
                "flame"
            ]
        ],
        "gridQuality": [
            0.06595208928546192,
            0.08961725572900814,
            0.12721977380159,
            0.1146878357861012,
            0.028847943061984016,
            -0.012831660485830176,
            0.1065318192042678,
            0.09838243075292907,
            0.03474108227006534
        ]
    },
    {
        "columnWords": [
            "health",
            "hate",
            "fear"
        ],
        "rowWords": [
            "option",
            "state",
            "rate"
        ],
        "correctAnswers": [
            [
                "affordable",
                "prefer",
                "possibly"
            ],
            [
                "institute",
                "miss",
                "conflict"
            ],
            [
                "improvement",
                "difference",
                "sudden"
            ]
        ],
        "gridQuality": [
            0.0907597205990126,
            0.12670433256122215,
            0.092588074340893,
            0.14731447687276633,
            0.03520238111038565,
            0.012443440715646514,
            0.05333392717527086,
            -0.01715272002623991,
            0.005121453235220841
        ]
    },
    {
        "columnWords": [
            "staff",
            "green",
            "affect"
        ],
        "rowWords": [
            "center",
            "local",
            "thing"
        ],
        "correctAnswers": [
            [
                "coordinator",
                "silver",
                "lower"
            ],
            [
                "provided",
                "organic",
                "associated"
            ],
            [
                "pleased",
                "sweet",
                "necessarily"
            ]
        ],
        "gridQuality": [
            0.11985753750306183,
            0.013430600119436642,
            -0.00533551833757695,
            0.07128920189142873,
            0.0558823103254954,
            0.059391438582822254,
            0.11430865571384641,
            0.11984648630899397,
            0.21308455183700625
        ]
    },
    {
        "columnWords": [
            "right",
            "police",
            "writer"
        ],
        "rowWords": [
            "reader",
            "help",
            "street"
        ],
        "correctAnswers": [
            [
                "angle",
                "detective",
                "poetry"
            ],
            [
                "necessary",
                "personnel",
                "cope"
            ],
            [
                "lane",
                "assault",
                "performer"
            ]
        ],
        "gridQuality": [
            0.024996485226467136,
            -0.02177012028090486,
            0.15038152073339484,
            0.21433384082566742,
            0.09899994172106075,
            -0.0021947806861697394,
            0.1104901419695844,
            0.0191768613355352,
            0.025809198542772194
        ]
    },
    {
        "columnWords": [
            "option",
            "heat",
            "human"
        ],
        "rowWords": [
            "school",
            "action",
            "fear"
        ],
        "correctAnswers": [
            [
                "starting",
                "cooking",
                "biology"
            ],
            [
                "default",
                "hot",
                "responsible"
            ],
            [
                "possibility",
                "flame",
                "dying"
            ]
        ],
        "gridQuality": [
            0.05099101826447283,
            0.04345124646271914,
            0.1884587489342595,
            0.1004041081131899,
            0.027135937251632547,
            0.07786136885525297,
            0.09863821444544396,
            0.06725280254975752,
            0.1294837786964329
        ]
    },
    {
        "columnWords": [
            "tonight",
            "past",
            "offer"
        ],
        "rowWords": [
            "kid",
            "heat",
            "order"
        ],
        "correctAnswers": [
            [
                "daddy",
                "teenage",
                "friendly"
            ],
            [
                "cooking",
                "dry",
                "steam"
            ],
            [
                "schedule",
                "subsequent",
                "availability"
            ]
        ],
        "gridQuality": [
            0.1279005482779394,
            0.11139527860471232,
            0.04344821844501345,
            -0.029458838735682447,
            0.02325823180794384,
            0.012051995026610918,
            0.014188170645358045,
            0.12213914584430563,
            0.19493732419741672
        ]
    },
    {
        "columnWords": [
            "career",
            "plan",
            "bank"
        ],
        "rowWords": [
            "news",
            "account",
            "hold"
        ],
        "correctAnswers": [
            [
                "celebrity",
                "guide",
                "journal"
            ],
            [
                "assistant",
                "monthly",
                "deposit"
            ],
            [
                "straight",
                "extend",
                "stake"
            ]
        ],
        "gridQuality": [
            0.09201726396838317,
            0.06804395717079037,
            -0.020278517646698413,
            0.027972460771848784,
            0.08474394626490778,
            0.09115076626851626,
            0.08758651439221787,
            0.12458539145082492,
            0.09677864735630659
        ]
    },
    {
        "columnWords": [
            "fail",
            "guess",
            "police"
        ],
        "rowWords": [
            "council",
            "local",
            "couple"
        ],
        "correctAnswers": [
            [
                "approval",
                "concerned",
                "commissioner"
            ],
            [
                "required",
                "particular",
                "station"
            ],
            [
                "consistently",
                "curious",
                "shooting"
            ]
        ],
        "gridQuality": [
            0.04419413099379821,
            0.025002745075199173,
            0.1527694058101543,
            0.02286903966969356,
            0.010122430598729415,
            0.10988780856320213,
            0.03952320342810656,
            0.18927221784875214,
            0.09665013173913095
        ]
    },
    {
        "columnWords": [
            "risk",
            "comment",
            "left"
        ],
        "rowWords": [
            "crazy",
            "notice",
            "heavy"
        ],
        "correctAnswers": [
            [
                "scenario",
                "joke",
                "running"
            ],
            [
                "disclosure",
                "paragraph",
                "standing"
            ],
            [
                "burden",
                "thread",
                "solid"
            ]
        ],
        "gridQuality": [
            0.050987935257771344,
            0.12986411020260014,
            0.07698266955979705,
            0.17799976217890334,
            0.1680323336169085,
            0.0863121119386584,
            0.0908095345457971,
            -0.01931897498763635,
            0.09727003321207806
        ]
    },
    {
        "columnWords": [
            "fire",
            "heat",
            "game"
        ],
        "rowWords": [
            "credit",
            "hate",
            "dog"
        ],
        "correctAnswers": [
            [
                "auto",
                "obtain",
                "casino"
            ],
            [
                "killing",
                "cold",
                "boring"
            ],
            [
                "pit",
                "coat",
                "puzzle"
            ]
        ],
        "gridQuality": [
            0.031214959044208568,
            0.003570823442472282,
            0.10911396601738232,
            0.06989045047871056,
            0.0063764822233911556,
            0.13256389955283954,
            0.14692514549453028,
            0.11195091394412304,
            0.08199977282857329
        ]
    },
    {
        "columnWords": [
            "system",
            "leave",
            "size"
        ],
        "rowWords": [
            "option",
            "town",
            "fill"
        ],
        "correctAnswers": [
            [
                "upgrade",
                "cancel",
                "minimum"
            ],
            [
                "throughout",
                "alive",
                "blue"
            ],
            [
                "flow",
                "collect",
                "accommodate"
            ]
        ],
        "gridQuality": [
            0.1642218256050988,
            0.11867397407274416,
            0.055856052617339724,
            0.034769221754399116,
            0.11658225837659963,
            0.017536798215544658,
            0.06809888321222202,
            0.12554523015435193,
            0.04098731786359178
        ]
    },
    {
        "columnWords": [
            "top",
            "simple",
            "word"
        ],
        "rowWords": [
            "call",
            "fight",
            "rock"
        ],
        "correctAnswers": [
            [
                "leading",
                "immediate",
                "refer"
            ],
            [
                "champion",
                "combat",
                "defeat"
            ],
            [
                "cliff",
                "guitar",
                "known"
            ]
        ],
        "gridQuality": [
            0.05752901433828128,
            0.09832277734989536,
            0.09034416462763661,
            0.10195223025793654,
            0.042549107453267454,
            0.02615209077087388,
            0.10398404890092683,
            0.023085972005586264,
            0.007524514804464366
        ]
    }
]

let maxAttempts = 3;
let currentAttempts = maxAttempts;


function initializeHearts() {
		currentAttempts = maxAttempts;
    const heartsContainer = document.getElementById('heartsContainer');
    heartsContainer.innerHTML = '';

    for (let i = 0; i < maxAttempts; i++) {
        const heart = document.createElement('span');
        heart.classList.add('heart');
        heart.textContent = '❤️'; // If using emoji or text
        heartsContainer.appendChild(heart);
    }
}


// Function to randomly select a game data set
function getRandomGameData() {
    const randomIndex = Math.floor(Math.random() * gameDataSets.length);
    return gameDataSets[randomIndex];
}

let currentGameData; // Global variable to hold the current game's data

    
// Function to start a new game
function startNewGame() {
		initializeHearts();
    currentGameData = getRandomGameData(); // Update global variable
    displayGameData(currentGameData); // Update game display
    // Call unfreezeGame to revert any changes made by freezeGame
    unfreezeGame();
}

// Function to reset the current game
function resetGame() {
		initializeHearts();
    displayGameData(currentGameData); // Reset game display with current game data
		// Call unfreezeGame to revert any changes made by freezeGame
    unfreezeGame();
}

// Function to display game data
function displayGameData(gameData) {
    gameData.clues = gameData.correctAnswers.flat().sort(() => Math.random() - 0.5);
    generateGrid(gameData.columnWords, gameData.rowWords);
    generateTiles(gameData.clues);
}



// Function to generate the game grid
function generateGrid(columnWords, rowWords) {
  const grid = document.getElementById('grid');

  let html = '<div class="cell"></div>'; // First cell is empty for alignment
  
  // Loop through column words to add column headings
  columnWords.forEach((word, colIndex) => {
    // Add column heading with an ID for easier selection
    html += `<div class="cell heading" id="col-${colIndex}">${word}</div>`;
  });

  // Loop through row words to add row headings and grid cells
  rowWords.forEach((rowWord, rowIndex) => {
    // Add row heading
    html += `<div class="cell heading" id="row-${rowIndex}">${rowWord}</div>`;
    
    // Loop through column words to add grid cells for each row
    columnWords.forEach((colWord, colIndex) => {
      // Add grid cell with data-row and data-col attributes
      html += `<div class="cell droppable" data-row="${rowIndex}" data-col="${colIndex}" ondrop="drop(event)" ondragover="allowDrop(event)"></div>`;
    });	
  });

  // Set the innerHTML of the grid
  grid.innerHTML = html;

}



// Function to generate the clue tiles
function generateTiles(clues) {
    const tilesContainer = document.getElementById('tiles');
    tilesContainer.innerHTML = clues.map((clue, index) => 
        `<div class="tile" draggable="true" id="tile-${index}" 
        ondragstart="drag(event)" ondrop="drop(event)" ondragover="allowDrop(event)">${clue}</div>`
    ).join('');
}


function allowDrop(ev) {
    ev.preventDefault();
}


function drag(ev) {
ev.dataTransfer.setData('text', ev.target.id);
}



function drop(ev) {
    ev.preventDefault();
    ev.stopPropagation(); // Stop the event from bubbling up

    const draggedTileId = ev.dataTransfer.getData('text');
    const draggedTile = document.getElementById(draggedTileId);
    let target = ev.target;

    // Check if the drop target is a tile and find the closest droppable ancestor
    if (target.classList.contains('tile')) {

        if (target.parentNode.classList.contains('cell')) {
            // Dropped on a tile within the grid
            target = target.parentNode;
        } else if (target.parentNode.id === 'tiles') {
            // Dropped on a tile within the tile container
            shuffleTilesInContainer(target, draggedTile);
            return; // Exit the function since we've handled this case
        }
    }

    if (target.classList.contains('droppable')) {
        // Dropping on a cell (empty or with a tile) in the grid
        if (target.firstChild && target.firstChild !== draggedTile) {
            // If the cell is not empty, move the existing tile back to the tile container
            document.getElementById('tiles').appendChild(target.firstChild);
        }
        // Remove the dragged tile from its previous parent if it has one
        if (draggedTile.parentNode) {
            draggedTile.parentNode.removeChild(draggedTile);
        }
        // Place the dragged tile in the cell
        target.appendChild(draggedTile);
    }
}


function shuffleTilesInContainer(targetTile, draggedTile) {

    const tilesContainer = document.getElementById('tiles');
    if (draggedTile !== targetTile) {
        // Find the index of the targetTile and draggedTile
        const targetIndex = Array.from(tilesContainer.children).indexOf(targetTile);
        const draggedIndex = Array.from(tilesContainer.children).indexOf(draggedTile);

        if (targetIndex > draggedIndex) {
            // If the target tile is after the dragged tile, insert the dragged tile before the target tile
            tilesContainer.insertBefore(draggedTile, targetTile.nextSibling);
        } else {
            // If the target tile is before the dragged tile, insert the dragged tile before the target tile
            tilesContainer.insertBefore(draggedTile, targetTile);
        }
    }
}




function checkAnswers() {
    const grid = document.getElementById('grid');
    const entered = currentGameData.rowWords.map(() => []);
    let allCorrect = false;

    // Populate the entered with the answers from the grid
    currentGameData.rowWords.forEach((rowWord, rowIndex) => {
        currentGameData.columnWords.forEach((colWord, colIndex) => {
            const cell = grid.querySelector(`.droppable[data-row="${rowIndex}"][data-col="${colIndex}"]`);

            if (cell) {
                const tile = cell.firstChild;
                const answer = tile ? tile.textContent.trim() : '';
                entered[rowIndex][colIndex] = answer;

                // Check if the answer matches the correct answer
                const isCorrect = answer === currentGameData.correctAnswers[rowIndex][colIndex];
            } else {
                console.error(`Cell not found for row ${rowWord}, column ${colWord}`);
            }
        });
    });


    // Check if any answers have been entered into the grid
    const hasAnswers = entered.some(entered => entered.some(answer => answer));
		let correctness = null;
		let rowColCorrectness = null;
				
    if (hasAnswers) {
        // Check correctness for rows and columns
        correctness = elementwiseEquality(currentGameData.correctAnswers,entered);
				rowColCorrectness = sumTrueValues(correctness);

        // Test whether the game has been won
        allCorrect = rowColCorrectness.totalSums==9;

    if (allCorrect) {
    		colourAllHeadings(rowColCorrectness);
      	grid.classList.add('win');
        document.getElementById('result').textContent = 'Congratulations!';
    } else {
        currentAttempts--;
        updateHearts();

        if (currentAttempts <= 0) {
            // Freeze game and show loss message
            freezeGame();
        }
				colourAllHeadings(rowColCorrectness);

        document.getElementById('result').textContent = 'Some answers are incorrect.';
    }} else{
    	  document.getElementById('result').textContent = 'No answers to check.';
    }
}

function colourAllHeadings(rowColCorrectness=null){

		// Get the heading elements using their IDs
				const columnHeadings = currentGameData.columnWords.map((_, colIndex) => document.getElementById(`col-${colIndex}`));
				const rowHeadings = currentGameData.rowWords.map((_, rowIndex) => document.getElementById(`row-${rowIndex}`));

			// Loop through each column heading
			columnHeadings.forEach((heading, columnIndex) => {
    	// Get the sum of correctness for the current column
    	const sum = rowColCorrectness===null ? 0:rowColCorrectness.columnSums[columnIndex];
      
      // Set the background color based on the sum
      colourHeading(heading, sum);
			});

			// Loop through each row heading
			rowHeadings.forEach((heading, rowIndex) => {
    	// Get the sum of correctness for the current column
    	const sum = rowColCorrectness===null ? 0 : rowColCorrectness.rowSums[rowIndex];
    
    	// Set the background color based on the sum
    	colourHeading(heading, sum);
			});
}

function colourHeading(heading, correctnessCount=0){
	heading.style.backgroundColor = correctnessCount === 0 ? 'red' :
                                    (correctnessCount === 3) ? 'lightgreen' :
                                    'yellow'; // Default color if none of the conditions match
	
}


function elementwiseEquality(arr1, arr2) {
    // Check if the arrays have the same dimensions
    if (arr1.length !== arr2.length || arr1[0].length !== arr2[0].length) {
        throw new Error("Arrays must have the same dimensions.");
    }

    const result = [];

    // Iterate over each element of the arrays and compare them
    for (let i = 0; i < arr1.length; i++) {
        result[i] = [];
        for (let j = 0; j < arr1[i].length; j++) {
            result[i][j] = arr1[i][j] === arr2[i][j];
        }
    }

    return result;
}

function sumTrueValues(arr) {
    const rowCount = arr.length;
    const columnCount = arr[0].length;
    const rowSums = Array(rowCount).fill(0); // Initialize an array to store row sums
    const columnSums = Array(columnCount).fill(0); // Initialize an array to store column sums
		let totalSums = 0;
		
    // Calculate row sums
    for (let i = 0; i < rowCount; i++) {
        for (let j = 0; j < columnCount; j++) {
            if (arr[i][j] === true) {
                rowSums[i]++;
                totalSums++;
            }
        }
    }

    // Calculate column sums
    for (let j = 0; j < columnCount; j++) {
        for (let i = 0; i < rowCount; i++) {
            if (arr[i][j] === true) {
                columnSums[j]++;
            }
        }
    }

    return { rowSums, columnSums,  totalSums};
}

// Function to randomly select a game data set
function getRandomGameData() {
    const randomIndex = Math.floor(Math.random() * gameDataSets.length);
    return gameDataSets[randomIndex];
}


function updateHearts() {
    const hearts = document.querySelectorAll('.heart');
    hearts.forEach((heart, index) => {
        if (index < currentAttempts) {
            heart.style.opacity = '1'; // or visible
        } else {
            heart.style.opacity = '0.3'; // or hidden
        }
    });
}

function freezeGame() {
    // Disable the "Check Answers" button
    const checkAnswersButton = document.getElementById('checkAnswers');
    if (checkAnswersButton) {
        checkAnswersButton.disabled = true;
    }

    // Disable dragging for all tiles
    const tiles = document.querySelectorAll('.tile');
    tiles.forEach(tile => {
        tile.draggable = false;
    });

    // Change the appearance of the grid to indicate the game is over
    const grid = document.getElementById('grid');
    if (grid) {
        grid.style.backgroundColor = 'red';
        grid.style.opacity = '0.5';
    }

    // Display a message to the user
    const resultDiv = document.getElementById('result');
    if (resultDiv) {
        resultDiv.textContent = 'Better luck next time!';
        resultDiv.style.color = 'white'; // Adjust styling as needed
    }
}


function unfreezeGame() {
    // Re-enable the "Check Answers" button
    const checkAnswersButton = document.getElementById('checkAnswers');
    if (checkAnswersButton) {
        checkAnswersButton.disabled = false;
    }

    // Re-enable dragging for all tiles
    const tiles = document.querySelectorAll('.tile');
    tiles.forEach(tile => {
        tile.draggable = true;
    });

    // Reset the grid's appearance
    const grid = document.getElementById('grid');
    if (grid) {
    		grid.className = '';
        grid.style.backgroundColor = ''; // Reset to original background color
        grid.style.opacity = '1'; // Reset opacity
    }

    // Clear any end-game messages
    const resultDiv = document.getElementById('result');
    if (resultDiv) {
        resultDiv.textContent = '';
    }
}


// Event listeners

document.getElementById('checkAnswers').addEventListener('click', checkAnswers);
document.addEventListener('DOMContentLoaded', startNewGame);
document.getElementById('newGame').addEventListener('click', startNewGame);
document.getElementById('resetGame').addEventListener('click', resetGame);