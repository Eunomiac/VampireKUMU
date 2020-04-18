// eslint-disable-next-line no-unused-vars
const KUMUDATA = {
    version: 1,
    name: "VAMPIRE: Toronto By Night",
    description: "A living Relationship Map of all that is happening in Toronto.",
    proxyImages: true,
    defaultMap: "map-UZxllAX4",
    defaultPerspective: null,
    attributeRelevance: {
        kindred: [
            "Affiliation",
            "Clan",
            "Coterie",
            "Quote",
            "status",
            "Titles",
            "StatusFlag"
        ],
        "kindred-organization": [
            "Affiliation",
            "Category",
            "Image"
        ],
        mortal: [
            "Affiliation",
            "Coterie",
            "Faction",
            "Image",
            "Quote",
            "status",
            "StatusNum",
            "Titles"
        ],
        ghoul: [
            "Affiliation",
            "Coterie",
            "Image",
            "Quote",
            "Sire/Regnant",
            "status",
            "StatusNum",
            "Titles"
        ],
        "mortal-organization": [
            "Affiliation",
            "Category",
            "Image"
        ]
    },
    attributes: [
        {
            _id: "attr-tgVixWtM",
            name: "Affiliation",
            format: "string",
            private: false,
            limit: 1,
            category: "General",
            prompt: "list",
            locked: false,
            values: [
                "Anarch",
                "Camarilla",
                "Independent",
                "Autarkis",
                "Second Inquisition",
                "None",
                "Sabbat",
                null,
                "Bookies",
                "Anarchs",
                null,
                "Mortals"
            ],
            sort: false,
            cluster: true
        },
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
                null,
                "Ghoul",
                null
            ],
            sort: false,
            cluster: true
        },
        {
            _id: "attr-iT8McQ1u",
            name: "Category",
            format: "string",
            private: false,
            limit: 1,
            category: "General",
            prompt: "list",
            locked: false,
            values: [
                "Faction",
                "Grouping",
                "Group",
                "Subgroup"
            ],
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
                null,
                "St. Leopold",
                "FIRSTLIGHT",
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
                "Membership",
                "Boss",
                "Sire",
                "Regnant",
                "Officer"
            ],
            sort: false,
            cluster: false
        },
        {
            _id: "attr-9Sd5kxIV",
            name: "Coterie",
            format: "string",
            private: false,
            limit: 1,
            category: "General",
            prompt: "list",
            locked: false,
            values: [
                null,
                "Redemption House",
                "The Line",
                "Ascetic Ministry",
                "Men-In-Black",
                "Red Flag",
                "Nightwolves",
                "Jarvis Jacks",
                "Daylighters",
                "St. Michael's Cell",
                "Masque",
                null,
                "University of Toronto",
                "Bookies"
            ],
            sort: false,
            cluster: true
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
                "Kindred Organization",
                "Mortal",
                "Ghoul",
                "Mortal Organization"
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
                "Ninth"
            ],
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
            _id: "attr-InHwtI3D",
            name: "Sire/Regnant",
            format: "string",
            private: false,
            limit: 1,
            category: "General",
            prompt: "list",
            locked: false,
            values: [
                null,
                "Ren",
                "Cyrus Raza",
                "Maxwell 'Max' Floyd",
                "Mr. Easy",
                "Frederik Scheer, Seneschal",
                "Alistair Etrata",
                "Baroness Monika Eulenberg",
                "Prince Osborne Lowell",
                null
            ],
            sort: false,
            cluster: true
        },
        {
            _id: "attr-QqEfChxa",
            name: "StatusFlag",
            format: "number",
            private: false,
            limit: "none",
            category: "General",
            prompt: "none",
            locked: false,
            values: [
                "0",
                "1",
                "2",
                "3",
                "4",
                "5"
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
            _id: "attr-gfmGxv0q",
            name: "faction",
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
            name: "status",
            format: "string",
            private: false,
            limit: "none",
            category: "General",
            prompt: "list",
            locked: true,
            values: [
                "●●●",
                "●●●●●",
                "●●",
                "●",
                "●●●●",
                "0",
                "3",
                "5",
                "2",
                "1",
                "4",
                "#N/A",
                "~"
            ],
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
                affiliation: "Camarilla",
                generation: "Tenth",
                age: "Ancilla",
                quote: "It seemed like the right idea at the time: I'm not really a 'Council of Primogen' kind of guy. Now, what can I get you?",
                image: "https://imgur.com/0B3DtU2.jpg",
                "element type": "Kindred",
                description: "Vex is considered tedious by most, in part because of his firm belief in the power of his Evil Eye—and his propensity to use it whenever he is challenged. As the youngest member of Prince Steele's Council of Primogen, Vex managed to accomplish a great deal despite his delusions: He negotiated control over the Waterfront and established Clan Malkavian’s grip over most of Toronto’s tourism industry and ports of entry. For reasons unknown, he abdicated from his position on the council when Bertrice stepped down; tonight, he attends Elysia with no greater fanfare than any other ancilla—but for his position as Toronto's primary liason with the Circulatory Network.",
                statusnum: 3
            }
        },
        {
            _id: "elem-2SyQOSrK",
            attributes: {
                label: "Mr. Easy",
                clan: "Malkavian",
                affiliation: "Anarchs",
                generation: "Thirteenth",
                age: "Neonate",
                coterie: "Jarvis Jacks",
                quote: "I'm sorry, I broke another one. But I already cleaned up! And I promise to be more careful with the next one.",
                image: "https://imgur.com/PZ9kPUw.jpg",
                "element type": "Kindred",
                description: "Mr. Easy is a sadist, a rapist, and a pedophile. This is no secret. Why Max brought him into the Jarvis Jacks when no other coterie would have him is anyone's guess: he has the mind of a child and a soul as putrid as they come. On top of that, he's taken to compulsively Embracing kine, despite the fact that his weak blood consistently fails to create true vampires.",
                statusnum: 0
            }
        },
        {
            _id: "elem-2ZfwihlY",
            attributes: {
                label: "Aryana Mortazavi",
                clan: "Ministry",
                affiliation: "Camarilla",
                generation: "Eighth",
                age: "Ancilla",
                "sire/regnant": "Cyrus Raza",
                coterie: "Ascetic Ministry",
                "element type": "Kindred",
                statusnum: 1
            }
        },
        {
            _id: "elem-3JVB74Rq",
            attributes: {
                label: "Toni Gomez",
                clan: "Thin-Blooded",
                affiliation: "Anarchs",
                generation: "Fourteenth",
                age: "Neonate",
                "sire/regnant": "Mr. Easy",
                coterie: "Men-In-Black",
                quote: "Whatever.",
                "element type": "Kindred",
                statusnum: 0
            }
        },
        {
            _id: "elem-3Rk81I5i",
            attributes: {
                label: "Anita Morris",
                clan: "Tremere",
                affiliation: "Camarilla",
                generation: "Thirteenth",
                age: "Neonate",
                titles: "Keeper of Elysium",
                quote: "My problems started when I got everything I wanted.",
                image: "https://imgur.com/2DPcxdF.jpg",
                "element type": "Kindred",
                description: "... I mean look, we're monsters, we do shitty things. Yeah, I think I'm better than most, so I figured I had karma to spare when an opportunity presented itself to... um... to return to the fold. Besides, I saw the writing on the wall: No way can this madwoman and her thugs take on the Regent. Especially while we're all looking over our shoulders because our food has fucking militarized...",
                statusnum: 1
            }
        },
        {
            _id: "elem-48X4QAA6",
            attributes: {
                label: "JOHANNES NAPIER",
                clan: "Malkavian",
                affiliation: "Anarchs",
                generation: "Twelfth",
                age: "Neonate",
                "sire/regnant": "Baroness Monika Eulenberg",
                coterie: "Masque",
                "element type": "Kindred",
                statusnum: 2,
                tags: [
                    "PC"
                ]
            }
        },
        {
            _id: "elem-4vwbcIOl",
            attributes: {
                label: "Fort York Cell",
                affiliation: "Second Inquisition",
                category: "Subgroup",
                "element type": "Mortal Organization"
            }
        },
        {
            _id: "elem-509gUGFU",
            attributes: {
                label: "Christianne",
                clan: "Toreador",
                affiliation: "Camarilla",
                generation: "Twelfth",
                age: "Neonate",
                titles: "Harpy",
                quote: "No, you vacuous halfwit, he didn't *dump* me. We wanted different things, is all: loyalty for me, treason for him. Besides, I heard he's doing odd jobs for the Setites now? I think they call that 'dodging a bullet'.",
                image: "https://i.imgur.com/HjojZNk.jpg",
                "element type": "Kindred",
                description: "Christianne may be young among her Camarilla peers, but she is a Toronto native and has lived here her entire life. Admired and feared for her rapier wit in equal part, she and the Aristocrat are the sort of harpy-partnership with the power to bring princes to their knees with a few choice words at Elysium. Her cachet has only risen with the dramatic defection of the former sheriff Locke Ulrich to the Anarchs: they were assumed to be something of an item until then. Though Christianne has hidden the truth with characteristic Toreador aplomb, it is no great secret that she was as blindsided as everyone else.",
                statusnum: 3
            }
        },
        {
            _id: "elem-6FPBRlur",
            attributes: {
                label: "The Giovanni",
                affiliation: "Independent",
                category: "Subgroup",
                "element type": "Kindred Organization"
            }
        },
        {
            _id: "elem-7BCT1PIE",
            attributes: {
                label: "Jack-be-Nimble",
                clan: "Nosferatu",
                affiliation: "Anarchs",
                generation: "Twelfth",
                age: "Neonate",
                coterie: "The Line",
                quote: "Head back now? There's still five minutes till sunrise!",
                image: "https://imgur.com/Y5Qcmvj.jpg",
                "element type": "Kindred",
                description: "If anyone can be said to be a true expert of the city, it's Jack-be-Nimble. Jack was here a decade or two before the baroness rose to power, and he spent most of that time as a courier—a service that has become even more important in the wake of the Second Inquisition's increased scrutiny of the Internet. Even the Piece-Taker's domain isn't off limits to Jack: He's the only Anarch who dares to visit the place. Well, almost only.",
                statusnum: 2
            }
        },
        {
            _id: "elem-7sUTa3p3",
            attributes: {
                label: "Antoinne LaGritte",
                "element type": "Mortal",
                affiliation: "Mortals",
                coterie: "University of Toronto",
                statusnum: 2
            }
        },
        {
            _id: "elem-9CWpMWQr",
            attributes: {
                label: "Bob Johnston",
                affiliation: "Camarilla",
                "sire/regnant": "Frederik Scheer, Seneschal",
                "element type": "Ghoul",
                statusnum: 0
            }
        },
        {
            _id: "elem-9kCRRaqW",
            attributes: {
                label: "J",
                clan: "Brujah",
                affiliation: "Anarchs",
                generation: "Eleventh",
                age: "Neonate",
                coterie: "Nightwolves",
                quote: "Stop talking. It's not doing either one of us any good.",
                image: "https://imgur.com/SzZdr5D.jpg",
                "element type": "Kindred",
                description: "\"J\" hardly impresses at first glance (indeed, a running joke about his name is that it's the longest he can spell). Of course, the fact that he has led such a large and violent group of Kindred so effectively for so long suggests there is much more to this Brujah than first impressions would suggest. It is, after all, in the interests of every vampire to manage expectations.",
                statusnum: 2
            }
        },
        {
            _id: "elem-9wJl3bKN",
            attributes: {
                label: "Drake",
                clan: "Nosferatu",
                affiliation: "Camarilla",
                generation: "Eighth",
                age: "Elder",
                titles: "Primogen",
                quote: "You know all that you need to know. When this changes, you will know that, too.",
                image: "https://imgur.com/NEGG6jD.jpg",
                "element type": "Kindred",
                description: "The Oubliette. The Whisper-Weaver. The Vault. Perpetually shrouded in sheer black silks, Drake speaks little, but when he does it is in the interests of everyone to pay attention: He wields his secrets like a surgeon’s scalpel, leveraging them for maximum impact with prescient timing. It is said that he claimed P.A.T.H, Toronto’s vast subterranean shopping complex, for Clan Nosferatu by uttering three words in confidence to Seneschal Scheer. For these reasons and the myriad unconfirmed rumors that accompanied them, Drake is among the most feared Camarilla elders in the country: an inscrutable boogeyman whose ultimate motives are always in doubt.",
                statusnum: 5,
                statusflag: [
                    "1",
                    "2",
                    "3",
                    "4",
                    "5"
                ]
            }
        },
        {
            _id: "elem-AJSSxwK2",
            attributes: {
                label: "Seneschal Frederik Scheer"
            }
        },
        {
            _id: "elem-B88FrjUC",
            attributes: {
                label: "Autarkis",
                affiliation: "Independent",
                "element type": "Kindred Organization",
                category: "Subgroup"
            }
        },
        {
            _id: "elem-Ct4iVKZw",
            attributes: {
                label: "Daylighters",
                affiliation: "Anarchs",
                category: "Subgroup",
                "element type": "Kindred Organization"
            }
        },
        {
            _id: "elem-DKNUAl3j",
            attributes: {
                label: "Raphael Bishop",
                clan: "Tremere",
                affiliation: "Camarilla",
                generation: "Ninth",
                age: "Ancilla",
                titles: "Scourge",
                "sire/regnant": "Frederik Scheer, Seneschal",
                quote: "I don't enjoy all that I'm asked to do. But loyalty to the Pyramid is a virtue—especially in the wake of its fall.",
                image: "https://imgur.com/l8sijLS.jpg",
                "element type": "Kindred",
                description: "Raphael Bishop is a creature of his sire's making——both literally and figuratively. Scheer kindled in his childe a zealous devotion to House Tremere and the Pyramid, and this fire has found plenty of fuel in modern nights: Bishop watched Vienna fall, taking the storied might of his clan along with it. He remembers what Clan Tremere *was*, and he shares with his sire a deep shame for its loss... and the will to get it back.",
                statusnum: 3
            }
        },
        {
            _id: "elem-E4dCgRtJ",
            attributes: {
                label: "Men-In-Black",
                affiliation: "Anarchs",
                category: "Subgroup",
                "element type": "Kindred Organization"
            }
        },
        {
            _id: "elem-EbZYoX6M",
            attributes: {
                label: "Second Inquisition",
                affiliation: "None",
                "element type": "Mortal Organization",
                category: "Faction"
            }
        },
        {
            _id: "elem-Gx2EWq17",
            attributes: {
                label: "Wesley Richardson",
                clan: "Thin-Blooded",
                affiliation: "Anarchs",
                generation: "Fourteenth",
                age: "Neonate",
                titles: "Daywalker",
                "sire/regnant": "Mr. Easy",
                coterie: "Daylighters",
                quote: "The irony is I'm a lab rat; I've always hated the Sun.",
                image: "https://imgur.com/jApLuvc.jpg",
                "element type": "Kindred",
                description: "Wesley Richardson is undoubtedly the most successful of Mr. Easy's bevy of thin-blooded childer. A chemist in life, he took naturally to the new alchemy of the duskborn, and his tendency towards pragmatism made his \"rehabilitation\" under his former hostage Wallflower quicker than his siblings in blood. Plus, Wesley is a rare daywalker who can endure the light of the Sun, positioning him to take leadership over the Daylighters in service to Baroness Eulenberg.",
                statusnum: 2
            }
        },
        {
            _id: "elem-HojD8Bj8",
            attributes: {
                label: "Twist",
                clan: "Nosferatu",
                affiliation: "Anarchs",
                generation: "Thirteenth",
                age: "Neonate",
                coterie: "Jarvis Jacks",
                quote: "You think you know pain? You think you know misery? You don't. But I do, and I'm a very very good teacher.",
                image: "https://imgur.com/vV8sjeM.jpg",
                "element type": "Kindred",
                description: "In life, Twist was a pampered playboy of one of Toronto's most successful crime families... until he ran afoul of Clan Nosferatu, and was cursed with the Embrace as punishment. As his body twisted and bloated into the hideous monstrosity he is tonight, so to did his shallow, superficial soul. Now, he exists to render the torture he feels every time he looks into a mirror onto others. Misery, it would seem, does indeed love its company.",
                statusnum: 0
            }
        },
        {
            _id: "elem-IJMkc8Qp",
            attributes: {
                label: "Mylene 'the Puck' Hamelin",
                clan: "Ventrue",
                affiliation: "Camarilla",
                generation: "Tenth",
                age: "Ancilla",
                titles: "Primogen",
                quote: "Why? Because if you don't I'll smash your fucking teeth in, that's why.",
                image: "https://imgur.com/H9ZJ7Wy.jpg",
                "element type": "Kindred",
                description: "Not all Ventrue are traditional leaders: Mylene lacks most of the airs and graces of her clanmates. She is a hard-nosed, plain-speaking former solicitor who still fraternizes brazenly with the kine by dating mortal woman (often without feeding), happily swearing at her fellow council members when she disagrees with them, and giving out beatings to her own clan members when they fall out of line. Some believe she is called “the Puck” because of her fey appearance; in fact, it’s because she has all the subtlety of an ice hockey puck. Nevertheless, Hamelin is a popular primogen. She always drives forward her clan’s interests and brooks no dissent from the Anarchs.",
                statusnum: 5
            }
        },
        {
            _id: "elem-JZv7MPQU",
            attributes: {
                label: "Harold Covington",
                affiliation: "Anarchs",
                "sire/regnant": "Baroness Monika Eulenberg",
                coterie: "Daylighters",
                "element type": "Ghoul",
                statusnum: 0
            }
        },
        {
            _id: "elem-L9ICpAnS",
            attributes: {
                label: "Independent",
                affiliation: "None",
                "element type": "Kindred Organization",
                category: "Grouping"
            }
        },
        {
            _id: "elem-LDy8Lwea",
            attributes: {
                label: "Alexander",
                clan: "Lasombra",
                affiliation: "Sabbat",
                generation: "Tenth",
                age: "Neonate",
                quote: "Drink up. What, you think I put something in it?",
                "element type": "Kindred",
                description: "The young Sabbat Lasombra holds a rather significant distinction: He is the only known member of the Sword of Caine to establish himself in the city proper, away from Centre Island, thanks to the aid of a mysterious benefactor. What he intends to *do* with his unique position remains to be seen; it may be difficult for one so young to operate alone, but the Lasombra rarely go gently into the night.",
                statusnum: 2
            }
        },
        {
            _id: "elem-M14Fo6N1",
            attributes: {
                label: "St. Michael's Cell",
                affiliation: "Second Inquisition",
                category: "Subgroup",
                "element type": "Mortal Organization"
            }
        },
        {
            _id: "elem-MYu9OR7K",
            attributes: {
                label: "Calvin Wallace",
                clan: "Brujah",
                affiliation: "Anarchs",
                generation: "Twelfth",
                age: "Neonate",
                coterie: "Red Flag",
                quote: "The Anarch Independence Movement is so much more than a neonate uprising! It is a revolution, and it will change the world!",
                image: "https://imgur.com/1dp5Jwa.jpg",
                "element type": "Kindred",
                description: "A firebrand even by the standards of Clan Brujah, Calvin might seem to be an odd fit for a coterie like Red Flag, whose responsibilities require diplomacy and a light touch. Nevertheless, he was among the first names Rosie requested of the baroness; it seems she felt his passion would serve Red Flag's agenda well.",
                statusnum: 3
            }
        },
        {
            _id: "elem-MgAs9E8z",
            attributes: {
                label: "The Island Devil",
                clan: "Nosferatu",
                affiliation: "Autarkis",
                generation: "Seventh",
                age: "Elder",
                "element type": "Kindred",
                statusnum: 0
            }
        },
        {
            _id: "elem-NpYpjBkN",
            attributes: {
                label: "Yusef Shamsin",
                clan: "Nosferatu",
                affiliation: "Anarchs",
                generation: "Twelfth",
                age: "Neonate",
                coterie: "The Line",
                "element type": "Kindred",
                statusnum: 2
            }
        },
        {
            _id: "elem-OESgHLev",
            attributes: {
                label: "Ben Blinker",
                clan: "Malkavian",
                affiliation: "Anarchs",
                generation: "Twelfth",
                age: "Neonate",
                coterie: "Men-In-Black",
                quote: "Look into my pretty, pretty eyes.",
                image: "https://imgur.com/VLwNWgz.jpg",
                "element type": "Kindred",
                description: "Ben Blinker's contribution to the Men-In-Black is obvious: his command of Dominate, particularly impressive for a neonate, is invaluable to his coterie's principal responsibility of protecting the Masquerade. That being said, Ben Blinker's penchant for causing as many messes as he cleans up is legendary; his need to \"keep things interesting\" is a problematic manifestation of his Curse of Malkav.",
                statusnum: 2
            }
        },
        {
            _id: "elem-P0kEQ82z",
            attributes: {
                label: "Nightwolves",
                affiliation: "Anarchs",
                category: "Subgroup",
                "element type": "Kindred Organization"
            }
        },
        {
            _id: "elem-PldNEafF",
            attributes: {
                label: "Emily, the Dusk Rose",
                clan: "Nosferatu",
                affiliation: "Camarilla",
                generation: "Tenth",
                age: "Ancilla",
                titles: "Scourge",
                quote: "Shh, pet. Such luscious hair, such beautiful skin, such wide, wide eyes. I think I'll keep you, as our little secret.",
                image: "https://i.imgur.com/vQrOy0Z.jpg",
                "element type": "Kindred",
                description: "Subtle, deadly, and sadistic, the knowledge that it is Emily who serves Sheriff Laz as Scourge (and not Raphael Bishop) has spread only slowly through the Camarilla and Toronto's Kindred community at large. Beautiful but for the tears of thick, foul-smelling ichor that continuously fall from her eyes, she is uniquely capable among the Nosferatu of being seen in public without threatening the Masquerade. There is no doubt that her clan takes full advantage of this, positioning the Dusk Rose as the Nosferatu most-frequently called upon whenever it is necessary to treat with the kine directly.",
                statusnum: 2
            }
        },
        {
            _id: "elem-QpPLSMc0",
            attributes: {
                label: "Baroness Monika Eulenberg",
                clan: "Malkavian",
                affiliation: "Anarchs",
                generation: "Eleventh",
                age: "Ancilla",
                titles: "Baroness",
                quote: "The Camarilla may outnumber us, but my eyes are everywhere. And what do they see? A city ripe for the taking. It is only a matter of time until Toronto becomes the capital of a new Anarch Free State.",
                image: "https://imgur.com/U97cOlO.jpg",
                "element type": "Kindred",
                description: "In life, Monika Eulenberg served the German Democratic Republic of Soviet-occupied East Berlin as an agent of the Ministry of State Security: the oppressive Stasi secret police. In death, her natural caution and professional paranoia grew pathological under the Curse of Malkav, forging a politically-savvy operator who quickly earned the respect of her Anarch associates. When the Beckoning created a power vacuum in Toronto, Monika seized the opportunity to declare herself baroness of the city and offered her aid to a reeling Camarilla—while efficiently leveraging a select number of loyal coteries into a strong Anarch foothold in one of the crown jewels of North America.",
                statusnum: 5
            }
        },
        {
            _id: "elem-R4fd0WUH",
            attributes: {
                label: "Wallflower",
                clan: "Gangrel",
                affiliation: "Anarchs",
                generation: "Thirteenth",
                age: "Neonate",
                coterie: "Men-In-Black",
                quote: "Stop worrying. We're going to make your problem go away, and we're going to have fun doing it!",
                image: "https://imgur.com/wrYwpgR.jpg",
                "element type": "Kindred",
                description: "Toronto's Anarchs have a penchant for ironic names, and Wallflower is no exception. Combative, proud, and fiercely territorial, Wallflower is a dependable ally to have at your side: a blushing violet, she is not. Her coterie-mates in the Men-In-Black play their mindgames of subtle manipulation; Wallflower prefers to make her problems bleed, by tooth and by claw.",
                statusnum: 1
            }
        },
        {
            _id: "elem-RRbawm9W",
            attributes: {
                label: "Sabbat",
                affiliation: "None",
                "element type": "Kindred Organization",
                category: "Faction"
            }
        },
        {
            _id: "elem-S7mTm61e",
            attributes: {
                label: "Redemption House",
                affiliation: "Anarchs",
                category: "Subgroup",
                "element type": "Kindred Organization"
            }
        },
        {
            _id: "elem-SQUJyRdD",
            attributes: {
                label: "Ascetic Ministry",
                affiliation: "Camarilla",
                category: "Subgroup",
                "element type": "Kindred Organization"
            }
        },
        {
            _id: "elem-SwrPW5Du",
            attributes: {
                label: "Cyrus Raza",
                clan: "Ministry",
                affiliation: "Camarilla",
                generation: "Seventh",
                age: "Elder",
                coterie: "Ascetic Ministry",
                "element type": "Kindred",
                statusnum: 2
            }
        },
        {
            _id: "elem-UsJPURsi",
            attributes: {
                label: "David Greene",
                affiliation: "Mortals",
                "element type": "Mortal",
                coterie: "Bookies",
                statusnum: 3
            }
        },
        {
            _id: "elem-VNouRAtJ",
            attributes: {
                label: "Alexandra",
                clan: "Ministry",
                affiliation: "Anarchs",
                generation: "Tenth",
                age: "Ancilla",
                "sire/regnant": "Ren",
                coterie: "Redemption House",
                quote: "I am here to help however I can. What can I do to put your mind at ease?",
                image: "https://imgur.com/xIMeIt5.jpg",
                "element type": "Kindred",
                description: "Of Ren's three childer, Alexandra is the beating heart that bridges the gulf between Kai's restless enthusiasm and Tyler's stoic pragmatism. The quintessential exemplar of still waters that run deep, Alexandra is quiet and thoughtful; intensely focused and unsettlingly unreadable. On one hand, she campaigned heavily to welcome Kingston Black into the close-knit Redeemer family; on the other, she appears to be the least interested in ingratiating herself with the Anarch population at large.",
                statusnum: 1
            }
        },
        {
            _id: "elem-WwKpxjvp",
            attributes: {
                label: "Amos Jax",
                clan: "Gangrel",
                affiliation: "Anarchs",
                generation: "Twelfth",
                age: "Neonate",
                coterie: "The Line",
                "element type": "Kindred",
                statusnum: 1,
                tags: [
                    "Dead"
                ]
            }
        },
        {
            _id: "elem-XIhzrpBK",
            attributes: {
                label: "Red Flag",
                affiliation: "Anarchs",
                category: "Subgroup",
                "element type": "Kindred Organization"
            }
        },
        {
            _id: "elem-XM7Z3oB2",
            attributes: {
                label: "The Aristocrat",
                clan: "Nosferatu",
                affiliation: "Camarilla",
                generation: "Tenth",
                age: "Ancilla",
                titles: "Harpy",
                quote: "Ta-daaa!",
                image: "https://i.imgur.com/d6GuaE8.jpg",
                "element type": "Kindred",
                description: "The Aristocrat is an unlikely Nosferatu in more ways than one: A consummate socialite with a loud and flamboyant personality, he flaunts the characteristic subtlety of his clan to stand tall in the spotlight. This has made him one of Toronto's most popular Kindred, a welcome presence in Elysium and Anarch bars alike, with a circle of friends that transcends the boundaries of sect. Not only is he a respected Herald (or caustic Harpy, depending upon who you ask), he is widely thought of as the leader of Toronto's trio of Harpies. Finding oneself on the receiving end of the Aristocrat's scorn is arguably the surest way to torpedo one's respectability in an avalanche of scorn.",
                statusnum: 3
            }
        },
        {
            _id: "elem-XkNqkZGG",
            attributes: {
                label: "Old Quentin",
                clan: "Malkavian",
                affiliation: "Anarchs",
                generation: "Sixth",
                age: "Elder",
                coterie: "Nightwolves",
                quote: "Didn't your mother teach you it's rude to ask someone their age?",
                image: "https://imgur.com/QRoycDh.jpg",
                "element type": "Kindred",
                description: "Old Quentin is perhaps the most mysterious Anarch in the city—and with a baroness like Monika, that's saying something. Young in appearance and young at heart, he's charmingly cagey when it comes to questions about his age. Is he really, as some whisper, a mighty elder laying low? Or is he a mere neonate enjoying such grandiose suspicions? And his Malkavian lineage invites another question: Does *he* even know? Whatever the case, Old Quentin has served the baroness ably and loyally, and as long as he continues to do so, she's hardly one to point fingers at the peculiarities of others.",
                statusnum: 2
            }
        },
        {
            _id: "elem-XnpyC7zX",
            attributes: {
                label: "Camarilla",
                "element type": "Kindred Organization",
                affiliation: "None",
                category: "Faction"
            }
        },
        {
            _id: "elem-Y83v4eK0",
            attributes: {
                label: "The Piece-Taker",
                clan: "Banu Haqim",
                affiliation: "Autarkis",
                generation: "Seventh",
                age: "Elder",
                quote: "...",
                "element type": "Kindred",
                statusnum: 0
            }
        },
        {
            _id: "elem-Z3U2Kyd7",
            attributes: {
                label: "Bertrice",
                clan: "Gangrel",
                affiliation: "Camarilla",
                generation: "Eighth",
                age: "Elder",
                quote: "Bellanger makes my skin crawl: 'ooh, I broke a nail'. My nails don't break so easily.",
                image: "https://imgur.com/xBD3G4b.jpg",
                "element type": "Kindred",
                description: "Beloved by the harpies, a rapier wit in Elysia, and possessed of beauty so refined she stuck an ever-present thorn in Primogen Bellanger’s side, Bertrice is as far from the typical Gangrel as one can get: her affinity for boardrooms and salons ensured that she continued to be welcome on the Council of Primogen long after Justicar Xavier announced the exodus of Clan Gangrel from the Ivory Tower. Recently incensed by Prince Lowell's favourable treatment of Clan Brujah, she abandoned her title and departed for the north of the city. Whether she intends to stay loyal to the Camarilla or declare herself the city's third autarkis remains to be seen.",
                statusnum: 4
            }
        },
        {
            _id: "elem-Z4016NLf",
            attributes: {
                label: "Agnes Bellanger",
                clan: "Toreador",
                affiliation: "Camarilla",
                generation: "Eighth",
                age: "Elder",
                titles: "Primogen",
                quote: "Darling, I've taken the liberty of cleaning up your mess. I'll let you know when and how you can thank me.",
                image: "https://imgur.com/B5KSRuF.jpg",
                "element type": "Kindred",
                description: "Born a peasant girl, captured by pirates, and sold in Istanbul to her eventual sire, Agnes has lived a storied history that brought her to Toronto (then Fort York) in the 1800s. After a century travelling Europe, she returned to the city in the 1970's and established herself in her former haven: the opulant palace of Casa Loma. There, her pedigree, political prowess, and thirst for vengeance against the Sword of Caine saw her swiftly rise to power as the foremost vampire of the Clan of the Rose. Agnes Bellanger continues to serve on the Council of Primogen, and oversees the city's most popular Elysium at the castle she has made her home.",
                statusnum: 5
            }
        },
        {
            _id: "elem-Z5q59lKJ",
            attributes: {
                label: "Mortals",
                affiliation: "None",
                category: "Grouping",
                "element type": "Mortal Organization"
            }
        },
        {
            _id: "elem-ZnzasEKn",
            attributes: {
                label: "Leah Hawk",
                clan: "Gangrel",
                affiliation: "Anarchs",
                generation: "Eleventh",
                age: "Neonate",
                coterie: "Nightwolves",
                quote: "Put your fangs away. We're going to have a polite conversation, and then you're going to tell me everything I need to know.",
                image: "https://imgur.com/Rob69iX.jpg",
                "element type": "Kindred",
                description: "Leah Hawk is as much a hunter as her Gangrel kin, though her quarry is unconventional: The prey she stalks is information, leverage, and she runs it down with all the tenacity of a wolf. As a member of the Nightwolves, Leah serves to balance her more blood-thirsty coterie-mates; without her (and Old Quentin), the Nightwolves would be hard-pressed to accomplish anything approaching subtlety.",
                statusnum: 1
            }
        },
        {
            _id: "elem-ZrfXmSdf",
            attributes: {
                label: "Rosie",
                clan: "Nosferatu",
                affiliation: "Anarchs",
                generation: "Ninth",
                age: "Ancilla",
                titles: "Emissary",
                coterie: "Red Flag",
                quote: "Your willingness to sit at my table tells me all I need to know.",
                image: "https://imgur.com/yiJo1LA.jpg",
                "element type": "Kindred",
                description: "A Nosferatu may seem an odd fit for the preeminent diplomat among the Anarchs in Toronto, but Rosie has at least fifty years of experience negotiating with dangerous predators—and her record of success speaks for itself. Emphasizing mutual self-interest and refreshing (if biting) authenticity, Rosie was always the obvious choice to lead Red Flag's overtures to the Camarilla on behalf of the Anarch Movement.",
                statusnum: 4
            }
        },
        {
            _id: "elem-ZuxCijD4",
            attributes: {
                label: "Alistair Etrata",
                clan: "Banu Haqim",
                affiliation: "Camarilla",
                generation: "Sixth",
                age: "Elder",
                titles: "Primogen",
                quote: "I am no Assamite. Those you call Assamites are the enemies of my people. Thralls to the blood god Ur-Shulgi, they cloister themselves at Alamut—for now.",
                image: "https://i.imgur.com/1eenDNe.jpg",
                "element type": "Kindred",
                description: "Arriving in Toronto at the invitation of an Anarch is an unlikely start for a primogen. Nevertheless, he found himself in a city experiencing a power vacuum just as the Banu Haqim had been admitted into the Camarilla, and he exploited these circumstances adroitly——undoubtedly assisted by the strength of his old Blood. In a very short period of time, he demonstrated both his loyalty to the Camarilla and his ability to serve his clan as their primogen. His activities since have been subtle: either Alistair is wary of causing anyone to regret his appointment, or——more likely——he is guarding his intentions from everyone except, perhaps, his childe Sinclair.",
                statusnum: 5
            }
        },
        {
            _id: "elem-a99tfhqN",
            attributes: {
                label: "University of Toronto",
                affiliation: "Mortals",
                category: "Subgroup",
                "element type": "Mortal Organization"
            }
        },
        {
            _id: "elem-aUhyDcYm",
            attributes: {
                label: "Mason Schmidt",
                clan: "Brujah",
                affiliation: "Anarchs",
                generation: "Twelfth",
                age: "Neonate",
                coterie: "The Line",
                quote: "Union Station is half a million square feet of twisting corridors, dozens of entrances, and two hundred thousand daily travellers. Keeping unwanted visitors out of there? It's only part of our job.",
                image: "https://imgur.com/rhJ1SxF.jpg",
                "element type": "Kindred",
                description: "There are downsides to having an incommunicative Malkavian prophet as your Boss, and inflexibility in the field is one of them. Mason Schmidt was Embraced to solve this problem. He had distinguished himself at the RMC military academy, where his keen strategic mind earned him top honors in military wargame exercises. Schmidt acts as the Line's tactical command, with full authority in the field to... \"calibrate\" Sage Sam's orders with the facts on the ground.",
                statusnum: 2
            }
        },
        {
            _id: "elem-bHD13BvR",
            attributes: {
                label: "Bookies",
                affiliation: "Mortals",
                "element type": "Mortal Organization",
                category: "Subgroup"
            }
        },
        {
            _id: "elem-bM2O8jfK",
            attributes: {
                label: "The Line",
                affiliation: "Anarchs",
                category: "Subgroup",
                "element type": "Kindred Organization"
            }
        },
        {
            _id: "elem-bSg6Vn3k",
            attributes: {
                label: "AVA WONG",
                clan: "Malkavian",
                affiliation: "Anarchs",
                generation: "Twelfth",
                age: "Neonate",
                "sire/regnant": "Baroness Monika Eulenberg",
                coterie: "Masque",
                "element type": "Kindred",
                statusnum: 2,
                tags: [
                    "PC"
                ]
            }
        },
        {
            _id: "elem-cYLgsFYJ",
            attributes: {
                label: "LOCKE ULRICH",
                clan: "Ventrue",
                affiliation: "Anarchs",
                generation: "Tenth",
                age: "Ancilla",
                "sire/regnant": "Prince Osborne Lowell",
                coterie: "Masque",
                "element type": "Kindred",
                statusnum: 2,
                tags: [
                    "PC"
                ]
            }
        },
        {
            _id: "elem-cq22SLcu",
            attributes: {
                label: "Laz, Sheriff",
                clan: "Nosferatu",
                affiliation: "Camarilla",
                generation: "Tenth",
                age: "Ancilla",
                titles: "Sheriff",
                quote: "Am I really the only one who gives a flying fuck about this city?",
                image: "https://imgur.com/uuDyDgH.jpg",
                "element type": "Kindred",
                description: "As Camarilla sheriff, Laz stands on the front lines of Toronto's defense: the responsibility for keeping the city secure ultimately rests on his shoulders. But with so many Camarilla elders abandoning their domains for the Middle East, Laz is becoming desperate: desperate enough to pursue an alliance with the Anarchs, which has made him less than popular among the remaining Camarilla old guard.",
                statusnum: 4
            }
        },
        {
            _id: "elem-dbi4GPVq",
            attributes: {
                label: "DR. ARTHUR ROY",
                clan: "Tremere",
                affiliation: "Anarchs",
                generation: "Twelfth",
                age: "Neonate",
                coterie: "Masque",
                "element type": "Kindred",
                statusnum: 3,
                tags: [
                    "PC"
                ]
            }
        },
        {
            _id: "elem-fII3nKC1",
            attributes: {
                label: "Heralds",
                affiliation: "Camarilla",
                category: "Subgroup",
                "element type": "Kindred Organization"
            }
        },
        {
            _id: "elem-fTzC73rY",
            attributes: {
                label: "Kai",
                clan: "Ministry",
                affiliation: "Anarchs",
                generation: "Tenth",
                age: "Neonate",
                "sire/regnant": "Ren",
                coterie: "Redemption House",
                quote: "Woo! What a night, am I right? Same time tomorrow, then?",
                image: "https://imgur.com/WuzsqlA.jpg",
                "element type": "Kindred",
                description: "Of Ren's three childer, Kai is the relentlessly-free spirit that spurs ever-cautious Tyler to action and invests ever-tranquil Alexandra with conviction. It was Kai who persuaded the Redeemers to fight on the night of Vykos' attack, in spite of the icy reception the Ministry had received from the Anarchs before then. As the youngest of the Redeemers, Kai has yet to develop the innate paranoia characteristic of the Kindred; whether his eagerness to trust others is a strength or a weakness remains to be seen.",
                statusnum: 1
            }
        },
        {
            _id: "elem-gEfLoW0o",
            attributes: {
                label: "Jane 'JD' Doe",
                clan: "Brujah",
                affiliation: "Anarchs",
                generation: "Eleventh",
                age: "Neonate",
                coterie: "Men-In-Black",
                quote: "Last night I was Sister Selene, who proved unable to unburden her petitioner of his 'delusions'. Tonight I will be Candy: perhaps the sins of the flesh can do what God could not.",
                image: "https://imgur.com/Mfva68Z.jpg",
                "element type": "Kindred",
                description: "Jane Doe is not her real name, but that hardly matters: She becomes someone new every night, adopting personas and aliases as easily as a new pair of shoes. Even her closest allies aren't sure if they've ever met the \"real\" Brujah behind the ever-changing masks. As boss of the Men-In-Black, Jane bears ultimate responsibility for upholding the Masquerade—and the baroness has given her unprecedented latitude to do whatever she deems necessary to carry out this duty.",
                statusnum: 3
            }
        },
        {
            _id: "elem-gRiuz7r9",
            attributes: {
                label: "Prince Osborne Lowell",
                clan: "Ventrue",
                affiliation: "Camarilla",
                generation: "Ninth",
                age: "Ancilla",
                titles: "Prince",
                quote: "Do you think I enjoy overseeing this shell of a former city? I serve because I must. I serve because no one else will.",
                image: "https://imgur.com/JK6cnOr.jpg",
                "element type": "Kindred",
                description: "Under the Iron Praxis, no one would have predicted that this unassuming ancilla would eventually rule the city as prince. He was known and respected, of that there is no doubt, but his ambitions were less grand than most——especially among the Ventrue. One may assume that his eventual (and, by all outward appearances, reluctant) rise to the throne was the result of a compromise among those older and more powerful: the choice that ruffled the fewest feathers, a candidate who could be kept on a short leash.",
                statusnum: 5
            }
        },
        {
            _id: "elem-gvt53mKm",
            attributes: {
                label: "Masque",
                affiliation: "Anarchs",
                category: "Subgroup",
                "element type": "Kindred Organization"
            }
        },
        {
            _id: "elem-i3TfghPo",
            attributes: {
                label: "Jarvis Jacks",
                affiliation: "Anarchs",
                category: "Subgroup",
                "element type": "Kindred Organization"
            }
        },
        {
            _id: "elem-iJ6Oj4YP",
            attributes: {
                label: "Kit Edwards",
                clan: "Thin-Blooded",
                affiliation: "Anarchs",
                generation: "Fourteenth",
                age: "Neonate",
                "sire/regnant": "Mr. Easy",
                coterie: "Men-In-Black",
                "element type": "Kindred",
                statusnum: 0
            }
        },
        {
            _id: "elem-jAZtFSJG",
            attributes: {
                label: "Xavier Whitchurch",
                clan: "Ventrue",
                affiliation: "Camarilla",
                generation: "Eleventh",
                age: "Neonate",
                titles: "Harpy",
                quote: "It is not my *duty* to remind you of what you owe and to whom. It is my *privilege* to make you into an example so persuasive that no one else will mistake the obligations of prestation for a dead custom of times gone by.",
                image: "https://i.imgur.com/xZ91V4n.jpg",
                "element type": "Kindred",
                description: "Of Toronto's three harpies, Xavier doesn't claim the spotlight with the same effervescent ease shared by the Aristocrat and Christianne. But it is precisely because of Xavier's dedication to his work that his two coterie-mates are free to shine so brightly. For it is a city's harpies who are the ultimate caretakers of prestation, the economy of favors owed and repaid, without which civil Kindred society may well collapse. Xavier's approach to upholding prestation is unconventional: Ill-tempered for detailed book-keeping, he instead elects for deterrence. With the Puck's enthusiastic support, Xavier makes any violations of the custom very painful, very public, and utterly unforgettable.",
                statusnum: 3
            }
        },
        {
            _id: "elem-kBeJZyWZ",
            attributes: {
                label: "Ren",
                clan: "Ministry",
                affiliation: "Anarchs",
                generation: "Ninth",
                age: "Ancilla",
                coterie: "Redemption House",
                quote: "Do not be afraid: the path to redemption always begins in the dark. Take my hand, and we will find the light together.",
                image: "https://imgur.com/h9ylClE.jpg",
                "element type": "Kindred",
                description: "The enigmatic and rarely-seen sire and leader of the Redeemers, Ren sits at the center of Ministry activity in Toronto. He effortlessly commands the unquestioning devotion of his childer, who speak his name with nigh Messianic fervor. To hear them tell it, an hour of Ren's counsel is a boon worthy of a prince—and there is evidence to support their assessment: Throngs of kine living in the Danforth have been transformed by his teachings at Redemption House, and Ren has apparently tamed even the fierce independence of the strong-willed Anarch Kingston Black, the former boss of Masque.",
                statusnum: 2
            }
        },
        {
            _id: "elem-ldkC4JnZ",
            attributes: {
                label: "Reaper",
                clan: "Gangrel",
                affiliation: "Anarchs",
                generation: "Eleventh",
                age: "Neonate",
                coterie: "Nightwolves",
                quote: "Shhhhhh. Sleep, now. This doesn't have to hurt.",
                image: "https://imgur.com/6jw7dMt.jpg",
                "element type": "Kindred",
                description: "Reaper is as centered as he is vicious, approaching the grizly work at which he excels with Zen-like serenity. And excel he does; the \"Reaper\" sobriquet was bestowed on him by J in recognition of the fact that he has ended the lives and unlives of more of the Anarch Movement's enemies than anyone else in the city—and the body count continues to rise.",
                statusnum: 1
            }
        },
        {
            _id: "elem-lgEiuLTv",
            attributes: {
                label: "Suyin",
                affiliation: "Anarchs",
                coterie: "The Line",
                "element type": "Mortal",
                statusnum: 2
            }
        },
        {
            _id: "elem-mXLn3Y2p",
            attributes: {
                label: "Anarch",
                affiliation: "None",
                "element type": "Kindred Organization",
                category: "Faction"
            }
        },
        {
            _id: "elem-mYdmZEeM",
            attributes: {
                label: "Kingston 'King' Black",
                clan: "Brujah",
                affiliation: "Anarchs",
                generation: "Twelfth",
                age: "Neonate",
                "sire/regnant": "Maxwell 'Max' Floyd",
                coterie: "Redemption House",
                quote: "This House holds secrets I need to know, and I am stronger than they think.",
                "element type": "Kindred",
                statusnum: 1
            }
        },
        {
            _id: "elem-ntChar2V",
            attributes: {
                label: "Soraya Mortazavi",
                clan: "Ministry",
                affiliation: "Camarilla",
                generation: "Eighth",
                age: "Ancilla",
                "sire/regnant": "Cyrus Raza",
                coterie: "Ascetic Ministry",
                "element type": "Kindred",
                statusnum: 1
            }
        },
        {
            _id: "elem-oBij42Jr",
            attributes: {
                label: "Eddie DeFrey",
                affiliation: "Anarchs",
                "sire/regnant": "Baroness Monika Eulenberg",
                coterie: "Daylighters",
                "element type": "Ghoul",
                statusnum: 0
            }
        },
        {
            _id: "elem-oG2fWCPA",
            attributes: {
                label: "BACCHUS GIOVANNI",
                clan: "Hecata",
                affiliation: "Independent",
                generation: "Tenth",
                age: "Ancilla",
                "element type": "Kindred",
                statusnum: 0,
                tags: [
                    "PC"
                ]
            }
        },
        {
            _id: "elem-pDc4YXJ2",
            attributes: {
                label: "Stalker Todd",
                clan: "Gangrel",
                affiliation: "Anarchs",
                generation: "Eleventh",
                age: "Neonate",
                coterie: "Nightwolves",
                quote: "Please, run. Dawn approaches; you might even get away.",
                image: "https://imgur.com/jdWasdY.jpg",
                "element type": "Kindred",
                description: "There is perhaps no more effective hunter among the Anarchs than Stalker Todd. Patient, thorough, calculating and meticulous, once he has caught wind of his quarry, there is no escape. He relishes the hunt, and its end even more—each kill is a work of art; a statement that cannot be ignored; a warning to others who would stand against the baroness.",
                statusnum: 1
            }
        },
        {
            _id: "elem-pmjK5sNF",
            attributes: {
                label: "Jason",
                clan: "Gangrel",
                affiliation: "Anarchs",
                generation: "Thirteenth",
                age: "Neonate",
                coterie: "Men-In-Black",
                quote: "Just a thought, but has anyone considered *not* murder?",
                image: "https://imgur.com/cAcnc48.jpg",
                "element type": "Kindred",
                description: "In contrast to sharing his chosen name with a brutal horror movie monster, Jason lacks the feral nature typical of the Gangrel—indeed, he is among the more measured voices in the Anarch Movement. This isn't to say the boy lacks teeth: His rivalry with Ben Blinker is legendary, fraught with frequent games of one-upsmanship that more than once have threatened to drive the Men-In-Black apart.",
                statusnum: 2
            }
        },
        {
            _id: "elem-q6140QEx",
            attributes: {
                label: "Cardinal Collins",
                faction: "St. Leopold",
                affiliation: "Second Inquisition",
                titles: "High Inquisitor",
                coterie: "St. Michael's Cell",
                "element type": "Mortal",
                clan: "St. Leopold",
                statusnum: 5
            }
        },
        {
            _id: "elem-qiC1nUCh",
            attributes: {
                label: "Council of Primogen",
                affiliation: "Camarilla",
                category: "Subgroup",
                "element type": "Kindred Organization"
            }
        },
        {
            _id: "elem-qp0cI8dD",
            attributes: {
                label: "Sage Sam",
                clan: "Malkavian",
                affiliation: "Anarchs",
                generation: "Ninth",
                age: "Ancilla",
                coterie: "The Line",
                quote: "... the scholar met the silent and the white knight chose a side and the island dark touched the gilded cage and the asps circled their king and all joined hands and sent up a flare ...",
                image: "https://imgur.com/F6xF17A.jpg",
                "element type": "Kindred",
                description: "Cursed with a never-ending stream of prophecy that must be spoken aloud, Sage Sam wears a perpetual cloak of silence and communicates via sign language with the help of his mortal wife, Suyin, now almost ninety years of age. As boss of the Line, the baroness has entrusted Sam with securing Toronto's borders and managing inter-city travel.",
                statusnum: 3
            }
        },
        {
            _id: "elem-r0E7356g",
            attributes: {
                label: "Flamenco",
                faction: "FIRSTLIGHT",
                affiliation: "Second Inquisition",
                titles: "Agent",
                coterie: "St. Michael's Cell",
                "element type": "Mortal",
                clan: "FIRSTLIGHT",
                statusnum: 3
            }
        },
        {
            _id: "elem-r2OyZSd6",
            attributes: {
                label: "Primogen",
                "element type": "Kindred Organization",
                affiliation: "Camarilla"
            }
        },
        {
            _id: "elem-rDlYIMT8",
            attributes: {
                label: "Professor Ethan Keen",
                clan: "Malkavian",
                affiliation: "Anarchs",
                generation: "Thirteenth",
                age: "Neonate",
                coterie: "Red Flag",
                quote: "In conclusion, I submit a seventy percent confidence in the legitimacy of the sheriff's professed good intentions.",
                image: "https://imgur.com/np6xHAy.jpg",
                "element type": "Kindred",
                description: "Professor Ethan Keen is a peerless expert on the psychology of emotion, an impressive feat given he has been incapable of feeling emotions of any kind since his Embrace into the Clan of Malkav. His rational analysis and piercing insights into the Kindred psyche are invaluable to Red Flag's diplomatic efforts, albeit on the back lines—his calculating demeanor is an ill fit to the nuances of negotiation.",
                statusnum: 3
            }
        },
        {
            _id: "elem-s9P0pamU",
            attributes: {
                label: "Ralph Morgan",
                affiliation: "Anarchs",
                "sire/regnant": "Baroness Monika Eulenberg",
                coterie: "Daylighters",
                "element type": "Ghoul",
                statusnum: 0
            }
        },
        {
            _id: "elem-tsO3O6DH",
            attributes: {
                label: "Adrian Gerrard",
                clan: "Brujah",
                affiliation: "Camarilla",
                generation: "Eighth",
                age: "Elder",
                quote: "I am not Theo Bell. We grieve with our Ventrue brothers over the loss of Hardestadt, and will honor the legacy of Prince Steele for as long as you will have us.",
                image: "https://imgur.com/tidZJ57.jpg",
                "element type": "Kindred",
                description: "As primogen, Gerrard served Prince Steele as a capable administrator, accountant, and power broker, claiming more influence over the investment and commercial banks of Toronto than any other Kindred. Tonight, he remains the eldest Brujah in the city, and works diligently to restore his clan's former place in the Camarilla after the treachery of Theo Bell at the Conclave of Prague and his unceremonious expulsion from the Council of Primogen.",
                statusnum: 3
            }
        },
        {
            _id: "elem-u9o2DTre",
            attributes: {
                label: "Carlos 'CD' Daniels",
                affiliation: "Anarchs",
                "sire/regnant": "Baroness Monika Eulenberg",
                coterie: "Daylighters",
                "element type": "Ghoul",
                statusnum: 0
            }
        },
        {
            _id: "elem-uZrkGhby",
            attributes: {
                label: "Anarchs",
                "element type": "Kindred Organization",
                affiliation: "None",
                category: "Faction"
            }
        },
        {
            _id: "elem-vCYi7JE6",
            attributes: {
                label: "Tyler",
                clan: "Ministry",
                affiliation: "Anarchs",
                generation: "Tenth",
                age: "Neonate",
                "sire/regnant": "Ren",
                coterie: "Redemption House",
                quote: "Sex, drugs, rock n' roll. Don't give into one of them. Give in to 'em all... in moderation. That's the ticket.",
                image: "https://imgur.com/7rv5jq9.jpg",
                "element type": "Kindred",
                description: "Of Ren's three childer, Tyler is the rock that anchors Alexandra's lofty idealism and grounds Kai's more-reckless impulses. The eldest of Ren's childer, Tyler is protective of his sire and wary of potential threats to his unlife; as such, he is more reluctant than his siblings to welcome others into their circle of trust.",
                statusnum: 1
            }
        },
        {
            _id: "elem-vW7ZJ6Zk",
            attributes: {
                label: "Frederik Scheer, Seneschal",
                clan: "Tremere",
                affiliation: "Camarilla",
                generation: "Eighth",
                age: "Elder",
                titles: "Seneschal",
                quote: "The Camarilla has held Toronto for four hundred years, and we shall hold it for four hundred more.",
                image: "https://imgur.com/lTYDFr4.jpg",
                "element type": "Kindred",
                description: "Frederik Scheer has been a driving force behind Camarilla control over Toronto for at least two hundred years. As seneschal to the indomitable Prince Steele, Scheer developed a reputation for ruthless loyalty to the Ivory Tower. Tonight, with a new and untested ancilla holding Praxis, his power has only grown——causing many to wonder who *really* calls the shots in the city.",
                statusnum: 5
            }
        },
        {
            _id: "elem-wSqntIy8",
            attributes: {
                label: "Maxwell 'Max' Floyd",
                clan: "Brujah",
                affiliation: "Anarchs",
                generation: "Eleventh",
                age: "Neonate",
                coterie: "Jarvis Jacks",
                quote: "You must be pretty fucking desperate to come down here to treat with the trash. That's fine by me. I can work with desperate.",
                image: "https://imgur.com/mH1xwLJ.jpg",
                "element type": "Kindred",
                description: "It's better to reign in Hell than to serve in Heaven, and Max has certainly carved out a hellish principality for himself and his small coterie of ill repute. Until recently, the Jarvis Jacks controlled the largest Anarch domain in Toronto despite being the smallest Anarch coterie. Sure, their territory is hardly sought after, but the Jarvis Jacks' lucrative grip on the city's crime is iron-clad—and completely unopposed.",
                statusnum: 1
            }
        },
        {
            _id: "elem-xMaVpYbo",
            attributes: {
                label: "Autarkes",
                "element type": "Kindred Organization"
            }
        },
        {
            _id: "elem-xZYFQ1OL",
            attributes: {
                label: "Jonathan Harker",
                faction: "FIRSTLIGHT",
                affiliation: "Second Inquisition",
                titles: "Junior Agent",
                coterie: "St. Michael's Cell",
                "element type": "Mortal",
                clan: "FIRSTLIGHT",
                statusnum: 2
            }
        },
        {
            _id: "elem-xcMt8om4",
            attributes: {
                label: "Sinclair Rodriguez",
                clan: "Banu Haqim",
                affiliation: "Camarilla",
                generation: "Eighth",
                age: "Ancilla",
                "sire/regnant": "Alistair Etrata",
                "element type": "Kindred",
                statusnum: 1
            }
        },
        {
            _id: "elem-yAq5SvWd",
            attributes: {
                label: "Damien Abanda",
                clan: "Toreador",
                affiliation: "Anarchs",
                generation: "Eleventh",
                age: "Neonate",
                coterie: "Red Flag",
                quote: "Appearances can be deceiving, yes, but they can also be impressive. Should we not aim to impress our supposed betters?",
                image: "https://imgur.com/qady8T3.jpg",
                "element type": "Kindred",
                description: "Damien Abanda has a chip on his shoulder: as the only Toreador Anarch in the city, he obviously considers himself to be the resident expert in etiquette, style, presentation and Camarilla sensibilities. On this, he may even be right: Rosie herself defers to his opinions on such matters, even if she rarely allows his condescending attitude anywhere near the negotiations themselves.",
                statusnum: 3
            }
        },
        {
            _id: "elem-yWU8seC6",
            attributes: {
                label: "Sang-Froid",
                clan: "Nosferatu",
                affiliation: "Sabbat",
                generation: "Tenth",
                age: "Neonate",
                "element type": "Kindred",
                statusnum: 1
            }
        }
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
                    _id: "node-0XxKlrPk",
                    position: {
                        x: -614.4400750001749,
                        y: 119.92928581780407
                    },
                    pinned: true,
                    element: "elem-WwKpxjvp"
                },
                {
                    _id: "node-0y0HmYgF",
                    position: {
                        x: -100.74808053818175,
                        y: 864.9986271484745
                    },
                    pinned: true,
                    element: "elem-uZrkGhby"
                },
                {
                    _id: "node-1jUmPjH8",
                    position: {
                        x: -1424.4380799124394,
                        y: 1003.91843260883
                    },
                    pinned: true,
                    element: "elem-bHD13BvR"
                },
                {
                    _id: "node-271fhJgB",
                    position: {
                        x: 392.08013284781083,
                        y: -965.5606921318206
                    },
                    pinned: true,
                    element: "elem-XM7Z3oB2"
                },
                {
                    _id: "node-5AEjiGg1",
                    position: {
                        x: 480.20947457302884,
                        y: 59.604508289672296
                    },
                    pinned: true,
                    element: "elem-MYu9OR7K"
                },
                {
                    _id: "node-5MEM0L1u",
                    position: {
                        x: 38.97904433112046,
                        y: -1932.8769727399576
                    },
                    pinned: true,
                    element: "elem-Z4016NLf"
                },
                {
                    _id: "node-6l8kzb6N",
                    position: {
                        x: 958.9102427037533,
                        y: -325.2625834338655
                    },
                    pinned: true,
                    element: "elem-xZYFQ1OL"
                },
                {
                    _id: "node-7UTzVjWy",
                    position: {
                        x: -1202.140672871347,
                        y: 862.7138825042989
                    },
                    pinned: true,
                    element: "elem-9kCRRaqW"
                },
                {
                    _id: "node-8ZpjvYbv",
                    position: {
                        x: -740.7192314328298,
                        y: -1254.4050131108045
                    },
                    pinned: true,
                    element: "elem-ntChar2V"
                },
                {
                    _id: "node-8vw5tBm6",
                    position: {
                        x: -818.7512500175444,
                        y: 1647.852363448161
                    },
                    pinned: true,
                    element: "elem-kBeJZyWZ"
                },
                {
                    _id: "node-90HCZaQr",
                    position: {
                        x: -1612.2239744612773,
                        y: 240.06817490189937
                    },
                    pinned: true,
                    element: "elem-Y83v4eK0"
                },
                {
                    _id: "node-9LTU7bck",
                    position: {
                        x: 9.936041945704044,
                        y: 1695.5827648903733
                    },
                    pinned: true,
                    element: "elem-2SyQOSrK"
                },
                {
                    _id: "node-A4PfiYPr",
                    position: {
                        x: -614.772184122107,
                        y: 1568.3606894777924
                    },
                    pinned: true,
                    element: "elem-mYdmZEeM"
                },
                {
                    _id: "node-AQfFTx3N",
                    position: {
                        x: -861.646989197635,
                        y: -1035.3982531197555
                    },
                    pinned: true,
                    element: "elem-SQUJyRdD"
                },
                {
                    _id: "node-AloCX0fg",
                    position: {
                        x: 174.12555383886263,
                        y: -755.6737905738102
                    },
                    pinned: true,
                    element: "elem-gRiuz7r9"
                },
                {
                    _id: "node-B6cwlQov",
                    position: {
                        x: -836.7519788662865,
                        y: -1577.3238540950244
                    },
                    pinned: true,
                    element: "elem-xcMt8om4"
                },
                {
                    _id: "node-BmLk5U91",
                    position: {
                        x: 1676.3338724989267,
                        y: -1011.1967165350958
                    },
                    pinned: true,
                    element: "elem-4vwbcIOl"
                },
                {
                    _id: "node-CHALVJAB",
                    position: {
                        x: -409.13684280827397,
                        y: -411.06250556472395
                    },
                    pinned: true,
                    element: "elem-cq22SLcu"
                },
                {
                    _id: "node-CHV9DAb7",
                    position: {
                        x: 617.765069924995,
                        y: 861.1556993903255
                    },
                    pinned: true,
                    element: "elem-E4dCgRtJ"
                },
                {
                    _id: "node-CoLtj9ET",
                    position: {
                        x: 62.72174388612122,
                        y: -118.89582952669815
                    },
                    pinned: true,
                    element: "elem-cYLgsFYJ"
                },
                {
                    _id: "node-D64HCCYq",
                    position: {
                        x: 361.7908650077971,
                        y: 1331.0124871164346
                    },
                    pinned: true,
                    element: "elem-Ct4iVKZw"
                },
                {
                    _id: "node-DKhY3qJM",
                    position: {
                        x: 932.3221609653972,
                        y: 1029.2299968835382
                    },
                    pinned: true,
                    element: "elem-iJ6Oj4YP"
                },
                {
                    _id: "node-DVhO50s0",
                    position: {
                        x: 1062.4553431254956,
                        y: 296.0434968392736
                    },
                    pinned: true,
                    element: "elem-yWU8seC6"
                },
                {
                    _id: "node-EIKOGRXM",
                    position: {
                        x: -1765.7063997265175,
                        y: 1270.333515554475
                    },
                    pinned: true,
                    element: "elem-Z5q59lKJ"
                },
                {
                    _id: "node-ENtcTwlY",
                    position: {
                        x: -111.89011979161329,
                        y: -258.8066571520049
                    },
                    pinned: true,
                    element: "elem-dbi4GPVq"
                },
                {
                    _id: "node-EVWsaA6x",
                    position: {
                        x: 414.49202547038027,
                        y: 1127.1186166109285
                    },
                    pinned: true,
                    element: "elem-u9o2DTre"
                },
                {
                    _id: "node-FddhsMkh",
                    position: {
                        x: -822.8514258156894,
                        y: 548.7096812126355
                    },
                    pinned: true,
                    element: "elem-aUhyDcYm"
                },
                {
                    _id: "node-GK9AejJr",
                    position: {
                        x: -102.29936092918997,
                        y: 1890.019405749109
                    },
                    pinned: true,
                    element: "elem-wSqntIy8"
                },
                {
                    _id: "node-IdEte55J",
                    position: {
                        x: 1165.2511638803185,
                        y: 490.8332325855919
                    },
                    pinned: true,
                    element: "elem-LDy8Lwea"
                },
                {
                    _id: "node-JJYw2iAc",
                    position: {
                        x: 812.0167105163764,
                        y: 1036.5011768753138
                    },
                    pinned: true,
                    element: "elem-R4fd0WUH"
                },
                {
                    _id: "node-Kj0X9g1L",
                    position: {
                        x: -800.7709893996482,
                        y: 1210.5074667743274
                    },
                    pinned: true,
                    element: "elem-fTzC73rY"
                },
                {
                    _id: "node-KkSaVXKc",
                    position: {
                        x: -1130.543393854849,
                        y: 1076.0021774142756
                    },
                    pinned: true,
                    element: "elem-pDc4YXJ2"
                },
                {
                    _id: "node-LuRUKqJl",
                    position: {
                        x: -580.5311853715045,
                        y: -123.26706077680473
                    },
                    pinned: true,
                    element: "elem-oG2fWCPA"
                },
                {
                    _id: "node-MGnowchI",
                    position: {
                        x: -523.3246583726667,
                        y: -571.8452611675915
                    },
                    pinned: true,
                    element: "elem-PldNEafF"
                },
                {
                    _id: "node-N9fJBJ8L",
                    position: {
                        x: 1252.0795547177988,
                        y: -759.2544388799711
                    },
                    pinned: true,
                    element: "elem-EbZYoX6M"
                },
                {
                    _id: "node-NkIH0V48",
                    position: {
                        x: -512.893497476525,
                        y: -1939.1825807181926
                    },
                    pinned: true,
                    element: "elem-IJMkc8Qp"
                },
                {
                    _id: "node-PfjfM9hV",
                    position: {
                        x: -1125.2336040436917,
                        y: 730.0553367738826
                    },
                    pinned: true,
                    element: "elem-XkNqkZGG"
                },
                {
                    _id: "node-QSQpD0Qc",
                    position: {
                        x: -992.1259890688995,
                        y: -374.3145067541654
                    },
                    pinned: true,
                    element: "elem-6FPBRlur"
                },
                {
                    _id: "node-QVPW7r3Z",
                    position: {
                        x: 574.0415328792152,
                        y: 1310.356668924796
                    },
                    pinned: true,
                    element: "elem-JZv7MPQU"
                },
                {
                    _id: "node-QXm44Tdz",
                    position: {
                        x: 300.2504068752127,
                        y: -1444.0505128504744
                    },
                    pinned: true,
                    element: "elem-06Bv04rf"
                },
                {
                    _id: "node-Qr2hYgBD",
                    position: {
                        x: -573.7963999345269,
                        y: -1107.5463292611125
                    },
                    pinned: true,
                    element: "elem-SwrPW5Du"
                },
                {
                    _id: "node-QzIrzZ0Z",
                    position: {
                        x: -799.0312422580593,
                        y: 1443.3953416640663
                    },
                    pinned: true,
                    element: "elem-vCYi7JE6"
                },
                {
                    _id: "node-Rfk9bcvf",
                    position: {
                        x: 40.84579086381519,
                        y: -1645.4816988874538
                    },
                    pinned: true,
                    element: "elem-9wJl3bKN"
                },
                {
                    _id: "node-SaYrDOL7",
                    position: {
                        x: -1872.470717487423,
                        y: -261.8684332182129
                    },
                    pinned: true,
                    element: "elem-MgAs9E8z"
                },
                {
                    _id: "node-Ss38c1Tp",
                    position: {
                        x: 668.221878791734,
                        y: 284.06266874971044
                    },
                    pinned: true,
                    element: "elem-rDlYIMT8"
                },
                {
                    _id: "node-TKptnbLj",
                    position: {
                        x: -827.043549953843,
                        y: 867.6184668514525
                    },
                    pinned: true,
                    element: "elem-P0kEQ82z"
                },
                {
                    _id: "node-TiXqxtXA",
                    position: {
                        x: -798.401585168213,
                        y: 1328.195271854171
                    },
                    pinned: true,
                    element: "elem-VNouRAtJ"
                },
                {
                    _id: "node-UOJDBDOb",
                    position: {
                        x: -656.5443448233224,
                        y: -913.6742008712914
                    },
                    pinned: true,
                    element: "elem-2ZfwihlY"
                },
                {
                    _id: "node-UbXJMKM2",
                    position: {
                        x: 623.7905076935002,
                        y: 1576.2764854007396
                    },
                    pinned: true,
                    element: "elem-Gx2EWq17"
                },
                {
                    _id: "node-V4rO4zOq",
                    position: {
                        x: 806.3737778488096,
                        y: 1143.903897603503
                    },
                    pinned: true,
                    element: "elem-3JVB74Rq"
                },
                {
                    _id: "node-WrPqQ8YW",
                    position: {
                        x: -233.54568690275272,
                        y: -1768.384699547178
                    },
                    pinned: true,
                    element: "elem-qiC1nUCh"
                },
                {
                    _id: "node-XHYjpgeh",
                    position: {
                        x: -115.59328217347421,
                        y: 175.48108129185547
                    },
                    pinned: true,
                    element: "elem-gvt53mKm"
                },
                {
                    _id: "node-XvrG9L7f",
                    position: {
                        x: 344.89297968868476,
                        y: 390.6522795834462
                    },
                    pinned: true,
                    element: "elem-XIhzrpBK"
                },
                {
                    _id: "node-XzyHHrTo",
                    position: {
                        x: 388.12639240929275,
                        y: -1270.1797087655855
                    },
                    pinned: true,
                    element: "elem-509gUGFU"
                },
                {
                    _id: "node-Y8lrMhWp",
                    position: {
                        x: -1433.963748070695,
                        y: -140.3847459354746
                    },
                    pinned: true,
                    element: "elem-L9ICpAnS"
                },
                {
                    _id: "node-YXkmaVYn",
                    position: {
                        x: -1761.2576930187458,
                        y: 827.6620690875717
                    },
                    pinned: true,
                    element: "elem-UsJPURsi"
                },
                {
                    _id: "node-Yzasq03N",
                    position: {
                        x: 164.57982713757568,
                        y: -1138.2298594195258
                    },
                    pinned: true,
                    element: "elem-fII3nKC1"
                },
                {
                    _id: "node-Zxr37AsL",
                    position: {
                        x: 294.69955475570777,
                        y: 1136.5645572665946
                    },
                    pinned: true,
                    element: "elem-oBij42Jr"
                },
                {
                    _id: "node-a3I7qysY",
                    position: {
                        x: 510.9219854824502,
                        y: 1192.6843578729538
                    },
                    pinned: true,
                    element: "elem-s9P0pamU"
                },
                {
                    _id: "node-b2cx0vNe",
                    position: {
                        x: 791.3131453205888,
                        y: -496.0311906217805
                    },
                    pinned: true,
                    element: "elem-M14Fo6N1"
                },
                {
                    _id: "node-bSY7uavU",
                    position: {
                        x: 1488.0487240585335,
                        y: 226.29903687711953
                    },
                    pinned: true,
                    element: "elem-RRbawm9W"
                },
                {
                    _id: "node-co0ORcFT",
                    position: {
                        x: 1018.7205243188515,
                        y: 865.0376921770137
                    },
                    pinned: true,
                    element: "elem-gEfLoW0o"
                },
                {
                    _id: "node-dNgNwvKj",
                    position: {
                        x: -286.322062266569,
                        y: -116.32084340535278
                    },
                    pinned: true,
                    element: "elem-bSg6Vn3k"
                },
                {
                    _id: "node-dUmy84W4",
                    position: {
                        x: -1128.4431048830872,
                        y: 960.4793301435423
                    },
                    pinned: true,
                    element: "elem-ZnzasEKn"
                },
                {
                    _id: "node-dwvEP3Bb",
                    position: {
                        x: 725.3203619220687,
                        y: 603.7710250635641
                    },
                    pinned: true,
                    element: "elem-OESgHLev"
                },
                {
                    _id: "node-e5HAWguU",
                    position: {
                        x: -832.4785603839589,
                        y: -1418.9214902396914
                    },
                    pinned: true,
                    element: "elem-3Rk81I5i"
                },
                {
                    _id: "node-eRP3FUeY",
                    position: {
                        x: -600.8917509583495,
                        y: 348.47370854460684
                    },
                    pinned: true,
                    element: "elem-bM2O8jfK"
                },
                {
                    _id: "node-i1lSx5f4",
                    position: {
                        x: -677.2744843013709,
                        y: 594.1753400294903
                    },
                    pinned: true,
                    element: "elem-NpYpjBkN"
                },
                {
                    _id: "node-iI0RdarW",
                    position: {
                        x: 1012.2274633786031,
                        y: -1162.9532835000584
                    },
                    pinned: true,
                    element: "elem-q6140QEx"
                },
                {
                    _id: "node-iTOox6g0",
                    position: {
                        x: -216.36530815311215,
                        y: 1695.8496738581364
                    },
                    pinned: true,
                    element: "elem-HojD8Bj8"
                },
                {
                    _id: "node-ikqM40rm",
                    position: {
                        x: 388.3738272633463,
                        y: -1116.4391638831012
                    },
                    pinned: true,
                    element: "elem-jAZtFSJG"
                },
                {
                    _id: "node-j4b9L2G9",
                    position: {
                        x: -1127.360880158121,
                        y: 1214.4593459793546
                    },
                    pinned: true,
                    element: "elem-ldkC4JnZ"
                },
                {
                    _id: "node-jQWHZP3K",
                    position: {
                        x: -1403.701828525295,
                        y: 1477.018939979056
                    },
                    pinned: true,
                    element: "elem-a99tfhqN"
                },
                {
                    _id: "node-jXWBHTKo",
                    position: {
                        x: 299.7527022837102,
                        y: -1602.692695230184
                    },
                    pinned: true,
                    element: "elem-tsO3O6DH"
                },
                {
                    _id: "node-jqasGEnT",
                    position: {
                        x: 848.7875513888723,
                        y: 726.0835856242448
                    },
                    pinned: true,
                    element: "elem-pmjK5sNF"
                },
                {
                    _id: "node-lXQl3vOZ",
                    position: {
                        x: -875.5310635236207,
                        y: 85.7830612752413
                    },
                    pinned: true,
                    element: "elem-qp0cI8dD"
                },
                {
                    _id: "node-mjA4Jv3J",
                    position: {
                        x: -509.8608457750677,
                        y: -1650.2732265952538
                    },
                    pinned: true,
                    element: "elem-ZuxCijD4"
                },
                {
                    _id: "node-nKkl52iq",
                    position: {
                        x: -1870.131359701863,
                        y: 79.00972416707064
                    },
                    pinned: true,
                    element: "elem-B88FrjUC"
                },
                {
                    _id: "node-nLqXei9u",
                    position: {
                        x: 1051.5047302417652,
                        y: -498.38168919360487
                    },
                    pinned: true,
                    element: "elem-r0E7356g"
                },
                {
                    _id: "node-njCFiYJu",
                    position: {
                        x: -102.87568889839447,
                        y: 1527.8830836718626
                    },
                    pinned: true,
                    element: "elem-i3TfghPo"
                },
                {
                    _id: "node-no19j7iU",
                    position: {
                        x: 325.052032684632,
                        y: 83.08709534365893
                    },
                    pinned: true,
                    element: "elem-yAq5SvWd"
                },
                {
                    _id: "node-pRLbVxC1",
                    position: {
                        x: -827.191263857404,
                        y: -646.0897823652177
                    },
                    pinned: true,
                    element: "elem-Z3U2Kyd7"
                },
                {
                    _id: "node-punDl7Ox",
                    position: {
                        x: -410.61273425041117,
                        y: 81.47971818135163
                    },
                    pinned: true,
                    element: "elem-48X4QAA6"
                },
                {
                    _id: "node-q5yvbMxs",
                    position: {
                        x: -878.163134665645,
                        y: 389.35909242017203
                    },
                    pinned: true,
                    element: "elem-7BCT1PIE"
                },
                {
                    _id: "node-rQyhuo2g",
                    position: {
                        x: 73.14519068180388,
                        y: 389.9930008518328
                    },
                    pinned: true,
                    element: "elem-QpPLSMc0"
                },
                {
                    _id: "node-satHzNR0",
                    position: {
                        x: -874.2435878466664,
                        y: -53.63309337828225
                    },
                    pinned: true,
                    element: "elem-lgEiuLTv"
                },
                {
                    _id: "node-ssxlkDMP",
                    position: {
                        x: -47.73935734416381,
                        y: -747.9157987004621
                    },
                    pinned: true,
                    element: "elem-vW7ZJ6Zk"
                },
                {
                    _id: "node-tguyqF67",
                    position: {
                        x: -560.9171607750776,
                        y: 1336.8052491886162
                    },
                    pinned: true,
                    element: "elem-S7mTm61e"
                },
                {
                    _id: "node-tpJUCe1D",
                    position: {
                        x: -240.62419158322598,
                        y: -1235.3134301544815
                    },
                    pinned: true,
                    element: "elem-XnpyC7zX"
                },
                {
                    _id: "node-uliwZ6ZP",
                    position: {
                        x: -262.41202461095776,
                        y: -454.0035671683261
                    },
                    pinned: true,
                    element: "elem-DKNUAl3j"
                },
                {
                    _id: "node-us4B2pnV",
                    position: {
                        x: -1401.6268986615798,
                        y: 1192.6674155927756
                    },
                    pinned: true,
                    element: "elem-7sUTa3p3"
                },
                {
                    _id: "node-wxLMRkZg",
                    position: {
                        x: -248.59184567350434,
                        y: -712.6114536506067
                    },
                    pinned: true,
                    element: "elem-9CWpMWQr"
                },
                {
                    _id: "node-xebh9l7y",
                    position: {
                        x: 635.422359926222,
                        y: 99.18814366527035
                    },
                    pinned: true,
                    element: "elem-ZrfXmSdf"
                }
            ],
            connections: [
                {
                    _id: "edge-02rxeLKg",
                    curvature: -0.3820309242877881,
                    connection: "conn-huw7Tv4P"
                },
                {
                    _id: "edge-0nzVI9TG",
                    curvature: -0.015062090115006881,
                    connection: "conn-LTt5MhHu"
                },
                {
                    _id: "edge-1X0WjkEJ",
                    connection: "conn-1leuc2lp"
                },
                {
                    _id: "edge-1dK71k6e",
                    curvature: -0.22330685039772843,
                    connection: "conn-kWz8cMuH"
                },
                {
                    _id: "edge-1vO7Viug",
                    curvature: 0.007283699191932308,
                    connection: "conn-2AFEPfqq"
                },
                {
                    _id: "edge-2AFSiUwt",
                    connection: "conn-D1nox7Qa"
                },
                {
                    _id: "edge-36aLxaR0",
                    curvature: -0.7442162980737511,
                    connection: "conn-yPTqb7XN"
                },
                {
                    _id: "edge-3ED28nuS",
                    curvature: -0.06193106492892044,
                    connection: "conn-324ho6QZ"
                },
                {
                    _id: "edge-3W12PwmO",
                    connection: "conn-2gZyvzSv"
                },
                {
                    _id: "edge-4IVz46wQ",
                    curvature: -0.03427370878418733,
                    connection: "conn-bQeFnGts"
                },
                {
                    _id: "edge-5WbQPuFt",
                    curvature: 0.22520916138576103,
                    connection: "conn-xrOl8Wz2"
                },
                {
                    _id: "edge-5aEx6RAl",
                    curvature: -0.024338807691338497,
                    connection: "conn-TrTrqosN"
                },
                {
                    _id: "edge-6SJeijWg",
                    curvature: 0.09591642488155662,
                    connection: "conn-TCW4QDF8"
                },
                {
                    _id: "edge-6k111Kr4",
                    connection: "conn-9d579Owc"
                },
                {
                    _id: "edge-7g9cbSHq",
                    connection: "conn-FURMZ6bl"
                },
                {
                    _id: "edge-8f6RDXkk",
                    curvature: -0.006397954586061474,
                    connection: "conn-MKM6i4Sb"
                },
                {
                    _id: "edge-8h6NhBV1",
                    connection: "conn-vaWPn4fR"
                },
                {
                    _id: "edge-99p2SvMm",
                    curvature: 0.08356690102869849,
                    connection: "conn-nQ4ze7FX"
                },
                {
                    _id: "edge-A6wwqygD",
                    curvature: 0.0844611095618936,
                    connection: "conn-767gIyot"
                },
                {
                    _id: "edge-BNdBYJjZ",
                    curvature: -0.08137457669975884,
                    connection: "conn-JAwFutoV"
                },
                {
                    _id: "edge-BVw3Sw9x",
                    connection: "conn-qNEWak1L"
                },
                {
                    _id: "edge-C8Cwf4NO",
                    connection: "conn-zAMUMt19"
                },
                {
                    _id: "edge-CuDzAdrs",
                    curvature: -0.14817390042718753,
                    connection: "conn-D9P98Dvo"
                },
                {
                    _id: "edge-DAX9x1SC",
                    curvature: -0.004729145075983737,
                    connection: "conn-VeeLAwQS"
                },
                {
                    _id: "edge-DDXxJSIN",
                    connection: "conn-mU0UZJiM"
                },
                {
                    _id: "edge-DWjZVQoy",
                    curvature: 0.03964946867504845,
                    connection: "conn-EGppMLcD"
                },
                {
                    _id: "edge-DzgedweL",
                    curvature: -0.003826679023037912,
                    connection: "conn-ig4oKiEZ"
                },
                {
                    _id: "edge-EaPyxO9Q",
                    curvature: -0.17287701598937336,
                    connection: "conn-d1b9waar"
                },
                {
                    _id: "edge-FoC5XVNw",
                    curvature: -0.005405949815405297,
                    connection: "conn-sUzcUFcN"
                },
                {
                    _id: "edge-HJZFXHnc",
                    curvature: 0.3672986519996486,
                    connection: "conn-b5HCvivz"
                },
                {
                    _id: "edge-IfbAzHyi",
                    curvature: 0.5189518641557185,
                    connection: "conn-ZkIWebl8"
                },
                {
                    _id: "edge-JjIct8ot",
                    curvature: 0.012925918554266327,
                    connection: "conn-0FmYWz0j"
                },
                {
                    _id: "edge-KV1Owsz0",
                    connection: "conn-ZskuQtrM"
                },
                {
                    _id: "edge-KqlybTeF",
                    curvature: -0.9262246031315459,
                    connection: "conn-XqYf0ejz"
                },
                {
                    _id: "edge-KvoyoO6V",
                    connection: "conn-YBPxQmdI"
                },
                {
                    _id: "edge-L4fpLfHX",
                    connection: "conn-gHFA9bt1"
                },
                {
                    _id: "edge-LKFlsNvi",
                    curvature: -0.23670295775529365,
                    connection: "conn-i08BekxA"
                },
                {
                    _id: "edge-NKdET8S6",
                    curvature: -0.07290241556596659,
                    connection: "conn-fkLdZnt6"
                },
                {
                    _id: "edge-Ow1ewHMT",
                    curvature: 0.03156004563739365,
                    connection: "conn-hWkgC0xs"
                },
                {
                    _id: "edge-PEhQErcG",
                    curvature: -0.08286089598051173,
                    connection: "conn-DbSpZs3L"
                },
                {
                    _id: "edge-PKst5cMH",
                    connection: "conn-XW9k3PAi"
                },
                {
                    _id: "edge-PkuK7hH6",
                    curvature: 0.0508607743900553,
                    connection: "conn-LXAL69JJ"
                },
                {
                    _id: "edge-RMoroEX9",
                    curvature: 0.23653294227336671,
                    connection: "conn-nRQ5Lg7C"
                },
                {
                    _id: "edge-RvLfLlWa",
                    connection: "conn-COw44cUJ"
                },
                {
                    _id: "edge-SAIXoljT",
                    curvature: 0.08038022648909307,
                    connection: "conn-9gAo8L2z"
                },
                {
                    _id: "edge-SuRsE3s2",
                    connection: "conn-SKyW7Ket"
                },
                {
                    _id: "edge-T3ZjQUPF",
                    curvature: -0.014792894888895935,
                    connection: "conn-jDPwWDPs"
                },
                {
                    _id: "edge-VGFzmrxH",
                    connection: "conn-pz31sC5P"
                },
                {
                    _id: "edge-XYR17dP3",
                    curvature: 0.004884473864497508,
                    connection: "conn-GmCaRGYW"
                },
                {
                    _id: "edge-YcXJr18g",
                    connection: "conn-W2xdqiHX"
                },
                {
                    _id: "edge-YhrJjoNf",
                    connection: "conn-DwQVQZGN"
                },
                {
                    _id: "edge-ZE6WqR5b",
                    connection: "conn-FrH8Kf0B"
                },
                {
                    _id: "edge-ax3O6wzo",
                    connection: "conn-xn0ShGyC"
                },
                {
                    _id: "edge-bixQQayP",
                    curvature: 0.005545342933849664,
                    connection: "conn-DwSafhZb"
                },
                {
                    _id: "edge-c4vYFHJ4",
                    curvature: -0.058345511934045996,
                    connection: "conn-YQ5WaLvl"
                },
                {
                    _id: "edge-cIpjXDOx",
                    curvature: 0.017197842131129765,
                    connection: "conn-mS6mwBcA"
                },
                {
                    _id: "edge-cuWZVjuS",
                    curvature: 0.19726368755582985,
                    connection: "conn-GkgDicsg"
                },
                {
                    _id: "edge-d2K3xZHI",
                    connection: "conn-595Qafd6"
                },
                {
                    _id: "edge-dEOdfpHU",
                    connection: "conn-aLacUevI"
                },
                {
                    _id: "edge-dpFVEfcc",
                    connection: "conn-G7tp85Tu"
                },
                {
                    _id: "edge-dsGXgPz2",
                    curvature: -0.047492555149630564,
                    connection: "conn-ELooE5rh"
                },
                {
                    _id: "edge-e0PkkvdM",
                    curvature: 0.16031483543403022,
                    connection: "conn-BUEzms8c"
                },
                {
                    _id: "edge-fn2FoVWW",
                    curvature: 0.040696617795516705,
                    connection: "conn-3ucbutC9"
                },
                {
                    _id: "edge-fzLtYZyW",
                    curvature: 0.0012786822468199412,
                    connection: "conn-MqFBjc8l"
                },
                {
                    _id: "edge-gTV9roO7",
                    connection: "conn-yoSMrci3"
                },
                {
                    _id: "edge-h0ZGYbLN",
                    curvature: -0.0485158281057392,
                    connection: "conn-LINcrxER"
                },
                {
                    _id: "edge-h336s9Fo",
                    connection: "conn-0K8Dqiv1"
                },
                {
                    _id: "edge-inSP8OSj",
                    connection: "conn-EGbq4gOA"
                },
                {
                    _id: "edge-jTh2DkHo",
                    connection: "conn-jo4CyJfr"
                },
                {
                    _id: "edge-jpDccxq0",
                    curvature: 0.47455870218111135,
                    connection: "conn-jPGW04kA"
                },
                {
                    _id: "edge-jyl5QzQP",
                    connection: "conn-nq1c5Cip"
                },
                {
                    _id: "edge-l9a8gywd",
                    curvature: 0.016536113701127054,
                    connection: "conn-6PLGqwJj"
                },
                {
                    _id: "edge-lUAwKR97",
                    connection: "conn-iEdBgkZO"
                },
                {
                    _id: "edge-lUzUsYVX",
                    connection: "conn-ZgT14qJP"
                },
                {
                    _id: "edge-mWlyOTGn",
                    curvature: -0.7732198020493999,
                    connection: "conn-qXQ7y0lz"
                },
                {
                    _id: "edge-mXoYRXP0",
                    connection: "conn-Afr08n8f"
                },
                {
                    _id: "edge-mmDAh2Lm",
                    curvature: 0.11992073395946468,
                    connection: "conn-HTsccpoz"
                },
                {
                    _id: "edge-mt2FT5kO",
                    curvature: 0.6292692372256068,
                    connection: "conn-rHhYJ2pk"
                },
                {
                    _id: "edge-no4urhXw",
                    curvature: -0.41640382248185465,
                    connection: "conn-y3zOZZqV"
                },
                {
                    _id: "edge-oAo8kisK",
                    curvature: 0.01797899363079532,
                    connection: "conn-Fyd78L63"
                },
                {
                    _id: "edge-oOtSlzWR",
                    curvature: -0.12423818759114161,
                    connection: "conn-zdp8Rxh8"
                },
                {
                    _id: "edge-opHGxcpL",
                    curvature: 0.21797732084552732,
                    connection: "conn-99CNk1Am"
                },
                {
                    _id: "edge-ouLX62nC",
                    curvature: -0.02983050537314786,
                    connection: "conn-xU9If1es"
                },
                {
                    _id: "edge-ozVvfMrN",
                    curvature: 0.01710607337429149,
                    connection: "conn-oh0AqLkg"
                },
                {
                    _id: "edge-p4Z0mFVi",
                    curvature: -0.29719035362979757,
                    connection: "conn-DAo91Vlz"
                },
                {
                    _id: "edge-p5a9VrcZ",
                    curvature: -0.05362036237194362,
                    connection: "conn-rRm5Axql"
                },
                {
                    _id: "edge-pBTVIcxE",
                    curvature: 0.09211687263681524,
                    connection: "conn-uZFZbPLI"
                },
                {
                    _id: "edge-q4YHWYl0",
                    connection: "conn-C66kW9DB"
                },
                {
                    _id: "edge-q80nc5bZ",
                    curvature: -0.07153416767001251,
                    connection: "conn-WLdTXIbQ"
                },
                {
                    _id: "edge-qoJ78Reb",
                    curvature: 0.03568141253988331,
                    connection: "conn-biBgzFQE"
                },
                {
                    _id: "edge-ryTiavPJ",
                    connection: "conn-2Sjtc0v7"
                },
                {
                    _id: "edge-sUhyWrZ0",
                    curvature: 0.04305357594440378,
                    connection: "conn-wRxwEroN"
                },
                {
                    _id: "edge-tGy5XLhh",
                    curvature: 0.6175052792083923,
                    connection: "conn-SV0OJhX4"
                },
                {
                    _id: "edge-u4ATcxeu",
                    curvature: 0.038405155312476534,
                    connection: "conn-oWr1WgcP"
                },
                {
                    _id: "edge-ukhDmLUu",
                    curvature: 0.04408908136730953,
                    connection: "conn-ImLFBlxr"
                },
                {
                    _id: "edge-uvCHoGMy",
                    curvature: -0.25422576900853205,
                    connection: "conn-EgjcpH9P"
                },
                {
                    _id: "edge-uymSbuWj",
                    curvature: -0.12046785099869867,
                    connection: "conn-lqkrauw6"
                },
                {
                    _id: "edge-vQBDZUPd",
                    curvature: -0.2545485941730319,
                    connection: "conn-4JavUSHz"
                },
                {
                    _id: "edge-wM72L5eI",
                    curvature: -0.07470317932067967,
                    connection: "conn-Km6tT2pl"
                },
                {
                    _id: "edge-wQBo81Vp",
                    connection: "conn-0BFD0oJt"
                },
                {
                    _id: "edge-xNJuojAc",
                    curvature: 0.23564159551784322,
                    connection: "conn-JcO7kmWE"
                },
                {
                    _id: "edge-xw90rz6u",
                    curvature: -0.1208556389082185,
                    connection: "conn-qzZw4q1r"
                },
                {
                    _id: "edge-yYJPDfce",
                    connection: "conn-CZWJDw3H"
                },
                {
                    _id: "edge-zBArs9XP",
                    curvature: 0.0346176440540566,
                    connection: "conn-Vbsoj7iX"
                },
                {
                    _id: "edge-zwzGEC8F",
                    curvature: 0.45400638335197174,
                    connection: "conn-m75QNs4D"
                }
            ],
            loops: []
        }
    ],
    perspectives: [
        {
            _id: "pers-8uGFjQEN",
            name: "Circa 2008",
            style: "@controls {\n  bottom {\n    filter {\n      target: element;\n      by: \"element type\";\n      as: buttons;\n      multiple: true;\n      default: show-all;\n    }\n  }\n}\n\n@settings {\n  template: stakeholder;\n  theme: dark;\n  element-scale: scale(\"StatusNum\", 1, 2);\n  layout: static;\n}\n\nelement {\n  image-size: contain;\n  image-visibility: visible;\n  outline-offset: 0;\n  shadow-opacity: 0;\n  font-size: 30;\n  font-family: Voltaire;\n}\n\nelement {\n  popover: \"{{label}}\";\n}\n\nelement[\"Quote\"] {\n  popover: \"<blockquote>{{quote}}</blockquote>\";\n}\n\nelement[\"Description\"] {\n  popover: \"{{description}}\";\n}\n\nelement[\"Quote\"]element[\"Description\"] {\n  popover: \"<blockquote>{{quote}}</blockquote>{{description}}\";\n}\n\nelement[\"Image\"] {\n  popover: \"{{image}}\";\n  popover-width: 800;\n}\n\nelement[\"Element Type\"=\"Kindred Organization\"],\nelement[\"Element Type\"=\"Mortal Organization\"] {\n  border-width: 0;\n  size: 70;\n  font-size: 50;\n  text-align: center;\n  font-weight: bold;\n}\n\nelement[\"Affiliation\"=\"None\"] {\n  border-width: 10;\n  size: 200;\n  label-visibility: hidden;\n}\n\nelement[\"Affiliation\"=\"Autarkis\"] {\n  scale: 2.5;\n}\n\nelement[\"Label\"=\"Camarilla\"] {\n  color: #FFDC95;\n  border-color: #724C00;\n  image-url: url(https://vignette.wikia.nocookie.net/whitewolf/images/b/b6/SymbolCamarillaV5.png);\n}\n\nelement[\"Label\"=\"Mortals\"] {\n  color: #8E9C9A;\n  border-color: #334E4B;\n  image-url: url(https://i.pinimg.com/originals/7e/39/10/7e3910c4a662d94a2d7b463ed6c1055e.png);\n}\n\nelement[\"Label\"=\"Anarchs\"] {\n  color: #FE94A1;\n  border-color: #6D000D;\n  image-url: url(https://vignette.wikia.nocookie.net/whitewolf/images/d/de/AnarchV5.png);\n}\n\nelement[\"Label\"=\"Sabbat\"] {\n  color: #B09EFA;\n  border-color: #11024E;\n  image-url: url(https://vignette.wikia.nocookie.net/whitewolf/images/1/1d/LogoSectSabbat.png);\n}\n\nelement[\"Label\"=\"Second Inquisition\"] {\n  color: #BBB897;\n  border-color: #E0D453;\n  image-url: url(https://vignette.wikia.nocookie.net/whitewolf/images/5/59/SymbolSecondInquisition.png/revision/latest?cb=20190519043956);\n}\n\nelement[\"Label\"=\"Independent\"] {\n  image-url: url(https://vignette.wikia.nocookie.net/whitewolf/images/c/cc/LogoVampireAnkh.png/revision/latest?cb=20140102051635);\n}\n\nelement[\"Affiliation\"=\"Anarchs\"] {\n  color: #6D000D;\n  border-color: #6D000D;\n}\n\nelement[\"Affiliation\"=\"Camarilla\"] {\n  color: #724C00;\n  border-color: #724C00;\n}\n\nelement[\"Affiliation\"=\"Sabbat\"] {\n  color: #11024E;\n  border-color: #11024E;\n}\n\nelement[\"Affiliation\"=\"Second Inquisition\"] {\n  color: #E0D453;\n  border-color: #E0D453;\n  font-color: orange;\n}\n\nelement[\"Affiliation\"=\"Mortals\"] {\n  color: #334E4B;\n  border-color: #334E4B;\n}\n\nconnection {\n  arrow-visibility: hidden;\n}\n\nconnection[\"Connection Type\"=\"Boss\"],\nconnection[\"Connection Type\"=\"Membership\"] {\n  strength: 1;\n  size: 8;\n}\n\nconnection[\"Connection Type\"=\"Boss\"] {\n  border-width: 2;\n  border-opacity: 1;\n  border-color: white;\n  arrow-visibility: visible;\n  arrow-color: white;\n  arrow-width: 6;\n  arrow-height: 6;\n}\n\nconnection[\"Connection Type\"=\"Regnant\"],\nconnection[\"Connection Type\"=\"Sire\"] {\n  strength: 0;\n  style: dashed;\n  size: 8;\n  arrow-visibility: visible;\n  arrow-width: 4;\n  arrow-height: 4;\n}\n\nelement[\"Affiliation\"=\"Second Inquisition\"] {\n  image-url: url(https://vignette.wikia.nocookie.net/whitewolf/images/5/59/SymbolSecondInquisition.png/revision/latest?cb=20190519043956);\n}\n\nelement[\"Clan\"=\"Brujah\"] {\n  image-url: url(https://vignette.wikia.nocookie.net/whitewolf/images/0/0b/SymbolClanBrujahV5.png/revision/latest?cb=20180728213654);\n}\n\nelement[\"Clan\"=\"Gangrel\"] {\n  image-url: url(https://vignette.wikia.nocookie.net/whitewolf/images/d/d8/SymbolClanGangrelV5.png/revision/latest?cb=20180728213714);\n}\n\nelement[\"Clan\"=\"Malkavian\"] {\n  image-url: url(https://vignette.wikia.nocookie.net/whitewolf/images/d/d2/SymbolClanMalkavianV5.png/revision/latest?cb=20180728213734);\n}\n\nelement[\"Clan\"=\"Nosferatu\"] {\n  image-url: url(https://vignette.wikia.nocookie.net/whitewolf/images/6/6e/SymbolClanNosferatuV5.png/revision/latest?cb=20180728213808);\n}\n\nelement[\"Clan\"=\"Toreador\"] {\n  image-url: url(https://vignette.wikia.nocookie.net/whitewolf/images/c/c3/SymbolClanToreadorV5.png/revision/latest?cb=20180728213828);\n}\n\nelement[\"Clan\"=\"Tremere\"] {\n  image-url: url(https://vignette.wikia.nocookie.net/whitewolf/images/7/7b/SymbolClanTremereV5.png/revision/latest?cb=20180728213847);\n}\n\nelement[\"Clan\"=\"Ventrue\"] {\n  image-url: url(https://vignette.wikia.nocookie.net/whitewolf/images/a/ad/SymbolClanVentrueV5.png/revision/latest?cb=20180728213913);\n}\n\nelement[\"Clan\"=\"Lasombra\"] {\n  image-url: url(https://vignette.wikia.nocookie.net/whitewolf/images/f/fa/LogoClanLasombraV5.png/revision/latest?cb=20190725175100);\n}\n\nelement[\"Clan\"=\"Tzimisce\"] {\n  image-url: url(https://vignette.wikia.nocookie.net/whitewolf/images/8/89/LogoClanTzimisce.png/revision/latest?cb=20090120044552);\n}\n\nelement[\"Clan\"=\"Banu Haqim\"] {\n  image-url: url(https://vignette.wikia.nocookie.net/whitewolf/images/1/16/SymbolClanBanuHaqim.png);\n}\n\nelement[\"Clan\"=\"Ministry\"] {\n  image-url: url(https://vignette.wikia.nocookie.net/whitewolf/images/0/01/SymbolMinistryV5.png/revision/latest?cb=20190607221027);\n}\n\nelement[\"Clan\"=\"Hecata\"] {\n  image-url: url(https://vignette.wikia.nocookie.net/whitewolf/images/1/1a/SymbolHecataClassic.png/revision/latest?cb=20200114211201);\n}\n\nelement[\"Clan\"=\"Caitiff\"] {\n  image-url: url(https://vignette.wikia.nocookie.net/whitewolf/images/5/55/LogoBloodlineCaitiff.png/revision/latest?cb=20170811183452);\n}\n\nelement[\"Clan\"=\"Thin-Blooded\"] {\n  image-url: url(https://vignette.wikia.nocookie.net/whitewolf/images/f/fc/SymbolThinBloodsV5.png/revision/latest?cb=20190725180822);\n}\n\nelement[\"Element Type\"=\"Ghoul\"] {\n  image-url: url(https://vignette.wikia.nocookie.net/whitewolf/images/1/13/VTMGhouls.png/revision/latest?cb=20090201223141);\n}\n\nelement[\"Category\"=\"Subgroup\"] {\n  color: transparent;\n  size: 100;\n  border-width: 10;\n  font-size: 70;\n}\n\nelement[\"Label\"=\"LOCKE ULRICH\"],\nelement[\"Label\"=\"AVA WONG\"],\nelement[\"Label\"=\"JOHANNES NAPIER\"] {\n  size: 70;\n  font-size: 45;\n}\n\nelement[\"Label\"=\"DR. ARTHUR ROY\"] {\n  size: 62;\n  font-size: 40;\n}\n\nelement[\"Label\"=\"BACCHUS GIOVANNI\"] {\n  size: 100;\n  font-size: 60;\n}\n\nelement[\"Label\"=\"Amos Jax\"] {\n  opacity: 0.3;\n  font-color: grey;\n  color: grey;\n}\n\n"
        },
        {
            _id: "pers-c8r3yyir",
            name: "Current",
            style: "@settings {\n  template: stakeholder;\n  theme: dark;\n  layout: static;\n}\n\n/* ===== ELEMENTS ============= */\nelement {\n  image-size: contain;\n  image-visibility: visible;\n  outline-offset: 0;\n  shadow-opacity: 0;\n  font-size: 40;\n  font-family: Voltaire;\n  shadow-color: white;\n  text-overflow: wrap 7;\n}\n\nelement[\"Label\"=\"Anarchs\"] {\n  color: #FE94A1;\n  border-color: #6D000D;\n  image-url: url(https://vignette.wikia.nocookie.net/whitewolf/images/d/de/AnarchV5.png);\n  shadow-size: 6;\n  shadow-color: #BB0016;\n}\n\nelement[\"Label\"=\"Camarilla\"] {\n  color: #FFDC95;\n  border-color: #724C00;\n  image-url: url(https://vignette.wikia.nocookie.net/whitewolf/images/b/b6/SymbolCamarillaV5.png);\n  shadow-size: 4;\n  shadow-color: #C38200;\n}\n\nelement[\"Label\"=\"Sabbat\"] {\n  color: #B09EFA;\n  border-color: #11024E;\n  image-url: url(https://vignette.wikia.nocookie.net/whitewolf/images/1/1d/LogoSectSabbat.png);\n  shadow-size: 2;\n  shadow-color: #260F86;\n}\n\nelement[\"Label\"=\"Mortals\"] {\n  color: #8E9C9A;\n  border-color: #334E4B;\n  image-url: url(https://i.pinimg.com/originals/7e/39/10/7e3910c4a662d94a2d7b463ed6c1055e.png);\n  shadow-size: 2.5;\n  shadow-color: #4E6361;\n}\n\nelement[\"Label\"=\"Second Inquisition\"] {\n  color: #BBB897;\n  border-color: #E0D453;\n  image-url: url(https://vignette.wikia.nocookie.net/whitewolf/images/5/59/SymbolSecondInquisition.png/revision/latest?cb=20190519043956);\n  shadow-size: 3;\n  shadow-color: #FFFCDA;\n}\n\nelement[\"Label\"=\"Independent\"] {\n  image-url: url(https://vignette.wikia.nocookie.net/whitewolf/images/c/cc/LogoVampireAnkh.png/revision/latest?cb=20140102051635);\n  shadow-size: 3.5;\n  shadow-color: #696969;\n}\n\nelement[\"Affiliation\"=\"Anarchs\"] {\n  color: #6D000D;\n  border-color: #6D000D;\n}\n\nelement[\"Affiliation\"=\"Camarilla\"] {\n  color: #724C00;\n  border-color: #724C00;\n}\n\nelement[\"Affiliation\"=\"Sabbat\"] {\n  color: #11024E;\n  border-color: #11024E;\n}\n\nelement[\"Affiliation\"=\"Mortals\"] {\n  color: #334E4B;\n  border-color: #334E4B;\n}\n\nelement[\"Affiliation\"=\"Second Inquisition\"] {\n  color: #E0D453;\n  border-color: #E0D453;\n  font-color: orange;\n}\n\nelement[\"Element Type\"*=\"Organization\"] {\n  border-width: 0;\n  size: 70;\n  font-size: 50;\n  text-align: center;\n  font-weight: bold;\n}\n\nkindred {\n  flag: statusflag with reds;\n}\n\nelement[\"Category\"=\"Faction\"], element[\"Category\"=\"Grouping\"] {\n  border-width: 10;\n  size: 200;\n  label-visibility: hidden;\n  shadow-opacity: 0.1;\n}\n\nelement[\"Category\"=\"Subgroup\"] {\n  color: transparent;\n  size: 100;\n  border-width: 10;\n  font-size: 70;\n  text-overflow: wrap 1;\n}\n\nelement[\"StatusNum\"=0] {\n  size: 30;\n}\n\nelement[\"StatusNum\"=1] {\n  size: 40;\n}\n\nelement[\"StatusNum\"=2] {\n  size: 50;\n}\n\nelement[\"StatusNum\"=3] {\n  size: 60;\n}\n\nelement[\"StatusNum\"=4] {\n  size: 80;\n  font-size: 50;\n}\n\nelement[\"StatusNum\"=5], element[\"Affiliation\"=\"Autarkis\"] {\n  size: 100;\n  font-size: 60;\n}\n\n/* ===== CONNECTIONS ============= */\nconnection {\n  strength: 1;\n  size: 8;\n  arrow-visibility: hidden;\n  curvature: 0;\n}\n\nconnection[\"Connection Type\"=\"Boss\"] {\n  border-width: 2;\n  border-opacity: 1;\n  border-color: white;\n  arrow-visibility: visible;\n  arrow-color: white;\n  arrow-width: 6;\n  arrow-height: 6;\n}\n\nconnection[\"Connection Type\"=\"Regnant\"], connection[\"Connection Type\"=\"Sire\"] {\n  strength: 0;\n  style: dashed;\n  arrow-visibility: visible;\n  arrow-width: 4;\n  arrow-height: 4;\n}\n\n/* ===== IMAGES ================== */\nelement[\"Affiliation\"=\"Second Inquisition\"] {\n  image-url: url(https://vignette.wikia.nocookie.net/whitewolf/images/5/59/SymbolSecondInquisition.png/revision/latest?cb=20190519043956);\n}\n\nelement[\"Clan\"=\"Brujah\"] {\n  image-url: url(https://vignette.wikia.nocookie.net/whitewolf/images/0/0b/SymbolClanBrujahV5.png/revision/latest?cb=20180728213654);\n}\n\nelement[\"Clan\"=\"Gangrel\"] {\n  image-url: url(https://vignette.wikia.nocookie.net/whitewolf/images/d/d8/SymbolClanGangrelV5.png/revision/latest?cb=20180728213714);\n}\n\nelement[\"Clan\"=\"Malkavian\"] {\n  image-url: url(https://vignette.wikia.nocookie.net/whitewolf/images/d/d2/SymbolClanMalkavianV5.png/revision/latest?cb=20180728213734);\n}\n\nelement[\"Clan\"=\"Nosferatu\"] {\n  image-url: url(https://vignette.wikia.nocookie.net/whitewolf/images/6/6e/SymbolClanNosferatuV5.png/revision/latest?cb=20180728213808);\n}\n\nelement[\"Clan\"=\"Toreador\"] {\n  image-url: url(https://vignette.wikia.nocookie.net/whitewolf/images/c/c3/SymbolClanToreadorV5.png/revision/latest?cb=20180728213828);\n}\n\nelement[\"Clan\"=\"Tremere\"] {\n  image-url: url(https://vignette.wikia.nocookie.net/whitewolf/images/7/7b/SymbolClanTremereV5.png/revision/latest?cb=20180728213847);\n}\n\nelement[\"Clan\"=\"Ventrue\"] {\n  image-url: url(https://vignette.wikia.nocookie.net/whitewolf/images/a/ad/SymbolClanVentrueV5.png/revision/latest?cb=20180728213913);\n}\n\nelement[\"Clan\"=\"Lasombra\"] {\n  image-url: url(https://vignette.wikia.nocookie.net/whitewolf/images/f/fa/LogoClanLasombraV5.png/revision/latest?cb=20190725175100);\n}\n\nelement[\"Clan\"=\"Tzimisce\"] {\n  image-url: url(https://vignette.wikia.nocookie.net/whitewolf/images/8/89/LogoClanTzimisce.png/revision/latest?cb=20090120044552);\n}\n\nelement[\"Clan\"=\"Banu Haqim\"] {\n  image-url: url(https://vignette.wikia.nocookie.net/whitewolf/images/1/16/SymbolClanBanuHaqim.png);\n}\n\nelement[\"Clan\"=\"Ministry\"] {\n  image-url: url(https://vignette.wikia.nocookie.net/whitewolf/images/0/01/SymbolMinistryV5.png/revision/latest?cb=20190607221027);\n}\n\nelement[\"Clan\"=\"Hecata\"] {\n  image-url: url(https://vignette.wikia.nocookie.net/whitewolf/images/1/1a/SymbolHecataClassic.png/revision/latest?cb=20200114211201);\n}\n\nelement[\"Clan\"=\"Caitiff\"] {\n  image-url: url(https://vignette.wikia.nocookie.net/whitewolf/images/5/55/LogoBloodlineCaitiff.png/revision/latest?cb=20170811183452);\n}\n\nelement[\"Clan\"=\"Thin-Blooded\"] {\n  image-url: url(https://vignette.wikia.nocookie.net/whitewolf/images/f/fc/SymbolThinBloodsV5.png/revision/latest?cb=20190725180822);\n}\n\nelement[\"Element Type\"=\"Ghoul\"] {\n  image-url: url(https://vignette.wikia.nocookie.net/whitewolf/images/1/13/VTMGhouls.png/revision/latest?cb=20090201223141);\n}\n\nelement[\"tags\"*=\"PC\"] {\n  size: 60;\n  font-size: 60;\n  border-width: 20;\n  border-color: white;\n}\n\nelement[\"tags\"*=\"Dead\"] {\n  opacity: 0.3;\n  font-color: grey;\n  color: grey;\n}\n\nkindred.boss {\n  display: map;\n}\n\n"
        }
    ]
}