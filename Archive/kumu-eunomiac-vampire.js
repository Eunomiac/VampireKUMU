// eslint-disable-next-line no-unused-vars
const KUMUDATA = {
    version: 1,
    name: "VAMPIRE",
    description: "A living Relationship Map of the people and institutions of Toronto.",
    proxyImages: true,
    defaultMap: "map-8Ox0rhuG",
    defaultPerspective: null,
    attributeRelevance: {
        faction: [
            "Associates",
            "Clan",
            "Image",
            "Quote",
            "Subtype"
        ],
        undefined: [
            "Age",
            "Associates",
            "Childer",
            "Clan",
            "Faction",
            "Generation",
            "Humanity",
            "Image",
            "Quote",
            "Regnant",
            "Sire",
            "Status",
            "Subtype",
            "Titles"
        ],
        coalition: [
            "Age",
            "Associates",
            "Childer",
            "Clan",
            "Faction",
            "Generation",
            "Humanity",
            "Image",
            "Quote",
            "Regnant",
            "Sire",
            "Status",
            "Subtype",
            "Titles"
        ],
        mortal: [
            "Age",
            "Associates",
            "Childer",
            "Clan",
            "Faction",
            "Generation",
            "Humanity",
            "Image",
            "Quote",
            "Regnant",
            "Sire",
            "Status",
            "Subtype",
            "Titles"
        ],
        kindred: [
            "Age",
            "Associates",
            "Childer",
            "Clan",
            "Faction",
            "Generation",
            "Humanity",
            "Image",
            "Quote",
            "Regnant",
            "Sire",
            "Status",
            "Subtype",
            "Titles"
        ],
        organization: [
            "Age",
            "Associates",
            "Childer",
            "Clan",
            "Faction",
            "Generation",
            "Humanity",
            "Image",
            "Quote",
            "Regnant",
            "Sire",
            "Status",
            "Subtype",
            "Titles"
        ],
        person: [
            "Age",
            "Associates",
            "Childer",
            "Clan",
            "Faction",
            "Generation",
            "Humanity",
            "Image",
            "Quote",
            "Regnant",
            "Sire",
            "Status",
            "Subtype",
            "Titles"
        ]
    },
    attributes: [
        {
            _id: "attr-VhB58nct",
            name: "Age",
            format: "string",
            private: false,
            limit: 1,
            category: "General",
            prompt: "list",
            locked: false,
            values: [
                null,
                "Neonate",
                "Ancilla",
                "Elder",
                null
            ],
            sort: false,
            cluster: true
        },
        {
            _id: "attr-tDC4G4rl",
            name: "Associates",
            format: "string",
            private: false,
            limit: 1,
            category: "General",
            prompt: "list",
            locked: false,
            values: [
                "Redemption House",
                "The Line",
                null,
                "Men-In-Black",
                "Red Flag",
                "Nightwolves",
                "Jarvis Jacks",
                "Daylighters",
                "Masque",
                "Ascetic Ministry",
                "St. Michael's Cell",
                null
            ],
            sort: false,
            cluster: true
        },
        {
            _id: "attr-lY0TGzSY",
            name: "Childer",
            format: "string",
            private: false,
            limit: "none",
            category: "General",
            prompt: "autocomplete",
            locked: false,
            values: [],
            sort: false,
            cluster: true
        },
        {
            _id: "attr-1PsHdBpa",
            name: "Clan",
            format: "string",
            private: false,
            limit: 1,
            category: "General",
            prompt: "list",
            locked: false,
            values: [
                "Ministry",
                "Gangrel",
                "Malkavian",
                "Brujah",
                "Toreador",
                "Nosferatu",
                "Thin-Blooded",
                "Ventrue",
                "Tremere",
                "Banu Haqim",
                "Hecata",
                "Lasombra"
            ],
            sort: false,
            cluster: true
        },
        {
            _id: "attr-FMb9C57T",
            name: "Connection Type",
            format: "string",
            private: false,
            limit: 1,
            category: "General",
            prompt: "list",
            locked: false,
            values: [
                "Coalition",
                "Faction",
                "Sire/Regnant",
                "Subgroup"
            ],
            sort: false,
            cluster: false
        },
        {
            _id: "attr-WpeK3PC5",
            name: "Description",
            format: "text",
            private: false,
            limit: 1,
            category: "General",
            prompt: "none",
            locked: false,
            values: [],
            sort: false,
            cluster: false
        },
        {
            _id: "attr-8HybNYYV",
            name: "Element Type",
            format: "string",
            private: false,
            limit: 1,
            category: "General",
            prompt: "list",
            locked: false,
            values: [
                "Person",
                "Organization",
                "Kindred",
                "Mortal",
                "Faction",
                "Coalition"
            ],
            sort: false,
            cluster: true
        },
        {
            _id: "attr-PK9BumXB",
            name: "Faction",
            format: "string",
            private: false,
            limit: 1,
            category: "General",
            prompt: "list",
            locked: false,
            values: [
                "Anarchs",
                "Independent",
                "Camarilla",
                "Sabbat",
                "University of Toronto",
                "Bookies",
                "Second Inquisition",
                null,
                null
            ],
            sort: false,
            cluster: true
        },
        {
            _id: "attr-ghNSzorX",
            name: "Generation",
            format: "string",
            private: false,
            limit: 1,
            category: "General",
            prompt: "list",
            locked: false,
            values: [
                null,
                "Eleventh",
                "Twelfth",
                "Fourteenth",
                "Thirteenth",
                "Eighth",
                "Tenth",
                "Ninth",
                null
            ],
            sort: false,
            cluster: true
        },
        {
            _id: "attr-tGjBe1Df",
            name: "Humanity",
            format: "string",
            private: false,
            limit: 1,
            category: "General",
            prompt: "autocomplete",
            locked: false,
            values: [],
            sort: false,
            cluster: true
        },
        {
            _id: "attr-j62A4eQ9",
            name: "Image",
            format: "image",
            private: false,
            limit: 1,
            category: "General",
            prompt: "autocomplete",
            locked: false,
            values: [],
            sort: false,
            cluster: true
        },
        {
            _id: "attr-V08LdWbp",
            name: "Label",
            format: "string",
            private: false,
            limit: 1,
            category: "General",
            prompt: "autocomplete",
            locked: false,
            values: [],
            sort: false,
            cluster: false
        },
        {
            _id: "attr-f7sAFayK",
            name: "Loop Type",
            format: "string",
            private: false,
            limit: 1,
            category: "General",
            prompt: "list",
            locked: false,
            values: [],
            sort: false,
            cluster: false
        },
        {
            _id: "attr-UYK2PI5m",
            name: "Quote",
            format: "string",
            private: false,
            limit: 1,
            category: "General",
            prompt: "autocomplete",
            locked: false,
            values: [],
            sort: false,
            cluster: true
        },
        {
            _id: "attr-gvUs87u4",
            name: "Regnant",
            format: "string",
            private: false,
            limit: 1,
            category: "General",
            prompt: "autocomplete",
            locked: false,
            values: [],
            sort: false,
            cluster: true
        },
        {
            _id: "attr-bQVl5LE9",
            name: "Sire",
            format: "string",
            private: false,
            limit: 1,
            category: "General",
            prompt: "list",
            locked: false,
            values: [
                "Ren",
                null,
                "Maxwell 'Max' Floyd",
                "Mr. Easy",
                "Baroness Monika Eulenberg",
                "Prince Osborne Lowell",
                "Cyrus Raza",
                "Frederik Scheer, Seneschal",
                "Alistair Etrata",
                null
            ],
            sort: false,
            cluster: true
        },
        {
            _id: "attr-T2XMNtE2",
            name: "Status",
            format: "string",
            private: false,
            limit: 1,
            category: "General",
            prompt: "none",
            locked: false,
            values: [],
            sort: false,
            cluster: true
        },
        {
            _id: "attr-ZZVVpTju",
            name: "StatusNum",
            format: "number",
            private: false,
            limit: 1,
            category: "General",
            prompt: "list",
            locked: false,
            values: [
                1,
                5,
                2,
                3,
                0,
                4
            ],
            sort: false,
            cluster: true
        },
        {
            _id: "attr-wPiLkHiU",
            name: "StatusSizeOverride",
            format: "number",
            private: false,
            limit: 1,
            category: "General",
            prompt: "list",
            locked: false,
            values: [
                2,
                0,
                3,
                5
            ],
            sort: false,
            cluster: true
        },
        {
            _id: "attr-qgBK5vAM",
            name: "Subtype",
            format: "string",
            private: false,
            limit: 1,
            category: "General",
            prompt: "list",
            locked: false,
            values: [
                "Civilian",
                "Ghoul",
                "Criminal",
                "St. Leopold",
                "FIRSTLIGHT"
            ],
            sort: false,
            cluster: true
        },
        {
            _id: "attr-e2ks19HO",
            name: "Tags",
            format: "string",
            private: false,
            limit: "none",
            category: "General",
            prompt: "autocomplete",
            locked: false,
            values: [],
            sort: false,
            cluster: true
        },
        {
            _id: "attr-tlSEuiv0",
            name: "Titles",
            format: "string",
            private: false,
            limit: 1,
            category: "General",
            prompt: "autocomplete",
            locked: false,
            values: [],
            sort: false,
            cluster: true
        }
    ],
    elements: [
        {
            _id: "elem-1Un9VZrg",
            attributes: {
                label: "Redemption House",
                faction: "Anarchs",
                "element type": "Coalition"
            }
        },
        {
            _id: "elem-1dohD2RO",
            attributes: {
                label: "Tyler",
                clan: "Ministry",
                faction: "Anarchs",
                sire: "Ren",
                associates: "Redemption House",
                statusnum: 1,
                quote: "Sex, drugs, rock n' roll. Don't give into one of them. Give in to 'em all... in moderation. That's the ticket.",
                description: "Of Ren's three childer, Tyler is the rock that anchors Alexandra's lofty idealism and grounds Kai's more-reckless impulses. The eldest of Ren's childer, Tyler is protective of his sire and wary of potential threats to his unlife; as such, he is more reluctant than his siblings to welcome others into their circle of trust.",
                image: "https://imgur.com/7rv5jq9.jpg",
                "element type": "Kindred"
            }
        },
        {
            _id: "elem-2A8LaEAW",
            attributes: {
                label: "Jason",
                clan: "Gangrel",
                faction: "Anarchs",
                age: "Neonate",
                associates: "Men-In-Black",
                statusnum: 2,
                quote: "Just a thought, but has anyone considered *not* murder?",
                description: "In contrast to sharing his chosen name with a brutal horror movie monster, Jason lacks the feral nature typical of the Gangrel—indeed, he is among the more measured voices in the Anarch Movement. This isn't to say the boy lacks teeth: His rivalry with Ben Blinker is legendary, fraught with frequent games of one-upsmanship that more than once have threatened to drive the Men-In-Black apart.",
                image: "https://imgur.com/cAcnc48.jpg",
                "element type": "Kindred"
            }
        },
        {
            _id: "elem-3FAG5Tdw",
            attributes: {
                label: "The Piece-Taker",
                clan: "Banu Haqim",
                faction: "Independent",
                age: "Elder",
                titles: "Autarkis",
                statusnum: 0,
                quote: "...",
                "element type": "Kindred"
            }
        },
        {
            _id: "elem-4NKgoxKL",
            attributes: {
                label: "Calvin Wallace",
                clan: "Brujah",
                faction: "Anarchs",
                age: "Neonate",
                associates: "Red Flag",
                statusnum: 3,
                quote: "The Anarch Independence Movement is so much more than a neonate uprising! It is a revolution, and it will change the world!",
                description: "A firebrand even by the standards of Clan Brujah, Calvin might seem to be an odd fit for a coterie like Red Flag, whose responsibilities require diplomacy and a light touch. Nevertheless, he was among the first names Rosie requested of the baroness; it seems she felt his passion would serve Red Flag's agenda well.",
                image: "https://imgur.com/1dp5Jwa.jpg",
                "element type": "Kindred"
            }
        },
        {
            _id: "elem-4RJ1vjhb",
            attributes: {
                label: "Jane 'JD' Doe",
                tags: [
                    "CoterieBoss"
                ],
                clan: "Brujah",
                faction: "Anarchs",
                age: "Neonate",
                associates: "Men-In-Black",
                statusnum: 3,
                quote: "Last night I was Sister Selene, who proved unable to unburden her petitioner of his 'delusions'. Tonight I will be Candy: perhaps the sins of the flesh can do what God could not.",
                description: "Jane Doe is not her real name, but that hardly matters: She becomes someone new every night, adopting personas and aliases as easily as a new pair of shoes. Even her closest allies aren't sure if they've ever met the \"real\" Brujah behind the ever-changing masks. As boss of the Men-In-Black, Jane bears ultimate responsibility for upholding the Masquerade—and the baroness has given her unprecedented latitude to do whatever she deems necessary to carry out this duty.",
                image: "https://imgur.com/Mfva68Z.jpg",
                "element type": "Kindred"
            }
        },
        {
            _id: "elem-4Th1FRTa",
            attributes: {
                label: "Harold Covington",
                subtype: "Ghoul",
                faction: "Anarchs",
                regnant: "Baroness Monika Eulenberg",
                associates: "Daylighters",
                statusnum: 0,
                statussizeoverride: 0,
                "element type": "Mortal"
            }
        },
        {
            _id: "elem-4yJVp1HX",
            attributes: {
                label: "Mason Schmidt",
                clan: "Brujah",
                faction: "Anarchs",
                age: "Neonate",
                associates: "The Line",
                statusnum: 2,
                quote: "Union Station is half a million square feet of twisting corridors, dozens of entrances, and two hundred thousand daily travellers. Keeping unwanted visitors out of there? It's only part of our job.",
                description: "There are downsides to having an incommunicative Malkavian prophet as your Boss, and inflexibility in the field is one of them. Mason Schmidt was Embraced to solve this problem. He had distinguished himself at the RMC military academy, where his keen strategic mind earned him top honors in military wargame exercises. Schmidt acts as the Line's tactical command, with full authority in the field to... \"calibrate\" Sage Sam's orders with the facts on the ground.",
                image: "https://imgur.com/rhJ1SxF.jpg",
                "element type": "Kindred"
            }
        },
        {
            _id: "elem-5KCZ8Nlr",
            attributes: {
                label: "The Island Devil",
                clan: "Nosferatu",
                faction: "Independent",
                age: "Elder",
                titles: "Autarkis",
                statusnum: 0,
                "element type": "Kindred"
            }
        },
        {
            _id: "elem-5kIk72Zy",
            attributes: {
                label: "Victor Vex",
                clan: "Malkavian",
                faction: "Camarilla",
                age: "Ancilla",
                statusnum: 3,
                quote: "It seemed like the right idea at the time: I'm not really a 'Council of Primogen' kind of guy. Now, what can I get you?",
                description: "Vex is considered tedious by most, in part because of his firm belief in the power of his Evil Eye—and his propensity to use it whenever he is challenged. As the youngest member of Prince Steele's Council of Primogen, Vex managed to accomplish a great deal despite his delusions: He negotiated control over the Waterfront and established Clan Malkavian’s grip over most of Toronto’s tourism industry and ports of entry. For reasons unknown, he abdicated from his position on the council when Bertrice stepped down; tonight, he attends Elysia with no greater fanfare than any other ancilla—but for his position as Toronto's primary liason with the Circulatory Network.",
                image: "https://imgur.com/0B3DtU2.jpg",
                "element type": "Kindred"
            }
        },
        {
            _id: "elem-60GbLsn9",
            attributes: {
                label: "Adrian Gerrard",
                clan: "Brujah",
                faction: "Camarilla",
                generation: "Eighth",
                age: "Elder",
                statusnum: 3,
                quote: "I am not Theo Bell. We grieve with our Ventrue brothers over the loss of Hardestadt, and will honor the legacy of Prince Steele for as long as you will have us.",
                description: "As primogen, Gerrard served Prince Steele as a capable administrator, accountant, and power broker, claiming more influence over the investment and commercial banks of Toronto than any other Kindred. Tonight, he remains the eldest Brujah in the city, and works diligently to restore his clan's former place in the Camarilla after the treachery of Theo Bell at the Conclave of Prague and his unceremonious expulsion from the Council of Primogen.",
                image: "https://imgur.com/tidZJ57.jpg",
                "element type": "Kindred"
            }
        },
        {
            _id: "elem-6Mt9lL1b",
            attributes: {
                label: "Sabbat",
                "element type": "Faction"
            }
        },
        {
            _id: "elem-6PRzGuwY",
            attributes: {
                label: "Laz, Sheriff",
                tags: [
                    "Officer"
                ],
                clan: "Nosferatu",
                faction: "Camarilla",
                age: "Ancilla",
                titles: "Sheriff",
                statusnum: 4,
                quote: "Am I really the only one who gives a flying fuck about this city?",
                description: "As Camarilla sheriff, Laz stands on the front lines of Toronto's defense: the responsibility for keeping the city secure ultimately rests on his shoulders. But with so many Camarilla elders abandoning their domains for the Middle East, Laz is becoming desperate: desperate enough to pursue an alliance with the Anarchs, which has made him less than popular among the remaining Camarilla old guard.",
                image: "https://imgur.com/uuDyDgH.jpg",
                "element type": "Kindred"
            }
        },
        {
            _id: "elem-703vqYs5",
            attributes: {
                label: "Eddie DeFrey",
                subtype: "Ghoul",
                faction: "Anarchs",
                regnant: "Baroness Monika Eulenberg",
                associates: "Daylighters",
                statusnum: 0,
                statussizeoverride: 0,
                "element type": "Mortal"
            }
        },
        {
            _id: "elem-7oqGTFYe",
            attributes: {
                label: "Old Quentin",
                clan: "Malkavian",
                faction: "Anarchs",
                associates: "Nightwolves",
                statusnum: 2,
                quote: "Didn't your mother teach you it's rude to ask someone their age?",
                description: "Old Quentin is perhaps the most mysterious Anarch in the city—and with a baroness like Monika, that's saying something. Young in appearance and young at heart, he's charmingly cagey when it comes to questions about his age. Is he really, as some whisper, a mighty elder laying low? Or is he a mere neonate enjoying such grandiose suspicions? And his Malkavian lineage invites another question: Does *he* even know? Whatever the case, Old Quentin has served the baroness ably and loyally, and as long as he continues to do so, she's hardly one to point fingers at the peculiarities of others.",
                image: "https://imgur.com/QRoycDh.jpg",
                "element type": "Kindred"
            }
        },
        {
            _id: "elem-8cLEqEej",
            attributes: {
                label: "Flamenco",
                subtype: "FIRSTLIGHT",
                faction: "Second Inquisition",
                titles: "Agent",
                associates: "St. Michael's Cell",
                statusnum: 3,
                statussizeoverride: 3,
                "element type": "Mortal"
            }
        },
        {
            _id: "elem-9eXtx4ll",
            attributes: {
                label: "Rosie",
                clan: "Nosferatu",
                faction: "Anarchs",
                age: "Ancilla",
                titles: "Emissary",
                associates: "Red Flag",
                statusnum: 4,
                quote: "Your willingness to sit at my table tells me all I need to know.",
                description: "A Nosferatu may seem an odd fit for the preeminent diplomat among the Anarchs in Toronto, but Rosie has at least fifty years of experience negotiating with dangerous predators—and her record of success speaks for itself. Emphasizing mutual self-interest and refreshing (if biting) authenticity, Rosie was always the obvious choice to lead Red Flag's overtures to the Camarilla on behalf of the Anarch Movement.",
                image: "https://imgur.com/yiJo1LA.jpg",
                "element type": "Kindred"
            }
        },
        {
            _id: "elem-AUBLvx7R",
            attributes: {
                label: "Kai",
                clan: "Ministry",
                faction: "Anarchs",
                sire: "Ren",
                associates: "Redemption House",
                statusnum: 1,
                quote: "Woo! What a night, am I right? Same time tomorrow, then?",
                description: "Of Ren's three childer, Kai is the relentlessly-free spirit that spurs ever-cautious Tyler to action and invests ever-tranquil Alexandra with conviction. It was Kai who persuaded the Redeemers to fight on the night of Vykos' attack, in spite of the icy reception the Ministry had received from the Anarchs before then. As the youngest of the Redeemers, Kai has yet to develop the innate paranoia characteristic of the Kindred; whether his eagerness to trust others is a strength or a weakness remains to be seen.",
                image: "https://imgur.com/WuzsqlA.jpg",
                "element type": "Kindred"
            }
        },
        {
            _id: "elem-BEAmo8PW",
            attributes: {
                label: "Bob Johnston",
                subtype: "Ghoul",
                faction: "Camarilla",
                regnant: "Frederik Scheer, Seneschal",
                statusnum: 0,
                statussizeoverride: 0,
                "element type": "Mortal"
            }
        },
        {
            _id: "elem-CPgLxRpG",
            attributes: {
                label: "Masque",
                faction: "Anarchs",
                "element type": "Coalition"
            }
        },
        {
            _id: "elem-D97qdI5h",
            attributes: {
                label: "Anarchs",
                "element type": "Faction"
            }
        },
        {
            _id: "elem-DOmTQZKY",
            attributes: {
                label: "Jack-be-Nimble",
                clan: "Nosferatu",
                faction: "Anarchs",
                age: "Neonate",
                associates: "The Line",
                statusnum: 2,
                quote: "Head back now? There's still five minutes till sunrise!",
                description: "If anyone can be said to be a true expert of the city, it's Jack-be-Nimble. Jack was here a decade or two before the baroness rose to power, and he spent most of that time as a courier—a service that has become even more important in the wake of the Second Inquisition's increased scrutiny of the Internet. Even the Piece-Taker's domain isn't off limits to Jack: He's the only Anarch who dares to visit the place. Well, almost only.",
                image: "https://imgur.com/Y5Qcmvj.jpg",
                "element type": "Kindred"
            }
        },
        {
            _id: "elem-EYwxlQWS",
            attributes: {
                label: "Soraya Mortazavi",
                clan: "Ministry",
                faction: "Camarilla",
                sire: "Cyrus Raza",
                associates: "Ascetic Ministry",
                statusnum: 1,
                "element type": "Kindred"
            }
        },
        {
            _id: "elem-F9kG40SF",
            attributes: {
                label: "Nightwolves",
                faction: "Anarchs",
                "element type": "Coalition"
            }
        },
        {
            _id: "elem-GwRmz3Lb",
            attributes: {
                label: "Prince Osborne Lowell",
                clan: "Ventrue",
                faction: "Camarilla",
                generation: "Ninth",
                age: "Ancilla",
                titles: "Prince",
                childer: [
                    "Locke Ulrich"
                ],
                statusnum: 5,
                quote: "Do you think I enjoy overseeing this shell of a former city? I serve because I must. I serve because no one else will.",
                description: "Under the Iron Praxis, no one would have predicted that this unassuming ancilla would eventually rule the city as prince. He was known and respected, of that there is no doubt, but his ambitions were less grand than most——especially among the Ventrue. One may assume that his eventual (and, by all outward appearances, reluctant) rise to the throne was the result of a compromise among those older and more powerful: the choice that ruffled the fewest feathers, a candidate who could be kept on a short leash.",
                image: "https://imgur.com/JK6cnOr.jpg",
                "element type": "Kindred"
            }
        },
        {
            _id: "elem-HA1LU07o",
            attributes: {
                label: "The Aristocrat",
                clan: "Nosferatu",
                faction: "Camarilla",
                generation: "Tenth",
                age: "Ancilla",
                titles: "Harpy",
                statusnum: 3,
                quote: "Ta-daaa!",
                description: "The Aristocrat is an unlikely Nosferatu in more ways than one: A consummate socialite with a loud and flamboyant personality, he flaunts the characteristic subtlety of his clan to stand tall in the spotlight. This has made him one of Toronto's most popular Kindred, a welcome presence in Elysium and Anarch bars alike, with a circle of friends that transcends the boundaries of sect. Not only is he a respected Herald (or caustic Harpy, depending upon who you ask), he is widely thought of as the leader of Toronto's trio of Harpies. Finding oneself on the receiving end of the Aristocrat's scorn is arguably the surest way to torpedo one's respectability in an avalanche of scorn.",
                image: "https://i.imgur.com/d6GuaE8.jpg.jpg",
                "element type": "Kindred"
            }
        },
        {
            _id: "elem-IejfCrJ1",
            attributes: {
                label: "Suyin",
                subtype: "Civilian",
                faction: "Anarchs",
                associates: "The Line",
                statusnum: 2,
                statussizeoverride: 2,
                "element type": "Mortal"
            }
        },
        {
            _id: "elem-IgOrMyzD",
            attributes: {
                label: "Ben Blinker",
                clan: "Malkavian",
                faction: "Anarchs",
                generation: "Twelfth",
                age: "Neonate",
                associates: "Men-In-Black",
                statusnum: 2,
                quote: "Look into my pretty, pretty eyes.",
                description: "Ben Blinker's contribution to the Men-In-Black is obvious: his command of Dominate, particularly impressive for a neonate, is invaluable to his coterie's principal responsibility of protecting the Masquerade. That being said, Ben Blinker's penchant for causing as many messes as he cleans up is legendary; his need to \"keep things interesting\" is a problematic manifestation of his Curse of Malkav.",
                image: "https://imgur.com/VLwNWgz.jpg",
                "element type": "Kindred"
            }
        },
        {
            _id: "elem-L82dXdsM",
            attributes: {
                label: "Jarvis Jacks",
                faction: "Anarchs",
                "element type": "Coalition"
            }
        },
        {
            _id: "elem-M67VLIps",
            attributes: {
                label: "Bacchus Giovanni",
                clan: "Hecata",
                faction: "Independent",
                age: "Ancilla",
                statusnum: 0,
                "element type": "Kindred"
            }
        },
        {
            _id: "elem-MglTRNn2",
            attributes: {
                label: "Raphael Bishop",
                clan: "Tremere",
                faction: "Camarilla",
                generation: "Ninth",
                age: "Ancilla",
                titles: "Scourge",
                sire: "Frederik Scheer, Seneschal",
                statusnum: 3,
                quote: "I don't enjoy all that I'm asked to do. But loyalty to the Pyramid is a virtue—especially in the wake of its fall.",
                description: "Raphael Bishop is a creature of his sire's making——both literally and figuratively. Scheer kindled in his childe a zealous devotion to House Tremere and the Pyramid, and this fire has found plenty of fuel in modern nights: Bishop watched Vienna fall, taking the storied might of his clan along with it. He remembers what Clan Tremere *was*, and he shares with his sire a deep shame for its loss... and the will to get it back.",
                image: "https://imgur.com/l8sijLS.jpg",
                "element type": "Kindred"
            }
        },
        {
            _id: "elem-N7VZAvnD",
            attributes: {
                label: "Toni Gomez",
                clan: "Thin-Blooded",
                faction: "Anarchs",
                generation: "Fourteenth",
                age: "Neonate",
                sire: "Mr. Easy",
                associates: "Men-In-Black",
                statusnum: 0,
                quote: "Whatever.",
                "element type": "Kindred"
            }
        },
        {
            _id: "elem-NEIPqBrH",
            attributes: {
                label: "Drake",
                clan: "Nosferatu",
                faction: "Camarilla",
                age: "Elder",
                titles: "Primogen",
                statusnum: 5,
                quote: "You know all that you need to know. When this changes, you will know that, too.",
                description: "The Oubliette. The Whisper-Weaver. The Vault. Perpetually shrouded in sheer black silks, Drake speaks little, but when he does it is in the interests of everyone to pay attention: He wields his secrets like a surgeon’s scalpel, leveraging them for maximum impact with prescient timing. It is said that he claimed P.A.T.H, Toronto’s vast subterranean shopping complex, for Clan Nosferatu by uttering three words in confidence to Seneschal Scheer. For these reasons and the myriad unconfirmed rumors that accompanied them, Drake is among the most feared Camarilla elders in the country: an inscrutable boogeyman whose ultimate motives are always in doubt.",
                image: "https://imgur.com/NEGG6jD.jpg",
                "element type": "Kindred"
            }
        },
        {
            _id: "elem-NJcjC3Lp",
            attributes: {
                label: "The Line",
                faction: "Anarchs",
                "element type": "Coalition"
            }
        },
        {
            _id: "elem-OG80QK7m",
            attributes: {
                label: "Fort York Cell",
                faction: "Second Inquisition",
                "element type": "Coalition"
            }
        },
        {
            _id: "elem-QFR1r1tR",
            attributes: {
                label: "Emily, the Dusk Rose",
                tags: [
                    "Officer"
                ],
                clan: "Nosferatu",
                faction: "Camarilla",
                generation: "Tenth",
                age: "Ancilla",
                statusnum: 2,
                quote: "Shh, pet. Such luscious hair, such beautiful skin, such wide, wide eyes. I think I'll keep you, as our little secret.",
                description: "Subtle, deadly, and sadistic, the knowledge that it is Emily who serves Sheriff Laz as Scourge (and not Raphael Bishop) has spread only slowly through the Camarilla and Toronto's Kindred community at large. Beautiful but for the tears of thick, foul-smelling ichor that continuously fall from her eyes, she is uniquely capable among the Nosferatu of being seen in public without threatening the Masquerade. There is no doubt that her clan takes full advantage of this, positioning the Dusk Rose as the Nosferatu most-frequently called upon whenever it is necessary to treat with the kine directly.",
                image: "https://i.imgur.com/vQrOy0Z.jpg.jpg",
                "element type": "Kindred"
            }
        },
        {
            _id: "elem-RGE2yJWY",
            attributes: {
                label: "Cyrus Raza",
                clan: "Ministry",
                faction: "Camarilla",
                childer: [
                    "Aryana Mortazavi",
                    "Soraya Mortazavi"
                ],
                associates: "Ascetic Ministry",
                statusnum: 2,
                "element type": "Kindred"
            }
        },
        {
            _id: "elem-RliYu3oU",
            attributes: {
                label: "Alexandra",
                clan: "Ministry",
                faction: "Anarchs",
                sire: "Ren",
                associates: "Redemption House",
                statusnum: 1,
                quote: "I am here to help however I can. What can I do to put your mind at ease?",
                description: "Of Ren's three childer, Alexandra is the beating heart that bridges the gulf between Kai's restless enthusiasm and Tyler's stoic pragmatism. The quintessential exemplar of still waters that run deep, Alexandra is quiet and thoughtful; intensely focused and unsettlingly unreadable. On one hand, she campaigned heavily to welcome Kingston Black into the close-knit Redeemer family; on the other, she appears to be the least interested in ingratiating herself with the Anarch population at large.",
                image: "https://imgur.com/xIMeIt5.jpg",
                "element type": "Kindred"
            }
        },
        {
            _id: "elem-SYEIB2uW",
            attributes: {
                label: "Carlos 'CD' Daniels",
                subtype: "Ghoul",
                faction: "Anarchs",
                regnant: "Baroness Monika Eulenberg",
                associates: "Daylighters",
                statusnum: 0,
                statussizeoverride: 0,
                "element type": "Mortal"
            }
        },
        {
            _id: "elem-TAqetfMu",
            attributes: {
                label: "Anita Morris",
                clan: "Tremere",
                faction: "Camarilla",
                generation: "Thirteenth",
                age: "Neonate",
                statusnum: 1,
                quote: "My problems started when I got everything I wanted.",
                description: "... I mean look, we're monsters, we do shitty things. Yeah, I think I'm better than most, so I figured I had karma to spare when an opportunity presented itself to... um... to return to the fold. Besides, I saw the writing on the wall: No way can this madwoman and her thugs take on the Regent. Especially while we're all looking over our shoulders because our food has fucking militarized...",
                image: "https://imgur.com/2DPcxdF.jpg",
                "element type": "Kindred"
            }
        },
        {
            _id: "elem-UBCjTnyL",
            attributes: {
                label: "Sage Sam",
                tags: [
                    "CoterieBoss"
                ],
                clan: "Malkavian",
                faction: "Anarchs",
                age: "Ancilla",
                associates: "The Line",
                statusnum: 3,
                quote: "... the scholar met the silent and the white knight chose a side and the island dark touched the gilded cage and the asps circled their king and all joined hands and sent up a flare ...",
                description: "Cursed with a never-ending stream of prophecy that must be spoken aloud, Sage Sam wears a perpetual cloak of silence and communicates via sign language with the help of his mortal wife, Suyin, now almost ninety years of age. As boss of the Line, the baroness has entrusted Sam with securing Toronto's borders and managing inter-city travel.",
                image: "https://imgur.com/F6xF17A.jpg",
                "element type": "Kindred"
            }
        },
        {
            _id: "elem-Ub4jDMbf",
            attributes: {
                label: "Yusef Shamsin",
                clan: "Nosferatu",
                faction: "Anarchs",
                generation: "Twelfth",
                age: "Neonate",
                associates: "The Line",
                statusnum: 2,
                "element type": "Kindred"
            }
        },
        {
            _id: "elem-V5b6cdCE",
            attributes: {
                label: "Frederik Scheer, Seneschal",
                clan: "Tremere",
                faction: "Camarilla",
                generation: "Eighth",
                age: "Elder",
                titles: "Seneschal",
                childer: [
                    "Bob Johnston",
                    "Raphael Bishop"
                ],
                statusnum: 5,
                quote: "The Camarilla has held Toronto for four hundred years, and we shall hold it for four hundred more.",
                description: "Frederik Scheer has been a driving force behind Camarilla control over Toronto for at least two hundred years. As seneschal to the indomitable Prince Steele, Scheer developed a reputation for ruthless loyalty to the Ivory Tower. Tonight, with a new and untested ancilla holding Praxis, his power has only grown——causing many to wonder who *really* calls the shots in the city.",
                image: "https://imgur.com/lTYDFr4.jpg",
                "element type": "Kindred"
            }
        },
        {
            _id: "elem-XBwIpXaH",
            attributes: {
                label: "Bertrice",
                clan: "Gangrel",
                faction: "Camarilla",
                age: "Elder",
                statusnum: 4,
                quote: "Bellanger makes my skin crawl: 'ooh, I broke a nail'. My nails don't break so easily.",
                description: "Beloved by the harpies, a rapier wit in Elysia, and possessed of beauty so refined she stuck an ever-present thorn in Primogen Bellanger’s side, Bertrice is as far from the typical Gangrel as one can get: her affinity for boardrooms and salons ensured that she continued to be welcome on the Council of Primogen long after Justicar Xavier announced the exodus of Clan Gangrel from the Ivory Tower. Recently incensed by Prince Lowell's favourable treatment of Clan Brujah, she abandoned her title and departed for the north of the city. Whether she intends to stay loyal to the Camarilla or declare herself the city's third autarkis remains to be seen.",
                image: "https://imgur.com/xBD3G4b.jpg",
                "element type": "Kindred"
            }
        },
        {
            _id: "elem-Xvmp7IpG",
            attributes: {
                label: "Mylene 'the Puck' Hamelin",
                clan: "Ventrue",
                faction: "Camarilla",
                generation: "Tenth",
                age: "Ancilla",
                titles: "Primogen",
                statusnum: 5,
                quote: "Why? Because if you don't I'll smash your fucking teeth in, that's why.",
                description: "Not all Ventrue are traditional leaders: Mylene lacks most of the airs and graces of her clanmates. She is a hard-nosed, plain-speaking former solicitor who still fraternizes brazenly with the kine by dating mortal woman (often without feeding), happily swearing at her fellow council members when she disagrees with them, and giving out beatings to her own clan members when they fall out of line. Some believe she is called “the Puck” because of her fey appearance; in fact, it’s because she has all the subtlety of an ice hockey puck. Nevertheless, Hamelin is a popular primogen. She always drives forward her clan’s interests and brooks no dissent from the Anarchs.",
                image: "https://imgur.com/H9ZJ7Wy.jpg",
                "element type": "Kindred"
            }
        },
        {
            _id: "elem-aAFxfi1u",
            attributes: {
                label: "Men-In-Black",
                faction: "Anarchs",
                "element type": "Coalition"
            }
        },
        {
            _id: "elem-aMkX6wac",
            attributes: {
                label: "Mr. Easy",
                clan: "Malkavian",
                faction: "Anarchs",
                generation: "Thirteenth",
                age: "Neonate",
                childer: [
                    "Kit Edwards",
                    "Toni Gomez",
                    "Wesley Richardson"
                ],
                associates: "Jarvis Jacks",
                statusnum: 0,
                quote: "I'm sorry, I broke another one. But I already cleaned up! And I promise to be more careful with the next one.",
                description: "Mr. Easy is a sadist, a rapist, and a pedophile. This is no secret. Why Max brought him into the Jarvis Jacks when no other coterie would have him is anyone's guess: he has the mind of a child and a soul as putrid as they come. On top of that, he's taken to compulsively Embracing kine, despite the fact that his weak blood consistently fails to create true vampires.",
                image: "https://imgur.com/PZ9kPUw.jpg",
                "element type": "Kindred"
            }
        },
        {
            _id: "elem-aZaZsfjX",
            attributes: {
                label: "Ava Wong",
                tags: [
                    "PC"
                ],
                clan: "Malkavian",
                faction: "Anarchs",
                age: "Neonate",
                sire: "Baroness Monika Eulenberg",
                associates: "Masque",
                statusnum: 2,
                "element type": "Kindred"
            }
        },
        {
            _id: "elem-asRs7G0j",
            attributes: {
                label: "Kit Edwards",
                clan: "Thin-Blooded",
                faction: "Anarchs",
                generation: "Fourteenth",
                age: "Neonate",
                sire: "Mr. Easy",
                associates: "Men-In-Black",
                statusnum: 0,
                "element type": "Kindred"
            }
        },
        {
            _id: "elem-bIkJwVCw",
            attributes: {
                label: "Stalker Todd",
                clan: "Gangrel",
                faction: "Anarchs",
                age: "Neonate",
                associates: "Nightwolves",
                statusnum: 1,
                quote: "Please, run. Dawn approaches; you might even get away.",
                description: "There is perhaps no more effective hunter among the Anarchs than Stalker Todd. Patient, thorough, calculating and meticulous, once he has caught wind of his quarry, there is no escape. He relishes the hunt, and its end even more—each kill is a work of art; a statement that cannot be ignored; a warning to others who would stand against the baroness.",
                image: "https://imgur.com/jdWasdY.jpg",
                "element type": "Kindred"
            }
        },
        {
            _id: "elem-cYNKYUq1",
            attributes: {
                label: "Maxwell 'Max' Floyd",
                tags: [
                    "CoterieBoss"
                ],
                clan: "Brujah",
                faction: "Anarchs",
                generation: "Eleventh",
                age: "Neonate",
                childer: [
                    "Kingston 'King' Black"
                ],
                associates: "Jarvis Jacks",
                statusnum: 1,
                quote: "You must be pretty fucking desperate to come down here to treat with the trash. That's fine by me. I can work with desperate.",
                description: "It's better to reign in Hell than to serve in Heaven, and Max has certainly carved out a hellish principality for himself and his small coterie of ill repute. Until recently, the Jarvis Jacks controlled the largest Anarch domain in Toronto despite being the smallest Anarch coterie. Sure, their territory is hardly sought after, but the Jarvis Jacks' lucrative grip on the city's crime is iron-clad—and completely unopposed.",
                image: "https://imgur.com/mH1xwLJ.jpg",
                "element type": "Kindred"
            }
        },
        {
            _id: "elem-ci1hMBD5",
            attributes: {
                label: "Sang-Froid",
                clan: "Nosferatu",
                faction: "Sabbat",
                statusnum: 1,
                "element type": "Kindred"
            }
        },
        {
            _id: "elem-eUDpuRKO",
            attributes: {
                label: "University of Toronto",
                "element type": "Faction"
            }
        },
        {
            _id: "elem-effTBrJM",
            attributes: {
                label: "The Giovanni",
                faction: "Independent",
                "element type": "Coalition"
            }
        },
        {
            _id: "elem-eiMhiWVz",
            attributes: {
                label: "Heralds",
                faction: "Camarilla",
                "element type": "Coalition"
            }
        },
        {
            _id: "elem-fGPi7L6D",
            attributes: {
                label: "Kingston 'King' Black",
                clan: "Brujah",
                faction: "Anarchs",
                generation: "Twelfth",
                age: "Neonate",
                sire: "Maxwell 'Max' Floyd",
                associates: "Redemption House",
                statusnum: 1,
                quote: "This House holds secrets I need to know, and I am stronger than they think.",
                "element type": "Kindred"
            }
        },
        {
            _id: "elem-gUC9Ypnf",
            attributes: {
                label: "Professor Ethan Keen",
                clan: "Malkavian",
                faction: "Anarchs",
                age: "Neonate",
                associates: "Red Flag",
                statusnum: 3,
                quote: "In conclusion, I submit a seventy percent confidence in the legitimacy of the sheriff's professed good intentions.",
                description: "Professor Ethan Keen is a peerless expert on the psychology of emotion, an impressive feat given he has been incapable of feeling emotions of any kind since his Embrace into the Clan of Malkav. His rational analysis and piercing insights into the Kindred psyche are invaluable to Red Flag's diplomatic efforts, albeit on the back lines—his calculating demeanor is an ill fit to the nuances of negotiation.",
                image: "https://imgur.com/np6xHAy.jpg",
                "element type": "Kindred"
            }
        },
        {
            _id: "elem-gbhWoxHp",
            attributes: {
                label: "Dr. Arthur Roy",
                tags: [
                    "PC",
                    "CoterieBoss"
                ],
                clan: "Tremere",
                faction: "Anarchs",
                age: "Neonate",
                associates: "Masque",
                statusnum: 3,
                "element type": "Kindred"
            }
        },
        {
            _id: "elem-guznhCzu",
            attributes: {
                label: "Amos Jax",
                tags: [
                    "Dead"
                ],
                clan: "Gangrel",
                faction: "Anarchs",
                age: "Neonate",
                associates: "The Line",
                statusnum: 1,
                "element type": "Kindred"
            }
        },
        {
            _id: "elem-iR1zHpqu",
            attributes: {
                label: "Ren",
                tags: [
                    "CoterieBoss"
                ],
                clan: "Ministry",
                faction: "Anarchs",
                childer: [
                    "Alexandra",
                    "Kai",
                    "Tyler"
                ],
                associates: "Redemption House",
                statusnum: 2,
                quote: "Do not be afraid: the path to redemption always begins in the dark. Take my hand, and we will find the light together.",
                description: "The enigmatic and rarely-seen sire and leader of the Redeemers, Ren sits at the center of Ministry activity in Toronto. He effortlessly commands the unquestioning devotion of his childer, who speak his name with nigh Messianic fervor. To hear them tell it, an hour of Ren's counsel is a boon worthy of a prince—and there is evidence to support their assessment: Throngs of kine living in the Danforth have been transformed by his teachings at Redemption House, and Ren has apparently tamed even the fierce independence of the strong-willed Anarch Kingston Black, the former boss of Masque.",
                image: "https://imgur.com/h9ylClE.jpg",
                "element type": "Kindred"
            }
        },
        {
            _id: "elem-is9TkAHD",
            attributes: {
                label: "Aryana Mortazavi",
                clan: "Ministry",
                faction: "Camarilla",
                sire: "Cyrus Raza",
                associates: "Ascetic Ministry",
                statusnum: 1,
                "element type": "Kindred"
            }
        },
        {
            _id: "elem-itZf5pQw",
            attributes: {
                label: "Camarilla",
                "element type": "Faction"
            }
        },
        {
            _id: "elem-jYclhsp2",
            attributes: {
                label: "Christianne",
                clan: "Toreador",
                faction: "Camarilla",
                age: "Neonate",
                titles: "Harpy",
                statusnum: 3,
                quote: "No, you vacuous halfwit, he didn't *dump* me. We wanted different things, is all: loyalty for me, treason for him. Besides, I heard he's doing odd jobs for the Setites now? I think they call that 'dodging a bullet'.",
                description: "Christianne may be young among her Camarilla peers, but she is a Toronto native and has lived here her entire life. Admired and feared for her rapier wit in equal part, she and the Aristocrat are the sort of harpy-partnership with the power to bring princes to their knees with a few choice words at Elysium. Her cachet has only risen with the dramatic defection of the former sheriff Locke Ulrich to the Anarchs: they were assumed to be something of an item until then. Though Christianne has hidden the truth with characteristic Toreador aplomb, it is no great secret that she was as blindsided as everyone else.",
                image: "https://i.imgur.com/HjojZNk.jpg.jpg",
                "element type": "Kindred"
            }
        },
        {
            _id: "elem-jc3S8FAZ",
            attributes: {
                label: "Council of Primogen",
                faction: "Camarilla",
                "element type": "Coalition"
            }
        },
        {
            _id: "elem-kkpOrkLW",
            attributes: {
                label: "Jonathan Harker",
                subtype: "FIRSTLIGHT",
                faction: "Second Inquisition",
                titles: "Junior Agent",
                associates: "St. Michael's Cell",
                statusnum: 2,
                statussizeoverride: 2,
                "element type": "Mortal"
            }
        },
        {
            _id: "elem-kstBCC8S",
            attributes: {
                label: "Wesley Richardson",
                tags: [
                    "CoterieBoss"
                ],
                clan: "Thin-Blooded",
                faction: "Anarchs",
                generation: "Fourteenth",
                age: "Neonate",
                titles: "Daywalker",
                sire: "Mr. Easy",
                associates: "Daylighters",
                statusnum: 2,
                quote: "The irony is I'm a lab rat; I've always hated the Sun.",
                description: "Wesley Richardson is undoubtedly the most successful of Mr. Easy's bevy of thin-blooded childer. A chemist in life, he took naturally to the new alchemy of the duskborn, and his tendency towards pragmatism made his \"rehabilitation\" under his former hostage Wallflower quicker than his siblings in blood. Plus, Wesley is a rare daywalker who can endure the light of the Sun, positioning him to take leadership over the Daylighters in service to Baroness Eulenberg.",
                image: "https://imgur.com/jApLuvc.jpg",
                "element type": "Kindred"
            }
        },
        {
            _id: "elem-lAEQeLLW",
            attributes: {
                label: "Daylighters",
                faction: "Anarchs",
                "element type": "Coalition"
            }
        },
        {
            _id: "elem-lnbbGzjW",
            attributes: {
                label: "St. Michael's Cell",
                faction: "Second Inquisition",
                "element type": "Coalition"
            }
        },
        {
            _id: "elem-n2SWSTY4",
            attributes: {
                label: "Ralph Morgan",
                subtype: "Ghoul",
                faction: "Anarchs",
                regnant: "Baroness Monika Eulenberg",
                associates: "Daylighters",
                statusnum: 0,
                statussizeoverride: 0,
                "element type": "Mortal"
            }
        },
        {
            _id: "elem-nG1It70p",
            attributes: {
                label: "Twist",
                clan: "Nosferatu",
                faction: "Anarchs",
                age: "Neonate",
                associates: "Jarvis Jacks",
                statusnum: 0,
                quote: "You think you know pain? You think you know misery? You don't. But I do, and I'm a very very good teacher.",
                description: "In life, Twist was a pampered playboy of one of Toronto's most successful crime families... until he ran afoul of Clan Nosferatu, and was cursed with the Embrace as punishment. As his body twisted and bloated into the hideous monstrosity he is tonight, so to did his shallow, superficial soul. Now, he exists to render the torture he feels every time he looks into a mirror onto others. Misery, it would seem, does indeed love its company.",
                image: "https://imgur.com/vV8sjeM.jpg",
                "element type": "Kindred"
            }
        },
        {
            _id: "elem-ndK3XMl5",
            attributes: {
                label: "Locke Ulrich",
                tags: [
                    "PC"
                ],
                clan: "Ventrue",
                faction: "Anarchs",
                age: "Ancilla",
                sire: "Prince Osborne Lowell",
                associates: "Masque",
                statusnum: 2,
                "element type": "Kindred"
            }
        },
        {
            _id: "elem-o8ISOFWs",
            attributes: {
                label: "Red Flag",
                faction: "Anarchs",
                "element type": "Coalition"
            }
        },
        {
            _id: "elem-oPfnXMJZ",
            attributes: {
                label: "Ascetic Ministry",
                faction: "Camarilla",
                "element type": "Coalition"
            }
        },
        {
            _id: "elem-oh60Gl3U",
            attributes: {
                label: "Baroness Monika Eulenberg",
                clan: "Malkavian",
                faction: "Anarchs",
                generation: "Eleventh",
                age: "Ancilla",
                titles: "Baroness",
                childer: [
                    "Carlos 'CD' Daniels",
                    "Eddie DeFrey",
                    "Harold Covington",
                    "Ralph Morgan",
                    "Ava Wong",
                    "Johannes Napier"
                ],
                statusnum: 5,
                quote: "The Camarilla may outnumber us, but my eyes are everywhere. And what do they see? A city ripe for the taking. It is only a matter of time until Toronto becomes the capital of a new Anarch Free State.",
                description: "In life, Monika Eulenberg served the German Democratic Republic of Soviet-occupied East Berlin as an agent of the Ministry of State Security: the oppressive Stasi secret police. In death, her natural caution and professional paranoia grew pathological under the Curse of Malkav, forging a politically-savvy operator who quickly earned the respect of her Anarch associates. When the Beckoning created a power vacuum in Toronto, Monika seized the opportunity to declare herself baroness of the city and offered her aid to a reeling Camarilla—while efficiently leveraging a select number of loyal coteries into a strong Anarch foothold in one of the crown jewels of North America.",
                image: "https://imgur.com/U97cOlO.jpg",
                "element type": "Kindred"
            }
        },
        {
            _id: "elem-qfsTgklq",
            attributes: {
                label: "Alistair Etrata",
                clan: "Banu Haqim",
                faction: "Camarilla",
                age: "Elder",
                titles: "Primogen",
                childer: [
                    "Sinclair Rodriguez"
                ],
                statusnum: 5,
                quote: "I am no Assamite. Those you call Assamites are the enemies of my people. Thralls to the blood god Ur-Shulgi, they cloister themselves at Alamut—for now.",
                description: "Arriving in Toronto at the invitation of an Anarch is an unlikely start for a primogen. Nevertheless, he found himself in a city experiencing a power vacuum just as the Banu Haqim had been admitted into the Camarilla, and he exploited these circumstances adroitly——undoubtedly assisted by the strength of his old Blood. In a very short period of time, he demonstrated both his loyalty to the Camarilla and his ability to serve his clan as their primogen. His activities since have been subtle: either Alistair is wary of causing anyone to regret his appointment, or——more likely——he is guarding his intentions from everyone except, perhaps, his childe Sinclair.",
                image: "https://i.imgur.com/1eenDNe.jpg.jpg",
                "element type": "Kindred"
            }
        },
        {
            _id: "elem-sJ3fEswP",
            attributes: {
                label: "Agnes Bellanger",
                clan: "Toreador",
                faction: "Camarilla",
                generation: "Eighth",
                age: "Elder",
                titles: "Primogen",
                statusnum: 5,
                quote: "Darling, I've taken the liberty of cleaning up your mess. I'll let you know when and how you can thank me.",
                description: "Born a peasant girl, captured by pirates, and sold in Istanbul to her eventual sire, Agnes has lived a storied history that brought her to Toronto (then Fort York) in the 1800s. After a century travelling Europe, she returned to the city in the 1970's and established herself in her former haven: the opulant palace of Casa Loma. There, her pedigree, political prowess, and thirst for vengeance against the Sword of Caine saw her swiftly rise to power as the foremost vampire of the Clan of the Rose. Agnes Bellanger continues to serve on the Council of Primogen, and oversees the city's most popular Elysium at the castle she has made her home.",
                image: "https://imgur.com/B5KSRuF.jpg",
                "element type": "Kindred"
            }
        },
        {
            _id: "elem-sOSRMhNf",
            attributes: {
                label: "Sinclair Rodriguez",
                clan: "Banu Haqim",
                faction: "Camarilla",
                sire: "Alistair Etrata",
                statusnum: 1,
                "element type": "Kindred"
            }
        },
        {
            _id: "elem-tCvCjhaI",
            attributes: {
                label: "Xavier Whitchurch",
                clan: "Ventrue",
                faction: "Camarilla",
                age: "Neonate",
                titles: "Harpy",
                statusnum: 3,
                quote: "It is not my *duty* to remind you of what you owe and to whom. It is my *privilege* to make you into an example so persuasive that no one else will mistake the obligations of prestation for a dead custom of times gone by.",
                description: "Of Toronto's three harpies, Xavier doesn't claim the spotlight with the same effervescent ease shared by the Aristocrat and Christianne. But it is precisely because of Xavier's dedication to his work that his two coterie-mates are free to shine so brightly. For it is a city's harpies who are the ultimate caretakers of prestation, the economy of favors owed and repaid, without which civil Kindred society may well collapse. Xavier's approach to upholding prestation is unconventional: Ill-tempered for detailed book-keeping, he instead elects for deterrence. With the Puck's enthusiastic support, Xavier makes any violations of the custom very painful, very public, and utterly unforgettable.",
                image: "https://i.imgur.com/xZ91V4n.jpg.jpg",
                "element type": "Kindred"
            }
        },
        {
            _id: "elem-tHc5Vh1O",
            attributes: {
                label: "Alexander",
                clan: "Lasombra",
                faction: "Sabbat",
                age: "Neonate",
                statusnum: 2,
                quote: "Drink up. What, you think I put something in it?",
                description: "The young Sabbat Lasombra holds a rather significant distinction: He is the only known member of the Sword of Caine to establish himself in the city proper, away from Centre Island, thanks to the aid of a mysterious benefactor. What he intends to *do* with his unique position remains to be seen; it may be difficult for one so young to operate alone, but the Lasombra rarely go gently into the night.",
                "element type": "Kindred"
            }
        },
        {
            _id: "elem-tHgOfIx2",
            attributes: {
                label: "Cardinal Collins",
                subtype: "St. Leopold",
                faction: "Second Inquisition",
                titles: "High Inquisitor",
                associates: "St. Michael's Cell",
                statusnum: 5,
                statussizeoverride: 5,
                "element type": "Mortal"
            }
        },
        {
            _id: "elem-tmmeKChl",
            attributes: {
                label: "David Greene",
                subtype: "Criminal",
                faction: "Bookies",
                statusnum: 3,
                statussizeoverride: 3,
                "element type": "Mortal"
            }
        },
        {
            _id: "elem-tpov60yo",
            attributes: {
                label: "Leah Hawk",
                clan: "Gangrel",
                faction: "Anarchs",
                age: "Neonate",
                associates: "Nightwolves",
                statusnum: 1,
                quote: "Put your fangs away. We're going to have a polite conversation, and then you're going to tell me everything I need to know.",
                description: "Leah Hawk is as much a hunter as her Gangrel kin, though her quarry is unconventional: The prey she stalks is information, leverage, and she runs it down with all the tenacity of a wolf. As a member of the Nightwolves, Leah serves to balance her more blood-thirsty coterie-mates; without her (and Old Quentin), the Nightwolves would be hard-pressed to accomplish anything approaching subtlety.",
                image: "https://imgur.com/Rob69iX.jpg",
                "element type": "Kindred"
            }
        },
        {
            _id: "elem-viJtBRKH",
            attributes: {
                label: "Second Inquisition",
                "element type": "Faction"
            }
        },
        {
            _id: "elem-vwCBVjzW",
            attributes: {
                label: "Reaper",
                clan: "Gangrel",
                faction: "Anarchs",
                age: "Neonate",
                associates: "Nightwolves",
                statusnum: 1,
                quote: "Shhhhhh. Sleep, now. This doesn't have to hurt.",
                description: "Reaper is as centered as he is vicious, approaching the grizly work at which he excels with Zen-like serenity. And excel he does; the \"Reaper\" sobriquet was bestowed on him by J in recognition of the fact that he has ended the lives and unlives of more of the Anarch Movement's enemies than anyone else in the city—and the body count continues to rise.",
                image: "https://imgur.com/6jw7dMt.jpg",
                "element type": "Kindred"
            }
        },
        {
            _id: "elem-wJJGySsk",
            attributes: {
                label: "Johannes Napier",
                tags: [
                    "PC"
                ],
                clan: "Malkavian",
                faction: "Anarchs",
                age: "Neonate",
                sire: "Baroness Monika Eulenberg",
                associates: "Masque",
                statusnum: 2,
                "element type": "Kindred"
            }
        },
        {
            _id: "elem-wmNkgshK",
            attributes: {
                label: "J",
                tags: [
                    "CoterieBoss"
                ],
                clan: "Brujah",
                faction: "Anarchs",
                age: "Neonate",
                associates: "Nightwolves",
                statusnum: 2,
                quote: "Stop talking. It's not doing either one of us any good.",
                description: "\"J\" hardly impresses at first glance (indeed, a running joke about his name is that it's the longest he can spell). Of course, the fact that he has led such a large and violent group of Kindred so effectively for so long suggests there is much more to this Brujah than first impressions would suggest. It is, after all, in the interests of every vampire to manage expectations.",
                image: "https://imgur.com/SzZdr5D.jpg",
                "element type": "Kindred"
            }
        },
        {
            _id: "elem-yB75BJIG",
            attributes: {
                label: "Wallflower",
                clan: "Gangrel",
                faction: "Anarchs",
                age: "Neonate",
                associates: "Men-In-Black",
                statusnum: 1,
                quote: "Stop worrying. We're going to make your problem go away, and we're going to have fun doing it!",
                description: "Toronto's Anarchs have a penchant for ironic names, and Wallflower is no exception. Combative, proud, and fiercely territorial, Wallflower is a dependable ally to have at your side: a blushing violet, she is not. Her coterie-mates in the Men-In-Black play their mindgames of subtle manipulation; Wallflower prefers to make her problems bleed, by tooth and by claw.",
                image: "https://imgur.com/wrYwpgR.jpg",
                "element type": "Kindred"
            }
        },
        {
            _id: "elem-yN50vYJL",
            attributes: {
                label: "Antoinne LaGritte",
                subtype: "Civilian",
                faction: "University of Toronto",
                statusnum: 2,
                statussizeoverride: 2,
                "element type": "Mortal"
            }
        },
        {
            _id: "elem-ySdMMtC0",
            attributes: {
                label: "Independent",
                "element type": "Faction"
            }
        },
        {
            _id: "elem-ysnxkzW0",
            attributes: {
                label: "Bookies",
                "element type": "Faction"
            }
        },
        {
            _id: "elem-z3tZZbDU",
            attributes: {
                label: "Damien Abanda",
                clan: "Toreador",
                faction: "Anarchs",
                age: "Neonate",
                associates: "Red Flag",
                statusnum: 3,
                quote: "Appearances can be deceiving, yes, but they can also be impressive. Should we not aim to impress our supposed betters?",
                description: "Damien Abanda has a chip on his shoulder: as the only Toreador Anarch in the city, he obviously considers himself to be the resident expert in etiquette, style, presentation and Camarilla sensibilities. On this, he may even be right: Rosie herself defers to his opinions on such matters, even if she rarely allows his condescending attitude anywhere near the negotiations themselves.",
                image: "https://imgur.com/qady8T3.jpg",
                "element type": "Kindred"
            }
        }
    ],
    connections: [
        {
            _id: "conn-09U6boek",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                tags: [
                    "Boss"
                ],
                "connection type": "Faction"
            },
            from: "elem-tmmeKChl",
            to: "elem-ysnxkzW0"
        },
        {
            _id: "conn-0LYu08B0",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Coalition"
            },
            from: "elem-AUBLvx7R",
            to: "elem-1Un9VZrg"
        },
        {
            _id: "conn-27zIrvgI",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Sire/Regnant"
            },
            from: "elem-cYNKYUq1",
            to: "elem-fGPi7L6D"
        },
        {
            _id: "conn-2RDTIQLt",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Coalition"
            },
            from: "elem-aZaZsfjX",
            to: "elem-CPgLxRpG"
        },
        {
            _id: "conn-2iNCJds9",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                tags: [
                    "Boss"
                ],
                "connection type": "Coalition"
            },
            from: "elem-cYNKYUq1",
            to: "elem-L82dXdsM"
        },
        {
            _id: "conn-3E4KUfjb",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Faction"
            },
            from: "elem-4Th1FRTa",
            to: "elem-D97qdI5h"
        },
        {
            _id: "conn-3wqMiCQ5",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Faction"
            },
            from: "elem-Ub4jDMbf",
            to: "elem-D97qdI5h"
        },
        {
            _id: "conn-4RXQHaMI",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Coalition"
            },
            from: "elem-M67VLIps",
            to: "elem-effTBrJM"
        },
        {
            _id: "conn-4eCLyHdo",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Coalition"
            },
            from: "elem-tpov60yo",
            to: "elem-F9kG40SF"
        },
        {
            _id: "conn-5Cg7t3F6",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Faction"
            },
            from: "elem-ndK3XMl5",
            to: "elem-D97qdI5h"
        },
        {
            _id: "conn-5Tlmo31w",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Faction"
            },
            from: "elem-yB75BJIG",
            to: "elem-D97qdI5h"
        },
        {
            _id: "conn-68isLsC7",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Coalition"
            },
            from: "elem-jYclhsp2",
            to: "elem-eiMhiWVz"
        },
        {
            _id: "conn-6XklYdIe",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Faction"
            },
            from: "elem-4NKgoxKL",
            to: "elem-D97qdI5h"
        },
        {
            _id: "conn-6pbtYAjl",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Faction"
            },
            from: "elem-n2SWSTY4",
            to: "elem-D97qdI5h"
        },
        {
            _id: "conn-7UZd1DSW",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Sire/Regnant"
            },
            from: "elem-oh60Gl3U",
            to: "elem-aZaZsfjX"
        },
        {
            _id: "conn-7uVJSSwl",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Subgroup"
            },
            from: "elem-oPfnXMJZ",
            to: "elem-itZf5pQw"
        },
        {
            _id: "conn-84KYMONy",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Coalition"
            },
            from: "elem-RliYu3oU",
            to: "elem-1Un9VZrg"
        },
        {
            _id: "conn-8cQMVI4q",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Faction"
            },
            from: "elem-aZaZsfjX",
            to: "elem-D97qdI5h"
        },
        {
            _id: "conn-9TlQyV6F",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Faction"
            },
            from: "elem-sJ3fEswP",
            to: "elem-itZf5pQw"
        },
        {
            _id: "conn-9caCZJqR",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Subgroup"
            },
            from: "elem-lAEQeLLW",
            to: "elem-D97qdI5h"
        },
        {
            _id: "conn-9k8VTNOU",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Faction"
            },
            from: "elem-NEIPqBrH",
            to: "elem-itZf5pQw"
        },
        {
            _id: "conn-9kB0KnFH",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Subgroup"
            },
            from: "elem-o8ISOFWs",
            to: "elem-D97qdI5h"
        },
        {
            _id: "conn-9sWRFcRo",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Coalition"
            },
            from: "elem-N7VZAvnD",
            to: "elem-aAFxfi1u"
        },
        {
            _id: "conn-AIpMVz1c",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Faction"
            },
            from: "elem-TAqetfMu",
            to: "elem-itZf5pQw"
        },
        {
            _id: "conn-B9CiurNb",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Coalition"
            },
            from: "elem-4yJVp1HX",
            to: "elem-NJcjC3Lp"
        },
        {
            _id: "conn-BURFx6Td",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                tags: [
                    "Boss"
                ],
                "connection type": "Faction"
            },
            from: "elem-tHgOfIx2",
            to: "elem-viJtBRKH"
        },
        {
            _id: "conn-CI7rMq7W",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Faction"
            },
            from: "elem-RGE2yJWY",
            to: "elem-itZf5pQw"
        },
        {
            _id: "conn-CLoMCQm2",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Coalition"
            },
            from: "elem-SYEIB2uW",
            to: "elem-lAEQeLLW"
        },
        {
            _id: "conn-CWqVREZk",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Faction"
            },
            from: "elem-IejfCrJ1",
            to: "elem-D97qdI5h"
        },
        {
            _id: "conn-CsSmy75M",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Subgroup"
            },
            from: "elem-lnbbGzjW",
            to: "elem-viJtBRKH"
        },
        {
            _id: "conn-DjcOLqud",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Coalition"
            },
            from: "elem-IejfCrJ1",
            to: "elem-UBCjTnyL"
        },
        {
            _id: "conn-EZSGLwLQ",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Faction"
            },
            from: "elem-bIkJwVCw",
            to: "elem-D97qdI5h"
        },
        {
            _id: "conn-EzyOJcvW",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Faction"
            },
            from: "elem-4RJ1vjhb",
            to: "elem-D97qdI5h"
        },
        {
            _id: "conn-FTgbeHwW",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Coalition"
            },
            from: "elem-asRs7G0j",
            to: "elem-aAFxfi1u"
        },
        {
            _id: "conn-Fuacyy99",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Sire/Regnant"
            },
            from: "elem-oh60Gl3U",
            to: "elem-n2SWSTY4"
        },
        {
            _id: "conn-G9EmBidJ",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Faction"
            },
            from: "elem-703vqYs5",
            to: "elem-D97qdI5h"
        },
        {
            _id: "conn-GQUu7gwm",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Subgroup"
            },
            from: "elem-CPgLxRpG",
            to: "elem-D97qdI5h"
        },
        {
            _id: "conn-GkT9M25Q",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Faction"
            },
            from: "elem-6PRzGuwY",
            to: "elem-itZf5pQw"
        },
        {
            _id: "conn-H4MBjXqP",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Coalition"
            },
            from: "elem-wJJGySsk",
            to: "elem-CPgLxRpG"
        },
        {
            _id: "conn-HWvNeWaN",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Faction"
            },
            from: "elem-jYclhsp2",
            to: "elem-itZf5pQw"
        },
        {
            _id: "conn-HiCbVanA",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Faction"
            },
            from: "elem-3FAG5Tdw",
            to: "elem-ySdMMtC0"
        },
        {
            _id: "conn-Ht1nS4ZR",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                tags: [
                    "Boss"
                ],
                "connection type": "Coalition"
            },
            from: "elem-tHgOfIx2",
            to: "elem-lnbbGzjW"
        },
        {
            _id: "conn-I5u6UmWI",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Faction"
            },
            from: "elem-wmNkgshK",
            to: "elem-D97qdI5h"
        },
        {
            _id: "conn-I9OKy5bY",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Coalition"
            },
            from: "elem-4Th1FRTa",
            to: "elem-lAEQeLLW"
        },
        {
            _id: "conn-IOnjr8DC",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Faction"
            },
            from: "elem-N7VZAvnD",
            to: "elem-D97qdI5h"
        },
        {
            _id: "conn-JIRBuqwN",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Faction"
            },
            from: "elem-z3tZZbDU",
            to: "elem-D97qdI5h"
        },
        {
            _id: "conn-KP6KG3BN",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Sire/Regnant"
            },
            from: "elem-V5b6cdCE",
            to: "elem-BEAmo8PW"
        },
        {
            _id: "conn-Ko237WcM",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Coalition"
            },
            from: "elem-7oqGTFYe",
            to: "elem-F9kG40SF"
        },
        {
            _id: "conn-KpAdST3O",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Coalition"
            },
            from: "elem-nG1It70p",
            to: "elem-L82dXdsM"
        },
        {
            _id: "conn-Kw77Tdcb",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                tags: [
                    "Boss"
                ],
                "connection type": "Coalition"
            },
            from: "elem-wmNkgshK",
            to: "elem-F9kG40SF"
        },
        {
            _id: "conn-KzzJIM46",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Faction"
            },
            from: "elem-tCvCjhaI",
            to: "elem-itZf5pQw"
        },
        {
            _id: "conn-M6ejKyD2",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Faction"
            },
            from: "elem-5kIk72Zy",
            to: "elem-itZf5pQw"
        },
        {
            _id: "conn-MIhaXOEj",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Coalition"
            },
            from: "elem-qfsTgklq",
            to: "elem-jc3S8FAZ"
        },
        {
            _id: "conn-MKgzmybc",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Faction"
            },
            from: "elem-iR1zHpqu",
            to: "elem-D97qdI5h"
        },
        {
            _id: "conn-MOlY7Ntu",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Subgroup"
            },
            from: "elem-effTBrJM",
            to: "elem-ySdMMtC0"
        },
        {
            _id: "conn-MfQR618C",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Coalition"
            },
            from: "elem-1dohD2RO",
            to: "elem-1Un9VZrg"
        },
        {
            _id: "conn-Mh9tcDA6",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Faction"
            },
            from: "elem-QFR1r1tR",
            to: "elem-itZf5pQw"
        },
        {
            _id: "conn-NXHYTc1C",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Faction"
            },
            from: "elem-gbhWoxHp",
            to: "elem-D97qdI5h"
        },
        {
            _id: "conn-NaHa6rxu",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Faction"
            },
            from: "elem-aMkX6wac",
            to: "elem-D97qdI5h"
        },
        {
            _id: "conn-NfMQksrv",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                tags: [
                    "Boss"
                ],
                "connection type": "Coalition"
            },
            from: "elem-RGE2yJWY",
            to: "elem-oPfnXMJZ"
        },
        {
            _id: "conn-O4m54OEB",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Subgroup"
            },
            from: "elem-1Un9VZrg",
            to: "elem-D97qdI5h"
        },
        {
            _id: "conn-OinK3Bn7",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Coalition"
            },
            from: "elem-kkpOrkLW",
            to: "elem-lnbbGzjW"
        },
        {
            _id: "conn-OmTX06ZU",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Faction"
            },
            from: "elem-BEAmo8PW",
            to: "elem-itZf5pQw"
        },
        {
            _id: "conn-P6YIBu0n",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Subgroup"
            },
            from: "elem-aAFxfi1u",
            to: "elem-D97qdI5h"
        },
        {
            _id: "conn-PLBPaaSx",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Coalition"
            },
            from: "elem-703vqYs5",
            to: "elem-lAEQeLLW"
        },
        {
            _id: "conn-Pjc74zgO",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                tags: [
                    "Boss"
                ],
                "connection type": "Faction"
            },
            from: "elem-V5b6cdCE",
            to: "elem-itZf5pQw"
        },
        {
            _id: "conn-Q2A16b8m",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Faction"
            },
            from: "elem-MglTRNn2",
            to: "elem-itZf5pQw"
        },
        {
            _id: "conn-QuPibhWg",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Sire/Regnant"
            },
            from: "elem-qfsTgklq",
            to: "elem-sOSRMhNf"
        },
        {
            _id: "conn-RIVcSap1",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Faction"
            },
            from: "elem-kkpOrkLW",
            to: "elem-viJtBRKH"
        },
        {
            _id: "conn-S6ILAf1D",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Coalition"
            },
            from: "elem-EYwxlQWS",
            to: "elem-oPfnXMJZ"
        },
        {
            _id: "conn-SbdKle2D",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Faction"
            },
            from: "elem-gUC9Ypnf",
            to: "elem-D97qdI5h"
        },
        {
            _id: "conn-SdxBGGZ0",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Sire/Regnant"
            },
            from: "elem-oh60Gl3U",
            to: "elem-SYEIB2uW"
        },
        {
            _id: "conn-Sg7eAetg",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Faction"
            },
            from: "elem-kstBCC8S",
            to: "elem-D97qdI5h"
        },
        {
            _id: "conn-TIjG4lCp",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Faction"
            },
            from: "elem-1dohD2RO",
            to: "elem-D97qdI5h"
        },
        {
            _id: "conn-TjNQV7G7",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Sire/Regnant"
            },
            from: "elem-oh60Gl3U",
            to: "elem-4Th1FRTa"
        },
        {
            _id: "conn-UMDLbm2G",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Coalition"
            },
            from: "elem-HA1LU07o",
            to: "elem-eiMhiWVz"
        },
        {
            _id: "conn-Ua0BfKeP",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                tags: [
                    "Boss"
                ],
                "connection type": "Coalition"
            },
            from: "elem-UBCjTnyL",
            to: "elem-NJcjC3Lp"
        },
        {
            _id: "conn-V8nziHqN",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Coalition"
            },
            from: "elem-aMkX6wac",
            to: "elem-L82dXdsM"
        },
        {
            _id: "conn-VefJEGjo",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Coalition"
            },
            from: "elem-tCvCjhaI",
            to: "elem-eiMhiWVz"
        },
        {
            _id: "conn-WeKDesUX",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Faction"
            },
            from: "elem-M67VLIps",
            to: "elem-ySdMMtC0"
        },
        {
            _id: "conn-WwJcpvwd",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Faction"
            },
            from: "elem-ci1hMBD5",
            to: "elem-6Mt9lL1b"
        },
        {
            _id: "conn-XfbpuhmG",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Faction"
            },
            from: "elem-HA1LU07o",
            to: "elem-itZf5pQw"
        },
        {
            _id: "conn-Y5GBZ8ea",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Faction"
            },
            from: "elem-60GbLsn9",
            to: "elem-itZf5pQw"
        },
        {
            _id: "conn-Y6GXH8zC",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Faction"
            },
            from: "elem-2A8LaEAW",
            to: "elem-D97qdI5h"
        },
        {
            _id: "conn-YTIXBbBU",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Faction"
            },
            from: "elem-wJJGySsk",
            to: "elem-D97qdI5h"
        },
        {
            _id: "conn-Ye5Jje4N",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Subgroup"
            },
            from: "elem-eiMhiWVz",
            to: "elem-itZf5pQw"
        },
        {
            _id: "conn-Z6mCBVyU",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Faction"
            },
            from: "elem-7oqGTFYe",
            to: "elem-D97qdI5h"
        },
        {
            _id: "conn-ZLtLJPsw",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Coalition"
            },
            from: "elem-n2SWSTY4",
            to: "elem-lAEQeLLW"
        },
        {
            _id: "conn-ZNVARKgo",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Faction"
            },
            from: "elem-qfsTgklq",
            to: "elem-itZf5pQw"
        },
        {
            _id: "conn-aLxw4gIp",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Sire/Regnant"
            },
            from: "elem-GwRmz3Lb",
            to: "elem-ndK3XMl5"
        },
        {
            _id: "conn-aigORndD",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Coalition"
            },
            from: "elem-8cLEqEej",
            to: "elem-lnbbGzjW"
        },
        {
            _id: "conn-b19XRo1D",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                tags: [
                    "Boss"
                ],
                "connection type": "Faction"
            },
            from: "elem-oh60Gl3U",
            to: "elem-D97qdI5h"
        },
        {
            _id: "conn-b1A0Zd2T",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Coalition"
            },
            from: "elem-IgOrMyzD",
            to: "elem-aAFxfi1u"
        },
        {
            _id: "conn-b8TN2b0C",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Faction"
            },
            from: "elem-XBwIpXaH",
            to: "elem-itZf5pQw"
        },
        {
            _id: "conn-bjCYcpLv",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Faction"
            },
            from: "elem-AUBLvx7R",
            to: "elem-D97qdI5h"
        },
        {
            _id: "conn-bpjoQvKC",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Faction"
            },
            from: "elem-yN50vYJL",
            to: "elem-eUDpuRKO"
        },
        {
            _id: "conn-bq0J1ACt",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Subgroup"
            },
            from: "elem-jc3S8FAZ",
            to: "elem-itZf5pQw"
        },
        {
            _id: "conn-cHI0QgDB",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Faction"
            },
            from: "elem-tHc5Vh1O",
            to: "elem-6Mt9lL1b"
        },
        {
            _id: "conn-d64odo8g",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Coalition"
            },
            from: "elem-DOmTQZKY",
            to: "elem-NJcjC3Lp"
        },
        {
            _id: "conn-d9kn9cSK",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                tags: [
                    "Boss"
                ],
                "connection type": "Coalition"
            },
            from: "elem-kstBCC8S",
            to: "elem-lAEQeLLW"
        },
        {
            _id: "conn-dOHTElFD",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Coalition"
            },
            from: "elem-guznhCzu",
            to: "elem-NJcjC3Lp"
        },
        {
            _id: "conn-dgDBYU0T",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Sire/Regnant"
            },
            from: "elem-RGE2yJWY",
            to: "elem-is9TkAHD"
        },
        {
            _id: "conn-dqOZECRJ",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Faction"
            },
            from: "elem-Xvmp7IpG",
            to: "elem-itZf5pQw"
        },
        {
            _id: "conn-eY4h4gCZ",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Sire/Regnant"
            },
            from: "elem-iR1zHpqu",
            to: "elem-RliYu3oU"
        },
        {
            _id: "conn-edKwxNSF",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Faction"
            },
            from: "elem-tpov60yo",
            to: "elem-D97qdI5h"
        },
        {
            _id: "conn-eqVCtZkZ",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Sire/Regnant"
            },
            from: "elem-aMkX6wac",
            to: "elem-asRs7G0j"
        },
        {
            _id: "conn-fFyazmjn",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Coalition"
            },
            from: "elem-is9TkAHD",
            to: "elem-oPfnXMJZ"
        },
        {
            _id: "conn-giRXCM5Q",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Sire/Regnant"
            },
            from: "elem-oh60Gl3U",
            to: "elem-703vqYs5"
        },
        {
            _id: "conn-hbbd34Qr",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                tags: [
                    "Boss"
                ],
                "connection type": "Coalition"
            },
            from: "elem-9eXtx4ll",
            to: "elem-o8ISOFWs"
        },
        {
            _id: "conn-hkKmmp9Z",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Sire/Regnant"
            },
            from: "elem-aMkX6wac",
            to: "elem-kstBCC8S"
        },
        {
            _id: "conn-iTgiw8dF",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Faction"
            },
            from: "elem-sOSRMhNf",
            to: "elem-itZf5pQw"
        },
        {
            _id: "conn-ijFLhb6y",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Faction"
            },
            from: "elem-EYwxlQWS",
            to: "elem-itZf5pQw"
        },
        {
            _id: "conn-islOjYX8",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Faction"
            },
            from: "elem-UBCjTnyL",
            to: "elem-D97qdI5h"
        },
        {
            _id: "conn-jCo5Cef5",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Subgroup"
            },
            from: "elem-OG80QK7m",
            to: "elem-viJtBRKH"
        },
        {
            _id: "conn-jFtY4HP1",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Coalition"
            },
            from: "elem-IejfCrJ1",
            to: "elem-NJcjC3Lp"
        },
        {
            _id: "conn-kNYvJjvL",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Faction"
            },
            from: "elem-IgOrMyzD",
            to: "elem-D97qdI5h"
        },
        {
            _id: "conn-kY4aA3US",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Subgroup"
            },
            from: "elem-L82dXdsM",
            to: "elem-D97qdI5h"
        },
        {
            _id: "conn-katHSLHK",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Faction"
            },
            from: "elem-5KCZ8Nlr",
            to: "elem-ySdMMtC0"
        },
        {
            _id: "conn-kxHzfOIM",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Faction"
            },
            from: "elem-cYNKYUq1",
            to: "elem-D97qdI5h"
        },
        {
            _id: "conn-kyYuLpH3",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Coalition"
            },
            from: "elem-z3tZZbDU",
            to: "elem-o8ISOFWs"
        },
        {
            _id: "conn-lSdFF9tK",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Faction"
            },
            from: "elem-SYEIB2uW",
            to: "elem-D97qdI5h"
        },
        {
            _id: "conn-mAN22CP4",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Coalition"
            },
            from: "elem-bIkJwVCw",
            to: "elem-F9kG40SF"
        },
        {
            _id: "conn-mJYK0FkE",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Faction"
            },
            from: "elem-8cLEqEej",
            to: "elem-viJtBRKH"
        },
        {
            _id: "conn-mQrtIg9y",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Faction"
            },
            from: "elem-nG1It70p",
            to: "elem-D97qdI5h"
        },
        {
            _id: "conn-mS2Ra3nE",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Faction"
            },
            from: "elem-fGPi7L6D",
            to: "elem-D97qdI5h"
        },
        {
            _id: "conn-nfAifRjz",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Faction"
            },
            from: "elem-4yJVp1HX",
            to: "elem-D97qdI5h"
        },
        {
            _id: "conn-paT8YxTz",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Coalition"
            },
            from: "elem-yB75BJIG",
            to: "elem-aAFxfi1u"
        },
        {
            _id: "conn-pp7Z80qo",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Coalition"
            },
            from: "elem-2A8LaEAW",
            to: "elem-aAFxfi1u"
        },
        {
            _id: "conn-prnXSAVb",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Coalition"
            },
            from: "elem-4NKgoxKL",
            to: "elem-o8ISOFWs"
        },
        {
            _id: "conn-prrmh0BC",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                tags: [
                    "Boss"
                ],
                "connection type": "Coalition"
            },
            from: "elem-gbhWoxHp",
            to: "elem-CPgLxRpG"
        },
        {
            _id: "conn-pw5ZEEPc",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Coalition"
            },
            from: "elem-ndK3XMl5",
            to: "elem-CPgLxRpG"
        },
        {
            _id: "conn-qWIrhpsi",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Coalition"
            },
            from: "elem-Ub4jDMbf",
            to: "elem-NJcjC3Lp"
        },
        {
            _id: "conn-qzSOfkdY",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Faction"
            },
            from: "elem-RliYu3oU",
            to: "elem-D97qdI5h"
        },
        {
            _id: "conn-ryUZMg9w",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Faction"
            },
            from: "elem-DOmTQZKY",
            to: "elem-D97qdI5h"
        },
        {
            _id: "conn-sMpLxKzb",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                tags: [
                    "Boss"
                ],
                "connection type": "Coalition"
            },
            from: "elem-4RJ1vjhb",
            to: "elem-aAFxfi1u"
        },
        {
            _id: "conn-t1cQLphB",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Sire/Regnant"
            },
            from: "elem-iR1zHpqu",
            to: "elem-AUBLvx7R"
        },
        {
            _id: "conn-t7VTUX1V",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Faction"
            },
            from: "elem-9eXtx4ll",
            to: "elem-D97qdI5h"
        },
        {
            _id: "conn-ta6Z61s0",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                tags: [
                    "Boss"
                ],
                "connection type": "Coalition"
            },
            from: "elem-iR1zHpqu",
            to: "elem-1Un9VZrg"
        },
        {
            _id: "conn-tpWXMeL3",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Subgroup"
            },
            from: "elem-NJcjC3Lp",
            to: "elem-D97qdI5h"
        },
        {
            _id: "conn-u3P6OIY6",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Coalition"
            },
            from: "elem-fGPi7L6D",
            to: "elem-1Un9VZrg"
        },
        {
            _id: "conn-uRvXGtx8",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Coalition"
            },
            from: "elem-Xvmp7IpG",
            to: "elem-jc3S8FAZ"
        },
        {
            _id: "conn-uZ4f0bu4",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Subgroup"
            },
            from: "elem-F9kG40SF",
            to: "elem-D97qdI5h"
        },
        {
            _id: "conn-vqiYrjyI",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Faction"
            },
            from: "elem-guznhCzu",
            to: "elem-D97qdI5h"
        },
        {
            _id: "conn-vuxpUQko",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Sire/Regnant"
            },
            from: "elem-iR1zHpqu",
            to: "elem-1dohD2RO"
        },
        {
            _id: "conn-vz57qFdD",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Coalition"
            },
            from: "elem-sJ3fEswP",
            to: "elem-jc3S8FAZ"
        },
        {
            _id: "conn-xDNB6H2d",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Coalition"
            },
            from: "elem-vwCBVjzW",
            to: "elem-F9kG40SF"
        },
        {
            _id: "conn-xaxsJBYu",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Sire/Regnant"
            },
            from: "elem-aMkX6wac",
            to: "elem-N7VZAvnD"
        },
        {
            _id: "conn-xuDQac7L",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Coalition"
            },
            from: "elem-NEIPqBrH",
            to: "elem-jc3S8FAZ"
        },
        {
            _id: "conn-yHE8WQdO",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                tags: [
                    "Boss"
                ],
                "connection type": "Faction"
            },
            from: "elem-GwRmz3Lb",
            to: "elem-itZf5pQw"
        },
        {
            _id: "conn-yYonaSjI",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Sire/Regnant"
            },
            from: "elem-V5b6cdCE",
            to: "elem-MglTRNn2"
        },
        {
            _id: "conn-yfPBONNr",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Faction"
            },
            from: "elem-is9TkAHD",
            to: "elem-itZf5pQw"
        },
        {
            _id: "conn-yyRwPwWJ",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Sire/Regnant"
            },
            from: "elem-oh60Gl3U",
            to: "elem-wJJGySsk"
        },
        {
            _id: "conn-z17QzDwi",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Sire/Regnant"
            },
            from: "elem-RGE2yJWY",
            to: "elem-EYwxlQWS"
        },
        {
            _id: "conn-zFfQnh2k",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Coalition"
            },
            from: "elem-gUC9Ypnf",
            to: "elem-o8ISOFWs"
        },
        {
            _id: "conn-zhztyAhm",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Faction"
            },
            from: "elem-asRs7G0j",
            to: "elem-D97qdI5h"
        },
        {
            _id: "conn-zo7IYjbF",
            direction: "undirected",
            delayed: false,
            reversed: false,
            attributes: {
                "connection type": "Faction"
            },
            from: "elem-vwCBVjzW",
            to: "elem-D97qdI5h"
        }
    ],
    loops: [],
    maps: [
        {
            _id: "map-8Ox0rhuG",
            name: "Current",
            description: "",
            scale: 1,
            center: {
                x: 0,
                y: 0
            },
            defaultPerspective: "pers-UM9guBMj",
            defaultElementBehavior: "floating",
            defaultConnectionDirection: "undirected",
            elements: [
                {
                    _id: "node-0UU9dRrG",
                    position: {
                        x: -41.23781076936482,
                        y: -426.8672229602697
                    },
                    pinned: true,
                    element: "elem-kstBCC8S"
                },
                {
                    _id: "node-0jRh7VjX",
                    position: null,
                    pinned: false,
                    element: "elem-jc3S8FAZ"
                },
                {
                    _id: "node-1Gpe6LDW",
                    position: {
                        x: -469.55193720483555,
                        y: 777.3895536456713
                    },
                    pinned: true,
                    element: "elem-cYNKYUq1"
                },
                {
                    _id: "node-1iwJISq4",
                    position: {
                        x: -1686.7258491204052,
                        y: -301.33177291254265
                    },
                    pinned: true,
                    element: "elem-7oqGTFYe"
                },
                {
                    _id: "node-1rhCgMkU",
                    position: {
                        x: -1558.4291415834748,
                        y: 409.04950228463673
                    },
                    pinned: true,
                    element: "elem-guznhCzu"
                },
                {
                    _id: "node-3K88EEGs",
                    position: null,
                    pinned: false,
                    element: "elem-tCvCjhaI"
                },
                {
                    _id: "node-3aAd2HUA",
                    position: null,
                    pinned: false,
                    element: "elem-effTBrJM"
                },
                {
                    _id: "node-3drfht9o",
                    position: null,
                    pinned: false,
                    element: "elem-3FAG5Tdw"
                },
                {
                    _id: "node-3iKpzYYc",
                    position: {
                        x: -1670.4237845252837,
                        y: -65.39274854815639
                    },
                    pinned: true,
                    element: "elem-Ub4jDMbf"
                },
                {
                    _id: "node-4lZlDh1I",
                    position: {
                        x: -281.6161818873926,
                        y: -315.1411378043625
                    },
                    pinned: true,
                    element: "elem-lAEQeLLW"
                },
                {
                    _id: "node-4vlsHo8d",
                    position: null,
                    pinned: false,
                    element: "elem-V5b6cdCE"
                },
                {
                    _id: "node-5CfcrSym",
                    position: null,
                    pinned: false,
                    element: "elem-XBwIpXaH"
                },
                {
                    _id: "node-5Y68MWz7",
                    position: {
                        x: -1357.3977235954226,
                        y: -880.9041514882862
                    },
                    pinned: true,
                    element: "elem-4NKgoxKL"
                },
                {
                    _id: "node-7CcYSkrq",
                    position: {
                        x: -67.76560996001724,
                        y: 250.99010542605035
                    },
                    pinned: true,
                    element: "elem-4RJ1vjhb"
                },
                {
                    _id: "node-8Lc96dgX",
                    position: {
                        x: -166.98296081610277,
                        y: -513.8012701486672
                    },
                    pinned: true,
                    element: "elem-n2SWSTY4"
                },
                {
                    _id: "node-9EzRSlob",
                    position: null,
                    pinned: false,
                    element: "elem-OG80QK7m"
                },
                {
                    _id: "node-AMxR5904",
                    position: {
                        x: -701.7810632556184,
                        y: -951.9516618580082
                    },
                    pinned: true,
                    element: "elem-aZaZsfjX"
                },
                {
                    _id: "node-ASBXmEuX",
                    position: {
                        x: -1328.4416036654336,
                        y: 508.01970596689165
                    },
                    pinned: true,
                    element: "elem-AUBLvx7R"
                },
                {
                    _id: "node-BzB6kBem",
                    position: {
                        x: -1888.770843316697,
                        y: 231.49297195682178
                    },
                    pinned: true,
                    element: "elem-IejfCrJ1"
                },
                {
                    _id: "node-DMger1rp",
                    position: null,
                    pinned: false,
                    element: "elem-tHc5Vh1O"
                },
                {
                    _id: "node-DZHHzTRt",
                    position: {
                        x: -292.18700086313095,
                        y: 632.8651955583014
                    },
                    pinned: true,
                    element: "elem-aMkX6wac"
                },
                {
                    _id: "node-Dvd2nTIs",
                    position: {
                        x: -292.2795030276501,
                        y: 420.8637404874904
                    },
                    pinned: true,
                    element: "elem-yB75BJIG"
                },
                {
                    _id: "node-FC5d58Ap",
                    position: null,
                    pinned: false,
                    element: "elem-HA1LU07o"
                },
                {
                    _id: "node-FmNMya2t",
                    position: {
                        x: -193.94966810830383,
                        y: 383.5802745609471
                    },
                    pinned: true,
                    element: "elem-N7VZAvnD"
                },
                {
                    _id: "node-G7al5apQ",
                    position: {
                        x: -2086.4479251045173,
                        y: -1524.7750722177013
                    },
                    pinned: true,
                    element: "elem-6Mt9lL1b"
                },
                {
                    _id: "node-GVVHcTDx",
                    position: {
                        x: -1879.1823138223149,
                        y: 849.1262193462966
                    },
                    pinned: true,
                    element: "elem-eUDpuRKO"
                },
                {
                    _id: "node-GhsH4rE1",
                    position: null,
                    pinned: false,
                    element: "elem-tHgOfIx2"
                },
                {
                    _id: "node-Hl9beE4X",
                    position: null,
                    pinned: false,
                    element: "elem-8cLEqEej"
                },
                {
                    _id: "node-IHgFb3Oi",
                    position: {
                        x: -850.736400059543,
                        y: -486.3894101237268
                    },
                    pinned: true,
                    element: "elem-oh60Gl3U"
                },
                {
                    _id: "node-JXTnPJQP",
                    position: {
                        x: -294.12374471453097,
                        y: 159.35038392202767
                    },
                    pinned: true,
                    element: "elem-aAFxfi1u"
                },
                {
                    _id: "node-Lie7OYTU",
                    position: {
                        x: -1042.9208210146362,
                        y: 706.0272350293383
                    },
                    pinned: true,
                    element: "elem-fGPi7L6D"
                },
                {
                    _id: "node-LqPNK3lG",
                    position: {
                        x: -424.0210309874152,
                        y: -472.07207991528816
                    },
                    pinned: true,
                    element: "elem-4Th1FRTa"
                },
                {
                    _id: "node-MNYbKlzU",
                    position: {
                        x: 1232.1514665501543,
                        y: -621.3793028717473
                    },
                    pinned: true,
                    element: "elem-ySdMMtC0"
                },
                {
                    _id: "node-Oif7gRdk",
                    position: null,
                    pinned: false,
                    element: "elem-BEAmo8PW"
                },
                {
                    _id: "node-P4IN5AaX",
                    position: {
                        x: -1351.852847416392,
                        y: -728.5134914845154
                    },
                    pinned: true,
                    element: "elem-z3tZZbDU"
                },
                {
                    _id: "node-PQfSfY2B",
                    position: null,
                    pinned: false,
                    element: "elem-ci1hMBD5"
                },
                {
                    _id: "node-PYwclOrQ",
                    position: {
                        x: -178.44622872772237,
                        y: -77.3872786952041
                    },
                    pinned: true,
                    element: "elem-IgOrMyzD"
                },
                {
                    _id: "node-PtwtjkaB",
                    position: null,
                    pinned: false,
                    element: "elem-NEIPqBrH"
                },
                {
                    _id: "node-ShFpV7l7",
                    position: null,
                    pinned: false,
                    element: "elem-kkpOrkLW"
                },
                {
                    _id: "node-T3xksD2Y",
                    position: null,
                    pinned: false,
                    element: "elem-RGE2yJWY"
                },
                {
                    _id: "node-TzybD1Ic",
                    position: null,
                    pinned: false,
                    element: "elem-sOSRMhNf"
                },
                {
                    _id: "node-VE1hDgg7",
                    position: null,
                    pinned: false,
                    element: "elem-5kIk72Zy"
                },
                {
                    _id: "node-VTNovLsF",
                    position: null,
                    pinned: false,
                    element: "elem-60GbLsn9"
                },
                {
                    _id: "node-WYnsUoTX",
                    position: {
                        x: -843.7237232416448,
                        y: -803.2146841920538
                    },
                    pinned: true,
                    element: "elem-wJJGySsk"
                },
                {
                    _id: "node-X35AP8XA",
                    position: {
                        x: -1106.6692856046393,
                        y: -679.891390072927
                    },
                    pinned: true,
                    element: "elem-o8ISOFWs"
                },
                {
                    _id: "node-YM8SMwfl",
                    position: {
                        x: 1348.6809272807834,
                        y: 1048.8590021090713
                    },
                    pinned: true,
                    element: "elem-ysnxkzW0"
                },
                {
                    _id: "node-YgiLsBfh",
                    position: null,
                    pinned: false,
                    element: "elem-QFR1r1tR"
                },
                {
                    _id: "node-a3FeTRkA",
                    position: null,
                    pinned: false,
                    element: "elem-EYwxlQWS"
                },
                {
                    _id: "node-a8cD0ZWx",
                    position: null,
                    pinned: false,
                    element: "elem-M67VLIps"
                },
                {
                    _id: "node-aPiw77e9",
                    position: {
                        x: -1539.046602080521,
                        y: -154.37763500112945
                    },
                    pinned: true,
                    element: "elem-bIkJwVCw"
                },
                {
                    _id: "node-anV36PEq",
                    position: null,
                    pinned: false,
                    element: "elem-sJ3fEswP"
                },
                {
                    _id: "node-be2ZfpbE",
                    position: {
                        x: -1036.733989703082,
                        y: -1005.224513874841
                    },
                    pinned: true,
                    element: "elem-gUC9Ypnf"
                },
                {
                    _id: "node-cYuN1SIr",
                    position: null,
                    pinned: false,
                    element: "elem-yN50vYJL"
                },
                {
                    _id: "node-chhkzfyb",
                    position: {
                        x: -1656.575620960927,
                        y: 317.80206161853636
                    },
                    pinned: true,
                    element: "elem-DOmTQZKY"
                },
                {
                    _id: "node-fRc7aUlx",
                    position: null,
                    pinned: false,
                    element: "elem-6PRzGuwY"
                },
                {
                    _id: "node-gMhiOwO0",
                    position: {
                        x: -618.7790071931867,
                        y: -675.1703809130231
                    },
                    pinned: true,
                    element: "elem-CPgLxRpG"
                },
                {
                    _id: "node-gcoGcUKT",
                    position: null,
                    pinned: false,
                    element: "elem-jYclhsp2"
                },
                {
                    _id: "node-i4m19EL5",
                    position: {
                        x: -340.3399119847194,
                        y: -1624.3487804760568
                    },
                    pinned: true,
                    element: "elem-itZf5pQw"
                },
                {
                    _id: "node-iITRKAMW",
                    position: {
                        x: -44.06520703108032,
                        y: 54.9814015665263
                    },
                    pinned: true,
                    element: "elem-2A8LaEAW"
                },
                {
                    _id: "node-jkAFyNBs",
                    position: null,
                    pinned: false,
                    element: "elem-Xvmp7IpG"
                },
                {
                    _id: "node-jnZfSJDu",
                    position: null,
                    pinned: false,
                    element: "elem-lnbbGzjW"
                },
                {
                    _id: "node-jo0KGCRf",
                    position: null,
                    pinned: false,
                    element: "elem-oPfnXMJZ"
                },
                {
                    _id: "node-k8TJxto6",
                    position: {
                        x: -1682.411987229558,
                        y: -476.4471092009933
                    },
                    pinned: true,
                    element: "elem-wmNkgshK"
                },
                {
                    _id: "node-kFZhVCOP",
                    position: null,
                    pinned: false,
                    element: "elem-TAqetfMu"
                },
                {
                    _id: "node-kh9Stfdh",
                    position: {
                        x: -1703.4367059098736,
                        y: 185.1037316790713
                    },
                    pinned: true,
                    element: "elem-UBCjTnyL"
                },
                {
                    _id: "node-le28Pu9y",
                    position: {
                        x: -591.2791201845965,
                        y: 515.7838222671859
                    },
                    pinned: true,
                    element: "elem-L82dXdsM"
                },
                {
                    _id: "node-mLd36aKw",
                    position: {
                        x: -1429.6020029934257,
                        y: 119.51987777094135
                    },
                    pinned: true,
                    element: "elem-NJcjC3Lp"
                },
                {
                    _id: "node-nOusdszk",
                    position: {
                        x: -1341.5112942599153,
                        y: -147.92544854706154
                    },
                    pinned: true,
                    element: "elem-vwCBVjzW"
                },
                {
                    _id: "node-nhYUsKya",
                    position: {
                        x: -529.4915508497743,
                        y: -960.1941847727122
                    },
                    pinned: true,
                    element: "elem-gbhWoxHp"
                },
                {
                    _id: "node-otbsRI4y",
                    position: {
                        x: -1326.6527065299172,
                        y: 394.6019780263602
                    },
                    pinned: true,
                    element: "elem-RliYu3oU"
                },
                {
                    _id: "node-ouSQbFfL",
                    position: {
                        x: -393.8333494401869,
                        y: -817.43866991962
                    },
                    pinned: true,
                    element: "elem-ndK3XMl5"
                },
                {
                    _id: "node-p3rCIP29",
                    position: {
                        x: -1437.4769899133973,
                        y: -119.82841370089433
                    },
                    pinned: true,
                    element: "elem-tpov60yo"
                },
                {
                    _id: "node-paGELlR6",
                    position: null,
                    pinned: false,
                    element: "elem-tmmeKChl"
                },
                {
                    _id: "node-q4bZv80Z",
                    position: null,
                    pinned: false,
                    element: "elem-5KCZ8Nlr"
                },
                {
                    _id: "node-qJ9IlEyf",
                    position: {
                        x: -1704.9247568403928,
                        y: 55.98485345446025
                    },
                    pinned: true,
                    element: "elem-4yJVp1HX"
                },
                {
                    _id: "node-qNygPfpz",
                    position: null,
                    pinned: false,
                    element: "elem-qfsTgklq"
                },
                {
                    _id: "node-qQyU6lGn",
                    position: {
                        x: -686.3073810291672,
                        y: 795.4671151589578
                    },
                    pinned: true,
                    element: "elem-nG1It70p"
                },
                {
                    _id: "node-qaOuw2fB",
                    position: {
                        x: -1247.4729296226913,
                        y: 771.6449702533215
                    },
                    pinned: true,
                    element: "elem-iR1zHpqu"
                },
                {
                    _id: "node-qxNA9wuy",
                    position: {
                        x: -391.8243703853627,
                        y: 382.3501841875228
                    },
                    pinned: true,
                    element: "elem-asRs7G0j"
                },
                {
                    _id: "node-smrjIynM",
                    position: {
                        x: -1220.4531277287654,
                        y: -992.6016141408597
                    },
                    pinned: true,
                    element: "elem-9eXtx4ll"
                },
                {
                    _id: "node-suuz65hK",
                    position: {
                        x: -846.3261684408401,
                        y: -49.52123209189253
                    },
                    pinned: true,
                    element: "elem-D97qdI5h"
                },
                {
                    _id: "node-sxONiVc8",
                    position: null,
                    pinned: false,
                    element: "elem-MglTRNn2"
                },
                {
                    _id: "node-u9xHxqH8",
                    position: {
                        x: -1114.710525366075,
                        y: 511.83514600650517
                    },
                    pinned: true,
                    element: "elem-1Un9VZrg"
                },
                {
                    _id: "node-uxPntHQd",
                    position: {
                        x: -1433.4200226941987,
                        y: -351.86499904691846
                    },
                    pinned: true,
                    element: "elem-F9kG40SF"
                },
                {
                    _id: "node-vvpkQplZ",
                    position: null,
                    pinned: false,
                    element: "elem-is9TkAHD"
                },
                {
                    _id: "node-w3iY8PeE",
                    position: {
                        x: -306.75701981724586,
                        y: -535.368389627847
                    },
                    pinned: true,
                    element: "elem-SYEIB2uW"
                },
                {
                    _id: "node-whW6oZr3",
                    position: {
                        x: -1328.3037128154926,
                        y: 615.1007885975606
                    },
                    pinned: true,
                    element: "elem-1dohD2RO"
                },
                {
                    _id: "node-xcwJBjPQ",
                    position: {
                        x: 798.5602349327966,
                        y: -1594.616519543129
                    },
                    pinned: true,
                    element: "elem-viJtBRKH"
                },
                {
                    _id: "node-xt6rK0Iz",
                    position: {
                        x: -481.4211535186691,
                        y: -354.6961205588524
                    },
                    pinned: true,
                    element: "elem-703vqYs5"
                },
                {
                    _id: "node-y9Gw2L5W",
                    position: null,
                    pinned: false,
                    element: "elem-eiMhiWVz"
                },
                {
                    _id: "node-yd3nYjrd",
                    position: null,
                    pinned: false,
                    element: "elem-GwRmz3Lb"
                }
            ],
            connections: [
                {
                    _id: "edge-06R8JYao",
                    connection: "conn-O4m54OEB"
                },
                {
                    _id: "edge-0PjiQGGD",
                    connection: "conn-lSdFF9tK"
                },
                {
                    _id: "edge-0Yl402LO",
                    connection: "conn-CWqVREZk"
                },
                {
                    _id: "edge-10OLQIg1",
                    connection: "conn-09U6boek"
                },
                {
                    _id: "edge-18ISfxbk",
                    curvature: 0.9393071026492079,
                    connection: "conn-eY4h4gCZ"
                },
                {
                    _id: "edge-1MLh9HsI",
                    connection: "conn-yYonaSjI"
                },
                {
                    _id: "edge-1uNfTzAn",
                    connection: "conn-b8TN2b0C"
                },
                {
                    _id: "edge-2a6SwHbp",
                    connection: "conn-ZLtLJPsw"
                },
                {
                    _id: "edge-355gAneF",
                    connection: "conn-bpjoQvKC"
                },
                {
                    _id: "edge-3EPmcO8M",
                    connection: "conn-4eCLyHdo"
                },
                {
                    _id: "edge-3Spv9aZp",
                    curvature: -0.055273250245181905,
                    connection: "conn-9sWRFcRo"
                },
                {
                    _id: "edge-3T7JvLnp",
                    connection: "conn-sMpLxKzb"
                },
                {
                    _id: "edge-4JG3WRxT",
                    connection: "conn-tpWXMeL3"
                },
                {
                    _id: "edge-4qJQVwEW",
                    connection: "conn-kyYuLpH3"
                },
                {
                    _id: "edge-5FJdoS5g",
                    connection: "conn-CLoMCQm2"
                },
                {
                    _id: "edge-5LBPWKeB",
                    connection: "conn-H4MBjXqP"
                },
                {
                    _id: "edge-5VzZZJWo",
                    connection: "conn-S6ILAf1D"
                },
                {
                    _id: "edge-7JnQ6eyD",
                    connection: "conn-yfPBONNr"
                },
                {
                    _id: "edge-7r7wtFh0",
                    connection: "conn-qzSOfkdY"
                },
                {
                    _id: "edge-8WIxTTUE",
                    connection: "conn-Y6GXH8zC"
                },
                {
                    _id: "edge-8kO961OG",
                    connection: "conn-HWvNeWaN"
                },
                {
                    _id: "edge-93XpDM2n",
                    connection: "conn-ryUZMg9w"
                },
                {
                    _id: "edge-9L82wBJ6",
                    connection: "conn-YTIXBbBU"
                },
                {
                    _id: "edge-9N9BQDbh",
                    connection: "conn-NXHYTc1C"
                },
                {
                    _id: "edge-9Rz1Fi8Z",
                    connection: "conn-EZSGLwLQ"
                },
                {
                    _id: "edge-9chNThM5",
                    connection: "conn-Z6mCBVyU"
                },
                {
                    _id: "edge-9egJiA0S",
                    connection: "conn-9k8VTNOU"
                },
                {
                    _id: "edge-A7hOQUXj",
                    connection: "conn-XfbpuhmG"
                },
                {
                    _id: "edge-AKArD6fP",
                    connection: "conn-68isLsC7"
                },
                {
                    _id: "edge-AXi3Vxiw",
                    connection: "conn-UMDLbm2G"
                },
                {
                    _id: "edge-Ah3LUzTl",
                    connection: "conn-MfQR618C"
                },
                {
                    _id: "edge-Bd1mUFs4",
                    connection: "conn-VefJEGjo"
                },
                {
                    _id: "edge-BxqhAlSZ",
                    connection: "conn-iTgiw8dF"
                },
                {
                    _id: "edge-CH2F1asW",
                    connection: "conn-0LYu08B0"
                },
                {
                    _id: "edge-CplyTOLg",
                    connection: "conn-AIpMVz1c"
                },
                {
                    _id: "edge-D8wm5S46",
                    connection: "conn-Ht1nS4ZR"
                },
                {
                    _id: "edge-DIVc8H5g",
                    connection: "conn-Mh9tcDA6"
                },
                {
                    _id: "edge-DLQN7xGa",
                    curvature: -0.45236778727510174,
                    connection: "conn-hkKmmp9Z"
                },
                {
                    _id: "edge-DNiisGHK",
                    connection: "conn-KpAdST3O"
                },
                {
                    _id: "edge-DPNUZPQI",
                    connection: "conn-Ko237WcM"
                },
                {
                    _id: "edge-DPtncMqB",
                    curvature: 0.8491592472833009,
                    connection: "conn-vuxpUQko"
                },
                {
                    _id: "edge-DTTlsI8a",
                    connection: "conn-bjCYcpLv"
                },
                {
                    _id: "edge-Ex0N6Yd4",
                    connection: "conn-aLxw4gIp"
                },
                {
                    _id: "edge-F5UOEmFn",
                    connection: "conn-jCo5Cef5"
                },
                {
                    _id: "edge-FABZBHxa",
                    connection: "conn-Sg7eAetg"
                },
                {
                    _id: "edge-FmANaFxh",
                    connection: "conn-b19XRo1D"
                },
                {
                    _id: "edge-GfH2TcX0",
                    connection: "conn-JIRBuqwN"
                },
                {
                    _id: "edge-H7uZCLAQ",
                    connection: "conn-mS2Ra3nE"
                },
                {
                    _id: "edge-HUXNsDLQ",
                    connection: "conn-WwJcpvwd"
                },
                {
                    _id: "edge-HiUEdtRC",
                    connection: "conn-kNYvJjvL"
                },
                {
                    _id: "edge-Hpqs6kRj",
                    connection: "conn-ZNVARKgo"
                },
                {
                    _id: "edge-I6J6lQE1",
                    connection: "conn-pw5ZEEPc"
                },
                {
                    _id: "edge-IJwANu8y",
                    connection: "conn-b1A0Zd2T"
                },
                {
                    _id: "edge-IR1OmVE8",
                    connection: "conn-aigORndD"
                },
                {
                    _id: "edge-InPuTH3T",
                    connection: "conn-dgDBYU0T"
                },
                {
                    _id: "edge-JiibJMSs",
                    curvature: 0.06667383101711287,
                    connection: "conn-giRXCM5Q"
                },
                {
                    _id: "edge-LLV4rdLt",
                    connection: "conn-PLBPaaSx"
                },
                {
                    _id: "edge-LTgXkci3",
                    curvature: 0.6135399387546048,
                    connection: "conn-27zIrvgI"
                },
                {
                    _id: "edge-LlzJ9WmJ",
                    connection: "conn-katHSLHK"
                },
                {
                    _id: "edge-Mh8sHk5x",
                    curvature: -0.20357973819373992,
                    connection: "conn-xaxsJBYu"
                },
                {
                    _id: "edge-Mlc39oXj",
                    connection: "conn-GQUu7gwm"
                },
                {
                    _id: "edge-N227ZrEP",
                    connection: "conn-mAN22CP4"
                },
                {
                    _id: "edge-Nguk9OLJ",
                    connection: "conn-zhztyAhm"
                },
                {
                    _id: "edge-NjfRXkR6",
                    connection: "conn-GkT9M25Q"
                },
                {
                    _id: "edge-OAc5fBDQ",
                    connection: "conn-xDNB6H2d"
                },
                {
                    _id: "edge-OFFBup2p",
                    connection: "conn-nfAifRjz"
                },
                {
                    _id: "edge-OzOH60eF",
                    connection: "conn-edKwxNSF"
                },
                {
                    _id: "edge-P0WLbYlL",
                    connection: "conn-cHI0QgDB"
                },
                {
                    _id: "edge-Pbb2EJDB",
                    curvature: 0.8862347048733861,
                    connection: "conn-t1cQLphB"
                },
                {
                    _id: "edge-Q148r8l7",
                    connection: "conn-xuDQac7L"
                },
                {
                    _id: "edge-Qz7aI92a",
                    connection: "conn-yHE8WQdO"
                },
                {
                    _id: "edge-RiiESlHJ",
                    connection: "conn-Q2A16b8m"
                },
                {
                    _id: "edge-RvQUPmYh",
                    connection: "conn-d9kn9cSK"
                },
                {
                    _id: "edge-Sr7xBAth",
                    connection: "conn-3E4KUfjb"
                },
                {
                    _id: "edge-T3m3GLsO",
                    connection: "conn-kY4aA3US"
                },
                {
                    _id: "edge-Tk2E1ZNJ",
                    connection: "conn-jFtY4HP1"
                },
                {
                    _id: "edge-U48Tz27P",
                    connection: "conn-ta6Z61s0"
                },
                {
                    _id: "edge-UFELszb2",
                    connection: "conn-qWIrhpsi"
                },
                {
                    _id: "edge-UP8cRzDE",
                    connection: "conn-5Cg7t3F6"
                },
                {
                    _id: "edge-Ul18sYM9",
                    connection: "conn-MIhaXOEj"
                },
                {
                    _id: "edge-V5miHFec",
                    connection: "conn-EzyOJcvW"
                },
                {
                    _id: "edge-VPbCAfV4",
                    connection: "conn-mJYK0FkE"
                },
                {
                    _id: "edge-WGbpJUGa",
                    curvature: 0.06212244345918546,
                    connection: "conn-9caCZJqR"
                },
                {
                    _id: "edge-WgrnVYRJ",
                    connection: "conn-Kw77Tdcb"
                },
                {
                    _id: "edge-XANs29kS",
                    curvature: 0.08656581756940025,
                    connection: "conn-uZ4f0bu4"
                },
                {
                    _id: "edge-Xo6ZbqHh",
                    curvature: 0.07142245732782425,
                    connection: "conn-FTgbeHwW"
                },
                {
                    _id: "edge-Z3iAcPrG",
                    connection: "conn-9kB0KnFH"
                },
                {
                    _id: "edge-Z6j4LcGj",
                    connection: "conn-fFyazmjn"
                },
                {
                    _id: "edge-ZTc3kuDl",
                    connection: "conn-t7VTUX1V"
                },
                {
                    _id: "edge-ZUKHCxgJ",
                    connection: "conn-pp7Z80qo"
                },
                {
                    _id: "edge-ZdwNUQGf",
                    connection: "conn-Pjc74zgO"
                },
                {
                    _id: "edge-ZyJUx66k",
                    connection: "conn-KP6KG3BN"
                },
                {
                    _id: "edge-a3TgsvMt",
                    connection: "conn-islOjYX8"
                },
                {
                    _id: "edge-a8q5jht6",
                    curvature: 0.23645960870169908,
                    connection: "conn-eqVCtZkZ"
                },
                {
                    _id: "edge-aEZ67DCs",
                    connection: "conn-mQrtIg9y"
                },
                {
                    _id: "edge-aTC1MISj",
                    connection: "conn-vz57qFdD"
                },
                {
                    _id: "edge-c9RYqMhY",
                    connection: "conn-DjcOLqud"
                },
                {
                    _id: "edge-cG9a7qxo",
                    curvature: -0.007289170477402855,
                    connection: "conn-TjNQV7G7"
                },
                {
                    _id: "edge-cT2030S8",
                    connection: "conn-QuPibhWg"
                },
                {
                    _id: "edge-dGeN5xXj",
                    connection: "conn-bq0J1ACt"
                },
                {
                    _id: "edge-edrMMBV2",
                    connection: "conn-WeKDesUX"
                },
                {
                    _id: "edge-emTwpOLL",
                    connection: "conn-CI7rMq7W"
                },
                {
                    _id: "edge-esJai0hU",
                    curvature: 0.019865987529977903,
                    connection: "conn-SdxBGGZ0"
                },
                {
                    _id: "edge-f52gNOQn",
                    connection: "conn-KzzJIM46"
                },
                {
                    _id: "edge-fXNavySe",
                    connection: "conn-Y5GBZ8ea"
                },
                {
                    _id: "edge-gQ664uJy",
                    connection: "conn-HiCbVanA"
                },
                {
                    _id: "edge-gZmMNtGX",
                    connection: "conn-dOHTElFD"
                },
                {
                    _id: "edge-geChnhmm",
                    connection: "conn-I9OKy5bY"
                },
                {
                    _id: "edge-gjMoej1y",
                    connection: "conn-M6ejKyD2"
                },
                {
                    _id: "edge-hMWNHTZ3",
                    connection: "conn-dqOZECRJ"
                },
                {
                    _id: "edge-i97A8RNZ",
                    connection: "conn-u3P6OIY6"
                },
                {
                    _id: "edge-iCV0hzkS",
                    connection: "conn-d64odo8g"
                },
                {
                    _id: "edge-iV11M0IX",
                    curvature: -0.039826131283430315,
                    connection: "conn-prrmh0BC"
                },
                {
                    _id: "edge-iYdKsItq",
                    connection: "conn-hbbd34Qr"
                },
                {
                    _id: "edge-ip91Nver",
                    connection: "conn-7uVJSSwl"
                },
                {
                    _id: "edge-izRTZo1y",
                    connection: "conn-4RXQHaMI"
                },
                {
                    _id: "edge-j0R28TxS",
                    connection: "conn-MOlY7Ntu"
                },
                {
                    _id: "edge-j6whXtwW",
                    curvature: -0.5807626589507111,
                    connection: "conn-yyRwPwWJ"
                },
                {
                    _id: "edge-jIjYv3hG",
                    connection: "conn-CsSmy75M"
                },
                {
                    _id: "edge-jSwTCD6G",
                    connection: "conn-2iNCJds9"
                },
                {
                    _id: "edge-k9nBdwRV",
                    connection: "conn-MKgzmybc"
                },
                {
                    _id: "edge-lQd2fVYU",
                    connection: "conn-kxHzfOIM"
                },
                {
                    _id: "edge-lu7DNFHS",
                    connection: "conn-6XklYdIe"
                },
                {
                    _id: "edge-nMWUJdDt",
                    connection: "conn-G9EmBidJ"
                },
                {
                    _id: "edge-oJSZm8eP",
                    connection: "conn-ijFLhb6y"
                },
                {
                    _id: "edge-p24RQVTB",
                    connection: "conn-9TlQyV6F"
                },
                {
                    _id: "edge-pN2JPKOL",
                    curvature: 0.7155733505182948,
                    connection: "conn-7UZd1DSW"
                },
                {
                    _id: "edge-pf8694Yx",
                    connection: "conn-TIjG4lCp"
                },
                {
                    _id: "edge-psM6gG7A",
                    connection: "conn-SbdKle2D"
                },
                {
                    _id: "edge-pxnNJLwA",
                    connection: "conn-P6YIBu0n"
                },
                {
                    _id: "edge-q42bdqKR",
                    connection: "conn-2RDTIQLt"
                },
                {
                    _id: "edge-qL8wHYb3",
                    connection: "conn-I5u6UmWI"
                },
                {
                    _id: "edge-r9TtnzvH",
                    connection: "conn-RIVcSap1"
                },
                {
                    _id: "edge-rG2GtUBv",
                    connection: "conn-NaHa6rxu"
                },
                {
                    _id: "edge-rWJJkXAp",
                    connection: "conn-OinK3Bn7"
                },
                {
                    _id: "edge-rtF5dgC1",
                    connection: "conn-6pbtYAjl"
                },
                {
                    _id: "edge-scAqjWAz",
                    connection: "conn-uRvXGtx8"
                },
                {
                    _id: "edge-sh5JAp3N",
                    curvature: 0.09636233069643245,
                    connection: "conn-Fuacyy99"
                },
                {
                    _id: "edge-tF4okgwq",
                    connection: "conn-zo7IYjbF"
                },
                {
                    _id: "edge-u1dLlE0i",
                    connection: "conn-5Tlmo31w"
                },
                {
                    _id: "edge-vQyjxeYu",
                    connection: "conn-V8nziHqN"
                },
                {
                    _id: "edge-vc7JMCT7",
                    connection: "conn-Ua0BfKeP"
                },
                {
                    _id: "edge-vvdu7BqE",
                    connection: "conn-BURFx6Td"
                },
                {
                    _id: "edge-wIN0wfil",
                    connection: "conn-84KYMONy"
                },
                {
                    _id: "edge-wQQpijxP",
                    curvature: 0.02110422180650076,
                    connection: "conn-paT8YxTz"
                },
                {
                    _id: "edge-wRhkEc1W",
                    connection: "conn-prnXSAVb"
                },
                {
                    _id: "edge-wpeF4bN0",
                    connection: "conn-Ye5Jje4N"
                },
                {
                    _id: "edge-wpsLaadH",
                    connection: "conn-3wqMiCQ5"
                },
                {
                    _id: "edge-x044GHIj",
                    connection: "conn-zFfQnh2k"
                },
                {
                    _id: "edge-xRlY17y6",
                    connection: "conn-8cQMVI4q"
                },
                {
                    _id: "edge-xZiVi0E3",
                    connection: "conn-IOnjr8DC"
                },
                {
                    _id: "edge-y19ro8ts",
                    connection: "conn-B9CiurNb"
                },
                {
                    _id: "edge-yQzR8lNb",
                    connection: "conn-NfMQksrv"
                },
                {
                    _id: "edge-yhAxbsyp",
                    connection: "conn-vqiYrjyI"
                },
                {
                    _id: "edge-yvpD4HT9",
                    connection: "conn-OmTX06ZU"
                },
                {
                    _id: "edge-zy2lCnYK",
                    connection: "conn-z17QzDwi"
                }
            ],
            loops: []
        }
    ],
    perspectives: [
        {
            _id: "pers-UM9guBMj",
            name: "Current",
            style: "@settings {\n  template: stakeholder;\n  theme: dark;\n  // layout: static;\n}\n\nelement {\n  image-size: contain;\n  image-visibility: visible;\n  outline-offset: 0;\n  shadow-opacity: 0;\n  font-size: 30;\n  font-family: Oswald;\n  shadow-color: white;\n  text-overflow: wrap 7;\n}\n\n/* element {\n  popover: \"{{label}}\";\n}\n\nelement[\"Quote\"] {\n  popover: \"<blockquote>{{quote}}</blockquote>\";\n}\n\nelement[\"Description\"] {\n  popover: \"{{description}}\";\n}\n\nelement[\"Quote\"]element[\"Description\"] {\n  popover: \"<blockquote>{{quote}}</blockquote>{{description}}\";\n}\n\nelement[\"Image\"] {\n  popover: \"{{image}}\";\n  popover-width: 800;\n} */\nfaction {\n  border-width: 10;\n  size: 200;\n  font-size: 100;\n  text-align: center;\n  font-weight: bold;\n  shadow-opacity: 0.1;\n  shadow-size: 5;\n  label-visibility: hidden;\n}\n\ncoalition {\n  bullseye-color: transparent;\n  bullseye-size: 1;\n  color: transparent;\n  image-visibility: none;\n  size: 100;\n  border-width: 10;\n  font-size: 70;\n  text-align: center;\n  text-overflow: wrap 1;\n}\n\nelement[\"Titles\"*=\"Autarkis\"] {\n  size: 100;\n}\n\nelement[\"Label\"=\"Camarilla\"] {\n  color: #FFDC95;\n  border-color: #724C00;\n  image-url: url(https://vignette.wikia.nocookie.net/whitewolf/images/b/b6/SymbolCamarillaV5.png);\n  shadow-size: 4;\n  shadow-color: #C38200;\n}\n\nelement[\"Label\"=\"Mortals\"] {\n  color: #8E9C9A;\n  border-color: #334E4B;\n  image-url: url(https://i.pinimg.com/originals/7e/39/10/7e3910c4a662d94a2d7b463ed6c1055e.png);\n  shadow-size: 2.5;\n  shadow-color: #4E6361;\n}\n\nelement[\"Label\"=\"Anarchs\"] {\n  color: #FE94A1;\n  border-color: #6D000D;\n  image-url: url(https://vignette.wikia.nocookie.net/whitewolf/images/d/de/AnarchV5.png);\n  shadow-size: 6;\n  shadow-color: #BB0016;\n}\n\nelement[\"Label\"=\"Sabbat\"] {\n  color: #B09EFA;\n  border-color: #11024E;\n  image-url: url(https://vignette.wikia.nocookie.net/whitewolf/images/1/1d/LogoSectSabbat.png/revision/latest?cb=20140102051716);\n  shadow-size: 2;\n  shadow-color: #260F86;\n}\n\nelement[\"Label\"=\"Second Inquisition\"] {\n  color: #BBB897;\n  border-color: #E0D453;\n  image-url: url(https://vignette.wikia.nocookie.net/whitewolf/images/5/59/SymbolSecondInquisition.png/revision/latest?cb=20190519043956);\n  shadow-size: 3;\n  shadow-color: #FFFCDA;\n}\n\nelement[\"Label\"=\"Independent\"] {\n  image-url: url(https://vignette.wikia.nocookie.net/whitewolf/images/c/cc/LogoVampireAnkh.png/revision/latest?cb=20140102051635);\n  shadow-size: 3.5;\n  shadow-color: #696969;\n}\n\nmortal {\n  color: #334E4B;\n  border-color: #334E4B;\n}\n\nelement[\"Faction\"=\"Anarchs\"] {\n  color: #6D000D;\n  border-color: #6D000D;\n}\n\nelement[\"Faction\"=\"Camarilla\"] {\n  color: #724C00;\n  border-color: #724C00;\n}\n\nelement[\"Faction\"=\"Sabbat\"] {\n  color: #11024E;\n  border-color: #11024E;\n}\n\nelement[\"Faction\"=\"Second Inquisition\"] {\n  color: #E0D453;\n  border-color: #E0D453;\n  font-color: orange;\n  image-url: url(https://vignette.wikia.nocookie.net/whitewolf/images/5/59/SymbolSecondInquisition.png/revision/latest?cb=20190519043956);\n}\n\nelement[\"Clan\"=\"Brujah\"] {\n  image-url: url(https://vignette.wikia.nocookie.net/whitewolf/images/0/0b/SymbolClanBrujahV5.png/revision/latest?cb=20180728213654);\n}\n\nelement[\"Clan\"=\"Gangrel\"] {\n  image-url: url(https://vignette.wikia.nocookie.net/whitewolf/images/d/d8/SymbolClanGangrelV5.png/revision/latest?cb=20180728213714);\n}\n\nelement[\"Clan\"=\"Malkavian\"] {\n  image-url: url(https://vignette.wikia.nocookie.net/whitewolf/images/d/d2/SymbolClanMalkavianV5.png/revision/latest?cb=20180728213734);\n}\n\nelement[\"Clan\"=\"Nosferatu\"] {\n  image-url: url(https://vignette.wikia.nocookie.net/whitewolf/images/6/6e/SymbolClanNosferatuV5.png/revision/latest?cb=20180728213808);\n}\n\nelement[\"Clan\"=\"Toreador\"] {\n  image-url: url(https://vignette.wikia.nocookie.net/whitewolf/images/c/c3/SymbolClanToreadorV5.png/revision/latest?cb=20180728213828);\n}\n\nelement[\"Clan\"=\"Tremere\"] {\n  image-url: url(https://vignette.wikia.nocookie.net/whitewolf/images/7/7b/SymbolClanTremereV5.png/revision/latest?cb=20180728213847);\n}\n\nelement[\"Clan\"=\"Ventrue\"] {\n  image-url: url(https://vignette.wikia.nocookie.net/whitewolf/images/a/ad/SymbolClanVentrueV5.png/revision/latest?cb=20180728213913);\n}\n\nelement[\"Clan\"=\"Lasombra\"] {\n  image-url: url(https://vignette.wikia.nocookie.net/whitewolf/images/f/fa/LogoClanLasombraV5.png/revision/latest?cb=20190725175100);\n}\n\nelement[\"Clan\"=\"Tzimisce\"] {\n  image-url: url(https://vignette.wikia.nocookie.net/whitewolf/images/8/89/LogoClanTzimisce.png/revision/latest?cb=20090120044552);\n}\n\nelement[\"Clan\"=\"Banu Haqim\"] {\n  image-url: url(https://vignette.wikia.nocookie.net/whitewolf/images/1/16/SymbolClanBanuHaqim.png);\n}\n\nelement[\"Clan\"=\"Ministry\"] {\n  image-url: url(https://vignette.wikia.nocookie.net/whitewolf/images/0/01/SymbolMinistryV5.png/revision/latest?cb=20190607221027);\n}\n\nelement[\"Clan\"=\"Hecata\"] {\n  image-url: url(https://vignette.wikia.nocookie.net/whitewolf/images/1/1a/SymbolHecataClassic.png/revision/latest?cb=20200114211201);\n}\n\nelement[\"Clan\"=\"Caitiff\"] {\n  image-url: url(https://vignette.wikia.nocookie.net/whitewolf/images/5/55/LogoBloodlineCaitiff.png/revision/latest?cb=20170811183452);\n}\n\nelement[\"Clan\"=\"Thin-Blooded\"] {\n  image-url: url(https://vignette.wikia.nocookie.net/whitewolf/images/f/fc/SymbolThinBloodsV5.png/revision/latest?cb=20190725180822);\n}\n\nelement[\"Subtype\"=\"Ghoul\"] {\n  image-url: url(https://vignette.wikia.nocookie.net/whitewolf/images/1/13/VTMGhouls.png/revision/latest?cb=20090201223141);\n}\n\nelement[\"StatusNum\"=0] {\n  size: 30;\n}\n\nelement[\"StatusNum\"=1] {\n  size: 40;\n}\n\nelement[\"StatusNum\"=2] {\n  size: 50;\n}\n\nelement[\"StatusNum\"=3] {\n  size: 60;\n}\n\nelement[\"StatusNum\"=4] {\n  size: 80;\n  font-size: 50;\n}\n\nelement[\"StatusNum\"=5], element[\"Affiliation\"=\"Autarkis\"] {\n  size: 100;\n  font-size: 60;\n  text-align: center;\n  font-family: candal;\n  text-overflow: wrap 2;\n}\n\nconnection {\n  arrow-visibility: hidden;\n  curvature: 0;\n  display: none;\n}\n\nconnection.boss {\n  border-width: 2;\n  strength: 4;\n  length: 2;\n  size: 15;\n  border-opacity: 1;\n  border-color: white;\n  arrow-visibility: visible;\n  arrow-color: white;\n  arrow-width: 6;\n  arrow-height: 6;\n}\n\nelement.pc {\n  size: 70;\n  font-size: 45;\n}\n\nelement.dead {\n  opacity: 0.3;\n  font-color: grey;\n  color: grey;\n}\n\n:to(coalition) {\n  display: map;\n  strength: 2;\n  length: 150;\n}\n\n:from(coalition):to(faction) {\n  display: map;\n  strength: 5;\n  length: 50;\n  size: 50;\n}\n\nconnection[\"Connection Type\"=\"Sire/Regnant\"] {\n  display: map;\n  strength: 0;\n  length: 200;\n  style: dashed;\n  size: 4;\n  arrow-visibility: visible;\n  arrow-width: 4;\n  arrow-height: 4;\n  opacity: 1;\n  curvature: 0;\n}\n\n:from(kindred:not(kindred <--> coalition) <--> faction) {\n  display: map;\n}\n\n"
        }
    ]
}