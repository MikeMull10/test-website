const fs = require("fs");

data = {
    "Electric Mayhem": {
        "primary": '247, 212, 3',
        "secondary": '7, 41, 72'
    },
    "Cheese Guild": {
        "primary": '255, 177, 25',
        "secondary": '0 0 0'
    },
    "Destined": {
        "primary": '215, 14, 6',
        "secondary": '0 0 0'
    },
    "Dungeons And Double Taps": {
        "primary": '56, 194, 211',
        "secondary": '253, 253, 253'
    },
    "Eight Legged Freaks": {
        "primary": '47, 204, 94',
        "secondary": '105, 64, 46'
    },
    "Energy": {
        "primary": '251, 183, 78',
        "secondary": '120, 220, 237'
    },
    "Fifty-Fifty Pizzeria": {
        "primary": '244, 218, 53',
        "secondary": '174, 19, 26'
    },
    "Italian Battalion": {
        "primary": '0, 141, 68',
        "secondary": '200, 42, 53'
    },
    "Metal": {
        "primary": '224, 130, 32',
        "secondary": '227, 242, 245'
    },
    "Minty Fresh": {
        "primary": '110, 194, 205',
        "secondary": '35, 112, 97'
    },
    "Pantheon": {
        "primary": '208, 209, 208',
        "secondary": '100, 100, 101'
    },
    "Puppy Paradise": {
        "primary": '187, 191, 194',
        "secondary": '74, 71, 69'
    },
    "Seas Despair": {
        "primary": '87, 123, 147',
        "secondary": '38, 73, 102'
    },
    "Shark Attack": {
        "primary": '248, 248, 248',
        "secondary": '25, 40, 134'
    },
    "Snack Syndicate": {
        "primary": '128, 128, 128',
        "secondary": '64, 64, 64'
    },
    "Storm": {
        "primary": '141, 100, 255',
        "secondary": '253, 229, 106'
    },
    "The Abyss": {
        "primary": '140, 104, 66',
        "secondary": '0, 0, 41'
    },
    "The Bakery": {
        "primary": '255, 255, 255',
        "secondary": '0, 0, 0'
    },
    "The Bear Den": {
        "primary": '96, 55, 50',
        "secondary": '35, 19, 18'
    },
    "The Cosmos": {
        "primary": '98, 91, 189',
        "secondary": '10, 38, 71'
    },
    "The Elements": {
        "primary": '130, 197, 91',
        "secondary": '0, 149, 218'
    },
    "The Forest": {
        "primary": '204, 204, 204',
        "secondary": '55, 55, 55'
    },
    "The Garden": {
        "primary": '183, 233, 2',
        "secondary": '0, 77, 41'
    },
    "The Gods": {
        "primary": '57, 66, 83',
        "secondary": '4, 7, 7'
    },
    "The Jungle": {
        "primary": '172, 124, 82',
        "secondary": '0, 250, 153'
    },
    "The Monster Mash": {
        "primary": '0, 246, 36',
        "secondary": '0, 0, 0'
    },
    "The Nexus": {
        "primary": '38, 44, 139',
        "secondary": '201, 15, 23'
    },
    "The Serpents": {
        "primary": '110, 159, 135',
        "secondary": '44, 67, 55'
    },
    "The Sovereign": {
        "primary": '255, 204, 0',
        "secondary": '255, 0, 0'
    },
    "The Swarm": {
        "primary": '195, 147, 35',
        "secondary": '9, 3, 7'
    },
    "The Wavelengths": {
        "primary": '250, 250, 250',
        "secondary": '1, 1, 1'
    },
    "Whale Defense": {
        "primary": '36, 101, 161',
        "secondary": '0, 2, 3'
    }
}

fs.writeFile("Colors.json", JSON.stringify(data), function(err) { if (err) { console.log(err); } });