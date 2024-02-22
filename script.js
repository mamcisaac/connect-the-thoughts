// Structure for game data
const gameDataSets = [
    {
        "columnWords": [
            "share",
            "range",
            "minute"
        ],
        "rowWords": [
            "mile",
            "pay",
            "dream"
        ],
        "correctAnswers": [
            [
                "track",
                "distance",
                "walking"
            ],
            [
                "obligation",
                "affordable",
                "twice"
            ],
            [
                "happiness",
                "fantastic",
                "weekend"
            ]
        ],
        "gridQuality": [
            -0.007959708397931586,
            0.018710348069383986,
            0.11874632439453525,
            0.18320827753819324,
            0.11289821910965703,
            0.11115279620056318,
            0.1490059641119087,
            0.006553967652946913,
            0.04034559753700351
        ]
    },
    {
        "columnWords": [
            "girl",
            "death",
            "hold"
        ],
        "rowWords": [
            "career",
            "street",
            "term"
        ],
        "correctAnswers": [
            [
                "fashion",
                "fame",
                "impressive"
            ],
            [
                "parade",
                "highway",
                "block"
            ],
            [
                "ugly",
                "mortality",
                "typically"
            ]
        ],
        "gridQuality": [
            0.047176934650670965,
            0.03446372752967597,
            0.07342071854337218,
            0.10022979787513009,
            0.09094224455190181,
            0.08154748113060073,
            -0.001331138738136728,
            0.11219986191704379,
            0.21380442203447125
        ]
    },
    {
        "columnWords": [
            "school",
            "pattern",
            "court"
        ],
        "rowWords": [
            "office",
            "room",
            "faith"
        ],
        "correctAnswers": [
            [
                "assistant",
                "print",
                "clerk"
            ],
            [
                "dance",
                "fabric",
                "venue"
            ],
            [
                "theology",
                "meaning",
                "conviction"
            ]
        ],
        "gridQuality": [
            0.13433193025186285,
            0.047069862734301804,
            0.18217658324301722,
            0.06399833632429897,
            0.06699004649630025,
            0.01779549134792857,
            0.13856231824597454,
            0.038670023823057176,
            0.24274747745237069
        ]
    },
    {
        "columnWords": [
            "page",
            "surface",
            "partner"
        ],
        "rowWords": [
            "skill",
            "control",
            "car"
        ],
        "correctAnswers": [
            [
                "given",
                "depth",
                "mentor"
            ],
            [
                "edit",
                "fluid",
                "integration"
            ],
            [
                "picture",
                "flat",
                "dealer"
            ]
        ],
        "gridQuality": [
            0.005603020234622669,
            0.09660676202834295,
            0.13229133009642946,
            0.10676652936224196,
            0.19147266890089654,
            0.12049212569403134,
            0.05521483341125599,
            0.10378230417583745,
            0.07210121184550278
        ]
    },
    {
        "columnWords": [
            "media",
            "line",
            "result"
        ],
        "rowWords": [
            "style",
            "town",
            "touch"
        ],
        "correctAnswers": [
            [
                "publishing",
                "signature",
                "formal"
            ],
            [
                "council",
                "lake",
                "province"
            ],
            [
                "mobile",
                "telephone",
                "painful"
            ]
        ],
        "gridQuality": [
            0.0345371496751814,
            0.04943088085328129,
            0.087854621659472,
            0.0030896385145654515,
            0.095885097703718,
            0.1075887789181178,
            0.10388936975120933,
            0.04165669900409197,
            0.1115527437474726
        ]
    },
    {
        "columnWords": [
            "safety",
            "feature",
            "private"
        ],
        "rowWords": [
            "father",
            "defense",
            "color"
        ],
        "correctAnswers": [
            [
                "birth",
                "coming",
                "spouse"
            ],
            [
                "prevention",
                "basically",
                "sector"
            ],
            [
                "orange",
                "display",
                "medium"
            ]
        ],
        "gridQuality": [
            -0.004844853488884193,
            0.09011387682491534,
            0.10374105608373785,
            0.0993448695369471,
            0.01991960196602527,
            -0.010687782175181959,
            -0.01428751251223015,
            0.19140363628011303,
            -0.0017904981894593108
        ]
    },
    {
        "columnWords": [
            "level",
            "style",
            "career"
        ],
        "rowWords": [
            "soldier",
            "school",
            "decade"
        ],
        "correctAnswers": [
            [
                "combat",
                "warrior",
                "civilian"
            ],
            [
                "secondary",
                "dance",
                "graduation"
            ],
            [
                "rapidly",
                "unlike",
                "fame"
            ]
        ],
        "gridQuality": [
            0.06961349381641224,
            -0.012194085100797891,
            -0.020839461434503437,
            0.1681254204968683,
            0.11993922163765591,
            0.07330545041140946,
            0.10950944115291217,
            0.07172789915348976,
            0.09330158915051956
        ]
    },
    {
        "columnWords": [
            "study",
            "safety",
            "color"
        ],
        "rowWords": [
            "quality",
            "force",
            "press"
        ],
        "correctAnswers": [
            [
                "extensive",
                "efficiency",
                "gorgeous"
            ],
            [
                "latter",
                "armed",
                "navy"
            ],
            [
                "lecture",
                "privacy",
                "orange"
            ]
        ],
        "gridQuality": [
            0.1165444850939732,
            0.10890884229747833,
            0.20723613633261317,
            0.07352668357500436,
            0.06632908736295118,
            0.050416940484666606,
            0.091653615848317,
            -0.012346991339573843,
            -0.008053940074359778
        ]
    },
    {
        "columnWords": [
            "fish",
            "claim",
            "laugh"
        ],
        "rowWords": [
            "history",
            "health",
            "meet"
        ],
        "correctAnswers": [
            [
                "marine",
                "invention",
                "fascinating"
            ],
            [
                "diet",
                "liability",
                "stress"
            ],
            [
                "lunch",
                "exceed",
                "tonight"
            ]
        ],
        "gridQuality": [
            -0.0035765125910577344,
            0.11805416798097323,
            0.036708419318730146,
            0.07680444105987116,
            0.12400533392825286,
            -0.026837313327026324,
            0.13006804095788072,
            0.10055731030509885,
            0.11904994641119948
        ]
    },
    {
        "columnWords": [
            "image",
            "return",
            "box"
        ],
        "rowWords": [
            "book",
            "half",
            "lack"
        ],
        "correctAnswers": [
            [
                "graphic",
                "welcome",
                "edition"
            ],
            [
                "shape",
                "final",
                "flat"
            ],
            [
                "perceived",
                "ensure",
                "technical"
            ]
        ],
        "gridQuality": [
            0.12378541645013819,
            0.07953434444289087,
            0.07363236983242416,
            0.009687467052315935,
            0.0903243091572955,
            0.10236902935356174,
            0.05996513819945115,
            0.10832393366330983,
            7.34883770889816e-05
        ]
    },
    {
        "columnWords": [
            "kid",
            "top",
            "trial"
        ],
        "rowWords": [
            "weapon",
            "age",
            "expert"
        ],
        "correctAnswers": [
            [
                "knife",
                "enemy",
                "conviction"
            ],
            [
                "childhood",
                "above",
                "prior"
            ],
            [
                "anybody",
                "leading",
                "testimony"
            ]
        ],
        "gridQuality": [
            0.006665019413604423,
            0.028913143357488624,
            0.04595516416152301,
            0.24967462507085425,
            0.09564228209780545,
            0.11023889968698808,
            0.03277306196400054,
            0.12927369715767478,
            0.18491379619797865
        ]
    },
    {
        "columnWords": [
            "court",
            "focus",
            "fine"
        ],
        "rowWords": [
            "option",
            "local",
            "level"
        ],
        "correctAnswers": [
            [
                "bankruptcy",
                "utilize",
                "attractive"
            ],
            [
                "behalf",
                "rural",
                "serving"
            ],
            [
                "circuit",
                "intensity",
                "grade"
            ]
        ],
        "gridQuality": [
            0.07694724638726302,
            0.1094632264909694,
            0.07110824722326847,
            0.08565935955005166,
            0.09460003102116166,
            0.07586032601105863,
            0.03596469353156395,
            0.2068748185313265,
            0.1010419293443856
        ]
    },
    {
        "columnWords": [
            "hand",
            "human",
            "expert"
        ],
        "rowWords": [
            "program",
            "few",
            "service"
        ],
        "correctAnswers": [
            [
                "instruction",
                "diversity",
                "trainer"
            ],
            [
                "gently",
                "distinct",
                "helpful"
            ],
            [
                "mobile",
                "associated",
                "repair"
            ]
        ],
        "gridQuality": [
            0.006224608042620816,
            0.10523525555151836,
            0.10331557377184153,
            0.18128128310318792,
            0.1387915002160578,
            0.05913259593728637,
            0.008394881546856747,
            0.006831448925311068,
            0.034064066644190705
        ]
    },
    {
        "columnWords": [
            "speech",
            "law",
            "turn"
        ],
        "rowWords": [
            "help",
            "music",
            "goal"
        ],
        "correctAnswers": [
            [
                "aids",
                "finance",
                "adjust"
            ],
            [
                "vocal",
                "copyright",
                "roll"
            ],
            [
                "presentation",
                "penalty",
                "fourth"
            ]
        ],
        "gridQuality": [
            0.0473932489568315,
            0.09014116696322594,
            0.19079285480100283,
            0.1222409187580108,
            0.042616799321245624,
            0.06274291883525906,
            -0.02649437577633429,
            0.10312675917983061,
            0.09701079063683371
        ]
    },
    {
        "columnWords": [
            "message",
            "policy",
            "water"
        ],
        "rowWords": [
            "staff",
            "march",
            "stand"
        ],
        "correctAnswers": [
            [
                "chat",
                "academic",
                "addition"
            ],
            [
                "originally",
                "prior",
                "lake"
            ],
            [
                "display",
                "ought",
                "wash"
            ]
        ],
        "gridQuality": [
            0.04532205665045941,
            0.15683536430497536,
            0.03804885074965636,
            0.0868371199828748,
            0.03219195436615507,
            0.04330704569861232,
            0.12074410464245366,
            0.09295261040109337,
            0.16808709520774845
        ]
    },
    {
        "columnWords": [
            "event",
            "track",
            "father"
        ],
        "rowWords": [
            "tax",
            "focus",
            "room"
        ],
        "correctAnswers": [
            [
                "liability",
                "cash",
                "retired"
            ],
            [
                "awareness",
                "improved",
                "convinced"
            ],
            [
                "booth",
                "garage",
                "standing"
            ]
        ],
        "gridQuality": [
            0.04939509190078417,
            0.019186291884952356,
            0.06679159038113047,
            0.15017389628787148,
            0.13655305884436642,
            0.09859612336855561,
            0.17423680577197764,
            0.08367821240464801,
            0.03802377146086999
        ]
    },
    {
        "columnWords": [
            "fail",
            "simple",
            "outside"
        ],
        "rowWords": [
            "image",
            "focus",
            "heavy"
        ],
        "correctAnswers": [
            [
                "scan",
                "interface",
                "visible"
            ],
            [
                "consistently",
                "innovative",
                "leading"
            ],
            [
                "severe",
                "solid",
                "rain"
            ]
        ],
        "gridQuality": [
            -0.024109306498170224,
            0.09591051646891113,
            0.06572382657324982,
            0.08718036455431977,
            0.1545827601158133,
            0.12036542423883168,
            -0.008780686878699484,
            0.08669144775862325,
            0.18946435491361824
        ]
    },
    {
        "columnWords": [
            "fall",
            "offer",
            "box"
        ],
        "rowWords": [
            "buy",
            "game",
            "trust"
        ],
        "correctAnswers": [
            [
                "remember",
                "affordable",
                "pill"
            ],
            [
                "fourth",
                "casino",
                "puzzle"
            ],
            [
                "faith",
                "behalf",
                "bank"
            ]
        ],
        "gridQuality": [
            0.018973628022429745,
            0.16571852912785567,
            0.0679401848688832,
            0.12582993935083187,
            0.06926625606318626,
            0.1022292623399661,
            0.026634748523033935,
            0.13737795724876822,
            -0.01263068833419101
        ]
    },
    {
        "columnWords": [
            "weekend",
            "store",
            "choice"
        ],
        "rowWords": [
            "red",
            "short",
            "student"
        ],
        "correctAnswers": [
            [
                "rose",
                "flower",
                "olive"
            ],
            [
                "ride",
                "info",
                "useful"
            ],
            [
                "graduation",
                "assistant",
                "curriculum"
            ]
        ],
        "gridQuality": [
            0.01479296607517,
            0.037268879501751284,
            0.08632693900827837,
            0.1043239215684516,
            0.019891572642880107,
            0.12123411041124621,
            0.10086391283793217,
            0.08533176874189852,
            0.09201440958149842
        ]
    },
    {
        "columnWords": [
            "expert",
            "finger",
            "threat"
        ],
        "rowWords": [
            "model",
            "weapon",
            "feeling"
        ],
        "correctAnswers": [
            [
                "description",
                "hole",
                "scenario"
            ],
            [
                "instructor",
                "fist",
                "deadly"
            ],
            [
                "confident",
                "stomach",
                "panic"
            ]
        ],
        "gridQuality": [
            0.10036664516433724,
            0.0003605006878684147,
            0.004002717017796753,
            0.010082386937198873,
            0.1226251874295674,
            0.21582851503374867,
            0.09008201490972367,
            0.1413127836540351,
            0.15104665112580762
        ]
    },
    {
        "columnWords": [
            "concern",
            "food",
            "author"
        ],
        "rowWords": [
            "freedom",
            "friend",
            "affect"
        ],
        "correctAnswers": [
            [
                "unity",
                "revolution",
                "publishing"
            ],
            [
                "meanwhile",
                "pizza",
                "poet"
            ],
            [
                "extent",
                "diet",
                "alter"
            ]
        ],
        "gridQuality": [
            0.12680930014417646,
            0.01462043867438445,
            0.07452376624521617,
            0.10544706174795404,
            0.15471921245436338,
            0.13423522862616777,
            0.18812992673128837,
            0.054557223573674984,
            0.03950890848508859
        ]
    },
    {
        "columnWords": [
            "guy",
            "school",
            "ground"
        ],
        "rowWords": [
            "light",
            "account",
            "past"
        ],
        "correctAnswers": [
            [
                "smart",
                "orange",
                "medium"
            ],
            [
                "profile",
                "required",
                "separate"
            ],
            [
                "awful",
                "graduation",
                "remaining"
            ]
        ],
        "gridQuality": [
            0.037335622522000955,
            -0.012595659783082636,
            0.12791954946236428,
            -0.009562381762231564,
            0.010649226401070466,
            0.04084974185503509,
            0.1564461370459339,
            0.14310843459808908,
            0.10363878569792173
        ]
    },
    {
        "columnWords": [
            "adult",
            "talk",
            "senator"
        ],
        "rowWords": [
            "parent",
            "catch",
            "design"
        ],
        "correctAnswers": [
            [
                "infant",
                "concerned",
                "spouse"
            ],
            [
                "bite",
                "laugh",
                "passing"
            ],
            [
                "graphic",
                "workshop",
                "committee"
            ]
        ],
        "gridQuality": [
            0.13131609978692393,
            0.10539965846725363,
            0.016042197885599796,
            -0.025735698518935868,
            0.19494105981976428,
            -0.01918581811014819,
            0.10914493104124179,
            0.10878165826650432,
            -0.006838801804487371
        ]
    },
    {
        "columnWords": [
            "hate",
            "ability",
            "editor"
        ],
        "rowWords": [
            "white",
            "general",
            "police"
        ],
        "correctAnswers": [
            [
                "plain",
                "contrast",
                "stone"
            ],
            [
                "except",
                "improvement",
                "assistant"
            ],
            [
                "killing",
                "unlikely",
                "deputy"
            ]
        ],
        "gridQuality": [
            0.09147351687223049,
            0.08658435708818557,
            -0.005994389920942478,
            0.05132037440216275,
            0.1926740751072007,
            0.10461458250334421,
            0.15905563017228785,
            0.015861330742051427,
            -0.02495646876285773
        ]
    },
    {
        "columnWords": [
            "lay",
            "visit",
            "purpose"
        ],
        "rowWords": [
            "set",
            "site",
            "manager"
        ],
        "correctAnswers": [
            [
                "half",
                "weekend",
                "ideal"
            ],
            [
                "beneath",
                "chat",
                "solely"
            ],
            [
                "vice",
                "specialist",
                "principal"
            ]
        ],
        "gridQuality": [
            0.06934144547824905,
            0.08492331879606885,
            0.11378981767075158,
            0.004452776004610359,
            0.0990787627287748,
            0.12622696974167413,
            0.015746079374700073,
            0.06905053977960995,
            0.12240119016561635
        ]
    },
    {
        "columnWords": [
            "school",
            "method",
            "success"
        ],
        "rowWords": [
            "human",
            "march",
            "task"
        ],
        "correctAnswers": [
            [
                "biology",
                "genetic",
                "diversity"
            ],
            [
                "noon",
                "added",
                "coming"
            ],
            [
                "assignment",
                "interface",
                "crucial"
            ]
        ],
        "gridQuality": [
            0.12676210543385036,
            0.04186614764941665,
            0.11280696014054103,
            0.18595182940250288,
            -0.024568389290907988,
            0.07445739250087802,
            0.002101885785373403,
            0.12895081095617367,
            0.07713710148572361
        ]
    },
    {
        "columnWords": [
            "process",
            "friend",
            "effort"
        ],
        "rowWords": [
            "cancer",
            "lack",
            "image"
        ],
        "correctAnswers": [
            [
                "screening",
                "clinic",
                "cure"
            ],
            [
                "separation",
                "anymore",
                "considerable"
            ],
            [
                "digital",
                "poster",
                "frame"
            ]
        ],
        "gridQuality": [
            0.11026417011406964,
            -0.006351927174433114,
            0.013008311769836078,
            0.09584328375617512,
            0.07857018868342036,
            0.1733467073995748,
            0.08730468289856563,
            0.10672489357134463,
            -0.0296233250361293
        ]
    },
    {
        "columnWords": [
            "order",
            "normal",
            "father"
        ],
        "rowWords": [
            "crazy",
            "fall",
            "letter"
        ],
        "correctAnswers": [
            [
                "deal",
                "tired",
                "loving"
            ],
            [
                "launch",
                "expected",
                "grace"
            ],
            [
                "approval",
                "initial",
                "pastor"
            ]
        ],
        "gridQuality": [
            0.05401952745731575,
            0.09658137091261965,
            0.16602388040015914,
            0.08551678297361476,
            0.04627642088003825,
            0.04783122652560623,
            0.15466687569998994,
            -0.021924701412400216,
            0.09191717644184139
        ]
    },
    {
        "columnWords": [
            "cold",
            "town",
            "member"
        ],
        "rowWords": [
            "crazy",
            "chair",
            "offer"
        ],
        "correctAnswers": [
            [
                "nasty",
                "nowhere",
                "buddy"
            ],
            [
                "standing",
                "shore",
                "vice"
            ],
            [
                "typically",
                "sale",
                "commitment"
            ]
        ],
        "gridQuality": [
            0.16762344073047553,
            0.09148066330544058,
            0.048711816152735565,
            -0.0218243685962497,
            -0.0009601908499945466,
            0.17942107211600034,
            0.07346283571742873,
            0.10218339558421163,
            0.11871085565257788
        ]
    },
    {
        "columnWords": [
            "area",
            "class",
            "rest"
        ],
        "rowWords": [
            "letter",
            "economy",
            "spirit"
        ],
        "correctAnswers": [
            [
                "regarding",
                "grade",
                "answer"
            ],
            [
                "agriculture",
                "competition",
                "meanwhile"
            ],
            [
                "pride",
                "knowledge",
                "glory"
            ]
        ],
        "gridQuality": [
            0.010294115225949252,
            0.024801598177809803,
            0.11031156026848576,
            0.09401879910976385,
            0.019420279817840558,
            0.09384023077811932,
            -0.01573674728749186,
            -0.012523873010151676,
            0.17903050491974337
        ]
    },
    {
        "columnWords": [
            "post",
            "center",
            "animal"
        ],
        "rowWords": [
            "meeting",
            "surface",
            "ground"
        ],
        "correctAnswers": [
            [
                "december",
                "downtown",
                "conservation"
            ],
            [
                "column",
                "inner",
                "shape"
            ],
            [
                "drop",
                "front",
                "cattle"
            ]
        ],
        "gridQuality": [
            0.15945309330409507,
            0.11012101940761643,
            -0.002202906406362448,
            0.034508543980622974,
            -0.02524491315524313,
            -0.02260990339766855,
            0.10265678654127863,
            0.07445443896590531,
            0.10826033836026772
        ]
    },
    {
        "columnWords": [
            "writer",
            "tree",
            "floor"
        ],
        "rowWords": [
            "laugh",
            "field",
            "cover"
        ],
        "correctAnswers": [
            [
                "humor",
                "weird",
                "loud"
            ],
            [
                "researcher",
                "grass",
                "hall"
            ],
            [
                "singer",
                "palm",
                "carpet"
            ]
        ],
        "gridQuality": [
            0.13028501739444132,
            -0.020048038865712603,
            0.09343637985583886,
            0.1883145108764107,
            0.07590226470785721,
            0.11260676343622689,
            0.09156751377433159,
            0.010261984873765617,
            0.0830706572560338
        ]
    },
    {
        "columnWords": [
            "pattern",
            "wife",
            "decade"
        ],
        "rowWords": [
            "city",
            "body",
            "claim"
        ],
        "correctAnswers": [
            [
                "print",
                "mayor",
                "northeast"
            ],
            [
                "frame",
                "loving",
                "rapidly"
            ],
            [
                "invention",
                "alleged",
                "existence"
            ]
        ],
        "gridQuality": [
            0.02661100894998647,
            0.122223637231338,
            0.12235009105214223,
            0.1292720419985961,
            0.09222175984424796,
            0.0628986508520245,
            0.030752368451297918,
            0.08852212656756775,
            0.08977660732558534
        ]
    },
    {
        "columnWords": [
            "stay",
            "buy",
            "food"
        ],
        "rowWords": [
            "ice",
            "girl",
            "board"
        ],
        "correctAnswers": [
            [
                "zone",
                "pack",
                "frozen"
            ],
            [
                "loving",
                "costume",
                "asian"
            ],
            [
                "immediately",
                "forum",
                "agriculture"
            ]
        ],
        "gridQuality": [
            0.011972414123169628,
            -0.002363279730995149,
            0.17042913689893324,
            0.10197957499444044,
            0.026821622302613868,
            0.1394430898015777,
            0.03555082458807102,
            2.0902814155787652e-05,
            0.1190889436381084
        ]
    },
    {
        "columnWords": [
            "east",
            "pass",
            "hello"
        ],
        "rowWords": [
            "treat",
            "foot",
            "issue"
        ],
        "correctAnswers": [
            [
                "known",
                "catch",
                "candy"
            ],
            [
                "square",
                "kick",
                "cool"
            ],
            [
                "united",
                "complete",
                "reply"
            ]
        ],
        "gridQuality": [
            0.024524651439370215,
            0.0590351026663003,
            0.15135231412267547,
            0.15846302251767663,
            0.15074658207540015,
            -0.022149707293906085,
            0.10812109598791575,
            0.0436008662420464,
            0.08878123948616001
        ]
    },
    {
        "columnWords": [
            "fine",
            "skill",
            "trip"
        ],
        "rowWords": [
            "water",
            "father",
            "scene"
        ],
        "correctAnswers": [
            [
                "soft",
                "strength",
                "trail"
            ],
            [
                "retired",
                "courage",
                "pray"
            ],
            [
                "stunning",
                "critical",
                "destination"
            ]
        ],
        "gridQuality": [
            0.13699497705262198,
            0.03714094201021778,
            0.0750465892572072,
            0.09489884575712648,
            0.10983710441732608,
            0.04870072370618872,
            0.12082853098254187,
            -0.011791334465688363,
            0.06279617969289175
        ]
    },
    {
        "columnWords": [
            "space",
            "show",
            "father"
        ],
        "rowWords": [
            "method",
            "box",
            "nobody"
        ],
        "correctAnswers": [
            [
                "utilize",
                "demonstrate",
                "latter"
            ],
            [
                "storage",
                "clip",
                "prince"
            ],
            [
                "afford",
                "tomorrow",
                "dying"
            ]
        ],
        "gridQuality": [
            0.08405218413537918,
            0.09102132058797585,
            -0.014964300255367102,
            0.1178413818694346,
            0.10196093164767983,
            0.010889091402693896,
            0.027438179886917546,
            0.10052131084738158,
            0.15138977262298903
        ]
    },
    {
        "columnWords": [
            "author",
            "drug",
            "power"
        ],
        "rowWords": [
            "road",
            "study",
            "dad"
        ],
        "correctAnswers": [
            [
                "mark",
                "driving",
                "motor"
            ],
            [
                "essay",
                "behavioral",
                "capability"
            ],
            [
                "lover",
                "addiction",
                "boss"
            ]
        ],
        "gridQuality": [
            0.02217890970473535,
            -0.006882527196482746,
            0.09536415454494751,
            0.20536807136410695,
            0.1731337986270074,
            0.09784989343876438,
            0.1245419292591643,
            -0.013254177872532358,
            0.05176947845863633
        ]
    },
    {
        "columnWords": [
            "major",
            "music",
            "income"
        ],
        "rowWords": [
            "method",
            "worth",
            "data"
        ],
        "correctAnswers": [
            [
                "latter",
                "drum",
                "payment"
            ],
            [
                "starting",
                "alive",
                "invest"
            ],
            [
                "technical",
                "download",
                "index"
            ]
        ],
        "gridQuality": [
            0.03960264124667612,
            0.033326821368220294,
            0.017731848743215428,
            0.11674321937531362,
            0.09043172113716436,
            0.18000929501006924,
            0.13108103920941505,
            0.09704833111433009,
            0.06738742993659907
        ]
    },
    {
        "columnWords": [
            "try",
            "image",
            "level"
        ],
        "rowWords": [
            "top",
            "moment",
            "march"
        ],
        "correctAnswers": [
            [
                "straight",
                "print",
                "ranking"
            ],
            [
                "suppose",
                "photography",
                "threshold"
            ],
            [
                "update",
                "courtesy",
                "expected"
            ]
        ],
        "gridQuality": [
            0.0957999721254732,
            0.05225500895819779,
            0.13327051811052504,
            0.20897243354861306,
            0.04894991343157418,
            0.07823043135739538,
            0.10291261747120828,
            -0.02003716635293129,
            0.011942901173707554
        ]
    },
    {
        "columnWords": [
            "hall",
            "system",
            "police"
        ],
        "rowWords": [
            "news",
            "book",
            "care"
        ],
        "correctAnswers": [
            [
                "fame",
                "channel",
                "spokesman"
            ],
            [
                "guest",
                "works",
                "detective"
            ],
            [
                "residence",
                "ensure",
                "elderly"
            ]
        ],
        "gridQuality": [
            0.04741568186301637,
            0.1450779184787554,
            0.10064606437702672,
            0.07150541317870984,
            0.06707116218342102,
            0.10878790726309506,
            0.009599838581668685,
            0.13940935141638444,
            0.08873777946510131
        ]
    },
    {
        "columnWords": [
            "still",
            "web",
            "detail"
        ],
        "rowWords": [
            "special",
            "thought",
            "system"
        ],
        "correctAnswers": [
            [
                "limited",
                "promotion",
                "outstanding"
            ],
            [
                "worried",
                "creative",
                "subtle"
            ],
            [
                "fixed",
                "interface",
                "hardware"
            ]
        ],
        "gridQuality": [
            0.09068513427996805,
            0.10656990366934127,
            -0.01188675712712628,
            0.29616038945690126,
            0.008763897458317738,
            0.04043470769137314,
            0.05346060065549196,
            0.14505941495191865,
            0.025959522211914887
        ]
    },
    {
        "columnWords": [
            "society",
            "wonder",
            "land"
        ],
        "rowWords": [
            "sea",
            "safe",
            "truth"
        ],
        "correctAnswers": [
            [
                "annual",
                "magical",
                "coastal"
            ],
            [
                "responsible",
                "plenty",
                "facility"
            ],
            [
                "islam",
                "convinced",
                "holy"
            ]
        ],
        "gridQuality": [
            -0.018767656347114525,
            0.045596192137267066,
            0.1709773493782265,
            0.06361718655829551,
            0.09716778250409508,
            0.09755579288090588,
            0.11442611910808065,
            0.17629026167649353,
            -0.015927593628088266
        ]
    },
    {
        "columnWords": [
            "future",
            "try",
            "run"
        ],
        "rowWords": [
            "article",
            "million",
            "cause"
        ],
        "correctAnswers": [
            [
                "relevant",
                "helpful",
                "brief"
            ],
            [
                "funding",
                "purchase",
                "roughly"
            ],
            [
                "potentially",
                "resist",
                "shut"
            ]
        ],
        "gridQuality": [
            0.12068574235792628,
            0.09338222375774663,
            0.01567759150618875,
            0.16361031755269806,
            -0.014560908743638246,
            0.086237261218161,
            0.13143306181174386,
            0.13446660101890173,
            0.03694664429108452
        ]
    },
    {
        "columnWords": [
            "fear",
            "side",
            "fill"
        ],
        "rowWords": [
            "career",
            "wait",
            "market"
        ],
        "correctAnswers": [
            [
                "fame",
                "league",
                "resume"
            ],
            [
                "dying",
                "forward",
                "arrange"
            ],
            [
                "uncertainty",
                "lower",
                "expand"
            ]
        ],
        "gridQuality": [
            0.06574879496588482,
            0.09187696276066504,
            0.10500310049219919,
            0.14837358047063132,
            0.0861182452953363,
            0.1681670771194559,
            0.1325662748241242,
            0.09013377306998083,
            0.05739493872594459
        ]
    },
    {
        "columnWords": [
            "case",
            "fail",
            "break"
        ],
        "rowWords": [
            "system",
            "sense",
            "read"
        ],
        "correctAnswers": [
            [
                "storage",
                "upgrade",
                "extended"
            ],
            [
                "appeal",
                "succeed",
                "calm"
            ],
            [
                "found",
                "frequently",
                "evening"
            ]
        ],
        "gridQuality": [
            0.09523353554724479,
            0.021569608365579196,
            0.054565149840671845,
            0.14037257534753722,
            0.10342272468404579,
            0.09967185508832477,
            0.055911850188962164,
            0.030019672396513264,
            0.09587905947115205
        ]
    },
    {
        "columnWords": [
            "heart",
            "purpose",
            "state"
        ],
        "rowWords": [
            "mission",
            "health",
            "piece"
        ],
        "correctAnswers": [
            [
                "cross",
                "objective",
                "valley"
            ],
            [
                "diabetes",
                "importance",
                "reform"
            ],
            [
                "charm",
                "plain",
                "second"
            ]
        ],
        "gridQuality": [
            0.01852266457495788,
            0.11251766314522227,
            0.05453436770798681,
            0.24356936647617322,
            0.10892624952163954,
            0.08452849372812443,
            0.13542000161829992,
            0.0974335060081446,
            0.034380631507795134
        ]
    },
    {
        "columnWords": [
            "size",
            "summer",
            "answer"
        ],
        "rowWords": [
            "spring",
            "rate",
            "career"
        ],
        "correctAnswers": [
            [
                "pack",
                "sunny",
                "quick"
            ],
            [
                "maximum",
                "expected",
                "quote"
            ],
            [
                "impressive",
                "academic",
                "succeed"
            ]
        ],
        "gridQuality": [
            0.024115225593587697,
            0.19736856198312402,
            -0.0016327136855415203,
            0.19541877351351877,
            0.051636321202729984,
            0.1647928732867987,
            -0.0018086890561137547,
            0.08557516369019857,
            0.11948762780968503
        ]
    },
    {
        "columnWords": [
            "ability",
            "court",
            "tonight"
        ],
        "rowWords": [
            "short",
            "state",
            "stay"
        ],
        "correctAnswers": [
            [
                "remarkable",
                "written",
                "ending"
            ],
            [
                "mental",
                "legislature",
                "contest"
            ],
            [
                "safely",
                "custody",
                "till"
            ]
        ],
        "gridQuality": [
            0.08944273911932055,
            0.0048476824884450265,
            0.07249632446460486,
            0.12807177317269536,
            0.20459416097038552,
            0.03437797098314299,
            0.14890853163925333,
            0.030251413578961994,
            0.12628248627883365
        ]
    },
    {
        "columnWords": [
            "group",
            "death",
            "worth"
        ],
        "rowWords": [
            "table",
            "meet",
            "player"
        ],
        "correctAnswers": [
            [
                "description",
                "beside",
                "useful"
            ],
            [
                "fellow",
                "daughter",
                "afford"
            ],
            [
                "active",
                "killer",
                "decent"
            ]
        ],
        "gridQuality": [
            0.05624834325346806,
            0.01205117481173279,
            0.04059061398963271,
            0.1258456007346891,
            0.09173463956304351,
            0.11712932976220525,
            0.07305532206658727,
            0.04674086001923494,
            0.09632795267154315
        ]
    },
    {
        "columnWords": [
            "stage",
            "return",
            "hurt"
        ],
        "rowWords": [
            "course",
            "crazy",
            "skin"
        ],
        "correctAnswers": [
            [
                "venue",
                "purchase",
                "importantly"
            ],
            [
                "dancing",
                "rush",
                "upset"
            ],
            [
                "makeup",
                "shine",
                "painful"
            ]
        ],
        "gridQuality": [
            0.10746770433476716,
            0.1427383356070422,
            0.09444375389480575,
            0.10490915518897359,
            0.01298724472503976,
            0.1598328980148198,
            -0.017596711468921833,
            -0.018201257022779194,
            0.04825619264337466
        ]
    },
    {
        "columnWords": [
            "visit",
            "peace",
            "edge"
        ],
        "rowWords": [
            "thanks",
            "evening",
            "mind"
        ],
        "correctAnswers": [
            [
                "info",
                "grateful",
                "flat"
            ],
            [
                "noon",
                "ceremony",
                "portion"
            ],
            [
                "refer",
                "eternal",
                "shape"
            ]
        ],
        "gridQuality": [
            0.08954802716096988,
            -0.0025464027883275175,
            -0.026657495797653308,
            0.11331863186088931,
            -0.0008002308747512288,
            -0.0018982117690270472,
            0.1371222796359317,
            0.2130160293689245,
            0.17875733911651248
        ]
    },
    {
        "columnWords": [
            "writer",
            "range",
            "guess"
        ],
        "rowWords": [
            "memory",
            "book",
            "feed"
        ],
        "correctAnswers": [
            [
                "flash",
                "array",
                "correctly"
            ],
            [
                "poetry",
                "extensive",
                "surprise"
            ],
            [
                "producer",
                "increasing",
                "hungry"
            ]
        ],
        "gridQuality": [
            -0.01840492717814768,
            0.15409298014905215,
            0.015219615949648713,
            0.18015451026076967,
            0.08948990052078898,
            0.12102563223116225,
            0.013189697409879186,
            0.042185064248119075,
            0.09376170116938287
        ]
    },
    {
        "columnWords": [
            "boy",
            "point",
            "post"
        ],
        "rowWords": [
            "glass",
            "evening",
            "person"
        ],
        "correctAnswers": [
            [
                "wooden",
                "roof",
                "steel"
            ],
            [
                "celebration",
                "ahead",
                "tuesday"
            ],
            [
                "lover",
                "hence",
                "submit"
            ]
        ],
        "gridQuality": [
            0.03987595411337064,
            0.04716118284333004,
            -0.019457831842613738,
            0.026618557900981776,
            0.020531139835227474,
            0.11838228313955645,
            0.11347600758939325,
            0.1732512482060189,
            0.10646862961669623
        ]
    },
    {
        "columnWords": [
            "cold",
            "bed",
            "camera"
        ],
        "rowWords": [
            "score",
            "device",
            "model"
        ],
        "correctAnswers": [
            [
                "beat",
                "double",
                "credit"
            ],
            [
                "surface",
                "provided",
                "sensor"
            ],
            [
                "brand",
                "furniture",
                "photography"
            ]
        ],
        "gridQuality": [
            0.09749662653156155,
            -0.004743738517312357,
            -0.006753582289032778,
            0.0776779674683824,
            -0.011387868123414413,
            0.1997717074580938,
            -0.004676952719818939,
            0.09609475490238051,
            0.11876801197674047
        ]
    },
    {
        "columnWords": [
            "local",
            "blood",
            "wall"
        ],
        "rowWords": [
            "meeting",
            "art",
            "race"
        ],
        "correctAnswers": [
            [
                "union",
                "diabetes",
                "panel"
            ],
            [
                "craft",
                "brain",
                "canvas"
            ],
            [
                "bike",
                "rider",
                "drag"
            ]
        ],
        "gridQuality": [
            0.11993231607012522,
            0.02673621675905402,
            0.0908426651575529,
            0.1006480256055069,
            0.03285134200670692,
            0.27830100311464157,
            0.022186448614627485,
            0.042545620492575154,
            0.003245197748292239
        ]
    },
    {
        "columnWords": [
            "site",
            "truth",
            "beat"
        ],
        "rowWords": [
            "music",
            "speech",
            "white"
        ],
        "correctAnswers": [
            [
                "archive",
                "spiritual",
                "drum"
            ],
            [
                "required",
                "doctrine",
                "upset"
            ],
            [
                "description",
                "proof",
                "round"
            ]
        ],
        "gridQuality": [
            0.11988928458204584,
            0.09158368970304043,
            0.17907751639681224,
            0.02294476053300598,
            0.11645464879003076,
            0.026071572447422975,
            0.09072540147461494,
            0.05882414509276079,
            0.1162455068213224
        ]
    },
    {
        "columnWords": [
            "touch",
            "season",
            "teacher"
        ],
        "rowWords": [
            "period",
            "catch",
            "death"
        ],
        "correctAnswers": [
            [
                "transition",
                "consecutive",
                "principal"
            ],
            [
                "hook",
                "tackle",
                "reading"
            ],
            [
                "desire",
                "lost",
                "professor"
            ]
        ],
        "gridQuality": [
            0.009357002847191764,
            0.13842327817699307,
            0.05848660395421401,
            0.14300791852199501,
            0.09919940221118628,
            -0.016064786662426722,
            0.04752696483927954,
            0.06491516727220847,
            0.13439408696176824
        ]
    },
    {
        "columnWords": [
            "expert",
            "news",
            "crime"
        ],
        "rowWords": [
            "concern",
            "project",
            "treat"
        ],
        "correctAnswers": [
            [
                "ethical",
                "meanwhile",
                "alleged"
            ],
            [
                "coordinator",
                "upcoming",
                "scheme"
            ],
            [
                "cure",
                "daily",
                "prevention"
            ]
        ],
        "gridQuality": [
            0.10181694794784113,
            0.09250675627298999,
            0.12214716747964283,
            0.10808340820042683,
            0.158701957236142,
            -0.014621359668198886,
            0.005501340495402407,
            0.02020936329057743,
            -0.01658105170509394
        ]
    },
    {
        "columnWords": [
            "poor",
            "model",
            "stage"
        ],
        "rowWords": [
            "wear",
            "paper",
            "wind"
        ],
        "correctAnswers": [
            [
                "excuse",
                "uniform",
                "costume"
            ],
            [
                "concerned",
                "abstract",
                "presentation"
            ],
            [
                "mainly",
                "solar",
                "coming"
            ]
        ],
        "gridQuality": [
            0.09185456089820376,
            0.10670874717763601,
            0.06742893533511696,
            0.039376529023704254,
            0.1218687252457602,
            0.10211939070873544,
            0.004940506938664324,
            -0.0008052397395048594,
            0.01284812906776811
        ]
    },
    {
        "columnWords": [
            "father",
            "meet",
            "unit"
        ],
        "rowWords": [
            "release",
            "client",
            "crazy"
        ],
        "correctAnswers": [
            [
                "latter",
                "upcoming",
                "distribution"
            ],
            [
                "spouse",
                "satisfy",
                "output"
            ],
            [
                "evil",
                "tough",
                "instead"
            ]
        ],
        "gridQuality": [
            0.047461821731079934,
            0.09290745175444282,
            0.02413689343870995,
            0.03388152684033496,
            0.13627591809627826,
            0.06116389722929505,
            0.13670146533768723,
            0.14727441203896163,
            -0.022518980081572382
        ]
    },
    {
        "columnWords": [
            "black",
            "club",
            "fear"
        ],
        "rowWords": [
            "truth",
            "ball",
            "section"
        ],
        "correctAnswers": [
            [
                "light",
                "discover",
                "courage"
            ],
            [
                "belt",
                "tennis",
                "stress"
            ],
            [
                "related",
                "sponsor",
                "specific"
            ]
        ],
        "gridQuality": [
            0.02563985495208676,
            -0.0017748540375092103,
            0.2567491536077178,
            0.10094465901680916,
            0.2037479245202094,
            0.02991446966205058,
            0.06883489632535111,
            0.1235566910269752,
            0.00960395394899749
        ]
    },
    {
        "columnWords": [
            "red",
            "hope",
            "month"
        ],
        "rowWords": [
            "nature",
            "police",
            "read"
        ],
        "correctAnswers": [
            [
                "flower",
                "humanity",
                "depending"
            ],
            [
                "navy",
                "mayor",
                "jail"
            ],
            [
                "classic",
                "anybody",
                "weekly"
            ]
        ],
        "gridQuality": [
            0.042432370447466394,
            0.22515757873655773,
            0.09653294931639644,
            0.05660674690539036,
            0.01450469344294425,
            0.1085862440709574,
            0.02845345648804909,
            0.14338511091938033,
            0.09054294228535864
        ]
    },
    {
        "columnWords": [
            "picture",
            "anyone",
            "table"
        ],
        "rowWords": [
            "content",
            "race",
            "watch"
        ],
        "correctAnswers": [
            [
                "graphic",
                "relevant",
                "usage"
            ],
            [
                "drag",
                "running",
                "championship"
            ],
            [
                "cartoon",
                "knock",
                "round"
            ]
        ],
        "gridQuality": [
            0.09209409177601768,
            0.12063658936846633,
            0.007827866070540646,
            0.004054256114893073,
            0.12479310107550756,
            -0.012042102056880388,
            0.10616900477640034,
            0.09299020586565288,
            -0.01622550237167164
        ]
    },
    {
        "columnWords": [
            "law",
            "budget",
            "station"
        ],
        "rowWords": [
            "office",
            "decade",
            "treat"
        ],
        "correctAnswers": [
            [
                "counsel",
                "cabinet",
                "headquarters"
            ],
            [
                "continuing",
                "expected",
                "fifteen"
            ],
            [
                "prevent",
                "holiday",
                "train"
            ]
        ],
        "gridQuality": [
            0.1512574460588918,
            0.10237165450928931,
            0.16690068836602,
            0.03907823839571645,
            0.09139493217511596,
            0.006977330969475948,
            0.07591864050179187,
            0.02965642552683423,
            0.04530554791461805
        ]
    },
    {
        "columnWords": [
            "wonder",
            "fall",
            "key"
        ],
        "rowWords": [
            "decade",
            "special",
            "top"
        ],
        "correctAnswers": [
            [
                "convinced",
                "collapse",
                "developing"
            ],
            [
                "magical",
                "holiday",
                "required"
            ],
            [
                "famous",
                "fashion",
                "button"
            ]
        ],
        "gridQuality": [
            0.06869085328911873,
            0.12610351871571734,
            0.06868646279141155,
            0.09644326783769885,
            0.0727531654241772,
            0.11045419381001365,
            0.04799570735817449,
            0.08691448180258121,
            0.1053655560706176
        ]
    },
    {
        "columnWords": [
            "theory",
            "firm",
            "leg"
        ],
        "rowWords": [
            "page",
            "project",
            "country"
        ],
        "correctAnswers": [
            [
                "explanation",
                "index",
                "button"
            ],
            [
                "framework",
                "venture",
                "pull"
            ],
            [
                "classical",
                "banking",
                "cross"
            ]
        ],
        "gridQuality": [
            0.08360215995687437,
            -0.014612548836343997,
            0.06232851280571139,
            0.18348577783701003,
            0.12035945799228742,
            -0.012909461500488995,
            0.1057362547963584,
            0.09857761064337334,
            0.025899925354067932
        ]
    },
    {
        "columnWords": [
            "shoot",
            "unit",
            "edge"
        ],
        "rowWords": [
            "coach",
            "chance",
            "tree"
        ],
        "correctAnswers": [
            [
                "soccer",
                "coordinator",
                "trainer"
            ],
            [
                "steal",
                "addition",
                "apart"
            ],
            [
                "photography",
                "block",
                "lawn"
            ]
        ],
        "gridQuality": [
            -0.025014930368363997,
            0.10362834120313336,
            -0.01022432627405856,
            0.155940466546028,
            0.11054131389316524,
            0.09369479664444169,
            0.005785614790427385,
            -0.016056615445437905,
            0.05662330496835011
        ]
    },
    {
        "columnWords": [
            "wait",
            "hand",
            "life"
        ],
        "rowWords": [
            "version",
            "bill",
            "success"
        ],
        "correctAnswers": [
            [
                "upgrade",
                "classic",
                "english"
            ],
            [
                "reply",
                "rose",
                "insurance"
            ],
            [
                "expected",
                "excellent",
                "creativity"
            ]
        ],
        "gridQuality": [
            0.13021359709106706,
            0.026325209789160087,
            0.04192052590048112,
            0.02244280762602302,
            -0.01628448227825119,
            0.11336780240873989,
            0.09258136476439782,
            0.03689018638271435,
            0.16602383139998078
        ]
    },
    {
        "columnWords": [
            "access",
            "rise",
            "life"
        ],
        "rowWords": [
            "science",
            "stay",
            "produce"
        ],
        "correctAnswers": [
            [
                "faculty",
                "evolution",
                "theology"
            ],
            [
                "parking",
                "steady",
                "glad"
            ],
            [
                "extensive",
                "decrease",
                "known"
            ]
        ],
        "gridQuality": [
            0.035933441914757,
            -0.013454462998490957,
            0.154821197767816,
            0.1646497649841241,
            0.060934350054604236,
            0.1942606350728905,
            0.10253055740078221,
            0.15157748355713352,
            0.0898818841835628
        ]
    },
    {
        "columnWords": [
            "child",
            "summer",
            "skin"
        ],
        "rowWords": [
            "song",
            "treat",
            "party"
        ],
        "correctAnswers": [
            [
                "missing",
                "debut",
                "smooth"
            ],
            [
                "elderly",
                "hopefully",
                "cure"
            ],
            [
                "involved",
                "venue",
                "makeup"
            ]
        ],
        "gridQuality": [
            0.03616127963584681,
            0.18946276973619125,
            -0.024077302451866456,
            0.1769403579522708,
            0.04450752593795393,
            0.11591021407455915,
            0.029616020066867588,
            0.10283686948279147,
            1.8443913481824836e-05
        ]
    },
    {
        "columnWords": [
            "camera",
            "church",
            "win"
        ],
        "rowWords": [
            "film",
            "maybe",
            "process"
        ],
        "correctAnswers": [
            [
                "footage",
                "festival",
                "debut"
            ],
            [
                "laptop",
                "bible",
                "upset"
            ],
            [
                "sensor",
                "separation",
                "crucial"
            ]
        ],
        "gridQuality": [
            0.1350765567586244,
            0.03281236119115172,
            0.09889738124070035,
            0.08563466313348866,
            0.1089118659904208,
            0.22185710273826675,
            0.07328329255218091,
            0.04470746933242431,
            0.028440566129177003
        ]
    },
    {
        "columnWords": [
            "wish",
            "lay",
            "kid"
        ],
        "rowWords": [
            "black",
            "nobody",
            "beyond"
        ],
        "correctAnswers": [
            [
                "click",
                "double",
                "cartoon"
            ],
            [
                "dare",
                "standing",
                "dumb"
            ],
            [
                "required",
                "beneath",
                "childhood"
            ]
        ],
        "gridQuality": [
            0.038777786083769916,
            -0.028203206591963736,
            0.09704265359663988,
            0.0992618933798336,
            0.01361187019306942,
            0.10646095975298042,
            0.15591972002600862,
            0.16784822786748432,
            0.034199051924519
        ]
    },
    {
        "columnWords": [
            "mission",
            "type",
            "rule"
        ],
        "rowWords": [
            "case",
            "safety",
            "return"
        ],
        "correctAnswers": [
            [
                "involved",
                "handle",
                "statute"
            ],
            [
                "personnel",
                "maintenance",
                "comply"
            ],
            [
                "quest",
                "click",
                "payment"
            ]
        ],
        "gridQuality": [
            -0.026558693713115478,
            0.09074217476817847,
            0.13117989699272425,
            0.09673753683042707,
            0.06877312311770323,
            0.1405338774060192,
            0.08175941064713388,
            0.055670497944330655,
            0.03252755880952507
        ]
    },
    {
        "columnWords": [
            "ship",
            "common",
            "music"
        ],
        "rowWords": [
            "job",
            "trouble",
            "unit"
        ],
        "correctAnswers": [
            [
                "crew",
                "profession",
                "awesome"
            ],
            [
                "cruise",
                "frequent",
                "download"
            ],
            [
                "fleet",
                "separate",
                "drum"
            ]
        ],
        "gridQuality": [
            0.0039882323487308025,
            0.07540400875920361,
            0.09961743289445257,
            0.008412047278468449,
            0.18272703500681087,
            0.10425110032090346,
            0.08003462909860981,
            0.1031811133690328,
            0.12178562280252714
        ]
    },
    {
        "columnWords": [
            "moment",
            "claim",
            "glass"
        ],
        "rowWords": [
            "century",
            "air",
            "safe"
        ],
        "correctAnswers": [
            [
                "dramatic",
                "known",
                "roman"
            ],
            [
                "breath",
                "carrier",
                "ceiling"
            ],
            [
                "reminder",
                "provided",
                "lock"
            ]
        ],
        "gridQuality": [
            0.12747800868125225,
            0.03100611532668396,
            0.03913698459837556,
            0.13778898010808716,
            0.08943383685833839,
            0.10828412019859712,
            0.12551461605295267,
            0.07693727167766595,
            0.03177043555915682
        ]
    },
    {
        "columnWords": [
            "county",
            "effect",
            "window"
        ],
        "rowWords": [
            "light",
            "test",
            "safety"
        ],
        "correctAnswers": [
            [
                "orange",
                "subtle",
                "shade"
            ],
            [
                "south",
                "comparison",
                "installation"
            ],
            [
                "northeast",
                "regard",
                "privacy"
            ]
        ],
        "gridQuality": [
            0.0999256543972199,
            0.19162969064264368,
            0.1105808396708563,
            0.04123012956890981,
            0.134568251377579,
            0.03920018045176554,
            0.03747325851928207,
            0.0841215616458777,
            0.1288779739148127
        ]
    },
    {
        "columnWords": [
            "weekend",
            "claim",
            "name"
        ],
        "rowWords": [
            "web",
            "machine",
            "wife"
        ],
        "correctAnswers": [
            [
                "fantastic",
                "provided",
                "domain"
            ],
            [
                "perfect",
                "invention",
                "label"
            ],
            [
                "affair",
                "convinced",
                "actress"
            ]
        ],
        "gridQuality": [
            0.09069087210507054,
            0.055500324220683406,
            0.1783802890296301,
            0.007495029494183458,
            0.07162533868999788,
            0.049417935412379044,
            0.14362013122804784,
            0.09514493569656757,
            0.07419024035191135
        ]
    },
    {
        "columnWords": [
            "rise",
            "history",
            "father"
        ],
        "rowWords": [
            "floor",
            "act",
            "south"
        ],
        "correctAnswers": [
            [
                "ceiling",
                "description",
                "chair"
            ],
            [
                "decrease",
                "context",
                "spouse"
            ],
            [
                "expected",
                "northwest",
                "bishop"
            ]
        ],
        "gridQuality": [
            0.0976136147793415,
            0.04144380125713565,
            0.005533213384648739,
            0.07404632943620215,
            0.11192552500888131,
            0.10178774095267218,
            0.03393155641569234,
            0.11849941817604814,
            0.045225591909549
        ]
    },
    {
        "columnWords": [
            "action",
            "death",
            "role"
        ],
        "rowWords": [
            "spirit",
            "economy",
            "goal"
        ],
        "correctAnswers": [
            [
                "adventure",
                "eternal",
                "essence"
            ],
            [
                "reform",
                "collapse",
                "emerging"
            ],
            [
                "match",
                "fourth",
                "vital"
            ]
        ],
        "gridQuality": [
            0.06553583449839206,
            0.2369041136311577,
            0.03299364713634234,
            0.01971197518072698,
            0.1187421790251415,
            0.15897780605060075,
            0.09887822691618153,
            0.02661643620048393,
            0.05360795813711072
        ]
    },
    {
        "columnWords": [
            "theory",
            "safe",
            "detail"
        ],
        "rowWords": [
            "pick",
            "safety",
            "mission"
        ],
        "correctAnswers": [
            [
                "thinking",
                "anywhere",
                "print"
            ],
            [
                "practical",
                "workplace",
                "reliability"
            ],
            [
                "experimental",
                "launch",
                "remarkable"
            ]
        ],
        "gridQuality": [
            0.11335847274776356,
            0.12751807960669959,
            0.10662988177614996,
            0.014553899161794837,
            0.1345972511100304,
            0.01926288031414991,
            0.031292528682063114,
            -0.018530645976650106,
            0.0357710281693131
        ]
    },
    {
        "columnWords": [
            "try",
            "meeting",
            "mission"
        ],
        "rowWords": [
            "art",
            "judge",
            "beat"
        ],
        "correctAnswers": [
            [
                "print",
                "lecture",
                "contemporary"
            ],
            [
                "ought",
                "clerk",
                "witness"
            ],
            [
                "tune",
                "tuesday",
                "victory"
            ]
        ],
        "gridQuality": [
            0.12638510673754488,
            0.11250725209075507,
            0.008175928124178333,
            0.1098392293606778,
            0.1219588349243621,
            -0.020753968063793926,
            0.2038284424883341,
            -0.016399434360941267,
            0.0251885633889799
        ]
    },
    {
        "columnWords": [
            "judge",
            "song",
            "impact"
        ],
        "rowWords": [
            "raise",
            "month",
            "review"
        ],
        "correctAnswers": [
            [
                "appeal",
                "somebody",
                "minimize"
            ],
            [
                "jail",
                "ending",
                "throughout"
            ],
            [
                "complaint",
                "download",
                "evaluation"
            ]
        ],
        "gridQuality": [
            0.02939080516681236,
            0.03573507053490266,
            0.17292535104528495,
            0.12018742677348226,
            0.10690392334208643,
            0.10567081172800874,
            0.06919750233080413,
            0.1361668006682415,
            0.18671472850115256
        ]
    },
    {
        "columnWords": [
            "area",
            "trouble",
            "weight"
        ],
        "rowWords": [
            "share",
            "someone",
            "foot"
        ],
        "correctAnswers": [
            [
                "regional",
                "continued",
                "strength"
            ],
            [
                "specifically",
                "worried",
                "lean"
            ],
            [
                "outdoor",
                "walking",
                "heel"
            ]
        ],
        "gridQuality": [
            0.10089199036997576,
            0.029302983434121632,
            -0.018768100793748577,
            0.09119857582967505,
            0.2176395657048743,
            0.03590651687564861,
            0.11459502515850861,
            -0.01430202609090947,
            0.06711626712941299
        ]
    },
    {
        "columnWords": [
            "stuff",
            "army",
            "project"
        ],
        "rowWords": [
            "post",
            "step",
            "morning"
        ],
        "correctAnswers": [
            [
                "yours",
                "veteran",
                "survey"
            ],
            [
                "apart",
                "squad",
                "phase"
            ],
            [
                "everyday",
                "patrol",
                "dawn"
            ]
        ],
        "gridQuality": [
            0.12761896585778298,
            0.041194381889446685,
            0.06747879511940358,
            0.09280684309793852,
            0.0037761106224938334,
            0.20866210359813775,
            0.11212739989958942,
            0.10746661730869433,
            -0.008888095946291585
        ]
    },
    {
        "columnWords": [
            "account",
            "piece",
            "hate"
        ],
        "rowWords": [
            "phone",
            "song",
            "draw"
        ],
        "correctAnswers": [
            [
                "mail",
                "plastic",
                "worried"
            ],
            [
                "download",
                "piano",
                "kinda"
            ],
            [
                "income",
                "solid",
                "suppose"
            ]
        ],
        "gridQuality": [
            0.1614109016781745,
            0.012389205800692804,
            -0.0036227389047175373,
            -0.002290501223862984,
            0.21106746545835697,
            0.1417906422324513,
            0.051943437899380385,
            0.11330402088055957,
            0.0505741915898722
        ]
    },
    {
        "columnWords": [
            "sound",
            "east",
            "record"
        ],
        "rowWords": [
            "weekend",
            "surface",
            "drive"
        ],
        "correctAnswers": [
            [
                "awesome",
                "downtown",
                "debut"
            ],
            [
                "smooth",
                "outer",
                "bottom"
            ],
            [
                "drum",
                "lane",
                "copy"
            ]
        ],
        "gridQuality": [
            0.13382347532459304,
            0.04956474098076735,
            0.10155663372536694,
            0.13131637872602797,
            0.04003319587910048,
            0.027239424270473878,
            0.021386435362806377,
            0.15515119337551664,
            0.025243952121993818
        ]
    },
    {
        "columnWords": [
            "call",
            "ship",
            "result"
        ],
        "rowWords": [
            "moment",
            "patient",
            "local"
        ],
        "correctAnswers": [
            [
                "anytime",
                "beside",
                "ending"
            ],
            [
                "clinic",
                "vessel",
                "diagnosis"
            ],
            [
                "telephone",
                "merchant",
                "promote"
            ]
        ],
        "gridQuality": [
            0.13449965388882035,
            -0.01976091163932847,
            0.17882222519271407,
            0.02492475100324454,
            0.006233979148609015,
            0.1652537916693274,
            0.08605868030448405,
            0.06664994673503732,
            0.10623486022071038
        ]
    },
    {
        "columnWords": [
            "carry",
            "fight",
            "product"
        ],
        "rowWords": [
            "space",
            "kid",
            "pay"
        ],
        "correctAnswers": [
            [
                "transport",
                "conflict",
                "platform"
            ],
            [
                "stick",
                "hero",
                "favorite"
            ],
            [
                "obligation",
                "wage",
                "earnings"
            ]
        ],
        "gridQuality": [
            0.07737592843605523,
            0.01870013906648549,
            0.08022129208293927,
            0.035037557145452536,
            0.10369373389668779,
            0.028215227399102538,
            0.14172930284872765,
            0.14257687939880193,
            0.12882567543277978
        ]
    },
    {
        "columnWords": [
            "cost",
            "front",
            "scene"
        ],
        "rowWords": [
            "purpose",
            "hold",
            "club"
        ],
        "correctAnswers": [
            [
                "usage",
                "interior",
                "passion"
            ],
            [
                "expected",
                "standing",
                "fire"
            ],
            [
                "discount",
                "resort",
                "comedy"
            ]
        ],
        "gridQuality": [
            0.11913838888914652,
            0.022032124822641497,
            0.025844979824217407,
            0.1436416936941276,
            0.14505596107565744,
            0.0622751882272361,
            0.062475418717344744,
            0.044202638961217455,
            0.13804034401006726
        ]
    },
    {
        "columnWords": [
            "stuff",
            "parent",
            "leader"
        ],
        "rowWords": [
            "charge",
            "opinion",
            "father"
        ],
        "correctAnswers": [
            [
                "normally",
                "required",
                "vice"
            ],
            [
                "seriously",
                "respect",
                "ruling"
            ],
            [
                "heaven",
                "married",
                "pastor"
            ]
        ],
        "gridQuality": [
            0.1305230248151119,
            0.013978793823409164,
            0.03460318970373977,
            0.16855472734256294,
            0.0018526602487481947,
            0.08518852452851722,
            0.09583434183662565,
            0.069996312114599,
            0.14256024581929094
        ]
    },
    {
        "columnWords": [
            "lack",
            "track",
            "project"
        ],
        "rowWords": [
            "brain",
            "whole",
            "fund"
        ],
        "correctAnswers": [
            [
                "cognitive",
                "rhythm",
                "learning"
            ],
            [
                "awful",
                "roll",
                "creation"
            ],
            [
                "mutual",
                "sponsor",
                "portfolio"
            ]
        ],
        "gridQuality": [
            0.13587999186848376,
            0.02343574450535313,
            -0.0213200748722312,
            0.18216767019400726,
            0.13629073995368135,
            0.09634308943474579,
            0.0868246994959555,
            -0.029036179772942372,
            0.13859353885742465
        ]
    },
    {
        "columnWords": [
            "fight",
            "option",
            "term"
        ],
        "rowWords": [
            "purpose",
            "doctor",
            "black"
        ],
        "correctAnswers": [
            [
                "destroy",
                "utilize",
                "concerning"
            ],
            [
                "hurt",
                "clinic",
                "pregnancy"
            ],
            [
                "belt",
                "double",
                "known"
            ]
        ],
        "gridQuality": [
            0.15124317562077194,
            0.10709734634743473,
            0.11079721212517168,
            0.03847115170641746,
            -0.000735788268148907,
            0.0946744399674535,
            0.05463629939889192,
            0.07707410559620032,
            -0.011663361372428738
        ]
    },
    {
        "columnWords": [
            "machine",
            "hate",
            "measure"
        ],
        "rowWords": [
            "white",
            "history",
            "review"
        ],
        "correctAnswers": [
            [
                "cotton",
                "ugly",
                "contrast"
            ],
            [
                "creation",
                "myth",
                "importance"
            ],
            [
                "maker",
                "dare",
                "proposed"
            ]
        ],
        "gridQuality": [
            0.1102681289839973,
            0.099667985205254,
            0.06415351873391084,
            0.05152370427911712,
            0.10685165542784292,
            0.16583981174661278,
            0.05000568540159733,
            0.05691492820085031,
            0.09110415047522902
        ]
    },
    {
        "columnWords": [
            "process",
            "fail",
            "brain"
        ],
        "rowWords": [
            "matter",
            "game",
            "life"
        ],
        "correctAnswers": [
            [
                "additionally",
                "disagree",
                "nerve"
            ],
            [
                "starting",
                "cheat",
                "puzzle"
            ],
            [
                "cycle",
                "survive",
                "childhood"
            ]
        ],
        "gridQuality": [
            0.11626134618363282,
            0.16690523867516172,
            0.04148479265806204,
            -0.00255824238928104,
            0.07942337472422212,
            0.009604450365627404,
            0.10190109925547663,
            0.04310599591943054,
            0.0912384644833002
        ]
    },
    {
        "columnWords": [
            "wear",
            "threat",
            "call"
        ],
        "rowWords": [
            "son",
            "answer",
            "cut"
        ],
        "correctAnswers": [
            [
                "occasion",
                "fighting",
                "daddy"
            ],
            [
                "besides",
                "legitimate",
                "request"
            ],
            [
                "fancy",
                "prevent",
                "push"
            ]
        ],
        "gridQuality": [
            -0.0071130246421812204,
            -0.024428179088958446,
            0.043952699971645415,
            0.011821993747907378,
            0.12215331539493968,
            0.2000557791061206,
            0.17156663984508203,
            0.056279679240422764,
            0.09652588688264396
        ]
    },
    {
        "columnWords": [
            "chair",
            "lot",
            "dad"
        ],
        "rowWords": [
            "watch",
            "stand",
            "fire"
        ],
        "correctAnswers": [
            [
                "vice",
                "info",
                "boss"
            ],
            [
                "shelf",
                "regard",
                "proud"
            ],
            [
                "wood",
                "lightning",
                "blast"
            ]
        ],
        "gridQuality": [
            -0.02647939843426017,
            0.09971702443991126,
            0.03449091132909543,
            0.10178140885692732,
            0.1274456032128024,
            0.0963977797859269,
            0.007035764180798543,
            0.06794458296094019,
            -0.028232882394221503
        ]
    },
    {
        "columnWords": [
            "dad",
            "charge",
            "world"
        ],
        "rowWords": [
            "fill",
            "growth",
            "poor"
        ],
        "correctAnswers": [
            [
                "hopefully",
                "required",
                "round"
            ],
            [
                "spending",
                "monthly",
                "innovation"
            ],
            [
                "dumb",
                "regardless",
                "unlike"
            ]
        ],
        "gridQuality": [
            0.051794355270092796,
            0.13406248951702682,
            0.10987158604948588,
            -0.02999460727738512,
            0.03204758339153979,
            0.1342747614703248,
            0.12145840837305455,
            0.07799137948994073,
            0.07650526347913744
        ]
    },
    {
        "columnWords": [
            "partner",
            "pass",
            "court"
        ],
        "rowWords": [
            "trip",
            "baby",
            "study"
        ],
        "correctAnswers": [
            [
                "sponsor",
                "rush",
                "circuit"
            ],
            [
                "sister",
                "throw",
                "custody"
            ],
            [
                "strategic",
                "testing",
                "proposed"
            ]
        ],
        "gridQuality": [
            0.04209783080182361,
            0.10721302379717434,
            0.07511539420864088,
            0.08192385930215418,
            0.09495629114473159,
            -0.027447658588515278,
            0.19197769445944068,
            0.039292108491286504,
            0.09880285588599214
        ]
    },
    {
        "columnWords": [
            "look",
            "lawyer",
            "moment"
        ],
        "rowWords": [
            "title",
            "teacher",
            "step"
        ],
        "correctAnswers": [
            [
                "classic",
                "liability",
                "ending"
            ],
            [
                "wise",
                "consultant",
                "principal"
            ],
            [
                "solid",
                "bankruptcy",
                "crucial"
            ]
        ],
        "gridQuality": [
            0.09137188852057487,
            0.08150619490158639,
            0.03140029484232165,
            4.934113519783345e-05,
            0.12891956806589033,
            -0.023133493405503525,
            0.11349358465431336,
            -0.0035634583835575384,
            0.10608175633672723
        ]
    }
];

let maxAttempts = 3;
let currentAttempts = maxAttempts;
let currentMode = 'hard'; // Default mode is regular


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


// Function to reset the current game
function resetGame() {
    initializeHearts();
    displayGameData(currentGameData); // This will create the tiles and grid
    unfreezeGame();
    setupDragAndDrop();
}


function setupDragAndDrop() {
    // Get all the tiles and droppable cells
    const tiles = document.querySelectorAll('.tile');
    const droppableCells = document.querySelectorAll('.droppable');
    // Add drag event listeners to the tiles
    tiles.forEach(tile => {
        tile.addEventListener('dragstart', handleDragStart);
        tile.addEventListener('dragend', handleDragEnd);
    });

    // Add drag event listeners to the droppable cells
    droppableCells.forEach(cell => {
        cell.addEventListener('dragover', handleDragOver);
        cell.addEventListener('dragenter', handleDragEnter);
        cell.addEventListener('dragleave', handleDragLeave);
        cell.addEventListener('drop', handleDrop);
    });
    

    function handleDragStart(event) {
        event.target.classList.add('dragging');
        // Optionally, set the data transfer
        event.dataTransfer.setData('text/plain', event.target.id);
    }

function handleDragEnd(event) {
    event.target.classList.remove('dragging');
    // Reset color-related classes
    event.target.classList.remove('clue-correct', 'clue-partial', 'clue-incorrect');
}


    function handleDragOver(event) {
        event.preventDefault(); // Necessary to allow dropping
    }

		function handleDragEnter(event) {
  		  if (event.target.classList.contains('droppable')) {
        event.target.classList.add('drag-over');
    		}
		}

		function handleDragLeave(event) {
    		if (event.target.classList.contains('droppable')) {
        event.target.classList.remove('drag-over');
    		}
		}

		// Attach these functions to the dragenter and dragleave events
		document.querySelectorAll('.droppable').forEach(cell => {
    cell.addEventListener('dragenter', handleDragEnter);
    cell.addEventListener('dragleave', handleDragLeave);
		});


    function handleDrop(event) {function handleDrop(event) {
    
    event.preventDefault();
    var draggedElement = document.querySelector('.dragging');

    // Ensure the target is a cell and it does not have the 'locked' class
    if (draggedElement && event.target.classList.contains('droppable') && !event.target.classList.contains('locked')) {
        // Append the tile to the cell or handle the drop logic
        event.target.appendChild(draggedElement);
        event.target.classList.remove('drag-over');
    }
    }
}
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
        `<div class="tile" draggable="true" id="tile-${index}">${clue}</div>`
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

    const draggedTileId = ev.dataTransfer.getData('text/plain');
    const draggedTile = document.getElementById(draggedTileId);
    let target = ev.target;

    // Dropped on a tile in the grid cell, we need to swap them
    if (target.classList.contains('tile') && target.parentNode.classList.contains('cell')) {
        swapTiles(target.parentNode, draggedTile);
    }
    // Dropped on an empty cell in the grid
    else if (target.classList.contains('droppable') && !target.firstChild) {
        target.appendChild(draggedTile);
    }
    // Dropped on a tile in the tiles container
    else if (target.classList.contains('tile') && target.parentNode.id === 'tiles') {
        shuffleTilesInContainer(target, draggedTile);
    }
    // Dropped on a non-empty cell
    else if (target.classList.contains('droppable') && target.firstChild && target.firstChild !== draggedTile) {
            swapTiles(target, draggedTile);
    }
}

function swapTiles(targetCell, draggedTile) {
		targetCell.firstChild.classList.remove('clue-correct', 'clue-partial', 'clue-incorrect');

    // Get the parent cell (or container) of the dragged tile
    const draggedTileParent = draggedTile.parentNode;

    // Check if the dragged tile is coming from another cell or from the tiles container
    if (draggedTileParent.classList.contains('cell')) {
        // If dragged from a cell, swap the tiles
        targetCell.appendChild(draggedTile);
        draggedTileParent.appendChild(targetCell.firstChild);
    } else {
        // If dragged from the tiles container, move the target tile to the container and the dragged tile to the cell
        document.getElementById('tiles').appendChild(targetCell.firstChild);
        targetCell.appendChild(draggedTile);
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


// Function to toggle game mode
function toggleMode() {
    // Switch the current mode
    currentMode = currentMode === 'hard' ? 'regular' : 'hard';
    
    // Update the button text to indicate the mode to which it will switch
    const modeToSwitch = currentMode === 'hard' ? 'Regular' : 'Hard';
    document.getElementById('toggleMode').textContent = `Switch to ${modeToSwitch} Mode`;

    // Hide all mode instructions
    document.querySelectorAll('.mode-instructions').forEach(element => {
        element.style.display = 'none';
    });

    // Show the instructions for the current mode
    document.getElementById(`${currentMode}ModeInstructions`).style.display = 'block';

    // Reset the game for the new mode
    resetGame();
}




function checkAnswers() {
    const grid = document.getElementById('grid');
    const entered = currentGameData.rowWords.map(() => []);
    let allCorrect = false;

    // Populate the entered with the answers from the grid
    currentGameData.rowWords.forEach((rowWord, rowIndex) => {
        currentGameData.columnWords.forEach((colWord, colIndex) => {
            const cell = grid.querySelector(`.droppable[data-row="${rowIndex}"][data-col="${colIndex}"]`);

            if (cell && cell.firstChild) {
                const tile = cell.firstChild;
                const answer = tile.textContent.trim();
                entered[rowIndex][colIndex] = answer;

                // Check if the answer matches the correct answer
                const isCorrect = answer === currentGameData.correctAnswers[rowIndex][colIndex];
            } else {
                entered[rowIndex][colIndex] = ""; // or some other placeholder for an empty answer
            }
        });
    });


    // Check if any answers have been entered into the grid
    const hasAnswers = entered.some(row => row.some(answer => answer));
    let correctness = null;
    let rowColCorrectness = null;

    if (hasAnswers) {
        // Check correctness for rows and columns
        correctness = elementwiseEquality(currentGameData.correctAnswers, entered);
        rowColCorrectness = sumTrueValues(correctness);

        // Test whether the game has been won
        allCorrect = rowColCorrectness.totalSums === 9;

        if (allCorrect) {
        colourClues(correctness, currentGameData);
    		colourAllHeadings(rowColCorrectness);
      	grid.classList.add('win');
        document.getElementById('result').textContent = 'You connected all the thoughts!';
        } else {
        // Game not won yet
				currentAttempts--;
        updateHearts();

        	if (currentAttempts <= 0) {
          // Freeze game and show loss message
          if (currentMode === 'hard') {
        		let rowColCorrectness = sumTrueValues(correctness);
        		colourAllHeadings(rowColCorrectness);
    				} else {
        		colourClues(correctness, currentGameData);
          	}
          freezeGame();
          } else {
          // Not frozen, update colors
          if (currentMode === 'hard') {
        		let rowColCorrectness = sumTrueValues(correctness);
        		colourAllHeadings(rowColCorrectness);
    				} else {
        		colourClues(correctness, currentGameData);
          	}
        document.getElementById('result').textContent = 'Some answers are incorrect.';
    }}} else{
    	  document.getElementById('result').textContent = 'No answers to check.';
    }
}


function colourClues(correctness, currentGameData) {
    const tiles = document.querySelectorAll('.tile');
    tiles.forEach(tile => {
        // Get the current position of the tile
        const parentCell = tile.parentElement;

        // Check if the parent of the tile is a cell in the grid and has the needed attributes
        if (parentCell && parentCell.hasAttribute('data-row') && parentCell.hasAttribute('data-col')) {
            const rowIndex = parseInt(parentCell.getAttribute('data-row'));
            const colIndex = parseInt(parentCell.getAttribute('data-col'));

            // Ensure rowIndex and colIndex are not NaN
            if (!isNaN(rowIndex) && !isNaN(colIndex)) {
                // Only then proceed to get the correct answer and compare
                const correctAnswer = currentGameData.correctAnswers[rowIndex][colIndex];
                const isCorrectCell = tile.textContent.trim() === correctAnswer;
                const isCorrectRow = currentGameData.correctAnswers[rowIndex].includes(tile.textContent.trim());
                const isCorrectColumn = currentGameData.correctAnswers.some(row => row[colIndex] === tile.textContent.trim());

                // Reset classes for coloring
                tile.classList.remove('clue-correct', 'clue-partial', 'clue-incorrect');

                // Apply coloring based on correctness
                if (isCorrectCell) {
                    tile.classList.add('clue-correct');
										lockCell(parentCell);

                } else if (isCorrectRow || isCorrectColumn) {
                    tile.classList.add('clue-partial');
                } else {
                    tile.classList.add('clue-incorrect');
                }
            }
        } else {
            // If the tile is not in a droppable cell, remove any related classes
            tile.classList.remove('clue-correct', 'clue-partial', 'clue-incorrect');
        }
    });
}
	
function isInCorrectRowOrColumn(clue, rowIndex, colIndex, correctAnswers) {
    const correctRow = correctAnswers[rowIndex].includes(clue);
    const correctColumn = correctAnswers.some(row => row[colIndex] === clue);
    return correctRow || correctColumn;
}



function colourAllHeadings(rowColCorrectness = null) {
    const columnHeadings = currentGameData.columnWords.map((_, colIndex) => document.getElementById(`col-${colIndex}`));
    const rowHeadings = currentGameData.rowWords.map((_, rowIndex) => document.getElementById(`row-${rowIndex}`));

    columnHeadings.forEach((heading, columnIndex) => {
        const sum = rowColCorrectness === null ? 0 : rowColCorrectness.columnSums[columnIndex];
        colourHeading(heading, sum);
        if (sum === currentGameData.rowWords.length) { // All clues in the column are correct
            lockColumn(columnIndex);
						colourColumn(columnIndex, true);

        }
    });

    rowHeadings.forEach((heading, rowIndex) => {
        const sum = rowColCorrectness === null ? 0 : rowColCorrectness.rowSums[rowIndex];
        colourHeading(heading, sum);
        if (sum === currentGameData.columnWords.length) { // All clues in the row are correct
            lockRow(rowIndex);
						colourRow(rowIndex, true);

        }
    });
}

// Example function that locks a cell
function lockCell(cell) {
    cell.classList.add('locked');
}


function lockRow(rowIndex) {
    // Logic to lock all clues in this row
    document.querySelectorAll(`.droppable[data-row="${rowIndex}"]`).forEach(cell => {
    		lockCell(cell);
        const tile = cell.firstChild;
        if (tile) {
            tile.classList.add('locked-in'); // Add a CSS class to style locked-in clues
            tile.draggable = false; // Disable dragging
        }
    });
}


function lockColumn(colIndex) {
    // Logic to lock all clues in this column
    document.querySelectorAll(`.droppable[data-col="${colIndex}"]`).forEach(cell => {
        lockCell(cell);
				const tile = cell.firstChild;
        if (tile) {
            tile.classList.add('locked-in'); // Add a CSS class to style locked-in clues
            tile.draggable = false; // Disable dragging
        }
    });
}

function colourRow(rowIndex, isCorrect) {
    const rowCells = document.querySelectorAll(`.droppable[data-row="${rowIndex}"]`);
    rowCells.forEach(cell => {
        if (isCorrect) {
            cell.classList.add('all-correct');
        } else {
            cell.classList.remove('all-correct');
        }
    });
}

function colourColumn(colIndex, isCorrect) {
    const columnCells = document.querySelectorAll(`.droppable[data-col="${colIndex}"]`);
    columnCells.forEach(cell => {
        if (isCorrect) {
            cell.classList.add('all-correct');
        } else {
            cell.classList.remove('all-correct');
        }
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
		document.getElementById('result').textContent = 'Better luck next time!';
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



document.addEventListener('DOMContentLoaded', function() {
    startNewGame(); // This function should handle everything needed to start a new game, including setting up drag and drop
});

function startNewGame() {
	// Event listeners
		document.getElementById('checkAnswers').addEventListener('click', checkAnswers);
		document.getElementById('newGame').addEventListener('click', startNewGame);
		document.getElementById('resetGame').addEventListener('click', resetGame);
		document.getElementById('toggleMode').addEventListener('click', toggleMode);

    // Initialize game settings
    initializeHearts();
    currentGameData = getRandomGameData();
    displayGameData(currentGameData); // This will create the tiles and grid
    unfreezeGame();
    toggleMode(); // If needed at game start, otherwise call it when mode change is required
		setupDragAndDrop();

}

