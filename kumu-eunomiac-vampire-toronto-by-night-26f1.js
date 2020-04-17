// eslint-disable-next-line no-unused-vars
const KUMUDATA = {
        version: 1,
        name: "VAMPIRE: Toronto By Night (26f1)",
        description: "A living Relationship Map of all that is happening in Toronto.",
        proxyImages: true,
        defaultMap: "map-UZxllAX4",
        defaultPerspective: null,
        attributeRelevance: {
            faction: [
                "Image",
                "Quote",
                "Description"
            ],
            coalition: [
                "Faction",
                "Image",
                "Quote",
                "Description"
            ],
            mortal: [
                "Associates",
                "Faction",
                "Image",
                "Quote",
                "Regnant",
                "Status",
                "StatusNum",
                "Subtype",
                "Titles",
                "Description"
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
                "Sire",
                "Status",
                "StatusNum",
                "Titles",
                "Description"
            ],    
            undefined: [
                "Age",
                "Associates",
                "Childer",
                "Clan",
                "Description",
                "Faction",
                "Generation",
                "Humanity",
                "Image",
                "Quote",
                "Regnant",
                "Sire",
                "Status",
                "StatusNum",
                "Subtype",
                "Titles"
            ]
        },
        attributes: [
            {
                _id: "attr-r1GCY2KH",
                name: "Age",
                format: "string",
                private: false,
                limit: 1,
                category: "General",
                prompt: "list",
                locked: false,
                values: [
                    "Elder",
                    "Neonate",
                    "Ancilla",
                    "Methuselah",
                    null,
                ],
                sort: false,
                cluster: true
            },
            {
                _id: "attr-QYVj6W9V",
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
                _id: "attr-pMC8lgE1",
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
                _id: "attr-wPk1pfdx",
                name: "Clan",
                format: "string",
                private: false,
                limit: 1,
                category: "General",
                prompt: "list",
                locked: false,
                values: [
                    "Brujah",
                    "Toreador",
                    "Lasombra",
                    "Ministry",
                    "Banu Haqim",
                    "Gangrel",
                    "Tremere",
                    "Malkavian",
                    "Nosferatu",
                    "Thin-Blooded",
                    "Ventrue",
                    "Hecata",
                    null
                ],
                sort: false,
                cluster: true
            },
            {
                _id: "attr-8sMjCawd",
                name: "Connection Type",
                format: "string",
                private: false,
                limit: 1,
                category: "General",
                prompt: "list",
                locked: false,
                values: [
                    "Subgroup",
                    "Officer",
                    "Coalition",
                    "Faction",
                    "Sire/Regnant"
                ],
                sort: false,
                cluster: false
            },
            {
                _id: "attr-TLEOR15V",
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
                _id: "attr-Gx8jZp9e",
                name: "Element Type",
                format: "string",
                private: false,
                limit: 1,
                category: "General",
                prompt: "list",
                locked: false,
                values: [
                    "Kindred",
                    "Mortal",
                    "Faction",
                    "Coalition"
                ],
                sort: false,
                cluster: true
            },
            {
                _id: "attr-gfmGxv0q",
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
                    null
                ],
                sort: false,
                cluster: true
            },
            {
                _id: "attr-fq52wdPk",
                name: "Generation",
                format: "string",
                private: false,
                limit: 1,
                category: "General",
                prompt: "list",
                locked: false,
                values: [
                    "Eighth",
                    "Tenth",
                    "Sixth",
                    "Twelfth",
                    "Thirteenth",
                    "Eleventh",
                    "Seventh",
                    "Fourteenth",
                    "Ninth",
                    null
                ],
                sort: false,
                cluster: true
            },
            {
                _id: "attr-ywfE0QWR",
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
                _id: "attr-muCKLWID",
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
                _id: "attr-bMv8iFfj",
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
                _id: "attr-rt31V7P8",
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
                _id: "attr-RIoSnhLe",
                name: "Quote",
                format: "text",
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
                _id: "attr-VwOidf7R",
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
                _id: "attr-yZBAScwW",
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
                    "Alistair Etrata"
                ],
                sort: false,
                cluster: true
            },
            {
                _id: "attr-vqQGBGQR",
                name: "StatusNum",
                format: "number",
                private: false,
                limit: 1,
                category: "General",
                prompt: "list",
                locked: false,
                values: [
                    5,
                    4,
                    3,
                    2,
                    1,
                    0
                ],
                sort: false,
                cluster: true
            },
            {
                _id: "attr-QlCvTlYY",
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
                _id: "attr-j6xkIkGC",
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
                _id: "attr-84GbDx35",
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
            },
            {
                _id: "attr-UU47ziQf",
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
            }
        ],
        elements: [
            {
                _id: "elem-06Bv04rf",
                attributes: {
                    label: "Victor Vex",
                    clan: "Malkavian",
                    faction: "Camarilla",
                    age: "Ancilla",
                    quote: "It seemed like the right idea at the time: I'm not really a 'Council of Primogen' kind of guy. Now, what can I get you?",
                    image: "https://imgur.com/0B3DtU2.jpg",
                    "element type": "Kindred",
                    description: "Vex is considered tedious by most, in part because of his firm belief in the power of his Evil Eye—and his propensity to use it whenever he is challenged. As the youngest member of Prince Steele's Council of Primogen, Vex managed to accomplish a great deal despite his delusions: He negotiated control over the Waterfront and established Clan Malkavian’s grip over most of Toronto’s tourism industry and ports of entry. For reasons unknown, he abdicated from his position on the council when Bertrice stepped down; tonight, he attends Elysia with no greater fanfare than any other ancilla—but for his position as Toronto's primary liason with the Circulatory Network.",
                    statusnum: 3,
                }
            },
            {
                _id: "elem-2SyQOSrK",
                attributes: {
                    label: "Mr. Easy",
                    clan: "Malkavian",
                    faction: "Anarchs",
                    generation: "Thirteenth",
                    age: "Neonate",
                    quote: "I'm sorry, I broke another one. But I already cleaned up! And I promise to be more careful with the next one.",
                    image: "https://imgur.com/PZ9kPUw.jpg",
                    "element type": "Kindred",
                    description: "Mr. Easy is a sadist, a rapist, and a pedophile. This is no secret. Why Max brought him into the Jarvis Jacks when no other coterie would have him is anyone's guess: he has the mind of a child and a soul as putrid as they come. On top of that, he's taken to compulsively Embracing kine, despite the fact that his weak blood consistently fails to create true vampires.",
                    statusnum: 0,
                    childer: [
                        "Kit Edwards",
                        "Toni Gomez",
                        "Wesley Richardson"
                    ],
                    associates: "Jarvis Jacks"
                }
            },
            {
                _id: "elem-2ZfwihlY",
                attributes: {
                    label: "Aryana Mortazavi",
                    clan: "Ministry",
                    faction: "Camarilla",
                    "element type": "Kindred",
                    statusnum: 1,
                    sire: "Cyrus Raza",
                    associates: "Ascetic Ministry"
                }
            },
            {
                _id: "elem-3JVB74Rq",
                attributes: {
                    label: "Toni Gomez",
                    clan: "Thin-Blooded",
                    faction: "Anarchs",
                    generation: "Fourteenth",
                    age: "Neonate",
                    quote: "Whatever.",
                    "element type": "Kindred",
                    statusnum: 0,
                    sire: "Mr. Easy",
                    associates: "Men-In-Black"
                }
            },
            {
                _id: "elem-3Rk81I5i",
                attributes: {
                    label: "Anita Morris",
                    clan: "Tremere",
                    faction: "Camarilla",
                    generation: "Thirteenth",
                    age: "Neonate",
                    quote: "My problems started when I got everything I wanted.",
                    image: "https://imgur.com/2DPcxdF.jpg",
                    "element type": "Kindred",
                    description: "... I mean look, we're monsters, we do shitty things. Yeah, I think I'm better than most, so I figured I had karma to spare when an opportunity presented itself to... um... to return to the fold. Besides, I saw the writing on the wall: No way can this madwoman and her thugs take on the Regent. Especially while we're all looking over our shoulders because our food has fucking militarized...",
                    statusnum: 1,
                }
            },
            {
                _id: "elem-48X4QAA6",
                attributes: {
                    label: "Johannes Napier",
                    clan: "Malkavian",
                    faction: "Anarchs",
                    age: "Neonate",
                    "element type": "Kindred",
                    statusnum: 2,
                    tags: [
                        "PC"
                    ],
                    sire: "Baroness Monika Eulenberg",
                    associates: "Masque"
                }
            },
            {
                _id: "elem-4vwbcIOl",
                attributes: {
                    label: "Fort York Cell",
                    faction: "Second Inquisition",
                    "element type": "Coalition"
                }
            },
            {
                _id: "elem-509gUGFU",
                attributes: {
                    label: "Christianne",
                    clan: "Toreador",
                    faction: "Camarilla",
                    age: "Neonate",
                    titles: "Harpy",
                    quote: "No, you vacuous halfwit, he didn't *dump* me. We wanted different things, is all: loyalty for me, treason for him. Besides, I heard he's doing odd jobs for the Setites now? I think they call that 'dodging a bullet'.",
                    image: "https://i.imgur.com/HjojZNk.jpg.jpg",
                    "element type": "Kindred",
                    description: "Christianne may be young among her Camarilla peers, but she is a Toronto native and has lived here her entire life. Admired and feared for her rapier wit in equal part, she and the Aristocrat are the sort of harpy-partnership with the power to bring princes to their knees with a few choice words at Elysium. Her cachet has only risen with the dramatic defection of the former sheriff Locke Ulrich to the Anarchs: they were assumed to be something of an item until then. Though Christianne has hidden the truth with characteristic Toreador aplomb, it is no great secret that she was as blindsided as everyone else.",
                    statusnum: 3,
                }
            },
            {
                _id: "elem-6FPBRlur",
                attributes: {
                    label: "The Giovanni",
                    faction: "Independent",
                    "element type": "Coalition"
                }
            },
            {
                _id: "elem-7BCT1PIE",
                attributes: {
                    label: "Jack-be-Nimble",
                    clan: "Nosferatu",
                    faction: "Anarchs",
                    age: "Neonate",
                    quote: "Head back now? There's still five minutes till sunrise!",
                    image: "https://imgur.com/Y5Qcmvj.jpg",
                    "element type": "Kindred",
                    description: "If anyone can be said to be a true expert of the city, it's Jack-be-Nimble. Jack was here a decade or two before the baroness rose to power, and he spent most of that time as a courier—a service that has become even more important in the wake of the Second Inquisition's increased scrutiny of the Internet. Even the Piece-Taker's domain isn't off limits to Jack: He's the only Anarch who dares to visit the place. Well, almost only.",
                    statusnum: 2,
                    associates: "The Line"
                }
            },
            {
                _id: "elem-7sUTa3p3",
                attributes: {
                    label: "Antoinne LaGritte",
                    "element type": "Mortal",
                    faction: "Mortals",
                    statusnum: 2,
                    subtype: "Civilian",
                }
            },
            {
                _id: "elem-9CWpMWQr",
                attributes: {
                    label: "Bob Johnston",
                    subtype: "Ghoul",
                    regnant: "Frederik Scheer, Seneschal",
                    statusnum: 0,
                    "element type": "Mortal"
                }
            },
            {
                _id: "elem-9kCRRaqW",
                attributes: {
                    label: "J",
                    clan: "Brujah",
                    faction: "Anarchs",
                    age: "Neonate",
                    quote: "Stop talking. It's not doing either one of us any good.",
                    image: "https://imgur.com/SzZdr5D.jpg",
                    "element type": "Kindred",
                    description: "\"J\" hardly impresses at first glance (indeed, a running joke about his name is that it's the longest he can spell). Of course, the fact that he has led such a large and violent group of Kindred so effectively for so long suggests there is much more to this Brujah than first impressions would suggest. It is, after all, in the interests of every vampire to manage expectations.",
                    statusnum: 2,
                    tags: [
                        "CoterieBoss"
                    ],
                    associates: "Nightwolves"
                }
            },
            {
                _id: "elem-9wJl3bKN",
                attributes: {
                    label: "Drake",
                    clan: "Nosferatu",
                    faction: "Camarilla",
                    age: "Elder",
                    titles: "Primogen",
                    quote: "You know all that you need to know. When this changes, you will know that, too.",
                    image: "https://imgur.com/NEGG6jD.jpg",
                    "element type": "Kindred",
                    description: "The Oubliette. The Whisper-Weaver. The Vault. Perpetually shrouded in sheer black silks, Drake speaks little, but when he does it is in the interests of everyone to pay attention: He wields his secrets like a surgeon’s scalpel, leveraging them for maximum impact with prescient timing. It is said that he claimed P.A.T.H, Toronto’s vast subterranean shopping complex, for Clan Nosferatu by uttering three words in confidence to Seneschal Scheer. For these reasons and the myriad unconfirmed rumors that accompanied them, Drake is among the most feared Camarilla elders in the country: an inscrutable boogeyman whose ultimate motives are always in doubt.",
                    statusnum: 5
                }
            },
            {
                _id: "elem-Ct4iVKZw",
                attributes: {
                    label: "Daylighters",
                    faction: "Anarchs",
                    "element type": "Coalition"
                }
            },
            {
                _id: "elem-DKNUAl3j",
                attributes: {
                    label: "Raphael Bishop",
                    clan: "Tremere",
                    faction: "Camarilla",
                    generation: "Ninth",
                    age: "Ancilla",
                    titles: "Scourge",
                    quote: "I don't enjoy all that I'm asked to do. But loyalty to the Pyramid is a virtue—especially in the wake of its fall.",
                    image: "https://imgur.com/l8sijLS.jpg",
                    "element type": "Kindred",
                    description: "Raphael Bishop is a creature of his sire's making——both literally and figuratively. Scheer kindled in his childe a zealous devotion to House Tremere and the Pyramid, and this fire has found plenty of fuel in modern nights: Bishop watched Vienna fall, taking the storied might of his clan along with it. He remembers what Clan Tremere *was*, and he shares with his sire a deep shame for its loss... and the will to get it back.",
                    statusnum: 3,
                    sire: "Frederik Scheer, Seneschal"
                }
            },
            {
                _id: "elem-E4dCgRtJ",
                attributes: {
                    label: "Men-In-Black",
                    faction: "Anarchs",
                    "element type": "Coalition"
                }
            },
            {
                _id: "elem-EbZYoX6M",
                attributes: {
                    label: "Second Inquisition",
                    "element type": "Faction"
                }
            },
            {
                _id: "elem-Gx2EWq17",
                attributes: {
                    label: "Wesley Richardson",
                    clan: "Thin-Blooded",
                    faction: "Anarchs",
                    generation: "Fourteenth",
                    age: "Neonate",
                    titles: "Daywalker",
                    quote: "The irony is I'm a lab rat; I've always hated the Sun.",
                    image: "https://imgur.com/jApLuvc.jpg",
                    "element type": "Kindred",
                    description: "Wesley Richardson is undoubtedly the most successful of Mr. Easy's bevy of thin-blooded childer. A chemist in life, he took naturally to the new alchemy of the duskborn, and his tendency towards pragmatism made his \"rehabilitation\" under his former hostage Wallflower quicker than his siblings in blood. Plus, Wesley is a rare daywalker who can endure the light of the Sun, positioning him to take leadership over the Daylighters in service to Baroness Eulenberg.",
                    statusnum: 2,
                    tags: [
                        "CoterieBoss"
                    ],
                    sire: "Mr. Easy",
                    associates: "Daylighters"
                }
            },
            {
                _id: "elem-HojD8Bj8",
                attributes: {
                    label: "Twist",
                    clan: "Nosferatu",
                    faction: "Anarchs",
                    age: "Neonate",
                    quote: "You think you know pain? You think you know misery? You don't. But I do, and I'm a very very good teacher.",
                    image: "https://imgur.com/vV8sjeM.jpg",
                    "element type": "Kindred",
                    description: "In life, Twist was a pampered playboy of one of Toronto's most successful crime families... until he ran afoul of Clan Nosferatu, and was cursed with the Embrace as punishment. As his body twisted and bloated into the hideous monstrosity he is tonight, so to did his shallow, superficial soul. Now, he exists to render the torture he feels every time he looks into a mirror onto others. Misery, it would seem, does indeed love its company.",
                    statusnum: 0,
                    associates: "Jarvis Jacks"
                }
            },
            {
                _id: "elem-IJMkc8Qp",
                attributes: {
                    label: "Mylene 'the Puck' Hamelin",
                    clan: "Ventrue",
                    faction: "Camarilla",
                    generation: "Tenth",
                    age: "Ancilla",
                    titles: "Primogen",
                    quote: "Why? Because if you don't I'll smash your fucking teeth in, that's why.",
                    image: "https://imgur.com/H9ZJ7Wy.jpg",
                    "element type": "Kindred",
                    description: "Not all Ventrue are traditional leaders: Mylene lacks most of the airs and graces of her clanmates. She is a hard-nosed, plain-speaking former solicitor who still fraternizes brazenly with the kine by dating mortal woman (often without feeding), happily swearing at her fellow council members when she disagrees with them, and giving out beatings to her own clan members when they fall out of line. Some believe she is called “the Puck” because of her fey appearance; in fact, it’s because she has all the subtlety of an ice hockey puck. Nevertheless, Hamelin is a popular primogen. She always drives forward her clan’s interests and brooks no dissent from the Anarchs.",
                    statusnum: 5,
                }
            },
            {
                _id: "elem-JZv7MPQU",
                attributes: {
                    label: "Harold Covington",
                    subtype: "Ghoul",
                    regnant: "Baroness Monika Eulenberg",
                    associates: "Daylighters",
                    statusnum: 0,
                    "element type": "Mortal"
                }
            },
            {
                _id: "elem-L9ICpAnS",
                attributes: {
                    label: "Independent",
                    "element type": "Faction"
                }
            },
            {
                _id: "elem-LDy8Lwea",
                attributes: {
                    label: "Alexander",
                    clan: "Lasombra",
                    faction: "Sabbat",
                    age: "Neonate",
                    quote: "Drink up. What, you think I put something in it?",
                    "element type": "Kindred",
                    description: "The young Sabbat Lasombra holds a rather significant distinction: He is the only known member of the Sword of Caine to establish himself in the city proper, away from Centre Island, thanks to the aid of a mysterious benefactor. What he intends to *do* with his unique position remains to be seen; it may be difficult for one so young to operate alone, but the Lasombra rarely go gently into the night.",
                    statusnum: 2,
                }
            },
            {
                _id: "elem-M14Fo6N1",
                attributes: {
                    label: "St. Michael's Cell",
                    faction: "Second Inquisition",
                    "element type": "Coalition"
                }
            },
            {
                _id: "elem-MYu9OR7K",
                attributes: {
                    label: "Calvin Wallace",
                    clan: "Brujah",
                    faction: "Anarchs",
                    age: "Neonate",
                    quote: "The Anarch Independence Movement is so much more than a neonate uprising! It is a revolution, and it will change the world!",
                    image: "https://imgur.com/1dp5Jwa.jpg",
                    "element type": "Kindred",
                    description: "A firebrand even by the standards of Clan Brujah, Calvin might seem to be an odd fit for a coterie like Red Flag, whose responsibilities require diplomacy and a light touch. Nevertheless, he was among the first names Rosie requested of the baroness; it seems she felt his passion would serve Red Flag's agenda well.",
                    statusnum: 3,
                    associates: "Red Flag"
                }
            },
            {
                _id: "elem-MgAs9E8z",
                attributes: {
                    label: "The Island Devil",
                    clan: "Nosferatu",
                    age: "Elder",
                    "element type": "Kindred",
                    statusnum: 0,
                    titles: "Autarkis"
                }
            },
            {
                _id: "elem-NpYpjBkN",
                attributes: {
                    label: "Yusef Shamsin",
                    clan: "Nosferatu",
                    faction: "Anarchs",
                    generation: "Twelfth",
                    age: "Neonate",
                    "element type": "Kindred",
                    statusnum: 2,
                    associates: "The Line"
                }
            },
            {
                _id: "elem-OESgHLev",
                attributes: {
                    label: "Ben Blinker",
                    clan: "Malkavian",
                    faction: "Anarchs",
                    generation: "Twelfth",
                    age: "Neonate",
                    quote: "Look into my pretty, pretty eyes.",
                    image: "https://imgur.com/VLwNWgz.jpg",
                    "element type": "Kindred",
                    description: "Ben Blinker's contribution to the Men-In-Black is obvious: his command of Dominate, particularly impressive for a neonate, is invaluable to his coterie's principal responsibility of protecting the Masquerade. That being said, Ben Blinker's penchant for causing as many messes as he cleans up is legendary; his need to \"keep things interesting\" is a problematic manifestation of his Curse of Malkav.",
                    statusnum: 2,
                    associates: "Men-In-Black"
                }
            },
            {
                _id: "elem-P0kEQ82z",
                attributes: {
                    label: "Nightwolves",
                    faction: "Anarchs",
                    "element type": "Coalition"
                }
            },
            {
                _id: "elem-PldNEafF",
                attributes: {
                    label: "Emily, the Dusk Rose",
                    clan: "Nosferatu",
                    faction: "Camarilla",
                    generation: "Tenth",
                    age: "Ancilla",
                    quote: "Shh, pet. Such luscious hair, such beautiful skin, such wide, wide eyes. I think I'll keep you, as our little secret.",
                    image: "https://i.imgur.com/vQrOy0Z.jpg.jpg",
                    "element type": "Kindred",
                    description: "Subtle, deadly, and sadistic, the knowledge that it is Emily who serves Sheriff Laz as Scourge (and not Raphael Bishop) has spread only slowly through the Camarilla and Toronto's Kindred community at large. Beautiful but for the tears of thick, foul-smelling ichor that continuously fall from her eyes, she is uniquely capable among the Nosferatu of being seen in public without threatening the Masquerade. There is no doubt that her clan takes full advantage of this, positioning the Dusk Rose as the Nosferatu most-frequently called upon whenever it is necessary to treat with the kine directly.",
                    statusnum: 2,
                    tags: [
                        "Officer"
                    ],
                }
            },
            {
                _id: "elem-QpPLSMc0",
                attributes: {
                    label: "Baroness Monika Eulenberg",
                    clan: "Malkavian",
                    faction: "Anarchs",
                    generation: "Eleventh",
                    age: "Ancilla",
                    titles: "Baroness",
                    quote: "The Camarilla may outnumber us, but my eyes are everywhere. And what do they see? A city ripe for the taking. It is only a matter of time until Toronto becomes the capital of a new Anarch Free State.",
                    image: "https://imgur.com/U97cOlO.jpg",
                    "element type": "Kindred",
                    description: "In life, Monika Eulenberg served the German Democratic Republic of Soviet-occupied East Berlin as an agent of the Ministry of State Security: the oppressive Stasi secret police. In death, her natural caution and professional paranoia grew pathological under the Curse of Malkav, forging a politically-savvy operator who quickly earned the respect of her Anarch associates. When the Beckoning created a power vacuum in Toronto, Monika seized the opportunity to declare herself baroness of the city and offered her aid to a reeling Camarilla—while efficiently leveraging a select number of loyal coteries into a strong Anarch foothold in one of the crown jewels of North America.",
                    statusnum: 5,
                    childer: [
                        "Carlos 'CD' Daniels",
                        "Eddie DeFrey",
                        "Harold Covington",
                        "Ralph Morgan",
                        "Ava Wong",
                        "Johannes Napier"
                    ]
                }
            },
            {
                _id: "elem-R4fd0WUH",
                attributes: {
                    label: "Wallflower",
                    clan: "Gangrel",
                    faction: "Anarchs",
                    age: "Neonate",
                    quote: "Stop worrying. We're going to make your problem go away, and we're going to have fun doing it!",
                    image: "https://imgur.com/wrYwpgR.jpg",
                    "element type": "Kindred",
                    description: "Toronto's Anarchs have a penchant for ironic names, and Wallflower is no exception. Combative, proud, and fiercely territorial, Wallflower is a dependable ally to have at your side: a blushing violet, she is not. Her coterie-mates in the Men-In-Black play their mindgames of subtle manipulation; Wallflower prefers to make her problems bleed, by tooth and by claw.",
                    statusnum: 1,
                    associates: "Men-In-Black"
                }
            },
            {
                _id: "elem-RRbawm9W",
                attributes: {
                    label: "Sabbat",
                    "element type": "Faction"
                }
            },
            {
                _id: "elem-S7mTm61e",
                attributes: {
                    label: "Redemption House",
                    faction: "Anarchs",
                    "element type": "Coalition"
                }
            },
            {
                _id: "elem-SQUJyRdD",
                attributes: {
                    label: "Ascetic Ministry",
                    faction: "Camarilla",
                    "element type": "Coalition"
                }
            },
            {
                _id: "elem-SwrPW5Du",
                attributes: {
                    label: "Cyrus Raza",
                    clan: "Ministry",
                    faction: "Camarilla",
                    "element type": "Kindred",
                    statusnum: 2,
                    childer: [
                        "Aryana Mortazavi",
                        "Soraya Mortazavi"
                    ],
                    associates: "Ascetic Ministry"
                }
            },
            {
                _id: "elem-UsJPURsi",
                attributes: {
                    label: "David Greene",
                    faction: "Mortals",
                    "element type": "Mortal",
                    statusnum: 3,
                    subtype: "Criminal",
                }
            },
            {
                _id: "elem-VNouRAtJ",
                attributes: {
                    label: "Alexandra",
                    clan: "Ministry",
                    faction: "Anarchs",
                    quote: "I am here to help however I can. What can I do to put your mind at ease?",
                    image: "https://imgur.com/xIMeIt5.jpg",
                    "element type": "Kindred",
                    description: "Of Ren's three childer, Alexandra is the beating heart that bridges the gulf between Kai's restless enthusiasm and Tyler's stoic pragmatism. The quintessential exemplar of still waters that run deep, Alexandra is quiet and thoughtful; intensely focused and unsettlingly unreadable. On one hand, she campaigned heavily to welcome Kingston Black into the close-knit Redeemer family; on the other, she appears to be the least interested in ingratiating herself with the Anarch population at large.",
                    statusnum: 1,
                    sire: "Ren",
                    associates: "Redemption House"
                }
            },
            {
                _id: "elem-WwKpxjvp",
                attributes: {
                    label: "Amos Jax",
                    clan: "Gangrel",
                    faction: "Anarchs",
                    age: "Neonate",
                    "element type": "Kindred",
                    statusnum: 1,
                    tags: [
                        "Dead"
                    ],
                    associates: "The Line"
                }
            },
            {
                _id: "elem-XIhzrpBK",
                attributes: {
                    label: "Red Flag",
                    faction: "Anarchs",
                    "element type": "Coalition"
                }
            },
            {
                _id: "elem-XM7Z3oB2",
                attributes: {
                    label: "The Aristocrat",
                    clan: "Nosferatu",
                    faction: "Camarilla",
                    generation: "Tenth",
                    age: "Ancilla",
                    titles: "Harpy",
                    quote: "Ta-daaa!",
                    image: "https://i.imgur.com/d6GuaE8.jpg.jpg",
                    "element type": "Kindred",
                    description: "The Aristocrat is an unlikely Nosferatu in more ways than one: A consummate socialite with a loud and flamboyant personality, he flaunts the characteristic subtlety of his clan to stand tall in the spotlight. This has made him one of Toronto's most popular Kindred, a welcome presence in Elysium and Anarch bars alike, with a circle of friends that transcends the boundaries of sect. Not only is he a respected Herald (or caustic Harpy, depending upon who you ask), he is widely thought of as the leader of Toronto's trio of Harpies. Finding oneself on the receiving end of the Aristocrat's scorn is arguably the surest way to torpedo one's respectability in an avalanche of scorn.",
                    statusnum: 3,
                }
            },
            {
                _id: "elem-XkNqkZGG",
                attributes: {
                    label: "Old Quentin",
                    clan: "Malkavian",
                    faction: "Anarchs",
                    quote: "Didn't your mother teach you it's rude to ask someone their age?",
                    image: "https://imgur.com/QRoycDh.jpg",
                    "element type": "Kindred",
                    description: "Old Quentin is perhaps the most mysterious Anarch in the city—and with a baroness like Monika, that's saying something. Young in appearance and young at heart, he's charmingly cagey when it comes to questions about his age. Is he really, as some whisper, a mighty elder laying low? Or is he a mere neonate enjoying such grandiose suspicions? And his Malkavian lineage invites another question: Does *he* even know? Whatever the case, Old Quentin has served the baroness ably and loyally, and as long as he continues to do so, she's hardly one to point fingers at the peculiarities of others.",
                    statusnum: 2,
                    associates: "Nightwolves"
                }
            },
            {
                _id: "elem-XnpyC7zX",
                attributes: {
                    label: "Camarilla",
                    "element type": "Faction"
                }
            },
            {
                _id: "elem-Y83v4eK0",
                attributes: {
                    label: "The Piece-Taker",
                    clan: "Banu Haqim",
                    faction: "Independent",
                    age: "Elder",
                    quote: "...",
                    "element type": "Kindred",
                    statusnum: 0,
                    titles: "Autarkis"
                }
            },
            {
                _id: "elem-Z3U2Kyd7",
                attributes: {
                    label: "Bertrice",
                    clan: "Gangrel",
                    faction: "Camarilla",
                    age: "Elder",
                    quote: "Bellanger makes my skin crawl: 'ooh, I broke a nail'. My nails don't break so easily.",
                    image: "https://imgur.com/xBD3G4b.jpg",
                    "element type": "Kindred",
                    description: "Beloved by the harpies, a rapier wit in Elysia, and possessed of beauty so refined she stuck an ever-present thorn in Primogen Bellanger’s side, Bertrice is as far from the typical Gangrel as one can get: her affinity for boardrooms and salons ensured that she continued to be welcome on the Council of Primogen long after Justicar Xavier announced the exodus of Clan Gangrel from the Ivory Tower. Recently incensed by Prince Lowell's favourable treatment of Clan Brujah, she abandoned her title and departed for the north of the city. Whether she intends to stay loyal to the Camarilla or declare herself the city's third autarkis remains to be seen.",
                    statusnum: 4,
                }
            },
            {
                _id: "elem-Z4016NLf",
                attributes: {
                    label: "Agnes Bellanger",
                    clan: "Toreador",
                    faction: "Camarilla",
                    generation: "Eighth",
                    age: "Elder",
                    titles: "Primogen",
                    quote: "Darling, I've taken the liberty of cleaning up your mess. I'll let you know when and how you can thank me.",
                    image: "https://imgur.com/B5KSRuF.jpg",
                    "element type": "Kindred",
                    description: "Born a peasant girl, captured by pirates, and sold in Istanbul to her eventual sire, Agnes has lived a storied history that brought her to Toronto (then Fort York) in the 1800s. After a century travelling Europe, she returned to the city in the 1970's and established herself in her former haven: the opulant palace of Casa Loma. There, her pedigree, political prowess, and thirst for vengeance against the Sword of Caine saw her swiftly rise to power as the foremost vampire of the Clan of the Rose. Agnes Bellanger continues to serve on the Council of Primogen, and oversees the city's most popular Elysium at the castle she has made her home.",
                    statusnum: 5,
                }
            },
            {
                _id: "elem-ZnzasEKn",
                attributes: {
                    label: "Leah Hawk",
                    clan: "Gangrel",
                    faction: "Anarchs",
                    age: "Neonate",
                    quote: "Put your fangs away. We're going to have a polite conversation, and then you're going to tell me everything I need to know.",
                    image: "https://imgur.com/Rob69iX.jpg",
                    "element type": "Kindred",
                    description: "Leah Hawk is as much a hunter as her Gangrel kin, though her quarry is unconventional: The prey she stalks is information, leverage, and she runs it down with all the tenacity of a wolf. As a member of the Nightwolves, Leah serves to balance her more blood-thirsty coterie-mates; without her (and Old Quentin), the Nightwolves would be hard-pressed to accomplish anything approaching subtlety.",
                    statusnum: 1,
                    associates: "Nightwolves"
                }
            },
            {
                _id: "elem-ZrfXmSdf",
                attributes: {
                    label: "Rosie",
                    clan: "Nosferatu",
                    faction: "Anarchs",
                    age: "Ancilla",
                    titles: "Emissary",
                    quote: "Your willingness to sit at my table tells me all I need to know.",
                    image: "https://imgur.com/yiJo1LA.jpg",
                    "element type": "Kindred",
                    description: "A Nosferatu may seem an odd fit for the preeminent diplomat among the Anarchs in Toronto, but Rosie has at least fifty years of experience negotiating with dangerous predators—and her record of success speaks for itself. Emphasizing mutual self-interest and refreshing (if biting) authenticity, Rosie was always the obvious choice to lead Red Flag's overtures to the Camarilla on behalf of the Anarch Movement.",
                    statusnum: 4,
                    associates: "Red Flag"
                }
            },
            {
                _id: "elem-ZuxCijD4",
                attributes: {
                    label: "Alistair Etrata",
                    clan: "Banu Haqim",
                    faction: "Camarilla",
                    age: "Elder",
                    titles: "Primogen",
                    quote: "I am no Assamite. Those you call Assamites are the enemies of my people. Thralls to the blood god Ur-Shulgi, they cloister themselves at Alamut—for now.",
                    image: "https://i.imgur.com/1eenDNe.jpg.jpg",
                    "element type": "Kindred",
                    description: "Arriving in Toronto at the invitation of an Anarch is an unlikely start for a primogen. Nevertheless, he found himself in a city experiencing a power vacuum just as the Banu Haqim had been admitted into the Camarilla, and he exploited these circumstances adroitly——undoubtedly assisted by the strength of his old Blood. In a very short period of time, he demonstrated both his loyalty to the Camarilla and his ability to serve his clan as their primogen. His activities since have been subtle: either Alistair is wary of causing anyone to regret his appointment, or——more likely——he is guarding his intentions from everyone except, perhaps, his childe Sinclair.",
                    statusnum: 5,
                    childer: [
                        "Sinclair Rodriguez"
                    ]
                }
            },
            {
                _id: "elem-a99tfhqN",
                attributes: {
                    label: "University of Toronto",
                    "element type": "Faction"
                }
            },
            {
                _id: "elem-aUhyDcYm",
                attributes: {
                    label: "Mason Schmidt",
                    clan: "Brujah",
                    faction: "Anarchs",
                    age: "Neonate",
                    quote: "Union Station is half a million square feet of twisting corridors, dozens of entrances, and two hundred thousand daily travellers. Keeping unwanted visitors out of there? It's only part of our job.",
                    image: "https://imgur.com/rhJ1SxF.jpg",
                    "element type": "Kindred",
                    description: "There are downsides to having an incommunicative Malkavian prophet as your Boss, and inflexibility in the field is one of them. Mason Schmidt was Embraced to solve this problem. He had distinguished himself at the RMC military academy, where his keen strategic mind earned him top honors in military wargame exercises. Schmidt acts as the Line's tactical command, with full authority in the field to... \"calibrate\" Sage Sam's orders with the facts on the ground.",
                    statusnum: 2,
                    associates: "The Line"
                }
            },
            {
                _id: "elem-bHD13BvR",
                attributes: {
                    label: "Bookies",
                    "element type": "Faction"
                }
            },
            {
                _id: "elem-bM2O8jfK",
                attributes: {
                    label: "The Line",
                    faction: "Anarchs",
                    "element type": "Coalition"
                }
            },
            {
                _id: "elem-bSg6Vn3k",
                attributes: {
                    label: "Ava Wong",
                    clan: "Malkavian",
                    faction: "Anarchs",
                    age: "Neonate",
                    "element type": "Kindred",
                    statusnum: 2,
                    tags: [
                        "PC"
                    ],
                    sire: "Baroness Monika Eulenberg",
                    associates: "Masque"
                }
            },
            {
                _id: "elem-cYLgsFYJ",
                attributes: {
                    label: "Locke Ulrich",
                    clan: "Ventrue",
                    faction: "Anarchs",
                    age: "Ancilla",
                    "element type": "Kindred",
                    statusnum: 2,
                    tags: [
                        "PC"
                    ],
                    sire: "Prince Osborne Lowell",
                    associates: "Masque"
                }
            },
            {
                _id: "elem-cq22SLcu",
                attributes: {
                    label: "Laz, Sheriff",
                    clan: "Nosferatu",
                    faction: "Camarilla",
                    age: "Ancilla",
                    titles: "Sheriff",
                    quote: "Am I really the only one who gives a flying fuck about this city?",
                    image: "https://imgur.com/uuDyDgH.jpg",
                    "element type": "Kindred",
                    description: "As Camarilla sheriff, Laz stands on the front lines of Toronto's defense: the responsibility for keeping the city secure ultimately rests on his shoulders. But with so many Camarilla elders abandoning their domains for the Middle East, Laz is becoming desperate: desperate enough to pursue an alliance with the Anarchs, which has made him less than popular among the remaining Camarilla old guard.",
                    statusnum: 4,
                    tags: [
                        "Officer"
                    ],
                }
            },
            {
                _id: "elem-dbi4GPVq",
                attributes: {
                    label: "Dr. Arthur Roy",
                    clan: "Tremere",
                    faction: "Anarchs",
                    age: "Neonate",
                    "element type": "Kindred",
                    statusnum: 3,
                    tags: [
                        "PC",
                        "CoterieBoss"
                    ],
                    associates: "Masque"
                }
            },
            {
                _id: "elem-fII3nKC1",
                attributes: {
                    label: "Heralds",
                    faction: "Camarilla",
                    "element type": "Coalition"
                }
            },
            {
                _id: "elem-fTzC73rY",
                attributes: {
                    label: "Kai",
                    clan: "Ministry",
                    faction: "Anarchs",
                    quote: "Woo! What a night, am I right? Same time tomorrow, then?",
                    image: "https://imgur.com/WuzsqlA.jpg",
                    "element type": "Kindred",
                    description: "Of Ren's three childer, Kai is the relentlessly-free spirit that spurs ever-cautious Tyler to action and invests ever-tranquil Alexandra with conviction. It was Kai who persuaded the Redeemers to fight on the night of Vykos' attack, in spite of the icy reception the Ministry had received from the Anarchs before then. As the youngest of the Redeemers, Kai has yet to develop the innate paranoia characteristic of the Kindred; whether his eagerness to trust others is a strength or a weakness remains to be seen.",
                    statusnum: 1,
                    sire: "Ren",
                    associates: "Redemption House"
                }
            },
            {
                _id: "elem-gEfLoW0o",
                attributes: {
                    label: "Jane 'JD' Doe",
                    clan: "Brujah",
                    faction: "Anarchs",
                    age: "Neonate",
                    quote: "Last night I was Sister Selene, who proved unable to unburden her petitioner of his 'delusions'. Tonight I will be Candy: perhaps the sins of the flesh can do what God could not.",
                    image: "https://imgur.com/Mfva68Z.jpg",
                    "element type": "Kindred",
                    description: "Jane Doe is not her real name, but that hardly matters: She becomes someone new every night, adopting personas and aliases as easily as a new pair of shoes. Even her closest allies aren't sure if they've ever met the \"real\" Brujah behind the ever-changing masks. As boss of the Men-In-Black, Jane bears ultimate responsibility for upholding the Masquerade—and the baroness has given her unprecedented latitude to do whatever she deems necessary to carry out this duty.",
                    statusnum: 3,
                    tags: [
                        "CoterieBoss"
                    ],
                    associates: "Men-In-Black"
                }
            },
            {
                _id: "elem-gRiuz7r9",
                attributes: {
                    label: "Prince Osborne Lowell",
                    clan: "Ventrue",
                    faction: "Camarilla",
                    generation: "Ninth",
                    age: "Ancilla",
                    titles: "Prince",
                    quote: "Do you think I enjoy overseeing this shell of a former city? I serve because I must. I serve because no one else will.",
                    image: "https://imgur.com/JK6cnOr.jpg",
                    "element type": "Kindred",
                    description: "Under the Iron Praxis, no one would have predicted that this unassuming ancilla would eventually rule the city as prince. He was known and respected, of that there is no doubt, but his ambitions were less grand than most——especially among the Ventrue. One may assume that his eventual (and, by all outward appearances, reluctant) rise to the throne was the result of a compromise among those older and more powerful: the choice that ruffled the fewest feathers, a candidate who could be kept on a short leash.",
                    statusnum: 5,
                    childer: [
                        "Locke Ulrich"
                    ]
                }
            },
            {
                _id: "elem-gvt53mKm",
                attributes: {
                    label: "Masque",
                    faction: "Anarchs",
                    "element type": "Coalition"
                }
            },
            {
                _id: "elem-i3TfghPo",
                attributes: {
                    label: "Jarvis Jacks",
                    faction: "Anarchs",
                    "element type": "Coalition"
                }
            },
            {
                _id: "elem-iJ6Oj4YP",
                attributes: {
                    label: "Kit Edwards",
                    clan: "Thin-Blooded",
                    faction: "Anarchs",
                    generation: "Fourteenth",
                    age: "Neonate",
                    "element type": "Kindred",
                    statusnum: 0,
                    sire: "Mr. Easy",
                    associates: "Men-In-Black"
                }
            },
            {
                _id: "elem-jAZtFSJG",
                attributes: {
                    label: "Xavier Whitchurch",
                    clan: "Ventrue",
                    faction: "Camarilla",
                    age: "Neonate",
                    titles: "Harpy",
                    quote: "It is not my *duty* to remind you of what you owe and to whom. It is my *privilege* to make you into an example so persuasive that no one else will mistake the obligations of prestation for a dead custom of times gone by.",
                    image: "https://i.imgur.com/xZ91V4n.jpg.jpg",
                    "element type": "Kindred",
                    description: "Of Toronto's three harpies, Xavier doesn't claim the spotlight with the same effervescent ease shared by the Aristocrat and Christianne. But it is precisely because of Xavier's dedication to his work that his two coterie-mates are free to shine so brightly. For it is a city's harpies who are the ultimate caretakers of prestation, the economy of favors owed and repaid, without which civil Kindred society may well collapse. Xavier's approach to upholding prestation is unconventional: Ill-tempered for detailed book-keeping, he instead elects for deterrence. With the Puck's enthusiastic support, Xavier makes any violations of the custom very painful, very public, and utterly unforgettable.",
                    statusnum: 3,
                }
            },
            {
                _id: "elem-kBeJZyWZ",
                attributes: {
                    label: "Ren",
                    clan: "Ministry",
                    faction: "Anarchs",
                    quote: "Do not be afraid: the path to redemption always begins in the dark. Take my hand, and we will find the light together.",
                    image: "https://imgur.com/h9ylClE.jpg",
                    "element type": "Kindred",
                    description: "The enigmatic and rarely-seen sire and leader of the Redeemers, Ren sits at the center of Ministry activity in Toronto. He effortlessly commands the unquestioning devotion of his childer, who speak his name with nigh Messianic fervor. To hear them tell it, an hour of Ren's counsel is a boon worthy of a prince—and there is evidence to support their assessment: Throngs of kine living in the Danforth have been transformed by his teachings at Redemption House, and Ren has apparently tamed even the fierce independence of the strong-willed Anarch Kingston Black, the former boss of Masque.",
                    statusnum: 2,
                    tags: [
                        "CoterieBoss"
                    ],
                    childer: [
                        "Alexandra",
                        "Kai",
                        "Tyler"
                    ],
                    associates: "Redemption House"
                }
            },
            {
                _id: "elem-ldkC4JnZ",
                attributes: {
                    label: "Reaper",
                    clan: "Gangrel",
                    faction: "Anarchs",
                    age: "Neonate",
                    quote: "Shhhhhh. Sleep, now. This doesn't have to hurt.",
                    image: "https://imgur.com/6jw7dMt.jpg",
                    "element type": "Kindred",
                    description: "Reaper is as centered as he is vicious, approaching the grizly work at which he excels with Zen-like serenity. And excel he does; the \"Reaper\" sobriquet was bestowed on him by J in recognition of the fact that he has ended the lives and unlives of more of the Anarch Movement's enemies than anyone else in the city—and the body count continues to rise.",
                    statusnum: 1,
                    associates: "Nightwolves"
                }
            },
            {
                _id: "elem-lgEiuLTv",
                attributes: {
                    label: "Suyin",
                    faction: "Anarchs",
                    "element type": "Mortal",
                    statusnum: 2,
                    subtype: "Civilian",
                    associates: "The Line"
                }
            },
            {
                _id: "elem-mXLn3Y2p",
                attributes: {
                    label: "Anarch",
                    "element type": "Faction"
                }
            },
            {
                _id: "elem-mYdmZEeM",
                attributes: {
                    label: "Kingston 'King' Black",
                    clan: "Brujah",
                    faction: "Anarchs",
                    generation: "Twelfth",
                    age: "Neonate",
                    quote: "This House holds secrets I need to know, and I am stronger than they think.",
                    "element type": "Kindred",
                    statusnum: 1,
                    sire: "Maxwell 'Max' Floyd",
                    associates: "Redemption House"
                }
            },
            {
                _id: "elem-ntChar2V",
                attributes: {
                    label: "Soraya Mortazavi",
                    clan: "Ministry",
                    faction: "Camarilla",
                    "element type": "Kindred",
                    statusnum: 1,
                    sire: "Cyrus Raza",
                    associates: "Ascetic Ministry"
                }
            },
            {
                _id: "elem-oBij42Jr",
                attributes: {
                    label: "Eddie DeFrey",
                    subtype: "Ghoul",
                    regnant: "Baroness Monika Eulenberg",
                    associates: "Daylighters",
                    statusnum: 0,
                    "element type": "Mortal"
                }
            },
            {
                _id: "elem-oG2fWCPA",
                attributes: {
                    label: "Bacchus Giovanni",
                    clan: "Hecata",
                    faction: "Independent",
                    age: "Ancilla",
                    "element type": "Kindred",
                    statusnum: 0,
                }
            },
            {
                _id: "elem-pDc4YXJ2",
                attributes: {
                    label: "Stalker Todd",
                    clan: "Gangrel",
                    faction: "Anarchs",
                    age: "Neonate",
                    quote: "Please, run. Dawn approaches; you might even get away.",
                    image: "https://imgur.com/jdWasdY.jpg",
                    "element type": "Kindred",
                    description: "There is perhaps no more effective hunter among the Anarchs than Stalker Todd. Patient, thorough, calculating and meticulous, once he has caught wind of his quarry, there is no escape. He relishes the hunt, and its end even more—each kill is a work of art; a statement that cannot be ignored; a warning to others who would stand against the baroness.",
                    statusnum: 1,
                    associates: "Nightwolves"
                }
            },
            {
                _id: "elem-pmjK5sNF",
                attributes: {
                    label: "Jason",
                    clan: "Gangrel",
                    faction: "Anarchs",
                    age: "Neonate",
                    quote: "Just a thought, but has anyone considered *not* murder?",
                    image: "https://imgur.com/cAcnc48.jpg",
                    "element type": "Kindred",
                    description: "In contrast to sharing his chosen name with a brutal horror movie monster, Jason lacks the feral nature typical of the Gangrel—indeed, he is among the more measured voices in the Anarch Movement. This isn't to say the boy lacks teeth: His rivalry with Ben Blinker is legendary, fraught with frequent games of one-upsmanship that more than once have threatened to drive the Men-In-Black apart.",
                    statusnum: 2,
                    associates: "Men-In-Black"
                }
            },
            {
                _id: "elem-q6140QEx",
                attributes: {
                    label: "Cardinal Collins",
                    faction: "Second Inquisition",
                    titles: "High Inquisitor",
                    "element type": "Mortal",
                    statusnum: 5,
                    subtype: "St. Leopold",
                    associates: "St. Michael's Cell"
                }
            },
            {
                _id: "elem-qiC1nUCh",
                attributes: {
                    label: "Council of Primogen",
                    faction: "Camarilla",
                    "element type": "Coalition"
                }
            },
            {
                _id: "elem-qp0cI8dD",
                attributes: {
                    label: "Sage Sam",
                    clan: "Malkavian",
                    faction: "Anarchs",
                    age: "Ancilla",
                    quote: "... the scholar met the silent and the white knight chose a side and the island dark touched the gilded cage and the asps circled their king and all joined hands and sent up a flare ...",
                    image: "https://imgur.com/F6xF17A.jpg",
                    "element type": "Kindred",
                    description: "Cursed with a never-ending stream of prophecy that must be spoken aloud, Sage Sam wears a perpetual cloak of silence and communicates via sign language with the help of his mortal wife, Suyin, now almost ninety years of age. As boss of the Line, the baroness has entrusted Sam with securing Toronto's borders and managing inter-city travel.",
                    statusnum: 3,
                    tags: [
                        "CoterieBoss"
                    ],
                    associates: "The Line"
                }
            },
            {
                _id: "elem-r0E7356g",
                attributes: {
                    label: "Flamenco",
                    faction: "Second Inquisition",
                    titles: "Agent",
                    "element type": "Mortal",
                    statusnum: 3,
                    subtype: "FIRSTLIGHT",
                    associates: "St. Michael's Cell"
                }
            },
            {
                _id: "elem-rDlYIMT8",
                attributes: {
                    label: "Professor Ethan Keen",
                    clan: "Malkavian",
                    faction: "Anarchs",
                    age: "Neonate",
                    quote: "In conclusion, I submit a seventy percent confidence in the legitimacy of the sheriff's professed good intentions.",
                    image: "https://imgur.com/np6xHAy.jpg",
                    "element type": "Kindred",
                    description: "Professor Ethan Keen is a peerless expert on the psychology of emotion, an impressive feat given he has been incapable of feeling emotions of any kind since his Embrace into the Clan of Malkav. His rational analysis and piercing insights into the Kindred psyche are invaluable to Red Flag's diplomatic efforts, albeit on the back lines—his calculating demeanor is an ill fit to the nuances of negotiation.",
                    statusnum: 3,
                    associates: "Red Flag"
                }
            },
            {
                _id: "elem-s9P0pamU",
                attributes: {
                    label: "Ralph Morgan",
                    subtype: "Ghoul",
                    regnant: "Baroness Monika Eulenberg",
                    associates: "Daylighters",
                    statusnum: 0,
                    "element type": "Mortal"
                }
            },
            {
                _id: "elem-tsO3O6DH",
                attributes: {
                    label: "Adrian Gerrard",
                    clan: "Brujah",
                    faction: "Camarilla",
                    generation: "Eighth",
                    age: "Elder",
                    quote: "I am not Theo Bell. We grieve with our Ventrue brothers over the loss of Hardestadt, and will honor the legacy of Prince Steele for as long as you will have us.",
                    image: "https://imgur.com/tidZJ57.jpg",
                    "element type": "Kindred",
                    description: "As primogen, Gerrard served Prince Steele as a capable administrator, accountant, and power broker, claiming more influence over the investment and commercial banks of Toronto than any other Kindred. Tonight, he remains the eldest Brujah in the city, and works diligently to restore his clan's former place in the Camarilla after the treachery of Theo Bell at the Conclave of Prague and his unceremonious expulsion from the Council of Primogen.",
                    statusnum: 3,
                }
            },
            {
                _id: "elem-u9o2DTre",
                attributes: {
                    label: "Carlos 'CD' Daniels",
                    subtype: "Ghoul",
                    regnant: "Baroness Monika Eulenberg",
                    associates: "Daylighters",
                    statusnum: 0,
                    "element type": "Mortal"
                }
            },
            {
                _id: "elem-uZrkGhby",
                attributes: {
                    label: "Anarchs",
                    "element type": "Faction"
                }
            },
            {
                _id: "elem-vCYi7JE6",
                attributes: {
                    label: "Tyler",
                    clan: "Ministry",
                    faction: "Anarchs",
                    quote: "Sex, drugs, rock n' roll. Don't give into one of them. Give in to 'em all... in moderation. That's the ticket.",
                    image: "https://imgur.com/7rv5jq9.jpg",
                    "element type": "Kindred",
                    description: "Of Ren's three childer, Tyler is the rock that anchors Alexandra's lofty idealism and grounds Kai's more-reckless impulses. The eldest of Ren's childer, Tyler is protective of his sire and wary of potential threats to his unlife; as such, he is more reluctant than his siblings to welcome others into their circle of trust.",
                    statusnum: 1,
                    sire: "Ren",
                    associates: "Redemption House"
                }
            },
            {
                _id: "elem-vW7ZJ6Zk",
                attributes: {
                    label: "Frederik Scheer, Seneschal",
                    clan: "Tremere",
                    faction: "Camarilla",
                    generation: "Eighth",
                    age: "Elder",
                    titles: "Seneschal",
                    quote: "The Camarilla has held Toronto for four hundred years, and we shall hold it for four hundred more.",
                    image: "https://imgur.com/lTYDFr4.jpg",
                    "element type": "Kindred",
                    description: "Frederik Scheer has been a driving force behind Camarilla control over Toronto for at least two hundred years. As seneschal to the indomitable Prince Steele, Scheer developed a reputation for ruthless loyalty to the Ivory Tower. Tonight, with a new and untested ancilla holding Praxis, his power has only grown——causing many to wonder who *really* calls the shots in the city.",
                    statusnum: 5,
                    childer: [
                        "Bob Johnston",
                        "Raphael Bishop"
                    ]
                }
            },
            {
                _id: "elem-wSqntIy8",
                attributes: {
                    label: "Maxwell 'Max' Floyd",
                    clan: "Brujah",
                    faction: "Anarchs",
                    generation: "Eleventh",
                    age: "Neonate",
                    quote: "You must be pretty fucking desperate to come down here to treat with the trash. That's fine by me. I can work with desperate.",
                    image: "https://imgur.com/mH1xwLJ.jpg",
                    "element type": "Kindred",
                    description: "It's better to reign in Hell than to serve in Heaven, and Max has certainly carved out a hellish principality for himself and his small coterie of ill repute. Until recently, the Jarvis Jacks controlled the largest Anarch domain in Toronto despite being the smallest Anarch coterie. Sure, their territory is hardly sought after, but the Jarvis Jacks' lucrative grip on the city's crime is iron-clad—and completely unopposed.",
                    statusnum: 1,
                    tags: [
                        "CoterieBoss"
                    ],
                    childer: [
                        "Kingston 'King' Black"
                    ],
                    associates: "Jarvis Jacks"
                }
            },
            {
                _id: "elem-xZYFQ1OL",
                attributes: {
                    label: "Jonathan Harker",
                    faction: "Second Inquisition",
                    titles: "Junior Agent",
                    "element type": "Mortal",
                    statusnum: 2,
                    subtype: "FIRSTLIGHT",
                    associates: "St. Michael's Cell"
                }
            },
            {
                _id: "elem-xcMt8om4",
                attributes: {
                    label: "Sinclair Rodriguez",
                    clan: "Banu Haqim",
                    faction: "Camarilla",
                    "element type": "Kindred",
                    statusnum: 1,
                    sire: "Alistair Etrata"
                }
            },
            {
                _id: "elem-yAq5SvWd",
                attributes: {
                    label: "Damien Abanda",
                    clan: "Toreador",
                    faction: "Anarchs",
                    age: "Neonate",
                    quote: "Appearances can be deceiving, yes, but they can also be impressive. Should we not aim to impress our supposed betters?",
                    image: "https://imgur.com/qady8T3.jpg",
                    "element type": "Kindred",
                    description: "Damien Abanda has a chip on his shoulder: as the only Toreador Anarch in the city, he obviously considers himself to be the resident expert in etiquette, style, presentation and Camarilla sensibilities. On this, he may even be right: Rosie herself defers to his opinions on such matters, even if she rarely allows his condescending attitude anywhere near the negotiations themselves.",
                    statusnum: 3,
                    associates: "Red Flag"
                }
            },
            {
                _id: "elem-yWU8seC6",
                attributes: {
                    label: "Sang-Froid",
                    clan: "Nosferatu",
                    faction: "Sabbat",
                    "element type": "Kindred",
                    statusnum: 1,
                }
            },
        ],
        connections: [
            {
                _id: "conn-0BFD0oJt",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Membership"
                },
                from: "elem-HojD8Bj8",
                to: "elem-i3TfghPo"
            },
            {
                _id: "conn-0FmYWz0j",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Membership"
                },
                from: "elem-u9o2DTre",
                to: "elem-Ct4iVKZw"
            },
            {
                _id: "conn-0K8Dqiv1",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Membership"
                },
                from: "elem-XkNqkZGG",
                to: "elem-P0kEQ82z"
            },
            {
                _id: "conn-0wetRmpj",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Sire"
                },
                from: "elem-DKNUAl3j",
                to: "elem-vW7ZJ6Zk"
            },
            {
                _id: "conn-16H1wl2d",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Subgroup"
                },
                from: "elem-M14Fo6N1",
                to: "elem-EbZYoX6M"
            },
            {
                _id: "conn-1leuc2lp",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Membership"
                },
                from: "elem-lgEiuLTv",
                to: "elem-qp0cI8dD"
            },
            {
                _id: "conn-2AFEPfqq",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Boss"
                },
                from: "elem-kBeJZyWZ",
                to: "elem-S7mTm61e"
            },
            {
                _id: "conn-2Sjtc0v7",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Membership"
                },
                from: "elem-r0E7356g",
                to: "elem-M14Fo6N1"
            },
            {
                _id: "conn-2gZyvzSv",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Boss"
                },
                from: "elem-qp0cI8dD",
                to: "elem-bM2O8jfK"
            },
            {
                _id: "conn-324ho6QZ",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Membership"
                },
                from: "elem-ZuxCijD4",
                to: "elem-qiC1nUCh"
            },
            {
                _id: "conn-3ucbutC9",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Membership"
                },
                from: "elem-3JVB74Rq",
                to: "elem-E4dCgRtJ"
            },
            {
                _id: "conn-4GzYbk3m",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Boss"
                },
                from: "elem-AJSSxwK2",
                to: "elem-XnpyC7zX"
            },
            {
                _id: "conn-4IdPUFKb",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Boss"
                },
                from: "elem-q6140QEx",
                to: "elem-EbZYoX6M"
            },
            {
                _id: "conn-4JavUSHz",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Boss"
                },
                from: "elem-q6140QEx",
                to: "elem-M14Fo6N1"
            },
            {
                _id: "conn-595Qafd6",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Membership"
                },
                from: "elem-48X4QAA6",
                to: "elem-gvt53mKm"
            },
            {
                _id: "conn-5HxFVyLO",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Subgroup"
                },
                from: "elem-r2OyZSd6",
                to: "elem-XnpyC7zX"
            },
            {
                _id: "conn-5MCAPljD",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Sire"
                },
                from: "elem-Gx2EWq17",
                to: "elem-2SyQOSrK"
            },
            {
                _id: "conn-5Xk8tok4",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Membership"
                },
                from: "elem-Y83v4eK0",
                to: "elem-xMaVpYbo"
            },
            {
                _id: "conn-6PLGqwJj",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Subgroup"
                },
                from: "elem-4vwbcIOl",
                to: "elem-EbZYoX6M"
            },
            {
                _id: "conn-767gIyot",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Membership"
                },
                from: "elem-S7mTm61e",
                to: "elem-uZrkGhby"
            },
            {
                _id: "conn-85KOiNpI",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Regnant"
                },
                from: "elem-oBij42Jr",
                to: "elem-QpPLSMc0"
            },
            {
                _id: "conn-99CNk1Am",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Regnant"
                },
                from: "elem-QpPLSMc0",
                to: "elem-oBij42Jr"
            },
            {
                _id: "conn-9d579Owc",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Membership"
                },
                from: "elem-ZnzasEKn",
                to: "elem-P0kEQ82z"
            },
            {
                _id: "conn-9gAo8L2z",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Membership"
                },
                from: "elem-Ct4iVKZw",
                to: "elem-uZrkGhby"
            },
            {
                _id: "conn-Afr08n8f",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Membership"
                },
                from: "elem-rDlYIMT8",
                to: "elem-XIhzrpBK"
            },
            {
                _id: "conn-BUEzms8c",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Regnant"
                },
                from: "elem-QpPLSMc0",
                to: "elem-u9o2DTre"
            },
            {
                _id: "conn-C66kW9DB",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Membership"
                },
                from: "elem-2SyQOSrK",
                to: "elem-i3TfghPo"
            },
            {
                _id: "conn-COw44cUJ",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Membership"
                },
                from: "elem-pmjK5sNF",
                to: "elem-E4dCgRtJ"
            },
            {
                _id: "conn-CZWJDw3H",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Membership"
                },
                from: "elem-7BCT1PIE",
                to: "elem-bM2O8jfK"
            },
            {
                _id: "conn-D1nox7Qa",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Membership"
                },
                from: "elem-NpYpjBkN",
                to: "elem-bM2O8jfK"
            },
            {
                _id: "conn-D3YP29k9",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Membership"
                },
                from: "elem-7sUTa3p3",
                to: "elem-Z5q59lKJ"
            },
            {
                _id: "conn-D9P98Dvo",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Membership"
                },
                from: "elem-3Rk81I5i",
                to: "elem-XnpyC7zX"
            },
            {
                _id: "conn-DAo91Vlz",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Membership"
                },
                from: "elem-Z3U2Kyd7",
                to: "elem-XnpyC7zX"
            },
            {
                _id: "conn-DbSpZs3L",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Boss"
                },
                from: "elem-wSqntIy8",
                to: "elem-i3TfghPo"
            },
            {
                _id: "conn-Ddit6OHd",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Subgroup"
                },
                from: "elem-P0kEQ82z",
                to: "elem-uZrkGhby"
            },
            {
                _id: "conn-DexHFHdW",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Regnant"
                },
                from: "elem-JZv7MPQU",
                to: "elem-QpPLSMc0"
            },
            {
                _id: "conn-DwQVQZGN",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Boss"
                },
                from: "elem-UsJPURsi",
                to: "elem-bHD13BvR"
            },
            {
                _id: "conn-DwSafhZb",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Membership"
                },
                from: "elem-i3TfghPo",
                to: "elem-uZrkGhby"
            },
            {
                _id: "conn-EGbq4gOA",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Membership"
                },
                from: "elem-fTzC73rY",
                to: "elem-S7mTm61e"
            },
            {
                _id: "conn-EGppMLcD",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Membership"
                },
                from: "elem-9wJl3bKN",
                to: "elem-qiC1nUCh"
            },
            {
                _id: "conn-ELooE5rh",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Membership"
                },
                from: "elem-iJ6Oj4YP",
                to: "elem-E4dCgRtJ"
            },
            {
                _id: "conn-EgjcpH9P",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Regnant"
                },
                from: "elem-vW7ZJ6Zk",
                to: "elem-9CWpMWQr"
            },
            {
                _id: "conn-FHGcbW2F",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Membership"
                },
                from: "elem-MgAs9E8z",
                to: "elem-xMaVpYbo"
            },
            {
                _id: "conn-FURMZ6bl",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Membership"
                },
                from: "elem-VNouRAtJ",
                to: "elem-S7mTm61e"
            },
            {
                _id: "conn-FrH8Kf0B",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Membership"
                },
                from: "elem-WwKpxjvp",
                to: "elem-bM2O8jfK"
            },
            {
                _id: "conn-Fyd78L63",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Membership"
                },
                from: "elem-bM2O8jfK",
                to: "elem-uZrkGhby"
            },
            {
                _id: "conn-G7tp85Tu",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Membership"
                },
                from: "elem-yAq5SvWd",
                to: "elem-XIhzrpBK"
            },
            {
                _id: "conn-GONE95SL",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Sire"
                },
                from: "elem-cYLgsFYJ",
                to: "elem-gRiuz7r9"
            },
            {
                _id: "conn-GkgDicsg",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Membership"
                },
                from: "elem-2ZfwihlY",
                to: "elem-SQUJyRdD"
            },
            {
                _id: "conn-GmCaRGYW",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Subgroup"
                },
                from: "elem-qiC1nUCh",
                to: "elem-XnpyC7zX"
            },
            {
                _id: "conn-HTsccpoz",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Boss"
                },
                from: "elem-gRiuz7r9",
                to: "elem-XnpyC7zX"
            },
            {
                _id: "conn-I0bOCDSR",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Regnant"
                },
                from: "elem-9CWpMWQr",
                to: "elem-vW7ZJ6Zk"
            },
            {
                _id: "conn-ImLFBlxr",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Membership"
                },
                from: "elem-s9P0pamU",
                to: "elem-Ct4iVKZw"
            },
            {
                _id: "conn-JAwFutoV",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Membership"
                },
                from: "elem-jAZtFSJG",
                to: "elem-fII3nKC1"
            },
            {
                _id: "conn-JBp4xBDf",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Subgroup"
                },
                from: "elem-SQUJyRdD",
                to: "elem-XnpyC7zX"
            },
            {
                _id: "conn-JGDiTw4W",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Subgroup"
                },
                from: "elem-bM2O8jfK",
                to: "elem-uZrkGhby"
            },
            {
                _id: "conn-JbsJgFbS",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Sire"
                },
                from: "elem-2ZfwihlY",
                to: "elem-SwrPW5Du"
            },
            {
                _id: "conn-JcO7kmWE",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Sire"
                },
                from: "elem-SwrPW5Du",
                to: "elem-2ZfwihlY"
            },
            {
                _id: "conn-Km6tT2pl",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Sire"
                },
                from: "elem-ZuxCijD4",
                to: "elem-xcMt8om4"
            },
            {
                _id: "conn-LINcrxER",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Boss"
                },
                from: "elem-ZrfXmSdf",
                to: "elem-XIhzrpBK"
            },
            {
                _id: "conn-LTt5MhHu",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Membership"
                },
                from: "elem-R4fd0WUH",
                to: "elem-E4dCgRtJ"
            },
            {
                _id: "conn-LXAL69JJ",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Membership"
                },
                from: "elem-509gUGFU",
                to: "elem-fII3nKC1"
            },
            {
                _id: "conn-MKM6i4Sb",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Boss"
                },
                from: "elem-SwrPW5Du",
                to: "elem-SQUJyRdD"
            },
            {
                _id: "conn-MqFBjc8l",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Membership"
                },
                from: "elem-E4dCgRtJ",
                to: "elem-uZrkGhby"
            },
            {
                _id: "conn-NZq4rxlM",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Subgroup"
                },
                from: "elem-i3TfghPo",
                to: "elem-uZrkGhby"
            },
            {
                _id: "conn-O9laPZ3K",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Sire"
                },
                from: "elem-3JVB74Rq",
                to: "elem-2SyQOSrK"
            },
            {
                _id: "conn-OJrAp8mw",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Subgroup"
                },
                from: "elem-E4dCgRtJ",
                to: "elem-uZrkGhby"
            },
            {
                _id: "conn-Ob3FGPKn",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Membership"
                },
                from: "elem-oG2fWCPA",
                to: "elem-6FPBRlur"
            },
            {
                _id: "conn-RR6eWmZv",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Boss"
                },
                from: "elem-q6140QEx",
                to: "elem-M14Fo6N1"
            },
            {
                _id: "conn-SKyW7Ket",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Membership"
                },
                from: "elem-cYLgsFYJ",
                to: "elem-gvt53mKm"
            },
            {
                _id: "conn-SV0OJhX4",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Sire"
                },
                from: "elem-kBeJZyWZ",
                to: "elem-VNouRAtJ"
            },
            {
                _id: "conn-TCW4QDF8",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Boss"
                },
                from: "elem-Gx2EWq17",
                to: "elem-Ct4iVKZw"
            },
            {
                _id: "conn-TrTrqosN",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Membership"
                },
                from: "elem-oBij42Jr",
                to: "elem-Ct4iVKZw"
            },
            {
                _id: "conn-Vbsoj7iX",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Boss"
                },
                from: "elem-gEfLoW0o",
                to: "elem-E4dCgRtJ"
            },
            {
                _id: "conn-VeeLAwQS",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Membership"
                },
                from: "elem-xcMt8om4",
                to: "elem-XnpyC7zX"
            },
            {
                _id: "conn-W2xdqiHX",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Membership"
                },
                from: "elem-vCYi7JE6",
                to: "elem-S7mTm61e"
            },
            {
                _id: "conn-WLdTXIbQ",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Membership"
                },
                from: "elem-06Bv04rf",
                to: "elem-XnpyC7zX"
            },
            {
                _id: "conn-XW9k3PAi",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Subgroup"
                },
                from: "elem-B88FrjUC",
                to: "elem-L9ICpAnS"
            },
            {
                _id: "conn-XqYf0ejz",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Regnant"
                },
                from: "elem-QpPLSMc0",
                to: "elem-s9P0pamU"
            },
            {
                _id: "conn-YBPxQmdI",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Subgroup"
                },
                from: "elem-a99tfhqN",
                to: "elem-Z5q59lKJ"
            },
            {
                _id: "conn-YQ5WaLvl",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Officer"
                },
                from: "elem-cq22SLcu",
                to: "elem-XnpyC7zX"
            },
            {
                _id: "conn-ZNCTCeuh",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Regnant"
                },
                from: "elem-s9P0pamU",
                to: "elem-QpPLSMc0"
            },
            {
                _id: "conn-ZgT14qJP",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Membership"
                },
                from: "elem-yWU8seC6",
                to: "elem-RRbawm9W"
            },
            {
                _id: "conn-ZkIWebl8",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Sire"
                },
                from: "elem-kBeJZyWZ",
                to: "elem-vCYi7JE6"
            },
            {
                _id: "conn-ZskuQtrM",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Membership"
                },
                from: "elem-LDy8Lwea",
                to: "elem-RRbawm9W"
            },
            {
                _id: "conn-ZzhQ9A1a",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Subgroup"
                },
                from: "elem-XIhzrpBK",
                to: "elem-uZrkGhby"
            },
            {
                _id: "conn-aLacUevI",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Membership"
                },
                from: "elem-7sUTa3p3",
                to: "elem-a99tfhqN"
            },
            {
                _id: "conn-b5HCvivz",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Sire"
                },
                from: "elem-QpPLSMc0",
                to: "elem-48X4QAA6"
            },
            {
                _id: "conn-bQeFnGts",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Membership"
                },
                from: "elem-XIhzrpBK",
                to: "elem-uZrkGhby"
            },
            {
                _id: "conn-biBgzFQE",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Membership"
                },
                from: "elem-Z4016NLf",
                to: "elem-qiC1nUCh"
            },
            {
                _id: "conn-clNGjXpZ",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Subgroup"
                },
                from: "elem-S7mTm61e",
                to: "elem-uZrkGhby"
            },
            {
                _id: "conn-d1b9waar",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Boss"
                },
                from: "elem-vW7ZJ6Zk",
                to: "elem-XnpyC7zX"
            },
            {
                _id: "conn-dBY7DI1Q",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Sire"
                },
                from: "elem-bSg6Vn3k",
                to: "elem-QpPLSMc0"
            },
            {
                _id: "conn-eOnbdXlY",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Sire"
                },
                from: "elem-fTzC73rY",
                to: "elem-kBeJZyWZ"
            },
            {
                _id: "conn-fkLdZnt6",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Sire"
                },
                from: "elem-vW7ZJ6Zk",
                to: "elem-DKNUAl3j"
            },
            {
                _id: "conn-gHFA9bt1",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Membership"
                },
                from: "elem-ldkC4JnZ",
                to: "elem-P0kEQ82z"
            },
            {
                _id: "conn-hJxrntZr",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Regnant"
                },
                from: "elem-u9o2DTre",
                to: "elem-QpPLSMc0"
            },
            {
                _id: "conn-hRBBphii",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Sire"
                },
                from: "elem-48X4QAA6",
                to: "elem-QpPLSMc0"
            },
            {
                _id: "conn-hS0X93xI",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Sire"
                },
                from: "elem-vCYi7JE6",
                to: "elem-kBeJZyWZ"
            },
            {
                _id: "conn-hWkgC0xs",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Membership"
                },
                from: "elem-XM7Z3oB2",
                to: "elem-fII3nKC1"
            },
            {
                _id: "conn-hmFgyF7a",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Subgroup"
                },
                from: "elem-Ct4iVKZw",
                to: "elem-uZrkGhby"
            },
            {
                _id: "conn-huw7Tv4P",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Boss"
                },
                from: "elem-QpPLSMc0",
                to: "elem-uZrkGhby"
            },
            {
                _id: "conn-i08BekxA",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Membership"
                },
                from: "elem-ntChar2V",
                to: "elem-SQUJyRdD"
            },
            {
                _id: "conn-iEdBgkZO",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Membership"
                },
                from: "elem-Y83v4eK0",
                to: "elem-B88FrjUC"
            },
            {
                _id: "conn-ig4oKiEZ",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Membership"
                },
                from: "elem-OESgHLev",
                to: "elem-E4dCgRtJ"
            },
            {
                _id: "conn-jDPwWDPs",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Subgroup"
                },
                from: "elem-fII3nKC1",
                to: "elem-XnpyC7zX"
            },
            {
                _id: "conn-jPGW04kA",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Sire"
                },
                from: "elem-QpPLSMc0",
                to: "elem-bSg6Vn3k"
            },
            {
                _id: "conn-jo4CyJfr",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Membership"
                },
                from: "elem-MYu9OR7K",
                to: "elem-XIhzrpBK"
            },
            {
                _id: "conn-kWz8cMuH",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Sire"
                },
                from: "elem-SwrPW5Du",
                to: "elem-ntChar2V"
            },
            {
                _id: "conn-lqkrauw6",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Membership"
                },
                from: "elem-SwrPW5Du",
                to: "elem-XnpyC7zX"
            },
            {
                _id: "conn-lxKjNzzz",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Sire"
                },
                from: "elem-iJ6Oj4YP",
                to: "elem-2SyQOSrK"
            },
            {
                _id: "conn-m75QNs4D",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Boss"
                },
                from: "elem-q6140QEx",
                to: "elem-EbZYoX6M"
            },
            {
                _id: "conn-mS6mwBcA",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Membership"
                },
                from: "elem-M14Fo6N1",
                to: "elem-EbZYoX6M"
            },
            {
                _id: "conn-mU0UZJiM",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Boss"
                },
                from: "elem-9kCRRaqW",
                to: "elem-P0kEQ82z"
            },
            {
                _id: "conn-nQ4ze7FX",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Membership"
                },
                from: "elem-JZv7MPQU",
                to: "elem-Ct4iVKZw"
            },
            {
                _id: "conn-nRQ5Lg7C",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Sire"
                },
                from: "elem-gRiuz7r9",
                to: "elem-cYLgsFYJ"
            },
            {
                _id: "conn-nq1c5Cip",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Membership"
                },
                from: "elem-aUhyDcYm",
                to: "elem-bM2O8jfK"
            },
            {
                _id: "conn-oWr1WgcP",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Membership"
                },
                from: "elem-IJMkc8Qp",
                to: "elem-qiC1nUCh"
            },
            {
                _id: "conn-oh0AqLkg",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Membership"
                },
                from: "elem-bHD13BvR",
                to: "elem-Z5q59lKJ"
            },
            {
                _id: "conn-ppQZmOPo",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Sire"
                },
                from: "elem-ntChar2V",
                to: "elem-SwrPW5Du"
            },
            {
                _id: "conn-pz31sC5P",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Membership"
                },
                from: "elem-bSg6Vn3k",
                to: "elem-gvt53mKm"
            },
            {
                _id: "conn-qNEWak1L",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Boss"
                },
                from: "elem-dbi4GPVq",
                to: "elem-gvt53mKm"
            },
            {
                _id: "conn-qXQ7y0lz",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Sire"
                },
                from: "elem-2SyQOSrK",
                to: "elem-3JVB74Rq"
            },
            {
                _id: "conn-qzZw4q1r",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Officer"
                },
                from: "elem-PldNEafF",
                to: "elem-XnpyC7zX"
            },
            {
                _id: "conn-rHhYJ2pk",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Sire"
                },
                from: "elem-kBeJZyWZ",
                to: "elem-fTzC73rY"
            },
            {
                _id: "conn-rRm5Axql",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Membership"
                },
                from: "elem-P0kEQ82z",
                to: "elem-uZrkGhby"
            },
            {
                _id: "conn-sUzcUFcN",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Sire"
                },
                from: "elem-2SyQOSrK",
                to: "elem-Gx2EWq17"
            },
            {
                _id: "conn-uZFZbPLI",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Subgroup"
                },
                from: "elem-6FPBRlur",
                to: "elem-L9ICpAnS"
            },
            {
                _id: "conn-ujSrKfrQ",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Membership"
                },
                from: "elem-lgEiuLTv",
                to: "elem-bM2O8jfK"
            },
            {
                _id: "conn-vaWPn4fR",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Membership"
                },
                from: "elem-mYdmZEeM",
                to: "elem-S7mTm61e"
            },
            {
                _id: "conn-vm36J6r9",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Sire"
                },
                from: "elem-VNouRAtJ",
                to: "elem-kBeJZyWZ"
            },
            {
                _id: "conn-w7oVHToT",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Sire"
                },
                from: "elem-xcMt8om4",
                to: "elem-ZuxCijD4"
            },
            {
                _id: "conn-wRxwEroN",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Membership"
                },
                from: "elem-tsO3O6DH",
                to: "elem-XnpyC7zX"
            },
            {
                _id: "conn-wjM7Ft54",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Sire"
                },
                from: "elem-mYdmZEeM",
                to: "elem-wSqntIy8"
            },
            {
                _id: "conn-wlWoFq4R",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Subgroup"
                },
                from: "elem-bHD13BvR",
                to: "elem-Z5q59lKJ"
            },
            {
                _id: "conn-xU9If1es",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Membership"
                },
                from: "elem-gvt53mKm",
                to: "elem-uZrkGhby"
            },
            {
                _id: "conn-xn0ShGyC",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Membership"
                },
                from: "elem-xZYFQ1OL",
                to: "elem-M14Fo6N1"
            },
            {
                _id: "conn-xrOl8Wz2",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Regnant"
                },
                from: "elem-QpPLSMc0",
                to: "elem-JZv7MPQU"
            },
            {
                _id: "conn-y3zOZZqV",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Membership"
                },
                from: "elem-oG2fWCPA",
                to: "elem-6FPBRlur"
            },
            {
                _id: "conn-yPTqb7XN",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Sire"
                },
                from: "elem-2SyQOSrK",
                to: "elem-iJ6Oj4YP"
            },
            {
                _id: "conn-yoSMrci3",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Membership"
                },
                from: "elem-pDc4YXJ2",
                to: "elem-P0kEQ82z"
            },
            {
                _id: "conn-ypxL6Ybp",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Membership"
                },
                from: "elem-oG2fWCPA",
                to: "elem-L9ICpAnS"
            },
            {
                _id: "conn-zAMUMt19",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Membership"
                },
                from: "elem-MgAs9E8z",
                to: "elem-B88FrjUC"
            },
            {
                _id: "conn-zdp8Rxh8",
                direction: "directed",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Sire"
                },
                from: "elem-wSqntIy8",
                to: "elem-mYdmZEeM"
            },
            {
                _id: "conn-SzEZz37J",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Coalition"
                },
                from: "elem-lgEiuLTv",
                to: "elem-qp0cI8dD"
            },
            {
                _id: "conn-lNZymX3T",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Coalition"
                },
                from: "elem-oG2fWCPA",
                to: "elem-kR0Mfo9m"
            },
            {
                _id: "conn-1svN99RK",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Faction"
                },
                from: "elem-7sUTa3p3",
                to: "elem-IGbJiiKF"
            },
            {
                _id: "conn-PvC2D1zo",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Faction"
                },
                from: "elem-VNouRAtJ",
                to: "elem-OudBFMeC"
            },
            {
                _id: "conn-xxtxo5Jy",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Faction"
                },
                from: "elem-WwKpxjvp",
                to: "elem-OudBFMeC"
            },
            {
                _id: "conn-WYHcVrFA",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    tags: [
                        "Boss"
                    ],
                    "connection type": "Faction"
                },
                from: "elem-QpPLSMc0",
                to: "elem-OudBFMeC"
            },
            {
                _id: "conn-ziYne4rJ",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Faction"
                },
                from: "elem-OESgHLev",
                to: "elem-OudBFMeC"
            },
            {
                _id: "conn-EUEVji7P",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Faction"
                },
                from: "elem-MYu9OR7K",
                to: "elem-OudBFMeC"
            },
            {
                _id: "conn-eDaNfXHb",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Faction"
                },
                from: "elem-yAq5SvWd",
                to: "elem-OudBFMeC"
            },
            {
                _id: "conn-wDFFtroo",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Faction"
                },
                from: "elem-9kCRRaqW",
                to: "elem-OudBFMeC"
            },
            {
                _id: "conn-NuXLPfHV",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Faction"
                },
                from: "elem-7BCT1PIE",
                to: "elem-OudBFMeC"
            },
            {
                _id: "conn-QAv6XebI",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Faction"
                },
                from: "elem-gEfLoW0o",
                to: "elem-OudBFMeC"
            },
            {
                _id: "conn-n9cQlwuK",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Faction"
                },
                from: "elem-pmjK5sNF",
                to: "elem-OudBFMeC"
            },
            {
                _id: "conn-3nSy2Aye",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Faction"
                },
                from: "elem-fTzC73rY",
                to: "elem-OudBFMeC"
            },
            {
                _id: "conn-YgWoHCwg",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Faction"
                },
                from: "elem-mYdmZEeM",
                to: "elem-OudBFMeC"
            },
            {
                _id: "conn-krER4K0E",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Faction"
                },
                from: "elem-iJ6Oj4YP",
                to: "elem-OudBFMeC"
            },
            {
                _id: "conn-1N3844mA",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Faction"
                },
                from: "elem-ZnzasEKn",
                to: "elem-OudBFMeC"
            },
            {
                _id: "conn-slQZYHPC",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Faction"
                },
                from: "elem-aUhyDcYm",
                to: "elem-OudBFMeC"
            },
            {
                _id: "conn-1fUXdgxQ",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Faction"
                },
                from: "elem-wSqntIy8",
                to: "elem-OudBFMeC"
            },
            {
                _id: "conn-ss0SKxRm",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Faction"
                },
                from: "elem-2SyQOSrK",
                to: "elem-OudBFMeC"
            },
            {
                _id: "conn-CZBpLFhQ",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Faction"
                },
                from: "elem-XkNqkZGG",
                to: "elem-OudBFMeC"
            },
            {
                _id: "conn-lgGs6LXY",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Faction"
                },
                from: "elem-rDlYIMT8",
                to: "elem-OudBFMeC"
            },
            {
                _id: "conn-QJZ7eEFX",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Faction"
                },
                from: "elem-ldkC4JnZ",
                to: "elem-OudBFMeC"
            },
            {
                _id: "conn-716A21rk",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Faction"
                },
                from: "elem-kBeJZyWZ",
                to: "elem-OudBFMeC"
            },
            {
                _id: "conn-9b3v7Y6d",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Faction"
                },
                from: "elem-ZrfXmSdf",
                to: "elem-OudBFMeC"
            },
            {
                _id: "conn-OihVJTcD",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Faction"
                },
                from: "elem-qp0cI8dD",
                to: "elem-OudBFMeC"
            },
            {
                _id: "conn-ZT1xVsSL",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Faction"
                },
                from: "elem-pDc4YXJ2",
                to: "elem-OudBFMeC"
            },
            {
                _id: "conn-wvyfXq19",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Faction"
                },
                from: "elem-lgEiuLTv",
                to: "elem-OudBFMeC"
            },
            {
                _id: "conn-Yz3cC6cU",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Faction"
                },
                from: "elem-3JVB74Rq",
                to: "elem-OudBFMeC"
            },
            {
                _id: "conn-NwwbP6VN",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Faction"
                },
                from: "elem-HojD8Bj8",
                to: "elem-OudBFMeC"
            },
            {
                _id: "conn-0CWTmtQX",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Faction"
                },
                from: "elem-vCYi7JE6",
                to: "elem-OudBFMeC"
            },
            {
                _id: "conn-b7NJDmXh",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Faction"
                },
                from: "elem-R4fd0WUH",
                to: "elem-OudBFMeC"
            },
            {
                _id: "conn-duNm0wHB",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Faction"
                },
                from: "elem-Gx2EWq17",
                to: "elem-OudBFMeC"
            },
            {
                _id: "conn-G0XHsuID",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Faction"
                },
                from: "elem-NpYpjBkN",
                to: "elem-OudBFMeC"
            },
            {
                _id: "conn-sbMWgqv4",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Faction"
                },
                from: "elem-IAhVQY84",
                to: "elem-OudBFMeC"
            },
            {
                _id: "conn-28h4sTBB",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Faction"
                },
                from: "elem-c0icI0ed",
                to: "elem-OudBFMeC"
            },
            {
                _id: "conn-zUaG3Ndu",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Faction"
                },
                from: "elem-FFpqWaxu",
                to: "elem-OudBFMeC"
            },
            {
                _id: "conn-RpxLH9ry",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Faction"
                },
                from: "elem-ez8AOTSU",
                to: "elem-OudBFMeC"
            },
            {
                _id: "conn-AP5bQQIf",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Faction"
                },
                from: "elem-bSg6Vn3k",
                to: "elem-OudBFMeC"
            },
            {
                _id: "conn-XBCmCiaK",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Faction"
                },
                from: "elem-48X4QAA6",
                to: "elem-OudBFMeC"
            },
            {
                _id: "conn-RBurwHro",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Faction"
                },
                from: "elem-cYLgsFYJ",
                to: "elem-OudBFMeC"
            },
            {
                _id: "conn-GVP3rVrJ",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Faction"
                },
                from: "elem-dbi4GPVq",
                to: "elem-OudBFMeC"
            },
            {
                _id: "conn-dhABWVy8",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Faction"
                },
                from: "elem-MgAs9E8z",
                to: "elem-g8RZf236"
            },
            {
                _id: "conn-ipc2nGQI",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Faction"
                },
                from: "elem-Y83v4eK0",
                to: "elem-g8RZf236"
            },
            {
                _id: "conn-TSU4aEam",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    tags: [
                        "Boss"
                    ],
                    "connection type": "Faction"
                },
                from: "elem-UsJPURsi",
                to: "elem-KDN9KcfG"
            },
            {
                _id: "conn-gVC2ZRVm",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Faction"
                },
                from: "elem-tsO3O6DH",
                to: "elem-xRgfU4GK"
            },
            {
                _id: "conn-UL6YiAIG",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Faction"
                },
                from: "elem-Z4016NLf",
                to: "elem-xRgfU4GK"
            },
            {
                _id: "conn-7y1lslk6",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Faction"
                },
                from: "elem-ZuxCijD4",
                to: "elem-xRgfU4GK"
            },
            {
                _id: "conn-mx3gFBio",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Faction"
                },
                from: "elem-3Rk81I5i",
                to: "elem-xRgfU4GK"
            },
            {
                _id: "conn-OVtKL5Cq",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Faction"
                },
                from: "elem-2ZfwihlY",
                to: "elem-xRgfU4GK"
            },
            {
                _id: "conn-1tLTd3RJ",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Faction"
                },
                from: "elem-Z3U2Kyd7",
                to: "elem-xRgfU4GK"
            },
            {
                _id: "conn-ZPkUxNIs",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Faction"
                },
                from: "elem-beznFmDi",
                to: "elem-xRgfU4GK"
            },
            {
                _id: "conn-YqMz2YRI",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Faction"
                },
                from: "elem-509gUGFU",
                to: "elem-xRgfU4GK"
            },
            {
                _id: "conn-GLLfi2Xp",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Faction"
                },
                from: "elem-SwrPW5Du",
                to: "elem-xRgfU4GK"
            },
            {
                _id: "conn-ufeHBz1C",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Faction"
                },
                from: "elem-9wJl3bKN",
                to: "elem-xRgfU4GK"
            },
            {
                _id: "conn-SPv6I9iS",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Faction"
                },
                from: "elem-PldNEafF",
                to: "elem-xRgfU4GK"
            },
            {
                _id: "conn-baekgt4i",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    tags: [
                        "Boss"
                    ],
                    "connection type": "Faction"
                },
                from: "elem-vW7ZJ6Zk",
                to: "elem-xRgfU4GK"
            },
            {
                _id: "conn-10ubEoft",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Faction"
                },
                from: "elem-cq22SLcu",
                to: "elem-xRgfU4GK"
            },
            {
                _id: "conn-3RmDnbSL",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Faction"
                },
                from: "elem-IJMkc8Qp",
                to: "elem-xRgfU4GK"
            },
            {
                _id: "conn-6oy0CNcn",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    tags: [
                        "Boss"
                    ],
                    "connection type": "Faction"
                },
                from: "elem-gRiuz7r9",
                to: "elem-xRgfU4GK"
            },
            {
                _id: "conn-sky5eOsv",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Faction"
                },
                from: "elem-DKNUAl3j",
                to: "elem-xRgfU4GK"
            },
            {
                _id: "conn-3sCFYUjN",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Faction"
                },
                from: "elem-xcMt8om4",
                to: "elem-xRgfU4GK"
            },
            {
                _id: "conn-hhR9yPZR",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Faction"
                },
                from: "elem-ntChar2V",
                to: "elem-xRgfU4GK"
            },
            {
                _id: "conn-eMb7dAF1",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Faction"
                },
                from: "elem-XM7Z3oB2",
                to: "elem-xRgfU4GK"
            },
            {
                _id: "conn-PGUx5fdX",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Faction"
                },
                from: "elem-06Bv04rf",
                to: "elem-xRgfU4GK"
            },
            {
                _id: "conn-LatVBKWA",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Faction"
                },
                from: "elem-jAZtFSJG",
                to: "elem-xRgfU4GK"
            },
            {
                _id: "conn-UUufXcTH",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Faction"
                },
                from: "elem-oG2fWCPA",
                to: "elem-g8RZf236"
            },
            {
                _id: "conn-hMySmIbU",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Faction"
                },
                from: "elem-LDy8Lwea",
                to: "elem-IcikpBtA"
            },
            {
                _id: "conn-akV5jZjL",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Faction"
                },
                from: "elem-yWU8seC6",
                to: "elem-IcikpBtA"
            },
            {
                _id: "conn-sanyh6D5",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    tags: [
                        "Boss"
                    ],
                    "connection type": "Faction"
                },
                from: "elem-q6140QEx",
                to: "elem-9Hm487O3"
            },
            {
                _id: "conn-ep5yzdYV",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Faction"
                },
                from: "elem-r0E7356g",
                to: "elem-9Hm487O3"
            },
            {
                _id: "conn-AhaLwjSq",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Faction"
                },
                from: "elem-xZYFQ1OL",
                to: "elem-9Hm487O3"
            },
            {
                _id: "conn-1vAwdIZX",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Sire/Regnant"
                },
                from: "elem-kBeJZyWZ",
                to: "elem-VNouRAtJ"
            },
            {
                _id: "conn-1LGYI3pe",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Sire/Regnant"
                },
                from: "elem-kBeJZyWZ",
                to: "elem-fTzC73rY"
            },
            {
                _id: "conn-Gd1ufuny",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Sire/Regnant"
                },
                from: "elem-wSqntIy8",
                to: "elem-mYdmZEeM"
            },
            {
                _id: "conn-09Z8jZ2O",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Sire/Regnant"
                },
                from: "elem-2SyQOSrK",
                to: "elem-iJ6Oj4YP"
            },
            {
                _id: "conn-xx3mYcMP",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Sire/Regnant"
                },
                from: "elem-2SyQOSrK",
                to: "elem-3JVB74Rq"
            },
            {
                _id: "conn-1g1A3HNM",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Sire/Regnant"
                },
                from: "elem-kBeJZyWZ",
                to: "elem-vCYi7JE6"
            },
            {
                _id: "conn-D3DUJBB5",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Sire/Regnant"
                },
                from: "elem-2SyQOSrK",
                to: "elem-Gx2EWq17"
            },
            {
                _id: "conn-LBMi2aAp",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Sire/Regnant"
                },
                from: "elem-QpPLSMc0",
                to: "elem-IAhVQY84"
            },
            {
                _id: "conn-WKmesm8x",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Sire/Regnant"
                },
                from: "elem-QpPLSMc0",
                to: "elem-c0icI0ed"
            },
            {
                _id: "conn-wJvYPtCl",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Sire/Regnant"
                },
                from: "elem-QpPLSMc0",
                to: "elem-FFpqWaxu"
            },
            {
                _id: "conn-yKmG15DF",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Sire/Regnant"
                },
                from: "elem-QpPLSMc0",
                to: "elem-ez8AOTSU"
            },
            {
                _id: "conn-ZbPNdIWS",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Sire/Regnant"
                },
                from: "elem-QpPLSMc0",
                to: "elem-bSg6Vn3k"
            },
            {
                _id: "conn-KKMT6dxp",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Sire/Regnant"
                },
                from: "elem-QpPLSMc0",
                to: "elem-48X4QAA6"
            },
            {
                _id: "conn-GOxhafNd",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Sire/Regnant"
                },
                from: "elem-gRiuz7r9",
                to: "elem-cYLgsFYJ"
            },
            {
                _id: "conn-vmWWSBZs",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Sire/Regnant"
                },
                from: "elem-SwrPW5Du",
                to: "elem-2ZfwihlY"
            },
            {
                _id: "conn-aaXKWn91",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Sire/Regnant"
                },
                from: "elem-vW7ZJ6Zk",
                to: "elem-beznFmDi"
            },
            {
                _id: "conn-zMNesJaY",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Sire/Regnant"
                },
                from: "elem-vW7ZJ6Zk",
                to: "elem-DKNUAl3j"
            },
            {
                _id: "conn-9HYB8M9w",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Sire/Regnant"
                },
                from: "elem-ZuxCijD4",
                to: "elem-xcMt8om4"
            },
            {
                _id: "conn-NSDzLx74",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Sire/Regnant"
                },
                from: "elem-SwrPW5Du",
                to: "elem-ntChar2V"
            },
            {
                _id: "conn-eYWVlwoQ",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Coalition"
                },
                from: "elem-VNouRAtJ",
                to: "elem-fAtYFKNp"
            },
            {
                _id: "conn-fvXRZJRY",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Coalition"
                },
                from: "elem-WwKpxjvp",
                to: "elem-zEy5xh7t"
            },
            {
                _id: "conn-mlSY0q0Z",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Coalition"
                },
                from: "elem-OESgHLev",
                to: "elem-KXHg1izR"
            },
            {
                _id: "conn-Pv7cF6gX",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Coalition"
                },
                from: "elem-MYu9OR7K",
                to: "elem-aEw2vORs"
            },
            {
                _id: "conn-PLh0XHyX",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Coalition"
                },
                from: "elem-yAq5SvWd",
                to: "elem-aEw2vORs"
            },
            {
                _id: "conn-g7MNvHfO",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    tags: [
                        "Boss"
                    ],
                    "connection type": "Coalition"
                },
                from: "elem-9kCRRaqW",
                to: "elem-drZBKlIQ"
            },
            {
                _id: "conn-wBSYU0i0",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Coalition"
                },
                from: "elem-7BCT1PIE",
                to: "elem-zEy5xh7t"
            },
            {
                _id: "conn-AKdQSsg9",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    tags: [
                        "Boss"
                    ],
                    "connection type": "Coalition"
                },
                from: "elem-gEfLoW0o",
                to: "elem-KXHg1izR"
            },
            {
                _id: "conn-u40uKztj",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Coalition"
                },
                from: "elem-pmjK5sNF",
                to: "elem-KXHg1izR"
            },
            {
                _id: "conn-4ph9O8b0",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Coalition"
                },
                from: "elem-fTzC73rY",
                to: "elem-fAtYFKNp"
            },
            {
                _id: "conn-fwrk2gnd",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Coalition"
                },
                from: "elem-mYdmZEeM",
                to: "elem-fAtYFKNp"
            },
            {
                _id: "conn-I0tlVlFb",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Coalition"
                },
                from: "elem-iJ6Oj4YP",
                to: "elem-KXHg1izR"
            },
            {
                _id: "conn-bp61K7F3",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Coalition"
                },
                from: "elem-ZnzasEKn",
                to: "elem-drZBKlIQ"
            },
            {
                _id: "conn-niQeMtFW",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Coalition"
                },
                from: "elem-aUhyDcYm",
                to: "elem-zEy5xh7t"
            },
            {
                _id: "conn-G1aa4Zez",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    tags: [
                        "Boss"
                    ],
                    "connection type": "Coalition"
                },
                from: "elem-wSqntIy8",
                to: "elem-Se61MhBY"
            },
            {
                _id: "conn-K3QUkSVA",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Coalition"
                },
                from: "elem-2SyQOSrK",
                to: "elem-Se61MhBY"
            },
            {
                _id: "conn-RUxdQWlk",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Coalition"
                },
                from: "elem-XkNqkZGG",
                to: "elem-drZBKlIQ"
            },
            {
                _id: "conn-kJq2hC8g",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Coalition"
                },
                from: "elem-rDlYIMT8",
                to: "elem-aEw2vORs"
            },
            {
                _id: "conn-jt8xqItj",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Coalition"
                },
                from: "elem-ldkC4JnZ",
                to: "elem-drZBKlIQ"
            },
            {
                _id: "conn-ymqUQBnV",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    tags: [
                        "Boss"
                    ],
                    "connection type": "Coalition"
                },
                from: "elem-kBeJZyWZ",
                to: "elem-fAtYFKNp"
            },
            {
                _id: "conn-LWd86hR6",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    tags: [
                        "Boss"
                    ],
                    "connection type": "Coalition"
                },
                from: "elem-ZrfXmSdf",
                to: "elem-aEw2vORs"
            },
            {
                _id: "conn-1Ten60Kj",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    tags: [
                        "Boss"
                    ],
                    "connection type": "Coalition"
                },
                from: "elem-qp0cI8dD",
                to: "elem-zEy5xh7t"
            },
            {
                _id: "conn-8v8yiWvx",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Coalition"
                },
                from: "elem-pDc4YXJ2",
                to: "elem-drZBKlIQ"
            },
            {
                _id: "conn-4ICtNCsL",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Coalition"
                },
                from: "elem-lgEiuLTv",
                to: "elem-zEy5xh7t"
            },
            {
                _id: "conn-drKU6fIh",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Coalition"
                },
                from: "elem-3JVB74Rq",
                to: "elem-KXHg1izR"
            },
            {
                _id: "conn-Af1t5YkY",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Coalition"
                },
                from: "elem-HojD8Bj8",
                to: "elem-Se61MhBY"
            },
            {
                _id: "conn-NtjBw9SS",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Coalition"
                },
                from: "elem-vCYi7JE6",
                to: "elem-fAtYFKNp"
            },
            {
                _id: "conn-Tgh91b5G",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Coalition"
                },
                from: "elem-R4fd0WUH",
                to: "elem-KXHg1izR"
            },
            {
                _id: "conn-UZn3bc4e",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    tags: [
                        "Boss"
                    ],
                    "connection type": "Coalition"
                },
                from: "elem-Gx2EWq17",
                to: "elem-azjfGocY"
            },
            {
                _id: "conn-nXaGmSF1",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Coalition"
                },
                from: "elem-NpYpjBkN",
                to: "elem-zEy5xh7t"
            },
            {
                _id: "conn-w7RneLzb",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Coalition"
                },
                from: "elem-IAhVQY84",
                to: "elem-azjfGocY"
            },
            {
                _id: "conn-etHnDo4R",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Coalition"
                },
                from: "elem-c0icI0ed",
                to: "elem-azjfGocY"
            },
            {
                _id: "conn-dh8kjeW9",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Coalition"
                },
                from: "elem-FFpqWaxu",
                to: "elem-azjfGocY"
            },
            {
                _id: "conn-iSIdbbZI",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Coalition"
                },
                from: "elem-ez8AOTSU",
                to: "elem-azjfGocY"
            },
            {
                _id: "conn-knBaZWtX",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Coalition"
                },
                from: "elem-bSg6Vn3k",
                to: "elem-vXulcoEL"
            },
            {
                _id: "conn-rL6JHk8W",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Coalition"
                },
                from: "elem-48X4QAA6",
                to: "elem-vXulcoEL"
            },
            {
                _id: "conn-1wZXjJpI",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Coalition"
                },
                from: "elem-cYLgsFYJ",
                to: "elem-vXulcoEL"
            },
            {
                _id: "conn-fsvtPkBh",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    tags: [
                        "Boss"
                    ],
                    "connection type": "Coalition"
                },
                from: "elem-dbi4GPVq",
                to: "elem-vXulcoEL"
            },
            {
                _id: "conn-2Og7ocsa",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Coalition"
                },
                from: "elem-2ZfwihlY",
                to: "elem-PVhGBysz"
            },
            {
                _id: "conn-Yxmx6CJf",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    tags: [
                        "Boss"
                    ],
                    "connection type": "Coalition"
                },
                from: "elem-SwrPW5Du",
                to: "elem-PVhGBysz"
            },
            {
                _id: "conn-LnSXzNO8",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Coalition"
                },
                from: "elem-ntChar2V",
                to: "elem-PVhGBysz"
            },
            {
                _id: "conn-zmxaAYa0",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    tags: [
                        "Boss"
                    ],
                    "connection type": "Coalition"
                },
                from: "elem-q6140QEx",
                to: "elem-PP8TEYLI"
            },
            {
                _id: "conn-1MixnqmE",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Coalition"
                },
                from: "elem-r0E7356g",
                to: "elem-PP8TEYLI"
            },
            {
                _id: "conn-Zl0kJnAf",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Coalition"
                },
                from: "elem-xZYFQ1OL",
                to: "elem-PP8TEYLI"
            },
            {
                _id: "conn-ImJ1Ojju",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Subgroup"
                },
                from: "elem-18HP8rjW",
                to: "elem-xRgfU4GK"
            },
            {
                _id: "conn-hYH0tCmO",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Subgroup"
                },
                from: "elem-NFvA9leg",
                to: "elem-xRgfU4GK"
            },
            {
                _id: "conn-EtqwwxXe",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Subgroup"
                },
                from: "elem-PVhGBysz",
                to: "elem-xRgfU4GK"
            },
            {
                _id: "conn-Ck4ZArAp",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Subgroup"
                },
                from: "elem-KXHg1izR",
                to: "elem-OudBFMeC"
            },
            {
                _id: "conn-PnlsQje6",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Subgroup"
                },
                from: "elem-fAtYFKNp",
                to: "elem-OudBFMeC"
            },
            {
                _id: "conn-ndyZ5Iot",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Subgroup"
                },
                from: "elem-Se61MhBY",
                to: "elem-OudBFMeC"
            },
            {
                _id: "conn-FR5lcUw6",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Subgroup"
                },
                from: "elem-azjfGocY",
                to: "elem-OudBFMeC"
            },
            {
                _id: "conn-Oqc8IoJW",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Subgroup"
                },
                from: "elem-drZBKlIQ",
                to: "elem-OudBFMeC"
            },
            {
                _id: "conn-l8IgwGNO",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Subgroup"
                },
                from: "elem-zEy5xh7t",
                to: "elem-OudBFMeC"
            },
            {
                _id: "conn-esd7SCdo",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Subgroup"
                },
                from: "elem-aEw2vORs",
                to: "elem-OudBFMeC"
            },
            {
                _id: "conn-MUQSW0Fn",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Subgroup"
                },
                from: "elem-PP8TEYLI",
                to: "elem-9Hm487O3"
            },
            {
                _id: "conn-iFYA0F8V",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Subgroup"
                },
                from: "elem-FF6UUK6F",
                to: "elem-9Hm487O3"
            },
            {
                _id: "conn-XFL6SU5N",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Subgroup"
                },
                from: "elem-kR0Mfo9m",
                to: "elem-g8RZf236"
            },
            {
                _id: "conn-O1MTjIWL",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Subgroup"
                },
                from: "elem-vXulcoEL",
                to: "elem-OudBFMeC"
            },
            {
                _id: "conn-VNrqhjge",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Coalition"
                },
                from: "elem-Z4016NLf",
                to: "elem-18HP8rjW"
            },
            {
                _id: "conn-R5PquQcW",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Coalition"
                },
                from: "elem-ZuxCijD4",
                to: "elem-18HP8rjW"
            },
            {
                _id: "conn-Kra3QQAp",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Coalition"
                },
                from: "elem-509gUGFU",
                to: "elem-NFvA9leg"
            },
            {
                _id: "conn-6HV9i7Tw",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Coalition"
                },
                from: "elem-9wJl3bKN",
                to: "elem-18HP8rjW"
            },
            {
                _id: "conn-1fZiJkD5",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Coalition"
                },
                from: "elem-IJMkc8Qp",
                to: "elem-18HP8rjW"
            },
            {
                _id: "conn-km6fUhqf",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Coalition"
                },
                from: "elem-XM7Z3oB2",
                to: "elem-NFvA9leg"
            },
            {
                _id: "conn-bPk2XiM6",
                direction: "undirected",
                delayed: false,
                reversed: false,
                attributes: {
                    "connection type": "Coalition"
                },
                from: "elem-jAZtFSJG",
                to: "elem-NFvA9leg"
            }
        ],
        loops: [],
        maps: [
            {
                _id: "map-UZxllAX4",
                name: "Toronto",
                description: "![TitleSplashLogo](https://s3.amazonaws.com/cloud.kumu.io/accounts/183238/194752/96993cda-58c0-4bca-bc22-8b5ac367c801.jpg)\nToronto has long been a stronghold of Camarilla power, standing firm against the Sabbat bastions of Montreal and Detroit.  Alas, the largest and most prosperous city in Canada has suffered in recent nights.  The sway of the Beckoning has drawn most of the city's elders to the Middle East, leaving a power vacuum that has attracted opportunists of every type, anxious to stake their claim.  Though the Camarilla maintains nominal control, the Anarch Movement has seized much of the departed prince's holdings, and is looking to take more.\n\nMeanwhile, rumors breed like locusts where knowledge is scarce, flitting through the halls of Elysiums and Anarch dive bars alike.  They tell of the Second Inquisition, here, now, planning... something.  They whisper of the deafening silence coming out of Montreal and Detroit, and worry that not *all* of the Sabbat departed for the Middle East to take up arms in the Gehenna Crusade.\n\nYou can feel something new and electric in the air: a coiled spring about to give, a dam about to break.  \n\nPerhaps a city about to fall.",
                scale: 1,
                center: {
                    x: 0,
                    y: 0
                },
                defaultPerspective: "pers-8uGFjQEN",
                defaultElementBehavior: "floating",
                defaultConnectionDirection: "undirected",
                elements: [
                    {
                        _id: "node-kExfJjAq",
                        position: null,
                        pinned: false,
                        element: "elem-VNouRAtJ"
                    },
                    {
                        _id: "node-vZJme563",
                        position: null,
                        pinned: false,
                        element: "elem-WwKpxjvp"
                    },
                    {
                        _id: "node-7vz2PzY4",
                        position: null,
                        pinned: false,
                        element: "elem-QpPLSMc0"
                    },
                    {
                        _id: "node-a3bhtU8W",
                        position: null,
                        pinned: false,
                        element: "elem-OESgHLev"
                    },
                    {
                        _id: "node-YfKDVxzE",
                        position: null,
                        pinned: false,
                        element: "elem-MYu9OR7K"
                    },
                    {
                        _id: "node-AguMoV8v",
                        position: null,
                        pinned: false,
                        element: "elem-yAq5SvWd"
                    },
                    {
                        _id: "node-Ol4addhW",
                        position: null,
                        pinned: false,
                        element: "elem-9kCRRaqW"
                    },
                    {
                        _id: "node-qyXV8rGO",
                        position: null,
                        pinned: false,
                        element: "elem-7BCT1PIE"
                    },
                    {
                        _id: "node-MssSVCkV",
                        position: null,
                        pinned: false,
                        element: "elem-gEfLoW0o"
                    },
                    {
                        _id: "node-Sl4yboer",
                        position: null,
                        pinned: false,
                        element: "elem-pmjK5sNF"
                    },
                    {
                        _id: "node-AaEg1zwj",
                        position: null,
                        pinned: false,
                        element: "elem-fTzC73rY"
                    },
                    {
                        _id: "node-O4tXEqIH",
                        position: null,
                        pinned: false,
                        element: "elem-mYdmZEeM"
                    },
                    {
                        _id: "node-ySwtFlZy",
                        position: null,
                        pinned: false,
                        element: "elem-iJ6Oj4YP"
                    },
                    {
                        _id: "node-v3KirL0u",
                        position: null,
                        pinned: false,
                        element: "elem-ZnzasEKn"
                    },
                    {
                        _id: "node-bjL65ta9",
                        position: null,
                        pinned: false,
                        element: "elem-aUhyDcYm"
                    },
                    {
                        _id: "node-moItZ4Jw",
                        position: null,
                        pinned: false,
                        element: "elem-wSqntIy8"
                    },
                    {
                        _id: "node-3VBlVU2x",
                        position: null,
                        pinned: false,
                        element: "elem-2SyQOSrK"
                    },
                    {
                        _id: "node-205ueehT",
                        position: null,
                        pinned: false,
                        element: "elem-XkNqkZGG"
                    },
                    {
                        _id: "node-pNpgh6sa",
                        position: null,
                        pinned: false,
                        element: "elem-rDlYIMT8"
                    },
                    {
                        _id: "node-eWPcJto4",
                        position: null,
                        pinned: false,
                        element: "elem-ldkC4JnZ"
                    },
                    {
                        _id: "node-pMCQvCnU",
                        position: null,
                        pinned: false,
                        element: "elem-kBeJZyWZ"
                    },
                    {
                        _id: "node-Y4PEodXW",
                        position: null,
                        pinned: false,
                        element: "elem-ZrfXmSdf"
                    },
                    {
                        _id: "node-N0KwnDpV",
                        position: null,
                        pinned: false,
                        element: "elem-qp0cI8dD"
                    },
                    {
                        _id: "node-PdHBbnEe",
                        position: null,
                        pinned: false,
                        element: "elem-pDc4YXJ2"
                    },
                    {
                        _id: "node-tfo2dgjP",
                        position: null,
                        pinned: false,
                        element: "elem-3JVB74Rq"
                    },
                    {
                        _id: "node-4sP7RPh8",
                        position: null,
                        pinned: false,
                        element: "elem-HojD8Bj8"
                    },
                    {
                        _id: "node-dbvtBtjc",
                        position: null,
                        pinned: false,
                        element: "elem-vCYi7JE6"
                    },
                    {
                        _id: "node-B7jKWfjq",
                        position: null,
                        pinned: false,
                        element: "elem-R4fd0WUH"
                    },
                    {
                        _id: "node-PhnPmE0c",
                        position: null,
                        pinned: false,
                        element: "elem-Gx2EWq17"
                    },
                    {
                        _id: "node-E4e7MXk8",
                        position: null,
                        pinned: false,
                        element: "elem-NpYpjBkN"
                    },
                    {
                        _id: "node-jc8VX6ty",
                        position: null,
                        pinned: false,
                        element: "elem-bSg6Vn3k"
                    },
                    {
                        _id: "node-xr332XAM",
                        position: null,
                        pinned: false,
                        element: "elem-48X4QAA6"
                    },
                    {
                        _id: "node-DAaKOHBR",
                        position: null,
                        pinned: false,
                        element: "elem-cYLgsFYJ"
                    },
                    {
                        _id: "node-O9wSND2V",
                        position: null,
                        pinned: false,
                        element: "elem-dbi4GPVq"
                    },
                    {
                        _id: "node-RcZQAGLY",
                        position: null,
                        pinned: false,
                        element: "elem-MgAs9E8z"
                    },
                    {
                        _id: "node-9wwgAIfT",
                        position: null,
                        pinned: false,
                        element: "elem-Y83v4eK0"
                    },
                    {
                        _id: "node-rS0ZSg1T",
                        position: null,
                        pinned: false,
                        element: "elem-tsO3O6DH"
                    },
                    {
                        _id: "node-lFsvZJSu",
                        position: null,
                        pinned: false,
                        element: "elem-Z4016NLf"
                    },
                    {
                        _id: "node-wWSYa3OK",
                        position: null,
                        pinned: false,
                        element: "elem-ZuxCijD4"
                    },
                    {
                        _id: "node-yGn4Vml2",
                        position: null,
                        pinned: false,
                        element: "elem-3Rk81I5i"
                    },
                    {
                        _id: "node-EUT0fIe1",
                        position: null,
                        pinned: false,
                        element: "elem-2ZfwihlY"
                    },
                    {
                        _id: "node-9APvENZQ",
                        position: null,
                        pinned: false,
                        element: "elem-Z3U2Kyd7"
                    },
                    {
                        _id: "node-cuMMcTsN",
                        position: null,
                        pinned: false,
                        element: "elem-509gUGFU"
                    },
                    {
                        _id: "node-hOizLc9K",
                        position: null,
                        pinned: false,
                        element: "elem-SwrPW5Du"
                    },
                    {
                        _id: "node-tXRCZAR0",
                        position: null,
                        pinned: false,
                        element: "elem-9wJl3bKN"
                    },
                    {
                        _id: "node-AzijxXqC",
                        position: null,
                        pinned: false,
                        element: "elem-PldNEafF"
                    },
                    {
                        _id: "node-ZcMYM9hp",
                        position: null,
                        pinned: false,
                        element: "elem-vW7ZJ6Zk"
                    },
                    {
                        _id: "node-0sNHhuT7",
                        position: null,
                        pinned: false,
                        element: "elem-cq22SLcu"
                    },
                    {
                        _id: "node-ymI8OnRg",
                        position: null,
                        pinned: false,
                        element: "elem-IJMkc8Qp"
                    },
                    {
                        _id: "node-Wkzt6XBS",
                        position: null,
                        pinned: false,
                        element: "elem-gRiuz7r9"
                    },
                    {
                        _id: "node-Ajf2Zfw2",
                        position: null,
                        pinned: false,
                        element: "elem-DKNUAl3j"
                    },
                    {
                        _id: "node-XvTH3f9b",
                        position: null,
                        pinned: false,
                        element: "elem-xcMt8om4"
                    },
                    {
                        _id: "node-LeCsnLtT",
                        position: null,
                        pinned: false,
                        element: "elem-ntChar2V"
                    },
                    {
                        _id: "node-rIhhhWjK",
                        position: null,
                        pinned: false,
                        element: "elem-XM7Z3oB2"
                    },
                    {
                        _id: "node-ulyH5x99",
                        position: null,
                        pinned: false,
                        element: "elem-06Bv04rf"
                    },
                    {
                        _id: "node-8AIB4Zu4",
                        position: null,
                        pinned: false,
                        element: "elem-jAZtFSJG"
                    },
                    {
                        _id: "node-l4I3fmJL",
                        position: null,
                        pinned: false,
                        element: "elem-oG2fWCPA"
                    },
                    {
                        _id: "node-oFACU31p",
                        position: null,
                        pinned: false,
                        element: "elem-LDy8Lwea"
                    },
                    {
                        _id: "node-IsPvo4Sg",
                        position: null,
                        pinned: false,
                        element: "elem-yWU8seC6"
                    },
                    {
                        _id: "node-Fsy35MXs",
                        position: null,
                        pinned: false,
                        element: "elem-7sUTa3p3"
                    },
                    {
                        _id: "node-COHwSvhj",
                        position: null,
                        pinned: false,
                        element: "elem-lgEiuLTv"
                    },
                    {
                        _id: "node-5ohdyhU2",
                        position: null,
                        pinned: false,
                        element: "elem-IAhVQY84"
                    },
                    {
                        _id: "node-a8GPkzqB",
                        position: null,
                        pinned: false,
                        element: "elem-c0icI0ed"
                    },
                    {
                        _id: "node-nQCeQXcf",
                        position: null,
                        pinned: false,
                        element: "elem-FFpqWaxu"
                    },
                    {
                        _id: "node-FRIPMw2l",
                        position: null,
                        pinned: false,
                        element: "elem-ez8AOTSU"
                    },
                    {
                        _id: "node-fh1PZAcT",
                        position: null,
                        pinned: false,
                        element: "elem-UsJPURsi"
                    },
                    {
                        _id: "node-gjAf5gtv",
                        position: null,
                        pinned: false,
                        element: "elem-beznFmDi"
                    },
                    {
                        _id: "node-CVdh9nIo",
                        position: null,
                        pinned: false,
                        element: "elem-q6140QEx"
                    },
                    {
                        _id: "node-E4R6VR3m",
                        position: null,
                        pinned: false,
                        element: "elem-r0E7356g"
                    },
                    {
                        _id: "node-0g9yYCTf",
                        position: null,
                        pinned: false,
                        element: "elem-xZYFQ1OL"
                    },
                    {
                        _id: "node-5tT6DLR8",
                        position: null,
                        pinned: false,
                        element: "elem-OudBFMeC"
                    },
                    {
                        _id: "node-X3qTZLUi",
                        position: null,
                        pinned: false,
                        element: "elem-9Hm487O3"
                    },
                    {
                        _id: "node-JtQXmRmE",
                        position: null,
                        pinned: false,
                        element: "elem-xRgfU4GK"
                    },
                    {
                        _id: "node-3nalrXQz",
                        position: null,
                        pinned: false,
                        element: "elem-IcikpBtA"
                    },
                    {
                        _id: "node-cYbI37Kr",
                        position: null,
                        pinned: false,
                        element: "elem-IGbJiiKF"
                    },
                    {
                        _id: "node-cLt3sKbu",
                        position: null,
                        pinned: false,
                        element: "elem-KDN9KcfG"
                    },
                    {
                        _id: "node-gjALVaRl",
                        position: null,
                        pinned: false,
                        element: "elem-g8RZf236"
                    },
                    {
                        _id: "node-Du45H6j7",
                        position: null,
                        pinned: false,
                        element: "elem-18HP8rjW"
                    },
                    {
                        _id: "node-3lFInifW",
                        position: null,
                        pinned: false,
                        element: "elem-NFvA9leg"
                    },
                    {
                        _id: "node-pqZt27Bt",
                        position: null,
                        pinned: false,
                        element: "elem-PVhGBysz"
                    },
                    {
                        _id: "node-8KM0SEz4",
                        position: null,
                        pinned: false,
                        element: "elem-KXHg1izR"
                    },
                    {
                        _id: "node-CWZANZzK",
                        position: null,
                        pinned: false,
                        element: "elem-fAtYFKNp"
                    },
                    {
                        _id: "node-ZKdOciuQ",
                        position: null,
                        pinned: false,
                        element: "elem-Se61MhBY"
                    },
                    {
                        _id: "node-Aeuy0j59",
                        position: null,
                        pinned: false,
                        element: "elem-azjfGocY"
                    },
                    {
                        _id: "node-LBDn6g4J",
                        position: null,
                        pinned: false,
                        element: "elem-drZBKlIQ"
                    },
                    {
                        _id: "node-vHKG7osi",
                        position: null,
                        pinned: false,
                        element: "elem-zEy5xh7t"
                    },
                    {
                        _id: "node-rNcyzZ2v",
                        position: null,
                        pinned: false,
                        element: "elem-aEw2vORs"
                    },
                    {
                        _id: "node-iM52noiZ",
                        position: null,
                        pinned: false,
                        element: "elem-PP8TEYLI"
                    },
                    {
                        _id: "node-f7P6XXVf",
                        position: null,
                        pinned: false,
                        element: "elem-FF6UUK6F"
                    },
                    {
                        _id: "node-gG9DPHjI",
                        position: null,
                        pinned: false,
                        element: "elem-kR0Mfo9m"
                    },
                    {
                        _id: "node-WoFPexxV",
                        position: null,
                        pinned: false,
                        element: "elem-vXulcoEL"
                    }
                ],
                connections: [
                    {
                        _id: "edge-tjyLuEsz",
                        connection: "conn-SzEZz37J"
                    },
                    {
                        _id: "edge-sqR5rzjA",
                        connection: "conn-lNZymX3T"
                    },
                    {
                        _id: "edge-8I5xwxFo",
                        connection: "conn-1svN99RK"
                    },
                    {
                        _id: "edge-nAGc3lqn",
                        connection: "conn-PvC2D1zo"
                    },
                    {
                        _id: "edge-GfTN0vNc",
                        connection: "conn-xxtxo5Jy"
                    },
                    {
                        _id: "edge-Hh3fcS3g",
                        connection: "conn-WYHcVrFA"
                    },
                    {
                        _id: "edge-vZVvHFqC",
                        connection: "conn-ziYne4rJ"
                    },
                    {
                        _id: "edge-QtTBxBWx",
                        connection: "conn-EUEVji7P"
                    },
                    {
                        _id: "edge-y5mqrg8X",
                        connection: "conn-eDaNfXHb"
                    },
                    {
                        _id: "edge-6N5f9Utr",
                        connection: "conn-wDFFtroo"
                    },
                    {
                        _id: "edge-5L2Ebio5",
                        connection: "conn-NuXLPfHV"
                    },
                    {
                        _id: "edge-2uVnDTTc",
                        connection: "conn-QAv6XebI"
                    },
                    {
                        _id: "edge-Qba0T9jD",
                        connection: "conn-n9cQlwuK"
                    },
                    {
                        _id: "edge-GLHYXhdM",
                        connection: "conn-3nSy2Aye"
                    },
                    {
                        _id: "edge-x0U6WB11",
                        connection: "conn-YgWoHCwg"
                    },
                    {
                        _id: "edge-5kmu3G9w",
                        connection: "conn-krER4K0E"
                    },
                    {
                        _id: "edge-XEDhcbNV",
                        connection: "conn-1N3844mA"
                    },
                    {
                        _id: "edge-aCnPnIZP",
                        connection: "conn-slQZYHPC"
                    },
                    {
                        _id: "edge-rgOtxaxN",
                        connection: "conn-1fUXdgxQ"
                    },
                    {
                        _id: "edge-oXzDdKis",
                        connection: "conn-ss0SKxRm"
                    },
                    {
                        _id: "edge-pnH9mr0b",
                        connection: "conn-CZBpLFhQ"
                    },
                    {
                        _id: "edge-2BNfWuwX",
                        connection: "conn-lgGs6LXY"
                    },
                    {
                        _id: "edge-meqn4jaw",
                        connection: "conn-QJZ7eEFX"
                    },
                    {
                        _id: "edge-YDPH6E6S",
                        connection: "conn-716A21rk"
                    },
                    {
                        _id: "edge-SDnmlZ5D",
                        connection: "conn-9b3v7Y6d"
                    },
                    {
                        _id: "edge-qiRx0usT",
                        connection: "conn-OihVJTcD"
                    },
                    {
                        _id: "edge-eawT6wfI",
                        connection: "conn-ZT1xVsSL"
                    },
                    {
                        _id: "edge-UqTJLNLk",
                        connection: "conn-wvyfXq19"
                    },
                    {
                        _id: "edge-vQykTqeP",
                        connection: "conn-Yz3cC6cU"
                    },
                    {
                        _id: "edge-qEZwol1a",
                        connection: "conn-NwwbP6VN"
                    },
                    {
                        _id: "edge-FIgi8D5I",
                        connection: "conn-0CWTmtQX"
                    },
                    {
                        _id: "edge-4GxcY24x",
                        connection: "conn-b7NJDmXh"
                    },
                    {
                        _id: "edge-MMVHLsdm",
                        connection: "conn-duNm0wHB"
                    },
                    {
                        _id: "edge-a4L9x71x",
                        connection: "conn-G0XHsuID"
                    },
                    {
                        _id: "edge-x0l7wh7V",
                        connection: "conn-sbMWgqv4"
                    },
                    {
                        _id: "edge-AG4nbJ4t",
                        connection: "conn-28h4sTBB"
                    },
                    {
                        _id: "edge-y3qeIAyT",
                        connection: "conn-zUaG3Ndu"
                    },
                    {
                        _id: "edge-J27rOH7J",
                        connection: "conn-RpxLH9ry"
                    },
                    {
                        _id: "edge-SZ1azwnH",
                        connection: "conn-AP5bQQIf"
                    },
                    {
                        _id: "edge-L3HIsoNf",
                        connection: "conn-XBCmCiaK"
                    },
                    {
                        _id: "edge-Vp01cwg9",
                        connection: "conn-RBurwHro"
                    },
                    {
                        _id: "edge-nx50O4WF",
                        connection: "conn-GVP3rVrJ"
                    },
                    {
                        _id: "edge-wkFIIn3w",
                        connection: "conn-dhABWVy8"
                    },
                    {
                        _id: "edge-SUSaJ0WW",
                        connection: "conn-ipc2nGQI"
                    },
                    {
                        _id: "edge-WvGOSm7o",
                        connection: "conn-TSU4aEam"
                    },
                    {
                        _id: "edge-9YGILZxj",
                        connection: "conn-gVC2ZRVm"
                    },
                    {
                        _id: "edge-wjCH0arC",
                        connection: "conn-UL6YiAIG"
                    },
                    {
                        _id: "edge-B7VWCCNo",
                        connection: "conn-7y1lslk6"
                    },
                    {
                        _id: "edge-FkAEYUPk",
                        connection: "conn-mx3gFBio"
                    },
                    {
                        _id: "edge-40oqQCtJ",
                        connection: "conn-OVtKL5Cq"
                    },
                    {
                        _id: "edge-pJbv45kk",
                        connection: "conn-1tLTd3RJ"
                    },
                    {
                        _id: "edge-SvIVuiUj",
                        connection: "conn-ZPkUxNIs"
                    },
                    {
                        _id: "edge-9LUzLctg",
                        connection: "conn-YqMz2YRI"
                    },
                    {
                        _id: "edge-VeXz6G6o",
                        connection: "conn-GLLfi2Xp"
                    },
                    {
                        _id: "edge-k9uN3Pwf",
                        connection: "conn-ufeHBz1C"
                    },
                    {
                        _id: "edge-RSsWwiNJ",
                        connection: "conn-SPv6I9iS"
                    },
                    {
                        _id: "edge-Ei0eMBln",
                        connection: "conn-baekgt4i"
                    },
                    {
                        _id: "edge-8w3qjH4I",
                        connection: "conn-10ubEoft"
                    },
                    {
                        _id: "edge-Yw0ZR9KE",
                        connection: "conn-3RmDnbSL"
                    },
                    {
                        _id: "edge-B9FrTLKd",
                        connection: "conn-6oy0CNcn"
                    },
                    {
                        _id: "edge-K6roF9T9",
                        connection: "conn-sky5eOsv"
                    },
                    {
                        _id: "edge-XaXwE7OJ",
                        connection: "conn-3sCFYUjN"
                    },
                    {
                        _id: "edge-3EOoDK55",
                        connection: "conn-hhR9yPZR"
                    },
                    {
                        _id: "edge-Pgk4m4AW",
                        connection: "conn-eMb7dAF1"
                    },
                    {
                        _id: "edge-vOYFPNdr",
                        connection: "conn-PGUx5fdX"
                    },
                    {
                        _id: "edge-uZJ44ofN",
                        connection: "conn-LatVBKWA"
                    },
                    {
                        _id: "edge-tZICtIlf",
                        connection: "conn-UUufXcTH"
                    },
                    {
                        _id: "edge-mHd0YDdx",
                        connection: "conn-hMySmIbU"
                    },
                    {
                        _id: "edge-2aN8ftho",
                        connection: "conn-akV5jZjL"
                    },
                    {
                        _id: "edge-reWadsfw",
                        connection: "conn-sanyh6D5"
                    },
                    {
                        _id: "edge-mH3IEI8g",
                        connection: "conn-ep5yzdYV"
                    },
                    {
                        _id: "edge-xgPGlwcW",
                        connection: "conn-AhaLwjSq"
                    },
                    {
                        _id: "edge-dKLsqwFc",
                        connection: "conn-1vAwdIZX"
                    },
                    {
                        _id: "edge-vV3Tr54E",
                        connection: "conn-1LGYI3pe"
                    },
                    {
                        _id: "edge-H4CuxXgv",
                        connection: "conn-Gd1ufuny"
                    },
                    {
                        _id: "edge-RK828TfZ",
                        connection: "conn-09Z8jZ2O"
                    },
                    {
                        _id: "edge-rnkvLYVB",
                        connection: "conn-xx3mYcMP"
                    },
                    {
                        _id: "edge-F88adgQt",
                        connection: "conn-1g1A3HNM"
                    },
                    {
                        _id: "edge-Qqf8irU4",
                        connection: "conn-D3DUJBB5"
                    },
                    {
                        _id: "edge-pxXhvJT8",
                        connection: "conn-LBMi2aAp"
                    },
                    {
                        _id: "edge-mOq8P6oV",
                        connection: "conn-WKmesm8x"
                    },
                    {
                        _id: "edge-wV1gKaDg",
                        connection: "conn-wJvYPtCl"
                    },
                    {
                        _id: "edge-6WMT3zcl",
                        connection: "conn-yKmG15DF"
                    },
                    {
                        _id: "edge-IO05KPni",
                        connection: "conn-ZbPNdIWS"
                    },
                    {
                        _id: "edge-CrObEH7A",
                        connection: "conn-KKMT6dxp"
                    },
                    {
                        _id: "edge-03ECjMcg",
                        connection: "conn-GOxhafNd"
                    },
                    {
                        _id: "edge-z8oLbxJx",
                        connection: "conn-vmWWSBZs"
                    },
                    {
                        _id: "edge-NGa3wOL6",
                        connection: "conn-aaXKWn91"
                    },
                    {
                        _id: "edge-oFpGSUX2",
                        connection: "conn-zMNesJaY"
                    },
                    {
                        _id: "edge-AevVXxzU",
                        connection: "conn-9HYB8M9w"
                    },
                    {
                        _id: "edge-7AHBgVAG",
                        connection: "conn-NSDzLx74"
                    },
                    {
                        _id: "edge-Uni2wUcV",
                        connection: "conn-eYWVlwoQ"
                    },
                    {
                        _id: "edge-Ra7jTgeC",
                        connection: "conn-fvXRZJRY"
                    },
                    {
                        _id: "edge-R9dX2O1D",
                        connection: "conn-mlSY0q0Z"
                    },
                    {
                        _id: "edge-K2MYzmHj",
                        connection: "conn-Pv7cF6gX"
                    },
                    {
                        _id: "edge-xZSFtArG",
                        connection: "conn-PLh0XHyX"
                    },
                    {
                        _id: "edge-QasKcj13",
                        connection: "conn-g7MNvHfO"
                    },
                    {
                        _id: "edge-bobC60Sl",
                        connection: "conn-wBSYU0i0"
                    },
                    {
                        _id: "edge-HzXHp5zP",
                        connection: "conn-AKdQSsg9"
                    },
                    {
                        _id: "edge-JYLLCHAc",
                        connection: "conn-u40uKztj"
                    },
                    {
                        _id: "edge-fY9QvAzL",
                        connection: "conn-4ph9O8b0"
                    },
                    {
                        _id: "edge-mzF2duI5",
                        connection: "conn-fwrk2gnd"
                    },
                    {
                        _id: "edge-853xnX37",
                        connection: "conn-I0tlVlFb"
                    },
                    {
                        _id: "edge-QXSucXQ1",
                        connection: "conn-bp61K7F3"
                    },
                    {
                        _id: "edge-W1OEazhi",
                        connection: "conn-niQeMtFW"
                    },
                    {
                        _id: "edge-NZxDUS4q",
                        connection: "conn-G1aa4Zez"
                    },
                    {
                        _id: "edge-O19RHah5",
                        connection: "conn-K3QUkSVA"
                    },
                    {
                        _id: "edge-BJ5YXKe9",
                        connection: "conn-RUxdQWlk"
                    },
                    {
                        _id: "edge-wsmSX3sU",
                        connection: "conn-kJq2hC8g"
                    },
                    {
                        _id: "edge-vmQlVFjw",
                        connection: "conn-jt8xqItj"
                    },
                    {
                        _id: "edge-vllQMdrq",
                        connection: "conn-ymqUQBnV"
                    },
                    {
                        _id: "edge-3EvwFiIB",
                        connection: "conn-LWd86hR6"
                    },
                    {
                        _id: "edge-CELMqJVJ",
                        connection: "conn-1Ten60Kj"
                    },
                    {
                        _id: "edge-EzJdwyne",
                        connection: "conn-8v8yiWvx"
                    },
                    {
                        _id: "edge-xH17By45",
                        connection: "conn-4ICtNCsL"
                    },
                    {
                        _id: "edge-XiEMJd0E",
                        connection: "conn-drKU6fIh"
                    },
                    {
                        _id: "edge-o5F7XnFE",
                        connection: "conn-Af1t5YkY"
                    },
                    {
                        _id: "edge-9XdA0Kdz",
                        connection: "conn-NtjBw9SS"
                    },
                    {
                        _id: "edge-1s7D9tXC",
                        connection: "conn-Tgh91b5G"
                    },
                    {
                        _id: "edge-DIqo60xb",
                        connection: "conn-UZn3bc4e"
                    },
                    {
                        _id: "edge-3ppmxPZ9",
                        connection: "conn-nXaGmSF1"
                    },
                    {
                        _id: "edge-VC1qIMez",
                        connection: "conn-w7RneLzb"
                    },
                    {
                        _id: "edge-5TXBRkGA",
                        connection: "conn-etHnDo4R"
                    },
                    {
                        _id: "edge-cXlB7gmf",
                        connection: "conn-dh8kjeW9"
                    },
                    {
                        _id: "edge-4YgYijWt",
                        connection: "conn-iSIdbbZI"
                    },
                    {
                        _id: "edge-rbO0obcG",
                        connection: "conn-knBaZWtX"
                    },
                    {
                        _id: "edge-f66t1wDU",
                        connection: "conn-rL6JHk8W"
                    },
                    {
                        _id: "edge-u9WUBqBC",
                        connection: "conn-1wZXjJpI"
                    },
                    {
                        _id: "edge-POCRLwyC",
                        connection: "conn-fsvtPkBh"
                    },
                    {
                        _id: "edge-52jv2Wxq",
                        connection: "conn-2Og7ocsa"
                    },
                    {
                        _id: "edge-K8dy7d5h",
                        connection: "conn-Yxmx6CJf"
                    },
                    {
                        _id: "edge-z6FcgVdP",
                        connection: "conn-LnSXzNO8"
                    },
                    {
                        _id: "edge-3mMSwAi9",
                        connection: "conn-zmxaAYa0"
                    },
                    {
                        _id: "edge-hYjt0QOA",
                        connection: "conn-1MixnqmE"
                    },
                    {
                        _id: "edge-qDqov6aw",
                        connection: "conn-Zl0kJnAf"
                    },
                    {
                        _id: "edge-gMHKHl1c",
                        connection: "conn-ImJ1Ojju"
                    },
                    {
                        _id: "edge-nvIfAdcF",
                        connection: "conn-hYH0tCmO"
                    },
                    {
                        _id: "edge-p2cdLYyx",
                        connection: "conn-EtqwwxXe"
                    },
                    {
                        _id: "edge-XCyiQEBN",
                        connection: "conn-Ck4ZArAp"
                    },
                    {
                        _id: "edge-hk9J5kuU",
                        connection: "conn-PnlsQje6"
                    },
                    {
                        _id: "edge-SUbOzVmd",
                        connection: "conn-ndyZ5Iot"
                    },
                    {
                        _id: "edge-qTViUhcJ",
                        connection: "conn-FR5lcUw6"
                    },
                    {
                        _id: "edge-rDFO2v4c",
                        connection: "conn-Oqc8IoJW"
                    },
                    {
                        _id: "edge-oA6AR04j",
                        connection: "conn-l8IgwGNO"
                    },
                    {
                        _id: "edge-6TVcr8qa",
                        connection: "conn-esd7SCdo"
                    },
                    {
                        _id: "edge-bXX6btls",
                        connection: "conn-MUQSW0Fn"
                    },
                    {
                        _id: "edge-ij8Inwjh",
                        connection: "conn-iFYA0F8V"
                    },
                    {
                        _id: "edge-VK0AK5aK",
                        connection: "conn-XFL6SU5N"
                    },
                    {
                        _id: "edge-ixVlARRM",
                        connection: "conn-O1MTjIWL"
                    },
                    {
                        _id: "edge-ufaXhOJn",
                        connection: "conn-VNrqhjge"
                    },
                    {
                        _id: "edge-72irXQKw",
                        connection: "conn-R5PquQcW"
                    },
                    {
                        _id: "edge-W8Lf69QX",
                        connection: "conn-Kra3QQAp"
                    },
                    {
                        _id: "edge-q2HEqgKt",
                        connection: "conn-6HV9i7Tw"
                    },
                    {
                        _id: "edge-DTkpkPI9",
                        connection: "conn-1fZiJkD5"
                    },
                    {
                        _id: "edge-222MBkVc",
                        connection: "conn-km6fUhqf"
                    },
                    {
                        _id: "edge-w2nnZJhR",
                        connection: "conn-bPk2XiM6"
                    }
                ],
                loops: []
            }
        ],
        perspectives: [
            {
                _id: "pers-c8r3yyir",
                name: "Current",
                style: "@settings {\n  template: stakeholder;\n  theme: dark;\n  layout: static;\n}\n\n/* ===== ELEMENTS ============= */\nelement {\n  image-size: contain;\n  image-visibility: visible;\n  outline-offset: 0;\n  shadow-opacity: 0;\n  font-size: 40;\n  font-family: Voltaire;\n  shadow-color: white;\n  text-overflow: wrap 7;\n}\n\nelement[\"Label\"=\"Anarchs\"] {\n  color: #FE94A1;\n  border-color: #6D000D;\n  image-url: url(https://vignette.wikia.nocookie.net/whitewolf/images/d/de/AnarchV5.png);\n  shadow-size: 6;\n  shadow-color: #BB0016;\n}\n\nelement[\"Label\"=\"Camarilla\"] {\n  color: #FFDC95;\n  border-color: #724C00;\n  image-url: url(https://vignette.wikia.nocookie.net/whitewolf/images/b/b6/SymbolCamarillaV5.png);\n  shadow-size: 4;\n  shadow-color: #C38200;\n}\n\nelement[\"Label\"=\"Sabbat\"] {\n  color: #B09EFA;\n  border-color: #11024E;\n  image-url: url(https://vignette.wikia.nocookie.net/whitewolf/images/1/1d/LogoSectSabbat.png);\n  shadow-size: 2;\n  shadow-color: #260F86;\n}\n\nelement[\"Label\"=\"Mortals\"] {\n  color: #8E9C9A;\n  border-color: #334E4B;\n  image-url: url(https://i.pinimg.com/originals/7e/39/10/7e3910c4a662d94a2d7b463ed6c1055e.png);\n  shadow-size: 2.5;\n  shadow-color: #4E6361;\n}\n\nelement[\"Label\"=\"Second Inquisition\"] {\n  color: #BBB897;\n  border-color: #E0D453;\n  image-url: url(https://vignette.wikia.nocookie.net/whitewolf/images/5/59/SymbolSecondInquisition.png/revision/latest?cb=20190519043956);\n  shadow-size: 3;\n  shadow-color: #FFFCDA;\n}\n\nelement[\"Label\"=\"Independent\"] {\n  image-url: url(https://vignette.wikia.nocookie.net/whitewolf/images/c/cc/LogoVampireAnkh.png/revision/latest?cb=20140102051635);\n  shadow-size: 3.5;\n  shadow-color: #696969;\n}\n\nelement[\"Affiliation\"=\"Anarchs\"] {\n  color: #6D000D;\n  border-color: #6D000D;\n}\n\nelement[\"Affiliation\"=\"Camarilla\"] {\n  color: #724C00;\n  border-color: #724C00;\n}\n\nelement[\"Affiliation\"=\"Sabbat\"] {\n  color: #11024E;\n  border-color: #11024E;\n}\n\nelement[\"Affiliation\"=\"Mortals\"] {\n  color: #334E4B;\n  border-color: #334E4B;\n}\n\nelement[\"Affiliation\"=\"Second Inquisition\"] {\n  color: #E0D453;\n  border-color: #E0D453;\n  font-color: orange;\n}\n\nelement[\"Element Type\"*=\"Organization\"] {\n  border-width: 0;\n  size: 70;\n  font-size: 50;\n  text-align: center;\n  font-weight: bold;\n}\n\nkindred {\n  flag: statusflag with reds;\n}\n\nelement[\"Category\"=\"Faction\"], element[\"Category\"=\"Grouping\"] {\n  border-width: 10;\n  size: 200;\n  label-visibility: hidden;\n  shadow-opacity: 0.1;\n}\n\nelement[\"Category\"=\"Subgroup\"] {\n  color: transparent;\n  size: 100;\n  border-width: 10;\n  font-size: 70;\n  text-overflow: wrap 1;\n}\n\nelement[\"StatusNum\"=0] {\n  size: 30;\n}\n\nelement[\"StatusNum\"=1] {\n  size: 40;\n}\n\nelement[\"StatusNum\"=2] {\n  size: 50;\n}\n\nelement[\"StatusNum\"=3] {\n  size: 60;\n}\n\nelement[\"StatusNum\"=4] {\n  size: 80;\n  font-size: 50;\n}\n\nelement[\"StatusNum\"=5], element[\"Affiliation\"=\"Autarkis\"] {\n  size: 100;\n  font-size: 60;\n}\n\n/* ===== CONNECTIONS ============= */\nconnection {\n  strength: 1;\n  size: 8;\n  arrow-visibility: hidden;\n  curvature: 0;\n}\n\nconnection[\"Connection Type\"=\"Boss\"] {\n  border-width: 2;\n  border-opacity: 1;\n  border-color: white;\n  arrow-visibility: visible;\n  arrow-color: white;\n  arrow-width: 6;\n  arrow-height: 6;\n}\n\nconnection[\"Connection Type\"=\"Regnant\"], connection[\"Connection Type\"=\"Sire\"] {\n  strength: 0;\n  style: dashed;\n  arrow-visibility: visible;\n  arrow-width: 4;\n  arrow-height: 4;\n}\n\n/* ===== IMAGES ================== */\nelement[\"Affiliation\"=\"Second Inquisition\"] {\n  image-url: url(https://vignette.wikia.nocookie.net/whitewolf/images/5/59/SymbolSecondInquisition.png/revision/latest?cb=20190519043956);\n}\n\nelement[\"Clan\"=\"Brujah\"] {\n  image-url: url(https://vignette.wikia.nocookie.net/whitewolf/images/0/0b/SymbolClanBrujahV5.png/revision/latest?cb=20180728213654);\n}\n\nelement[\"Clan\"=\"Gangrel\"] {\n  image-url: url(https://vignette.wikia.nocookie.net/whitewolf/images/d/d8/SymbolClanGangrelV5.png/revision/latest?cb=20180728213714);\n}\n\nelement[\"Clan\"=\"Malkavian\"] {\n  image-url: url(https://vignette.wikia.nocookie.net/whitewolf/images/d/d2/SymbolClanMalkavianV5.png/revision/latest?cb=20180728213734);\n}\n\nelement[\"Clan\"=\"Nosferatu\"] {\n  image-url: url(https://vignette.wikia.nocookie.net/whitewolf/images/6/6e/SymbolClanNosferatuV5.png/revision/latest?cb=20180728213808);\n}\n\nelement[\"Clan\"=\"Toreador\"] {\n  image-url: url(https://vignette.wikia.nocookie.net/whitewolf/images/c/c3/SymbolClanToreadorV5.png/revision/latest?cb=20180728213828);\n}\n\nelement[\"Clan\"=\"Tremere\"] {\n  image-url: url(https://vignette.wikia.nocookie.net/whitewolf/images/7/7b/SymbolClanTremereV5.png/revision/latest?cb=20180728213847);\n}\n\nelement[\"Clan\"=\"Ventrue\"] {\n  image-url: url(https://vignette.wikia.nocookie.net/whitewolf/images/a/ad/SymbolClanVentrueV5.png/revision/latest?cb=20180728213913);\n}\n\nelement[\"Clan\"=\"Lasombra\"] {\n  image-url: url(https://vignette.wikia.nocookie.net/whitewolf/images/f/fa/LogoClanLasombraV5.png/revision/latest?cb=20190725175100);\n}\n\nelement[\"Clan\"=\"Tzimisce\"] {\n  image-url: url(https://vignette.wikia.nocookie.net/whitewolf/images/8/89/LogoClanTzimisce.png/revision/latest?cb=20090120044552);\n}\n\nelement[\"Clan\"=\"Banu Haqim\"] {\n  image-url: url(https://vignette.wikia.nocookie.net/whitewolf/images/1/16/SymbolClanBanuHaqim.png);\n}\n\nelement[\"Clan\"=\"Ministry\"] {\n  image-url: url(https://vignette.wikia.nocookie.net/whitewolf/images/0/01/SymbolMinistryV5.png/revision/latest?cb=20190607221027);\n}\n\nelement[\"Clan\"=\"Hecata\"] {\n  image-url: url(https://vignette.wikia.nocookie.net/whitewolf/images/1/1a/SymbolHecataClassic.png/revision/latest?cb=20200114211201);\n}\n\nelement[\"Clan\"=\"Caitiff\"] {\n  image-url: url(https://vignette.wikia.nocookie.net/whitewolf/images/5/55/LogoBloodlineCaitiff.png/revision/latest?cb=20170811183452);\n}\n\nelement[\"Clan\"=\"Thin-Blooded\"] {\n  image-url: url(https://vignette.wikia.nocookie.net/whitewolf/images/f/fc/SymbolThinBloodsV5.png/revision/latest?cb=20190725180822);\n}\n\nelement[\"Element Type\"=\"Ghoul\"] {\n  image-url: url(https://vignette.wikia.nocookie.net/whitewolf/images/1/13/VTMGhouls.png/revision/latest?cb=20090201223141);\n}\n\nelement[\"tags\"*=\"PC\"] {\n  size: 60;\n  font-size: 60;\n  border-width: 20;\n  border-color: white;\n}\n\nelement[\"tags\"*=\"Dead\"] {\n  opacity: 0.3;\n  font-color: grey;\n  color: grey;\n}\n\nkindred.boss {\n  display: map;\n}\n\n"
            }
        ]
    },
    duplicateLabelCheck = (dataSet) => {
        const [labelLog, dupedLabels] = [ [], [] ]
        let elementCount = 0
        for (const element of dataSet) {
            elementCount++
            if ("attributes" in element && "label" in element.attributes) 
                if (labelLog.includes(element.attributes.label))
                    dupedLabels.push(`   ${elementCount}: ${element.attributes.label}`)
                else
                    labelLog.push(element.attributes.label)
        }
        console.log(`${elementCount} Elements Checked...`)
        if (dupedLabels.length)
            console.log(`${dupedLabels.length} Duplicate Labels found:\n\n${dupedLabels.join("\n")}`)
        else
            console.log("No duplicate labels found in data set!")
    },
    duplicatePropertyCheck = (dataSet) => {
        const dupeLog = []
        let elementCount = 0
        for (const element of dataSet) {
            elementCount++
            if ("attributes" in element) {
                const attrPairs = Object.entries(element.attributes)
                for (const [, val] of attrPairs) {
                    const matchingPairs = attrPairs.filter(x => x[1] === val)
                    if (matchingPairs.length > 1) {
                        const logLine = `  ${elementCount}: "${element.attributes.label}" --- '${val}' found in ${matchingPairs.map(x => x[0]).join(", ")}`
                        if (!dupeLog.includes(logLine))
                            dupeLog.push(logLine)
                    }
                }
            }
        }
        console.log(`${elementCount} Elements Checked...`)
        if (dupeLog.length)
            console.log(`${dupeLog.length} Duplicate Values found:\n\n${dupeLog.join("\n")}`)
        else
            console.log("No duplicate values found in data set!")

    },
    attributeVerification = (dataSet) => {
        const badAttrLog = []
        let elementCount = 0        
        for (const element of dataSet) {
            elementCount++
            if ("attributes" in element) {
                const elemProps = Object.keys(element.attributes),
                    typeKey = elemProps.find(x => x.endsWith(" type"))
                if (typeKey) {
                    const elemType = element.attributes[typeKey].toLowerCase()
                    if (elemType in KUMUDATA.attributeRelevance) {
                        const validAttrs = [
                            ...KUMUDATA.attributeRelevance[elemType].map(x => x.toLowerCase()),
                            "label",
                            "element type",
                            "connection type",
                            "tags"
                        ]
                        if (validAttrs && validAttrs.length) {
                            const badAttrs = elemProps.filter(x => !validAttrs.includes(x))
                            if (badAttrs.length)
                                badAttrLog.push(`  ${elementCount}: "${element.attributes.label}" --- [${badAttrs.join(", ")}]`)
                        } else {
                            badAttrLog.push(`ERROR:  ${elementCount}: "${element.attributes.label}" --- No Valid Attrs for Type '${elemType}'`)
                        }
                    } else {
                        badAttrLog.push(`ERROR:  ${elementCount}: "${element.attributes.label}" --- Type Not Found for '${elemType}'`)
                    }
                } else {
                    badAttrLog.push(`ERROR:  ${elementCount}: "${element.attributes.label}" --- No Type Key Found!`)
                }
            } else {
                badAttrLog.push(`ERROR:  ${elementCount}: Attributes Not Found!\n\n${JSON.stringify(element)}`)
            }
        }
        console.log(`${elementCount} Elements Checked...`)
        if (badAttrLog.length)
            console.log(`${badAttrLog.length} Problems found:\n\n${badAttrLog.join("\n")}`)
        else
            console.log("Everything OK!")
    },
    getElementIDs = () => KUMUDATA.elements.map(x => x._id) // ,
    // verifyConnections = () => {
    //     const elementIDs = getElementIDs(),
    //         errorLog = []
    //     for (const connection of KUMUDATA.connections) {

    //     }
    // }

duplicateLabelCheck(KUMUDATA.elements)
duplicatePropertyCheck(KUMUDATA.elements)
attributeVerification(KUMUDATA.elements)

duplicateLabelCheck(KUMUDATA.connections)
duplicatePropertyCheck(KUMUDATA.connections)
attributeVerification(KUMUDATA.connections)