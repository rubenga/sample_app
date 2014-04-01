(function() {
    var GS = window.GS = window.GS || {};

    if (!GS.Models || !GS.Models.Theme) {
        throw "Themes file loaded but Theme class not ready";
    }
    
    GS.Models.Theme.themeVersion = 20121005.92;
    GS.Models.Theme.user = [1305, 1300, 1301, 1303];
    GS.Models.Theme.artist = [1305, 1300, 1301, 1303, 1234, 1179, 1143, 1084, 1086, 1085, 1083, 1082, 1079, 1078, 1073, 1064, 1065, 1063, 1025, 966, 965, 959, 1328, 93, 150, 803, 539, 799, 581, 811, 812, 813, 73];

    GS.Models.Theme.themes = {
        /* Artist/Designer */
        
        /* Avntgrd 2012 */
        73: {
            "themeID": 73,
            "title": "Avngrd",
            "author": "Grooveshark",
            "location": "avntgrd2012",
            "premium": true,
            "sections": ["#theme-header"],
            "version": 1.001
        },
        /* Mellow */
        93: {
            "themeID": 93,
            "title": "Mellow",
            "author": "Grooveshark",
            "location": "mellow",
            "premium": true,
            "version": 1.001,
            "sections": []
        },
        /* Moon and Sea */
        150: {
            "themeID": 150,
            "title": "Moon and Sea",
            "author": "365 Singles",
            "location": "moonAndSea",
            "premium": true,
            "sections": ["#theme-wall", "#theme-header"],
            "version": 1.002
        },
        /* Gray Tile */
        799: {
            "themeID": 799,
            "title": "Gray Tile",
            "author": "Grooveshark",
            "location": "grayTile",
            "premium": true,
            "sections": ["#theme-header"],
            "version": 1.002
        },
        /* Ribbon Dancer */
        803: {
            "themeID": 803,
            "title": "Ribbon Dancer",
            "author": "Grooveshark",
            "location": "ribbonDancer",
            "premium": true,
            "sections": ["#theme-header"],
            "version": 1.001
        },
        /* Petit Birds */
        581: {
            "themeID": 581,
            "title": "Petit Birds",
            "author": "Grooveshark",
            "location": "petitBirds2012",
            "premium": true,
            "sections": ["#theme-header"],
            "version": 1.001
        },
        /* Instruments */
        539: {
            "themeID": 539,
            "title": "Instruments",
            "author": "Grooveshark",
            "location": "instruments2012",
            "premium": true,
            "sections": ["#theme-header"],
            "version": 1.001
        },
        /* Triangled */
        811: {
            "themeID": 811,
            "title": "Triangled",
            "author": "Grooveshark",
            "location": "triangled",
            "premium": true,
            "sections": ["#theme-header"],
            "version": 1.001
        },
        /* Wood */
        812: {
            "themeID": 812,
            "title": "Wood",
            "author": "Grooveshark",
            "location": "wood",
            "premium": true,
            "sections": ["#theme-header"],
            "version": 1.001
        },
        /* Green Dust */
        813: {
            "themeID": 813,
            "title": "Green Dust",
            "author": "Grooveshark",
            "location": "greenDust",
            "premium": true,
            "sections": ["#theme-header"],
            "version": 1.001
        },
        /* Fusion - DEFAULT */
        814: {
            "themeID": 814,
            "title": "Fusion",
            "author": "Grooveshark",
            "location": "fusion",
            "premium": false,
            "sections": [],
            "version": 1.003
        },
        /* Novembre */
        959: {
            "themeID": 959,
            "title": "Novembre",
            "author": "Maxime Francout",
            "location": "novembreFrancout",
            "sections": ["#theme-header"],
            "premium": true,
            "version": 1.001
        },
        /* Mushrooms */
        965: {
            "themeID": 965,
            "title": "Mushrooms",
            "author": "Elena Boils",
            "location": "mushroomsBoil",
            "sections": ["#theme-header"],
            "premium": true,
            "version": 1.001
        },
        /* Nautical */
        966: {
            "themeID": 966,
            "title": "Nautical",
            "author": "Matt Glasby",
            "location": "nauticalGlasby",
            "sections": ["#theme-header"],
            "premium": true,
            "version": 1.001
        },
        /* Drive Train */
        1025: {
            "themeID": 1025,
            "title": "Drive Train",
            "author": "Grooveshark",
            "location": "driveTrain",
            "premium": true,
            "sections": ["#theme-header"],
            "version": 1.001
        },
        /* Fruit Ruby Taylor */
        1063: {
            "themeID": 1063,
            "title": "Fruit",
            "author": "Ruby Taylor",
            "location": "fruitRubyTaylor",
            "sections": ["#theme-header"],
            "premium": true,
            "version": 1.001
        },
        /* Daytime Ana Montiel */
        1064: {
            "themeID": 1064,
            "title": "Day Time",
            "author": "Ana Montiel",
            "location": "daytimeAnaMontiel",
            "sections": ["#theme-header"],
            "premium": true,
            "version": 1.002
        },
        /* Night Time Ana Montiel */
        1065: {
            "themeID": 1065,
            "title": "Night Time",
            "author": "Ana Montiel",
            "location": "nighttimeAnaMontiel",
            "sections": ["#theme-header"],
            "premium": true,
            "version": 1.002
        },
        /* Airplanes Nassner */
        1073: {
            "themeID": 1073,
            "title": "Airplanes",
            "author": "Alyssa Nassner",
            "location": "airplanesNassner",
            "sections": ["#theme-header"],
            "premium": true,
            "version": 1.001
        },
        /* Floral Pigeons Markovka */
        1078: {
            "themeID": 1078,
            "title": "Floral Pigeons",
            "author": "Markovka",
            "location": "floralPigeonsMarkovka",
            "sections": ["#theme-header"],
            "premium": true,
            "version": 1.001
        },
        /* Seamless Waves 1 Markovka */
        1079: {
            "themeID": 1079,
            "title": "Seamless Waves 1",
            "author": "Markovka",
            "location": "seamlessWaves1Markovka",
            "sections": ["#theme-header"],
            "premium": true,
            "version": 1.001
        },
        /* Seamless Waves 2 Markovka */
        1082: {
            "themeID": 1082,
            "title": "Seamless Waves 2",
            "author": "Markovka",
            "location": "seamlessWaves2Markovka",
            "sections": ["#theme-header"],
            "premium": true,
            "version": 1.001
        },
        /* Shark & Whales */
        1083: {
            "themeID": 1083,
            "title": "Shark & Whales",
            "author": "Orka",
            "location": "sharkWhales",
            "sections": ["#theme-header"],
            "premium": true,
            "version": 1.001
        },
        /* White Stripes */
        1084: {
            "themeID": 1084,
            "title": "White Stripes",
            "author": "Jeshurun Webb",
            "location": "whiteStripesJWebb",
            "sections": ["#theme-header"],
            "premium": true,
            "version": 1.001
        },
        /* Patterned Shirts */
        1085: {
            "themeID": 1085,
            "title": "Patterned Shirts",
            "author": "Adam Turnbull",
            "location": "patternShirtATurnbull",
            "sections": ["#theme-header"],
            "premium": true,
            "version": 1.001
        },
        /* Old Skool */
        1086: {
            "themeID": 1086,
            "title": "Old Skool",
            "author": "Scott Balmer",
            "location": "oldSkoolSBalmer",
            "sections": ["#theme-header"],
            "premium": true,
            "version": 1.001
        },
        /* Zombies */
        1143: {
            "themeID": 1143,
            "title": "Zombies",
            "author": "Connor Goodman",
            "location": "zombiesCGoodman",
            "premium": true,
            "sections": ["#theme-header"],
            "version": 1.001
        },
        /* Leporidae*/
        1234: {
            "themeID": 1234,
            "title": "Leporidae",
            "author": "Aiden Zanders",
            "location": "leporidaeZanders",
            "sections": ["#theme-theme"],
            "premium": true,
            "version": 1.001
        },
        
        /* User/Artist/Broadcast Themes */
        
        /* Electro Pulse */
        1300:  {
            "themeID":          1300,
            "title":            "Electro Pulse",
            "author":           "Grooveshark",
            "location":         "electroPulse",
            "sections":         ["#theme-wall", "#theme-header"],
            "user":             true,
            "version":          1.001
        },
        /* Leaves */
        1301:  {
            "themeID":          1301,
            "title":            "Leaves",
            "author":           "Grooveshark",
            "location":         "leaves",
            "sections":         ["#theme-header"],
            "user":             true,
            "version":          1.001
        },
        /* Old Skool */
        1302:  {
            "themeID":          1302,
            "title":            "Old Skool",
            "author":           "Grooveshark",
            "location":         "oldSkool",
            "sections":         ["#theme-header"],
            "user":             true,
            "version":          1.001
        },
        /* Paper Cranes */
        1303:  {
            "themeID":          1303,
            "title":            "Paper Cranes",
            "author":           "Grooveshark",
            "location":         "paperCranes",
            "sections":         ["#theme-header"],
            "user":             true,
            "version":          1.002
        },
        /* Night View */
        1304:  {
            "themeID":          1304,
            "title":            "Night View",
            "author":           "Grooveshark",
            "location":         "nightView",
            "sections":         ["#theme-wall", "#theme-header"],
            "user":             true,
            "version":          1.000
        },
        /* Headphones */
        1305:  {
            "themeID":          1305,
            "title":            "Headphones",
            "author":           "Grooveshark",
            "location":         "headphones",
            "sections":         ["#theme-header"],
            "user":             true,
            "version":          1.002
        },
        /* Emmagician */
        1306:  {
            "themeID":          1306,
            "title":            "Emmagician",
            "author":           "Grooveshark",
            "location":         "emmagician",
            "sections":         ["#theme-theme"],
            "user":             true,
            "version":          1.002
        },
        /* Eric Pauley Indie */
        1307:  {
            "themeID":          1307,
            "title":            "Eric Indie",
            "author":           "Grooveshark",
            "location":         "ericPauley",
            "sections":         ["#theme-theme"],
            "user":             true,
            "version":          1.001
        },
        /* Nikke */
        1308:  {
            "themeID":          1308,
            "title":            "Nikke",
            "author":           "Grooveshark",
            "location":         "nikke",
            "sections":         ["#theme-theme"],
            "user":             true,
            "version":          1.004
        },
        /* Caleb */
        1309:  {
            "themeID":          1309,
            "title":            "Caleb",
            "author":           "Grooveshark",
            "location":         "caleb",
            "sections":         ["#theme-theme"],
            "user":             true,
            "version":          1.004
        },
        /* Giga */
        1310:  {
            "themeID":          1310,
            "title":            "Giga",
            "author":           "Grooveshark",
            "location":         "giga",
            "sections":         ["#theme-theme"],
            "user":             true,
            "version":          1.001
        },
        /* Writhem Radio */
        1311:  {
            "themeID":          1311,
            "title":            "Writhem",
            "author":           "Grooveshark",
            "location":         "writhemradio",
            "sections":         ["#theme-theme"],
            "user":             true,
            "version":          1.003
        },
        /* Sick Beats Radio */
        1312:  {
            "themeID":          1312,
            "title":            "Sick Beats",
            "author":           "Grooveshark",
            "location":         "sickbeatsradio",
            "sections":         ["#theme-theme"],
            "user":             true,
            "version":          1.001
        },
        /* Decon */
        1313:  {
            "themeID":          1313,
            "title":            "Decon",
            "author":           "Grooveshark",
            "location":         "deconBC",
            "sections":         ["#theme-theme"],
            "user":             true,
            "version":          1.002
        },
        /* Mass Appeal */
        1314:  {
            "themeID":          1314,
            "title":            "Decon",
            "author":           "Grooveshark",
            "location":         "massAppealBC",
            "sections":         ["#theme-theme"],
            "user":             true,
            "version":          1.002
        },
        /* Ceremonia BC (http://grooveshark.com/#!/calacas) */
        1316:  {
            "themeID":          1316,
            "title":            "Ceremonia",
            "author":           "Grooveshark",
            "location":         "ceremoniaBC",
            "sections":         ["#theme-theme"],
            "user":             true,
            "version":          1.006
        },
        /* Emmagician and Overwerk BC */
        1341:  {
            "themeID":          1341,
            "title":            "Overwerk",
            "author":           "Grooveshark",
            "location":         "emmagicianOverwerk",
            "sections":         ["#theme-theme"],
            "sponsored":        true,
            "user":             true,
            "version":          1.005
        },
        /* Overwerk Artist Page  */
        1344:  {
            "themeID":          1344,
            "title":            "Overwerk",
            "author":           "Grooveshark",
            "location":         "overwerkArtist",
            "sections":         ["#theme-theme"],
            "sponsored":        true,
            "user":             true,
            "version":          1.004
        },
        /* Writhem Artist Page  */
        1345:  {
            "themeID":          1345,
            "title":            "Writhem",
            "author":           "Grooveshark",
            "location":         "writhemArtist",
            "sections":         ["#theme-theme"],
            "sponsored":        true,
            "user":             true,
            "version":          1.005
        },
        /* White Castle Brodcast Page */
        1363:  {
            "themeID":          1363,
            "title":            "White Castle Broadcast",
            "author":           "Grooveshark",
            "location":         "whiteCastleBroadcast",
            "sections":         ["#theme-theme"],
            "sponsored":        true,
            "user":             true,
            "version":          1.010,
            "tracking":         []
        },
        /* Migmagnific */
        1364:  {
            "themeID":          1364,
            "title":            "Migmagnific",
            "author":           "Grooveshark",
            "location":         "migmagnific",
            "sections":         ["#theme-theme"],
            "user":             true,
            "version":          1.009
        },
        
        /* Sponsored & House */
        
        /* Grooveshark Plain */
        800: {
            "themeID": 800,
            "title": "Plain",
            "author": "Grooveshark",
            "location": "groovesharkPlain",
            "sections": ["#theme-header"],
            "version": 1.003
        },
        /* Grooveshark Capital */
        801: {
            "themeID": 801,
            "title": "Grooveshark Capital",
            "author": "Grooveshark",
            "location": "groovesharkCapital",
            "sections": ["#theme-wall", "#theme-header"],
            "sponsored": true,
            "version": 1.012,
            "capital": "default",
            "rotateOnHome": true,
            "header": {
                "capital": {
                    "width": 728,
                    "height": 90
                }
            }
        },
        /* Grooveshark Custom Color */
        809: {
            "themeID": 809,
            "title": "Custom Color",
            "author": "Grooveshark",
            "location": "groovesharkCustomColor",
            "premium": true,
            "sections": ["#theme-header"],
            "version": 1.002
        },
                /* Kimbra */
        904: {
            "themeID": 904,
            "title": "Kimbra",
            "author": "Kimbra",
            "location": "kimbraJH",
            "sections": ["#theme-wall", "#theme-header"],
            "sponsored": true,
            "version": 1.003,
            "type": {
                "isTopLevel": true,
                "isSponsored": true
            },
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 600
            }
        },
        /* Stoli - Chocolat Kokonut */
        905: {
            "themeID": 905,
            "title": "Chocolat Kokonut",
            "author": "Stoli",
            "location": "stoliChocolatKokonutJH",
            "sponsored": true,
            "sections": ["#theme-wall", "#theme-header"],
            "version": 1.002,
            "type": {
                "isTopLevel": true,
                "isSponsored": true
            },
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 600
            }
        },
        /* Ernst & Young */
        919: {
            "themeID": 919,
            "title": "Ernst & Young",
            "author": "Ernst & Young",
            "location": "ernstAndYoungJH",
            "sections": ["#theme-wall", "#theme-notif", "#theme-header"],
            "sponsored": true,
            "version": 1.001,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 600
            }
        },
        /* Discover Card */
        961: {
            "themeID": 961,
            "title": "Discover Card",
            "author": "Discover Card",
            "location": "discoverCardJH",
            "sections": ["#theme-wall", "#theme-header"],
            "sponsored": true,
            "version": 1.001,
            "type": {
                "isTopLevel": true,
                "isSponsored": true
            },
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* City Harvest */
        964: {
            "themeID": 964,
            "title": "City Harvest",
            "author": "City Harvest",
            "location": "cityHarvest",
            "sections": ["#theme-wall", "#theme-header", "#theme-videoheader"],
            "sponsored": true,
            "version": 1.005,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 600
            }
        },
        /* Stoli Recap */
        988: {
            "themeID": 988,
            "title": "Stoli",
            "author": "Stoli",
            "location": "stoliChocolatKokonutRecap",
            "sections": ["#theme-wall", "#theme-header", "#theme-videoheader"],
            "sponsored": true,
            "version": 1.002,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 600
            }
        },
        /* VW Fender Italy */
        1020: {
            "themeID": 1020,
            "title": "VW Fender",
            "author": "VW Fender",
            "location": "VWFenderItaly",
            "sections": ["#theme-wall", "#theme-header", "#theme-videoheader", "#theme-expand"],
            "sponsored": true,
            "version": 1.001
        },
        /* White Castle Phase 2 */
        1080: {
            "themeID": 1080,
            "title": "White Castle Phase 2",
            "author": "White Castle Phase 2",
            "location": "whiteCastlePhase2",
            "sections": ["#theme-wall", "#theme-header", "#theme-expand"],
            "sponsored": true,
            "version": 1.007,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Nike Lunar */
        1094: {
            "themeID": 1094,
            "title": "Nike Lunar",
            "author": "Nike Lunar",
            "location": "nikeLunar",
            "sections": ["#theme-wall", "#theme-header", "#theme-expand"],
            "sponsored": true,
            "sitetakeover": true,
            "version": 1.006
        },
        /* Movistar */
        1110: {
            "themeID": 1110,
            "title": "Movistar",
            "author": "Movistar",
            "location": "movistar",
            "sections": ["#theme-wall", "#theme-header", "#theme-videoheader"],
            "sponsored": true,
            "sitetakeover": true,
            "version": 1.007,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Movistar - ROS */
        1111: {
            "themeID": 1111,
            "title": "Movistar",
            "author": "Movistar",
            "location": "movistar",
            "sections": ["#theme-wall", "#theme-header", "#theme-videoheader"],
            "sponsored": true,
            "sitetakeover": true,
            "version": 1.007,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* 21 and Over */
        1120: {
            "themeID": 1120,
            "title": "21 and Over",
            "author": "21 and Over",
            "location": "21Over",
            "sections": ["#theme-wall", "#theme-header", "#theme-interactiontimeout", "#theme-expand"],
            "sponsored": true,
            "sitetakeover": true,
            "version": 1.001,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Flattr */
        1124: {
            "themeID": 1124,
            "title": "This is Flattr",
            "author": "Flattr",
            "location": "flattr",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.005,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Gancia v A */
        1125: {
            "themeID": 1125,
            "title": "Gancia",
            "author": "Gancia",
            "location": "gancia",
            "sections": ["#theme-wall", "#theme-header", "#theme-videoheader", "#theme-expand"],
            "sponsored": true,
            "version": 1.005,
            "locale": "a",
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250,
                "extraParams": "ganversion=a"
            }
        },
        /* Camp Bisco */
        1145: {
            "themeID": 1145,
            "title": "Camp Bisco",
            "author": "Camp Bisco",
            "location": "campBisco",
            "sections": ["#theme-wall", "#theme-header"],
            "sponsored": true,
            "version": 1.002,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Summerfest */
        1162: {
            "themeID": 1162,
            "title": "summerfest",
            "author": "summerfest",
            "location": "summerfest",
            "sections": ["#theme-header", "#theme-wall"],
            "sponsored": true,
            "version": 1.001,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Blues Pioneers Playlist */
        1169: {
            "themeID": 1169,
            "title": "Blues Pioneers Playlist",
            "author": "Blues Pioneers Playlist",
            "location": "bpPlaylist",
            "sections": ["#theme-header"],
            "version": 1.000
        },
        /* Truth */
        1170: {
            "themeID": 1170,
            "title": "Truth",
            "author": "Truth",
            "location": "truth",
            "sections": ["#theme-wall", "#theme-header", "#theme-expand"],
            "sponsored": true,
            "version": 1.005,
            "capital": false
        },
        /* Truth - Age Targeted */
        1176: {
            "themeID": 1176,
            "title": "Truth",
            "author": "Truth",
            "location": "truth",
            "sections": ["#theme-wall", "#theme-header", "#theme-expand"],
            "sponsored": true,
            "version": 1.005,
            "capital": false
        },
        /* Broadcast Chicago */
        1177: {
            "themeID": 1177,
            "title": "Broadcast",
            "author": "Broadcast",
            "location": "broadcastChicago",
            "sections": ["#theme-wall", "#theme-header"],
            "sponsored": true,
            "version": 1.006,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Borosanna */
        1179: {
            "themeID": 1179,
            "title": "Borosanna",
            "author": "Wilmer Murillo",
            "location": "designerBorosanna",
            "premium": true,
            "sections": ["#theme-header"]
        },
        /* HTML5 English */
        1180: {
            "themeID": 1180,
            "title": "HTML5 EN",
            "author": "GS",
            "location": "html5",
            "sections": ["#theme-wall", "#theme-header"],
            "sponsored": true,
            "version": 1.004,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* HTML5 Spanish */
        1181: {
            "themeID": 1181,
            "title": "HTML5 Spanish",
            "author": "GS",
            "location": "html5",
            "sections": ["#theme-wall", "#theme-header"],
            "sponsored": true,
            "version": 1.004,
            "locale": "spanish",
            "capital": {
                "source": "source_spanish.html",
                "width": 300,
                "height": 250
            }
        },
        /* HTML5 French */
        1182: {
            "themeID": 1182,
            "title": "HTML5 French",
            "author": "GS",
            "location": "html5",
            "sections": ["#theme-wall", "#theme-header"],
            "sponsored": true,
            "version": 1.004,
            "locale": "french",
            "capital": {
                "source": "source_french.html",
                "width": 300,
                "height": 250
            }
        },
        /* HTML5 Portuguese */
        1183: {
            "themeID": 1183,
            "title": "HTML5 Portuguese",
            "author": "GS",
            "location": "html5",
            "sections": ["#theme-wall", "#theme-header"],
            "sponsored": true,
            "version": 1.004,
            "locale": "portuguese",
            "capital": {
                "source": "source_portuguese.html",
                "width": 300,
                "height": 250
            }
        },
        /* HTML5 Italian */
        1184: {
            "themeID": 1184,
            "title": "HTML5 Italian",
            "author": "GS",
            "location": "html5",
            "sections": ["#theme-wall", "#theme-header"],
            "sponsored": true,
            "version": 1.004,
            "locale": "italian",
            "capital": {
                "source": "source_italian.html",
                "width": 300,
                "height": 250
            }
        },
        /* Dispatch Album Release */
        1186: {
            "themeID": 1186,
            "title": "Dispatch",
            "author": "Dispatch",
            "location": "dispatch",
            "sections": ["#theme-header", "#theme-wall", "#theme-videoheader"],
            "sponsored": true,
            "version": 1.005,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Coke Argentina */
        1191: {
                "themeID":          1191,
                "title":            "Coke Argentina",
                "author":           "coke",
                "location":         "cokeArgentina",
                "sections":         ["#theme-wall", "#theme-header", "#theme-expand"],
                "sponsored":        true,
                "version":          1.006,
                "capital":          {
                    "source":   "source.html",
                    "width":    300,
                    "height":   250    
                }
        },
        /* Sheetz */
        1194: {
            "themeID": 1194,
            "title": "Sheetz",
            "author": "Sheetz",
            "location": "sheetz",
            "sections": ["#theme-wall", "#theme-header", "#theme-videoheader"],
            "sponsored": true,
            "version": 1.005,
            "vidVersion": "_night",
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Portugal The Man Album Release */
        1195: {
            "themeID": 1195,
            "title": "Portugal The Man",
            "author": "Portugal The Man",
            "location": "portugalTheMan",
            "sections": ["#theme-header", "#theme-wall"],
            "sponsored": true,
            "version": 1.005,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Samsung Mini AR */
        1198: {
            "themeID": 1198,
            "title": "Samsung Mini AR",
            "author": "Samsung",
            "location": "samsungMiniArgentina",
            "sections": ["#theme-wall", "#theme-header"],
            "sponsored": true,
            "version": 1.002,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* White Castle Rings Phase 2 */
        1200: {
            "themeID": 1200,
            "title": "White Castle Rings Phase 2",
            "author": "White Castle Rings Phase 2",
            "location": "whiteCastleRingsPhase2",
            "sections": ["#theme-wall", "#theme-header", "#theme-expand"],
            "sponsored": true,
            "version": 1.007,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* White Castle Rings Winners */
        1201: {
            "themeID": 1201,
            "title": "White Castle Rings Winners",
            "author": "White Castle Rings Winners",
            "location": "whiteCastleRingsWinners",
            "sections": ["#theme-wall", "#theme-header"],
            "sponsored": true,
            "version": 1.011
        },
        /* Mitsubishi */
        1204: {
            "themeID": 1204,
            "title": "Mitsubishi",
            "author": "Mitsubishi",
            "location": "mitsubishi",
            "sections": ["#theme-wall", "#theme-header", "#theme-expand"],
            "sponsored": true,
            "version": 1.007,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Site Overlay */
        1205: {
            "themeID": 1205,
            "title": "Site Overlay",
            "author": "Site Overlay",
            "location": "overlayTest",
            "sections": ["#theme-header", "#theme-expand"],
            "sponsored": true,
            "version": 1.004,
            "capital": "default"
        },
        /*1206 RESERVED FOR WHITE CASTLE PROMOTION */
        /* Carlsberg */
        1207: {
            "themeID": 1207,
            "title": "Carlsberg",
            "author": "Carlsberg",
            "location": "carlsberg",
            "sections": ["#theme-wall", "#theme-header", "#theme-videoheader"],
            "sponsored": true,
            "version": 1.005,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* TGIF */
        1208: {
            "themeID": 1208,
            "title": "TGIF",
            "author": "TGIF",
            "location": "tgif",
            "sections": ["#theme-wall", "#theme-header"],
            "sponsored": true,
            "version": 1.008,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* TGIF - GENRE */
        1209: {
            "themeID": 1209,
            "title": "TGIF",
            "author": "TGIF",
            "location": "tgif",
            "sections": ["#theme-wall", "#theme-header"],
            "sponsored": true,
            "tag": true,
            "version": 1.008,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Chris Miles Album Release */
        1210: {
            "themeID": 1210,
            "title": "Chris Miles",
            "author": "Chris Miles",
            "location": "chrisMiles",
            "sections": ["#theme-header", "#theme-wall", "#theme-videoheader"],
            "sponsored": true,
            "version": 1.000,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Mazda Mexico */
        1211: {
            "themeID": 1211,
            "title": "Mazda Mexico",
            "author": "Mazda",
            "location": "mazda",
            "sections": ["#theme-header", "#theme-wall"],
            "sponsored": true,
            "version": 1.001,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Sheetz */
        1213: {
            "themeID": 1213,
            "title": "Sheetz",
            "author": "Sheetz",
            "location": "sheetz",
            "sections": ["#theme-wall", "#theme-header", "#theme-videoheader"],
            "sponsored": true,
            "version": 1.007,
            "vidVersion": "_day",
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Lennon Bus */
        1214: {
            "themeID": 1214,
            "title": "Lennon Bus",
            "author": "Lennon Bus",
            "location": "lennonBus",
            "sections": ["#theme-header", "#theme-wall", "#theme-videoheader"],
            "sponsored": true,
            "version": 1.007,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Samsung Galaxy S4 */
        1215: {
            "themeID": 1215,
            "title": "Samsung Galaxy S4",
            "author": "Samsung",
            "location": "samsungS4",
            "sections": ["#theme-header"],
            "sponsored": true,
            "version": 1.000,
            "capital": "default"
        },
        /* White Castle Slider Brate */
        1216: {
            "themeID": 1216,
            "title": "White Castle Slider Brate",
            "author": "White Castle Slider Brate",
            "location": "whiteCastleSliderBrate",
            "sections": ["#theme-wall", "#theme-header", "#theme-expand", "#theme-videoheader"],
            "sponsored": true,
            "version": 1.006,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Alka Setlzer */
        1217: {
            "themeID": 1217,
            "title": "Alka Seltzer",
            "author": "Alka Seltzer",
            "location": "alkaSeltzer",
            "sections": ["#theme-header"],
            "sponsored": true,
            "version": 1.002,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Man of Steel */
        1218: {
                "themeID":          1218,
                "title":            "Man of Steel",
                "author":           "Man of Steel",
                "location":         "manOfSteel",
                "sections":         ["#theme-wall", "#theme-header", "#theme-expand"],
                "sponsored":        true,
                "version":          1.006,
                "capital":          {
                    "source":   "source.html",
                    "width":    300,
                    "height":   250    
                }
        },
        /* LG Argentina */
        1219: {
            "themeID": 1219,
            "title": "LG Argentina",
            "author": "LG Argentina",
            "location": "lgArg",
            "sections": ["#theme-wall", "#theme-header"],
            "sponsored": true,
            "version": 1.007,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Ford Fiesta Mexico */
        1220: {
            "themeID": 1220,
            "title": "Ford Fiesta",
            "author": "Ford",
            "location": "fordFiestaMex",
            "sections": ["#theme-header", "#theme-wall"],
            "sponsored": true,
            "version": 1.008,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Martini Royale */
        1221: {
            "themeID": 1221,
            "title": "Martini Royale",
            "author": "Martini Royale",
            "location": "martiniRoyale",
            "sections": ["#theme-wall", "#theme-header"],
            "sponsored": true,
            "version": 1.009,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Martini Royale */
        1222: {
            "themeID": 1222,
            "title": "Martini Royale",
            "author": "Martini Royale",
            "location": "martiniRoyale",
            "sections": ["#theme-wall", "#theme-header"],
            "sponsored": true,
            "version": 1.000,
            "bgClass": "bg2",
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Parque Diversiones */
        1223: {
                        
            "themeID": 1223,
            "title": "Parque Diversiones",
            "author": "Parque Diversiones",
            "location": "parqueDiversiones",
            "sections": ["#theme-wall","#theme-header","#theme-expand"],
            "sponsored": true,
            "version": 1.001,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Broadcast Brandon Evans */
        1224: {
            "themeID": 1224,
            "title": "Broadcast",
            "author": "Broadcast",
            "location": "broadcastBrandonEvans",
            "sections": ["#theme-header"],
            "sponsored": true,
            "version": 1.002,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* ANL Album Release */
        1225: {
            "themeID": 1225,
            "title": "ANL",
            "author": "ANL",
            "location": "anl",
            "sections": ["#theme-theme", "#theme-videoheader"],
            "sponsored": true,
            "version": 1.005,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Tobuscus */
        1226: {
            "themeID": 1226,
            "title": "Tobuscus",
            "author": "Tobuscus",
            "location": "tobuscus",
            "sections": ["#theme-theme", "#theme-videoheader"],
            "sponsored": true,
            "version": 1.001,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Reyka */
        1227: {
            "themeID": 1227,
            "title": "Reyka",
            "author": "Reyka",
            "location": "reyka",
            "sections": ["#theme-theme", "#theme-promo"],
            "sponsored": true,
            "version": 1.006,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* 1228 RESERVED FOR REYKABANDS */
        /* Sleeman Obox */
        1229: {
            "themeID": 1229,
            "title": "Sleeman Obox",
            "author": "Sleeman Obox",
            "location": "sleeman",
            "sections": ["#theme-theme", "#theme-interactiontimeout"],
            "sponsored": true,
            "version": 1.002,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Sleeman Obox ROS */
        1230: {
            "themeID": 1230,
            "title": "Sleeman Obox",
            "author": "Sleeman Obox",
            "location": "sleeman",
            "sections": ["#theme-theme", "#theme-interactiontimeout"],
            "sponsored": true,
            "version": 1.003,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Nissan Note */
        1231: {
            "themeID": 1231,
            "title": "Nissan Note",
            "author": "Nissan Note",
            "location": "nissanNote",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.002,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Broadcast Decon */
        1232: {
            "themeID": 1232,
            "title": "Broadcast",
            "author": "Broadcast",
            "location": "broadcastDecon",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.002,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Ford Fiesta MX Q3 */
        1233: {
            "themeID": 1233,
            "title": "Ford Fiesta MX Q3",
            "author": "Ford Fiesta MX Q3",
            "location": "fordFiestaMexQ3",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.002,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Honda */
        1235: {
                        
            "themeID": 1235,
            "title": "Honda",
            "author": "Honda",
            "location": "honda",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.005,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Reyka - Promo */
        1236: {
            "themeID": 1236,
            "title": "Reyka",
            "author": "Reyka",
            "location": "reyka",
            "sections": ["#theme-theme", "#theme-promo"],
            "sponsored": true,
            "version": 1.005,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Reyka - Artists */
        1237: {
            "themeID": 1237,
            "title": "Reyka",
            "author": "Reyka",
            "location": "reyka",
            "sections": ["#theme-theme", "#theme-promo"],
            "sponsored": true,
            "version": 1.005,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Adidas Neo - HPTO */
        1238: {
            "themeID": 1238,
            "title": "Adidas Neo",
            "author": "Adidas Neo",
            "location": "adidasNeo",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.013,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Adidas Neo - GENRE */
        1239: {
            "themeID": 1239,
            "title": "Adidas Neo",
            "author": "Adidas Neo",
            "location": "adidasNeo",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.012,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Subway Q3 */
        1240: {
            "themeID": 1240,
            "title": "Subway Q3",
            "author": "Subway Q3",
            "location": "subwayQ3",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.003,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Broadcast Mass Appeal */
        1241: {
            "themeID": 1241,
            "title": "Broadcast",
            "author": "Broadcast",
            "location": "broadcastMassAppeal",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.003,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Drake Murphy */
        1242: {
            "themeID": 1242,
            "title": "Drake Murphy",
            "author": "Drake Murphy",
            "location": "drakeMurphy",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.001,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Quilmes */
        1243: {
            "themeID": 1243,
            "title": "Quilmes",
            "author": "Quilmes",
            "location": "quilmes",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.004
        },
        /* Adidas Neo */
        1244: {
            "themeID": 1244,
            "title": "Adidas Neo",
            "author": "Adidas Neo",
            "location": "adidasNeo",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.013,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Apple Storm */
        1245: {
            "themeID": 1245,
            "title": "Apple Storm",
            "author": "Apple Storm",
            "location": "appleStormQ3",
            "sections": ["#theme-theme", "#theme-videoheader"],
            "sponsored": true,
            "version": 1.001,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* H&M */
        1248: {
            "themeID": 1248,
            "title": "H&M",
            "author": "H&M",
            "location": "h&m",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "sitetakeover": true,
            "version": 1.004,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* H&M ROS */
        1249: {
            "themeID": 1249,
            "title": "H&M",
            "author": "H&M",
            "location": "h&m",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "sitetakeover": true,
            "version": 1.005,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Adidas Neo - POPULAR */
        1250: {
            "themeID": 1250,
            "title": "Adidas Neo",
            "author": "Adidas Neo",
            "location": "adidasNeo",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.012,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Schick */
        1251: {
            "themeID": 1251,
            "title": "Schick",
            "author": "Schick",
            "location": "schick",
            "sections": ["#theme-theme", "#theme-videoheader"],
            "sponsored": true,
            "version": 1.002,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Ford Fiesta August 13 */
        1252: {
            "themeID": 1252,
            "title": "Ford Fiesta August 13",
            "author": "Ford Fiesta August 13",
            "location": "fordFiestaAugust13",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.008,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Ford Focus Q3 */
        1253: {
            "themeID": 1253,
            "title": "Ford Focus Q3",
            "author": "Ford Focus Q3",
            "location": "fordFocusQ3",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.003,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* One Direction Argentina */
        1254: {
            "themeID": 1254,
            "title": "One Direction",
            "author": "One Direction",
            "location": "oneDirection",
            "sections": ["#theme-theme", "#theme-videoheader"],
            "sponsored": true,
            "sitetakeover": true,
            "date": "Aug29",
            "version": 1.013,
            "capital": {
                "source": "sourceAug29.html",
                "width": 300,
                "height": 250
            }
        },
        /* One Direction Argentina - ROS */
        1255: {
            "themeID": 1255,
            "title": "One Direction",
            "author": "One Direction",
            "location": "oneDirection",
            "sections": ["#theme-theme", "#theme-videoheader"],
            "sponsored": true,
            "sitetakeover": true,
            "date": "Aug29",
            "version": 1.013,
            "capital": {
                "source": "sourceAug29.html",
                "width": 300,
                "height": 250
            }
        },
        /* One Direction Peru */
        1256: {
            "themeID": 1256,
            "title": "One Direction",
            "author": "One Direction",
            "location": "oneDirection",
            "sections": ["#theme-theme", "#theme-videoheader"],
            "sponsored": true,
            "sitetakeover": true,
            "date": "Aug29",
            "version": 1.013,
            "capital": {
                "source": "sourceAug29.html",
                "width": 300,
                "height": 250
            }
        },
        /* One Direction Peru - ROS */
        1257: {
            "themeID": 1257,
            "title": "One Direction",
            "author": "One Direction",
            "location": "oneDirection",
            "sections": ["#theme-theme", "#theme-videoheader"],
            "sponsored": true,
            "sitetakeover": true,
            "date": "Aug29",
            "version": 1.013,
            "capital": {
                "source": "sourceAug29.html",
                "width": 300,
                "height": 250
            }
        },
        /* One Direction Uruguay */
        1258: {
            "themeID": 1258,
            "title": "One Direction",
            "author": "One Direction",
            "location": "oneDirection",
            "sections": ["#theme-theme", "#theme-videoheader"],
            "sponsored": true,
            "sitetakeover": true,
            "date": "Aug29",
            "version": 1.014,
            "capital": {
                "source": "sourceAug29.html",
                "width": 300,
                "height": 250
            }
        },
        /* One Direction Uruguay - ROS */
        1259: {
            "themeID": 1259,
            "title": "One Direction",
            "author": "One Direction",
            "location": "oneDirection",
            "sections": ["#theme-theme", "#theme-videoheader"],
            "sponsored": true,
            "sitetakeover": true,
            "date": "Aug29",
            "version": 1.014,
            "capital": {
                "source": "sourceAug29.html",
                "width": 300,
                "height": 250
            }
        },
        /* One Direction Chile */
        1260: {
            "themeID": 1260,
            "title": "One Direction",
            "author": "One Direction",
            "location": "oneDirection",
            "sections": ["#theme-theme", "#theme-videoheader"],
            "sponsored": true,
            "sitetakeover": true,
            "date": "Aug29",
            "version": 1.013,
            "capital": {
                "source": "sourceAug29.html",
                "width": 300,
                "height": 250
            }
        },
        /* One Direction Chile - ROS */
        1261: {
            "themeID": 1261,
            "title": "One Direction",
            "author": "One Direction",
            "location": "oneDirection",
            "sections": ["#theme-theme", "#theme-videoheader"],
            "sponsored": true,
            "sitetakeover": true,
            "date": "Aug29",
            "version": 1.013,
            "capital": {
                "source": "sourceAug29.html",
                "width": 300,
                "height": 250
            }
        },
        /* One Direction Bolivia */
        1262: {
            "themeID": 1262,
            "title": "One Direction",
            "author": "One Direction",
            "location": "oneDirection",
            "sections": ["#theme-theme", "#theme-videoheader"],
            "sponsored": true,
            "sitetakeover": true,
            "date": "Sep5",
            "version": 1.014,
            "capital": {
                "source": "sourceSep5.html",
                "width": 300,
                "height": 250
            }
        },
        /* One Direction Bolivia - ROS */
        1263: {
            "themeID": 1263,
            "title": "One Direction",
            "author": "One Direction",
            "location": "oneDirection",
            "sections": ["#theme-theme", "#theme-videoheader"],
            "sponsored": true,
            "sitetakeover": true,
            "date": "Sep5",
            "version": 1.014,
            "capital": {
                "source": "sourceSep5.html",
                "width": 300,
                "height": 250
            }
        },
        /* One Direction Columbia */
        1266: {
            "themeID": 1266,
            "title": "One Direction",
            "author": "One Direction",
            "location": "oneDirection",
            "sections": ["#theme-theme", "#theme-videoheader"],
            "sponsored": true,
            "sitetakeover": true,
            "date": "Aug30",
            "version": 1.009,
            "capital": {
                "source": "sourceAug30.html",
                "width": 300,
                "height": 250
            }
        },
        /* One Direction Columbia - ROS */
        1267: {
            "themeID": 1267,
            "title": "One Direction",
            "author": "One Direction",
            "location": "oneDirection",
            "sections": ["#theme-theme", "#theme-videoheader"],
            "sponsored": true,
            "sitetakeover": true,
            "date": "Aug30",
            "version": 1.013,
            "capital": {
                "source": "sourceAug30.html",
                "width": 300,
                "height": 250
            }
        },
        /* One Direction Ecuador */
        1268: {
            "themeID": 1268,
            "title": "One Direction",
            "author": "One Direction",
            "location": "oneDirection",
            "sections": ["#theme-theme", "#theme-videoheader"],
            "sponsored": true,
            "sitetakeover": true,
            "date": "Aug30",
            "version": 1.013,
            "capital": {
                "source": "sourceAug30.html",
                "width": 300,
                "height": 250
            }
        },
        /* One Direction Ecuador */
        1269: {
            "themeID": 1269,
            "title": "One Direction",
            "author": "One Direction",
            "location": "oneDirection",
            "sections": ["#theme-theme", "#theme-videoheader"],
            "sponsored": true,
            "sitetakeover": true,
            "date": "Aug30",
            "version": 1.013,
            "capital": {
                "source": "sourceAug30.html",
                "width": 300,
                "height": 250
            }
        },
        /* One Direction Venezuela */
        1270: {
            "themeID": 1270,
            "title": "One Direction",
            "author": "One Direction",
            "location": "oneDirection",
            "sections": ["#theme-theme", "#theme-videoheader"],
            "sponsored": true,
            "sitetakeover": true,
            "date": "Sep27",
            "version": 1.013,
            "capital": {
                "source": "sourceSep27.html",
                "width": 300,
                "height": 250
            }
        },
        /* One Direction Venezuela - ROS */
        1271: {
            "themeID": 1271,
            "title": "One Direction",
            "author": "One Direction",
            "location": "oneDirection",
            "sections": ["#theme-theme", "#theme-videoheader"],
            "sponsored": true,
            "sitetakeover": true,
            "date": "Sep27",
            "version": 1.013,
            "capital": {
                "source": "sourceSep27.html",
                "width": 300,
                "height": 250
            }
        },
        /* One Direction Flight 2 (No Date) */
        1272: {
            "themeID": 1272,
            "title": "One Direction",
            "author": "One Direction",
            "location": "oneDirection",
            "sections": ["#theme-theme", "#theme-videoheader"],
            "sponsored": true,
            "sitetakeover": true,
            "date": "",
            "version": 1.013,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* One Direction Flight 2 (No Date) - ROS */
        1273: {
            "themeID": 1273,
            "title": "One Direction",
            "author": "One Direction",
            "location": "oneDirection",
            "sections": ["#theme-theme", "#theme-videoheader"],
            "sponsored": true,
            "sitetakeover": true,
            "date": "",
            "version": 1.013,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Ceremonia */
        1274: {
            "themeID": 1274,
            "title": "Ceremonia",
            "author": "Ceremonia",
            "location": "ceremonia",
            "sections": ["#theme-theme", "#theme-videoheader"],
            "sponsored": true,
            "sitetakeover": true,
            "version": 1.013,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Ceremonia ROS */
        1275: {
            "themeID": 1275,
            "title": "Ceremonia",
            "author": "Ceremonia",
            "location": "ceremonia",
            "sections": ["#theme-theme", "#theme-videoheader"],
            "sponsored": true,
            "sitetakeover": true,
            "version": 1.013,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Dodge Dart */
        1276: {
            "themeID": 1276,
            "title": "Dodge Dart",
            "author": "Dodge Dart",
            "location": "dodgeDart",
            "sections": ["#theme-theme", "#theme-interactiontimeout"],
            "sponsored": true,
            "sitetakeover": true,
            "version": 1.014,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Dodge Dart ROS */
        1277: {
            "themeID": 1277,
            "title": "Dodge Dart",
            "author": "Dodge Dart",
            "location": "dodgeDart",
            "sections": ["#theme-theme", "#theme-interactiontimeout"],
            "sponsored": true,
            "sitetakeover": true,
            "version": 1.014,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Billy Van */
        1278: {
            "themeID": 1278,
            "title": "Billy Van",
            "author": "Billy Van",
            "location": "billyVan",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "sitetakeover": true,
            "version": 1.017,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Reyka Phase 2 */
        1279: {          
            "themeID": 1279,
            "title": "Reyka Phase 2",
            "author": "Reyka Phase 2",
            "location": "reykaPhase2",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.007,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Reyka Phase 2 - ARTIST */
        1280: {            
            "themeID": 1280,
            "title": "Reyka Phase 2",
            "author": "Reyka Phase 2",
            "location": "reykaPhase2",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.005,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* One Direction Central - Costa Rica - America */
        1264: {
            "themeID": 1264,
            "title": "One Direction",
            "author": "One Direction",
            "location": "oneDirection",
            "sections": ["#theme-theme", "#theme-videoheader"],
            "sponsored": true,
            "sitetakeover": true,
            "date": "Sep5",
            "version": 1.014,
            "capital": {
                "source": "sourceSep5.html",
                "width": 300,
                "height": 250
            }
        },
        /* One Direction Central America - Costa Rica - ROS */
        1265: {
            "themeID": 1265,
            "title": "One Direction",
            "author": "One Direction",
            "location": "oneDirection",
            "sections": ["#theme-theme", "#theme-videoheader"],
            "sponsored": true,
            "sitetakeover": true,
            "date": "Sep5",
            "version": 1.014,
            "capital": {
                "source": "sourceSep5.html",
                "width": 300,
                "height": 250
            }
        },
        /* One Direction Central America - El Salvador */
        1281: {
            "themeID": 1281,
            "title": "One Direction",
            "author": "One Direction",
            "location": "oneDirection",
            "sections": ["#theme-theme", "#theme-videoheader"],
            "sponsored": true,
            "sitetakeover": true,
            "date": "Sep5",
            "version": 1.014,
            "capital": {
                "source": "sourceSep5.html",
                "width": 300,
                "height": 250
            }
        },
        /* One Direction Central America - El Salvador - ROS */
        1282: {
            "themeID": 1282,
            "title": "One Direction",
            "author": "One Direction",
            "location": "oneDirection",
            "sections": ["#theme-theme", "#theme-videoheader"],
            "sponsored": true,
            "sitetakeover": true,
            "date": "Sep5",
            "version": 1.014,
            "capital": {
                "source": "sourceSep5.html",
                "width": 300,
                "height": 250
            }
        },
        /* One Direction Central America - Guatemala */
        1283: {
            "themeID": 1283,
            "title": "One Direction",
            "author": "One Direction",
            "location": "oneDirection",
            "sections": ["#theme-theme", "#theme-videoheader"],
            "sponsored": true,
            "sitetakeover": true,
            "date": "Sep5",
            "version": 1.014,
            "capital": {
                "source": "sourceSep5.html",
                "width": 300,
                "height": 250
            }
        },
        /* One Direction Central America - Guatemala - ROS */
        1284: {
            "themeID": 1284,
            "title": "One Direction",
            "author": "One Direction",
            "location": "oneDirection",
            "sections": ["#theme-theme", "#theme-videoheader"],
            "sponsored": true,
            "sitetakeover": true,
            "date": "Sep5",
            "version": 1.014,
            "capital": {
                "source": "sourceSep5.html",
                "width": 300,
                "height": 250
            }
        },
        /* One Direction Central America - Honduras */
        1285: {
            "themeID": 1285,
            "title": "One Direction",
            "author": "One Direction",
            "location": "oneDirection",
            "sections": ["#theme-theme", "#theme-videoheader"],
            "sponsored": true,
            "sitetakeover": true,
            "date": "Sep5",
            "version": 1.014,
            "capital": {
                "source": "sourceSep5.html",
                "width": 300,
                "height": 250
            }
        },
        /* One Direction Central America - Honduras - ROS */
        1286: {
            "themeID": 1286,
            "title": "One Direction",
            "author": "One Direction",
            "location": "oneDirection",
            "sections": ["#theme-theme", "#theme-videoheader"],
            "sponsored": true,
            "sitetakeover": true,
            "date": "Sep5",
            "version": 1.014,
            "capital": {
                "source": "sourceSep5.html",
                "width": 300,
                "height": 250
            }
        },
        /* One Direction Central America - Nicaragua */
        1287: {
            "themeID": 1287,
            "title": "One Direction",
            "author": "One Direction",
            "location": "oneDirection",
            "sections": ["#theme-theme", "#theme-videoheader"],
            "sponsored": true,
            "sitetakeover": true,
            "date": "Sep5",
            "version": 1.014,
            "capital": {
                "source": "sourceSep5.html",
                "width": 300,
                "height": 250
            }
        },
        /* One Direction Central America - Nicaragua - ROS */
        1288: {
            "themeID": 1288,
            "title": "One Direction",
            "author": "One Direction",
            "location": "oneDirection",
            "sections": ["#theme-theme", "#theme-videoheader"],
            "sponsored": true,
            "sitetakeover": true,
            "date": "Sep5",
            "version": 1.014,
            "capital": {
                "source": "sourceSep5.html",
                "width": 300,
                "height": 250
            }
        },
        /* One Direction Central America - Panama */
        1289: {
            "themeID": 1289,
            "title": "One Direction",
            "author": "One Direction",
            "location": "oneDirection",
            "sections": ["#theme-theme", "#theme-videoheader"],
            "sponsored": true,
            "sitetakeover": true,
            "date": "Sep5",
            "version": 1.014,
            "capital": {
                "source": "sourceSep5.html",
                "width": 300,
                "height": 250
            }
        },
        /* One Direction Central America - Panama - ROS */
        1290: {
            "themeID": 1290,
            "title": "One Direction",
            "author": "One Direction",
            "location": "oneDirection",
            "sections": ["#theme-theme", "#theme-videoheader"],
            "sponsored": true,
            "sitetakeover": true,
            "date": "Sep5",
            "version": 1.014,
            "capital": {
                "source": "sourceSep5.html",
                "width": 300,
                "height": 250
            }
        },
        //One Direction 1291, 1292 
        /* Mountain Oasis */
        1293: {
            "themeID": 1293,
            "title": "Mountain Oasis",
            "author": "Mountain Oasis",
            "location": "mountainOasis",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.015,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Mazda 3 */
        1294: {
            "themeID": 1294,
            "title": "Mazda 3",
            "author": "Mazda 3",
            "location": "mazda3",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.015,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Undertone */
        1295: {
            "themeID": 1295,
            "title": "Undertone",
            "author": "Undertone",
            "location": "undertone",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.000,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250,
                "masthead": "masthead.html"
            }
        },
        /* Coke Zero BR */
        1296: {
            "themeID": 1296,
            "title": "Coke Zero",
            "author": "Coke Zero",
            "location": "cokeZeroBR",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.003,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Reyka Phase 2 - ADDED VALUE */
        1297: {
                        
            "themeID": 1297,
            "title": "Reyka Phase 2",
            "author": "Reyka Phase 2",
            "location": "reykaPhase2",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.005,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Coke Zero BR - Version 2 */
        1298: {
            "themeID": 1298,
            "title": "Coke Zero",
            "author": "Coke Zero",
            "location": "cokeZeroBR2",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.001,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Undertone 2 */
        1299: {
            "themeID": 1299,
            "title": "Undertone",
            "author": "Undertone",
            "location": "undertone2",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.000,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250,
                "masthead": "masthead.html"
            }
        },
        /* Coke Zero BR - TL */
        1317: {
            "themeID": 1317,
            "title": "Coke Zero",
            "author": "Coke Zero",
            "location": "cokeZeroBR",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.003,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Danny Perez */
        1318: {
            "themeID": 1318,
            "title": "Danny Perez",
            "author": "Danny Perez",
            "location": "dannyPerez",
            "sections": ["#theme-theme", "#theme-videoheader"],
            "sponsored": true,
            "version": 1.006,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Coke Zero BR - Version 2 - TL */
        1319: {
            "themeID": 1319,
            "title": "Coke Zero",
            "author": "Coke Zero",
            "location": "cokeZeroBR2",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.001,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Danny Perez */
        1320: {
            "themeID": 1320,
            "title": "Danny Perez",
            "author": "Danny Perez",
            "location": "dannyPerez",
            "sections": ["#theme-theme", "#theme-videoheader"],
            "sponsored": true,
            "version": 1.006,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Nike JDI */
        1321: {
            "themeID": 1321,
            "title": "Nike",
            "author": "Nike",
            "location": "nikeJDI",
            "sections": ["#theme-theme", "#theme-videoheader"],
            "sponsored": true,
            "sitetakeover": true,
            "version": 1.007,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Nike JDI ROS */
        1322: {
            "themeID": 1322,
            "title": "Nike",
            "author": "Nike",
            "location": "nikeJDI",
            "sections": ["#theme-theme", "#theme-videoheader"],
            "sponsored": true,
            "sitetakeover": true,
            "version": 1.007,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Undertone 3 */
        1323: {
            "themeID": 1323,
            "title": "Undertone",
            "author": "Undertone",
            "location": "undertone3",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.000,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250,
                "masthead": "masthead.html"
            }
        },
        /* Adidas Australia */
        1324: {
            "themeID": 1324,
            "title": "Adidas Australia",
            "author": "Adidas Australia",
            "location": "adidasAustralia",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "sitetakeover": true,
            "version": 1.003,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Adidas Australia ROS */
        1325: {
            "themeID": 1325,
            "title": "Adidas Australia",
            "author": "Adidas Australia",
            "location": "adidasAustralia",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "sitetakeover": true,
            "version": 1.003,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Budweiser */
        1326: {
            "themeID": 1326,
            "title": "Budweiser",
            "author": "Budweiser",
            "location": "budweiser",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "sitetakeover": true,
            "version": 1.003,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Budweiser ROS */
        1327: {
            "themeID": 1327,
            "title": "Budweiser",
            "author": "Budweiser",
            "location": "budweiser",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "sitetakeover": true,
            "version": 1.003,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Fusion - PREMIUM */
        1328: {
            "themeID": 1328,
            "title": "Fusion",
            "author": "Grooveshark",
            "location": "fusion",
            "premium": true,
            "sections": [],
            "version": 1.004
        },
        /* The Originals */
        1329: {
            "themeID": 1329,
            "title": "The Originals",
            "author": "The Originals",
            "location": "theOriginals",
            "sections": ["#theme-theme", "#theme-videoheader"],
            "sponsored": true,
            "sitetakeover": true,
            "version": 1.014,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Nokia Lumia */
        1330: {
            "themeID": 1330,
            "title": "Nokia Lumia",
            "author": "Nokia Lumia",
            "location": "nokiaLumia",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "sitetakeover": true,
            "version": 1.005,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Nokia Lumia ROS */
        1331: {
            "themeID": 1331,
            "title": "Nokia Lumia",
            "author": "Nokia Lumia",
            "location": "nokiaLumia",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "sitetakeover": true,
            "version": 1.005,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Car2Go Calgary */
        1332: {
            "themeID": 1332,
            "title": "Car2Go",
            "author": "Car2Go",
            "location": "car2Go",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.006
        },
        /* Car2Go Toronto */
        1333: {
            "themeID": 1333,
            "title": "Car2Go",
            "author": "Car2Go",
            "location": "car2Go",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.006
        },
        /* Car2Go Vancouver */
        1334: {
            "themeID": 1334,
            "title": "Car2Go",
            "author": "Car2Go",
            "location": "car2Go",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.006
        },
        /* T1 Testing HPTO */
        1335: {
            "themeID": 1335,
            "title": "T1Testing",
            "location": "t1testing",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.000
        },
        /* T1 Testing ROS */
        1336: {
            "themeID": 1336,
            "title": "T1Testing",
            "location": "t1testing",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "sitetakeover": true,
            "version": 1.000
        },
        /* New Release Form */
        1337: {
            "themeID": 1337,
            "title": "New Releases",
            "location": "groovesharkNewReleases",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.002
        },
        /* Tomorrow People Who Are They Video */
        1338: {
            "themeID": 1338,
            "title": "Tomorrow People",
            "author": "Tomorrow People",
            "location": "tomorrowPeople",
            "sections": ["#theme-theme", "#theme-videoheader"],
            "sponsored": true,
            "sitetakeover": true,
            "version": 1.001,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Tomorrow People Beyond Today Video */
        1339: {
            "themeID": 1339,
            "title": "Tomorrow People",
            "author": "Tomorrow People",
            "location": "tomorrowPeople",
            "sections": ["#theme-theme", "#theme-videoheader"],
            "sponsored": true,
            "sitetakeover": true,
            "version": 1.002,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Calvin Klein */
        1340: {
            "themeID": 1340,
            "title": "Calvin Klein",
            "author": "Calvin Klein",
            "location": "calvinKlein",
            "sections": ["#theme-theme", "#theme-videoheader"],
            "sponsored": true,
            "sitetakeover": true,
            "version": 1.005,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /*  Overwerk and Emmagician HPTO */
        1342:  {
            "themeID": 1342,
            "title": "Overwerk Emmagician",
            "author": "Grooveshark",
            "location": "overwerkEmmagician",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "user": true,
            "version": 1.006,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Movistar Q3 */
        1343: {
            "themeID": 1343,
            "title": "Movistar Q3",
            "author": "Movistar Q3",
            "location": "movistarQ3",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "sitetakeover": true,
            "version": 1.005
        },
        /*  Writhem and Emmagician HPTO */
        1346:  {
            "themeID": 1346,
            "title": "Writhem Emmagician",
            "author": "Grooveshark",
            "location": "writhemEmmagician",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "user": true,
            "version": 1.006,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* 1347 RESERVED FOR NEW RELEASES PROMO */
        /* Boldy James PRE-ORDER */
        1348: {
            "themeID": 1348,
            "title": "Boldy James",
            "author": "Boldy James",
            "location": "boldyJames",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.007,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Boldy James ORDER-NOW (Album drops 10/15/13) */
        1349: {
            "themeID": 1349,
            "title": "Boldy James",
            "author": "Boldy James",
            "location": "boldyJames",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "release": "now",
            "version": 1.007,
            "capital": {
                "source": "source_now.html",
                "width": 300,
                "height": 250
            }
        },
        /* Max Frost PRE-ORDER */
        1350: {
            "themeID": 1350,
            "title": "Max Frost",
            "author": "Max Frost",
            "location": "maxFrost",
            "sections": ["#theme-theme", "#theme-videoheader"],
            "sponsored": true,
            "version": 1.007,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Max Frost ORDER-NOW (Album drops 10/8/13) */
        1351: {
            "themeID": 1351,
            "title": "Max Frost",
            "author": "Max Frost",
            "location": "maxFrost",
            "sections": ["#theme-theme", "#theme-videoheader"],
            "sponsored": true,
            "release": "now",
            "version": 1.007,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Volkswagon */
        1352: {
            "themeID": 1352,
            "title": "Volkswagon",
            "author": "Volkswagon",
            "location": "volkswagon",
            "sections": ["#theme-theme", "#theme-videoheader"],
            "sponsored": true,
            "version": 1.006,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* CMJ */
        1353: {
            "themeID": 1353,
            "title": "CMJ",
            "author": "CMJ",
            "location": "cmj",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.017,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* T1 Testing HPTO */
        1354: {
            "themeID": 1354,
            "title": "T1Testing",
            "location": "t1testing",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.000
        },
        /* T1 Testing ROS */
        1355: {
            "themeID": 1355,
            "title": "T1Testing",
            "location": "t1testing",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "sitetakeover": true,
            "version": 1.000
        },
        /* Ford Fiesta Argentina */
        1356: {
            "themeID": 1356,
            "title": "Ford Fiesta Argentina",
            "author": "Ford Fiesta Argentina",
            "location": "fordFiestaArg",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.017,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Nike JDI Q3 - HPTO */
        1357: {
            "themeID": 1357,
            "title": "Nike JDI Q3",
            "author": "Nike JDI Q3",
            "location": "nikeJDIQ3",
            "sections": ["#theme-theme", "#theme-videoheader"],
            "sponsored": true,
            "version": 1.013,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Nike JDI Q3 - ROS */
        1358: {
            "themeID": 1358,
            "title": "Nike JDI Q3",
            "author": "Nike JDI Q3",
            "location": "nikeJDIQ3",
            "sections": ["#theme-theme", "#theme-videoheader"],
            "sponsored": true,
            "sitetakeover": true,
            "version": 1.013,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Reign 'Alliance' Video */
        1359: {
            "themeID": 1359,
            "title": "Reign",
            "author": "Reign",
            "location": "reign",
            "sections": ["#theme-theme", "#theme-videoheader"],
            "sponsored": true,
            "version": 1.003,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Reign 'Tell me' Video */
        1360: {
            "themeID": 1360,
            "title": "Reign",
            "author": "Reign",
            "location": "reign",
            "sections": ["#theme-theme", "#theme-videoheader"],
            "sponsored": true,
            "version": 1.003,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* CMJ */
        1361: {
            "themeID": 1361,
            "title": "CMJ",
            "author": "CMJ",
            "location": "cmjEvent",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.019,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /*  White Castle wc93 */
        1362:  {
            "themeID": 1362,
            "title": "White Castle wc93",
            "author": "White Castle",
            "location": "whiteCastle93",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.018,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /*  White Castle wc93 - ADDED VALUE */
        1365:  {
            "themeID": 1365,
            "title": "White Castle wc93",
            "author": "White Castle",
            "location": "whiteCastle93",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "addedvalue": true,
            "version": 1.015,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Adidas Australia Q4 */
        1366: {
            "themeID": 1366,
            "title": "Adidas Australia Q4",
            "author": "Adidas Australia Q4",
            "location": "adidasAustraliaQ4",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.004,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* YouTube Brazil */
        1367: {
            "themeID": 1367,
            "title": "YouTube",
            "author": "YouTube",
            "location": "youTube",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.004,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Nike UK */
        1368: {
            "themeID": 1368,
            "title": "Nike",
            "author": "Nike",
            "location": "nikeUK",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.001
        },
        /* Adidas Australia Q4 - ROS */
        1369: {
            "themeID": 1369,
            "title": "Adidas Australia Q4",
            "author": "Adidas Australia Q4",
            "location": "adidasAustraliaQ4",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.004,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Nike UK - Country 2 */
        1370: {
            "themeID": 1370,
            "title": "Nike",
            "author": "Nike",
            "location": "nikeUK",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.001
        },
        /* Samsung Gear */
        1371: {
            "themeID": 1371,
            "title": "Samnsung",
            "author": "Samnsung",
            "location": "samsungGear",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.001
        },
        /* Car2Go Montreal */
        1372: {
            "themeID": 1372,
            "title": "Car2Go",
            "author": "Car2Go",
            "location": "car2GoMontreal",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.006
        },
        /* Undertone 4 */
        1373: {
            "themeID": 1373,
            "title": "Undertone",
            "author": "Undertone",
            "location": "undertone4",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.000,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250,
                "masthead": "masthead.html"
            }
        },
        /* Mini Countryman */
        1374: {
            "themeID": 1374,
            "title": "Mini Countryman",
            "author": "Mini Countryman",
            "location": "mini",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.004
        },
        /* New Releases */
        1375:  {
            "themeID":          1375,
            "title":            "New Releases",
            "author":           "Grooveshark",
            "location":         "newReleases",
            "sections":         ["#theme-theme"],
            "user":             true,
            "version":          1.013
        },
        /* Ron Pampero */
        1376: {
            "themeID": 1376,
            "title": "Ron Pampero",
            "author": "Ron Pampero",
            "location": "ronPampero",
            "sections": ["#theme-theme", "#theme-videoheader"],
            "sponsored": true,
            "version": 1.003,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Budweiser - Phase 2 */
        1377: {
            "themeID": 1377,
            "title": "Budweiser",
            "author": "Budweiser",
            "location": "budweiserPhase2",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "sitetakeover": true,
            "version": 1.004,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Budweiser ROS - Phase 2 */
        1378: {
            "themeID": 1378,
            "title": "Budweiser",
            "author": "Budweiser",
            "location": "budweiserPhase2",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "sitetakeover": true,
            "version": 1.004,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Frontera */
        1379: {
            "themeID": 1379,
            "title": "Frontera",
            "author": "Frontera",
            "location": "frontera",
            "sections": ["#theme-theme"],
            "sitetakeover": true,
            "sponsored": true,
            "version": 1.016,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Frontera ROS */
        1380: {
            "themeID": 1380,
            "title": "Frontera",
            "author": "Frontera",
            "location": "frontera",
            "sections": ["#theme-theme"],
            "sitetakeover": true,
            "sponsored": true,
            "version": 1.016,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Billy Van - BV */
        1381: {
            "themeID": 1381,
            "title": "Billy Van",
            "author": "Grooveshark",
            "location": "billyvanBVNR",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.002,
            "extraClass": "billyvan",
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Billy Van - NR */
        1382: {
            "themeID": 1382,
            "title": "Billy Van",
            "author": "Grooveshark",
            "location": "billyvanBVNR",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.002,
            "extraClass": "newrelease",
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* American Apparel */
        1383: {
            "themeID": 1383,
            "title": "American Apparel",
            "author": "American Apparel",
            "location": "americanApparel",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.002,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* FAAP */
        1384: {
            "themeID": 1384,
            "title": "FAAP",
            "author": "FAAP",
            "location": "faap",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.003,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Senac */
        1385: {
            "themeID": 1385,
            "title": "Senac",
            "author": "Senac",
            "location": "senac",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.006,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Ibiza */
        1386: {
            "themeID": 1386,
            "title": "Ibiza",
            "author": "Ibiza",
            "location": "ibiza",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "sitetakeover": true,
            "version": 1.005,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Ibiza ROS */
        1387: {
            "themeID": 1387,
            "title": "Ibiza",
            "author": "Ibiza",
            "location": "ibiza",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "sitetakeover": true,
            "version": 1.005,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* XL Black */
        1388: {
            "themeID": 1388,
            "title": "XL Black",
            "author": "XL Black",
            "location": "xlBlack",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.007,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Emmagician and Electric Joy Ride BC Emma's Page */
        1389:  {
            "themeID":          1389,
            "title":            "Electric Joy Ride",
            "author":           "Grooveshark",
            "location":         "electricJoyride",
            "sections":         ["#theme-theme"],
            "extraClass":       "emma",
            "sponsored":        true,
            "user":             true,
            "version":          1.007,
            "tracking":         []
        },
        /* Emmagician and Electric Joy Ride BC EJR's Page */
        1390:  {
            "themeID":          1390,
            "title":            "Electric Joy Ride",
            "author":           "Grooveshark",
            "location":         "electricJoyride",
            "sections":         ["#theme-theme"],
            "sponsored":        true,
            "user":             true,
            "version":          1.007,
            "tracking":         []
        },
        /* 1391 XLBlack TL */
        /*  Migmag and Chicago HPTO */
        1392:  {
            "themeID": 1392,
            "title": "Migmag and Chicago",
            "author": "Grooveshark",
            "location": "migmagChicago",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.008,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Migmag and Chicago (Migmag's Page) */
        1393:  {
            "themeID":          1393,
            "title":            "Electric Joy Ride",
            "author":           "Grooveshark",
            "location":         "migmagChicago",
            "sections":         ["#theme-theme"],
            "extraClass":       "migmag",
            "sponsored":        true,
            "user":             true,
            "version":          1.008,
            "tracking":         []
        },
        /* Migmag and Chicago (Chicago's Page) */
        1394:  {
            "themeID":          1394,
            "title":            "Electric Joy Ride",
            "author":           "Grooveshark",
            "location":         "migmagChicago",
            "sections":         ["#theme-theme"],
            "sponsored":        true,
            "user":             true,
            "version":          1.008,
            "tracking":         []
        },
        /* Nissan Pathfinder Columbia */
        1395: {
            "themeID": 1395,
            "title": "Nissan Pathfinder",
            "author": "Nissan Pathfinder",
            "location": "nissanPathfinder",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.009,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Nissan Pathfinder Chile */
        1396: {
            "themeID": 1396,
            "title": "Nissan Pathfinder",
            "author": "Nissan Pathfinder",
            "location": "nissanPathfinder",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.009,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Undertone 5 */
        1397: {
            "themeID": 1397,
            "title": "Undertone",
            "author": "Undertone",
            "location": "undertone5",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.000,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250,
                "masthead": "masthead.html"
            }
        },
        /* CMJ Rewind */
        1398: {
            "themeID": 1398,
            "title": "CMJ Rewind",
            "author": "CMJ Rewind",
            "location": "cmjRewind",
            "sections": ["#theme-theme", "#theme-videoheader"],
            "sponsored": true,
            "version": 1.0010
        },
        /* Concierto Cable */
        1399: {
            "themeID": 1399,
            "title": "Concierto Cable",
            "author": "Concierto Cable",
            "location": "conciertoCable",
            "sections": ["#theme-theme", "#theme-videoheader"],
            "sponsored": true,
            "version": 1.006,
        },
        /* City Harvest Q4 */
        1400: {
            "themeID": 1400,
            "title": "City Harvest Q4",
            "author": "City Harvest Q4",
            "location": "cityHarvestQ4",
            "sections": ["#theme-theme", "#theme-videoheader"],
            "sponsored": true,
            "version": 1.003,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Jimador */
        1401: {
            "themeID": 1401,
            "title": "Jimador",
            "author": "Jimador",
            "location": "jimador",
            "sections": ["#theme-theme", "#theme-videoheader"],
            "sponsored": true,
            "version": 1.003,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Universidad El Salvador */
        1402: {
            "themeID": 1402,
            "title": "Universidad El Salvador",
            "author": "Universidad El Salvador",
            "location": "universidadElSalvador",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.004,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Sonos UK */
        1403: {
            "themeID": 1403,
            "title": "Sonos",
            "author": "Sonos",
            "location": "sonosUK",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.005
        },
        /* Undertone 5 */
        1404: {
            "themeID": 1404,
            "title": "Undertone",
            "author": "Undertone",
            "location": "undertone6",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.000,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250,
                "masthead": "masthead.html"
            }
        },
        /* Emmagician and Milkman BC Emma's Page */
        1405:  {
            "themeID":          1405,
            "title":            "Milkman",
            "author":           "Grooveshark",
            "location":         "milkman",
            "sections":         ["#theme-theme"],
            "extraClass":       "emma",
            "sponsored":        true,
            "user":             true,
            "version":          1.001
        },
        /* Emmagician and Milkman BC Milkman's Page */
        1406:  {
            "themeID":          1406,
            "title":            "Milkman",
            "author":           "Grooveshark",
            "location":         "milkman",
            "sections":         ["#theme-theme"],
            "sponsored":        true,
            "user":             true,
            "version":          1.001
        },
        /* Adidas Australia Q4 */
        1407: {
            "themeID": 1407,
            "title": "Adidas Australia Q4",
            "author": "Adidas Australia Q4",
            "location": "adidasAustraliaQ4",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.004,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Adidas Australia Q4 - ROS */
        1408: {
            "themeID": 1408,
            "title": "Adidas Australia Q4",
            "author": "Adidas Australia Q4",
            "location": "adidasAustraliaQ4",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.004,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Red Bull UK */
        1409: {
            "themeID": 1409,
            "title": "Red Bull UK",
            "author": "Red Bull UK",
            "location": "redbullUK",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.005,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Grooveshark Holiday 2013 */
        1410: {
            "themeID": 1410,
            "title": "Grooveshark Holiday 2013",
            "author": "Grooveshark Holiday 2013",
            "location": "groovesharkHoliday2013Flight2",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.010,
            "rotateOnHome": true,
            "capital": "default"
        },
        /* Covergirl */
        1411: {
            "themeID": 1411,
            "title": "Covergirl",
            "author": "Covergirl",
            "location": "covergirl",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "sitetakeover": true,
            "version": 1.001,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Smart Italy */
        1412: {
            "themeID": 1412,
            "title": "Smart",
            "author": "Smart",
            "location": "smart",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "sitetakeover": true,
            "version": 1.008,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Smart Italy - TL */
        1413: {
            "themeID": 1413,
            "title": "Smart",
            "author": "Smart",
            "location": "smart",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "sitetakeover": true,
            "version": 1.008,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Unilever */
        1414: {
            "themeID": 1414,
            "title": "Unilever",
            "author": "Unilever",
            "location": "unilever",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.008,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* White Castle I7 */
        1415: {
            "themeID": 1415,
            "title": "White Castle I7",
            "author": "White Castle I7",
            "location": "whiteCastleI7",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.009,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* White Castle I7 Playlist Page */
        1416: {
            "themeID": 1416,
            "title": "White Castle I7",
            "author": "White Castle I7",
            "location": "whiteCastleI7",
            "sections": ["#theme-theme"],
            "extraClass": "wcPlaylist",
            "sponsored": true,
            "user": true,
            "version": 1.010,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            },
            "tracking": []
        },
        /* New Releases HPTO */
        1417: {
            "themeID": 1417,
            "title": "New Releases HPTO",
            "author": "Grooveshark",
            "location": "newReleasesHPTO",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.003,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Trident */
        1418: {
            "themeID": 1418,
            "title": "Trident",
            "author": "Trident",
            "location": "trident",
            "sections": ["#theme-theme", "#theme-videoheader"],
            "sponsored": true,
            "sitetakeover": true,
            "version": 1.005,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Shakira */
        1419: {
            "themeID": 1419,
            "title": "Shakira",
            "author": "Shakira",
            "location": "shakira",
            "sections": ["#theme-theme", "#theme-videoheader"],
            "sponsored": true,
            "sitetakeover": true,
            "version": 1.005,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Shakira - TL */
        1420: {
            "themeID": 1420,
            "title": "Shakira",
            "author": "Shakira",
            "location": "shakira",
            "sections": ["#theme-theme", "#theme-videoheader"],
            "sponsored": true,
            "sitetakeover": true,
            "version": 1.005,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* New Releases HPTO */
        1421: {
            "themeID": 1421,
            "title": "New Releases HPTO",
            "author": "Grooveshark",
            "location": "newReleasesHPTO",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.003,
            "capital": "default"
        },
        /* Garnier */
        1422: {
            "themeID": 1422,
            "title": "Garnier",
            "author": "Garnier",
            "location": "garnier",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "sitetakeover": true,
            "version": 1.005,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Garnier - TL */
        1423: {
            "themeID": 1423,
            "title": "Garnier",
            "author": "Garnier",
            "location": "garnier",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "sitetakeover": true,
            "version": 1.003,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Mitsubishi Mirage */
        1424: {
            "themeID": 1424,
            "title": "Mitsubishi Mirage",
            "author": "Mitsubishi",
            "location": "mitsubishiMirage",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.009,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Mitsubishi Mirage - Ad Page */
        1425: {
            "themeID": 1425,
            "title": "Mitsubishi Mirage",
            "author": "Mitsubishi",
            "location": "mitsubishiMirage",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.009,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Movistar */
        1426: {
            "themeID": 1426,
            "title": "Movistar",
            "author": "Movistar",
            "location": "movistarQ4",
            "sections": ["#theme-theme", "#theme-videoheader"],
            "sponsored": true,
            "version": 1.004,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Johnny Walker */
        1427: {
            "themeID": 1427,
            "title": "Johnny Walker",
            "author": "Johnny Walker",
            "location": "johnnyWalker",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.005,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* McDonalds */
        1428: {
            "themeID": 1428,
            "title": "McDonalds",
            "author": "McDonalds",
            "location": "mcDonalds",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.007,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Wild Turkey */
        1429: {
            "themeID": 1429,
            "title": "Wild Turkey",
            "author": "Wild Turkey",
            "location": "wildTurkey",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "sitetakeover": true,
            "version": 1.006,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Wild Turkey ROS */
        1430: {
            "themeID": 1430,
            "title": "Wild Turkey",
            "author": "Wild Turkey",
            "location": "wildTurkey",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "sitetakeover": true,
            "version": 1.006,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Undertone 7 */
        1431: {
            "themeID": 1431,
            "title": "Undertone",
            "author": "Undertone",
            "location": "undertone7",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.007,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250,
                "masthead": "masthead.html"
            }
        },
        /* Karmaloop Q4 */
        1432: {
            "themeID": 1432,
            "title": "Karmaloop Q4",
            "author": "Karmaloop Q4",
            "location": "karmaloopQ4",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.008,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Pretty Shady */
        1433: {
            "themeID": 1433,
            "title": "Pretty Shady",
            "author": "Pretty Shady",
            "location": "prettyShady",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.010,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Urban Ears */
        1434: {
            "themeID": 1434,
            "title": "Urban Ears",
            "author": "Urban Ears",
            "location": "urbanEars",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.000
        },
        /* Undertone 8 */
        1435: {
            "themeID": 1435,
            "title": "Undertone",
            "author": "Undertone",
            "location": "undertone8",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.007,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250,
                "masthead": "masthead.html"
            }
        },
        /* Sonos UK */
        1436: {
            "themeID": 1436,
            "title": "Sonos UK",
            "author": "Sonos UK",
            "location": "sonosUKQ4",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.008
        },
        /* Gancia Q4 */
        1437: {
            "themeID": 1437,
            "title": "Gancia Q4",
            "author": "Gancia",
            "location": "ganciaQ4",
            "sections": ["#theme-theme", "#theme-videoheader"],
            "sponsored": true,
            "version": 1.010,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* J&B Q4 */
        1438: {
            "themeID": 1438,
            "title": "J&B Q4",
            "author": "J&B ",
            "location": "j&bQ4",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "sitetakeover": true,
            "version": 1.001,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Nissan Pathfinder Chile */
        1439: {
            "themeID": 1439,
            "title": "Nissan Pathfinder",
            "author": "Nissan Pathfinder",
            "location": "nissanPathfinder",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.000,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Nissan Pathfinder Colombia */
        1440: {
            "themeID": 1440,
            "title": "Nissan Pathfinder",
            "author": "Nissan Pathfinder",
            "location": "nissanPathfinder",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.000,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Emmagician and KTH */
        1441:  {
            "themeID":          1441,
            "title":            "KTH",
            "author":           "Grooveshark",
            "location":         "emmagicianKTH",
            "sections":         ["#theme-theme"],
            "sponsored":        true,
            "user":             true,
            "version":          1.005
        },
        /* McDonalds */
        1442: {
            "themeID": 1442,
            "title": "McDonalds",
            "author": "McDonalds",
            "location": "mcDonalds",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.007,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Writhem and Bitmix */
        1443:  {
            "themeID":          1443,
            "title":            "BitMix",
            "author":           "Grooveshark",
            "location":         "writhemBitmix",
            "sections":         ["#theme-theme"],
            "sponsored":        true,
            "user":             true,
            "version":          1.005
        },
        /* Virgin Mobile */
        1444: {
            "themeID": 1444,
            "title": "Virgin Mobile",
            "author": "Virgin Mobile",
            "location": "virginMobile",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.001,
            "capital": false
        },
        /* Jager */
        1445: {
            "themeID": 1445,
            "title": "Jager",
            "author": "Jager",
            "location": "jager",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "sitetakeover": true,
            "version": 1.005,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Jager - TL */
        1446: {
            "themeID": 1446,
            "title": "Jager",
            "author": "Jager",
            "location": "jager",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "sitetakeover": true,
            "version": 1.005,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Jager */
        1447: {
            "themeID": 1447,
            "title": "Jager",
            "author": "Jager",
            "location": "jager",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "sitetakeover": true,
            "version": 1.005,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Jager - TL */
        1448: {
            "themeID": 1448,
            "title": "Jager",
            "author": "Jager",
            "location": "jager",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "sitetakeover": true,
            "version": 1.005,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Urban Ears UK */
        1449: {
            "themeID": 1449,
            "title": "Urban Ears",
            "author": "Urban Ears",
            "location": "urbanEarsUK",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.001
        },
        /* 47 Ronin */
        1450: {
            "themeID": 1450,
            "title": "47 Ronin",
            "author": "47 Ronin",
            "location": "47Ronin",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.010,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Urban Ears US */
        1451: {
            "themeID": 1451,
            "title": "Urban Ears",
            "author": "Urban Ears",
            "location": "urbanEarsUS",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.001
        },
        /* Parque Diversiones 2 */
        1452: {
            "themeID": 1452,
            "title": "Parque Diversiones 2",
            "author": "Parque Diversiones 2",
            "location": "parqueDiversiones2",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "sitetakeover": true,
            "version": 1.007,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Parque Diversiones 2 - TL */
        1453: {
            "themeID": 1453,
            "title": "Parque Diversiones 2",
            "author": "Parque Diversiones 2",
            "location": "parqueDiversiones2",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "sitetakeover": true,
            "version": 1.007,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Smirnoff */
        1454: {
            "themeID": 1454,
            "title": "Smirnoff",
            "author": "Smirnoff",
            "location": "smirnoff",
            "sections": ["#theme-theme", "#theme-videoheader"],
            "sponsored": true,
            "sitetakeover": true,
            "version": 1.006,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /*not sure if 1455 is used by ronin */
        /* J&B Q4 Flight 2 */
        1456: {
            "themeID": 1456,
            "title": "J&B Q4",
            "author": "J&B ",
            "location": "j&bQ4Flight2",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "sitetakeover": true,
            "version": 1.001,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Hit Record */
        1457: {
            "themeID": 1457,
            "title": "Hit Record",
            "author": "Hit Record",
            "location": "hitRecord",
            "sections": ["#theme-theme", "#theme-videoheader", "#theme-interactiontimeout"],
            "sponsored": true,
            "sitetakeover": true,
            "version": 1.006,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Hit Record - Site takeover hpto */
        1458: {
            "themeID": 1458,
            "title": "Hit Record",
            "author": "Hit Record",
            "location": "hitRecord",
            "sections": ["#theme-theme", "#theme-videoheader", "#theme-interactiontimeout"],
            "sponsored": true,
            "sitetakeover": true,
            "version": 1.006,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Migmagnific bcast theme 2 */
        1459:  {
            "themeID":          1459,
            "title":            "Migmagnific",
            "author":           "Grooveshark",
            "location":         "migmagnific2",
            "sections":         ["#theme-theme"],
            "user":             true,
            "version":          1.009
        },
        /* Devil's Due Friday (default) */
        1460: {
            "themeID": 1460,
            "title": "Devil's Due",
            "author": "Devil's Due",
            "location": "devilsDue",
            "sections": ["#theme-theme", "#theme-videoheader", "#theme-interactiontimeout"],
            "sponsored": true,
            "sitetakeover": true,
            "version": 1.006,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Devil's Due - TL */
        1461: {
            "themeID": 1461,
            "title": "Devil's Due",
            "author": "Devil's Due",
            "location": "devilsDue",
            "sections": ["#theme-theme", "#theme-videoheader", "#theme-interactiontimeout"],
            "sponsored": true,
            "sitetakeover": true,
            "version": 1.006,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Emmagician and The M Machine BC Emma's Page */
        1462:  {
            "themeID":          1462,
            "title":            "The M Machine",
            "author":           "Grooveshark",
            "location":         "theMMachine",
            "sections":         ["#theme-theme"],
            "extraClass":       "emma",
            "sponsored":        true,
            "user":             true,
            "version":          1.001
        },
        /* Emmagician and The M Machine BC The M Machine's Page */
        1463:  {
            "themeID":          1463,
            "title":            "The M Machine",
            "author":           "Grooveshark",
            "location":         "theMMachine",
            "sections":         ["#theme-theme"],
            "sponsored":        true,
            "user":             true,
            "version":          1.001
        },
        /* Hangout 2014 */
        1464: {
            "themeID": 1464,
            "title": "Hangout 2014",
            "author": "Hangout 2014",
            "location": "hangout2014",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "sitetakeover": true,
            "version": 1.006,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Personal Fest */
        1465: {
            "themeID": 1465,
            "title": "Personal Fest",
            "author": "Personal Fest",
            "location": "personalFest",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "sitetakeover": true,
            "version": 1.007,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Hit Record - Site takeover tl */
        1466: {
            "themeID": 1466,
            "title": "Hit Record",
            "author": "Hit Record",
            "location": "hitRecord",
            "sections": ["#theme-theme", "#theme-videoheader", "#theme-interactiontimeout"],
            "sponsored": true,
            "sitetakeover": true,
            "version": 1.006,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Navy */
        1467: {
            "themeID": 1467,
            "title": "Navy",
            "author": "Navy",
            "location": "navy",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "sitetakeover": true,
            "version": 1.007,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Smart Q1 */
        1468: {
            "themeID": 1468,
            "title": "Smart Q1",
            "author": "Smart Q1",
            "location": "smartQ1",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "sitetakeover": true,
            "version": 1.006,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Smart Q1 - Site takeover hpto */
        1469: {
            "themeID": 1469,
            "title": "Smart Q1",
            "author": "Smart Q1",
            "location": "smartQ1",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "sitetakeover": true,
            "version": 1.006,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Emmagician and Robert Firth BC Emma's Page */
        1470:  {
            "themeID":          1470,
            "title":            "Robert Firth",
            "author":           "Grooveshark",
            "location":         "robertFirth",
            "sections":         ["#theme-theme"],
            "extraClass":       "emma",
            "sponsored":        true,
            "user":             true,
            "version":          1.001
        },
        /* Emmagician and Robert Firth BC Robert Firth's Page */
        1471:  {
            "themeID":          1471,
            "title":            "Robert Firth",
            "author":           "Grooveshark",
            "location":         "robertFirth",
            "sections":         ["#theme-theme"],
            "sponsored":        true,
            "user":             true,
            "version":          1.001
        },
        /* Redbull Q1 */
        1472: {
            "themeID": 1472,
            "title": "Redbull Q1",
            "author": "Redbull Q1",
            "location": "redbullQ1",
            "sections": ["#theme-theme", "#theme-videoheader"],
            "sponsored": true,
            "sitetakeover": true,
            "version": 1.006,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Redbull Q1 - TL */
        1473: {
            "themeID": 1473,
            "title": "Redbull Q1",
            "author": "Redbull Q1",
            "location": "redbullQ1",
            "sections": ["#theme-theme", "#theme-videoheader"],
            "sponsored": true,
            "sitetakeover": true,
            "version": 1.006,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* AMovistar Q1 */
        1474: {
            "themeID": 1474,
            "title": "AMovistar Q4",
            "author": "AMovistar Q4",
            "location": "movistarQ1",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.004,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Ibiza  Seat */
        1475: {
            "themeID": 1475,
            "title": "Ibiza Seat",
            "author": "Ibiza Seat",
            "location": "ibizaSeat",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "sitetakeover": true,
            "version": 1.006,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* UTEC */
        1476: {
            "themeID": 1476,
            "title": "UTEC",
            "author": "UTEC",
            "location": "utec",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "sitetakeover": true,
            "version": 1.008,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* UTEC ROS */
        1477: {
            "themeID": 1477,
            "title": "UTEC",
            "author": "UTEC",
            "location": "utec",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "sitetakeover": true,
            "version": 1.008,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Budweiser Broadcast */
        1478:  {
            "themeID":          1478,
            "title":            "Budweiser Broadcast",
            "author":           "Budweiser",
            "location":         "budweiserBroadcast",
            "sections":         ["#theme-theme"],
            "user":             true,
            "version":          1.010
        },
        /* Copa Airlines - Bogota/Medellin */
        1479: {
            "themeID": 1479,
            "title": "Copa Airlines",
            "author": "Copa Airlines",
            "location": "copa",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "locale": "sp",
            "version": 1.007,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250,
                "extraParams": "urlKey=bogotamedellin&themeLocale=sp"
            }
        },
        /* Copa Airlines - Mexico City */
        1480: {
            "themeID": 1480,
            "title": "Copa Airlines",
            "author": "Copa Airlines",
            "location": "copa",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "locale": "sp",
            "version": 1.007,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250,
                "extraParams": "urlKey=mexicocity&themeLocale=sp"
            }
        },
        /* Copa Airlines - Tampa */
        1481: {
            "themeID": 1481,
            "title": "Copa Airlines",
            "author": "Copa Airlines",
            "location": "copa",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.007,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250,
                "extraParams": "urlKey=tampa"
            }
        },
        /* Copa Airlines - New York */
        1482: {
            "themeID": 1482,
            "title": "Copa Airlines",
            "author": "Copa Airlines",
            "location": "copa",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.007,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250,
                "extraParams": "urlKey=newyork"
            }
        },
        /* Copa Airlines - Los Angeles */
        1483: {
            "themeID": 1483,
            "title": "Copa Airlines",
            "author": "Copa Airlines",
            "location": "copa",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.007,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250,
                "extraParams": "urlKey=losangeles"
            }
        },
        /* Concierto Cable Q1 */
        1484: {
            "themeID": 1484,
            "title": "Concierto Cable",
            "author": "Concierto Cable",
            "location": "conciertoCableQ1",
            "sections": ["#theme-theme", "#theme-videoheader"],
            "sponsored": true,
            "version": 1.010,
        },
        /* Nikke and Critical Hit HPTO */
        1485: {
            "themeID": 1485,
            "title": "Nikke and Critical Hit",
            "author": "Grooveshark",
            "location": "CriticalHitNikke",
            "sections": ["#theme-theme"],
            "extraClass": "nikke-home",
            "sponsored": true,
            "version": 1.006,
            "capital": "default",
            "rotateOnHome": true
        },
        /* Nikke and Critical Hit BC Nikke's Page */
        1486:  {
            "themeID": 1486,
            "title": "Nikke and Critical Hit",
            "author": "Grooveshark",
            "location": "CriticalHitNikke",
            "sections": ["#theme-theme"],
            "extraClass": "nikke",
            "sponsored": true,
            "user": true,
            "version": 1.001,
            "tracking": []
        },
        /* Nikke and Critical Hit BC Critical hit's Page */
        1487:  {
            "themeID": 1487,
            "title": "Nikke and Critical Hit",
            "author": "Grooveshark",
            "location": "CriticalHitNikke",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "user": true,
            "version": 1.001,
            "tracking": []
        },
        /* Migmagnific and Slim Wray BC Migmag's Page */
        1488:  {
            "themeID":          1488,
            "title":            "Slim Wray",
            "author":           "Grooveshark",
            "location":         "migmagSlimWray",
            "sections":         ["#theme-theme"],
            "extraClass":       "migmag",
            "sponsored":        true,
            "user":             true,
            "version":          1.001
        },
        /* Migmagnific and Slim Wray BC Slim Wray's Page */
        1489:  {
            "themeID":          1489,
            "title":            "Slim Wray",
            "author":           "Grooveshark",
            "location":         "migmagSlimWray",
            "sections":         ["#theme-theme"],
            "sponsored":        true,
            "user":             true,
            "version":          1.001,
            "tracking": []
        },
        /* Adidas Neo Rebel - HPTO */
        1490: {
            "themeID": 1490,
            "title": "Adidas Neo Rebel",
            "author": "Adidas Neo Rebel",
            "location": "adidasNeoRebel",
            "sections": ["#theme-theme", "#theme-videoheader"],
            "sponsored": true,
            "sitetakeover": true,
            "version": 1.017,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Adidas Neo Rebel - TL */
        1491: {
            "themeID": 1491,
            "title": "Adidas Neo Rebel",
            "author": "Adidas Neo Rebel",
            "location": "adidasNeoRebel",
            "sections": ["#theme-theme", "#theme-videoheader"],
            "sponsored": true,
            "sitetakeover": true,
            "version": 1.017,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Adidas Neo Rebel - Site Takeover - 2/12 & 2/19 */
        1492: {
            "themeID": 1492,
            "title": "Adidas Neo Rebel",
            "author": "Adidas Neo Rebel",
            "location": "adidasNeoRebel",
            "sections": ["#theme-theme", "#theme-videoheader", "#theme-interactiontimeout"],
            "sponsored": true,
            "sitetakeover": true,
            "version": 1.017,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Adidas Neo Rebel - TL - Sitetakeover - 2/12 & 2/19 */
        1493: {
            "themeID": 1493,
            "title": "Adidas Neo Rebel",
            "author": "Adidas Neo Rebel",
            "location": "adidasNeoRebel",
            "sections": ["#theme-theme", "#theme-videoheader", "#theme-interactiontimeout"],
            "sponsored": true,
            "sitetakeover": true,
            "version": 1.016,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Adidas Neo Rebel - Popular Takeover */
        1494: {
            "themeID": 1494,
            "title": "Adidas Neo Rebel",
            "author": "Adidas Neo Rebel",
            "location": "adidasNeoRebel",
            "sections": ["#theme-theme", "#theme-videoheader"],
            "sponsored": true,
            "version": 1.016,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Adidas Neo Rebel - Artist Takeover */
        1495: {
            "themeID": 1495,
            "title": "Adidas Neo Rebel",
            "author": "Adidas Neo Rebel",
            "location": "adidasNeoRebel",
            "sections": ["#theme-theme", "#theme-videoheader"],
            "sponsored": true,
            "version": 1.016,
            "user": true,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            },
            "tracking": ["http://ad.doubleclick.net/ad/N5865.150769.GROOVESHARK.COM/B7989763.6;sz=1x1;ord=12345?"]
        },
        /* Broadcast Fest HPTO */
        1496: {
            "themeID": 1496,
            "title": "Broadcast Fest",
            "author": "Grooveshark",
            "location": "broadcastFest",
            "sections": ["#theme-theme"],
            "extraClass": "bcastFest-home",
            "sponsored": true,
            "version": 1.007,
            "capital": "default",
            "rotateOnHome": true
        },
        /* Broadcast Fest BC Pages */
        1497:  {
            "themeID": 1497,
            "title": "Broadcast Fest",
            "author": "Grooveshark",
            "location": "broadcastFest",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "user": true,
            "version": 1.001,
            "tracking": []
        },
        /* Hangout 2014 Flight 2 */
        1498: {
            "themeID": 1498,
            "title": "Hangout Flight 2",
            "author": "Hangout Flight 2",
            "location": "hangout2014flight2",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "sitetakeover": true,
            "version": 1.008,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Renault */
        1499: {
            "themeID": 1499,
            "title": "Renault",
            "author": "Renault",
            "location": "renault",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.008,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Leap Motion */
        1500: {
            "themeID": 1500,
            "title": "Leap Motion",
            "author": "Leap Motion",
            "location": "leapMotion",
            "sections": ["#theme-theme", "#theme-videoheader"],
            "sponsored": true,
            "version": 1.007,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Covergirl TL */
        1501: {
            "themeID": 1501,
            "title": "Covergirl",
            "author": "Covergirl",
            "location": "covergirl",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "sitetakeover": true,
            "version": 1.001,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Copa Airlines - Miami */
        1502: {
            "themeID": 1502,
            "title": "Copa Airlines",
            "author": "Copa Airlines",
            "location": "copa",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.008,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250,
                "extraParams": "urlKey=miami"
            }
        },
        /* Copa Airlines - Orlando */
        1503: {
            "themeID": 1503,
            "title": "Copa Airlines",
            "author": "Copa Airlines",
            "location": "copa",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.008,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250,
                "extraParams": "urlKey=orlando"
            }
        },
        /* Leap Motion Sweeps */
        1504: {
            "themeID": 1504,
            "title": "Leap Motion",
            "author": "Leap Motion",
            "location": "leapMotion",
            "sections": ["#theme-theme", "#theme-videoheader"],
            "sponsored": true,
            "extraClass": "leap-sweeps",
            "version": 1.007,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Chromebook */
        1505: {
            "themeID": 1505,
            "title": "Chromebook",
            "author": "Chromebook",
            "location": "chromebook",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.002,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* SXSW */
        1506: {
            "themeID": 1506,
            "title": "SXSW",
            "author": "Grooveshark",
            "location": "sxsw",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.008,
            "capital": "default",
            "rotateOnHome": true
        },
        /* Subway Flatizza */
        1507:  {
            "themeID": 1507,
            "title": "Subway Flatizza",
            "author": "Grooveshark",
            "location": "subwayFlatizza",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "user": true,
            "version": 1.001,
            "tracking": ["http://ad.doubleclick.net/ddm/trackimp/N4912.150769.GROOVESHARK/B8031298.9;dc_trk_aid=280199436;dc_trk_cid=57338724;ord=%n"]
        },
        /* Calle Chile 3/14 and 3/15 */
        1508: {
            "themeID": 1508,
            "title": "Calle",
            "author": "Calle",
            "location": "calle",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "sitetakeover": true,
            "version": 1.008,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Calle ROS Chile 3/14 and 3/15 */
        1509: {
            "themeID": 1509,
            "title": "Calle",
            "author": "Calle",
            "location": "calle",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "sitetakeover": true,
            "version": 1.008,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Calle Uruguay 3/23 */
        1510: {
            "themeID": 1510,
            "title": "Calle",
            "author": "Calle",
            "location": "calle",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "extraClass": "uruguay",
            "sitetakeover": true,
            "version": 1.008,
            "capital": {
                "source": "sourcev2.html",
                "width": 300,
                "height": 250
            }
        },
        /* Calle ROS Uruguay 3/23 */
        1511: {
            "themeID": 1511,
            "title": "Calle",
            "author": "Calle",
            "location": "calle",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "extraClass": "uruguay",
            "sitetakeover": true,
            "version": 1.008,
            "capital": {
                "source": "sourcev2.html",
                "width": 300,
                "height": 250
            }
        },
        /* CW */
        1512: {
            "themeID": 1512,
            "title": "cw",
            "author": "cw",
            "location": "cw",
            "sections": ["#theme-theme", "#theme-videoheader"],
            "sponsored": true,
            "version": 1.005,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* CW Version 2 */
        1513: {
            "themeID": 1513,
            "title": "cw",
            "author": "cw",
            "location": "cw",
            "sections": ["#theme-theme", "#theme-videoheader"],
            "sponsored": true,
            "extraClass": "version2",
            "version": 1.005,
            "capital": {
                "source": "source-v2.html",
                "width": 300,
                "height": 250
            }
        },
        /* CW Version 3 */
        1514: {
            "themeID": 1514,
            "title": "cw",
            "author": "cw",
            "location": "cw",
            "sections": ["#theme-theme", "#theme-videoheader"],
            "sponsored": true,
            "extraClass": "version3",
            "version": 1.005,
            "capital": {
                "source": "source-v3.html",
                "width": 300,
                "height": 250
            }
        },
        /* CW Version 4 */
        1515: {
            "themeID": 1515,
            "title": "cw",
            "author": "cw",
            "location": "cw",
            "sections": ["#theme-theme", "#theme-videoheader"],
            "sponsored": true,
            "extraClass": "version4",
            "version": 1.005,
            "capital": {
                "source": "source-v4.html",
                "width": 300,
                "height": 250
            }
        },
        /* CW Version 5 */
        1516: {
            "themeID": 1516,
            "title": "cw",
            "author": "cw",
            "location": "cw",
            "sections": ["#theme-theme", "#theme-videoheader"],
            "sponsored": true,
            "extraClass": "version5",
            "version": 1.005,
            "capital": {
                "source": "source-v5.html",
                "width": 300,
                "height": 250
            }
        },
        /* CW Version 6 */
        1517: {
            "themeID": 1517,
            "title": "cw",
            "author": "cw",
            "location": "cw",
            "sections": ["#theme-theme", "#theme-videoheader"],
            "sponsored": true,
            "extraClass": "version6",
            "version": 1.005,
            "capital": {
                "source": "source-v6.html",
                "width": 300,
                "height": 250
            }
        },
        /* CW Version 7 */
        1518: {
            "themeID": 1518,
            "title": "cw",
            "author": "cw",
            "location": "cw",
            "sections": ["#theme-theme", "#theme-videoheader"],
            "sponsored": true,
            "extraClass": "version7",
            "version": 1.005,
            "capital": {
                "source": "source-v7.html",
                "width": 300,
                "height": 250
            }
        },
        /* Odesza Broadcast */
        1519:  {
            "themeID": 1519,
            "title": "Odesza Broadcast",
            "author": "Grooveshark",
            "location": "odeszaBroadcast",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "user": true,
            "version": 1.001,
            "tracking": []
        },
        /* Red Bull Brazil */
        1520: {
            "themeID": 1520,
            "title": "Red Bull Brazil",
            "author": "Red Bull Brazil",
            "location": "redBullBrazil",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.006,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Alexander Brandon Broadcast */
        1521:  {
            "themeID": 1521,
            "title": "Alexander Brandon Broadcast",
            "author": "Grooveshark",
            "location": "alexanderBrandonBroadcast",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "user": true,
            "version": 1.001,
            "tracking": []
        },
        /* Koodo */
        1522: {
            "themeID": 1522,
            "title": "Koodo",
            "author": "Koodo",
            "location": "koodo",
            "sections": ["#theme-theme", "#theme-videoheader"],
            "sponsored": true,
            "version": 1.006,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Advertising.com */
        1523: {
            "themeID": 1523,
            "title": "Advertising.com",
            "author": "Advertising.com",
            "location": "advertisingcom",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.000,
            "rotateOnHome": true,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250,
                "masthead": "masthead.html"
            }
        },
        /* Downtown Drive */
        1524: {
            "themeID": 1524,
            "title": "Downtown Drive",
            "author": "Downtown Drive",
            "location": "downtowndrive",
            "sections": ["#theme-theme", "#theme-videoheader"],
            "sponsored": true,
            "version": 1.000,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250
            }
        },
        /* Grolsch FR */
        1525: {
            "themeID": 1525,
            "title": "Grolsch FR",
            "author": "Grolsch",
            "location": "grolschfr",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.000,
            "rotateOnHome": true,
            "capital": {
                "source": "source.html",
                "width": 300,
                "height": 250,
                "masthead": "masthead.html"
            }
        },
        /* Writhem Dirty Vegas - Bcast Page */
        1526: {
            "themeID": 1526,
            "title": "Dirty Vegas",
            "author": "Grooveshark",
            "location": "writhemDirtyVegas",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.000,
            "user": true,
            "rotateOnHome": true,
            "capital": "default"
        },
        /* Writhem Dirty Vegas - Artist Page */
        1527: {
            "themeID": 1527,
            "title": "Dirty Vegas",
            "author": "Grooveshark",
            "location": "writhemDirtyVegas",
            "sections": ["#theme-theme"],
            "sponsored": true,
            "version": 1.000,
            "rotateOnHome": true,
            "capital": "default"
        },
        /* Grooveshark Plain / Testing ID */
        999: {
            "themeID": 999,
            "title": "Personalized",
            "author": "Grooveshark",
            "location": "groovesharkPersonal",
            "user": true,
            "version": 1.004
        }
        /*,
        1000: {
            "themeID": 1000,
            "title": "Stingray",
            "author": "Grooveshark",
            "location": "stingray",
            "version": 1.000,
            "height": 472
        }
         Grooveshark Game Testing 
        1000: {
            "themeID": 1000,
            "title": "Game",
            "author": "Grooveshark",
            "location": "groovesharkGame",
            "version": 1.000
        }*/
    };
    
    /* Don't change anything below this line when modifying available themes */
    
    GS.Models.Theme.definitionsUpdated = (new Date()).valueOf();
    
    if (GS.Models.Theme.themeDfd && typeof GS.Models.Theme.themeDfd.resolve == 'function') {
        GS.Models.Theme.themeDfd.resolve();
    }

}());
