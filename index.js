class stSet
{
    constructor(name, setpieces, hp2, mp2, atk2, def2, spd2, dex2, vit2, wis2,
        hp3, mp3, atk3, def3, spd3, dex3, vit3, wis3, hp4, mp4, atk4, def4,
        spd4, dex4, vit4, wis4)
    {
        this.name = name;
        this.setpieces = setpieces;
        this.hp2 = hp2;
        this.mp2 = mp2;
        this.atk2 = atk2;
        this.def2 = def2;
        this.spd2 = spd2;
        this.dex2 = dex2;
        this.vit2 = vit2;
        this.wis2 = wis2;
        this.hp3 = hp3;
        this.mp3 = mp3;
        this.atk3 = atk3;
        this.def3 = def3;
        this.spd3 = spd3;
        this.dex3 = dex3;
        this.vit3 = vit3;
        this.wis3 = wis3;
        this.hp4 = hp4;
        this.mp4 = mp4;
        this.atk4 = atk4;
        this.def4 = def4;
        this.spd4 = spd4;
        this.dex4 = dex4;
        this.vit4 = vit4;
        this.wis4 = wis4;
    }
}

// thanks java fuck you javascript
var sets = [ new stSet("Loaded Core", ["0x0498", "0x6458", "0x645a", "0x645b", "0x645c", "0x645d", "0x645e", "0x645f", "0x6460", "0x6461", "0x6462", "0x6463", "0x6464", "0x0485", "0x0484", "0x0483"], 60, 45, 5, 5, 9, 5, 0, 0, 60, 45, 5, 5, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
 new stSet("Entropy Reactor", ["0x049a", "0x6458", "0x645a", "0x645b", "0x645c", "0x645d", "0x645e", "0x645f", "0x6460", "0x6461", "0x6462", "0x6463", "0x6464", "0x0485", "0x0484", "0x0483"], 60, 45, 5, 5, 9, 5, 0, 0, 60, 45, 5, 5, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
 new stSet("Alien Core: Power", ["0x6456", "0x6458", "0x645a", "0x645b", "0x645c", "0x645d", "0x645e", "0x645f", "0x6460", "0x6461", "0x6462", "0x6463", "0x6464", "0x0485", "0x0484", "0x0483"], 0, 0, 5, 0, 0, 5, 0, 0, 0, 0, 7, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
 new stSet("Alien Core: Warp", ["0x6465", "0x6458", "0x645a", "0x645b", "0x645c", "0x645d", "0x645e", "0x645f", "0x6460", "0x6461", "0x6462", "0x6463", "0x6464", "0x0485", "0x0484", "0x0483"], 0, 45, 0, 0, 0, 5, 0, 0, 0, 45, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
 new stSet("Alien Core: Corrosion", ["0x6466", "0x6458", "0x645a", "0x645b", "0x645c", "0x645d", "0x645e", "0x645f", "0x6460", "0x6461", "0x6462", "0x6463", "0x6464", "0x0485", "0x0484", "0x0483"], 45, 0, 0, 0, 9, 4, 0, 0, 45, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
 new stSet("Alien Core: Dark Matter", ["0x6467", "0x6458", "0x645a", "0x645b", "0x645c", "0x645d", "0x645e", "0x645f", "0x6460", "0x6461", "0x6462", "0x6463", "0x6464", "0x0485", "0x0484", "0x0483"], 65, 0, 0, 5, 0, 0, 0, 0, 65, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
 new stSet("Oryx Awesome Set", ["0x2337", "0x2339", "0x2338", "0x2302"], 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
 new stSet("Oryx\'s Battle Attires", ["0x5bde", "0x5be0", "0x5bdf", "0x5be1"], 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 15, 0, 5, 0, 0, 75, 0, 0, 0, 0, 0, 0, 0),
 new stSet("Priest of Geb Set", ["0x235F", "0x235E", "0x235C", "0x235D"], 0, 0, 0, 0, 5, 0, 0, 0, 0, 50, 8, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0),
 new stSet("Mad God\'s Messenger Set", ["0x200c", "0x200d", "0x200e", "0x200f"], 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 3, 0, 0, 3, 0, 0, 100, 0, 5, 0, 0, 5, 0, 0),
 new stSet("Legacy Skuld 2 The ReGhostening Set", ["0x21a0", "0x21a2", "0x21a1", "0x21a3"], 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
 new stSet("Skuld 2 The ReGhostening Set", ["0x2750", "0x2751", "0x2752", "0x2753"], 0, 0, 0, 0, 0, 4, 0, 4, 0, 30, 4, 0, 0, 0, 0, 0, 80, 0, 5, 0, 0, 5, 0, 0),
 new stSet("Dragon Tamer Set", ["0x7fbc", "0x7fbb", "0x7fb9", "0x7fba"], 0, 0, 5, 0, 10, 0, 0, 0, 0, 80, 0, 0, 0, 5, 0, 0, 75, 0, 0, 0, 0, 0, 0, 0),
 new stSet("Pirate King Warrior Set", ["0x21d9", "0x21da", "0x21db", "0x21dc"], 70, 50, 0, 0, 0, 0, 0, 0, 100, 80, 0, 0, 0, 0, 0, 0, 0, 0, 100, 0, -20, -30, 0, 0),
 new stSet("Twilight Archmage Set", ["0x21f3", "0x21f4", "0x21f5", "0x21f6"], 15, 15, 0, 3, 0, 0, 0, 0, 15, 15, 0, 3, 0, 0, 0, 0, 15, 15, 0, 3, 0, 0, 0, 0),
 new stSet("Legacy Twilight Archmage Set", ["0x21a7", "0x21a9", "0x21a8", "0x21aa"], 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
 new stSet("Phantom Archer Set", ["0x1e44", "0x1e45", "0x1e46", "0x1e47"], 0, 0, 0, 0, 0, 5, 5, 0, 0, 95, 0, 11, 0, 0, 0, 0, 105, 0, 0, 0, 0, 0, 0, 0),
 new stSet("Legacy Swoll Paladin Set", ["0x2367", "0x2366", "0x2364", "0x2365"], 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
 new stSet("Swoll Paladin Set", ["0x04a5", "0x04a6", "0x04a7", "0x04a8"], 25, 25, 2, 2, 0, 0, 0, 0, 25, 25, 2, 2, 0, 0, 0, 0, 25, 25, 2, 2, 0, 0, 0, 0),
 new stSet("Flesh Collector Set", ["0xbd8", "0xbd9", "0xbda", "0xbdb"], 0, 0, 0, 0, 0, 0, 6, 7, 50, 0, 7, 0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0),
 new stSet("Acidified Assassin Set", ["0xc008", "0x4b39", "0x4b3a", "0x4b3b"], 0, 0, 0, 5, -5, 0, 5, 0, 0, 50, 0, 5, -5, 0, 10, 0, 0, 0, 10, 10, -5, 0, 15, 0),
 new stSet("Hollow King Necromancer Set", ["0x9dc", "0x9dd", "0x9de", "0x9df"], 0, 30, 0, 0, 0, 0, 6, 0, 25, 0, 0, 4, 0, 0, 0, 0, 0, 0, 7, 0, 0, 5, 0, 0),
 new stSet("Horticultural Huntress Set", ["0x1844", "0x1845", "0x1846", "0x1847"], 0, 20, 0, 0, 3, 3, 0, 0, 30, 40, 0, 0, 5, 5, 0, 0, 70, 0, 0, 3, 5, 5, 0, 0),
 new stSet("Phylactery Mystic Set", ["0x2363", "0x2362", "0x2360", "0x2361"], 0, 0, 0, 0, 2, 1, 0, 5, 0, 40, 0, 10, 0, 0, 0, 0, 35, 0, 5, 0, 0, 0, 0, 0),
 new stSet("Magmatic Mystic Set", ["0x4b42", "0x4b44", "0x4b45", "0x4b46"], 30, 0, 3, 0, 3, 0, 5, 0, 25, 60, 5, 0, 0, 0, 10, 0, 50, 0, 20, 0, 5, 0, 15, 0),
 new stSet("Lost Golem Set", ["0x0258", "0x0259", "0x025a", "0x025b"], 0, 0, 0, 3, 0, 0, 15, 0, 0, 0, 10, 0, 0, 5, 0, 0, 40, 0, 0, 0, 0, 0, 0, 0),
 new stSet("Horrific Sorcerer Set", ["0xbbc", "0xbbd", "0xbbe", "0xbbf"], 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 15, 0, 0, 0, 0),
 new stSet("Raijin Disciple Set", ["0x1e4d", "0x1e58", "0x1e4f", "0x1e50"], 0, 0, 0, 4, 7, 0, 0, 0, 0, 0, 4, 0, 0, 4, 0, 0, 75, 0, 0, 0, 0, 0, 0, 0),
 new stSet("Crystal Kunoichi Set", ["0x4b3c", "0x4b3e", "0x4b41", "0x4b40"], 30, 0, 4, 0, 0, 0, 5, 0, 30, 0, 5, 0, 0, 0, 5, 0, 120, 0, 6, 5, 0, 0, 10, 0),
 new stSet("Swarming Huntress Set", ["0x08f7", "0x08f8", "0x08f9", "0x08fa"], 0, 0, 0, 5, 5, 0, 0, 0, 40, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0),
 new stSet("Akuma Slayer Set", ["0x203e", "0xf3c", "0x2040", "0x2041"], 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 3, 10, 0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0),
 new stSet("Golden Archer Set", ["0x578", "0x579", "0x57a", "0x57b"], 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0),
 new stSet("Scarecrow Trickster Set", ["0x6483", "0x6484", "0x6485", "0x6486"], 0, 0, 0, 3, 0, 0, 15, 0, 0, 0, 10, 0, 0, 5, 0, 0, 40, 0, 0, 0, 0, 0, 0, 0),
 new stSet("Reanimated Archer Set", ["0x648a", "0x648b", "0x648c", "0x648d"], 0, 0, 0, 0, 0, 5, 5, 0, 0, 95, 0, 11, 0, 0, 0, 0, 105, 0, 0, 0, 0, 0, 0, 0),
 new stSet("Unholy Paladin Set", ["0x6491", "0x6492", "0x6493", "0x6494"], 25, 25, 2, 2, 0, 0, 0, 0, 25, 25, 2, 2, 0, 0, 0, 0, 25, 25, 2, 2, 0, 0, 0, 0),
 new stSet("Totalia Mystic Set", ["0x6497", "0x6498", "0x6499", "0x649a"], 0, 0, 0, 0, 2, 1, 0, 5, 0, 40, 0, 10, 0, 0, 0, 0, 35, 0, 5, 0, 0, 0, 0, 0),
 new stSet("Paranormal Wizard Set", ["0x649f", "0x64a0", "0x64a1", "0x64a2"], 15, 15, 0, 3, 0, 0, 0, 0, 15, 15, 0, 3, 0, 0, 0, 0, 15, 15, 0, 3, 0, 0, 0, 0),
 new stSet("Oryxmas Miracle Set", ["0x64bf", "0x208d", "0x2096", "0x2098", "0x2093", "0x209a", "0x2090", "0x208f", "0x2097", "0x208e", "0x2099", "0x2092", "0x2094", "0x2091", "0x2095", "0x265", "0x1aca", "0x1acb", "0x1acc", "0x1acd", "0x1ace", "0x1acf", "0x16da", "0x16db", "0x16dd"], 20, 20, 0, 0, 0, 4, 4, 0, 50, 50, 0, 0, 4, 0, 0, 4, 60, 60, 4, 4, 0, 0, 0, 0),
 new stSet("Valentine\'s Day Archer Set", ["0x6406", "0x6407", "0x6404", "0x6405"], 20, 0, 0, 0, 0, 3, 3, 0, 30, 0, 0, 0, 5, 0, 5, 0, 40, 0, 0, 4, 0, 0, 7, 0),
];  

class Item
{
    constructor(name, description, tier, fileName, row, column, setName,
        slotType, hp, mp, atk, def, spd, dex, vit, wis, fame, defIgnore,
        multiHit, soulbound, passesCover, parametric, boomerang,
        baseDamage, maxDamage, rof, shots, wavy, amplitude, frequency,
        arc, projectileLifetime, projectileSpeed, toolTip, nameCode)
    {
        this.name = name;
        this.description = description;
        this.tier = tier;
        this.fileName = fileName;
        this.row = row;
        this.column = column;
        this.setName = setName;
        this.slotType = slotType;
        this.hp = hp;
        this.mp = mp;
        this.atk = atk;
        this.def = def;
        this.spd = spd;
        this.dex = dex;
        this.vit = vit;
        this.wis = wis;
        this.fame = fame;
        this.defIgnore = defIgnore;
        this.multiHit = multiHit;
        this.soulbound = soulbound;
        this.passesCover = passesCover;
        this.parametric = parametric;
        this.boomerang = boomerang;
        this.baseDamage = baseDamage;
        this.maxDamage = maxDamage;
        this.rof = rof;
        this.shots = shots;
        this.wavy = wavy;
        this.amplitude = amplitude;
        this.frequency = frequency;
        this.arc = arc;
        this.projectileLifetime = projectileLifetime;
        this.projectileSpeed = projectileSpeed;
        this.toolTip = toolTip;
        this.nameCode = nameCode;
    }
    getSourceFile()
    {
        return interpretFilename(this.fileName);
    }
}

function interpretFilename(fn)
{
    // i tried to make this with switch statement and it didn't work
    // don't BULLY me
    if (fn == "lofiObj")
        return lofiObj;
    else if (fn == "lofiObj2")
        return lofiObj2;
    else if (fn == "lofiObj3")
        return lofiObj3;
    else if (fn == "lofiObj4")
        return lofiObj4;
    else if (fn == "lofiObj5")
        return lofiObj5;
    else if (fn == "lofiObj5new")
        return lofiObj5b;
    else if (fn == "lofiObj6")
        return lofiObj6;
    else if (fn == "lostHallsObjects8x8")
        return lostHallsObjects8x8;
    else if (fn == "d2LofiObjEmbed")
        return d2LofiObjEmbed;
    else if (fn == "d3LofiObjEmbed")
        return d3LofiObjEmbed;
    else if (fn == "epicHiveObjects8x8")
        return epicHiveObjects8x8;
    else if (fn == "lairOfDraconisObjects8x8")
        return lairOfDraconisObjects8x8;
    else if (fn == "buffedBunnyObjects8x8")
        return buffedBunnyObjects8x8;
    else if (fn == "crystalCaveObjects8x8")
        return crystalCaveObjects8x8;
    else if (fn == "cnidarianReefObjects8x8")
        return cnidarianReefObjects8x8;
    else if (fn == "cursedLibraryObjects8x8")
        return cursedLibraryObjects8x8;
    else if (fn == "magicWoodsObjects8x8")
        return magicWoodsObjects8x8;
    else if (fn == "mountainTempleObjects8x8")
        return mountainTempleObjects8x8;
    else if (fn == "oryxHordeObjects8x8")
        return oryxHordeObjects8x8;
    else if (fn == "parasiteDenObjects8x8")
        return parasiteDenObjects8x8;
    else if (fn == "secludedThicketObjects8x8")
        return secludedThicketObjects8x8;
    else if (fn == "stPatricksObjects8x8")
        return stPatricksObjects8x8;
    else if (fn == "theMachineObjects8x8")
        return theMachineObjects8x8;
    else if (fn == "santaWorkshopObjects8x8")
        return santaWorkshopObjects8x8;
    else
        return art;
    
}

class Build
{
    constructor(weapon, ability, armor, ring, hpup, mpup, atkup, defup, spdup, dexup, vitup, wisup,
        berserk, damaging, weak, dazed, armored, cursed, exposed, armorBroken, classIndex, color) 
    {
        this.weapon = weapon;
        this.ability = ability;
        this.armor = armor;
        this.ring = ring;
        this.hpup = hpup;
        this.mpup = mpup;
        this.atkup = atkup;
        this.defup = defup;
        this.spdup = spdup;
        this.dexup = dexup;
        this.vitup = vitup;
        this.wisup = wisup;
        this.berserk = berserk;
        this.damaging = damaging;
        this.weak = weak;
        this.dazed = dazed;
        this.armored = armored;
        this.cursed = cursed;
        this.exposed = exposed;
        this.armorBroken = armorBroken;
        this.classIndex = classIndex;
        this.color = color;
        this.visible = true;
    }
}

var builds = [];

const canvas = document.querySelector('.theCanvas');

// i made width and height variables because i want to be able to
// dynamically resize the content during runtime
let width = window.innerWidth;
let height = window.innerHeight;

// this basically determines the scale of the content of the program.
// since the window can be any size, i don't have a guaranteed ratio between
// the x and y dimensions. i want stuff to not be stretched vertically or
// horizontally, so i establish a unit to do all operations relative to
let unit = width / 100;
if (unit > (height/75))
{
    unit = height/75;
}

// this doesn't seem to work but like who cares lmaoooooo
canvas.height = unit * 80;
canvas.width = unit * 100;

// variable stuffff
let classIndex = 1;

let xmin = 0;
let xmax = 100;
let x1CursorLoc = 0;
let x1CursorVisible = false;
let x2CursorLoc = 100;
let x2CursorVisible = false;
let ymin = 0;
let ymax = 3000;
let altYScale = false;

let statChangePanel = false;
let hpBuff = 0;
let mpBuff = 0;
let atkBuff = 0;
let defBuff = 0;
let spdBuff = 0;
let dexBuff = 0;
let vitBuff = 0;
let wisBuff = 0;

let berserk = false;
let damaging = false;
let weak = false;
let dazed = false;

let armored = false;
let cursed = false;
let exposed = false;
let armorBroken = false;

let stStats = [0, 0, 0, 0, 0, 0, 0, 0];

let wizardStats = [670, 385, 75, 25, 50, 75, 40, 60];
let priestStats = [670, 385, 50, 25, 55, 55, 40, 75];
let rogueStats = [720, 252, 50, 25, 75, 75, 40, 50];
let archerStats = [700, 252, 75, 25, 50, 50, 40, 50];
let warriorStats = [770, 252, 75, 25, 50, 50, 75, 50];
let knightStats = [770, 252, 50, 40, 50, 50, 75, 50];
let paladinStats = [770, 252, 50, 30, 55, 45, 40, 75];
let assassinStats = [720, 252, 60, 25, 75, 75, 40, 60];
let necromancerStats = [670, 385, 75, 25, 50, 60, 30, 75];
let huntressStats = [700, 252, 75, 25, 50, 50, 40, 50];
let mysticStats = [670, 385, 60, 25, 60, 55, 40, 75];
let tricksterStats = [720, 252, 65, 25, 75, 75, 40, 60];
let sorcererStats = [670, 385, 70, 25, 60, 60, 75, 60];
let ninjaStats = [720, 252, 70, 25, 60, 70, 60, 70];
let samuraiStats = [720, 252, 75, 30, 55, 50, 60, 60];

let classStats = [ [], wizardStats, priestStats, rogueStats, archerStats, warriorStats, knightStats,
                        paladinStats, assassinStats, necromancerStats, huntressStats, mysticStats,
                        tricksterStats, sorcererStats, ninjaStats, samuraiStats];

let cssView = false;
let startup = true;
let standard = false;
let credits = false;
let usageExplanation = false;

let howToPage = 1;

let optionLocations = [];

let staffs = [];
let wands = [];
let swords = [];
let bows = [];
let katanas = [];
let daggers = [];

let spellbombs = [];
let skulls = [];
let orbs = [];
let tomes = [];
let scepters = [];
let helms = [];
let shields = [];
let seals = [];
let quivers = [];
let traps = [];
let stars = [];
let wakis = [];
let cloaks = [];
let prisms = [];
let poisons = [];

let robes = [];
let heavies = [];
let leathers = [];

let rings = [];

// these are for the current selection, not for everything that fits
// the name of the variables.
let weapons = [];
let abilities = [];
let armors = [];

pullGear();
weapons = staffs;
abilities = spellbombs;
armors = robes;

let weapon = weapons[0];
let weaponIndex = 0;
let weaponExpanded = false;

let ability = abilities[0];
let abilityIndex = 0;
let abilityExpanded = false;

let armor = armors[0];
let armorIndex = 0;
let armorExpanded = false;

let ring = rings[0];
let ringIndex = 0;
let ringExpanded = false;

assignBuild();

// pullGear();

// image declarations + loading
// could i declare these all in one line like java? who knows? not me
let wizardp = new Image();
let priestp = new Image();
let roguep = new Image();
let archerp = new Image();
let warriorp = new Image();
let knightp = new Image();
let paladinp = new Image();
let assassinp = new Image();
let necromancerp = new Image();
let huntressp = new Image();
let mysticp = new Image();
let tricksterp = new Image()
let sorcererp = new Image();
let ninjap = new Image();
let samuraip = new Image();

let armorBrokenIcon = new Image();
let armoredIcon = new Image();
let berserkIcon = new Image();
let curseIcon = new Image();
let damagingIcon = new Image();
let dazedIcon = new Image();
let exposedIcon = new Image();
let invulnerableIcon = new Image();
let weakIcon = new Image();

let visIcon = new Image();
let swapIcon = new Image();

let art = new Image();

let lofiObj = new Image();
let lofiObj2 = new Image();
let lofiObj3 = new Image();
let lofiObj4 = new Image();
let lofiObj5 = new Image();
let lofiObj5b = new Image();
let lofiObj6 = new Image();
let lostHallsObjects8x8 = new Image();
let d2LofiObjEmbed = new Image();
let d3LofiObjEmbed = new Image();
let epicHiveObjects8x8 = new Image();
let lairOfDraconisObjects8x8 = new Image();
let buffedBunnyObjects8x8 = new Image();
let crystalCaveObjects8x8 = new Image();
let cnidarianReefObjects8x8 = new Image();
let cursedLibraryObjects8x8 = new Image();
let magicWoodsObjects8x8 = new Image();
let mountainTempleObjects8x8 = new Image();
let oryxHordeObjects8x8 = new Image();
let parasiteDenObjects8x8 = new Image();
let secludedThicketObjects8x8 = new Image();
let stPatricksObjects8x8 = new Image();
let theMachineObjects8x8 = new Image();
let santaWorkshopObjects8x8 = new Image();

loadImages();


// i changed the variable name to 'g' from 'ctx' so that i can type it easily
// and because it seems to basically serve the same function as the Graphics object
// in the java version of this so it's more intuitive for me this way.
const g = canvas.getContext('2d');

// this class ought to make it easier for me to modify the UI
class Button
{
    constructor(xbase, ybase, xsize, ysize, backgroundColor, edgeColor, textColor, textXOff, textYOff, font, textContent, imageContent, imageSmoothing)
    {
        this.xbase = xbase;
        this.ybase = ybase;
        this.xsize = xsize;
        this.ysize = ysize;
        this.backgroundColor = backgroundColor;
        this.edgeColor = edgeColor;
        this.textColor = textColor;
        this.textXOff = textXOff;
        this.textYOff = textYOff;
        this.font = font;
        this.textContent = textContent;
        this.imageContent = imageContent;
        this.imageSmoothing = imageSmoothing;
    }
    wasClicked(x, y)
    {
        if (x >= this.xbase && y >= this.ybase && x <= this.xbase+this.xsize && y <= this.ybase+this.ysize)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    drawButton()
    {
        if (this.backgroundColor != null)
        {
            g.fillStyle = this.backgroundColor;
            g.fillRect(this.xbase, this.ybase, this.xsize, this.ysize);
        }
        if (this.textColor != null)
        {
            g.fillStyle = this.textColor;
            g.font = this.font;
            g.fillText(this.textContent, this.xbase+this.textXOff, this.ybase+this.textYOff);
        }
        if (this.edgeColor != null)
        {
            g.strokeStyle = this.edgeColor;
            g.strokeRect(this.xbase, this.ybase, this.xsize, this.ysize);
        }
    }
}

let clickColor = 'rgb(190, 190, 70)';
let scrollColor = 'rgb(110, 190, 190)';

let howTo = new Button(19*unit, 65*unit, 20*unit, 3*unit, clickColor, 'rgb(0, 0, 0)', 'rgb(0, 0, 0)', 2.5*unit, 2*unit, (1.6*unit).toString().concat("px Arial"), "How to use this tool", null, false);

let closeHowTo = new Button(75.5*unit, 12.5*unit, 3*unit, 3*unit, 'rgb(190, 0, 0)', 'rgb(0, 0, 0)', 'rgb(0, 0, 0)', 1*unit, 2*unit, (1.6*unit).toString().concat("px Courier New"), "X", null, false);
let closeStats = closeHowTo;
let openCredits = new Button(unit, 65*unit, 10*unit, 3*unit, clickColor, 'rgb(0, 0, 0)', 'rgb(0, 0, 0)', 2.5*unit, 2*unit, (1.5*unit).toString().concat("px Arial"), "Credits", null, false);
let closeCredits = closeHowTo;
let closeDescription = closeHowTo;

let clickMe = new Button(16*unit, 20*unit, 12*unit, 3*unit, clickColor, 'rgb(0, 0, 0)', 'rgb(0, 0, 0)', 1*unit, 2*unit, (1.6*unit).toString().concat("px Courier New"), "Click Me!", null, false);
let scrollMe = new Button(38*unit, 20*unit, 12*unit, 3*unit, scrollColor, 'rgb(0, 0, 0)', 'rgb(0, 0, 0)', 1*unit, 2*unit, (1.6*unit).toString().concat("px Courier New"), "Scroll Me!", null, false);

let cursor1Box = new Button(12*unit, 50*unit, 16*unit, 4.5*unit, scrollColor, 'rgb(150, 150, 150)', 'rgb(0, 0, 0)', 1*unit, 3.5*unit, (2.1*unit).toString().concat("px Courier New"), x1CursorLoc + " Defense", null, false);
let cursor2Box = new Button(37*unit, 50*unit, 16*unit, 4.5*unit, scrollColor, 'rgb(150, 150, 150)', 'rgb(0, 0, 0)', 1*unit, 3.5*unit, (2.1*unit).toString().concat("px Courier New"), x2CursorLoc + " Defense", null, false);
let toggleYScaling = new Button(2.5*unit, 56*unit, 12.5*unit, 2*unit, clickColor, 'rgb(0, 0, 0)', 'rgb(0, 0, 0)', 0.5*unit, 1*unit, (1.2*unit).toString().concat("px Courier New"), "Toggle Y-Scaling", null, false);
let scaleX = new Button(17.5*unit, 56*unit, 14*unit, 2*unit, clickColor, 'rgb(0, 0, 0)', 'rgb(0, 0, 0)', 0.5*unit, 1*unit, (1.2*unit).toString().concat("px Courier New"), "Scale x to cursors", null, false);
let resetX = new Button(34.5*unit, 56*unit, 11.8*unit, 2*unit, clickColor, 'rgb(0, 0, 0)', 'rgb(0, 0, 0)', 0.5*unit, 1*unit, (1.2*unit).toString().concat("px Courier New"), "Reset x scaling", null, false);
// g.strokeRect(39*unit, unit, 40*unit, 6*unit);
let statToggle = new Button(39*unit, 1*unit, 40*unit, 6*unit, clickColor, 'rgb(0, 0, 0)', null, null, null, null, null, null, null, false);

redraw();

// this is the scroll tracker
canvas.addEventListener("wheel", function(event) {
    let x = event.pageX;
    let y = event.pageY;
    let delt = Math.floor(event.deltaY / -125);

    if (standard)
    {
        if (cursor1Box.wasClicked(x,y))
        {
            x1CursorLoc += delt;
            if (x1CursorLoc < 0)
            {
                x1CursorLoc = 0;
            }
            if (x1CursorLoc >= x2CursorLoc)
            {
                x1CursorLoc = x2CursorLoc - 1;
            }
            cursor1Box.textContent = x1CursorLoc + " Defense";
            redraw();
            return;
        }
        if (cursor2Box.wasClicked(x,y))
        {
            x2CursorLoc += delt;
            if (x2CursorLoc > 999)
            {
                x2CursorLoc = 999;
            }
            if (x1CursorLoc >= x2CursorLoc)
            {
                x2CursorLoc = x1CursorLoc + 1;
            }
            cursor2Box.textContent = x2CursorLoc + " Defense";
            redraw();
            return;
        }
    }
    if (statChangePanel)
    {
        if (x >= 25*unit && x <= 35*unit && y >= 18*unit && y <= 22*unit)
        {
            hpBuff += delt;
            if (hpBuff > 9999)
                hpBuff = 9999;
            if (hpBuff < -9999)
                hpBuff = -9999;
            redraw();
            return;
        }
        if (x >= 50*unit && x <= 60*unit && y >= 18*unit && y <= 22*unit)
        {
            mpBuff += delt;
            if (mpBuff > 9999)
                mpBuff = 9999;
            if (mpBuff < -9999)
                mpBuff = -9999;
            redraw();
            return;
        }
        if (x >= 25*unit && x <= 35*unit && y >= 25*unit && y <= 29*unit)
        {
            atkBuff += delt;
            if (atkBuff > 999)
                atkBuff = 999;
            if (atkBuff < -999)
                atkBuff = -999;
            redraw();
            return;
        }
        if (x >= 50*unit && x <= 60*unit && y >= 25*unit && y <= 29*unit)
        {
            defBuff += delt;
            if (defBuff > 999)
                defBuff = 999;
            if (defBuff < -999)
                defBuff = -999;
            redraw();
            return;
        }
        if (x >= 25*unit && x <= 35*unit && y >= 32*unit && y <= 36*unit)
        {
            spdBuff += delt;
            if (spdBuff > 999)
                spdBuff = 999;
            if (spdBuff < -999)
                spdBuff = -999;
            redraw();
            return;
        }
        if (x >= 50*unit && x <= 60*unit && y >= 32*unit && y <= 36*unit)
        {
            dexBuff += delt;
            if (dexBuff > 999)
                dexBuff = 999;
            if (dexBuff < -999)
                dexBuff = -999;
            redraw();
            return;
        }
        if (x >= 25*unit && x <= 35*unit && y >= 39*unit && y <= 43*unit)
        {
            vitBuff += delt;
            if (vitBuff > 999)
                vitBuff = 999;
            if (vitBuff < -999)
                vitBuff = -999;
            redraw();
            return;
        }
        //g.fillRect(50*unit, 39*unit, 10*unit, 4*unit);
        //g.strokeRect(50*unit, 39*unit, 10*unit, 4*unit);
        if (x >= 50*unit && x <= 60*unit && y >= 39*unit && y <= 43*unit)
        {
            wisBuff += delt;
            if (wisBuff > 999)
                wisBuff = 999;
            if (wisBuff < -999)
                wisBuff = -999;
            redraw();
            return;
        }
    }
    if (usageExplanation)
    {
        // scroll button demo
        if (scrollMe.wasClicked(x,y) && howToPage == 1)
        {
            if (scrollMe.textContent == "Scroll Me!")
            {
                scrollMe.textContent = Number(1);
                redraw();
                return;
            }
            else
            {
                scrollMe.textContent = scrollMe.textContent + delt;
                redraw();
                return;
            }
        }
    }
})

// this is the mouseclicked tracker
canvas.addEventListener("click", function(event) {
    let x = event.pageX;
    let y = event.pageY;
    
    // click in
    if (startup)
    {
        startup = false;
        standard = true;
        redraw();
        return;
    }
    // click credits button
    if (standard || credits)
    {
        if (openCredits.wasClicked(x,y))
        {
            standard = !standard;
            credits = !credits;
            redraw();
            return;
        }
    }
    // close credits
    if (credits)
    {
        if (closeCredits.wasClicked(x,y))
        {
            credits = false;
            standard = true;
            redraw();
            return;
        }
    }
    // click character portrait
    if (standard || cssView || weaponExpanded || abilityExpanded || armorExpanded || ringExpanded)
    {
        if (x >= unit && x <= 9*unit && y >= unit && y <= 9*unit)
        {
            if (!cssView)
            {
                cssView = true;
                weaponExpanded = false;
                abilityExpanded = false;
                armorExpanded = false;
                ringExpanded = false;
                standard = false;
            }
            else
            {
                cssView = false;
                standard = true;
            }
            redraw();
            return;
        }
    }
    // css screen
    if (cssView)
    {
        if (cssSelect(x,y))
        {
            redraw();
            return;
        }
    }
    // click on item sprite
    if (standard || weaponExpanded || abilityExpanded || armorExpanded || ringExpanded)
    {
        if (x >= 10*unit && x <= 15*unit && y >= unit && y <= 6*unit)
        {
            if (weaponExpanded)
            {
                weaponExpanded = false;
                standard = true;
                redraw();
                return;
            }
            else
            {
                weaponExpanded = true;
                abilityExpanded = false;
                armorExpanded = false;
                ringExpanded = false;
                standard = false;
                redraw();
                return;
            }
        }
    }
    if (standard || weaponExpanded || abilityExpanded || armorExpanded || ringExpanded)
    {
        if (x >= 16*unit && x <= 21*unit && y >= unit && y <= 6*unit)
        {
            if (abilityExpanded)
            {
                abilityExpanded = false;
                standard = true;
                redraw();
                return;
            }
            else
            {
                abilityExpanded = true;
                weaponExpanded = false;
                armorExpanded = false;
                ringExpanded = false;
                standard = false;
                redraw();
                return;
            }
        }
    }
    if (standard || weaponExpanded || abilityExpanded || armorExpanded || ringExpanded)
    {
        if (x >= 22*unit && x <= 27*unit && y >= unit && y <= 6*unit)
        {
            if (armorExpanded)
            {
                armorExpanded = false;
                standard = true;
                redraw();
                return;
            }
            else
            {
                abilityExpanded = false;
                weaponExpanded = false;
                armorExpanded = true;
                ringExpanded = false;
                standard = false;
                redraw();
                return;
            }
        }
    }
    if (standard || weaponExpanded || abilityExpanded || armorExpanded || ringExpanded)
    {
        if (x >= 28*unit && x <= 33*unit && y >= unit && y <= 6*unit)
        {
            if (ringExpanded)
            {
                ringExpanded = false;
                standard = true;
                redraw();
                return;
            }
            else
            {
                abilityExpanded = false;
                weaponExpanded = false;
                armorExpanded = false;
                ringExpanded = true;
                standard = false;
                redraw();
                return;
            }
        }
    }
    if (clickOptions(x,y) != -1 && weaponExpanded)
    {
        weaponIndex = clickOptions(x,y);
        weapon = weapons[weaponIndex];
        assignBuild();
        redraw();
        return;
    }
    if (clickOptions(x,y) != -1 && abilityExpanded)
    {
        abilityIndex = clickOptions(x,y);
        ability = abilities[abilityIndex];
        assignBuild();
        redraw();
        return;
    }
    if (clickOptions(x,y) != -1 && armorExpanded)
    {
        armorIndex = clickOptions(x,y);
        armor = armors[armorIndex];
        assignBuild();
        redraw();
        return;
    }
    if (clickOptions(x,y) != -1 && ringExpanded)
    {
        ringIndex = clickOptions(x,y);
        ring = rings[ringIndex];
        assignBuild();
        redraw();
        return;
    }
    // status icons
    if (standard && 16*unit <= x && 18*unit >= x && 6.5*unit <= y && 8.5*unit >= y)
    {
        berserk = !berserk;
        redraw();
        return;
    }
    if (standard && 20*unit <= x && 22*unit >= x && 6.5*unit <= y && 8.5*unit >= y)
    {
        damaging = !damaging;
        redraw();
        return;
    }
    if (standard && 24*unit <= x && 26*unit >= x && 6.5*unit <= y && 8.5*unit >= y)
    {
        weak = !weak;
        redraw();
        return;
    }
    if (standard && 28*unit <= x && 30*unit >= x && 6.5*unit <= y && 8.5*unit >= y)
    {
        dazed = !dazed;
        redraw();
        return;
    }
    if (standard && 16*unit <= x && 18*unit >= x && 9.5*unit <= y && 11.5*unit >= y)
    {
        armorBroken = !armorBroken;
        redraw();
        return;
    }
    if (standard && 20*unit <= x && 22*unit >= x && 9.5*unit <= y && 11.5*unit >= y)
    {
        armored = !armored;
        redraw();
        return;
    }
    if (standard && 24*unit <= x && 26*unit >= x && 9.5*unit <= y && 11.5*unit >= y)
    {
        cursed = !cursed;
        redraw();
        return;
    }
    if (standard && 28*unit <= x && 30*unit >= x && 9.5*unit <= y && 11.5*unit >= y)
    {
        exposed = !exposed;
        redraw();
        return;
    }
    // pin build with whatever color
    if (standard && 62.5*unit <= x && 56.5*unit <= y && 78.5*unit >= x && 61.5*unit >= y)
    {
        // orange
        if (63*unit <= x && 64*unit >= x && 58.5*unit <= y && 59.5*unit >= y)
        {
            for (let i = 0; i < 8; i++)
            {
                if (builds[i] == null)
                {
                    builds[i] = builds[0];
                    builds[i].color = "rgb(240, 130, 0)";
                    redraw();
                    return;
                }
            }
        }
        // blue
        if (63*unit <= x && 64*unit >= x && 59.8*unit <= y && 60.8*unit >= y)
        {
            for (let i = 0; i < 8; i++)
            {
                if (builds[i] == null)
                {
                    builds[i] = builds[0];
                    builds[i].color = "rgb(0, 0, 240)";
                    redraw();
                    return;
                }
            }
        }
        // light green
        if (64.3*unit <= x && 65.3*unit >= x && 58.5*unit <= y && 59.5*unit >= y)
        {
            for (let i = 0; i < 8; i++)
            {
                if (builds[i] == null)
                {
                    builds[i] = builds[0];
                    builds[i].color = "rgb(40, 220, 40)";
                    redraw();
                    return;
                }
            }
        }
        // white
        if (64.3*unit <= x && 65.3*unit >= x && 59.8*unit <= y && 60.8*unit >= y)
        {
            for (let i = 0; i < 8; i++)
            {
                if (builds[i] == null)
                {
                    builds[i] = builds[0];
                    builds[i].color = "rgb(240, 240, 240)";
                    redraw();
                    return;
                }
            }
        }
        // pink
        if (65.6*unit <= x && 66.6*unit >= x && 58.5*unit <= y && 59.5*unit >= y)
        {
            for (let i = 0; i < 8; i++)
            {
                if (builds[i] == null)
                {
                    builds[i] = builds[0];
                    builds[i].color = "rgb(200, 0, 200)";
                    redraw();
                    return;
                }
            }
        }
        // brown
        if (65.6*unit <= x && 66.6*unit >= x && 59.8*unit <= y && 60.8*unit >= y)
        {
            for (let i = 0; i < 8; i++)
            {
                if (builds[i] == null)
                {
                    builds[i] = builds[0];
                    builds[i].color = "rgb(130, 75, 0)";
                    redraw();
                    return;
                }
            }
        }
        // yellow
        if (66.9*unit <= x && 70.9*unit >= x && 58.5*unit <= y && 59.5*unit >= y)
        {
            for (let i = 0; i < 8; i++)
            {
                if (builds[i] == null)
                {
                    builds[i] = builds[0];
                    builds[i].color = "rgb(200, 200, 0)";
                    redraw();
                    return;
                }
            }
        }
        // black
        if (66.9*unit <= x && 70.9*unit >= x && 59.8*unit <= y && 60.8*unit >= y)
        {
            for (let i = 0; i < 8; i++)
            {
                if (builds[i] == null)
                {
                    builds[i] = builds[0];
                    builds[i].color = "rgb(10, 10, 10)";
                    redraw();
                    return;
                }
            }
        }
        
        
    }
    // clear build out
    if (standard)
    {
        for (let i = 1; i < 8; i++)
        {
            if (builds[i] != null && 61*unit <= x && 62*unit >= x && (14.5+5.5*i)*unit <= y && (15.5+5.5*i)*unit >= y)
            {
                builds[i] = null;
                for (let j = i; j < 8; j++)
                {
                    builds[j] = builds[j+1];
                }
                redraw();
                return;
            }
        }
    }
    // toggle build visibility
    if (standard)
    {
        for (let i = 0; i < 8; i++)
        {
            // g.strokeRect(61*unit, yoff+(0.5*unit), unit, unit);
            if (builds[i] != null && 61*unit <= x && (13+5.5*i)*unit <= y && 62*unit >= x && (14+5.5*i)*unit >= y)
            {
                builds[i].visible = !builds[i].visible;
                redraw();
                return;
            }
        }
    }
    // swap current build for a stored build 
    if (standard)
    {
        for (let i = 1; i < 8; i++)
        {
            // g.strokeRect(61*unit, yoff+(3.5*unit), unit, unit);
            if (builds[i] != null && 61*unit <= x && 62*unit >= x && (16+5.5*i)*unit <= y && (17+5.5*i)*unit >= y)
            {
                let tbuild = builds[i];
                builds[i] = builds[0];
                builds[i].color = tbuild.color;
                builds[0] = tbuild;
                swapClass(builds[0].classIndex);
                weapon = builds[0].weapon;
                ability = builds[0].ability;
                armor = builds[0].armor;
                ring = builds[0].ring;
                berserk = builds[0].berserk;
                damaging = builds[0].damaging;
                armored = builds[0].armored;
                armorBroken = builds[0].armorBroken;
                weak = builds[0].weak;
                dazed = builds[0].dazed;
                exposed = builds[0].exposed;
                cursed = builds[0].cursed;
                hpBuff = builds[0].hpup;
                mpBuff = builds[0].mpup;
                atkBuff = builds[0].atkup;
                defBuff = builds[0].defup;
                spdBuff = builds[0].spdup;
                dexBuff = builds[0].dexup;
                vitBuff = builds[0].vitup;
                wisBuff = builds[0].wisup;
                redraw();
                return;
            }
        }
    }
    // toggle cursors
    if (standard)
    {
        if (x >= 12*unit && x <= 28*unit && y >= 50*unit && y <= 54.5*unit)
        {
            x1CursorVisible = !x1CursorVisible;
            redraw();
            return;
        }
        if (x >= 37*unit && x <= 53*unit && y >= 50*unit && y <= 54.5*unit)
        {
            x2CursorVisible = !x2CursorVisible;
            redraw();
            return;
        }
    }
    // graph options
    if (standard)
    {
        // y scaling
        if (toggleYScaling.wasClicked(x,y))
        {
            altYScale = !altYScale;
            redraw();
            return;
        }
        // x cursor scale
        if (scaleX.wasClicked(x,y))
        {
            xmin = x1CursorLoc;
            xmax = x2CursorLoc;
            redraw();
            return;
        }
        // reset x scale
        if (resetX.wasClicked(x,y))
        {
            xmin = 0;
            xmax = 100;
            redraw();
            return;
        }
    }
    // temp stat changes
    if (standard || statChangePanel)
    {
        // g.strokeRect(39*unit, unit, 40*unit, 8*unit);
        if (statToggle.wasClicked(x,y))
        {
            statChangePanel = !statChangePanel;
            standard = !standard;
            redraw();
            return;
        }
    }
    // close stat panel
    if (statChangePanel)
    {
        if (closeStats.wasClicked(x,y))
        {
            statChangePanel = false;
            standard = true;
            redraw();
            return;
        }
    }
    // exit description mode
    if (weaponExpanded || abilityExpanded || armorExpanded || ringExpanded)
    {
        // g.strokeRect(13*unit, 7*unit, 16.5*unit, 3*unit);
        if (closeDescription.wasClicked(x,y))
        {
            weaponExpanded = false;
            abilityExpanded = false;
            armorExpanded = false;
            ringExpanded = false;
            standard = true;
            redraw();
            return;
        }
    }
    // open/close how-to guide
    if (standard || usageExplanation)
    {
        if (howTo.wasClicked(x,y))
        {
            standard = !standard;
            usageExplanation = !usageExplanation;
            clickMe.textContent = "Click Me!";
            scrollMe.textContent = "Scroll Me!";
            redraw();
            return;
        }
    }
    // how-to-guide
    if (usageExplanation)
    {
        // x out
        if (closeHowTo.wasClicked(x,y))
        {
            usageExplanation = false;
            standard = true;
            clickMe.textContent = "Click Me!";
            scrollMe.textContent = "Scroll Me!";
            redraw();
            return;
        }
        // clickable button demo
        if (clickMe.wasClicked(x,y) && howToPage == 1)
        {
            if (clickMe.textContent == "Click Me!")
            {
                clickMe.textContent = Number(1);
                redraw();
                return;
            }
            else
            {
                clickMe.textContent = clickMe.textContent + 1;
                redraw();
                return;
            }
        }
    }
})

// i put all the drawing stuff here so that it updates every click like the original.
//
// this should maybe be broken down into smaller bits.
function redraw()
{
    g.clearRect(0,0,canvas.width,canvas.height);
    g.strokeStyle = 'rgb(0, 0, 0)';
    // shows whole canvas
    g.fillStyle = 'rgb(120, 120, 150)';
    g.fillRect(0, 0, 80*unit, 70*unit);

    // outlined images look wonky with this off and pure sprites look wonky with it on,so
    // i just swap back and forth as need be throughout the program
    g.imageSmoothingEnabled = true;
    // character portrait
    switch (classIndex)
    {
        case 1:
            g.drawImage(wizardp, unit, unit, 8*unit, 8*unit);
            break;
        case 2:
            g.drawImage(priestp, unit, unit, 8*unit, 8*unit);
            break;
        case 3:
            g.drawImage(roguep, unit, unit, 8*unit, 8*unit);
            break;
        case 4:
            g.drawImage(archerp, unit, unit, 8*unit, 8*unit);
            break;
        case 5:
            g.drawImage(warriorp, unit, unit, 8*unit, 8*unit);
            break;
        case 6:
            g.drawImage(knightp, unit, unit, 8*unit, 8*unit);
            break;
        case 7:
            g.drawImage(paladinp, unit, unit, 8*unit, 8*unit);
            break;
        case 8:
            g.drawImage(assassinp, unit, unit, 8*unit, 8*unit);
            break;
        case 9:
            g.drawImage(necromancerp, unit, unit, 8*unit, 8*unit);
            break;
        case 10:
            g.drawImage(huntressp, unit, unit, 8*unit, 8*unit);
            break;
        case 11:
            g.drawImage(mysticp, unit, unit, 8*unit, 8*unit);
            break;
        case 12:
            g.drawImage(tricksterp, unit, unit, 8*unit, 8*unit);
            break;
        case 13:
            g.drawImage(sorcererp, unit, unit, 8*unit, 8*unit);
            break;
        case 14:
            g.drawImage(ninjap, unit, unit, 8*unit, 8*unit);
            break;
        case 15:
            g.drawImage(samuraip, unit, unit, 8*unit, 8*unit);
            break;
    }
    g.imageSmoothingEnabled = false;

    assignBuild();

    // why do i even have these shitty variables in the code? whatever. this chunk should make it work properly
    weaponIndex = weapons.indexOf(weapon);
    abilityIndex = abilities.indexOf(ability);
    armorIndex = armors.indexOf(armor);
    ringIndex = rings.indexOf(ring);

    // equipment slots
    if (!cssView) {
        g.fillStyle = 'rgb(120, 120, 120)';
        g.fillRect(10 * unit, unit, 5 * unit, 5 * unit);
        if (weapon.getSourceFile() != art)
            g.drawImage(weapon.getSourceFile(), 8 * weapon.column, 8 * weapon.row, 8, 8, 10 * unit, unit, 5 * unit, 5 * unit);
        g.fillRect(16 * unit, unit, 5 * unit, 5 * unit);
        if (ability.getSourceFile() != art)
            g.drawImage(ability.getSourceFile(), 8 * ability.column, 8 * ability.row, 8, 8, 16 * unit, unit, 5 * unit, 5 * unit);
        g.fillRect(22 * unit, unit, 5 * unit, 5 * unit);
        if (armor.getSourceFile() != art)
            g.drawImage(armor.getSourceFile(), 8 * armor.column, 8 * armor.row, 8, 8, 22 * unit, unit, 5 * unit, 5 * unit);
        g.fillRect(28 * unit, unit, 5 * unit, 5 * unit);
        if (ring.getSourceFile() != art)
            g.drawImage(ring.getSourceFile(), 8 * ring.column, 8 * ring.row, 8, 8, 28 * unit, unit, 5 * unit, 5 * unit);
    }

    // zone
    g.fillStyle = 'rgb(115, 115, 115)';
    g.fillRect(unit, 12*unit, 78*unit, 50*unit);
    if (standard)
    {
        // this is a lot of lines for some icons
        g.fillStyle = 'rgb(0, 0, 0)';
        g.fillRect(16*unit, 6.5*unit, 2*unit, 2*unit);
        g.fillRect(20*unit, 6.5*unit, 2*unit, 2*unit);
        g.fillRect(24*unit, 6.5*unit, 2*unit, 2*unit);
        g.fillRect(28*unit, 6.5*unit, 2*unit, 2*unit);
        g.fillRect(16*unit, 9.5*unit, 2*unit, 2*unit);
        g.fillRect(20*unit, 9.5*unit, 2*unit, 2*unit);
        g.fillRect(24*unit, 9.5*unit, 2*unit, 2*unit);
        g.fillRect(28*unit, 9.5*unit, 2*unit, 2*unit);
        g.fillStyle = 'rgb(0, 220, 0)';
        if (berserk)
            g.fillRect(16*unit, 6.5*unit, 2*unit, 2*unit);
        if (damaging)
            g.fillRect(20*unit, 6.5*unit, 2*unit, 2*unit);
        if (weak)
            g.fillRect(24*unit, 6.5*unit, 2*unit, 2*unit);
        if (dazed)
            g.fillRect(28*unit, 6.5*unit, 2*unit, 2*unit);
        if (armorBroken)
            g.fillRect(16*unit, 9.5*unit, 2*unit, 2*unit);
        if (armored)
            g.fillRect(20*unit, 9.5*unit, 2*unit, 2*unit);
        if (cursed)
            g.fillRect(24*unit, 9.5*unit, 2*unit, 2*unit);
        if (exposed)
            g.fillRect(28*unit, 9.5*unit, 2*unit, 2*unit);

        g.drawImage(berserkIcon, 16*unit, 6.5*unit, 2*unit, 2*unit);
        g.drawImage(damagingIcon, 20*unit, 6.5*unit, 2*unit, 2*unit);
        g.drawImage(weakIcon, 24*unit, 6.5*unit, 2*unit, 2*unit);
        g.drawImage(dazedIcon, 28*unit, 6.5*unit, 2*unit, 2*unit);
        g.drawImage(armorBrokenIcon, 16*unit, 9.5*unit, 2*unit, 2*unit);
        g.drawImage(armoredIcon, 20*unit, 9.5*unit, 2*unit, 2*unit);
        g.drawImage(curseIcon, 24*unit, 9.5*unit, 2*unit, 2*unit);
        g.drawImage(exposedIcon, 28*unit, 9.5*unit, 2*unit, 2*unit);
        openCredits.drawButton();
        drawDpsGraph();
    }

    if (statChangePanel)
    {
        g.strokeStyle = 'rgb(0, 0, 0)';
        g.font = (1.3*unit).toString().concat("px Arial");
        g.fillStyle = 'rgb(0, 0, 0)';
        g.fillText("ST set bonuses should be automatically applied, so please check before entering them manually.", 13*unit, 15*unit);
        closeStats.drawButton();
        // i did this instead of changing the rectangles into actual buttons. lol!
        g.fillStyle = scrollColor;
        g.fillRect(25*unit, 18*unit, 10*unit, 4*unit);
        g.strokeRect(25*unit, 18*unit, 10*unit, 4*unit);
        g.fillRect(50*unit, 18*unit, 10*unit, 4*unit);
        g.strokeRect(50*unit, 18*unit, 10*unit, 4*unit);
        g.fillRect(25*unit, 25*unit, 10*unit, 4*unit);
        g.strokeRect(25*unit, 25*unit, 10*unit, 4*unit);
        g.fillRect(50*unit, 25*unit, 10*unit, 4*unit);
        g.strokeRect(50*unit, 25*unit, 10*unit, 4*unit);
        g.fillRect(25*unit, 32*unit, 10*unit, 4*unit);
        g.strokeRect(25*unit, 32*unit, 10*unit, 4*unit);
        g.fillRect(50*unit, 32*unit, 10*unit, 4*unit);
        g.strokeRect(50*unit, 32*unit, 10*unit, 4*unit);
        g.fillRect(25*unit, 39*unit, 10*unit, 4*unit);
        g.strokeRect(25*unit, 39*unit, 10*unit, 4*unit);
        g.fillRect(50*unit, 39*unit, 10*unit, 4*unit);
        g.strokeRect(50*unit, 39*unit, 10*unit, 4*unit);
        g.font = (2.3*unit).toString().concat("px Arial");
        g.fillStyle = 'rgb(0, 0, 0)';
        g.fillText("HP:", 20*unit, 20.75*unit);
        g.fillText("MP:", 45*unit, 20.75*unit);
        g.fillText("ATK:", 19*unit, 27.75*unit);
        g.fillText("DEF:", 44*unit, 27.75*unit);
        g.fillText("DEX:", 44*unit, 34.75*unit);
        g.fillText("SPD:", 19*unit, 34.75*unit);
        g.fillText("VIT:", 19.5*unit, 41.75*unit);
        g.fillText("WIS:", 44.5*unit, 41.75*unit);
        g.fillText(hpBuff, 27*unit, 20.75*unit);
        g.fillText(mpBuff, 52*unit, 20.75*unit);
        g.fillText(atkBuff, 27*unit, 27.75*unit);
        g.fillText(defBuff, 52*unit, 27.75*unit);
        g.fillText(spdBuff, 27*unit, 34.75*unit);
        g.fillText(dexBuff, 52*unit, 34.75*unit);
        g.fillText(vitBuff, 27*unit, 41.75*unit);
        g.fillText(wisBuff, 52*unit, 41.75*unit);
    }

    // black borders
    g.strokeStyle = 'rgb(0, 0, 0)';
    if (standard || statChangePanel)
    {
        statToggle.backgroundColor = clickColor;
    }
    else
    {
        statToggle.backgroundColor = null;
    }
    statToggle.drawButton();
    g.strokeRect(39*unit, unit, 40*unit, 6*unit);
    g.strokeRect(39*unit, unit, 40*unit, 3*unit);
    g.strokeRect(unit, 12*unit, 78*unit, 50*unit);
    g.strokeRect(0, 0, 80*unit, 70*unit);
    g.strokeRect(39*unit, unit, 30*unit, 6*unit);
    g.strokeRect(39*unit, unit, 20*unit, 6*unit);
    g.strokeRect(39*unit, unit, 10*unit, 6*unit);
    
    // item slot locations
    if (!cssView) {
        g.strokeRect(10 * unit, unit, 5 * unit, 5 * unit);
        g.strokeRect(16 * unit, unit, 5 * unit, 5 * unit);
        g.strokeRect(22 * unit, unit, 5 * unit, 5 * unit);
        g.strokeRect(28 * unit, unit, 5 * unit, 5 * unit);
    }
    

    // stat text
    g.font = (1.2*unit).toString().concat("px Arial");
    g.fillStyle = 'rgb(0, 0, 0)';
    g.fillText("HP: " + getStat("HP", builds[0]) + getPlusStat("HP", builds[0]), 40*unit, 3*unit);
    g.fillText("MP: " + getStat("MP", builds[0]) + getPlusStat("MP", builds[0]), 40*unit, 6*unit);
    g.fillText("ATK: " + getStat("ATK", builds[0]) + getPlusStat("ATK", builds[0]), 50*unit, 3*unit);
    g.fillText("DEF: " + getStat("DEF", builds[0]) + getPlusStat("DEF", builds[0]), 50*unit, 6*unit);
    g.fillText("SPD: " + getStat("SPD", builds[0]) + getPlusStat("SPD", builds[0]), 60*unit, 3*unit);
    g.fillText("DEX: " + getStat("DEX", builds[0]) + getPlusStat("DEX", builds[0]), 60*unit, 6*unit);
    g.fillText("VIT: " + getStat("VIT", builds[0]) + getPlusStat("VIT", builds[0]), 70*unit, 3*unit);
    g.fillText("WIS: " + getStat("WIS", builds[0]) + getPlusStat("WIS", builds[0]), 70*unit, 6*unit);

    if (cssView)
    {
        g.imageSmoothingEnabled = true;
        drawCss();
        g.imageSmoothingEnabled = false;
    }

    if (standard)
    {
        howTo.drawButton();
    }

    if (usageExplanation)
    {
        howTo.drawButton();
        closeHowTo.drawButton();

        // put this in a chunk if i ever need a second page of how-to (very likely when i get to the optimize stuff)
        g.font = (1.6*unit).toString().concat("px Arial")
        g.fillStyle = 'rgb(0, 0, 0)';
        g.fillText("This program is mostly navigated by clicking, but in some cases the scroll wheel may be used.", 2*unit, 16*unit);
        g.fillText("Scroll and click locations are largely color-coded, with a few exceptions.", 2*unit, 28*unit);
        clickMe.drawButton();
        scrollMe.drawButton();
    }

    if (credits)
    {
        drawCredits();
    }

    if (startup)
    {
        g.fillStyle = 'rgb(40, 60, 90)';
        g.fillRect(0, 0, 80*unit, 70*unit);
        var banner = new Image();
        banner.addEventListener('load', function(){g.drawImage(banner, 0, 0, 80*unit, 50*unit)}, false);
        banner.src = 'images/rotmg builder banner.png';
        g.fillStyle = 'rgb(150, 20, 0)';
        g.font = (5*unit).toString().concat("px Courier New");
        g.fillText("Click to continue,", 27*unit, 57*unit);
    }
    if (!startup)
    {
        g.font = (1.6*unit).toString().concat("px Courier New");
        g.fillStyle = 'rgb(0, 0, 0)';
        g.fillText("v1.2.0", 59*unit, 65*unit);
        g.fillText("Based on RotMG v1582040564", 48*unit, 68*unit);
    }
    if (weaponExpanded)
    {
        drawDescription(weapon, weaponIndex);
    }
    if (abilityExpanded)
    {
        drawDescription(ability, abilityIndex);
    }
    if (armorExpanded)
    {
        drawDescription(armor, armorIndex);
    }
    if (ringExpanded)
    {
        drawDescription(ring, ringIndex);
    }
}

// read the freaking function name moron
function drawDpsGraph()
{
    setYMax();
    setYMin();
    
    g.fillStyle = 'rgb(50, 50, 50)';
    //g.fillStyle = 'rgb(0, 0, 0)';
    g.fillRect(unit, 12*unit, 78*unit, 50*unit);
    g.strokeStyle = 'rgb(255, 255, 255)';
    g.beginPath();
    g.moveTo(9*unit, 15*unit);
    g.lineTo(9*unit, 46*unit);
    g.lineTo(58*unit, 46*unit);
    g.stroke();
    g.closePath();

    g.strokeStyle = 'rgb(100, 100, 100)';
    g.beginPath();
    g.moveTo(58*unit, 46*unit);
    g.lineTo(58*unit, 15*unit);
    g.moveTo((58-12.25)*unit, 46*unit);
    g.lineTo((58-12.25)*unit, 15*unit);
    g.moveTo((58-24.5)*unit, 46*unit);
    g.lineTo((58-24.5)*unit, 15*unit);
    g.moveTo((9+12.25)*unit, 15*unit);
    g.lineTo((9+12.25)*unit, 46*unit);
    g.moveTo(9*unit, 15*unit);
    g.lineTo(58*unit, 15*unit);
    g.moveTo(9*unit, 22.75*unit);
    g.lineTo(58*unit, 22.75*unit);
    g.moveTo(9*unit, 30.5*unit);
    g.lineTo(58*unit, 30.5*unit);
    g.moveTo(9*unit, 38.25*unit);
    g.lineTo(58*unit, 38.25*unit);
    g.stroke();
    g.closePath();


    g.strokeStyle = 'rgb(0, 0, 0)';

    

    assignBuild();
    for (let i = 0; i < 9; i++)
    {
        drawBuild(builds[i], (12.5+5.5*i)*unit);
        drawDps(builds[i]);
    }

    // pin this build button
    g.fillStyle = "rgb(220, 220, 220)";
    g.font = (1.3*unit).toString().concat("px Courier New");
    g.fillText("Pin Current Build", 63*unit, (14+5.5*8)*unit);

    // orange
    g.fillStyle = "rgb(240, 130, 0)";
    g.fillRect(63*unit, (14.5+5.5*8)*unit, unit, unit);
    // blue
    g.fillStyle = "rgb(0, 0, 240)";
    g.fillRect(63*unit, (15.8+5.5*8)*unit, unit, unit);
    // light green
    g.fillStyle = "rgb(40, 220, 40)";
    g.fillRect(64.3*unit, (14.5+5.5*8)*unit, unit, unit);
    // white
    g.fillStyle = "rgb(240, 240, 240)";
    g.fillRect(64.3*unit, (15.8+5.5*8)*unit, unit, unit);
    // pink
    g.fillStyle = "rgb(200, 0, 200)";
    g.fillRect(65.6*unit, (14.5+5.5*8)*unit, unit, unit);
    // brown
    g.fillStyle = "rgb(130, 75, 0)";
    g.fillRect(65.6*unit, (15.8+5.5*8)*unit, unit, unit);
    // yellow
    g.fillStyle = "rgb(200, 200, 0)";
    g.fillRect(66.9*unit, (14.5+5.5*8)*unit, unit, unit);
    // black
    g.fillStyle = "rgb(10, 10, 10)";
    g.fillRect(66.9*unit, (15.8+5.5*8)*unit, unit, unit);

    // axis labels aka pieces of shit
    g.font = (1.4*unit).toString().concat("px Courier New");
    g.fillStyle = 'rgb(255, 255, 255)';
    g.fillText("Defense vs Average Damage Per Second", 18*unit, 14*unit);
    g.font = (1.1*unit).toString().concat("px Courier New");
    g.fillText(Math.round(10*(Math.round((ymax-ymin)*10)/10+Math.round(ymin*10)/10))/10, 3*unit, 16*unit);
    g.fillText(Math.round(10*(Math.round((ymax-ymin)*7.5)/10+Math.round(ymin*10)/10))/10, 3*unit, 23.75*unit);
    g.fillText(Math.round(10*(Math.round((ymax-ymin)*5)/10+Math.round(ymin*10)/10))/10, 3*unit, 31.5*unit);
    g.fillText(Math.round(10*(Math.round((ymax-ymin)*2.5)/10+Math.round(ymin*10)/10))/10, 3*unit, 39.25*unit);
    g.fillText(Math.round(ymin*10)/10, 3*unit, 47*unit);
    g.fillText(xmin, 9.5*unit, 48*unit);
    g.fillText(xmax, 58.5*unit, 48*unit);
    if ((xmax-xmin)%2 == 0)
    {
        g.fillText(xmin+(xmax-xmin)/2, (9.5+24.5)*unit, 48*unit);
        if ((xmax-xmin)%4 == 0)
        {
            g.fillText(xmin+(xmax-xmin)/4, (9.5+12.25)*unit, 48*unit);
            g.fillText(xmin+(3*(xmax-xmin))/4, (58.5-12.25)*unit, 48*unit);
        }
    }

    // cursor boxes
    g.font = (2.1*unit).toString().concat("px Courier New");
    g.fillStyle = 'rgb(255, 255, 255)';
    cursor1Box.drawButton();
    cursor2Box.drawButton();
    g.font = (1.2*unit).toString().concat("px Courier New");
    g.fillText("Cursor 1:", 17*unit, 51*unit);
    g.fillText("Cursor 2:", 42*unit, 51*unit);
    g.strokeStyle = 'rgb(0, 0, 0)';

    // cursors
    let graphUnit = (49*unit)/(xmax-xmin);
    g.strokeStyle = 'rgb(255, 255, 255)';
    g.beginPath();
    if (x1CursorVisible && x1CursorLoc >= xmin && x1CursorLoc <= xmax)
    {
        g.moveTo((9)*unit+(x1CursorLoc-xmin)*graphUnit, 46*unit);
        g.lineTo((9)*unit+(x1CursorLoc-xmin)*graphUnit, 15*unit);
    }
    if (x2CursorVisible && x2CursorLoc >= xmin && x2CursorLoc <= xmax)
    {
        g.moveTo(9*unit+(x2CursorLoc-xmin)*graphUnit, 46*unit);
        g.lineTo(9*unit+(x2CursorLoc-xmin)*graphUnit, 15*unit);
    }
    g.stroke();
    g.strokeStyle = 'rgb(0, 0, 0)';

    // butons
    g.strokeStyle = 'rgb(200, 200, 200)';
    g.fillStyle = 'rgb(225, 225, 225)';
    g.font = (1.2*unit).toString().concat("px Courier New");
    toggleYScaling.drawButton();
    scaleX.drawButton();
    resetX.drawButton();
    g.strokeStyle = 'rgb(0, 0, 0)';
}

// this function is the way it is because i might want to add more arguments to the build constructor and i dont want to have to
// find all the places i use this assignment
function assignBuild()
{
    let tnor = false;
    let tttts = true;
    if (builds[0] != null)
    {
        tttts = builds[0].visible;
        tnor = true;
    }
    builds[0] = new Build(weapon, ability, armor, ring, hpBuff, mpBuff, atkBuff, defBuff, spdBuff, dexBuff, vitBuff, wisBuff,
        berserk, damaging, weak, dazed, armored, cursed, exposed, armorBroken, classIndex, 'rgb(255, 0, 0)');
    if (tnor)
        builds[0].visible = tttts;
}

// draws the box on the side
function drawBuild(build, yoff)
{
    if (build == null)
    {
        g.strokeStyle = 'rgb(150, 150, 150)';
        g.strokeRect(62.5*unit, yoff, 16*unit, 5*unit);
        g.strokeStyle = 'rgb(0, 0, 0)';
        return;
    }

    // x button
    if (build.color != builds[0].color)
    {
        g.strokeStyle = builds[0].color; // i am incapable of thinking about what rgb value the color red is
        g.beginPath();
        g.moveTo(61*unit, (2*unit)+yoff);
        g.lineTo(62*unit, (3*unit)+yoff);
        g.moveTo(61*unit, (3*unit)+yoff);
        g.lineTo(62*unit, (2*unit)+yoff);
        g.stroke();
        g.strokeStyle = 'rgb(200, 200, 200)';
        g.strokeRect(61*unit, (2*unit)+yoff, unit, unit);
        g.strokeStyle = 'rgb(0, 0, 0)';
    }

    // toggle visibility button
    g.imageSmoothingEnabled = true;
    if (!build.visible)
    {
        g.fillStyle = 'rgb(180, 40, 40)';
    }
    else
    {
        g.fillStyle = 'rgb(140, 140, 140)';
    }
    g.fillRect(61*unit, yoff+(0.5*unit), unit, unit);
    g.drawImage(visIcon, 61*unit, yoff+(0.5*unit), unit, unit);
    g.strokeStyle = 'rgb(200, 200, 200)';
    g.strokeRect(61*unit, yoff+(0.5*unit), unit, unit);

    // swap button
    if (build != builds[0])
    {
        g.fillStyle = 'rgb(140, 140, 140)';
        g.fillRect(61*unit, yoff+(3.5*unit), unit, unit);
        g.drawImage(swapIcon, 61*unit, yoff+(3.5*unit), unit, unit);
        g.strokeStyle = 'rgb(200, 200, 200)';
        g.strokeRect(61*unit, yoff+(3.5*unit), unit, unit);
    }
    
    // the zone
    g.strokeStyle = build.color;
    g.strokeRect(62.5*unit, yoff, 16*unit, 5*unit);
    g.strokeStyle = 'rgb(0, 0, 0)';

    // this code kinda sucks but i copypasted it from the other class draw spot in this program
    // so whatever. i don't really want to rewrite it just to make it prettier. but why i never
    // made a variable to hold the current class portrait is beyond me.
    
    switch (build.classIndex)
    {
        case 1:
            g.drawImage(wizardp, 63*unit, yoff+(0.5*unit), 3*unit, 3*unit);
            break;
        case 2:
            g.drawImage(priestp, 63*unit, yoff+(0.5*unit), 3*unit, 3*unit);
            break;
        case 3:
            g.drawImage(roguep, 63*unit, yoff+(0.5*unit), 3*unit, 3*unit);
            break;
        case 4:
            g.drawImage(archerp, 63*unit, yoff+(0.5*unit), 3*unit, 3*unit);
            break;
        case 5:
            g.drawImage(warriorp, 63*unit, yoff+(0.5*unit), 3*unit, 3*unit);
            break;
        case 6:
            g.drawImage(knightp, 63*unit, yoff+(0.5*unit), 3*unit, 3*unit);
            break;
        case 7:
            g.drawImage(paladinp, 63*unit, yoff+(0.5*unit), 3*unit, 3*unit);
            break;
        case 8:
            g.drawImage(assassinp, 63*unit, yoff+(0.5*unit), 3*unit, 3*unit);
            break;
        case 9:
            g.drawImage(necromancerp, 63*unit, yoff+(0.5*unit), 3*unit, 3*unit);
            break;
        case 10:
            g.drawImage(huntressp, 63*unit, yoff+(0.5*unit), 3*unit, 3*unit);
            break;
        case 11:
            g.drawImage(mysticp, 63*unit, yoff+(0.5*unit), 3*unit, 3*unit);
            break;
        case 12:
            g.drawImage(tricksterp, 63*unit, yoff+(0.5*unit), 3*unit, 3*unit);
            break;
        case 13:
            g.drawImage(sorcererp, 63*unit, yoff+(0.5*unit), 3*unit, 3*unit);
            break;
        case 14:
            g.drawImage(ninjap, 63*unit, yoff+(0.5*unit), 3*unit, 3*unit);
            break;
        case 15:
            g.drawImage(samuraip, 63*unit, yoff+(0.5*unit), 3*unit, 3*unit);
            break;
    }
    g.imageSmoothingEnabled = false;

    // gear
    g.drawImage(build.weapon.getSourceFile(), 8*build.weapon.column, 8*build.weapon.row, 8, 8, 66.5*unit, yoff + (0.5*unit), 1.8*unit, 1.8*unit);
    g.drawImage(build.ability.getSourceFile(), 8*build.ability.column, 8*build.ability.row, 8, 8, 68.55*unit, yoff + (0.5*unit), 1.8*unit, 1.8*unit);
    g.drawImage(build.armor.getSourceFile(), 8*build.armor.column, 8*build.armor.row, 8, 8, 70.6*unit, yoff + (0.5*unit), 1.8*unit, 1.8*unit);
    g.drawImage(build.ring.getSourceFile(), 8*build.ring.column, 8*build.ring.row, 8, 8, 72.65*unit, yoff + (0.5*unit), 1.8*unit, 1.8*unit);

    // status
    g.imageSmoothingEnabled = true;
    if (build.berserk)
        g.drawImage(berserkIcon, 63*unit, yoff+(3.5*unit), 1.5*unit, 1.5*unit);
    if (build.damaging)
        g.drawImage(damagingIcon, 64.5*unit, yoff+(3.5*unit), 1.5*unit, 1.5*unit);
    if (build.weak)
        g.drawImage(weakIcon, 66*unit, yoff+(3.5*unit), 1.5*unit, 1.5*unit);
    if (build.dazed)
        g.drawImage(dazedIcon, 67.5*unit, yoff+(3.5*unit), 1.5*unit, 1.5*unit);
    if (build.armorBroken)
        g.drawImage(armorBrokenIcon, 69*unit, yoff+(3.5*unit), 1.5*unit, 1.5*unit);
    if (build.armored)
        g.drawImage(armoredIcon, 70.5*unit, yoff+(3.5*unit), 1.5*unit, 1.5*unit);
    if (build.cursed)
        g.drawImage(curseIcon, 72*unit, yoff+(3.5*unit), 1.5*unit, 1.5*unit);
    if (build.exposed)
        g.drawImage(exposedIcon, 73.5*unit, yoff+(3.5*unit), 1.5*unit, 1.5*unit);
    g.imageSmoothingEnabled = false;

    // dps
    g.font = (unit).toString().concat("px Courier New");
    g.fillStyle = 'rgb(255, 255, 255)';
    g.fillText(x1CursorLoc + " def DPS: " + Math.round(10*getDPS(x1CursorLoc, build))/10, 66.5*unit, yoff+(3.5*unit));

    // temp atk and dex boosts
    if (build.dexup > 0)
    {
        g.fillStyle = 'rgb(255, 155, 0)';
        g.fillText("+" + build.dexup, 75*unit, yoff+(1.1*unit));
    }
    else if (build.dexup < 0)
    {
        g.fillStyle = 'rgb(255, 155, 0)';
        g.fillText(build.dexup, 75*unit, yoff+(1.1*unit));
    }
    if (build.atkup > 0)
    {
        g.fillStyle = 'rgb(195, 0, 195)';
        g.fillText("+" + build.atkup, 75*unit, yoff+(2.3*unit));
    }
    else if (build.atkup < 0)
    {
        g.fillStyle = 'rgb(195, 0, 195)';
        g.fillText(build.atkup, 75*unit, yoff+(2.3*unit));
    }
}

function shotsPerSecond(build)
{
    let outputSPS = 1.5;
    let workDex = getStat("DEX", build);
    if (build.dazed)
        workDex = 0;
    let workRof = build.weapon.rof;
    outputSPS = ((workRof/100)*(((workDex/75)*6.5)+1.5));
    if (build.berserk && !build.dazed)
        outputSPS = (outputSPS * 1.5);
    return outputSPS;
}

function damagePerShot(build)
{
    let inpAtk = getStat("ATK", build);
    
    let multiplier = 0;
    let range = build.weapon.maxDamage - build.weapon.baseDamage;
    if (range == 0)
        range = 1;

    let possibilities = [];

    if (build.weak)
        inpAtk = 0;
    multiplier = 0.5 + (inpAtk/50);
    if (build.damaging && !build.weak)
        multiplier = multiplier * 1.5;
    
    for (let i = 0; i < range; i++)
    {
        let k = (multiplier * (Number(build.weapon.baseDamage) + i));
        possibilities[i] = k;
    }

    return possibilities;
}

function getDPS(defLevel, build)
{
    if (build.weapon.name == "(empty slot)")
        return 0;
    
    let avgDps = 0;

    if (build.armored)
        defLevel = 2*defLevel;
    if (build.armorBroken)
        defLevel = 0;
    if (build.exposed)
        defLevel = defLevel - 20;

    let possibilities = damagePerShot(build);
    let rof = shotsPerSecond(build);

    for (let i = 0; i < possibilities.length; i++)
    {
        if (possibilities[i] * 0.85 > defLevel)
        {
            if (!build.weapon.defIgnore)
                possibilities[i] = possibilities[i] - defLevel;
            else if (build.weapon.defIgnore && build.exposed)
                possibilities[i] = possibilities[i] + 20;
        }
        else
        {
            if (!build.weapon.defIgnore)
                possibilities[i] = possibilities[i] - Math.floor(possibilities[i] * 0.85);
            else if (build.weapon.defIgnore && build.exposed)
                possibilities[i] = possibilities[i] + 20;
        }
    }

    let avgDmg = 0;
    for (let i = 0; i < possibilities.length; i++)
    {
        avgDmg += possibilities[i];
    }
    avgDmg = avgDmg/(possibilities.length);

    avgDps = avgDmg * rof * build.weapon.shots;

    if (build.cursed)
        avgDps = avgDps * 1.2;
    
    if (avgDps < 0)
        avgDps = 0;
    
    return avgDps;
}

function fullDps(build)
{
    let dpsArray = [];

    for (let i = 0; i <= xmax-xmin; i++)
    {
        dpsArray[i] = getDPS(i+xmin, build);
        if (i+xmin > xmin)
        {
            if (dpsArray[i] == dpsArray[i-1])
            {
                for (let j = i+1; j <= xmax; j++)
                {
                    dpsArray[j] = dpsArray[i];
                }
                return dpsArray;
            }
        }
    }
    return dpsArray;
}

// draws the line on the graph
function drawDps(build)
{
    if (build == null)
        return;
    if (!build.visible)
        return;
    
    setYMax();
    setYMin();
    g.strokeStyle = build.color;
    g.fillStyle = build.color;
    g.lineWidth = 1.3;

    let rangex = xmax - xmin;
    let dpsUnitx = (49*unit)/rangex;

    let rangey = ymax - ymin;
    
    let dpsArray = fullDps(build);
    g.beginPath();
    g.moveTo(9*unit, ((46*unit)-(31*unit*(dpsArray[0]-ymin)/rangey)));
    g.lineTo(((9*unit)+(dpsUnitx)), ((46*unit)-(31*unit*(dpsArray[1]-ymin)/rangey)));
    g.stroke();

    for (let i = 1; i <= xmax-xmin; i++)
    {
        g.beginPath();
        g.moveTo(((9*unit)+(dpsUnitx*(i-1))), ((46*unit)-(31*unit*(dpsArray[i-1]-ymin)/rangey)));
        g.lineTo(((9*unit)+(dpsUnitx*i)), ((46*unit)-(31*unit*(dpsArray[i]-ymin)/rangey)));
        g.stroke();
    }

    g.strokeStyle = 'rgb(0, 0, 0)';
    g.strokeStyle = 'rgb(0, 0, 0)';
    g.fillStyle = 'rgb(0, 0, 0)';
    g.closePath();

    g.lineWidth = 1;
}

function setYMax()
{
    ymax = 3000.0;
    if (altYScale)
        ymax = 0;
    for (let i = 0; i < 9; i++)
    {
        if (builds[i] != null && builds[i].visible)
        {
            if (getDPS(xmin, builds[i]) > ymax)
            {
                ymax = getDPS(xmin, builds[i]);
            }
        }
    }
    if (ymax == 0)
        ymax = 1;
}

function setYMin()
{
    if (!altYScale)
    {
        ymin = 0;
    }
    else
    {
        ymin = ymax;
        for (let i = 0; i < 9; i++)
        {
            if (builds[i] != null && builds[i].visible)
            {
                if (getDPS(xmax, builds[i]) < ymin)
                {
                    ymin = getDPS(xmax, builds[i]);
                }
            }
        }
    }
    if (ymin == ymax)
        ymin = ymax - 1;
}

// relevant in terms of adding classes -- should this be done procedurally based on how many classes there are?
function drawCss()
{
    g.drawImage(wizardp, 35*unit, 15*unit, 10*unit, 10*unit);
    g.drawImage(priestp, 51*unit, 15*unit, 10*unit, 10*unit);
    g.drawImage(roguep, 3*unit, 15*unit, 10*unit, 10*unit);
    g.drawImage(archerp, 19*unit, 15*unit, 10*unit, 10*unit);
    g.drawImage(warriorp, 67*unit, 15*unit, 10*unit, 10*unit);
    g.drawImage(knightp, 3*unit, 28*unit, 10*unit, 10*unit);
    g.drawImage(paladinp, 19*unit, 28*unit, 10*unit, 10*unit);
    g.drawImage(assassinp, 35*unit, 28*unit, 10*unit, 10*unit);
    g.drawImage(necromancerp, 51*unit, 28*unit, 10*unit, 10*unit);
    g.drawImage(huntressp, 67*unit, 28*unit, 10*unit, 10*unit);
    g.drawImage(mysticp, 3*unit, 41*unit, 10*unit, 10*unit);
    g.drawImage(tricksterp, 19*unit, 41*unit, 10*unit, 10*unit);
    g.drawImage(sorcererp, 35*unit, 41*unit, 10*unit, 10*unit);
    g.drawImage(ninjap, 51*unit, 41*unit, 10*unit, 10*unit);
    g.drawImage(samuraip, 67*unit, 41*unit, 10*unit, 10*unit);
}

function drawCredits()
{
    g.fillStyle = 'rgb(60, 60, 60)';
    g.fillRect(unit, 12*unit, 78*unit, 50*unit);
    openCredits.drawButton();
    g.fillStyle = 'rgb(250, 250, 0)';
    g.font = (2.2*unit).toString().concat("px Arial");
    g.fillText("Made by Kieran Hooper (/u/BNaoC on reddit)", 2*unit, 16*unit);
    g.font = (1.9*unit).toString().concat("px Arial");
    g.fillText("Special thanks to:", 2*unit, 23*unit);
    g.font = (1.4*unit).toString().concat("px Arial");
    g.fillText("- pfiffel for creating the original RotMG dps tool", 2*unit, 27*unit);
    g.fillText(" - /u/lyrgard for inspiring the idea of an optimization tool", 2*unit, 31*unit);
    g.fillText(" - niegil for help static drips", 2*unit, 35*unit);
    g.fillText(" - Wildshadow, Kabam, and DECA for the game this tool serves", 2*unit, 39*unit);
    closeCredits.drawButton();
    g.font = (1.7*unit).toString().concat("px Arial");
    // i just realized that this is cringe
    /*g.fillText("Want to say thanks? Just find me ingame and give me a Ring of Decades.", 2*unit, 56*unit);
    g.fillText("My in-game name is 'Baconocab.'", 2*unit, 59*unit);*/
}

// there is definitely a better way to do this but i dont care
function cssSelect(ix, iy)
{
    if (ix >= 35*unit && ix <= 45*unit && iy >= 15*unit && iy<= 25*unit)
    {
        swapClass(1);
        cssView = false;
        standard = true;
        return true;
    }
    if (ix >= 51*unit && ix <= 61*unit && iy >= 15*unit && iy<= 25*unit)
    {
        swapClass(2);
        cssView = false;
        standard = true;
        return true;
    }
    if (ix >= 3*unit && ix <= 13*unit && iy >= 15*unit && iy<= 25*unit)
    {
        swapClass(3);
        cssView = false;
        standard = true;
        return true;
    }
    if (ix >= 19*unit && ix <= 29*unit && iy >= 15*unit && iy<= 25*unit)
    {
        swapClass(4);
        cssView = false;
        standard = true;
        return true;
    }
    if (ix >= 67*unit && ix <= 77*unit && iy >= 15*unit && iy<= 25*unit)
    {
        swapClass(5);
        cssView = false;
        standard = true;
        return true;
    }
    if (ix >= 3*unit && ix <= 13*unit && iy >= 28*unit && iy<= 38*unit)
    {
        swapClass(6);
        cssView = false;
        standard = true;
        return true;
    }
    if (ix >= 19*unit && ix <= 29*unit && iy >= 28*unit && iy<= 38*unit)
    {
        swapClass(7);
        cssView = false;
        standard = true;
        return true;
    }
    if (ix >= 35*unit && ix <= 45*unit && iy >= 28*unit && iy<= 38*unit)
    {
        swapClass(8);
        cssView = false;
        standard = true;
        return true;
    }
    if (ix >= 51*unit && ix <= 61*unit && iy >= 28*unit && iy<= 38*unit)
    {
        swapClass(9);
        cssView = false;
        standard = true;
        return true;
    }
    if (ix >= 67*unit && ix <= 77*unit && iy >= 28*unit && iy<= 38*unit)
    {
        swapClass(10);
        cssView = false;
        standard = true;
        return true;
    }
    if (ix >= 3*unit && ix <= 13*unit && iy >= 41*unit && iy<= 51*unit)
    {
        swapClass(11);
        cssView = false;
        standard = true;
        return true;
    }
    if (ix >= 19*unit && ix <= 29*unit && iy >= 41*unit && iy<= 51*unit)
    {
        swapClass(12);
        cssView = false;
        standard = true;
        return true;
    }
    if (ix >= 35*unit && ix <= 45*unit && iy >= 41*unit && iy<= 51*unit)
    {
        swapClass(13);
        cssView = false;
        standard = true;
        return true;
    }
    if (ix >= 51*unit && ix <= 61*unit && iy >= 41*unit && iy<= 51*unit)
    {
        swapClass(14);
        cssView = false;
        standard = true;
        return true;
    }
    if (ix >= 67*unit && ix <= 77*unit && iy >= 41*unit && iy<= 51*unit)
    {
        swapClass(15);
        cssView = false;
        standard = true;
        return true;
    }
    return false;
}

// the point of this being a function is so that i can expand what this means.
// in terms of changing stats, gear selection, etc.
function swapClass(x)
{
    if (classIndex == x)
        return;

    classIndex = x;

    if (classIndex == 1)
    {
        weapons = staffs;
        abilities = spellbombs;
        armors = robes;
    }
    else if (classIndex == 2)
    {
        weapons = wands;
        abilities = tomes;
        armors = robes;
    }
    else if (classIndex == 3)
    {
        weapons = daggers;
        abilities = cloaks;
        armors = leathers;
    }
    else if (classIndex == 4)
    {
        weapons = bows;
        abilities = quivers;
        armors = leathers;
    }
    else if (classIndex == 5)
    {
        weapons = swords;
        abilities = helms;
        armors = heavies;
    }
    else if (classIndex == 6)
    {
        weapons = swords;
        abilities = shields;
        armors = heavies;
    }
    else if (classIndex == 7)
    {
        weapons = swords;
        abilities = seals;
        armors = heavies;
    }
    else if (classIndex == 8)
    {
        weapons = daggers;
        abilities = poisons;
        armors = leathers;
    }
    else if (classIndex == 9)
    {
        weapons = staffs;
        abilities = skulls;
        armors = robes;
    }
    else if (classIndex == 10)
    {
        weapons = bows;
        abilities = traps;
        armors = leathers;
    }
    else if (classIndex == 11)
    {
        weapons = staffs;
        abilities = orbs;
        armors = robes;
    }
    else if (classIndex == 12)
    {
        weapons = daggers;
        abilities = prisms;
        armors = leathers;
    }
    else if (classIndex == 13)
    {
        weapons = wands;
        abilities = scepters;
        armors = robes;
    }
    else if (classIndex == 14)
    {
        weapons = katanas;
        abilities = stars;
        armors = leathers;
    }
    else if (classIndex == 15)
    {
        weapons = katanas;
        abilities = wakis;
        armors = heavies;
    }

    weapon = weapons[0];
    weaponIndex = 0;
    ability = abilities[0];
    abilityIndex = 0;
    armor = armors[0];
    armorIndex = 0;
    ring = rings[0];
    ringIndex = 0;
}

// i jus wanna load the images ahead of time rather than doing it each time
// i couldn't figure out how to load them procedurally though unfortunately. oh well.
function loadImages()
{
    wizardp.src = 'images/Wizard.png';
    priestp.src = 'images/Priest.png';
    roguep.src = 'images/Rogue.png';
    archerp.src = 'images/Archer.png';
    warriorp.src = 'images/Warrior.png';
    knightp.src = 'images/Knight.png';
    paladinp.src = 'images/Paladin.png';
    assassinp.src = 'images/Assassin.png';
    necromancerp.src = 'images/Necromancer.png';
    huntressp.src = 'images/Huntress.png';
    mysticp.src = 'images/Mystic.png';
    tricksterp.src = 'images/Trickster.png';
    sorcererp.src = 'images/Sorcerer.png';
    ninjap.src = 'images/Ninja.png';
    samuraip.src = 'images/Samurai.png';

    armorBrokenIcon.src = 'images/icon_armorbroken.png';
    armoredIcon.src = 'images/icon_armored.png';
    berserkIcon.src = 'images/icon_berserk.png';
    curseIcon.src = 'images/icon_curse.png';
    damagingIcon.src = 'images/icon_damaging.png';
    dazedIcon.src = 'images/icon_dazed.png';
    exposedIcon.src = 'images/icon_exposed.png';
    invulnerableIcon.src = 'images/icon_invulnerable.png';
    weakIcon.src = 'images/icon_weak.png';

    visIcon.src = 'images/eye.png';
    swapIcon.src = 'images/swap.png';

    art.src = 'images/Art.png';

    lofiObj.src = 'images/lofiObj.png';
    lofiObj2.src = 'images/lofiObj2.png';
    lofiObj3.src = 'images/lofiObj3.png';
    lofiObj4.src = 'images/lofiObj4.png';
    lofiObj5.src = 'images/lofiObj5.png';
    lofiObj5b.src = 'images/lofiObj5b.png';
    lofiObj6.src = 'images/lofiObj6.png';
    lostHallsObjects8x8.src = 'images/lostHallsObjects8x8.png';
    d2LofiObjEmbed.src = 'images/d2LofiObj.png';
    d3LofiObjEmbed.src = 'Images/d3LofiObj.png';
    epicHiveObjects8x8.src = 'images/epicHiveObjects8x8.png';
    lairOfDraconisObjects8x8.src = 'images/lairOfDraconisObjects8x8.png';
    buffedBunnyObjects8x8.src = 'images/buffedBunnyObjects8x8.png';
    crystalCaveObjects8x8.src = 'images/crystalCaveObjects8x8.png';
    cnidarianReefObjects8x8.src = 'images/cnidarianReefObjects8x8.png';
    cursedLibraryObjects8x8.src = 'images/cursedLibraryObjects8x8.png';
    magicWoodsObjects8x8.src = 'images/magicWoodsObjects8x8.png';
    mountainTempleObjects8x8.src = 'images/mountainTempleObjects8x8.png';
    oryxHordeObjects8x8.src = 'images/oryxHordeObjects8x8.png';
    parasiteDenObjects8x8.src = 'images/parasiteDenObjects8x8.png';
    secludedThicketObjects8x8.src = 'images/secludedThicketObjects8x8.png';
    stPatricksObjects8x8.src = 'images/stPatricksObjects8x8.png';
    theMachineObjects8x8.src = 'images/theMachineObjects8x8.png';
    santaWorkshopObjects8x8.src = 'images/santaWorkshopObjects8x8.png';
}

function getStat(stat, build)
{
    evaluateST(build);
    if (stat == "HP")
    {
        return (classStats[build.classIndex][0] + Number(build.weapon.hp) + Number(build.ability.hp) + Number(build.armor.hp) + Number(build.ring.hp) + stStats[0] + build.hpup);
    }
    else if (stat == "MP")
    {
        return (classStats[build.classIndex][1] + Number(build.weapon.mp) + Number(build.ability.mp) + Number(build.armor.mp) + Number(build.ring.mp) + stStats[1] + build.mpup);
    }
    else if (stat == "ATK")
    {
        return (classStats[build.classIndex][2] + Number(build.weapon.atk) + Number(build.ability.atk) + Number(build.armor.atk) + Number(build.ring.atk) + stStats[2] + build.atkup);
    }
    else if (stat == "DEF")
    {
        return (classStats[build.classIndex][3] + Number(build.weapon.def) + Number(build.ability.def) + Number(build.armor.def) + Number(build.ring.def) + stStats[3] + build.defup);
    }
    else if (stat == "SPD")
    {
        return (classStats[build.classIndex][4] + Number(build.weapon.spd) + Number(build.ability.spd) + Number(build.armor.spd) + Number(build.ring.spd) + stStats[4] + build.spdup);
    }
    else if (stat == "DEX")
    {
        return (classStats[build.classIndex][5] + Number(build.weapon.dex) + Number(build.ability.dex) + Number(build.armor.dex) + Number(build.ring.dex) + stStats[5] + build.dexup);
    }
    else if (stat == "VIT")
    {
        return (classStats[build.classIndex][6] + Number(build.weapon.vit) + Number(build.ability.vit) + Number(build.armor.vit) + Number(build.ring.vit) + stStats[6] + build.vitup);
    }
    else if (stat == "WIS")
    {
        return (classStats[build.classIndex][7] + Number(build.weapon.wis) + Number(build.ability.wis) + Number(build.armor.wis) + Number(build.ring.wis) + stStats[7] + build.wisup);
    }
}

// had to add this method because i am a dumbshit
function getPlusStat(stat, build)
{
    evaluateST(build);
    let str = "(";
    let amt = 0;
    if (stat == "HP")
    {
        amt = (Number(build.weapon.hp) + Number(build.ability.hp) + Number(build.armor.hp) + Number(build.ring.hp) + stStats[0] + build.hpup);
        if (amt >= 0)
            str += "+";
        str += amt + ")";
        return str;
    }
    else if (stat == "MP")
    {
        amt = (Number(build.weapon.mp) + Number(build.ability.mp) + Number(build.armor.mp) + Number(build.ring.mp) + stStats[1] + build.mpup);
        if (amt >= 0)
            str += "+";
        str += amt + ")";
        return str;
    }
    else if (stat == "ATK")
    {
        amt = (Number(build.weapon.atk) + Number(build.ability.atk) + Number(build.armor.atk) + Number(build.ring.atk) + stStats[2] + build.atkup);
        if (amt >= 0)
            str += "+";
        str += amt + ")";
        return str;
    }
    else if (stat == "DEF")
    {
        amt = (Number(build.weapon.def) + Number(build.ability.def) + Number(build.armor.def) + Number(build.ring.def) + stStats[3] + build.defup);
        if (amt >= 0)
            str += "+";
        str += amt + ")";
        return str;
    }
    else if (stat == "SPD")
    {
        amt = (Number(build.weapon.spd) + Number(build.ability.spd) + Number(build.armor.spd) + Number(build.ring.spd) + stStats[4] + build.spdup);
        if (amt >= 0)
            str += "+";
        str += amt + ")";
        return str;
    }
    else if (stat == "DEX")
    {
        amt = (Number(build.weapon.dex) + Number(build.ability.dex) + Number(build.armor.dex) + Number(build.ring.dex) + stStats[5] + build.dexup);
        if (amt >= 0)
            str += "+";
        str += amt + ")";
        return str;
    }
    else if (stat == "VIT")
    {
        amt = (Number(build.weapon.vit) + Number(build.ability.vit) + Number(build.armor.vit) + Number(build.ring.vit) + stStats[6] + build.vitup);
        if (amt >= 0)
            str += "+";
        str += amt + ")";
        return str;
    }
    else if (stat == "WIS")
    {
        amt = (Number(build.weapon.wis) + Number(build.ability.wis) + Number(build.armor.wis) + Number(build.ring.wis) + stStats[7] + build.wisup);
        if (amt >= 0)
            str += "+";
        str += amt + ")";
        return str;
    }
}

// this gets the st stats for all stats at once which means it's more efficient than the java version 
// or it would be if i used it efficiently. i just realized i run this every time i do getStat() lol
function evaluateST(build)
{
    let activeSets = [];

    stStats = [0, 0, 0, 0, 0, 0, 0, 0];

    for (let i = 0; i < sets.length; i++)
    {
        if (build.weapon.setName == sets[i].name || build.ability.setName == sets[i].name || build.armor.setName == sets[i].name || build.ring.setName == sets[i].name)
        {
            activeSets.push(sets[i])
        }
    }

    // this is my genius move where i am very smart and do it this way instead of the dumb way the java version did it
    for (let i = 0; i < activeSets.length; i++)
    {
        let srp = 0;
        if (activeSets[i].setpieces.includes(build.weapon.nameCode))
            srp += 1;
        if (activeSets[i].setpieces.includes(build.ability.nameCode))
            srp += 1;
        if (activeSets[i].setpieces.includes(build.armor.nameCode))
            srp += 1;
        if (activeSets[i].setpieces.includes(build.ring.nameCode))
            srp += 1;
        if (srp > 1)
        {
            stStats[0] += activeSets[i].hp2;
            stStats[1] += activeSets[i].mp2;
            stStats[2] += activeSets[i].atk2;
            stStats[3] += activeSets[i].def2;
            stStats[4] += activeSets[i].spd2;
            stStats[5] += activeSets[i].dex2;
            stStats[6] += activeSets[i].vit2;
            stStats[7] += activeSets[i].wis2;
        }
        if (srp > 2)
        {
            stStats[0] += activeSets[i].hp3;
            stStats[1] += activeSets[i].mp3;
            stStats[2] += activeSets[i].atk3;
            stStats[3] += activeSets[i].def3;
            stStats[4] += activeSets[i].spd3;
            stStats[5] += activeSets[i].dex3;
            stStats[6] += activeSets[i].vit3;
            stStats[7] += activeSets[i].wis3;
        }
        if (srp > 3)
        {
            stStats[0] += activeSets[i].hp4;
            stStats[1] += activeSets[i].mp4;
            stStats[2] += activeSets[i].atk4;
            stStats[3] += activeSets[i].def4;
            stStats[4] += activeSets[i].spd4;
            stStats[5] += activeSets[i].dex4;
            stStats[6] += activeSets[i].vit4;
            stStats[7] += activeSets[i].wis4;
        }
    }
}

// i don't know how to do type conversion in javascript given that they don't seem to
// have a type to begin with.
function makeItem(si)
{
    // im a genius for doing this instead of something different
    si = si.substring(si.indexOf("<Item>"), si.indexOf("</Item>"));

    let name = si.substring(si.indexOf("<Name>")+6, si.indexOf("</Name>"));
    let description = si.substring(si.indexOf("<Description>")+13, si.indexOf("</Description>"));
    let tier = si.substring(si.indexOf("<Tier>")+6, si.indexOf("</Tier>"));
    let fileName = si.substring(si.indexOf("<Filename>")+10, si.indexOf("</Filename>"));
    let row = si.substring(si.indexOf("<Row>")+5, si.indexOf("</Row>"));
    let column = si.substring(si.indexOf("<Column>")+8, si.indexOf("</Column>"));
    let setName = si.substring(si.indexOf("<SetName>")+9, si.indexOf("</SetName>"));
    let slotType = si.substring(si.indexOf("<SlotType>")+10, si.indexOf("</SlotType>"));
    let hp = si.substring(si.indexOf("<HP>")+4, si.indexOf("</HP>"));
    let mp = si.substring(si.indexOf("<MP>")+4, si.indexOf("</MP>"));
    let atk = si.substring(si.indexOf("<ATK>")+5, si.indexOf("</ATK>"));
    let def = si.substring(si.indexOf("<DEF>")+5, si.indexOf("</DEF>"));
    let spd = si.substring(si.indexOf("<SPD>")+5, si.indexOf("</SPD>"));
    let dex = si.substring(si.indexOf("<DEX>")+5, si.indexOf("</DEX>"));
    let vit = si.substring(si.indexOf("<VIT>")+5, si.indexOf("</VIT>"));
    let wis = si.substring(si.indexOf("<WIS>")+5, si.indexOf("</WIS>"));
    let fame = si.substring(si.indexOf("<Fame>")+6, si.indexOf("</Fame>"));
    let defIgnore = si.includes("</DefIgnore>");
    let multiHit = si.includes("</MultiHit>");
    let soulbound = si.includes("</Soulbound>");
    let passesCover = si.includes("</PassesCover");
    let parametric = si.includes("</Parametric>");
    let boomerang = si.includes("</Boomerang>");
    let baseDamage = si.substring(si.indexOf("<BaseDamage>")+12, si.indexOf("</BaseDamage>"));
    let maxDamage = si.substring(si.indexOf("<MaxDamage>")+11, si.indexOf("</MaxDamage>"));
    let rof = si.substring(si.indexOf("<RateOfFire>")+12, si.indexOf("</RateOfFire>"));
    let shots = si.substring(si.indexOf("<Shots>")+7, si.indexOf("</Shots>"));
    let wavy = si.includes("</Wavy>");
    let amplitude = si.substring(si.indexOf("<Amplitude>")+11, si.indexOf("</Amplitude>"));
    let frequency = si.substring(si.indexOf("<Frequency>")+11, si.indexOf("</Frequency>"));
    let arc = si.substring(si.indexOf("<Arc>")+5, si.indexOf("</Arc>"));
    let projectileLifetime = si.substring(si.indexOf("<Lifetime>")+10, si.indexOf("</Lifetime>"));
    let projectileSpeed = si.substring(si.indexOf("<Speed>")+7, si.indexOf("</Speed>"));
    let toolTip = si.substring(si.indexOf("<ToolTip>")+9, si.indexOf("</ToolTip>"));
    let nameCode = si.substring(si.indexOf("<NameCode>")+10, si.indexOf("</NameCode"));

    const tit = new Item(name, description, tier, fileName, row, column, setName, slotType, 
        hp, mp, atk, def, spd, dex, vit, wis, fame, defIgnore, multiHit, soulbound,
        passesCover, parametric, boomerang, baseDamage, maxDamage, rof, shots, wavy,
        amplitude, frequency, arc, projectileLifetime, projectileSpeed, toolTip, nameCode);
    return tit;
}

function drawDescription(p, ri)
{
    // obvious exit button
    closeDescription.drawButton();
    
    g.fillStyle = 'rgb(50, 50, 50)';
    g.fillRect(2*unit, 13*unit, 45*unit, 48*unit);
    g.font = (2.4*unit).toString().concat("px Courier New");
    g.fillStyle = 'rgb(0, 0, 0)';
    g.strokeRect(2*unit, 13*unit, 45*unit, 48*unit);
    g.fillStyle = 'rgb(255, 255, 255)';
    if (p.name.length < 26)
        g.fillText(p.name, 3*unit, 15*unit);
    else
    {
        g.font = (1.6*unit).toString().concat("px Courier New");
        g.fillText(p.name, 3*unit, 15*unit);
        g.font = (2.4*unit).toString().concat("px Courier New");
    }
    if (p.tier == "UT")
    {
        g.fillStyle = 'rgb(157, 0, 255)';
    }
    else if (p.tier == "ST")
    {
        g.fillStyle = 'rgb(255, 160, 0)';
    }
    else
    {
        g.fillStyle = 'rgb(255, 255, 255)';
    }
    g.fillText(p.tier, 42*unit, 15*unit);
    g.font = (1.6*unit).toString().concat("px Courier New");
    g.fillStyle = 'rgb(200, 200, 200)';
    let dd = p.description;
    let line = 0;
    while (dd != null)
    {
        // i changed this from dd.length to dd.indexOf("\n") and that fixed the haiku issues
        if (dd.includes("\n") && dd.indexOf("\n")<45)
        {
            g.fillText(dd.substring(0, dd.indexOf("\n")), 3*unit, (18*unit)+(1.6*line*unit));
            dd = dd.substring(dd.indexOf("\n")+1, dd.length);
            line += 1;
        }
        else if (dd.length>45)
        {
            let spindex = dd.lastIndexOf(" ", 45);
            g.fillText(dd.substring(0,spindex), 3*unit, (18*unit)+(1.6*line*unit));
            dd = dd.substring(spindex+1,dd.length);
            line += 1;
        }
        else
        {
            g.fillText(dd, 3*unit, (18*unit)+(1.6*line*unit));
            dd = null;
            line +=1
        }
    }
    // maybe option to collapse/expand tooltip
    dd = p.toolTip;
    while (dd != "")
    {
        g.fillStyle = 'rgb(200, 200, 0)';
        let ee = dd.substring(dd.indexOf("name=\"")+6, dd.indexOf("\"", dd.indexOf("name=\"")+6)) +": ";
        let sline = line;

        g.fillStyle = 'rgb(200, 200, 200)';
        ff = dd.substring(dd.indexOf("description=\"")+13, dd.indexOf("\"", dd.indexOf("description=\"")+13));
        ff = ee + ff;
        while (ff != null)
        {
            if (ff.length>45)
            {
                let spindex = ff.lastIndexOf(" ", 45);
                g.fillText(ff.substring(0, spindex), 3*unit, (20*unit)+(1.6*line*unit));
                ff = ff.substring(spindex+1,ff.length);
            }
            else
            {
                g.fillText(ff, 3*unit, (20*unit)+(1.6*line*unit));
                ff = null;
            }
            line += 1;
        }

        g.fillStyle = 'rgb(200, 200, 0)';
        g.fillText(ee, 3*unit, (20*unit)+(1.6*sline*unit));

        g.fillStyle = 'rgb(200, 200, 200)';

        if (dd.indexOf("name=\"") > dd.indexOf("description=\""))
            dd = dd.substring(dd.indexOf("\"", dd.indexOf("name=\"")+6));
        else
            dd = dd.substring(dd.indexOf("\"", dd.indexOf("description=\"")+13));
        
        if (!dd.includes("description"))
        {
            dd = "";
        }
    }

    line += 1.6;
    if (p.baseDamage != 0 && p.maxDamage != 0)
    {
        g.fillText("Damage: " + p.baseDamage + " - " + p.maxDamage, 3*unit, (20*unit)+(1.6*line*unit));
    }
    if (p.shots != 0 && p.shots != 1)
    {
        g.fillText("Shots: " + p.shots, 25*unit, (20*unit)+(1.6*line*unit));
    }
    line += 1.6;
    if (p.projectileSpeed * p.projectileLifetime > 0)
    {
        g.fillText("Range: " + (p.projectileSpeed*p.projectileLifetime)/10000, 3*unit, (20*unit)+(1.6*line*unit));
    }
    if (p.rof != 0)
    {
        g.fillText("Rate of fire: " + p.rof + "%", 25*unit, (20*unit)+(1.6*line*unit));
    }
    line += 2;
    g.fillStyle = 'rgb(200, 200, 0)';
    if (p.defIgnore)
    {
        g.fillText("Ignores Defense of target", 3*unit, (20+1.6*line)*unit);
        line += 1.2;
    }
    if (p.multiHit)
    {
        g.fillText("Shots hit multiple targets", 3*unit, (20+1.6*line)*unit);
        line += 1.2;
    }
    if (p.passesCover)
    {
        g.fillText("Shots pass through obstacles", 3*unit, (20+1.6*line)*unit);
        line += 1.2;
    }
    if (p.parametric)
    {
        g.fillText("Parametric", 3*unit, (20+1.6*line)*unit);
        line += 1.2;
    }
    if (p.boomerang)
    {
        g.fillText("Boomerang", 3*unit, (20+1.6*line)*unit);
        line += 1.2;
    }
    if (p.wavy)
    {
        g.fillText("Wavy shots", 3*unit, (20+1.6*line)*unit);
        line += 1.2;
    }

    drawStat(p.hp, "HP", 0, 0);
    drawStat(p.mp, "MP", 0, 3);
    drawStat(p.atk, "ATK", 10, 0);
    drawStat(p.def, "DEF", 10, 3);
    drawStat(p.spd, "SPD", 20, 0);
    drawStat(p.dex, "DEX", 20, 3);
    drawStat(p.vit, "VIT", 30, 0);
    drawStat(p.wis, "WIS", 30, 3);
    
    
    g.fillStyle = 'rgb(255, 255,255)';
    if (p.fame > 0)
    {
        g.fillText("Fame Bonus: " + p.fame + "%", 6*unit, 60*unit);
    }
    if (p.soulbound)
    {
        g.fillText("Soulbound", 30*unit, 60*unit);
    }
    else
    {
        g.fillText("Tradeable", 30*unit, 60*unit);
    }
    /*
    g.fillStyle = 'rgb(100, 100, 100)'
    g.fillRect(2.5*unit, 58*unit, 2.5*unit, 2.5*unit);
    g.fillRect(44*unit, 58*unit, 2.5*unit, 2.5*unit);
    g.fillStyle = 'rgb(0, 0, 0)';
    g.strokeRect(2.5*unit, 58*unit, 2.5*unit, 2.5*unit);
    g.strokeRect(44*unit, 58*unit, 2.5*unit, 2.5*unit);
    g.fillText("P", 3.25*unit, 59.75*unit);
    g.fillText("N", 44.75*unit, 59.75*unit);
    */

    if (weaponExpanded)
        drawOptions(weapons, ri);
    else if (abilityExpanded)
        drawOptions(abilities, ri);
    else if (armorExpanded)
        drawOptions(armors, ri);
    else if (ringExpanded)
        drawOptions(rings, ri);
}

function drawOptions(options, ri)
{
    // the zone (here for reference)
    // g.fillRect(48*unit, 13*unit, 27*unit, 48*unit);

    optionLocations = [];

    // this should decide rows and columns
    let rownum = 0;
    let colnum = 0;
    for (let i = options.length; i > 0; i--)
    {
        for (let j = options.length; j > 0; j--)
        {
            if (j > i)
            {
                if (i * j > options.length)
                {
                    if (2*i > j)
                    {
                        rownum = j;
                        colnum = i;
                    }
                }
            }
        }
    }
    if (rownum == 0 || colnum == 0)
    {
        rownum = 3;
        colnum = 3;
    }

    let scale = 27/colnum;
    if ((48/rownum) < scale)
    {
        scale = 48/rownum;
    }

    scale -= 1;

    // draws all
    let xoffset = 0;
    let yoffset = 0;
    for (let i = 0; i < options.length; i++)
    {
        g.drawImage(options[i].getSourceFile(), 8*options[i].column, 8*options[i].row, 8, 8, (48+xoffset)*unit, (13+yoffset)*unit, scale*unit, scale*unit);
        optionLocations.push([(48+xoffset)*unit, (13+yoffset)*unit, (48+xoffset+scale)*unit, (13+yoffset+scale)*unit]);
        g.strokeStyle = 'rgb(20, 200, 20)';
        if (i == ri)
        {
            g.lineWidth = 3;
            g.strokeRect((48+xoffset)*unit, (13+yoffset)*unit, scale*unit,scale*unit);
            g.lineWidth = 1;
        }
        else
        {
            g.strokeStyle = 'rgb(80, 80, 80)';
            g.strokeRect((48+xoffset)*unit, (13+yoffset)*unit, scale*unit, scale*unit);
        }
        g.strokeStyle = 'rgb(0, 0, 0)';
        yoffset += scale + 1;
        if (yoffset > (48-scale))
        {
            xoffset += scale + 1;
            yoffset = 0;
        }
    }
}

function clickOptions(x,y)
{
    for (let i = 0; i < optionLocations.length; i++)
    {
        if (x >= optionLocations[i][0] && x <= optionLocations[i][2] && y >= optionLocations[i][1] && y <= optionLocations[i][3])
        {
            return i;
        }
    }
    return -1;
}

// it's semi-silly to make this a function but whatever.
// it makes a certain amount of sense bearing in mind that you can tell there's
// multiple layers of text and maybe i want to fix that
function drawStat(stat, statName, xoffset, yoffset)
{
    g.fillStyle = 'rgb(255, 255, 255)';
    if (stat == 0)
    {
        g.fillText(statName + ": 0", (3+xoffset)*unit, (53+yoffset)*unit);
    }
    else if (stat > 0)
    {
        g.fillStyle = 'rgb(0, 255, 0)';
        g.fillText(statName + ": +" + stat, (3+xoffset)*unit, (53+yoffset)*unit);
    }
    else if (stat < 0)
    {
        g.fillStyle = 'rgb(255, 0, 0)';
        g.fillText(statName + ": " + stat, (3+xoffset)*unit, (53+yoffset)*unit);
    }
    g.fillStyle = 'rgb(200, 200, 0)';
    g.fillText(statName + ":", (3+xoffset)*unit, (53+yoffset)*unit);
}

// i can't figure out how to load from the web in javascript
// i can't figure out how to read a file in javascript.
// ...
// so i did this dumb shit
// basically i used java to create code for javascript.
// which is bad practice.
// but i would never accidentally create skynet so i think it's ok.
function pullGear() {
    var s = ''

    s = '<Item><Name>(empty slot)</Name><NameCode></NameCode><Description></Description><Tier></Tier><Filename></Filename><Row>0</Row><Column>0</Column><SetName></SetName><SlotType>10</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Energy Staff</Name><NameCode>0xa97</NameCode><Description>A magical wooden staff topped with a white crystal.</Description><Tier>T0</Tier><Filename>lofiObj5</Filename><Row>7</Row><Column>0</Column><SetName></SetName><SlotType>17</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>10</BaseDamage><MaxDamage>25</MaxDamage><RateOfFire>100</RateOfFire><Shots>2</Shots><Amplitude>0.5</Amplitude><Frequency>2.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>475.0</Lifetime><Speed>180.0</Speed><ToolTip></ToolTip></Item><Item><Name>Firebrand Staff</Name><NameCode>0xa98</NameCode><Description>A staff imbued with potent magical fire.</Description><Tier>T1</Tier><Filename>lofiObj5</Filename><Row>7</Row><Column>1</Column><SetName></SetName><SlotType>17</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>10</BaseDamage><MaxDamage>30</MaxDamage><RateOfFire>100</RateOfFire><Shots>2</Shots><Amplitude>0.5</Amplitude><Frequency>2.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>475.0</Lifetime><Speed>180.0</Speed><ToolTip></ToolTip></Item><Item><Name>Comet Staff</Name><NameCode>0xa99</NameCode><Description>A staff charged with the icy powers of the heavens.</Description><Tier>T2</Tier><Filename>lofiObj5</Filename><Row>7</Row><Column>2</Column><SetName></SetName><SlotType>17</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>15</BaseDamage><MaxDamage>35</MaxDamage><RateOfFire>100</RateOfFire><Shots>2</Shots><Amplitude>0.5</Amplitude><Frequency>2.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>475.0</Lifetime><Speed>180.0</Speed><ToolTip></ToolTip></Item><Item><Name>Serpentine Staff</Name><NameCode>0xa9a</NameCode><Description>A staff powered by the magic of Stheno\'s minions.</Description><Tier>T3</Tier><Filename>lofiObj5</Filename><Row>7</Row><Column>3</Column><SetName></SetName><SlotType>17</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>20</BaseDamage><MaxDamage>40</MaxDamage><RateOfFire>100</RateOfFire><Shots>2</Shots><Amplitude>0.5</Amplitude><Frequency>2.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>475.0</Lifetime><Speed>180.0</Speed><ToolTip></ToolTip></Item><Item><Name>Meteor Staff</Name><NameCode>0xa9b</NameCode><Description>A staff that harnesses the energy of shooting stars.</Description><Tier>T4</Tier><Filename>lofiObj5</Filename><Row>7</Row><Column>4</Column><SetName></SetName><SlotType>17</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>25</BaseDamage><MaxDamage>45</MaxDamage><RateOfFire>100</RateOfFire><Shots>2</Shots><Amplitude>0.5</Amplitude><Frequency>2.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>475.0</Lifetime><Speed>180.0</Speed><ToolTip></ToolTip></Item><Item><Name>Slayer Staff</Name><NameCode>0xa9c</NameCode><Description>A powerful staff crafted by demons for waging war on mortals.</Description><Tier>T5</Tier><Filename>lofiObj5</Filename><Row>7</Row><Column>5</Column><SetName></SetName><SlotType>17</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>35</BaseDamage><MaxDamage>55</MaxDamage><RateOfFire>100</RateOfFire><Shots>2</Shots><Amplitude>0.5</Amplitude><Frequency>2.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>475.0</Lifetime><Speed>180.0</Speed><ToolTip></ToolTip></Item><Item><Name>Avenger Staff</Name><NameCode>0xa9d</NameCode><Description>A slender felwood staff pulsing with auras of vengeance and justice.</Description><Tier>T6</Tier><Filename>lofiObj5</Filename><Row>7</Row><Column>6</Column><SetName></SetName><SlotType>17</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>40</BaseDamage><MaxDamage>70</MaxDamage><RateOfFire>100</RateOfFire><Shots>2</Shots><Amplitude>0.5</Amplitude><Frequency>2.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>475.0</Lifetime><Speed>180.0</Speed><ToolTip></ToolTip></Item><Item><Name>Staff of Destruction</Name><NameCode>0xa9e</NameCode><Description>An ancient knurlwood staff crackling with power and exuding thin gray vapors.</Description><Tier>T7</Tier><Filename>lofiObj5</Filename><Row>7</Row><Column>7</Column><SetName></SetName><SlotType>17</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>45</BaseDamage><MaxDamage>85</MaxDamage><RateOfFire>100</RateOfFire><Shots>2</Shots><Amplitude>0.5</Amplitude><Frequency>2.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>475.0</Lifetime><Speed>180.0</Speed><ToolTip></ToolTip></Item><Item><Name>Staff of Horror</Name><NameCode>0xa9f</NameCode><Description>A mysterious runewood staff decorated with horrific figures.</Description><Tier>T8</Tier><Filename>lofiObj5</Filename><Row>7</Row><Column>8</Column><SetName></SetName><SlotType>17</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>1</Fame><BaseDamage>50</BaseDamage><MaxDamage>90</MaxDamage><RateOfFire>100</RateOfFire><Shots>2</Shots><Amplitude>0.5</Amplitude><Frequency>2.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>475.0</Lifetime><Speed>180.0</Speed><ToolTip></ToolTip></Item><Item><Name>Staff of Necrotic Arcana</Name><NameCode>0xaa0</NameCode><Description>A golden staff imbued with the powers of death magic.</Description><Tier>T9</Tier><Filename>lofiObj5</Filename><Row>7</Row><Column>9</Column><SetName></SetName><SlotType>17</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>1</Fame><BaseDamage>50</BaseDamage><MaxDamage>95</MaxDamage><RateOfFire>100</RateOfFire><Shots>2</Shots><Amplitude>0.5</Amplitude><Frequency>2.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>475.0</Lifetime><Speed>180.0</Speed><ToolTip></ToolTip></Item><Item><Name>Staff of Diabolic Secrets</Name><NameCode>0xaa1</NameCode><Description>An imposing golden staff of tremendous otherworldly power.</Description><Tier>T10</Tier><Filename>lofiObj5</Filename><Row>7</Row><Column>10</Column><SetName></SetName><SlotType>17</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>2</Fame><BaseDamage>55</BaseDamage><MaxDamage>95</MaxDamage><RateOfFire>100</RateOfFire><Shots>2</Shots><Amplitude>0.5</Amplitude><Frequency>2.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>475.0</Lifetime><Speed>180.0</Speed><ToolTip></ToolTip></Item><Item><Name>Staff of Astral Knowledge</Name><NameCode>0xaa2</NameCode><Description>A splendid golden staff of astonishing power, bathed in light and brimming with magical energy.</Description><Tier>T11</Tier><Filename>lofiObj5</Filename><Row>7</Row><Column>11</Column><SetName></SetName><SlotType>17</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>3</Fame><BaseDamage>55</BaseDamage><MaxDamage>100</MaxDamage><RateOfFire>100</RateOfFire><Shots>2</Shots><Amplitude>0.5</Amplitude><Frequency>2.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>475.0</Lifetime><Speed>180.0</Speed><ToolTip></ToolTip></Item><Item><Name>Staff of the Cosmic Whole</Name><NameCode>0xb08</NameCode><Description>A golden staff of transcendent understanding, made from crystals present at the formation of the universe.</Description><Tier>T12</Tier><Filename>lofiObj5new</Filename><Row>7</Row><Column>12</Column><SetName></SetName><SlotType>17</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame><BaseDamage>60</BaseDamage><MaxDamage>100</MaxDamage><RateOfFire>100</RateOfFire><Shots>2</Shots><Amplitude>0.5</Amplitude><Frequency>2.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>475.0</Lifetime><Speed>180.0</Speed><ToolTip></ToolTip></Item><Item><Name>Staff of the Vital Unity</Name><NameCode>0x9d1</NameCode><Description>A golden staff of elysian consciousness, shining with the base power of empyrean truths.</Description><Tier>T13</Tier><Filename>lofiObj5new</Filename><Row>7</Row><Column>13</Column><SetName></SetName><SlotType>17</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>5</Fame></Soulbound><BaseDamage>60</BaseDamage><MaxDamage>105</MaxDamage><RateOfFire>100</RateOfFire><Shots>2</Shots><Amplitude>0.5</Amplitude><Frequency>2.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>475.0</Lifetime><Speed>180.0</Speed><ToolTip></ToolTip></Item><Item><Name>Staff of the Fundamental Core</Name><NameCode>0x910</NameCode><Description>An otherworldly staff of omnipresent elation, embodied of cardinal essence and the power of deathless peace.</Description><Tier>T14</Tier><Filename>lofiObj5new</Filename><Row>7</Row><Column>14</Column><SetName></SetName><SlotType>17</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>6</Fame></Soulbound><BaseDamage>65</BaseDamage><MaxDamage>105</MaxDamage><RateOfFire>100</RateOfFire><Shots>2</Shots><Amplitude>0.5</Amplitude><Frequency>2.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>475.0</Lifetime><Speed>180.0</Speed><ToolTip></ToolTip></Item><Item><Name>Staff of Extreme Prejudice</Name><NameCode>0xc03</NameCode><Description>Once the most powerful staff in existence; a crack in its frame has rendered it incapable of focusing fire. It remains uniquely deadly.</Description><Tier>UT</Tier><Filename>lofiObj2</Filename><Row>6</Row><Column>11</Column><SetName></SetName><SlotType>17</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>6</Fame></Soulbound><BaseDamage>80</BaseDamage><MaxDamage>95</MaxDamage><RateOfFire>40</RateOfFire><Shots>10</Shots><Amplitude>0.15</Amplitude><Frequency>2.0</Frequency><ArcGap>36.0</ArcGap><Lifetime>364.0</Lifetime><Speed>110.0</Speed><ToolTip></ToolTip></Item><Item><Name>Staff of the Crystal Serpent</Name><NameCode>0xc15</NameCode><Description>An ancient staff used both for sacrifice and communion with the gods.</Description><Tier>UT</Tier><Filename>lofiObj2</Filename><Row>0</Row><Column>10</Column><SetName></SetName><SlotType>17</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>2</Fame></Soulbound><BaseDamage>60</BaseDamage><MaxDamage>70</MaxDamage><RateOfFire>110</RateOfFire><Shots>2</Shots><Amplitude>0.5</Amplitude><Frequency>2.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>500.0</Lifetime><Speed>180.0</Speed><ToolTip></ToolTip></Item><Item><Name>Anatis Staff</Name><NameCode>0xc24</NameCode><Description>A staff that channels the ultimate force of Anatis.</Description><Tier>UT</Tier><Filename>lofiObj2</Filename><Row>5</Row><Column>13</Column><SetName></SetName><SlotType>17</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>2</Fame></Soulbound><BaseDamage>80</BaseDamage><MaxDamage>100</MaxDamage><RateOfFire>25</RateOfFire><Shots>1</Shots><Amplitude>1.0</Amplitude><Frequency>1.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>3000.0</Lifetime><Speed>25.0</Speed><ToolTip></ToolTip></Item><Item><Name>KoalaPOW</Name><NameCode>0xcea</NameCode><Description>Eucalyptus can be incredibly effective at looking awesome.</Description><Tier>UT</Tier><Filename>lofiObj3</Filename><Row>66</Row><Column>9</Column><SetName></SetName><SlotType>17</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame></Soulbound><BaseDamage>40</BaseDamage><MaxDamage>40</MaxDamage><RateOfFire>40</RateOfFire><Shots>6</Shots><Amplitude>0.15</Amplitude><Frequency>2.0</Frequency><ArcGap>36.0</ArcGap><Lifetime>364.0</Lifetime><Speed>110.0</Speed><ToolTip></ToolTip></Item><Item><Name>Staff of Adoration</Name><NameCode>0x228b</NameCode><Description>The unusual shots that this staff fires have been known to bind the hearts of your foes for all eternity, or at least until death do you part.</Description><Tier>UT</Tier><Filename>lofiObj3</Filename><Row>74</Row><Column>5</Column><SetName></SetName><SlotType>17</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>1</Fame><BaseDamage>50</BaseDamage><MaxDamage>95</MaxDamage><RateOfFire>100</RateOfFire><Shots>2</Shots><Amplitude>0.5</Amplitude><Frequency>2.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>475.0</Lifetime><Speed>180.0</Speed><ToolTip></ToolTip></Item><Item><Name>Staff of the Rising Sun</Name><NameCode>0x2299</NameCode><Description>A staff that glows with the warmth and color of the rising sun.</Description><Tier>UT</Tier><Filename>lofiObj3</Filename><Row>76</Row><Column>6</Column><SetName></SetName><SlotType>17</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame><BaseDamage>60</BaseDamage><MaxDamage>100</MaxDamage><RateOfFire>100</RateOfFire><Shots>2</Shots><Amplitude>0.5</Amplitude><Frequency>2.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>475.0</Lifetime><Speed>180.0</Speed><ToolTip>         <EffectInfo name="Set" description="Summer Solstice"/>      </ToolTip></Item><Item><Name>Barely Attuned Magic Thingy</Name><NameCode>0x2326</NameCode><Description>Made by a pretty lazy wizard. Hope it makes something worthwhile.</Description><Tier>UT</Tier><Filename>lofiObj3</Filename><Row>77</Row><Column>2</Column><SetName></SetName><SlotType>17</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>10</BaseDamage><MaxDamage>20</MaxDamage><RateOfFire>30</RateOfFire><Shots>7</Shots><Amplitude>0.5</Amplitude><Frequency>1.0</Frequency><ArcGap>90.0</ArcGap><Lifetime>1000.0</Lifetime><Speed>50.0</Speed><ToolTip></ToolTip></Item><Item><Name>Staff of Horrific Knowledge</Name><NameCode>0xf13</NameCode><Description>It seems to dispense special runes upon use. Perhaps...some things are better left unknown.</Description><Tier>UT</Tier><Filename>lofiObj3</Filename><Row>80</Row><Column>3</Column><SetName></SetName><SlotType>17</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>3</Fame><BaseDamage>55</BaseDamage><MaxDamage>100</MaxDamage><RateOfFire>100</RateOfFire><Shots>2</Shots><Amplitude>0.5</Amplitude><Frequency>2.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>475.0</Lifetime><Speed>180.0</Speed><ToolTip></ToolTip></Item><Item><Name>Staff of Esben</Name><NameCode>0x766</NameCode><Description>Perhaps all that remains of Esben, whoever he was.\n\nSprite Credits: Pfiffel</Description><Tier>UT</Tier><Filename>lofiObj3</Filename><Row>85</Row><Column>0</Column><SetName></SetName><SlotType>17</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>3</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>6</Fame></MultiHit></Soulbound><BaseDamage>70</BaseDamage><MaxDamage>90</MaxDamage><RateOfFire>80</RateOfFire><Shots>2</Shots><Amplitude>1.35</Amplitude><Frequency>0.5</Frequency><ArcGap>0.0</ArcGap><Lifetime>450.0</Lifetime><Speed>160.0</Speed><ToolTip></ToolTip></Item><Item><Name>The Phylactery</Name><NameCode>0x2363</NameCode><Description>I was a fool before, but now everything is so clear. The phylactery speaks to me, knows me, protects me.</Description><Tier>ST</Tier><Filename>lofiObj3</Filename><Row>81</Row><Column>4</Column><SetName>Phylactery Mystic Set</SetName><SlotType>17</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>2</VIT><WIS>0</WIS><Fame>4</Fame><BaseDamage>80</BaseDamage><MaxDamage>100</MaxDamage><RateOfFire>80</RateOfFire><Shots>2</Shots><Amplitude>0.5</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>450.0</Lifetime><Speed>160.0</Speed><ToolTip></ToolTip></Item><Item><Name>Legacy Sentient Staff</Name><NameCode>0x21a7</NameCode><Description>While it may be alive, it can\'t speak. But, it CAN kill.</Description><Tier>ST</Tier><Filename>lofiObj3</Filename><Row>82</Row><Column>8</Column><SetName>Legacy Twilight Archmage Set</SetName><SlotType>17</SlotType><HP>10</HP><MP>5</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>10</WIS><Fame>4</Fame><BaseDamage>50</BaseDamage><MaxDamage>110</MaxDamage><RateOfFire>100</RateOfFire><Shots>2</Shots><Amplitude>1.1</Amplitude><Frequency>1.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>553.0</Lifetime><Speed>150.0</Speed><ToolTip></ToolTip></Item><Item><Name>Sentient Staff</Name><NameCode>0x21f3</NameCode><Description>While it may be alive, it can\'t speak. But, it CAN kill.</Description><Tier>ST</Tier><Filename>lofiObj3</Filename><Row>82</Row><Column>8</Column><SetName>Twilight Archmage Set</SetName><SlotType>17</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame></Soulbound><BaseDamage>50</BaseDamage><MaxDamage>110</MaxDamage><RateOfFire>100</RateOfFire><Shots>2</Shots><Amplitude>0.5</Amplitude><Frequency>0.48</Frequency><ArcGap>0.0</ArcGap><Lifetime>415.0</Lifetime><Speed>200.0</Speed><ToolTip></ToolTip></Item><Item><Name>Edictum Praetoris</Name><NameCode>0x9dc</NameCode><Description>My staff led me to a strange arena, which seemed to have a dark aura about it.</Description><Tier>ST</Tier><Filename>d3LofiObjEmbed</Filename><Row>15</Row><Column>8</Column><SetName>Hollow King Necromancer Set</SetName><SlotType>17</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>5</Fame></Soulbound><BaseDamage>40</BaseDamage><MaxDamage>105</MaxDamage><RateOfFire>75</RateOfFire><Shots>3</Shots><Amplitude>0.3</Amplitude><Frequency>1.0</Frequency><ArcGap>3.0</ArcGap><Lifetime>570.0</Lifetime><Speed>150.0</Speed><ToolTip></ToolTip></Item><Item><Name>Staff of Yuletide Carols</Name><NameCode>0x237e</NameCode><Description>Fa la la la la, la la la la.</Description><Tier>UT</Tier><Filename>lofiObj3</Filename><Row>85</Row><Column>11</Column><SetName></SetName><SlotType>17</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>3</Fame><BaseDamage>55</BaseDamage><MaxDamage>100</MaxDamage><RateOfFire>100</RateOfFire><Shots>2</Shots><Amplitude>0.5</Amplitude><Frequency>2.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>475.0</Lifetime><Speed>180.0</Speed><ToolTip></ToolTip></Item><Item><Name>Staff of Iceblast</Name><NameCode>0x16d7</NameCode><Description>A frozen staff, used for creating powerful chilly blasts around the user.\n\nSprite Credits: Poshun</Description><Tier>UT</Tier><Filename>d2LofiObjEmbed</Filename><Row>1</Row><Column>10</Column><SetName></SetName><SlotType>17</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>6</Fame></Soulbound><BaseDamage>80</BaseDamage><MaxDamage>95</MaxDamage><RateOfFire>40</RateOfFire><Shots>10</Shots><Amplitude>0.15</Amplitude><Frequency>2.0</Frequency><ArcGap>36.0</ArcGap><Lifetime>364.0</Lifetime><Speed>110.0</Speed><ToolTip></ToolTip></Item><Item><Name>Staff of Unholy Sacrifice</Name><NameCode>0x0244</NameCode><Description>A commanding staff used by vile cult leaders. It has a strange force inside it that prevents it from facing forward of the user.</Description><Tier>UT</Tier><Filename>lostHallsObjects8x8</Filename><Row>2</Row><Column>8</Column><SetName></SetName><SlotType>17</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>6</Fame></MultiHit></Soulbound><BaseDamage>130</BaseDamage><MaxDamage>155</MaxDamage><RateOfFire>55</RateOfFire><Shots>4</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>345.0</ArcGap><Lifetime>700.0</Lifetime><Speed>115.0</Speed><ToolTip>         <EffectInfo name="" description="Shoots backwards"/>      </ToolTip></Item><Item><Name>Frosty\'s Walking Stick</Name><NameCode>0x1acc</NameCode><Description>Imbued with the power of winter.</Description><Tier>UT</Tier><Filename>oryxHordeObjects8x8</Filename><Row>12</Row><Column>2</Column><SetName></SetName><SlotType>17</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>7</Fame></Soulbound><BaseDamage>60</BaseDamage><MaxDamage>100</MaxDamage><RateOfFire>100</RateOfFire><Shots>2</Shots><Amplitude>0.5</Amplitude><Frequency>2.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>475.0</Lifetime><Speed>180.0</Speed><ToolTip></ToolTip></Item><Item><Name>Spirit Staff</Name><NameCode>0x840</NameCode><Description>A staff constructed from the bark of trees exclusively found in the Magic Woods, charged with the lively spirits of legendary heroes.</Description><Tier>UT</Tier><Filename>magicWoodsObjects8x8</Filename><Row>2</Row><Column>15</Column><SetName></SetName><SlotType>17</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>5</Fame></Soulbound><BaseDamage>30</BaseDamage><MaxDamage>70</MaxDamage><RateOfFire>165</RateOfFire><Shots>2</Shots><Amplitude>0.8</Amplitude><Frequency>1.5</Frequency><ArcGap>0.0</ArcGap><Lifetime>512.0</Lifetime><Speed>165.0</Speed><ToolTip></ToolTip></Item><Item><Name>Tezcacoatl\'s Tail</Name><NameCode>0x36a2</NameCode><Description>Adult male basilisks are apex predators, and at full maturity their tails gain the unique ability to release piercing acid from the tip.</Description><Tier>UT</Tier><Filename>secludedThicketObjects8x8</Filename><Row>3</Row><Column>15</Column><SetName></SetName><SlotType>17</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>5</Fame></DefIgnore></Soulbound><BaseDamage>170</BaseDamage><MaxDamage>200</MaxDamage><RateOfFire>33</RateOfFire><Shots>2</Shots><Amplitude>0.25</Amplitude><Frequency>1.5</Frequency><ArcGap>0.0</ArcGap><Lifetime>400.0</Lifetime><Speed>225.0</Speed><ToolTip></ToolTip></Item><Item><Name>K.I.D.D. Force</Name><NameCode>0x572</NameCode><Description>A highly unstable staff engineered to expel forceful bolts of an energy component known as K.I.D.D. (Knee-deep In Dungeon Design). It\'s not great now, but allegedly the second version will be better.</Description><Tier>UT</Tier><Filename>theMachineObjects8x8</Filename><Row>6</Row><Column>4</Column><SetName></SetName><SlotType>17</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>5</Fame></Soulbound><BaseDamage>80</BaseDamage><MaxDamage>130</MaxDamage><RateOfFire>80</RateOfFire><Shots>2</Shots><Amplitude>1.5</Amplitude><Frequency>1.75</Frequency><ArcGap>40.0</ArcGap><Lifetime>2000.0</Lifetime><Speed>50.0</Speed><ToolTip></ToolTip></Item><Item><Name>Foramite Staff</Name><NameCode>0x6458</NameCode><Description>A rod composed of solid foramite, the only known material in the galaxy capable of withstanding the corrosive effects of Foraxian acid.\n\nSprite Credits: Aurum</Description><Tier>UT</Tier><Filename>d2LofiObjEmbed</Filename><Row>17</Row><Column>0</Column><SetName></SetName><SlotType>17</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>7</Fame></Soulbound><BaseDamage>30</BaseDamage><MaxDamage>70</MaxDamage><RateOfFire>165</RateOfFire><Shots>2</Shots><Amplitude>0.8</Amplitude><Frequency>1.5</Frequency><ArcGap>0.0</ArcGap><Lifetime>512.0</Lifetime><Speed>165.0</Speed><ToolTip>         <EffectInfo name="" description="Alien Gear"/>      </ToolTip></Item><Item><Name>Comet of Calamity</Name><NameCode>0x645a</NameCode><Description>An irregular fragment of a fiery comet that once passed over Malogia. Intergalatic legends know it as the herald of the great alien lord Nizos.\n\nSprite Credits: Trensient</Description><Tier>UT</Tier><Filename>d2LofiObjEmbed</Filename><Row>16</Row><Column>4</Column><SetName></SetName><SlotType>17</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>7</Fame></DefIgnore></Soulbound><BaseDamage>170</BaseDamage><MaxDamage>200</MaxDamage><RateOfFire>33</RateOfFire><Shots>2</Shots><Amplitude>0.25</Amplitude><Frequency>1.5</Frequency><ArcGap>0.0</ArcGap><Lifetime>400.0</Lifetime><Speed>225.0</Speed><ToolTip>         <EffectInfo name="" description="Alien Gear"/>      </ToolTip></Item><Item><Name>Oppressor\'s Staff</Name><NameCode>0x65f3</NameCode><Description>Initially built solely for Oryx\'s reckless use, the construction of this staff proved potent enough to mass produce for Oryx\'s champions.\n\nSprite Credits: Aurum</Description><Tier>UT</Tier><Filename>d2LofiObjEmbed</Filename><Row>21</Row><Column>12</Column><SetName></SetName><SlotType>17</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>5</Fame></Soulbound></PassesCover><BaseDamage>95</BaseDamage><MaxDamage>145</MaxDamage><RateOfFire>55</RateOfFire><Shots>2</Shots><Amplitude>0.8</Amplitude><Frequency>1.3</Frequency><ArcGap>0.0</ArcGap><Lifetime>1600.0</Lifetime><Speed>35.0</Speed><ToolTip></ToolTip></Item><Item><Name>Stygian Torch</Name><NameCode>0x6497</NameCode><Description>A blued wooden staff lit with an undying flame. Only an extraordinarily skilled sorceress can wield the fire without this attachment.\n\nSprite Credits: Aurum</Description><Tier>ST</Tier><Filename>d2LofiObjEmbed</Filename><Row>25</Row><Column>0</Column><SetName>Totalia Mystic Set</SetName><SlotType>17</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>2</VIT><WIS>0</WIS><Fame>4</Fame></Soulbound><BaseDamage>80</BaseDamage><MaxDamage>100</MaxDamage><RateOfFire>80</RateOfFire><Shots>2</Shots><Amplitude>0.5</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>450.0</Lifetime><Speed>160.0</Speed><ToolTip></ToolTip></Item><Item><Name>Supernatural Staff</Name><NameCode>0x649f</NameCode><Description>While working in a lab late one night, a wizard beheld an eerie sight.\n\nSprite Credits: Aurum</Description><Tier>ST</Tier><Filename>d2LofiObjEmbed</Filename><Row>26</Row><Column>0</Column><SetName>Paranormal Wizard Set</SetName><SlotType>17</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame></Soulbound><BaseDamage>50</BaseDamage><MaxDamage>110</MaxDamage><RateOfFire>100</RateOfFire><Shots>2</Shots><Amplitude>0.5</Amplitude><Frequency>0.48</Frequency><ArcGap>0.0</ArcGap><Lifetime>415.0</Lifetime><Speed>200.0</Speed><ToolTip></ToolTip></Item><Item><Name>Staff of Eruption</Name><NameCode>0x4b42</NameCode><Description>In the primal era of the realm, the volcanic mountains were overrun with rampant lava spirits, spiteful creatures who sought to burn all they could touch.</Description><Tier>ST</Tier><Filename>d2LofiObjEmbed</Filename><Row>33</Row><Column>0</Column><SetName>Magmatic Mystic Set</SetName><SlotType>17</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>5</Fame></Soulbound><BaseDamage>500</BaseDamage><MaxDamage>570</MaxDamage><RateOfFire>25</RateOfFire><Shots>1</Shots><Amplitude>0.35</Amplitude><Frequency>1.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>300.0</Lifetime><Speed>150.0</Speed><ToolTip></ToolTip></Item>';
    
    while (s.includes("<Item>"))
        {
            var tot = makeItem(s);
            staffs.push(tot);
            s = s.substring(s.indexOf("</Item>")+1, s.length)
        }
    
    s = '<Item><Name>(empty slot)</Name><NameCode></NameCode><Description></Description><Tier></Tier><Filename></Filename><Row>0</Row><Column>0</Column><SetName></SetName><SlotType>10</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Fire Wand</Name><NameCode>0xa04</NameCode><Description>A wand that casts a simple fire spell.</Description><Tier>T0</Tier><Filename>lofiObj5</Filename><Row>4</Row><Column>0</Column><SetName></SetName><SlotType>8</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame></MultiHit><BaseDamage>25</BaseDamage><MaxDamage>40</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>500.0</Lifetime><Speed>180.0</Speed><ToolTip></ToolTip></Item><Item><Name>Force Wand</Name><NameCode>0xa6f</NameCode><Description>A wand that emits bolts of pure force.</Description><Tier>T1</Tier><Filename>lofiObj5</Filename><Row>4</Row><Column>1</Column><SetName></SetName><SlotType>8</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame></MultiHit><BaseDamage>35</BaseDamage><MaxDamage>50</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>500.0</Lifetime><Speed>180.0</Speed><ToolTip></ToolTip></Item><Item><Name>Power Wand</Name><NameCode>0xa70</NameCode><Description>A wand that fires power bolts.</Description><Tier>T2</Tier><Filename>lofiObj5</Filename><Row>4</Row><Column>2</Column><SetName></SetName><SlotType>8</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame></MultiHit><BaseDamage>40</BaseDamage><MaxDamage>55</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>500.0</Lifetime><Speed>180.0</Speed><ToolTip></ToolTip></Item><Item><Name>Missile Wand</Name><NameCode>0xa05</NameCode><Description>A wand that casts a strong missile.</Description><Tier>T3</Tier><Filename>lofiObj5</Filename><Row>4</Row><Column>3</Column><SetName></SetName><SlotType>8</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame></MultiHit><BaseDamage>45</BaseDamage><MaxDamage>60</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>500.0</Lifetime><Speed>180.0</Speed><ToolTip></ToolTip></Item><Item><Name>Eldritch Wand</Name><NameCode>0xa71</NameCode><Description>A wand that shoots dark eldritch energy.</Description><Tier>T4</Tier><Filename>lofiObj5</Filename><Row>4</Row><Column>4</Column><SetName></SetName><SlotType>8</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame></MultiHit><BaseDamage>55</BaseDamage><MaxDamage>70</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>500.0</Lifetime><Speed>180.0</Speed><ToolTip></ToolTip></Item><Item><Name>Hell\'s Fire Wand</Name><NameCode>0xa06</NameCode><Description>A wand that casts a strong fire spell.</Description><Tier>T5</Tier><Filename>lofiObj5</Filename><Row>4</Row><Column>5</Column><SetName></SetName><SlotType>8</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame></MultiHit><BaseDamage>60</BaseDamage><MaxDamage>85</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>500.0</Lifetime><Speed>180.0</Speed><ToolTip></ToolTip></Item><Item><Name>Wand of Dark Magic</Name><NameCode>0xa3d</NameCode><Description>A wand that casts a bolt of pure magic force.</Description><Tier>T6</Tier><Filename>lofiObj5</Filename><Row>4</Row><Column>6</Column><SetName></SetName><SlotType>8</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame></MultiHit><BaseDamage>70</BaseDamage><MaxDamage>100</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>500.0</Lifetime><Speed>180.0</Speed><ToolTip></ToolTip></Item><Item><Name>Wand of Arcane Flame</Name><NameCode>0xae0</NameCode><Description>A deadly wand that channels magefire from the nether planes.</Description><Tier>T7</Tier><Filename>lofiObj5</Filename><Row>4</Row><Column>7</Column><SetName></SetName><SlotType>8</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame></MultiHit><BaseDamage>75</BaseDamage><MaxDamage>115</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>500.0</Lifetime><Speed>180.0</Speed><ToolTip></ToolTip></Item><Item><Name>Sprite Wand</Name><NameCode>0xa4b</NameCode><Description>A wand created from the wood of Sprite trees. Seems to be poorly calibrated, though.</Description><Tier>UT</Tier><Filename>lofiObj2</Filename><Row>6</Row><Column>1</Column><SetName></SetName><SlotType>8</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame></Soulbound><BaseDamage>10</BaseDamage><MaxDamage>220</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>1.0</Amplitude><Frequency>1.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>500.0</Lifetime><Speed>180.0</Speed><ToolTip></ToolTip></Item><Item><Name>Wand of Death</Name><NameCode>0xa07</NameCode><Description>A fearsome wand that fires bolts of penetrating death magic.</Description><Tier>T8</Tier><Filename>lofiObj5</Filename><Row>4</Row><Column>8</Column><SetName></SetName><SlotType>8</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>1</Fame></MultiHit><BaseDamage>80</BaseDamage><MaxDamage>125</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>500.0</Lifetime><Speed>180.0</Speed><ToolTip></ToolTip></Item><Item><Name>Wand of Deep Sorcery</Name><NameCode>0xa85</NameCode><Description>A mysterious wand of otherworldly origin, imbued with the purest of arcane energies.</Description><Tier>T9</Tier><Filename>lofiObj5</Filename><Row>4</Row><Column>9</Column><SetName></SetName><SlotType>8</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>1</Fame></MultiHit><BaseDamage>85</BaseDamage><MaxDamage>130</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>500.0</Lifetime><Speed>180.0</Speed><ToolTip></ToolTip></Item><Item><Name>Wand of Shadow</Name><NameCode>0xa86</NameCode><Description>A wand of demonic enigmas, cloaked in darkness and crackling with dark enchantments.</Description><Tier>T10</Tier><Filename>lofiObj5</Filename><Row>4</Row><Column>10</Column><SetName></SetName><SlotType>8</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>2</Fame></MultiHit><BaseDamage>90</BaseDamage><MaxDamage>135</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>500.0</Lifetime><Speed>180.0</Speed><ToolTip></ToolTip></Item><Item><Name>Wand of Ancient Warning</Name><NameCode>0xa87</NameCode><Description>A centuries-old wand of great power, heralding long-destined destruction.</Description><Tier>T11</Tier><Filename>lofiObj5</Filename><Row>4</Row><Column>11</Column><SetName></SetName><SlotType>8</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>3</Fame></MultiHit><BaseDamage>95</BaseDamage><MaxDamage>135</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>500.0</Lifetime><Speed>180.0</Speed><ToolTip></ToolTip></Item><Item><Name>Wand of Recompense</Name><NameCode>0xaf6</NameCode><Description>A great golden wand of the heavens, created by angels to wreak justice on the slayers of the innocent.</Description><Tier>T12</Tier><Filename>lofiObj5new</Filename><Row>4</Row><Column>12</Column><SetName></SetName><SlotType>8</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame></MultiHit><BaseDamage>95</BaseDamage><MaxDamage>140</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>500.0</Lifetime><Speed>180.0</Speed><ToolTip></ToolTip></Item><Item><Name>Wand of Evocation</Name><NameCode>0x9ca</NameCode><Description>A shining gold wand of force, built by a diabolic archmagus to channel vast corrupting energies into the material plane.</Description><Tier>T13</Tier><Filename>lofiObj5new</Filename><Row>4</Row><Column>13</Column><SetName></SetName><SlotType>8</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>5</Fame></MultiHit></Soulbound><BaseDamage>100</BaseDamage><MaxDamage>140</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>500.0</Lifetime><Speed>180.0</Speed><ToolTip></ToolTip></Item><Item><Name>Wand of Retribution</Name><NameCode>0x9c0</NameCode><Description>A golden wand of breathtaking power, created by elemental forces from the realms of ice and flame to unleash revenge on their enemies.</Description><Tier>T14</Tier><Filename>lofiObj5new</Filename><Row>4</Row><Column>14</Column><SetName></SetName><SlotType>8</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>6</Fame></MultiHit></Soulbound><BaseDamage>100</BaseDamage><MaxDamage>145</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>500.0</Lifetime><Speed>180.0</Speed><ToolTip></ToolTip></Item><Item><Name>Crystal Wand</Name><NameCode>0xb3f</NameCode><Description>A sound almost like a wind chime emanates softly from this wand.</Description><Tier>UT</Tier><Filename>lofiObj2</Filename><Row>6</Row><Column>3</Column><SetName></SetName><SlotType>8</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame></DefIgnore></Soulbound><BaseDamage>70</BaseDamage><MaxDamage>110</MaxDamage><RateOfFire>110</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>600.0</Lifetime><Speed>150.0</Speed><ToolTip></ToolTip></Item><Item><Name>Wand of the Bulwark</Name><NameCode>0xc04</NameCode><Description>This strange weapon was used by ancient battle mages to deter invaders. The secret to its construction has long been lost.</Description><Tier>UT</Tier><Filename>lofiObj2</Filename><Row>6</Row><Column>12</Column><SetName></SetName><SlotType>8</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>6</Fame></MultiHit></Soulbound></PassesCover></Parametric><BaseDamage>350</BaseDamage><MaxDamage>450</MaxDamage><RateOfFire>33</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>10000.0</Lifetime><Speed>3.0</Speed><ToolTip></ToolTip></Item><Item><Name>St. Abraham\'s Wand</Name><NameCode>0xc1d</NameCode><Description>A wand made from a brilliant white cross designed to ward off evil.</Description><Tier>UT</Tier><Filename>lofiObj2</Filename><Row>1</Row><Column>12</Column><SetName></SetName><SlotType>8</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>4</VIT><WIS>4</WIS><Fame>3</Fame></Soulbound><BaseDamage>90</BaseDamage><MaxDamage>120</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>667.0</Lifetime><Speed>150.0</Speed><ToolTip></ToolTip></Item><Item><Name>Conducting Wand</Name><NameCode>0xc33</NameCode><Description>This wand is powerful at conducting magical energy into a devastating blast.</Description><Tier>UT</Tier><Filename>lofiObj3</Filename><Row>27</Row><Column>2</Column><SetName></SetName><SlotType>8</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>4</DEX><VIT>0</VIT><WIS>4</WIS><Fame>4</Fame></Soulbound><BaseDamage>60</BaseDamage><MaxDamage>150</MaxDamage><RateOfFire>125</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>471.0</Lifetime><Speed>170.0</Speed><ToolTip></ToolTip></Item><Item><Name>Soul\'s Guidance</Name><NameCode>0x6102</NameCode><Description>A crude walking stick enchanted by Skuld\'s distinct style of sorcery, constructed to guide fallen spirits to the afterlife.</Description><Tier>UT</Tier><Filename>lofiObj2</Filename><Row>8</Row><Column>15</Column><SetName></SetName><SlotType>8</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>6</Fame></MultiHit></Soulbound><BaseDamage>80</BaseDamage><MaxDamage>135</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.7</Amplitude><Frequency>2.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>450.0</Lifetime><Speed>200.0</Speed><ToolTip>         <EffectInfo description="Releases a Forgotten Soul when hit." name="Skuld\'s Enchantment"/>         <EffectInfo description="10% chance to release a Forgotten Soul." name="On Taking Damage"/>         <EffectInfo description="8 seconds" name="Lifetime"/>         <EffectInfo description="100" name="Soul Damage"/>         <EffectInfo description="500 damage over 5 seconds" name="Soul Drain"/>         <EffectInfo description="Drifts away after 5 seconds, inflicting Curse for 4 seconds upon detonation" name="Soul Charge"/>      </ToolTip></Item><Item><Name>Spicy Wand of Spice</Name><NameCode>0xceb</NameCode><Description>The fabled weapon of the Sauce Boss himself.</Description><Tier>UT</Tier><Filename>lofiObj3</Filename><Row>66</Row><Column>10</Column><SetName></SetName><SlotType>8</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame></Soulbound><BaseDamage>30</BaseDamage><MaxDamage>50</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots></Wavy><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>770.0</Lifetime><Speed>130.0</Speed><ToolTip></ToolTip></Item><Item><Name>Wand of Budding Romance</Name><NameCode>0x228c</NameCode><Description>Harnessing the unusual power of Belladonna\'s flowers, these shots are beautiful but deadly!</Description><Tier>UT</Tier><Filename>lofiObj3</Filename><Row>74</Row><Column>6</Column><SetName></SetName><SlotType>8</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>1</Fame></MultiHit><BaseDamage>85</BaseDamage><MaxDamage>130</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>500.0</Lifetime><Speed>180.0</Speed><ToolTip></ToolTip></Item><Item><Name>Wand of Egg-cellence</Name><NameCode>0x2296</NameCode><Description>Harbinger of hard-boiled justice.\n\nSprite Credits: Linkshot, Sues, and Wylem.</Description><Tier>UT</Tier><Filename>lofiObj3</Filename><Row>76</Row><Column>0</Column><SetName></SetName><SlotType>8</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>3</Fame></MultiHit></Soulbound><BaseDamage>95</BaseDamage><MaxDamage>135</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>500.0</Lifetime><Speed>180.0</Speed><ToolTip></ToolTip></Item><Item><Name>Lethargic Sentience</Name><NameCode>0x2327</NameCode><Description>Created by a lonely Sorcerer. This sentient eye doesn\'t make a very good friend. It does, however, make fruit.</Description><Tier>UT</Tier><Filename>lofiObj3</Filename><Row>77</Row><Column>0</Column><SetName></SetName><SlotType>8</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame></PassesCover></Parametric><BaseDamage>20</BaseDamage><MaxDamage>40</MaxDamage><RateOfFire>25</RateOfFire><Shots>4</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>11.25</ArcGap><Lifetime>3000.0</Lifetime><Speed>12.5</Speed><ToolTip></ToolTip></Item><Item><Name>Wand of Ancient Terror</Name><NameCode>0xf10</NameCode><Description>This wand has been used countless times to raise Lord Ruthven from the dead.</Description><Tier>UT</Tier><Filename>lofiObj3</Filename><Row>80</Row><Column>0</Column><SetName></SetName><SlotType>8</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>3</Fame></MultiHit><BaseDamage>95</BaseDamage><MaxDamage>135</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>500.0</Lifetime><Speed>180.0</Speed><ToolTip></ToolTip></Item><Item><Name>Wand of Geb</Name><NameCode>0x235F</NameCode><Description>Despite their normal pacificity, priests of Geb were able to protect themselves from aggressors.</Description><Tier>ST</Tier><Filename>lofiObj3</Filename><Row>80</Row><Column>15</Column><SetName>Priest of Geb Set</SetName><SlotType>8</SlotType><HP>0</HP><MP>0</MP><ATK>2</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame></MultiHit><BaseDamage>70</BaseDamage><MaxDamage>100</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>1.2</Amplitude><Frequency>1.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>600.0</Lifetime><Speed>140.0</Speed><ToolTip></ToolTip></Item><Item><Name>Present Dispensing Wand</Name><NameCode>0x237c</NameCode><Description>How else would the minions of Oryx get their gifts?\n\nSprite Credits: paulo and sonutx</Description><Tier>UT</Tier><Filename>lofiObj3</Filename><Row>85</Row><Column>10</Column><SetName></SetName><SlotType>8</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>3</Fame></MultiHit><BaseDamage>95</BaseDamage><MaxDamage>135</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>500.0</Lifetime><Speed>180.0</Speed><ToolTip></ToolTip></Item><Item><Name>Frozen Wand</Name><NameCode>0x1412</NameCode><Description>From the realms of frost, this wand\'s ice magic penetrates even the strongest armor.</Description><Tier>UT</Tier><Filename>d3LofiObjEmbed</Filename><Row>4</Row><Column>7</Column><SetName></SetName><SlotType>8</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame></DefIgnore></Soulbound><BaseDamage>70</BaseDamage><MaxDamage>110</MaxDamage><RateOfFire>110</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>600.0</Lifetime><Speed>150.0</Speed><ToolTip></ToolTip></Item><Item><Name>Eternal Snowflake Wand</Name><NameCode>0x16d8</NameCode><Description>A cool wand that creates a flurry of beautiful snowflakes.\n\nSprite Credits: Poshun</Description><Tier>UT</Tier><Filename>d2LofiObjEmbed</Filename><Row>1</Row><Column>11</Column><SetName></SetName><SlotType>8</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>6</Fame></MultiHit></Soulbound></PassesCover></Parametric><BaseDamage>350</BaseDamage><MaxDamage>450</MaxDamage><RateOfFire>33</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>10000.0</Lifetime><Speed>3.0</Speed><ToolTip></ToolTip></Item><Item><Name>Wand of the Fallen</Name><NameCode>0x183b</NameCode><Description>Made from a cherry tree branch. This wand was gifted by Xil to Daichi for bringing him into this world.</Description><Tier>UT</Tier><Filename>mountainTempleObjects8x8</Filename><Row>9</Row><Column>13</Column><SetName></SetName><SlotType>8</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>5</Fame></Soulbound><BaseDamage>145</BaseDamage><MaxDamage>190</MaxDamage><RateOfFire>85</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>458.0</Lifetime><Speed>144.0</Speed><ToolTip></ToolTip></Item><Item><Name>Winter\'s Breath Wand</Name><NameCode>0x1acd</NameCode><Description>This wand is so cold it freezes the very air around it. Use with gloves, do not place on bare skin.</Description><Tier>UT</Tier><Filename>oryxHordeObjects8x8</Filename><Row>12</Row><Column>3</Column><SetName></SetName><SlotType>8</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>7</Fame></MultiHit></Soulbound><BaseDamage>95</BaseDamage><MaxDamage>140</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>500.0</Lifetime><Speed>180.0</Speed><ToolTip></ToolTip></Item><Item><Name>Abomination\'s Wrath</Name><NameCode>0xbbc</NameCode><Description>Although destroyed, the beast\'s brute strength remains deeply embedded in this odd wand. Its rage possesses you, and lends you its force.</Description><Tier>ST</Tier><Filename>d2LofiObjEmbed</Filename><Row>8</Row><Column>0</Column><SetName>Horrific Sorcerer Set</SetName><SlotType>8</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame></Soulbound><BaseDamage>225</BaseDamage><MaxDamage>265</MaxDamage><RateOfFire>53</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>818.0</Lifetime><Speed>110.0</Speed><ToolTip></ToolTip></Item><Item><Name>Caduceus of Current Craziness</Name><NameCode>0x576</NameCode><Description>The harbinger of past pandemonium, current craziness, and future fatuity. It just can\'t seem to stay focused.</Description><Tier>UT</Tier><Filename>theMachineObjects8x8</Filename><Row>6</Row><Column>8</Column><SetName></SetName><SlotType>8</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>2</Fame></MultiHit></Soulbound><BaseDamage>65</BaseDamage><MaxDamage>90</MaxDamage><RateOfFire>100</RateOfFire><Shots>2</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>180.0</ArcGap><Lifetime>500.0</Lifetime><Speed>170.0</Speed><ToolTip></ToolTip></Item><Item><Name>Warlord Wand</Name><NameCode>0x6463</NameCode><Description>An accomplished alien conquerer brandished this wand as a show of might, topping it with a gemstone from each planet he overthrew.\n\nSprite Credits: Aurum</Description><Tier>UT</Tier><Filename>d2LofiObjEmbed</Filename><Row>17</Row><Column>6</Column><SetName></SetName><SlotType>8</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>7</Fame></DefIgnore></Soulbound><BaseDamage>70</BaseDamage><MaxDamage>110</MaxDamage><RateOfFire>110</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>600.0</Lifetime><Speed>150.0</Speed><ToolTip>         <EffectInfo name="" description="Alien Gear"/>      </ToolTip></Item><Item><Name>Snowblind Wand</Name><NameCode>0x6464</NameCode><Description>A wand held together by an ice crystal extracted from the depths of Untaris. Each shot possesses the concentrated force of a blizzard.\n\nSprite Credits: Aurum</Description><Tier>UT</Tier><Filename>d2LofiObjEmbed</Filename><Row>16</Row><Column>12</Column><SetName></SetName><SlotType>8</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>7</Fame></Soulbound><BaseDamage>145</BaseDamage><MaxDamage>190</MaxDamage><RateOfFire>85</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>458.0</Lifetime><Speed>144.0</Speed><ToolTip>         <EffectInfo name="" description="Alien Gear"/>      </ToolTip></Item><Item><Name>Tyrant\'s Wand</Name><NameCode>0x65f0</NameCode><Description>Granted only to the highest ranking mages of Oryx\'s legion, this wand conjures pagan magic forbidden by most practitioners.\n\nSprite Credits: Aurum</Description><Tier>UT</Tier><Filename>d2LofiObjEmbed</Filename><Row>21</Row><Column>8</Column><SetName></SetName><SlotType>8</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>5</Fame></MultiHit></Soulbound><BaseDamage>50</BaseDamage><MaxDamage>75</MaxDamage><RateOfFire>100</RateOfFire><Shots>4</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>10.0</ArcGap><Lifetime>800.0</Lifetime><Speed>65.0</Speed><ToolTip></ToolTip></Item><Item><Name>Theurgy Wand</Name><NameCode>0x200c</NameCode><Description>Oryx\'s so-called priests use cruel wands like this to inflict suffering on their recipients. They themselves must endure this pain to begin the path to consecration.</Description><Tier>ST</Tier><Filename>d2LofiObjEmbed</Filename><Row>27</Row><Column>0</Column><SetName>Mad God\'s Messenger Set</SetName><SlotType>8</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame></MultiHit></Soulbound><BaseDamage>90</BaseDamage><MaxDamage>100</MaxDamage><RateOfFire>75</RateOfFire><Shots>2</Shots></Wavy><Amplitude>0.1</Amplitude><Frequency>0.1</Frequency><ArcGap>10.0</ArcGap><Lifetime>375.0</Lifetime><Speed>200.0</Speed><ToolTip></ToolTip></Item>';
    
    while (s.includes("<Item>"))
        {
            var tot = makeItem(s);
            wands.push(tot);
            s = s.substring(s.indexOf("</Item>")+1, s.length)
        }
    
    s = '<Item><Name>(empty slot)</Name><NameCode></NameCode><Description></Description><Tier></Tier><Filename></Filename><Row>0</Row><Column>0</Column><SetName></SetName><SlotType>10</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Short Sword</Name><NameCode>0xa00</NameCode><Description>A steel short sword.</Description><Tier>T0</Tier><Filename>lofiObj5</Filename><Row>3</Row><Column>0</Column><SetName></SetName><SlotType>1</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>45</BaseDamage><MaxDamage>90</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>350.0</Lifetime><Speed>100.0</Speed><ToolTip></ToolTip></Item><Item><Name>Broad Sword</Name><NameCode>0xa6c</NameCode><Description>A broad-bladed steel sword.</Description><Tier>T1</Tier><Filename>lofiObj5</Filename><Row>3</Row><Column>1</Column><SetName></SetName><SlotType>1</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>60</BaseDamage><MaxDamage>105</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>350.0</Lifetime><Speed>100.0</Speed><ToolTip></ToolTip></Item><Item><Name>Saber</Name><NameCode>0xa6d</NameCode><Description>A single-edged light sword.</Description><Tier>T2</Tier><Filename>lofiObj5</Filename><Row>3</Row><Column>2</Column><SetName></SetName><SlotType>1</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>75</BaseDamage><MaxDamage>105</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>350.0</Lifetime><Speed>100.0</Speed><ToolTip></ToolTip></Item><Item><Name>Long Sword</Name><NameCode>0xa01</NameCode><Description>A well-made sword with a double edged blade.</Description><Tier>T3</Tier><Filename>lofiObj5</Filename><Row>3</Row><Column>3</Column><SetName></SetName><SlotType>1</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>75</BaseDamage><MaxDamage>120</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>350.0</Lifetime><Speed>100.0</Speed><ToolTip></ToolTip></Item><Item><Name>Falchion</Name><NameCode>0xa6e</NameCode><Description>A single-edged broad-bladed sword.</Description><Tier>T4</Tier><Filename>lofiObj5</Filename><Row>3</Row><Column>4</Column><SetName></SetName><SlotType>1</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>75</BaseDamage><MaxDamage>135</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>350.0</Lifetime><Speed>100.0</Speed><ToolTip></ToolTip></Item><Item><Name>Fire Sword</Name><NameCode>0xa3b</NameCode><Description>A fiery blade capable of burning flesh and bone.</Description><Tier>T5</Tier><Filename>lofiObj5</Filename><Row>3</Row><Column>5</Column><SetName></SetName><SlotType>1</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>90</BaseDamage><MaxDamage>135</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>350.0</Lifetime><Speed>100.0</Speed><ToolTip></ToolTip></Item><Item><Name>Glass Sword</Name><NameCode>0xa3c</NameCode><Description>A sword formed from a single shard of unbreakable glass.</Description><Tier>T6</Tier><Filename>lofiObj5</Filename><Row>3</Row><Column>6</Column><SetName></SetName><SlotType>1</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>30</BaseDamage><MaxDamage>210</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>350.0</Lifetime><Speed>100.0</Speed><ToolTip></ToolTip></Item><Item><Name>Golden Sword</Name><NameCode>0xa02</NameCode><Description>A sharp sword plated with gold, clearly intended for the use of a great lord.</Description><Tier>T7</Tier><Filename>lofiObj5</Filename><Row>3</Row><Column>7</Column><SetName></SetName><SlotType>1</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>150</BaseDamage><MaxDamage>180</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>350.0</Lifetime><Speed>100.0</Speed><ToolTip></ToolTip></Item><Item><Name>Ravenheart Sword</Name><NameCode>0xa82</NameCode><Description>A powerful sword infused with the spirit of dark rituals.</Description><Tier>T8</Tier><Filename>lofiObj5</Filename><Row>3</Row><Column>8</Column><SetName></SetName><SlotType>1</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>1</Fame><BaseDamage>180</BaseDamage><MaxDamage>255</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>350.0</Lifetime><Speed>100.0</Speed><ToolTip></ToolTip></Item><Item><Name>Dragonsoul Sword</Name><NameCode>0xa83</NameCode><Description>A sword forged in a great volcano and consecrated with dragon magic.</Description><Tier>T9</Tier><Filename>lofiObj5</Filename><Row>3</Row><Column>9</Column><SetName></SetName><SlotType>1</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>1</Fame><BaseDamage>195</BaseDamage><MaxDamage>255</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>350.0</Lifetime><Speed>100.0</Speed><ToolTip></ToolTip></Item><Item><Name>Archon Sword</Name><NameCode>0xa84</NameCode><Description>A sword pulsing with the powerful magic of ancient beings.</Description><Tier>T10</Tier><Filename>lofiObj5</Filename><Row>3</Row><Column>10</Column><SetName></SetName><SlotType>1</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>2</Fame><BaseDamage>210</BaseDamage><MaxDamage>255</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>350.0</Lifetime><Speed>100.0</Speed><ToolTip></ToolTip></Item><Item><Name>Skysplitter Sword</Name><NameCode>0xa47</NameCode><Description>An unfathomably powerful sword wielded by titanic air elementals in their great war of revolution.</Description><Tier>T11</Tier><Filename>lofiObj5</Filename><Row>3</Row><Column>11</Column><SetName></SetName><SlotType>1</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>3</Fame><BaseDamage>210</BaseDamage><MaxDamage>270</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>350.0</Lifetime><Speed>100.0</Speed><ToolTip></ToolTip></Item><Item><Name>Sword of Acclaim</Name><NameCode>0xb0b</NameCode><Description>A great sword of recognition, forged by the gods for the champions of humankind.</Description><Tier>T12</Tier><Filename>lofiObj5new</Filename><Row>3</Row><Column>12</Column><SetName></SetName><SlotType>1</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame><BaseDamage>220</BaseDamage><MaxDamage>275</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>350.0</Lifetime><Speed>100.0</Speed><ToolTip></ToolTip></Item><Item><Name>Sword of Splendor</Name><NameCode>0x9c8</NameCode><Description>An exalted weapon of the august kings of old, hallowed with the spirit of nations and yearning to grant power anew.</Description><Tier>T13</Tier><Filename>lofiObj5new</Filename><Row>3</Row><Column>13</Column><SetName></SetName><SlotType>1</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>5</Fame></Soulbound><BaseDamage>225</BaseDamage><MaxDamage>280</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>350.0</Lifetime><Speed>100.0</Speed><ToolTip></ToolTip></Item><Item><Name>Sword of Majesty</Name><NameCode>0x9c9</NameCode><Description>A gleaming obsidian sword of imperial power, fashioned by enslaved demons for the personal use of a world-conquering leader of mortals.</Description><Tier>T14</Tier><Filename>lofiObj5new</Filename><Row>3</Row><Column>14</Column><SetName></SetName><SlotType>1</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>6</Fame></Soulbound><BaseDamage>230</BaseDamage><MaxDamage>285</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>350.0</Lifetime><Speed>100.0</Speed><ToolTip></ToolTip></Item><Item><Name>Crystal Sword</Name><NameCode>0xa03</NameCode><Description>A lightweight blade that seems to dance in your hands.</Description><Tier>UT</Tier><Filename>lofiObj2</Filename><Row>6</Row><Column>8</Column><SetName></SetName><SlotType>1</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>3</Fame></Soulbound><BaseDamage>180</BaseDamage><MaxDamage>210</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>450.0</Lifetime><Speed>100.0</Speed><ToolTip></ToolTip></Item><Item><Name>Demon Blade</Name><NameCode>0xc01</NameCode><Description>A swift and hungry blade that is never satisfied with just one kill.</Description><Tier>UT</Tier><Filename>lofiObj2</Filename><Row>6</Row><Column>9</Column><SetName></SetName><SlotType>1</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>6</Fame></Soulbound><BaseDamage>150</BaseDamage><MaxDamage>175</MaxDamage><RateOfFire>100</RateOfFire><Shots>2</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>40.0</ArcGap><Lifetime>260.0</Lifetime><Speed>130.0</Speed><ToolTip></ToolTip></Item><Item><Name>Ancient Stone Sword</Name><NameCode>0xc05</NameCode><Description>A slow but powerful sword that is a relic of a long forgotten age.</Description><Tier>UT</Tier><Filename>lofiObj2</Filename><Row>6</Row><Column>13</Column><SetName></SetName><SlotType>1</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame></Soulbound><BaseDamage>340</BaseDamage><MaxDamage>390</MaxDamage><RateOfFire>60</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>400.0</Lifetime><Speed>100.0</Speed><ToolTip></ToolTip></Item><Item><Name>Def Test Sword</Name><NameCode>0x9cb</NameCode><Description>For Testing Monster Defense.</Description><Tier>UT</Tier><Filename>lofiObj5</Filename><Row>3</Row><Column>7</Column><SetName></SetName><SlotType>1</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>100</BaseDamage><MaxDamage>100</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>500.0</Lifetime><Speed>100.0</Speed><ToolTip></ToolTip></Item><Item><Name>Pirate King\'s Cutlass</Name><NameCode>0xcdb</NameCode><Description>Used only by the pirates who would make themselves kings, this cutlass is said to be cursed as each Pirate King seems to be killed rather unexpectedly.</Description><Tier>UT</Tier><Filename>lofiObj3</Filename><Row>64</Row><Column>3</Column><SetName></SetName><SlotType>1</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>-2</DEF><SPD>3</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>5</Fame></Soulbound><BaseDamage>180</BaseDamage><MaxDamage>230</MaxDamage><RateOfFire>130</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>220.0</Lifetime><Speed>150.0</Speed><ToolTip></ToolTip></Item><Item><Name>Doctor Swordsworth</Name><NameCode>0xcdf</NameCode><Description>This legendary sword is used to summon the beautiful power of bears.</Description><Tier>UT</Tier><Filename>lofiObj3</Filename><Row>66</Row><Column>8</Column><SetName></SetName><SlotType>1</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame></Soulbound></PassesCover></Parametric><BaseDamage>40</BaseDamage><MaxDamage>70</MaxDamage><RateOfFire>33</RateOfFire><Shots>3</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>11.25</ArcGap><Lifetime>4000.0</Lifetime><Speed>7.0</Speed><ToolTip></ToolTip></Item><Item><Name>Skull-splitter Sword</Name><NameCode>0x221c</NameCode><Description>An unfathomably powerful sword that absorbs the skulls of enemies and unleashes them with magical energy.</Description><Tier>UT</Tier><Filename>lofiObj3</Filename><Row>69</Row><Column>8</Column><SetName></SetName><SlotType>1</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>3</Fame><BaseDamage>210</BaseDamage><MaxDamage>270</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>350.0</Lifetime><Speed>100.0</Speed><ToolTip></ToolTip></Item><Item><Name>Vinesword</Name><NameCode>0x228e</NameCode><Description>Strung together with the deadly vines of Belladonna.\n\nSprite Credits: nooblegend</Description><Tier>UT</Tier><Filename>lofiObj3</Filename><Row>74</Row><Column>3</Column><SetName></SetName><SlotType>1</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>1</Fame><BaseDamage>195</BaseDamage><MaxDamage>255</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>350.0</Lifetime><Speed>100.0</Speed><ToolTip></ToolTip></Item><Item><Name>Sword of Illumination</Name><NameCode>0x2303</NameCode><Description>A sword that, when held by one true of heart, will release magic from the flawless ruby in its hilt and ignite in flames.</Description><Tier>UT</Tier><Filename>lofiObj3</Filename><Row>76</Row><Column>12</Column><SetName></SetName><SlotType>1</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>6</Fame></Soulbound><BaseDamage>150</BaseDamage><MaxDamage>175</MaxDamage><RateOfFire>100</RateOfFire><Shots>2</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>40.0</ArcGap><Lifetime>260.0</Lifetime><Speed>130.0</Speed><ToolTip></ToolTip></Item><Item><Name>Unstable Anomaly</Name><NameCode>0x2324</NameCode><Description>An odd energy source known for the amazing ability to fire hats.</Description><Tier>UT</Tier><Filename>lofiObj3</Filename><Row>76</Row><Column>15</Column><SetName></SetName><SlotType>1</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>1</Fame><BaseDamage>10</BaseDamage><MaxDamage>15</MaxDamage><RateOfFire>25</RateOfFire><Shots>10</Shots><Amplitude>0.15</Amplitude><Frequency>2.0</Frequency><ArcGap>36.0</ArcGap><Lifetime>1000.0</Lifetime><Speed>50.0</Speed><ToolTip></ToolTip></Item><Item><Name>Sword of the Mad God</Name><NameCode>0x2302</NameCode><Description>A detailed sword crafted out of blackened metal and precious bloodstone by Oryx\'s minions as a tribute to their overlord.</Description><Tier>ST</Tier><Filename>lofiObj3</Filename><Row>76</Row><Column>13</Column><SetName>Oryx Awesome Set</SetName><SlotType>1</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame><BaseDamage>220</BaseDamage><MaxDamage>275</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>350.0</Lifetime><Speed>100.0</Speed><ToolTip></ToolTip></Item><Item><Name>Legacy Pixie-Enchanted Sword</Name><NameCode>0x2367</NameCode><Description>Pixies are often a more aggressive fae. It makes great sense that they would provide heroes with swords as fine as this.</Description><Tier>ST</Tier><Filename>lofiObj3</Filename><Row>81</Row><Column>9</Column><SetName>Legacy Swoll Paladin Set</SetName><SlotType>1</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame><BaseDamage>75</BaseDamage><MaxDamage>90</MaxDamage><RateOfFire>100</RateOfFire><Shots>4</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>10.0</ArcGap><Lifetime>325.0</Lifetime><Speed>140.0</Speed><ToolTip></ToolTip></Item><Item><Name>Indomptable</Name><NameCode>0x7fbc</NameCode><Description>All initiates who start the path of becoming a Dragon Tamer are given a special weapon. If an initiate completes the Path alive, this weapon is given a name by the Elders.</Description><Tier>ST</Tier><Filename>d2LofiObjEmbed</Filename><Row>0</Row><Column>0</Column><SetName>Dragon Tamer Set</SetName><SlotType>1</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame></MultiHit></Soulbound><BaseDamage>525</BaseDamage><MaxDamage>575</MaxDamage><RateOfFire>33</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>500.0</Lifetime><Speed>80.0</Speed><ToolTip></ToolTip></Item><Item><Name>Frostbite</Name><NameCode>0x258c</NameCode><Description>So hot, it\'s cool. The unique combo of hot and cold elements allows it to generate devastating ice attacks.</Description><Tier>UT</Tier><Filename>lofiObj3</Filename><Row>73</Row><Column>2</Column><SetName></SetName><SlotType>1</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>3</Fame><BaseDamage>210</BaseDamage><MaxDamage>270</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>350.0</Lifetime><Speed>100.0</Speed><ToolTip></ToolTip></Item><Item><Name>Enchanted Ice Blade</Name><NameCode>0x16d6</NameCode><Description>A lightweight blade, imbued with frosty runes.\n\nSprite Credits: Poshun</Description><Tier>UT</Tier><Filename>d2LofiObjEmbed</Filename><Row>1</Row><Column>9</Column><SetName></SetName><SlotType>1</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>3</Fame></Soulbound><BaseDamage>180</BaseDamage><MaxDamage>210</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>450.0</Lifetime><Speed>100.0</Speed><ToolTip></ToolTip></Item><Item><Name>Apocalypse Feather</Name><NameCode>0x6a9</NameCode><Description>A relic from an age when evil chickens had taken over the realm. Their tyranny ended eventually at the hands of an exceptional wielder of the dirk.</Description><Tier>UT</Tier><Filename>d3LofiObjEmbed</Filename><Row>12</Row><Column>14</Column><SetName></SetName><SlotType>1</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame></Soulbound><BaseDamage>15</BaseDamage><MaxDamage>45</MaxDamage><RateOfFire>200</RateOfFire><Shots>1</Shots><Amplitude>0.5</Amplitude><Frequency>0.75</Frequency><ArcGap>10.0</ArcGap><Lifetime>675.0</Lifetime><Speed>75.0</Speed><ToolTip></ToolTip></Item><Item><Name>Sword of the Rainbow\'s End</Name><NameCode>0x164b</NameCode><Description>Colorful and fashionable, but not very good for hunting monsters.\n\nSprite Credits: Beige</Description><Tier>UT</Tier><Filename>stPatricksObjects8x8</Filename><Row>0</Row><Column>10</Column><SetName></SetName><SlotType>1</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>3</Fame></Soulbound><BaseDamage>20</BaseDamage><MaxDamage>40</MaxDamage><RateOfFire>150</RateOfFire><Shots>1</Shots></Wavy><Amplitude>0.0</Amplitude><Frequency>1.0</Frequency><ArcGap>10.0</ArcGap><Lifetime>438.0</Lifetime><Speed>80.0</Speed><ToolTip></ToolTip></Item><Item><Name>Sword of the Colossus</Name><NameCode>0x0254</NameCode><Description>A sword with an impossibly sharp edge. It has been designed with holy magic to slash like no other blade.</Description><Tier>UT</Tier><Filename>lostHallsObjects8x8</Filename><Row>11</Row><Column>0</Column><SetName></SetName><SlotType>1</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>6</Fame></Soulbound><BaseDamage>280</BaseDamage><MaxDamage>295</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.7</Amplitude><Frequency>0.5</Frequency><ArcGap>0.0</ArcGap><Lifetime>450.0</Lifetime><Speed>100.0</Speed><ToolTip></ToolTip></Item><Item><Name>Saint Nicolas\' Blade</Name><NameCode>0x1ace</NameCode><Description>Your enemies have been very, very, naughty.</Description><Tier>UT</Tier><Filename>oryxHordeObjects8x8</Filename><Row>12</Row><Column>4</Column><SetName></SetName><SlotType>1</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>7</Fame></Soulbound><BaseDamage>220</BaseDamage><MaxDamage>275</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>350.0</Lifetime><Speed>100.0</Speed><ToolTip></ToolTip></Item><Item><Name>Eternal Graved Great Sword</Name><NameCode>0x13aa</NameCode><Description>"Say it with flower" - Classic Eggre warrior motto.\n\nSprite Credits: Piggby</Description><Tier>UT</Tier><Filename>buffedBunnyObjects8x8</Filename><Row>2</Row><Column>9</Column><SetName></SetName><SlotType>1</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>7</Fame></Soulbound><BaseDamage>340</BaseDamage><MaxDamage>390</MaxDamage><RateOfFire>60</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>400.0</Lifetime><Speed>100.0</Speed><ToolTip></ToolTip></Item><Item><Name>Silex\'s Hammer</Name><NameCode>0x5b26</NameCode><Description>When you have this hammer, you don\'t need a reason to use it.</Description><Tier>UT</Tier><Filename>d2LofiObjEmbed</Filename><Row>10</Row><Column>5</Column><SetName></SetName><SlotType>1</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>6</Fame></DefIgnore></Soulbound></PassesCover></Parametric><BaseDamage>5</BaseDamage><MaxDamage>70</MaxDamage><RateOfFire>33</RateOfFire><Shots>3</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>11.25</ArcGap><Lifetime>6500.0</Lifetime><Speed>7.0</Speed><ToolTip></ToolTip></Item><Item><Name>Oryx\'s Greatsword</Name><NameCode>0x5be1</NameCode><Description>Forged eons ago in the fires of Shaitan\'s domain, this infamous blade has cut down countless mighty heroes throughout the ages.</Description><Tier>ST</Tier><Filename>d2LofiObjEmbed</Filename><Row>12</Row><Column>4</Column><SetName>Oryx\'s Battle Attires</SetName><SlotType>1</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame></DefIgnore></Soulbound><BaseDamage>185</BaseDamage><MaxDamage>245</MaxDamage><RateOfFire>110</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>400.0</Lifetime><Speed>70.0</Speed><ToolTip></ToolTip></Item><Item><Name>MMace MMurderer</Name><NameCode>0x573</NameCode><Description>A heavy mace that abides only by the power of repetition.</Description><Tier>UT</Tier><Filename>theMachineObjects8x8</Filename><Row>6</Row><Column>5</Column><SetName></SetName><SlotType>1</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>1</Fame></Soulbound><BaseDamage>222</BaseDamage><MaxDamage>333</MaxDamage><RateOfFire>40</RateOfFire><Shots>2</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>20.0</ArcGap><Lifetime>1250.0</Lifetime><Speed>40.0</Speed><ToolTip></ToolTip></Item><Item><Name>Pixie-Enchanted Sword</Name><NameCode>0x04a5</NameCode><Description>Pixies are often a more aggressive fae. It makes great sense that they would provide heroes with swords as fine as this.</Description><Tier>ST</Tier><Filename>d2LofiObjEmbed</Filename><Row>18</Row><Column>2</Column><SetName>Swoll Paladin Set</SetName><SlotType>1</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame></Soulbound><BaseDamage>75</BaseDamage><MaxDamage>90</MaxDamage><RateOfFire>100</RateOfFire><Shots>4</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>10.0</ArcGap><Lifetime>325.0</Lifetime><Speed>140.0</Speed><ToolTip></ToolTip></Item><Item><Name>Gaseous Glaive</Name><NameCode>0x645b</NameCode><Description>One of the most unusual feats of Katalonian engineering. This barely tangible sword hurls puffs of toxic gas, if you can manage to firmly grasp it.\n\nSprite Credits: Aurum</Description><Tier>UT</Tier><Filename>d2LofiObjEmbed</Filename><Row>17</Row><Column>8</Column><SetName></SetName><SlotType>1</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>-2</DEF><SPD>3</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>7</Fame></Soulbound><BaseDamage>180</BaseDamage><MaxDamage>230</MaxDamage><RateOfFire>130</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>220.0</Lifetime><Speed>150.0</Speed><ToolTip>         <EffectInfo name="" description="Alien Gear"/>      </ToolTip></Item><Item><Name>Acidic Slasher</Name><NameCode>0x645c</NameCode><Description>Steeped in the acid rainwater of Forax, the chemical coating has transformed this already mighty blade into a heavy-hitting weapon of war.\n\nSprite Credits: Aurum</Description><Tier>UT</Tier><Filename>d2LofiObjEmbed</Filename><Row>17</Row><Column>2</Column><SetName></SetName><SlotType>1</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>7</Fame></Soulbound><BaseDamage>340</BaseDamage><MaxDamage>390</MaxDamage><RateOfFire>60</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>400.0</Lifetime><Speed>100.0</Speed><ToolTip>         <EffectInfo name="" description="Alien Gear"/>      </ToolTip></Item><Item><Name>Keychain Cutlass</Name><NameCode>0x4b0c</NameCode><Description>A magical chain of infinite keys capable of unlocking the secrets of the universe, though your mileage may vary. Not to be confused with a different key-related blade.\n\nSprite Credits: Aurum</Description><Tier>UT</Tier><Filename>lofiObj3</Filename><Row>92</Row><Column>8</Column><SetName></SetName><SlotType>1</SlotType><HP>0</HP><MP>50</MP><ATK>0</ATK><DEF>3</DEF><SPD>0</SPD><DEX>0</DEX><VIT>5</VIT><WIS>0</WIS><Fame>5</Fame></Soulbound><BaseDamage>20</BaseDamage><MaxDamage>475</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots></Wavy><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>350.0</Lifetime><Speed>100.0</Speed><ToolTip></ToolTip></Item><Item><Name>Henchman\'s Claymore</Name><NameCode>0x65ef</NameCode><Description>A brutally heavy sword designed to make those at the other end of its blade know their place.\n\nSprite Credits: Aurum</Description><Tier>UT</Tier><Filename>d2LofiObjEmbed</Filename><Row>21</Row><Column>11</Column><SetName></SetName><SlotType>1</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>5</Fame></Soulbound><BaseDamage>275</BaseDamage><MaxDamage>305</MaxDamage><RateOfFire>80</RateOfFire><Shots>1</Shots><Amplitude>0.8</Amplitude><Frequency>1.3</Frequency><ArcGap>0.0</ArcGap><Lifetime>600.0</Lifetime><Speed>60.0</Speed><ToolTip></ToolTip></Item><Item><Name>Hellfire Broadsword</Name><NameCode>0x6491</NameCode><Description>A merciless blade forged in the intense fires of the realm\'s core, designed for use by great demon lords.\n\nSprite Credits: Aurum</Description><Tier>ST</Tier><Filename>d2LofiObjEmbed</Filename><Row>24</Row><Column>0</Column><SetName>Unholy Paladin Set</SetName><SlotType>1</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame></Soulbound><BaseDamage>75</BaseDamage><MaxDamage>90</MaxDamage><RateOfFire>100</RateOfFire><Shots>4</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>10.0</ArcGap><Lifetime>325.0</Lifetime><Speed>140.0</Speed><ToolTip></ToolTip></Item><Item><Name>Swashbuckler\'s Sickle</Name><NameCode>0x21d9</NameCode><Description>A clumsy yet vicious weapon favored by marauders from coast to coast. Only an experienced pirate king can perform the techniques required to unlock its full potential.</Description><Tier>ST</Tier><Filename>d2LofiObjEmbed</Filename><Row>28</Row><Column>0</Column><SetName>Pirate King Warrior Set</SetName><SlotType>1</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame></Soulbound><BaseDamage>275</BaseDamage><MaxDamage>280</MaxDamage><RateOfFire>80</RateOfFire><Shots>1</Shots></Wavy><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>472.0</Lifetime><Speed>90.0</Speed><ToolTip></ToolTip></Item>';
    
    while (s.includes("<Item>"))
        {
            var tot = makeItem(s);
            swords.push(tot);
            s = s.substring(s.indexOf("</Item>")+1, s.length)
        }
    
    s = '<Item><Name>(empty slot)</Name><NameCode></NameCode><Description></Description><Tier></Tier><Filename></Filename><Row>0</Row><Column>0</Column><SetName></SetName><SlotType>10</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Rusty Katana</Name><NameCode>0xc44</NameCode><Description>A rusty old katana.</Description><Tier>T0</Tier><Filename>lofiObj3</Filename><Row>33</Row><Column>12</Column><SetName></SetName><SlotType>24</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame></MultiHit><BaseDamage>25</BaseDamage><MaxDamage>70</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>365.0</Lifetime><Speed>130.0</Speed><ToolTip></ToolTip></Item><Item><Name>Kendo Stick</Name><NameCode>0xc45</NameCode><Description>Suitable for practice.</Description><Tier>T1</Tier><Filename>lofiObj3</Filename><Row>33</Row><Column>13</Column><SetName></SetName><SlotType>24</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame></MultiHit><BaseDamage>30</BaseDamage><MaxDamage>75</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>365.0</Lifetime><Speed>130.0</Speed><ToolTip></ToolTip></Item><Item><Name>Plain Katana</Name><NameCode>0xc46</NameCode><Description>A basic katana.</Description><Tier>T2</Tier><Filename>lofiObj3</Filename><Row>33</Row><Column>14</Column><SetName></SetName><SlotType>24</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame></MultiHit><BaseDamage>35</BaseDamage><MaxDamage>80</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>365.0</Lifetime><Speed>130.0</Speed><ToolTip></ToolTip></Item><Item><Name>Thunder Katana</Name><NameCode>0xc47</NameCode><Description>A striking fine-edged weapon.</Description><Tier>T3</Tier><Filename>lofiObj3</Filename><Row>33</Row><Column>15</Column><SetName></SetName><SlotType>24</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame></MultiHit><BaseDamage>45</BaseDamage><MaxDamage>85</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>365.0</Lifetime><Speed>130.0</Speed><ToolTip></ToolTip></Item><Item><Name>Line Kutter Katana</Name><NameCode>0xc48</NameCode><Description>A katana capable of cutting a razor-thin line.</Description><Tier>T4</Tier><Filename>lofiObj3</Filename><Row>34</Row><Column>0</Column><SetName></SetName><SlotType>24</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame></MultiHit><BaseDamage>55</BaseDamage><MaxDamage>90</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>365.0</Lifetime><Speed>130.0</Speed><ToolTip></ToolTip></Item><Item><Name>Night Edge</Name><NameCode>0xc49</NameCode><Description>An ancient katana with a blade of jet black steel.</Description><Tier>T5</Tier><Filename>lofiObj3</Filename><Row>34</Row><Column>1</Column><SetName></SetName><SlotType>24</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame></MultiHit><BaseDamage>55</BaseDamage><MaxDamage>105</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>365.0</Lifetime><Speed>130.0</Speed><ToolTip></ToolTip></Item><Item><Name>Sky Edge</Name><NameCode>0xc4a</NameCode><Description>A beautiful katana, forged and cooled by the mists atop a great mountain.</Description><Tier>T6</Tier><Filename>lofiObj3</Filename><Row>34</Row><Column>2</Column><SetName></SetName><SlotType>24</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame></MultiHit><BaseDamage>75</BaseDamage><MaxDamage>110</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>365.0</Lifetime><Speed>130.0</Speed><ToolTip></ToolTip></Item><Item><Name>Buster Katana</Name><NameCode>0xc4b</NameCode><Description>A mighty weapon wielded by a hero from long ago.</Description><Tier>T7</Tier><Filename>lofiObj3</Filename><Row>34</Row><Column>3</Column><SetName></SetName><SlotType>24</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame></MultiHit><BaseDamage>90</BaseDamage><MaxDamage>120</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>365.0</Lifetime><Speed>130.0</Speed><ToolTip></ToolTip></Item><Item><Name>Demon Edge</Name><NameCode>0xc4c</NameCode><Description>A cruel blade forged in hell flame and blood.</Description><Tier>T8</Tier><Filename>lofiObj3</Filename><Row>34</Row><Column>4</Column><SetName></SetName><SlotType>24</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>1</Fame></MultiHit><BaseDamage>90</BaseDamage><MaxDamage>150</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>365.0</Lifetime><Speed>130.0</Speed><ToolTip></ToolTip></Item><Item><Name>Jewel Eye Katana</Name><NameCode>0xc4d</NameCode><Description>A mighty katana with a crystal eye embedded in the hilt.</Description><Tier>T9</Tier><Filename>lofiObj3</Filename><Row>34</Row><Column>5</Column><SetName></SetName><SlotType>24</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>1</Fame></MultiHit><BaseDamage>100</BaseDamage><MaxDamage>160</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>365.0</Lifetime><Speed>130.0</Speed><ToolTip></ToolTip></Item><Item><Name>Ichimonji</Name><NameCode>0xc4e</NameCode><Description>One of the legendary great blades of the master Ichimonji.</Description><Tier>T10</Tier><Filename>lofiObj3</Filename><Row>34</Row><Column>6</Column><SetName></SetName><SlotType>24</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>2</Fame></MultiHit><BaseDamage>110</BaseDamage><MaxDamage>165</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>365.0</Lifetime><Speed>130.0</Speed><ToolTip></ToolTip></Item><Item><Name>Muramasa</Name><NameCode>0xc4f</NameCode><Description>An evil blade that hungers for blood.</Description><Tier>T11</Tier><Filename>lofiObj3</Filename><Row>34</Row><Column>7</Column><SetName></SetName><SlotType>24</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>3</Fame></MultiHit><BaseDamage>120</BaseDamage><MaxDamage>175</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>365.0</Lifetime><Speed>130.0</Speed><ToolTip></ToolTip></Item><Item><Name>Masamune</Name><NameCode>0xc50</NameCode><Description>A magnificent legendary blade which only cuts those who deserve death.</Description><Tier>T12</Tier><Filename>lofiObj5new</Filename><Row>8</Row><Column>12</Column><SetName></SetName><SlotType>24</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame></MultiHit><BaseDamage>135</BaseDamage><MaxDamage>180</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>365.0</Lifetime><Speed>130.0</Speed><ToolTip></ToolTip></Item><Item><Name>Sadamune</Name><NameCode>0x024a</NameCode><Description>A formidable blade that was meticulously crafted over the course of several centuries by the most renowned masters in history.</Description><Tier>T13</Tier><Filename>lofiObj5new</Filename><Row>8</Row><Column>13</Column><SetName></SetName><SlotType>24</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>5</Fame></MultiHit></Soulbound><BaseDamage>145</BaseDamage><MaxDamage>185</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>365.0</Lifetime><Speed>130.0</Speed><ToolTip></ToolTip></Item><Item><Name>Kusanagi</Name><NameCode>0x024b</NameCode><Description>An awe-inspiring sword gifted to only the most worthy mortals from the heavens themselves.</Description><Tier>T14</Tier><Filename>lofiObj5new</Filename><Row>8</Row><Column>14</Column><SetName></SetName><SlotType>24</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>6</Fame></MultiHit></Soulbound><BaseDamage>150</BaseDamage><MaxDamage>190</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>365.0</Lifetime><Speed>130.0</Speed><ToolTip></ToolTip></Item><Item><Name>Useless Katana</Name><NameCode>0x914</NameCode><Description>A crappy katana that can barely cut anything.</Description><Tier>UT</Tier><Filename>lofiObj3</Filename><Row>61</Row><Column>11</Column><SetName></SetName><SlotType>24</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame></Soulbound><BaseDamage>10</BaseDamage><MaxDamage>30</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>350.0</Lifetime><Speed>100.0</Speed><ToolTip></ToolTip></Item><Item><Name>Ray Katana</Name><NameCode>0x915</NameCode><Description>A great katana charged with the power of the sun itself.</Description><Tier>UT</Tier><Filename>lofiObj3</Filename><Row>34</Row><Column>10</Column><SetName></SetName><SlotType>24</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>3</Fame></MultiHit></Soulbound><BaseDamage>111</BaseDamage><MaxDamage>111</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>340.0</Lifetime><Speed>180.0</Speed><ToolTip></ToolTip></Item><Item><Name>Celestial Blade</Name><NameCode>0x7565</NameCode><Description>An ancient weapon imbued with the power of the cosmos.</Description><Tier>UT</Tier><Filename>lairOfDraconisObjects8x8</Filename><Row>5</Row><Column>3</Column><SetName></SetName><SlotType>24</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>6</Fame></Soulbound><BaseDamage>200</BaseDamage><MaxDamage>220</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.65</Amplitude><Frequency>0.2</Frequency><ArcGap>0.0</ArcGap><Lifetime>400.0</Lifetime><Speed>130.0</Speed><ToolTip></ToolTip></Item><Item><Name>Doku No Ken</Name><NameCode>0xcdc</NameCode><Description>Stuck in the maw of the Son of Arachna, this Katana is coated in the creature\'s poisonous venom. In the hands of the right person, this is a truly deadly weapon.</Description><Tier>UT</Tier><Filename>lofiObj3</Filename><Row>64</Row><Column>4</Column><SetName></SetName><SlotType>24</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>5</Fame></MultiHit></Soulbound><BaseDamage>120</BaseDamage><MaxDamage>150</MaxDamage><RateOfFire>120</RateOfFire><Shots>1</Shots><Amplitude>0.5</Amplitude><Frequency>1.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>400.0</Lifetime><Speed>130.0</Speed><ToolTip></ToolTip></Item><Item><Name>Arbiter\'s Wrath</Name><NameCode>0xcee</NameCode><Description>Battle for the Nexus: Never Forget.</Description><Tier>UT</Tier><Filename>lofiObj3</Filename><Row>66</Row><Column>13</Column><SetName></SetName><SlotType>24</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame></MultiHit></Soulbound><BaseDamage>10</BaseDamage><MaxDamage>40</MaxDamage><RateOfFire>50</RateOfFire><Shots>1</Shots><Amplitude>0.5</Amplitude><Frequency>1.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>1600.0</Lifetime><Speed>30.0</Speed><ToolTip></ToolTip></Item><Item><Name>Diamond-Bladed Katana</Name><NameCode>0x228a</NameCode><Description>Diamonds are a girl\'s best friend, they also happen to make for great blades... so shiny!</Description><Tier>UT</Tier><Filename>lofiObj3</Filename><Row>74</Row><Column>7</Column><SetName></SetName><SlotType>24</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>1</Fame></MultiHit><BaseDamage>100</BaseDamage><MaxDamage>160</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>365.0</Lifetime><Speed>130.0</Speed><ToolTip></ToolTip></Item><Item><Name>Corrupted Cleaver</Name><NameCode>0xf14</NameCode><Description>This blade is drenched in the blood of heroes. Are you sure this blade is meant for you?</Description><Tier>UT</Tier><Filename>lofiObj3</Filename><Row>80</Row><Column>4</Column><SetName></SetName><SlotType>24</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>3</Fame></MultiHit><BaseDamage>120</BaseDamage><MaxDamage>175</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>365.0</Lifetime><Speed>130.0</Speed><ToolTip></ToolTip></Item><Item><Name>Salju</Name><NameCode>0x237f</NameCode><Description>The metal is icy cold to the touch and delivers a biting sting upon cutting.</Description><Tier>UT</Tier><Filename>lofiObj3</Filename><Row>85</Row><Column>9</Column><SetName></SetName><SlotType>24</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>3</Fame></MultiHit><BaseDamage>120</BaseDamage><MaxDamage>175</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>365.0</Lifetime><Speed>130.0</Speed><ToolTip></ToolTip></Item><Item><Name>Void Blade</Name><NameCode>0x716d</NameCode><Description>An astronomically heavy katana. It is forged from dark matter.</Description><Tier>UT</Tier><Filename>lofiObj3</Filename><Row>86</Row><Column>14</Column><SetName></SetName><SlotType>24</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>-5</DEX><VIT>0</VIT><WIS>0</WIS><Fame>6</Fame></MultiHit></Soulbound><BaseDamage>600</BaseDamage><MaxDamage>700</MaxDamage><RateOfFire>30</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>4200.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Katana of Good Fortune</Name><NameCode>0x7418</NameCode><Description>Create your own rainbow!\n\nSprite Credits: Aurum</Description><Tier>UT</Tier><Filename>stPatricksObjects8x8</Filename><Row>3</Row><Column>6</Column><SetName></SetName><SlotType>24</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>3</Fame></Soulbound><BaseDamage>10</BaseDamage><MaxDamage>30</MaxDamage><RateOfFire>140</RateOfFire><Shots>3</Shots><Amplitude>0.13</Amplitude><Frequency>2.25</Frequency><ArcGap>5.0</ArcGap><Lifetime>750.0</Lifetime><Speed>80.0</Speed><ToolTip></ToolTip></Item><Item><Name>Yuki</Name><NameCode>0x1acf</NameCode><Description>To be a true warrior, you must take winter into your heart.</Description><Tier>UT</Tier><Filename>oryxHordeObjects8x8</Filename><Row>12</Row><Column>5</Column><SetName></SetName><SlotType>24</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>7</Fame></MultiHit></Soulbound><BaseDamage>135</BaseDamage><MaxDamage>180</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>365.0</Lifetime><Speed>130.0</Speed><ToolTip></ToolTip></Item><Item><Name>Krathana</Name><NameCode>0x5b24</NameCode><Description>Omae wa...</Description><Tier>UT</Tier><Filename>d2LofiObjEmbed</Filename><Row>10</Row><Column>3</Column><SetName></SetName><SlotType>24</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>6</Fame></MultiHit></Soulbound><BaseDamage>1</BaseDamage><MaxDamage>75</MaxDamage><RateOfFire>120</RateOfFire><Shots>1</Shots><Amplitude>0.5</Amplitude><Frequency>1.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>650.0</Lifetime><Speed>130.0</Speed><ToolTip></ToolTip></Item><Item><Name>Kazekiri</Name><NameCode>0x203e</NameCode><Description>A Katana made to harness the energy of the Wind.</Description><Tier>ST</Tier><Filename>d2LofiObjEmbed</Filename><Row>10</Row><Column>9</Column><SetName>Akuma Slayer Set</SetName><SlotType>24</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame></MultiHit></Soulbound></PassesCover><BaseDamage>100</BaseDamage><MaxDamage>120</MaxDamage><RateOfFire>80</RateOfFire><Shots>2</Shots><Amplitude>0.4</Amplitude><Frequency>0.5</Frequency><ArcGap>0.0</ArcGap><Lifetime>300.0</Lifetime><Speed>150.0</Speed><ToolTip></ToolTip></Item><Item><Name>Blade of Ages</Name><NameCode>0x577</NameCode><Description>A katana once belonging to a royal sorcerer known for great ambition, but slow delivery. His treasured blade was prophesied to produce something wonderful... eventually.</Description><Tier>UT</Tier><Filename>theMachineObjects8x8</Filename><Row>6</Row><Column>9</Column><SetName></SetName><SlotType>24</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>2</Fame></MultiHit></Soulbound><BaseDamage>1000</BaseDamage><MaxDamage>1000</MaxDamage><RateOfFire>1</RateOfFire><Shots>1</Shots></Wavy><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>500.0</Lifetime><Speed>10.0</Speed><ToolTip></ToolTip></Item><Item><Name>Reikoku</Name><NameCode>0x1e4d</NameCode><Description>First summer storm cloud\nInflicting a thousand cuts\nBrilliance, then ash.</Description><Tier>ST</Tier><Filename>d2LofiObjEmbed</Filename><Row>13</Row><Column>11</Column><SetName>Raijin Disciple Set</SetName><SlotType>24</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame></DefIgnore></MultiHit></Soulbound><BaseDamage>65</BaseDamage><MaxDamage>80</MaxDamage><RateOfFire>100</RateOfFire><Shots>2</Shots><Amplitude>0.3</Amplitude><Frequency>1.7</Frequency><ArcGap>8.0</ArcGap><Lifetime>286.0</Lifetime><Speed>140.0</Speed><ToolTip></ToolTip></Item><Item><Name>Fire Blade</Name><NameCode>0x645d</NameCode><Description>Though rather unremarkable as far as alien weapons go, Malogian clans swear by this weapon as a good luck charm. Some things never change.</Description><Tier>UT</Tier><Filename>d2LofiObjEmbed</Filename><Row>16</Row><Column>8</Column><SetName></SetName><SlotType>24</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>7</Fame></MultiHit></Soulbound><BaseDamage>120</BaseDamage><MaxDamage>150</MaxDamage><RateOfFire>120</RateOfFire><Shots>1</Shots><Amplitude>0.5</Amplitude><Frequency>1.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>400.0</Lifetime><Speed>130.0</Speed><ToolTip>         <EffectInfo name="" description="Alien Gear"/>      </ToolTip></Item><Item><Name>Moonbeam Blade</Name><NameCode>0x645e</NameCode><Description>The frigid landscape of Untaris is chilled by the moonlight reflected from a planet of astral frost.\n\nSprite Credits: Trensient</Description><Tier>UT</Tier><Filename>d2LofiObjEmbed</Filename><Row>16</Row><Column>10</Column><SetName></SetName><SlotType>24</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>7</Fame></MultiHit></Soulbound><BaseDamage>111</BaseDamage><MaxDamage>111</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>340.0</Lifetime><Speed>180.0</Speed><ToolTip>         <EffectInfo name="" description="Alien Gear"/>      </ToolTip></Item><Item><Name>Blade of the Assailant</Name><NameCode>0x65f4</NameCode><Description>Though Oryx is only known to deploy his assassin units in times of personal need, the deliberately cruel craftsmanship of their katanas is no less remarkable.\n\nSprite Credits: Aurum</Description><Tier>UT</Tier><Filename>d2LofiObjEmbed</Filename><Row>21</Row><Column>13</Column><SetName></SetName><SlotType>24</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>5</Fame></MultiHit></Soulbound><BaseDamage>120</BaseDamage><MaxDamage>200</MaxDamage><RateOfFire>120</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>725.0</Lifetime><Speed>60.0</Speed><ToolTip></ToolTip></Item><Item><Name>Quartz Cutter</Name><NameCode>0x4b3c</NameCode><Description>Though its composition is merely a sharp crystal embedded in a rock, this naturally formed blade glistens with light, carving a path for its wielder to use.</Description><Tier>ST</Tier><Filename>d2LofiObjEmbed</Filename><Row>32</Row><Column>9</Column><SetName>Crystal Kunoichi Set</SetName><SlotType>24</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>5</Fame></MultiHit></Soulbound><BaseDamage>72</BaseDamage><MaxDamage>84</MaxDamage><RateOfFire>80</RateOfFire><Shots>3</Shots></Wavy><Amplitude>0.5</Amplitude><Frequency>0.5</Frequency><ArcGap>10.0</ArcGap><Lifetime>525.0</Lifetime><Speed>100.0</Speed><ToolTip></ToolTip></Item>';
    
    while (s.includes("<Item>"))
        {
            var tot = makeItem(s);
            katanas.push(tot);
            s = s.substring(s.indexOf("</Item>")+1, s.length)
        }
    
    s = '<Item><Name>(empty slot)</Name><NameCode></NameCode><Description></Description><Tier></Tier><Filename></Filename><Row>0</Row><Column>0</Column><SetName></SetName><SlotType>10</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Shortbow</Name><NameCode>0xa1a</NameCode><Description>A well-made shortbow.</Description><Tier>T0</Tier><Filename>lofiObj5</Filename><Row>5</Row><Column>0</Column><SetName></SetName><SlotType>3</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame></MultiHit><BaseDamage>15</BaseDamage><MaxDamage>45</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>440.0</Lifetime><Speed>160.0</Speed><ToolTip></ToolTip></Item><Item><Name>Reinforced Bow</Name><NameCode>0xa75</NameCode><Description>An iron-reinforced bow.</Description><Tier>T1</Tier><Filename>lofiObj5</Filename><Row>5</Row><Column>1</Column><SetName></SetName><SlotType>3</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame></MultiHit><BaseDamage>20</BaseDamage><MaxDamage>50</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>440.0</Lifetime><Speed>160.0</Speed><ToolTip></ToolTip></Item><Item><Name>Crossbow</Name><NameCode>0xa1b</NameCode><Description>A bow mounted on a stock that shoots with amazing speed and accuracy.</Description><Tier>T2</Tier><Filename>lofiObj5</Filename><Row>5</Row><Column>2</Column><SetName></SetName><SlotType>3</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame></MultiHit><BaseDamage>25</BaseDamage><MaxDamage>60</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>375.0</Lifetime><Speed>200.0</Speed><ToolTip></ToolTip></Item><Item><Name>Greywood Bow</Name><NameCode>0xa76</NameCode><Description>A bow made from the rare greywood tree.</Description><Tier>T3</Tier><Filename>lofiObj5</Filename><Row>5</Row><Column>3</Column><SetName></SetName><SlotType>3</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame></MultiHit><BaseDamage>30</BaseDamage><MaxDamage>65</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>440.0</Lifetime><Speed>160.0</Speed><ToolTip></ToolTip></Item><Item><Name>Ironwood Bow</Name><NameCode>0xa77</NameCode><Description>A high-quality bow made of magical ironwood.</Description><Tier>T4</Tier><Filename>lofiObj5</Filename><Row>5</Row><Column>4</Column><SetName></SetName><SlotType>3</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame></MultiHit><BaseDamage>40</BaseDamage><MaxDamage>70</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>440.0</Lifetime><Speed>160.0</Speed><ToolTip></ToolTip></Item><Item><Name>Fire Bow</Name><NameCode>0xa1c</NameCode><Description>A bow that shoots arrows that burn with an unholy fire.</Description><Tier>T5</Tier><Filename>lofiObj5</Filename><Row>5</Row><Column>5</Column><SetName></SetName><SlotType>3</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame></MultiHit><BaseDamage>50</BaseDamage><MaxDamage>75</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>440.0</Lifetime><Speed>160.0</Speed><ToolTip></ToolTip></Item><Item><Name>Double Bow</Name><NameCode>0xa1d</NameCode><Description>A bow that somehow manages to shoot two arrows in different directions.</Description><Tier>T6</Tier><Filename>lofiObj5</Filename><Row>5</Row><Column>6</Column><SetName></SetName><SlotType>3</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame></MultiHit><BaseDamage>30</BaseDamage><MaxDamage>55</MaxDamage><RateOfFire>100</RateOfFire><Shots>2</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>11.25</ArcGap><Lifetime>440.0</Lifetime><Speed>160.0</Speed><ToolTip></ToolTip></Item><Item><Name>Heavy Crossbow</Name><NameCode>0xa3a</NameCode><Description>A slow but powerful crossbow with a good grip.</Description><Tier>T7</Tier><Filename>lofiObj5</Filename><Row>5</Row><Column>7</Column><SetName></SetName><SlotType>3</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame></MultiHit><BaseDamage>55</BaseDamage><MaxDamage>80</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>500.0</Lifetime><Speed>150.0</Speed><ToolTip></ToolTip></Item><Item><Name>Golden Bow</Name><NameCode>0xa1e</NameCode><Description>A bow gifted to mortals from the gods themselves. It shoots powerful arrows in three directions at once.</Description><Tier>T8</Tier><Filename>lofiObj5</Filename><Row>5</Row><Column>8</Column><SetName></SetName><SlotType>3</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>1</Fame></MultiHit><BaseDamage>40</BaseDamage><MaxDamage>61</MaxDamage><RateOfFire>100</RateOfFire><Shots>3</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>8.0</ArcGap><Lifetime>440.0</Lifetime><Speed>160.0</Speed><ToolTip></ToolTip></Item><Item><Name>Verdant Bow</Name><NameCode>0xa8b</NameCode><Description>A highly effective bow fashioned of still-living magical springwood.</Description><Tier>T9</Tier><Filename>lofiObj5</Filename><Row>5</Row><Column>9</Column><SetName></SetName><SlotType>3</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>1</Fame></MultiHit><BaseDamage>40</BaseDamage><MaxDamage>67</MaxDamage><RateOfFire>100</RateOfFire><Shots>3</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>8.0</ArcGap><Lifetime>440.0</Lifetime><Speed>160.0</Speed><ToolTip></ToolTip></Item><Item><Name>Bow of Fey Magic</Name><NameCode>0xa8c</NameCode><Description>A powerful bow crafted by dryads and blessed by the spirits of the woodlands.</Description><Tier>T10</Tier><Filename>lofiObj5</Filename><Row>5</Row><Column>10</Column><SetName></SetName><SlotType>3</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>2</Fame></MultiHit><BaseDamage>48</BaseDamage><MaxDamage>65</MaxDamage><RateOfFire>100</RateOfFire><Shots>3</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>8.0</ArcGap><Lifetime>440.0</Lifetime><Speed>160.0</Speed><ToolTip></ToolTip></Item><Item><Name>Bow of Innocent Blood</Name><NameCode>0xa8d</NameCode><Description>A runed bow steeped in the dark power of ancient injustice.</Description><Tier>T11</Tier><Filename>lofiObj5</Filename><Row>5</Row><Column>11</Column><SetName></SetName><SlotType>3</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>3</Fame></MultiHit><BaseDamage>49</BaseDamage><MaxDamage>70</MaxDamage><RateOfFire>100</RateOfFire><Shots>3</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>8.0</ArcGap><Lifetime>440.0</Lifetime><Speed>160.0</Speed><ToolTip></ToolTip></Item><Item><Name>Bow of Covert Havens</Name><NameCode>0xb02</NameCode><Description>A diamondwire bow used by guardians of the unseen ethereal shrines.</Description><Tier>T12</Tier><Filename>lofiObj5new</Filename><Row>5</Row><Column>12</Column><SetName></SetName><SlotType>3</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame></MultiHit><BaseDamage>50</BaseDamage><MaxDamage>75</MaxDamage><RateOfFire>100</RateOfFire><Shots>3</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>8.0</ArcGap><Lifetime>440.0</Lifetime><Speed>160.0</Speed><ToolTip></ToolTip></Item><Item><Name>Bow of Mystical Energy</Name><NameCode>0x9cc</NameCode><Description>A superlative bow of sunsteel and diamondwire, created by a secretive race of star-dwelling entities.</Description><Tier>T13</Tier><Filename>lofiObj5new</Filename><Row>5</Row><Column>13</Column><SetName></SetName><SlotType>3</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>5</Fame></MultiHit></Soulbound><BaseDamage>55</BaseDamage><MaxDamage>75</MaxDamage><RateOfFire>100</RateOfFire><Shots>3</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>8.0</ArcGap><Lifetime>440.0</Lifetime><Speed>160.0</Speed><ToolTip></ToolTip></Item><Item><Name>Bow of Deep Enchantment</Name><NameCode>0x9cd</NameCode><Description>A peerless triple bow crafted of nightmatter and diamondwire by the exalted bowyers of the primeval overgods.</Description><Tier>T14</Tier><Filename>lofiObj5new</Filename><Row>5</Row><Column>14</Column><SetName></SetName><SlotType>3</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>6</Fame></MultiHit></Soulbound><BaseDamage>55</BaseDamage><MaxDamage>80</MaxDamage><RateOfFire>100</RateOfFire><Shots>3</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>8.0</ArcGap><Lifetime>440.0</Lifetime><Speed>160.0</Speed><ToolTip></ToolTip></Item><Item><Name>Doom Bow</Name><NameCode>0xc02</NameCode><Description>No mortal can fire this dreaded bow without resting in between shots. It requires tremendous skill to wield.</Description><Tier>UT</Tier><Filename>lofiObj2</Filename><Row>6</Row><Column>10</Column><SetName></SetName><SlotType>3</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>6</Fame></MultiHit></Soulbound><BaseDamage>400</BaseDamage><MaxDamage>500</MaxDamage><RateOfFire>33</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>503.0</Lifetime><Speed>140.0</Speed><ToolTip></ToolTip></Item><Item><Name>Coral Bow</Name><NameCode>0xc10</NameCode><Description>A bow fashioned from living coral found in only the deepest ocean trenches.  It is the favored weapon of those that inhabit the realms beneath the waves.</Description><Tier>UT</Tier><Filename>lofiObj2</Filename><Row>0</Row><Column>4</Column><SetName></SetName><SlotType>3</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>6</Fame></MultiHit></Soulbound><BaseDamage>60</BaseDamage><MaxDamage>80</MaxDamage><RateOfFire>125</RateOfFire><Shots>2</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>11.25</ArcGap><Lifetime>420.0</Lifetime><Speed>185.0</Speed><ToolTip></ToolTip></Item><Item><Name>Thousand Shot</Name><NameCode>0x9d5</NameCode><Description>A deadly repeater crossbow and a marvel of craftsmanship. This mechanical weapon is efficient, but carries additional weight.</Description><Tier>UT</Tier><Filename>lofiObj2</Filename><Row>1</Row><Column>10</Column><SetName></SetName><SlotType>3</SlotType><HP>0</HP><MP>30</MP><ATK>0</ATK><DEF>0</DEF><SPD>-5</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>6</Fame></MultiHit></Soulbound><BaseDamage>40</BaseDamage><MaxDamage>130</MaxDamage><RateOfFire>200</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>460.0</Lifetime><Speed>165.0</Speed><ToolTip></ToolTip></Item><Item><Name>Leaf Bow</Name><NameCode>0xcde</NameCode><Description>Fashioned from the finest logs found within the Woodland Labyrinths, this bow uses sharp leaves instead of conventional arrows. Such lightweight ammunition allows for quick movement.</Description><Tier>UT</Tier><Filename>lofiObj3</Filename><Row>64</Row><Column>5</Column><SetName></SetName><SlotType>3</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>5</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>5</Fame></Soulbound><BaseDamage>115</BaseDamage><MaxDamage>170</MaxDamage><RateOfFire>140</RateOfFire><Shots>1</Shots></Wavy><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>600.0</Lifetime><Speed>120.0</Speed><ToolTip></ToolTip></Item><Item><Name>Robobow</Name><NameCode>0xcec</NameCode><Description>Toats sweet robobow bro!</Description><Tier>UT</Tier><Filename>lofiObj3</Filename><Row>66</Row><Column>11</Column><SetName></SetName><SlotType>3</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame></MultiHit></Soulbound><BaseDamage>20</BaseDamage><MaxDamage>30</MaxDamage><RateOfFire>150</RateOfFire><Shots>3</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>15.0</ArcGap><Lifetime>1000.0</Lifetime><Speed>50.0</Speed><ToolTip></ToolTip></Item><Item><Name>Cupid\'s Bow</Name><NameCode>0x228f</NameCode><Description>This probably doesn\'t have a chance of making monsters fall in love with you. I mean, I don\'t think so.</Description><Tier>UT</Tier><Filename>lofiObj3</Filename><Row>74</Row><Column>4</Column><SetName></SetName><SlotType>3</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>1</Fame></MultiHit><BaseDamage>40</BaseDamage><MaxDamage>67</MaxDamage><RateOfFire>100</RateOfFire><Shots>3</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>8.0</ArcGap><Lifetime>440.0</Lifetime><Speed>160.0</Speed><ToolTip></ToolTip></Item><Item><Name>Bow of the Morning Star</Name><NameCode>0x2301</NameCode><Description>A bow of light forged by the angels for use in their eternal struggle against darkness and evil.</Description><Tier>UT</Tier><Filename>lofiObj3</Filename><Row>76</Row><Column>10</Column><SetName></SetName><SlotType>3</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>6</Fame></MultiHit></Soulbound><BaseDamage>400</BaseDamage><MaxDamage>500</MaxDamage><RateOfFire>33</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>503.0</Lifetime><Speed>140.0</Speed><ToolTip></ToolTip></Item><Item><Name>Precisely Calibrated Stringstick</Name><NameCode>0x2325</NameCode><Description>Meow! Meow meow meow! MEOWMEOWMEOW.</Description><Tier>UT</Tier><Filename>lofiObj3</Filename><Row>77</Row><Column>1</Column><SetName></SetName><SlotType>3</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>10</BaseDamage><MaxDamage>15</MaxDamage><RateOfFire>25</RateOfFire><Shots>5</Shots><Amplitude>2.0</Amplitude><Frequency>2.0</Frequency><ArcGap>15.0</ArcGap><Lifetime>2000.0</Lifetime><Speed>25.0</Speed><ToolTip></ToolTip></Item><Item><Name>Bow of Nightmares</Name><NameCode>0xf12</NameCode><Description>You can hear the screams of tortured souls as you draw this bow.</Description><Tier>UT</Tier><Filename>lofiObj3</Filename><Row>80</Row><Column>2</Column><SetName></SetName><SlotType>3</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>3</Fame></MultiHit><BaseDamage>49</BaseDamage><MaxDamage>70</MaxDamage><RateOfFire>100</RateOfFire><Shots>3</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>8.0</ArcGap><Lifetime>440.0</Lifetime><Speed>160.0</Speed><ToolTip></ToolTip></Item><Item><Name>Bow of Eternal Frost</Name><NameCode>0x258a</NameCode><Description>You are not a unique snowflake. You\'re like one of five or something.</Description><Tier>UT</Tier><Filename>lofiObj3</Filename><Row>73</Row><Column>1</Column><SetName></SetName><SlotType>3</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>3</Fame></MultiHit><BaseDamage>49</BaseDamage><MaxDamage>70</MaxDamage><RateOfFire>100</RateOfFire><Shots>3</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>8.0</ArcGap><Lifetime>440.0</Lifetime><Speed>160.0</Speed><ToolTip></ToolTip></Item><Item><Name>Arctic Bow</Name><NameCode>0x16d9</NameCode><Description>A bow, fashioned from solid ice, enchanted not to melt. It\'s often used by elven hunters of the arctic wastes.\n\nSprite Credits: Poshun</Description><Tier>UT</Tier><Filename>d2LofiObjEmbed</Filename><Row>1</Row><Column>12</Column><SetName></SetName><SlotType>3</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>6</Fame></MultiHit></Soulbound><BaseDamage>60</BaseDamage><MaxDamage>80</MaxDamage><RateOfFire>125</RateOfFire><Shots>2</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>11.25</ArcGap><Lifetime>420.0</Lifetime><Speed>185.0</Speed><ToolTip></ToolTip></Item><Item><Name>Clover Bow</Name><NameCode>0x164a</NameCode><Description>Good thing this bow is lucky because it sure doesn\'t hit very hard!\n\nSprite Credits: Beige</Description><Tier>UT</Tier><Filename>stPatricksObjects8x8</Filename><Row>0</Row><Column>9</Column><SetName></SetName><SlotType>3</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>3</Fame></MultiHit></Soulbound><BaseDamage>10</BaseDamage><MaxDamage>30</MaxDamage><RateOfFire>50</RateOfFire><Shots>8</Shots><Amplitude>3.59</Amplitude><Frequency>0.42</Frequency><ArcGap>45.0</ArcGap><Lifetime>500.0</Lifetime><Speed>90.0</Speed><ToolTip></ToolTip></Item><Item><Name>Nectar Crossfire</Name><NameCode>0x08f7</NameCode><Description>A flexible ironwax bow created by the Felwasp Guards to defend their larvae from assailants.</Description><Tier>ST</Tier><Filename>epicHiveObjects8x8</Filename><Row>6</Row><Column>5</Column><SetName>Swarming Huntress Set</SetName><SlotType>3</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame></MultiHit></Soulbound><BaseDamage>35</BaseDamage><MaxDamage>60</MaxDamage><RateOfFire>100</RateOfFire><Shots>4</Shots><Amplitude>0.5</Amplitude><Frequency>0.5</Frequency><ArcGap>4.0</ArcGap><Lifetime>468.0</Lifetime><Speed>150.0</Speed><ToolTip></ToolTip></Item><Item><Name>Bow of the Void</Name><NameCode>0x024c</NameCode><Description>Every shot that hits a target frees the soul of a forgotten hero. Every shot that misses is trapped for eternity.</Description><Tier>UT</Tier><Filename>lostHallsObjects8x8</Filename><Row>10</Row><Column>7</Column><SetName></SetName><SlotType>3</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>6</Fame></MultiHit></Soulbound><BaseDamage>165</BaseDamage><MaxDamage>235</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.35</Amplitude><Frequency>0.2</Frequency><ArcGap>0.0</ArcGap><Lifetime>350.0</Lifetime><Speed>160.0</Speed><ToolTip></ToolTip></Item><Item><Name>Icicle Launcher</Name><NameCode>0x1aca</NameCode><Description>Magic in the bow pulls in water vapor and instantly freezes it, creating ammo out of thin air. Not recommended for desert use.</Description><Tier>UT</Tier><Filename>oryxHordeObjects8x8</Filename><Row>12</Row><Column>0</Column><SetName></SetName><SlotType>3</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>7</Fame></MultiHit></Soulbound><BaseDamage>50</BaseDamage><MaxDamage>75</MaxDamage><RateOfFire>100</RateOfFire><Shots>3</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>8.0</ArcGap><Lifetime>440.0</Lifetime><Speed>160.0</Speed><ToolTip></ToolTip></Item><Item><Name>Heartstruck Bow</Name><NameCode>0x6406</NameCode><Description>Some people wear their heart on their sleeve, I chose to use mine as ammunition!\n\nSprite Credits: WunderWafe</Description><Tier>ST</Tier><Filename>d2LofiObjEmbed</Filename><Row>6</Row><Column>5</Column><SetName>Valentine\'s Day Archer Set</SetName><SlotType>3</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>5</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>7</Fame></Soulbound><BaseDamage>115</BaseDamage><MaxDamage>170</MaxDamage><RateOfFire>140</RateOfFire><Shots>1</Shots></Wavy><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>600.0</Lifetime><Speed>120.0</Speed><ToolTip></ToolTip></Item><Item><Name>Sunny Side Bow</Name><NameCode>0x13a8</NameCode><Description>A weapon of mass eggstruction.</Description><Tier>UT</Tier><Filename>buffedBunnyObjects8x8</Filename><Row>3</Row><Column>0</Column><SetName></SetName><SlotType>3</SlotType><HP>0</HP><MP>30</MP><ATK>0</ATK><DEF>0</DEF><SPD>-5</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>7</Fame></MultiHit></Soulbound><BaseDamage>40</BaseDamage><MaxDamage>130</MaxDamage><RateOfFire>200</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>460.0</Lifetime><Speed>165.0</Speed><ToolTip></ToolTip></Item><Item><Name>Brilliance Bow</Name><NameCode>0x578</NameCode><Description>A revered bow hidden away for many years by those wise enough to recognize the danger of its devestating might. Its strength is unmatched throughout the universe.</Description><Tier>ST</Tier><Filename>theMachineObjects8x8</Filename><Row>7</Row><Column>10</Column><SetName>Golden Archer Set</SetName><SlotType>3</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>6</Fame></MultiHit></Soulbound><BaseDamage>1</BaseDamage><MaxDamage>10</MaxDamage><RateOfFire>100</RateOfFire><Shots>3</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>8.0</ArcGap><Lifetime>440.0</Lifetime><Speed>159.0</Speed><ToolTip></ToolTip></Item><Item><Name>Butter Bow</Name><NameCode>0x575</NameCode><Description>Crispy, buttered, wheat or rye. In toast it lives, in toast it dies.</Description><Tier>UT</Tier><Filename>theMachineObjects8x8</Filename><Row>6</Row><Column>7</Column><SetName></SetName><SlotType>3</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>5</Fame></MultiHit></Soulbound><BaseDamage>15</BaseDamage><MaxDamage>50</MaxDamage><RateOfFire>120</RateOfFire><Shots>5</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>23.0</ArcGap><Lifetime>600.0</Lifetime><Speed>160.0</Speed><ToolTip></ToolTip></Item><Item><Name>Deathless Crossbow</Name><NameCode>0x1e44</NameCode><Description>Distinguished archers are permitted to take their prized bow with them to the afterlife. It conjures ethereal arrows when drawn, penetrating the very souls of living beings.</Description><Tier>ST</Tier><Filename>d2LofiObjEmbed</Filename><Row>13</Row><Column>4</Column><SetName>Phantom Archer Set</SetName><SlotType>3</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame></MultiHit></Soulbound><BaseDamage>155</BaseDamage><MaxDamage>250</MaxDamage><RateOfFire>95</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>200.0</Lifetime><Speed>280.0</Speed><ToolTip></ToolTip></Item><Item><Name>Blazon Bow</Name><NameCode>0x645f</NameCode><Description>A stunning bow forged in the heat of a massive star many lightyears beyond the realm.</Description><Tier>UT</Tier><Filename>d2LofiObjEmbed</Filename><Row>17</Row><Column>10</Column><SetName></SetName><SlotType>3</SlotType><HP>0</HP><MP>30</MP><ATK>0</ATK><DEF>0</DEF><SPD>-5</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>7</Fame></MultiHit></Soulbound><BaseDamage>40</BaseDamage><MaxDamage>130</MaxDamage><RateOfFire>200</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>460.0</Lifetime><Speed>165.0</Speed><ToolTip>         <EffectInfo name="" description="Alien Gear"/>      </ToolTip></Item><Item><Name>Sun\'s Judgement</Name><NameCode>0x6460</NameCode><Description>The abnormal alignment of Malogia\'s moons block direct light from its sun during most of its revolution. The brief periods of visiblity are ferociously hot.\n\nSprite Credits: Artauris</Description><Tier>UT</Tier><Filename>d2LofiObjEmbed</Filename><Row>16</Row><Column>6</Column><SetName></SetName><SlotType>3</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>7</Fame></MultiHit></Soulbound><BaseDamage>400</BaseDamage><MaxDamage>500</MaxDamage><RateOfFire>33</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>503.0</Lifetime><Speed>140.0</Speed><ToolTip>         <EffectInfo name="" description="Alien Gear"/>      </ToolTip></Item><Item><Name>Predator Bow</Name><NameCode>0x65f1</NameCode><Description>Not one for long distance combat himself, Oryx leaves archery training in the hands of former realm heroes who defected to his side.\n\nSprite Credits: Aurum</Description><Tier>UT</Tier><Filename>d2LofiObjEmbed</Filename><Row>21</Row><Column>10</Column><SetName></SetName><SlotType>3</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>5</Fame></MultiHit></Soulbound><BaseDamage>95</BaseDamage><MaxDamage>140</MaxDamage><RateOfFire>75</RateOfFire><Shots>5</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>175.0</ArcGap><Lifetime>400.0</Lifetime><Speed>160.0</Speed><ToolTip></ToolTip></Item><Item><Name>Bone Bow</Name><NameCode>0x648a</NameCode><Description>A rib strung together by a tendon, sure to send shivers down your enemy\'s spines.\n\nSprite Credits: Tero, Aurum</Description><Tier>ST</Tier><Filename>d2LofiObjEmbed</Filename><Row>23</Row><Column>0</Column><SetName>Reanimated Archer Set</SetName><SlotType>3</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame></MultiHit></Soulbound><BaseDamage>155</BaseDamage><MaxDamage>250</MaxDamage><RateOfFire>95</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>200.0</Lifetime><Speed>280.0</Speed><ToolTip></ToolTip></Item><Item><Name>Bergenia Bow</Name><NameCode>0x1844</NameCode><Description>Decorated with the finest flora of the realm\'s toughest forests, this bow uses the sharp cymes of plant life as arrows against would-be vandalizers.</Description><Tier>ST</Tier><Filename>d2LofiObjEmbed</Filename><Row>29</Row><Column>0</Column><SetName>Horticultural Huntress Set</SetName><SlotType>3</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame></DefIgnore></Soulbound><BaseDamage>160</BaseDamage><MaxDamage>195</MaxDamage><RateOfFire>90</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>533.0</Lifetime><Speed>150.0</Speed><ToolTip></ToolTip></Item>';
    
    while (s.includes("<Item>"))
        {
            var tot = makeItem(s);
            bows.push(tot);
            s = s.substring(s.indexOf("</Item>")+1, s.length)
        }
    
    s = '<Item><Name>(empty slot)</Name><NameCode></NameCode><Description></Description><Tier></Tier><Filename></Filename><Row>0</Row><Column>0</Column><SetName></SetName><SlotType>10</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Steel Dagger</Name><NameCode>0xa14</NameCode><Description>A sharp dagger made of steel.</Description><Tier>T0</Tier><Filename>lofiObj5</Filename><Row>6</Row><Column>0</Column><SetName></SetName><SlotType>2</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>20</BaseDamage><MaxDamage>60</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>400.0</Lifetime><Speed>140.0</Speed><ToolTip></ToolTip></Item><Item><Name>Dirk</Name><NameCode>0xa15</NameCode><Description>A short sword blade mounted on a dagger hilt.</Description><Tier>T1</Tier><Filename>lofiObj5</Filename><Row>6</Row><Column>1</Column><SetName></SetName><SlotType>2</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>20</BaseDamage><MaxDamage>70</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>400.0</Lifetime><Speed>140.0</Speed><ToolTip></ToolTip></Item><Item><Name>Blue Steel Dagger</Name><NameCode>0xa72</NameCode><Description>A dagger made of blued steel.</Description><Tier>T2</Tier><Filename>lofiObj5</Filename><Row>6</Row><Column>2</Column><SetName></SetName><SlotType>2</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>20</BaseDamage><MaxDamage>75</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>400.0</Lifetime><Speed>140.0</Speed><ToolTip></ToolTip></Item><Item><Name>Dusky Rose Dagger</Name><NameCode>0xa73</NameCode><Description>A dagger made of rose-tinted steel.</Description><Tier>T3</Tier><Filename>lofiObj5</Filename><Row>6</Row><Column>3</Column><SetName></SetName><SlotType>2</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>25</BaseDamage><MaxDamage>80</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>400.0</Lifetime><Speed>140.0</Speed><ToolTip></ToolTip></Item><Item><Name>Silver Dagger</Name><NameCode>0xa74</NameCode><Description>A silver-plated steel dagger.</Description><Tier>T4</Tier><Filename>lofiObj5</Filename><Row>6</Row><Column>4</Column><SetName></SetName><SlotType>2</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>30</BaseDamage><MaxDamage>80</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>400.0</Lifetime><Speed>140.0</Speed><ToolTip></ToolTip></Item><Item><Name>Golden Dagger</Name><NameCode>0xa16</NameCode><Description>A well-made dagger plated with gold and inscribed with evil runes.</Description><Tier>T5</Tier><Filename>lofiObj5</Filename><Row>6</Row><Column>5</Column><SetName></SetName><SlotType>2</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>30</BaseDamage><MaxDamage>90</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>400.0</Lifetime><Speed>140.0</Speed><ToolTip></ToolTip></Item><Item><Name>Obsidian Dagger</Name><NameCode>0xa17</NameCode><Description>A dagger with a blade made of volcanic glass.</Description><Tier>T6</Tier><Filename>lofiObj5</Filename><Row>6</Row><Column>6</Column><SetName></SetName><SlotType>2</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>35</BaseDamage><MaxDamage>65</MaxDamage><RateOfFire>150</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>400.0</Lifetime><Speed>140.0</Speed><ToolTip></ToolTip></Item><Item><Name>Poison Fang Dagger</Name><NameCode>0x709</NameCode><Description>A dagger fashioned from the fang of an enormous spider.</Description><Tier>UT</Tier><Filename>lofiObj2</Filename><Row>2</Row><Column>2</Column><SetName></SetName><SlotType>2</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame></Soulbound><BaseDamage>55</BaseDamage><MaxDamage>120</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>400.0</Lifetime><Speed>140.0</Speed><ToolTip></ToolTip></Item><Item><Name>Mithril Dagger</Name><NameCode>0xa18</NameCode><Description>An extremely sharp dagger made from the strongest and most desirable of all metals.</Description><Tier>T7</Tier><Filename>lofiObj5</Filename><Row>6</Row><Column>7</Column><SetName></SetName><SlotType>2</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>60</BaseDamage><MaxDamage>140</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>400.0</Lifetime><Speed>140.0</Speed><ToolTip></ToolTip></Item><Item><Name>Fire Dagger</Name><NameCode>0xa19</NameCode><Description>A dagger with a blade that burns with an unholy magic.</Description><Tier>T8</Tier><Filename>lofiObj5</Filename><Row>6</Row><Column>8</Column><SetName></SetName><SlotType>2</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>1</Fame><BaseDamage>80</BaseDamage><MaxDamage>160</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>400.0</Lifetime><Speed>140.0</Speed><ToolTip></ToolTip></Item><Item><Name>Ragetalon Dagger</Name><NameCode>0xa88</NameCode><Description>A sharp druidic dagger vibrating with primal energies.</Description><Tier>T9</Tier><Filename>lofiObj5</Filename><Row>6</Row><Column>9</Column><SetName></SetName><SlotType>2</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>1</Fame><BaseDamage>85</BaseDamage><MaxDamage>165</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>400.0</Lifetime><Speed>140.0</Speed><ToolTip></ToolTip></Item><Item><Name>Emeraldshard Dagger</Name><NameCode>0xa89</NameCode><Description>A deadly dagger of glittering magical emerald.</Description><Tier>T10</Tier><Filename>lofiObj5</Filename><Row>6</Row><Column>10</Column><SetName></SetName><SlotType>2</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>2</Fame><BaseDamage>90</BaseDamage><MaxDamage>170</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>400.0</Lifetime><Speed>140.0</Speed><ToolTip></ToolTip></Item><Item><Name>Agateclaw Dagger</Name><NameCode>0xa8a</NameCode><Description>A dagger of rare purple agate, infused with powerful dark magics.</Description><Tier>T11</Tier><Filename>lofiObj5</Filename><Row>6</Row><Column>11</Column><SetName></SetName><SlotType>2</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>3</Fame><BaseDamage>90</BaseDamage><MaxDamage>175</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>400.0</Lifetime><Speed>140.0</Speed><ToolTip></ToolTip></Item><Item><Name>Dagger of Foul Malevolence</Name><NameCode>0xaff</NameCode><Description>A crimson felsteel dagger saturated with evil magic and primordial hatreds.</Description><Tier>T12</Tier><Filename>lofiObj5new</Filename><Row>6</Row><Column>12</Column><SetName></SetName><SlotType>2</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame><BaseDamage>95</BaseDamage><MaxDamage>175</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>400.0</Lifetime><Speed>140.0</Speed><ToolTip></ToolTip></Item><Item><Name>Dagger of Sinister Deeds</Name><NameCode>0x9c6</NameCode><Description>A moonsteel dagger of the underworld, corrupted by loathsome enchantments and profane spells.</Description><Tier>T13</Tier><Filename>lofiObj5new</Filename><Row>6</Row><Column>13</Column><SetName></SetName><SlotType>2</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>5</Fame></Soulbound><BaseDamage>95</BaseDamage><MaxDamage>180</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>400.0</Lifetime><Speed>140.0</Speed><ToolTip></ToolTip></Item><Item><Name>Dagger of Dire Hatred</Name><NameCode>0x9c7</NameCode><Description>A jagged, wickedly barbed blade of evil, charged with the unreasoning rage of ancestral vendettas.</Description><Tier>T14</Tier><Filename>lofiObj5new</Filename><Row>6</Row><Column>14</Column><SetName></SetName><SlotType>2</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>6</Fame></Soulbound><BaseDamage>100</BaseDamage><MaxDamage>180</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>400.0</Lifetime><Speed>140.0</Speed><ToolTip></ToolTip></Item><Item><Name>Dirk of Cronus</Name><NameCode>0xc0a</NameCode><Description>This legendary dagger was commissioned by a band of mad rogues to prove the worth of the Dirk.</Description><Tier>UT</Tier><Filename>lofiObj2</Filename><Row>5</Row><Column>4</Column><SetName></SetName><SlotType>2</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>6</WIS><Fame>6</Fame></Soulbound><BaseDamage>130</BaseDamage><MaxDamage>250</MaxDamage><RateOfFire>90</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>250.0</Lifetime><Speed>180.0</Speed><ToolTip></ToolTip></Item><Item><Name>Chicken Leg of Doom</Name><NameCode>0xb21</NameCode><Description>A chicken leg of doom.</Description><Tier>UT</Tier><Filename>lofiObj</Filename><Row>1</Row><Column>13</Column><SetName></SetName><SlotType>2</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame></Soulbound><BaseDamage>65</BaseDamage><MaxDamage>105</MaxDamage><RateOfFire>90</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>600.0</Lifetime><Speed>100.0</Speed><ToolTip></ToolTip></Item><Item><Name>Bone Dagger</Name><NameCode>0xc22</NameCode><Description>A dagger made of razor-sharp bone.</Description><Tier>UT</Tier><Filename>lofiObj2</Filename><Row>2</Row><Column>8</Column><SetName></SetName><SlotType>2</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>2</Fame></MultiHit></Soulbound><BaseDamage>70</BaseDamage><MaxDamage>130</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>320.0</Lifetime><Speed>140.0</Speed><ToolTip></ToolTip></Item><Item><Name>Spirit Dagger</Name><NameCode>0xc29</NameCode><Description>A dagger that was condemned to Davy Jones\' Locker.</Description><Tier>UT</Tier><Filename>lofiObj3</Filename><Row>12</Row><Column>9</Column><SetName></SetName><SlotType>2</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame></Soulbound><BaseDamage>45</BaseDamage><MaxDamage>245</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.2</Amplitude><Frequency>0.2</Frequency><ArcGap>0.0</ArcGap><Lifetime>400.0</Lifetime><Speed>130.0</Speed><ToolTip></ToolTip></Item><Item><Name>Sunshine Shiv</Name><NameCode>0xced</NameCode><Description>Forged from sunshine, baby smiles, and the sparkle from unicorns.</Description><Tier>UT</Tier><Filename>lofiObj3</Filename><Row>66</Row><Column>12</Column><SetName></SetName><SlotType>2</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame></Soulbound><BaseDamage>15</BaseDamage><MaxDamage>30</MaxDamage><RateOfFire>50</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>1500.0</Lifetime><Speed>30.0</Speed><ToolTip></ToolTip></Item><Item><Name>Heartfind Dagger</Name><NameCode>0x228d</NameCode><Description>This dagger is said to point in the direction of the one you love. Or intend to stab.\n\nSprite Credits: ngbro</Description><Tier>UT</Tier><Filename>lofiObj3</Filename><Row>74</Row><Column>2</Column><SetName></SetName><SlotType>2</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>1</Fame><BaseDamage>85</BaseDamage><MaxDamage>165</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>400.0</Lifetime><Speed>140.0</Speed><ToolTip></ToolTip></Item><Item><Name>Dagger of the Amethyst Prism</Name><NameCode>0x232a</NameCode><Description>A dagger imbued with Amethyst magic to protect its owner from harm.</Description><Tier>UT</Tier><Filename>lofiObj3</Filename><Row>76</Row><Column>14</Column><SetName></SetName><SlotType>2</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame></Soulbound><BaseDamage>95</BaseDamage><MaxDamage>175</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>400.0</Lifetime><Speed>140.0</Speed><ToolTip></ToolTip></Item><Item><Name>Toy Knife</Name><NameCode>0x2328</NameCode><Description>This was all the rage a few Winter Solstices ago.</Description><Tier>UT</Tier><Filename>lofiObj3</Filename><Row>77</Row><Column>3</Column><SetName></SetName><SlotType>2</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>50</BaseDamage><MaxDamage>50</MaxDamage><RateOfFire>75</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>1000.0</Lifetime><Speed>50.0</Speed><ToolTip></ToolTip></Item><Item><Name>Dagger of the Terrible Talon</Name><NameCode>0xf11</NameCode><Description>A claw-shard from Feargus, the Obsidian Dragon.</Description><Tier>UT</Tier><Filename>lofiObj3</Filename><Row>80</Row><Column>1</Column><SetName></SetName><SlotType>2</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>3</Fame><BaseDamage>90</BaseDamage><MaxDamage>175</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>400.0</Lifetime><Speed>140.0</Speed><ToolTip></ToolTip></Item><Item><Name>Legacy Etherite Dagger</Name><NameCode>0x21a0</NameCode><Description>Made of a strange metal not known to the living.</Description><Tier>ST</Tier><Filename>lofiObj3</Filename><Row>82</Row><Column>6</Column><SetName>Legacy Skuld 2 The ReGhostening Set</SetName><SlotType>2</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame><BaseDamage>110</BaseDamage><MaxDamage>215</MaxDamage><RateOfFire>110</RateOfFire><Shots>1</Shots><Amplitude>0.2</Amplitude><Frequency>0.2</Frequency><ArcGap>0.0</ArcGap><Lifetime>240.0</Lifetime><Speed>160.0</Speed><ToolTip></ToolTip></Item><Item><Name>Etherite Dagger</Name><NameCode>0x2750</NameCode><Description>Made of a strange metal not known to the living. Its connection to the spirit plane causes a high pitched shriek as it slashes.</Description><Tier>ST</Tier><Filename>lofiObj3</Filename><Row>82</Row><Column>6</Column><SetName>Skuld 2 The ReGhostening Set</SetName><SlotType>2</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame></Soulbound><BaseDamage>110</BaseDamage><MaxDamage>215</MaxDamage><RateOfFire>110</RateOfFire><Shots>1</Shots><Amplitude>0.2</Amplitude><Frequency>0.2</Frequency><ArcGap>0.0</ArcGap><Lifetime>240.0</Lifetime><Speed>160.0</Speed><ToolTip></ToolTip></Item><Item><Name>An Icicle</Name><NameCode>0x237d</NameCode><Description>Crude, but effective.</Description><Tier>UT</Tier><Filename>lofiObj3</Filename><Row>85</Row><Column>8</Column><SetName></SetName><SlotType>2</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>3</Fame><BaseDamage>90</BaseDamage><MaxDamage>175</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>400.0</Lifetime><Speed>140.0</Speed><ToolTip></ToolTip></Item><Item><Name>Dagger of the Hasteful Rabbit</Name><NameCode>0x899</NameCode><Description>An incredible dagger forged from the teeth of a murderous rabbit, it has the incredible power to summon angry rabbits.</Description><Tier>UT</Tier><Filename>buffedBunnyObjects8x8</Filename><Row>1</Row><Column>15</Column><SetName></SetName><SlotType>2</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>3</Fame></Soulbound><BaseDamage>90</BaseDamage><MaxDamage>175</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>1.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>400.0</Lifetime><Speed>140.0</Speed><ToolTip></ToolTip></Item><Item><Name>Queen\'s Stinger Dagger</Name><NameCode>0x109f</NameCode><Description>The blade of this dagger was once the enormous Killer Bee Queen\'s stinger. It remains exceptionally sharp, and could easily cut through even the heaviest of armor in a single strike.</Description><Tier>UT</Tier><Filename>epicHiveObjects8x8</Filename><Row>2</Row><Column>1</Column><SetName></SetName><SlotType>2</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>6</Fame></DefIgnore></MultiHit></Soulbound><BaseDamage>65</BaseDamage><MaxDamage>155</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>357.142857</Lifetime><Speed>140.0</Speed><ToolTip></ToolTip></Item><Item><Name>Carved Golem Remains</Name><NameCode>0x0258</NameCode><Description>A makeshift dagger hastily crafted from the debris of a fallen golem. It may be blunt, but it is also very lightweight.</Description><Tier>ST</Tier><Filename>lostHallsObjects8x8</Filename><Row>11</Row><Column>4</Column><SetName>Lost Golem Set</SetName><SlotType>2</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>6</Fame></Soulbound><BaseDamage>120</BaseDamage><MaxDamage>130</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>450.0</Lifetime><Speed>140.0</Speed><ToolTip></ToolTip></Item><Item><Name>Frost Lich\'s Finger</Name><NameCode>0x1acb</NameCode><Description>Carved from the bones of a frost lich and honed to a razor\'s edge.</Description><Tier>UT</Tier><Filename>oryxHordeObjects8x8</Filename><Row>12</Row><Column>1</Column><SetName></SetName><SlotType>2</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>7</Fame></Soulbound><BaseDamage>95</BaseDamage><MaxDamage>175</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>400.0</Lifetime><Speed>140.0</Speed><ToolTip></ToolTip></Item><Item><Name>Symbiotic Ripper</Name><NameCode>0xbd8</NameCode><Description>The melding of these creatures and their host is one of pain and suffering.</Description><Tier>ST</Tier><Filename>d2LofiObjEmbed</Filename><Row>9</Row><Column>2</Column><SetName>Flesh Collector Set</SetName><SlotType>2</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>-2</VIT><WIS>0</WIS><Fame>5</Fame></Soulbound><BaseDamage>117</BaseDamage><MaxDamage>190</MaxDamage><RateOfFire>120</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>747.0</Lifetime><Speed>75.0</Speed><ToolTip></ToolTip></Item><Item><Name>Mister Mango</Name><NameCode>0x574</NameCode><Description>Displaying this malformed mango in public is said to awaken the rage of a long-dormant entity from beyond.</Description><Tier>UT</Tier><Filename>theMachineObjects8x8</Filename><Row>6</Row><Column>6</Column><SetName></SetName><SlotType>2</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>1</Fame></Soulbound><BaseDamage>250</BaseDamage><MaxDamage>300</MaxDamage><RateOfFire>45</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>800.0</Lifetime><Speed>75.0</Speed><ToolTip></ToolTip></Item><Item><Name>Corruption Cutter</Name><NameCode>0x580</NameCode><Description>A fragment of Lord Ruthven\'s curse manifest itself into this pulsating dagger. Its formless state allows it to cut in ways no other weapon could.</Description><Tier>UT</Tier><Filename>cursedLibraryObjects8x8</Filename><Row>4</Row><Column>11</Column><SetName></SetName><SlotType>2</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>5</Fame></Soulbound><BaseDamage>75</BaseDamage><MaxDamage>85</MaxDamage><RateOfFire>130</RateOfFire><Shots>2</Shots></Wavy><Amplitude>1.5</Amplitude><Frequency>0.7</Frequency><ArcGap>20.0</ArcGap><Lifetime>400.0</Lifetime><Speed>140.0</Speed><ToolTip></ToolTip></Item><Item><Name>Corrosion Cutter</Name><NameCode>0x6461</NameCode><Description>Interestingly, freezing the acid of Forax into a solid material retains its burning properties. Crafty alien mercenaries have used this to create brutal assassination weapons such as this.\n\nSprite Credits: Aurum</Description><Tier>UT</Tier><Filename>d2LofiObjEmbed</Filename><Row>17</Row><Column>4</Column><SetName></SetName><SlotType>2</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>7</Fame></DefIgnore></MultiHit></Soulbound><BaseDamage>65</BaseDamage><MaxDamage>155</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>357.142857</Lifetime><Speed>140.0</Speed><ToolTip>         <EffectInfo name="" description="Alien Gear"/>      </ToolTip></Item><Item><Name>Dueling Daggers</Name><NameCode>0x6462</NameCode><Description>A set of daggers given partial sentience by alien technology. They fiercely compete to claim more kills than the other.\n\nSprite Credits: Aurum</Description><Tier>UT</Tier><Filename>d2LofiObjEmbed</Filename><Row>16</Row><Column>14</Column><SetName></SetName><SlotType>2</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>7</Fame></Soulbound><BaseDamage>75</BaseDamage><MaxDamage>85</MaxDamage><RateOfFire>130</RateOfFire><Shots>2</Shots></Wavy><Amplitude>1.5</Amplitude><Frequency>0.7</Frequency><ArcGap>20.0</ArcGap><Lifetime>400.0</Lifetime><Speed>140.0</Speed><ToolTip>         <EffectInfo name="" description="Alien Gear"/>      </ToolTip></Item><Item><Name>Bounty Hunter\'s Dagger</Name><NameCode>0x65f2</NameCode><Description>The Mad God knows the value of cloak and dagger operations, despite his personal inclination toward more overt tactics. Oryx\'s minions consider it a great honor to be gifted this dagger.\n\nSprite Credits: Aurum</Description><Tier>UT</Tier><Filename>d2LofiObjEmbed</Filename><Row>21</Row><Column>9</Column><SetName></SetName><SlotType>2</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>5</Fame></Soulbound></PassesCover><BaseDamage>120</BaseDamage><MaxDamage>170</MaxDamage><RateOfFire>120</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>380.0</Lifetime><Speed>140.0</Speed><ToolTip></ToolTip></Item><Item><Name>Maize Machete</Name><NameCode>0x6483</NameCode><Description>Using real corn as a weapon proved to be counterintuitive, so it was substituted with candy corn. Surprisingly, this only worsened the crow problem.\n\nSprite Credits: Bonk, Aurum</Description><Tier>ST</Tier><Filename>d2LofiObjEmbed</Filename><Row>22</Row><Column>0</Column><SetName>Scarecrow Trickster Set</SetName><SlotType>2</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>6</Fame></Soulbound><BaseDamage>120</BaseDamage><MaxDamage>130</MaxDamage><RateOfFire>100</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>450.0</Lifetime><Speed>140.0</Speed><ToolTip></ToolTip></Item><Item><Name>Phantasm Dirk</Name><NameCode>0x64ba</NameCode><Description>A short lived dirk which saw little use in the hands of a quickly slain adventurer, too lucky for their own good. Knowing its purpose was left unfulfilled, it seeks to eliminate the evil chicken menace from beyond the grave.\n\nSprite Credits: Aurum</Description><Tier>UT</Tier><Filename>d2LofiObjEmbed</Filename><Row>23</Row><Column>13</Column><SetName></SetName><SlotType>2</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>6</WIS><Fame>6</Fame></Soulbound><BaseDamage>130</BaseDamage><MaxDamage>250</MaxDamage><RateOfFire>90</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>250.0</Lifetime><Speed>180.0</Speed><ToolTip></ToolTip></Item><Item><Name>Toxin Tooth</Name><NameCode>0xc008</NameCode><Description>An appalling dagger with a blade forged of a highly resilient metal, one of the very few materials that can withstand the corrosive properties surrounding it.</Description><Tier>ST</Tier><Filename>d2LofiObjEmbed</Filename><Row>32</Row><Column>3</Column><SetName>Acidified Assassin Set</SetName><SlotType>2</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>5</Fame></Soulbound><BaseDamage>230</BaseDamage><MaxDamage>280</MaxDamage><RateOfFire>65</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>1.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>350.0</Lifetime><Speed>100.0</Speed><ToolTip></ToolTip></Item>';
    
    while (s.includes("<Item>"))
        {
            var tot = makeItem(s);
            daggers.push(tot);
            s = s.substring(s.indexOf("</Item>")+1, s.length)
        }
    
    s = '<Item><Name>(empty slot)</Name><NameCode></NameCode><Description></Description><Tier></Tier><Filename></Filename><Row>0</Row><Column>0</Column><SetName></SetName><SlotType>10</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Fire Spray Spell</Name><NameCode>0xa2e</NameCode><Description>A spell that shoots fire in all directions.</Description><Tier>T0</Tier><Filename>lofiObj6</Filename><Row>4</Row><Column>0</Column><SetName></SetName><SlotType>11</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>25</BaseDamage><MaxDamage>40</MaxDamage><RateOfFire>0</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>1000.0</Lifetime><Speed>160.0</Speed><ToolTip></ToolTip></Item><Item><Name>Flame Burst Spell</Name><NameCode>0xad4</NameCode><Description>A dangerous spell that summons green fire from the astral plane.</Description><Tier>T1</Tier><Filename>lofiObj6</Filename><Row>4</Row><Column>1</Column><SetName></SetName><SlotType>11</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>30</BaseDamage><MaxDamage>70</MaxDamage><RateOfFire>0</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>1000.0</Lifetime><Speed>160.0</Speed><ToolTip></ToolTip></Item><Item><Name>Fire Nova Spell</Name><NameCode>0xa2f</NameCode><Description>A deadly spell created by goblin sorcerers to subdue their orcish enemies.</Description><Tier>T2</Tier><Filename>lofiObj6</Filename><Row>4</Row><Column>2</Column><SetName></SetName><SlotType>11</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>50</BaseDamage><MaxDamage>90</MaxDamage><RateOfFire>0</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>1000.0</Lifetime><Speed>160.0</Speed><ToolTip></ToolTip></Item><Item><Name>Scorching Blast Spell</Name><NameCode>0xad5</NameCode><Description>A formidable fire spell used by dwarven magi in their war against the trolls.</Description><Tier>T3</Tier><Filename>lofiObj6</Filename><Row>4</Row><Column>3</Column><SetName></SetName><SlotType>11</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>1</Fame><BaseDamage>65</BaseDamage><MaxDamage>110</MaxDamage><RateOfFire>0</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>1000.0</Lifetime><Speed>160.0</Speed><ToolTip></ToolTip></Item><Item><Name>Destruction Sphere Spell</Name><NameCode>0xad6</NameCode><Description>An immensely powerful spell created by the wizard lords of the underworld to harness dark energies.</Description><Tier>T4</Tier><Filename>lofiObj6</Filename><Row>4</Row><Column>4</Column><SetName></SetName><SlotType>11</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>2</Fame><BaseDamage>80</BaseDamage><MaxDamage>130</MaxDamage><RateOfFire>0</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>1000.0</Lifetime><Speed>160.0</Speed><ToolTip></ToolTip></Item><Item><Name>Magic Nova Spell</Name><NameCode>0xa30</NameCode><Description>An unimaginably destructive spell, devised by the great mountain thaumaturgists to battle against demonic giants.</Description><Tier>T5</Tier><Filename>lofiObj6</Filename><Row>4</Row><Column>5</Column><SetName></SetName><SlotType>11</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>3</Fame><BaseDamage>90</BaseDamage><MaxDamage>155</MaxDamage><RateOfFire>0</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>1000.0</Lifetime><Speed>160.0</Speed><ToolTip></ToolTip></Item><Item><Name>Elemental Detonation Spell</Name><NameCode>0xb24</NameCode><Description>A horrifically dangerous spell, formulated in the elemental planes during the great astral wars.</Description><Tier>T6</Tier><Filename>lofiObj6</Filename><Row>4</Row><Column>6</Column><SetName></SetName><SlotType>11</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>2</VIT><WIS>2</WIS><Fame>4</Fame><BaseDamage>80</BaseDamage><MaxDamage>165</MaxDamage><RateOfFire>0</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>1000.0</Lifetime><Speed>160.0</Speed><ToolTip></ToolTip></Item><Item><Name>Penetrating Blast Spell</Name><NameCode>0x9ce</NameCode><Description>This spell\'s destructive power is so notorious that casting it was banned for many generations.</Description><Tier>UT</Tier><Filename>lofiObj2</Filename><Row>5</Row><Column>7</Column><SetName></SetName><SlotType>11</SlotType><HP>40</HP><MP>0</MP><ATK>2</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>6</Fame></MultiHit></Soulbound><BaseDamage>60</BaseDamage><MaxDamage>90</MaxDamage><RateOfFire>0</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>700.0</Lifetime><Speed>160.0</Speed><ToolTip></ToolTip></Item><Item><Name>Tablet of the King\'s Avatar</Name><NameCode>0xb41</NameCode><Description>Thought to have been lost to the ages, the wisdom imparted in this tablet will summon a power unrivaled by any modern spell.</Description><Tier>UT</Tier><Filename>lofiObj3</Filename><Row>73</Row><Column>0</Column><SetName></SetName><SlotType>11</SlotType><HP>0</HP><MP>40</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>4</WIS><Fame>6</Fame></Soulbound></Boomerang><BaseDamage>260</BaseDamage><MaxDamage>280</MaxDamage><RateOfFire>0</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>167.0</Lifetime><Speed>120.0</Speed><ToolTip></ToolTip></Item><Item><Name>Thousand Suns Spell</Name><NameCode>0x229e</NameCode><Description>A spell that blasts enemies with the fiery force of a thousand suns.</Description><Tier>UT</Tier><Filename>lofiObj3</Filename><Row>76</Row><Column>8</Column><SetName></SetName><SlotType>11</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>2</VIT><WIS>2</WIS><Fame>4</Fame><BaseDamage>80</BaseDamage><MaxDamage>165</MaxDamage><RateOfFire>0</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>1000.0</Lifetime><Speed>160.0</Speed><ToolTip>         <EffectInfo name="Set" description="Summer Solstice"/>      </ToolTip></Item><Item><Name>Legacy Ancient Spell: Pierce</Name><NameCode>0x21a9</NameCode><Description>Magical blasts can be blocked by armor, but true fear will pierce their hides and strike their heart.</Description><Tier>ST</Tier><Filename>lofiObj3</Filename><Row>83</Row><Column>0</Column><SetName>Legacy Twilight Archmage Set</SetName><SlotType>11</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame></DefIgnore><BaseDamage>53</BaseDamage><MaxDamage>115</MaxDamage><RateOfFire>0</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>1300.0</Lifetime><Speed>100.0</Speed><ToolTip></ToolTip></Item><Item><Name>Ancient Spell: Pierce</Name><NameCode>0x21f4</NameCode><Description>Magical blasts can be blocked by armor, but true fear will pierce their hides and strike their heart.</Description><Tier>ST</Tier><Filename>lofiObj3</Filename><Row>83</Row><Column>0</Column><SetName>Twilight Archmage Set</SetName><SlotType>11</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame></DefIgnore></Soulbound><BaseDamage>53</BaseDamage><MaxDamage>115</MaxDamage><RateOfFire>0</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>1300.0</Lifetime><Speed>100.0</Speed><ToolTip></ToolTip></Item><Item><Name>Vitamine Buster</Name><NameCode>0x8a9</NameCode><Description>A bizzare spell fabricated by a powerful bunny magician, they don\'t only do trick shows inside those magic hats!</Description><Tier>UT</Tier><Filename>buffedBunnyObjects8x8</Filename><Row>2</Row><Column>1</Column><SetName></SetName><SlotType>11</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>2</SPD><DEX>0</DEX><VIT>10</VIT><WIS>0</WIS><Fame>4</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>210</MaxDamage><RateOfFire>0</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>2500.0</Lifetime><Speed>60.0</Speed><ToolTip></ToolTip></Item><Item><Name>Recurring Terror Spell</Name><NameCode>0x7a1</NameCode><Description>Believed to have been lost in a bygone era, this spell was recovered from ruins infested by horrific creatures of unknown origin. The scroll is still steeped with parasitic organisms.</Description><Tier>UT</Tier><Filename>parasiteDenObjects8x8</Filename><Row>0</Row><Column>7</Column><SetName></SetName><SlotType>11</SlotType><HP>-20</HP><MP>0</MP><ATK>2</ATK><DEF>2</DEF><SPD>0</SPD><DEX>4</DEX><VIT>-5</VIT><WIS>0</WIS><Fame>6</Fame></Soulbound></PassesCover></Parametric><BaseDamage>200</BaseDamage><MaxDamage>300</MaxDamage><RateOfFire>0</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>2400.0</Lifetime><Speed>10.0</Speed><ToolTip></ToolTip></Item><Item><Name>Vigil Spell</Name><NameCode>0x2092</NameCode><Description>A seraphic wardspell that burns the unworthy with molten wax from the heavenly vigil.\n\nSprite Credits: Dappertron</Description><Tier>UT</Tier><Filename>oryxHordeObjects8x8</Filename><Row>5</Row><Column>5</Column><SetName></SetName><SlotType>11</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>2</VIT><WIS>2</WIS><Fame>4</Fame><BaseDamage>80</BaseDamage><MaxDamage>165</MaxDamage><RateOfFire>0</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>1000.0</Lifetime><Speed>160.0</Speed><ToolTip></ToolTip></Item><Item><Name>Random Spell Extraction Device</Name><NameCode>0x5b22</NameCode><Description>This strange weapon sometimes affects the size of surrounding creatures.</Description><Tier>UT</Tier><Filename>d2LofiObjEmbed</Filename><Row>10</Row><Column>7</Column><SetName></SetName><SlotType>11</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>6</Fame></MultiHit></Soulbound></PassesCover><BaseDamage>12</BaseDamage><MaxDamage>75</MaxDamage><RateOfFire>0</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>625.0</Lifetime><Speed>96.0</Speed><ToolTip></ToolTip></Item><Item><Name>Jade Storm</Name><NameCode>0x5b1e</NameCode><Description>A grand scroll capable of summoning sharpened emerald shards, slicing through even the most durable opponent.</Description><Tier>UT</Tier><Filename>d2LofiObjEmbed</Filename><Row>10</Row><Column>1</Column><SetName></SetName><SlotType>11</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>6</Fame></MultiHit></Soulbound></PassesCover><BaseDamage>475</BaseDamage><MaxDamage>900</MaxDamage><RateOfFire>0</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>523.0</Lifetime><Speed>114.0</Speed><ToolTip></ToolTip></Item><Item><Name>Penetrating Blast Spell</Name><NameCode>0x36a4</NameCode><Description>This spell\'s destructive power is so notorious that casting it was banned for many generations.</Description><Tier>UT</Tier><Filename>lofiObj2</Filename><Row>5</Row><Column>7</Column><SetName></SetName><SlotType>11</SlotType><HP>40</HP><MP>0</MP><ATK>2</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>6</Fame></MultiHit></Soulbound><BaseDamage>60</BaseDamage><MaxDamage>90</MaxDamage><RateOfFire>0</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>700.0</Lifetime><Speed>160.0</Speed><ToolTip></ToolTip></Item><Item><Name>Sporous Spray Spell</Name><NameCode>0x04b3</NameCode><Description>An ancient druidic spell that invokes earth spirits into furnishing the soil with a noxious, deadly skullshroom colony.</Description><Tier>UT</Tier><Filename>d2LofiObjEmbed</Filename><Row>20</Row><Column>3</Column><SetName></SetName><SlotType>11</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>6</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip>         <EffectInfo name="On Ability use:" description=""/>         <EffectInfo name="" description="Creates a Deadly Mushroom that lasts 4.8 seconds."/>         <EffectInfo name="Deadly Mushroom" description="1000 damage within 3 sqrs every 1.2 seconds"/>      </ToolTip></Item><Item><Name>Spectral Spell</Name><NameCode>0x64a0</NameCode><Description>The ghouls all came from their humble abodes to get a jolt from his electrodes.\n\nSprite Credits: Aurum</Description><Tier>ST</Tier><Filename>d2LofiObjEmbed</Filename><Row>26</Row><Column>1</Column><SetName>Paranormal Wizard Set</SetName><SlotType>11</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame></DefIgnore></Soulbound><BaseDamage>53</BaseDamage><MaxDamage>115</MaxDamage><RateOfFire>0</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>1300.0</Lifetime><Speed>100.0</Speed><ToolTip></ToolTip></Item>';
    
    while (s.includes("<Item>"))
        {
            var tot = makeItem(s);
            spellbombs.push(tot);
            s = s.substring(s.indexOf("</Item>")+1, s.length)
        }
    
    s = '<Item><Name>(empty slot)</Name><NameCode></NameCode><Description></Description><Tier></Tier><Filename></Filename><Row>0</Row><Column>0</Column><SetName></SetName><SlotType>10</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Necrotic Skull</Name><NameCode>0xaaa</NameCode><Description>A human skull corrupted with life-stealing necrotic magic.</Description><Tier>T0</Tier><Filename>lofiObj6</Filename><Row>0</Row><Column>0</Column><SetName></SetName><SlotType>19</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Breathtaker Skull</Name><NameCode>0xaab</NameCode><Description>A dwarven skull desecrated by foul enchantments.</Description><Tier>T1</Tier><Filename>lofiObj6</Filename><Row>0</Row><Column>1</Column><SetName></SetName><SlotType>19</SlotType><HP>5</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Heartstealer Skull</Name><NameCode>0xaac</NameCode><Description>An elvish wizard\'s skull, defiled with life-stealing necrotic spells.</Description><Tier>T2</Tier><Filename>lofiObj6</Filename><Row>0</Row><Column>2</Column><SetName></SetName><SlotType>19</SlotType><HP>15</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Soul Siphon Skull</Name><NameCode>0xaad</NameCode><Description>A holy paladin\'s skull, fouled by depraved incantations of necromancy.</Description><Tier>T3</Tier><Filename>lofiObj6</Filename><Row>0</Row><Column>3</Column><SetName></SetName><SlotType>19</SlotType><HP>30</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>1</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Essence Tap Skull</Name><NameCode>0xaae</NameCode><Description>A lesser demon\'s skull, empowered and amplified by dark enchantments of the underworld.</Description><Tier>T4</Tier><Filename>lofiObj6</Filename><Row>0</Row><Column>4</Column><SetName></SetName><SlotType>19</SlotType><HP>45</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>2</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Lifedrinker Skull</Name><NameCode>0xaaf</NameCode><Description>A powerful demon skull permeated with unspeakably horrific sorceries.</Description><Tier>T5</Tier><Filename>lofiObj6</Filename><Row>0</Row><Column>5</Column><SetName></SetName><SlotType>19</SlotType><HP>60</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>3</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Bloodsucker Skull</Name><NameCode>0xb2b</NameCode><Description>The skull of a vampire lord, further desecrated with the depraved magics of soul thievery.</Description><Tier>T6</Tier><Filename>lofiObj6</Filename><Row>0</Row><Column>6</Column><SetName></SetName><SlotType>19</SlotType><HP>70</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>2</VIT><WIS>2</WIS><Fame>4</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Skull of Endless Torment</Name><NameCode>0x911</NameCode><Description>This skull glows with the stolen soul of a phoenix trapped in the skull many years ago by Shaitan.</Description><Tier>UT</Tier><Filename>lofiObj2</Filename><Row>5</Row><Column>9</Column><SetName></SetName><SlotType>19</SlotType><HP>50</HP><MP>0</MP><ATK>0</ATK><DEF>3</DEF><SPD>0</SPD><DEX>3</DEX><VIT>0</VIT><WIS>0</WIS><Fame>6</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Cracked Crystal Skull</Name><NameCode>0xc16</NameCode><Description>A relic uncovered from the depths of the jungle. It exudes a deep darkness.</Description><Tier>UT</Tier><Filename>lofiObj2</Filename><Row>0</Row><Column>11</Column><SetName></SetName><SlotType>19</SlotType><HP>50</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>2</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Skullish Remains of Esben</Name><NameCode>0x767</NameCode><Description>The skull still seems to contain some of the Void Entity\'s power.</Description><Tier>UT</Tier><Filename>lofiObj3</Filename><Row>85</Row><Column>1</Column><SetName></SetName><SlotType>19</SlotType><HP>40</HP><MP>0</MP><ATK>4</ATK><DEF>0</DEF><SPD>-3</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Memento Mori</Name><NameCode>0x9dd</NameCode><Description>I found a great spectre floating above me. He reached out and granted me his cranium.</Description><Tier>ST</Tier><Filename>d3LofiObjEmbed</Filename><Row>15</Row><Column>9</Column><SetName>Hollow King Necromancer Set</SetName><SlotType>19</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>5</VIT><WIS>0</WIS><Fame>6</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip>         <EffectInfo name="" description="Does not heal."/>      </ToolTip></Item><Item><Name>Skull of Corrupted Souls</Name><NameCode>0x0250</NameCode><Description>The cursed skull of a corrupted mind. Good intentions can go horribly wrong.</Description><Tier>UT</Tier><Filename>lostHallsObjects8x8</Filename><Row>10</Row><Column>13</Column><SetName></SetName><SlotType>19</SlotType><HP>66</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>6</VIT><WIS>0</WIS><Fame>6</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Skull of Krampus</Name><NameCode>0x2091</NameCode><Description>A monstrous skull hewed with incantations of darkness to absorb life energy from the souls of the wicked.\n\nSprite Credits: Dappertron</Description><Tier>UT</Tier><Filename>oryxHordeObjects8x8</Filename><Row>5</Row><Column>4</Column><SetName></SetName><SlotType>19</SlotType><HP>70</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>2</VIT><WIS>2</WIS><Fame>4</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Sealed Crystal Skull</Name><NameCode>0x36a3</NameCode><Description>An undamaged version of a well known archaeological artifact, radiating a potent dark energy. This rare find is coveted by many explorers.</Description><Tier>UT</Tier><Filename>secludedThicketObjects8x8</Filename><Row>4</Row><Column>0</Column><SetName></SetName><SlotType>19</SlotType><HP>50</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>4</DEX><VIT>4</VIT><WIS>0</WIS><Fame>5</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Perennial Cranium</Name><NameCode>0x4b96</NameCode><Description>A flora-infested skull from one of Belladonna\'s victims. It exchanges the life force it steals into plant life, blooming powerful vegetation.\n\nSprite Credits: TLMaelstrom</Description><Tier>UT</Tier><Filename>lofiObj3</Filename><Row>96</Row><Column>0</Column><SetName></SetName><SlotType>19</SlotType><HP>60</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>4</SPD><DEX>0</DEX><VIT>4</VIT><WIS>0</WIS><Fame>6</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip>         <EffectInfo description="Create a life-stealing plant that lasts 5 seconds" name="On Ability Use"/>         <EffectInfo description="125 every 0.8 seconds" name="Damage"/>         <EffectInfo description="25 HP every 0.8 seconds" name="Heal"/>         <EffectInfo description="5 players" name="Max Heal Targets"/>         <EffectInfo description="3.5 tiles" name="Range"/>      </ToolTip></Item>';
    
    while (s.includes("<Item>"))
        {
            var tot = makeItem(s);
            skulls.push(tot);
            s = s.substring(s.indexOf("</Item>")+1, s.length)
        }
    
    s = '<Item><Name>(empty slot)</Name><NameCode></NameCode><Description></Description><Tier></Tier><Filename></Filename><Row>0</Row><Column>0</Column><SetName></SetName><SlotType>10</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Stasis Orb</Name><NameCode>0xae4</NameCode><Description>A crystal orb that holds enemies in an ethereal prison.</Description><Tier>T0</Tier><Filename>lofiObj6</Filename><Row>9</Row><Column>0</Column><SetName></SetName><SlotType>21</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Suspension Orb</Name><NameCode>0xa42</NameCode><Description>An orb that temporarily shackles enemies to another plane.</Description><Tier>T1</Tier><Filename>lofiObj6</Filename><Row>9</Row><Column>1</Column><SetName></SetName><SlotType>21</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Imprisonment Orb</Name><NameCode>0xa43</NameCode><Description>An orb used by starwizards to bind their demonic opponents.</Description><Tier>T2</Tier><Filename>lofiObj6</Filename><Row>9</Row><Column>2</Column><SetName></SetName><SlotType>21</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Neutralization Orb</Name><NameCode>0xa44</NameCode><Description>A glowing orb of pale emerald, used to constrain rogue elementals to the astral mists.</Description><Tier>T3</Tier><Filename>lofiObj6</Filename><Row>9</Row><Column>3</Column><SetName></SetName><SlotType>21</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>1</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Timelock Orb</Name><NameCode>0xa45</NameCode><Description>A powerful orb of flawless sun quartz, created by dark thaumaturgists of the nether kingdoms.</Description><Tier>T4</Tier><Filename>lofiObj6</Filename><Row>9</Row><Column>4</Column><SetName></SetName><SlotType>21</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>2</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Banishment Orb</Name><NameCode>0xa46</NameCode><Description>An orb of pure diamond, shining with an eerie blackness and thirsting to consume the life essence of mortals.</Description><Tier>T5</Tier><Filename>lofiObj6</Filename><Row>9</Row><Column>5</Column><SetName></SetName><SlotType>21</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>3</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Planefetter Orb</Name><NameCode>0xb2d</NameCode><Description>An orb of astral amethyst, crystallized beneath the titanic mountains of the earth plane and used to secure dangerous creatures in distant realms.</Description><Tier>T6</Tier><Filename>lofiObj6</Filename><Row>9</Row><Column>6</Column><SetName></SetName><SlotType>21</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>2</VIT><WIS>2</WIS><Fame>4</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Orb of Conflict</Name><NameCode>0xc0b</NameCode><Description>This orb of ancient bloodstone has a dark reputation of twisting those who wield it.</Description><Tier>UT</Tier><Filename>lofiObj2</Filename><Row>5</Row><Column>5</Column><SetName></SetName><SlotType>21</SlotType><HP>0</HP><MP>0</MP><ATK>2</ATK><DEF>0</DEF><SPD>0</SPD><DEX>2</DEX><VIT>0</VIT><WIS>0</WIS><Fame>6</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Soul of the Bearer</Name><NameCode>0x2362</NameCode><Description>All shall know my power. Not even the Mad God can stop me.</Description><Tier>ST</Tier><Filename>lofiObj3</Filename><Row>81</Row><Column>5</Column><SetName>Phylactery Mystic Set</SetName><SlotType>21</SlotType><HP>0</HP><MP>20</MP><ATK>2</ATK><DEF>0</DEF><SPD>1</SPD><DEX>1</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Orb of Sweet Demise</Name><NameCode>0x132</NameCode><Description>A magical honeycomb that was once crucial in repelling an assault from the Hornet Rebellion.</Description><Tier>UT</Tier><Filename>lofiObj3</Filename><Row>89</Row><Column>8</Column><SetName></SetName><SlotType>21</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>2</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Snowbound Orb</Name><NameCode>0x208e</NameCode><Description>A skillfully decorated snowglobe that is actually a warlock\'s sinister tool of inquisition, imprisoning foes in a realm of infinite winter.\n\nSprite Credits: Dappertron</Description><Tier>UT</Tier><Filename>oryxHordeObjects8x8</Filename><Row>5</Row><Column>1</Column><SetName></SetName><SlotType>21</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>2</VIT><WIS>2</WIS><Fame>4</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Enchantment Orb</Name><NameCode>0x83f</NameCode><Description>An orb so potent in the art of dimensional magic that it can release a wave of energy around its user.</Description><Tier>UT</Tier><Filename>magicWoodsObjects8x8</Filename><Row>3</Row><Column>0</Column><SetName></SetName><SlotType>21</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>5</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip>         <EffectInfo name="" description="Stasis blast is centered on player"/>         <EffectInfo name="Stasis radius" description="4 tiles"/>      </ToolTip></Item><Item><Name>Orb of Aether</Name><NameCode>0x20c2</NameCode><Description>This Orb creates a concentrated area of energy. The energy is so dense at its core that foes are paralyzed.</Description><Tier>UT</Tier><Filename>mountainTempleObjects8x8</Filename><Row>20</Row><Column>0</Column><SetName></SetName><SlotType>21</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip>         <EffectInfo name="Slow" description="4.5 radius"/>         <EffectInfo name="Paralyze" description="2.5 radius"/>      </ToolTip></Item><Item><Name>Orb of Terror</Name><NameCode>0x73cf</NameCode><Description>This orb has been imbued by Skuld with the energy of the lost souls wandering her Cemetery.</Description><Tier>UT</Tier><Filename>d2LofiObjEmbed</Filename><Row>12</Row><Column>13</Column><SetName></SetName><SlotType>21</SlotType><HP>0</HP><MP>0</MP><ATK>2</ATK><DEF>0</DEF><SPD>0</SPD><DEX>2</DEX><VIT>0</VIT><WIS>0</WIS><Fame>6</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Orb of the Sabbath</Name><NameCode>0x6498</NameCode><Description>A crystal ball known to be able to summon magically constructed bats, but this technique has only been mastered by Totalia\'s kind.\n\nSprite Credits: Aurum</Description><Tier>ST</Tier><Filename>d2LofiObjEmbed</Filename><Row>25</Row><Column>1</Column><SetName>Totalia Mystic Set</SetName><SlotType>21</SlotType><HP>0</HP><MP>20</MP><ATK>2</ATK><DEF>0</DEF><SPD>1</SPD><DEX>1</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Scorchium Stone</Name><NameCode>0x4b44</NameCode><Description>A young enchantress used a rare flame-absorbing stone to capture the lava spirits.</Description><Tier>ST</Tier><Filename>d2LofiObjEmbed</Filename><Row>33</Row><Column>2</Column><SetName>Magmatic Mystic Set</SetName><SlotType>21</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>5</Fame></DefIgnore></Soulbound></PassesCover><BaseDamage>350</BaseDamage><MaxDamage>350</MaxDamage><RateOfFire>0</RateOfFire><Shots>5</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>10.0</ArcGap><Lifetime>333.0</Lifetime><Speed>150.0</Speed><ToolTip>         <EffectInfo description="Stasis surrounding enemies when taking damage below 300 HP." name="Heat Wave"/>         <EffectInfo description="4" name="Stasis Range"/>         <EffectInfo description="2 seconds" name="Stasis Duration"/>         <EffectInfo description="60 seconds" name="Stasis Cooldown"/>      </ToolTip></Item>';
    
    while (s.includes("<Item>"))
        {
            var tot = makeItem(s);
            orbs.push(tot);
            s = s.substring(s.indexOf("</Item>")+1, s.length)
        }
    
    s = '<Item><Name>(empty slot)</Name><NameCode></NameCode><Description></Description><Tier></Tier><Filename></Filename><Row>0</Row><Column>0</Column><SetName></SetName><SlotType>10</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Healing Tome</Name><NameCode>0xa31</NameCode><Description>A holy tome of healing prayers.</Description><Tier>T0</Tier><Filename>lofiObj6</Filename><Row>5</Row><Column>0</Column><SetName></SetName><SlotType>4</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Remedy Tome</Name><NameCode>0xad7</NameCode><Description>A hallowed tome of blessed healing rituals.</Description><Tier>T1</Tier><Filename>lofiObj6</Filename><Row>5</Row><Column>1</Column><SetName></SetName><SlotType>4</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Spirit Salve Tome</Name><NameCode>0xa32</NameCode><Description>An exalted holy tome, filled with prayers and blessed by angels.</Description><Tier>T2</Tier><Filename>lofiObj6</Filename><Row>5</Row><Column>2</Column><SetName></SetName><SlotType>4</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Tome of Rejuvenation</Name><NameCode>0xad8</NameCode><Description>A sacred tome, consecrated by the spirits of the upright and the supplications of the pure.</Description><Tier>T3</Tier><Filename>lofiObj6</Filename><Row>5</Row><Column>3</Column><SetName></SetName><SlotType>4</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>1</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Tome of Renewing</Name><NameCode>0xa33</NameCode><Description>An angelic tome, empowered by divine might and justified by the souls of the righteous.</Description><Tier>T4</Tier><Filename>lofiObj6</Filename><Row>5</Row><Column>4</Column><SetName></SetName><SlotType>4</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>2</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Tome of Divine Favor</Name><NameCode>0xa5b</NameCode><Description>A sanctified tome, blessed by the heavens and purified by ancient rites, trembling with unseen divine power.</Description><Tier>T5</Tier><Filename>lofiObj6</Filename><Row>5</Row><Column>5</Column><SetName></SetName><SlotType>4</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>3</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Tome of Holy Guidance</Name><NameCode>0xb25</NameCode><Description>A tome of blessing, gifted by the gods for the benefit of all good mortals.</Description><Tier>T6</Tier><Filename>lofiObj6</Filename><Row>5</Row><Column>6</Column><SetName></SetName><SlotType>4</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Tome of Holy Protection</Name><NameCode>0xc1e</NameCode><Description>A tome dedicated to the works of a forgotten god. It is written in a strange script that glows with a pure white light.</Description><Tier>UT</Tier><Filename>lofiObj2</Filename><Row>5</Row><Column>3</Column><SetName></SetName><SlotType>4</SlotType><HP>40</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>4</VIT><WIS>0</WIS><Fame>6</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Tome of Purification</Name><NameCode>0xc09</NameCode><Description>An ancient tome cloaked in white leather, created to aid in the struggle against the ultimate evil.</Description><Tier>UT</Tier><Filename>lofiObj2</Filename><Row>1</Row><Column>13</Column><SetName></SetName><SlotType>4</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>7</VIT><WIS>7</WIS><Fame>6</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Strike Amulet</Name><NameCode>0x9d2</NameCode><Description>A magical amulet that enables lightning assaults.</Description><Tier>UT</Tier><Filename>lofiObj2</Filename><Row>15</Row><Column>0</Column><SetName></SetName><SlotType>4</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>5</VIT><WIS>0</WIS><Fame>0</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Book of Geb</Name><NameCode>0x235E</NameCode><Description>Within, the priests of the past have catalogued the story and knowledge of Geb.</Description><Tier>ST</Tier><Filename>lofiObj3</Filename><Row>81</Row><Column>0</Column><SetName>Priest of Geb Set</SetName><SlotType>4</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>5</DEF><SPD>0</SPD><DEX>0</DEX><VIT>3</VIT><WIS>3</WIS><Fame>4</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Tome of Frigid Protection</Name><NameCode>0x16de</NameCode><Description>A tome that allows the caster to encase themselves in extremely durable ice. However, despite being nearly impenetrable, it will melt after a while.\n\nSprite Credits: Poshun</Description><Tier>UT</Tier><Filename>d2LofiObjEmbed</Filename><Row>2</Row><Column>5</Column><SetName></SetName><SlotType>4</SlotType><HP>40</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>4</VIT><WIS>0</WIS><Fame>6</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Tome of Pain</Name><NameCode>0x7b8</NameCode><Description>An ancient tome covered with fleshy appendages. It contains the secrets to magic often considered blasphemous by priests, used to inflict horrible pain on others.</Description><Tier>UT</Tier><Filename>parasiteDenObjects8x8</Filename><Row>0</Row><Column>8</Column><SetName></SetName><SlotType>4</SlotType><HP>-20</HP><MP>0</MP><ATK>4</ATK><DEF>2</DEF><SPD>4</SPD><DEX>0</DEX><VIT>-5</VIT><WIS>0</WIS><Fame>6</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Nativity Tome</Name><NameCode>0x2096</NameCode><Description>A most holy manuscript taken from an ancient celestial library, brimming with golden light that wrests the innocent from the clutches of death.\n\nSprite Credits: Dappertron</Description><Tier>UT</Tier><Filename>oryxHordeObjects8x8</Filename><Row>6</Row><Column>3</Column><SetName></SetName><SlotType>4</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Tome of Holy Furor</Name><NameCode>0x260</NameCode><Description>This tome was carried to battle by the members of a forgotten order.</Description><Tier>UT</Tier><Filename>d2LofiObjEmbed</Filename><Row>13</Row><Column>1</Column><SetName></SetName><SlotType>4</SlotType><HP>55</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>7</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>6</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Necronomicon</Name><NameCode>0x57d</NameCode><Description>A tattered tome possessing the forbidden knowledge of pagan priests of old. It speaks of casting terrible curses upon opponents, but such impure power comes at a cost.</Description><Tier>UT</Tier><Filename>cursedLibraryObjects8x8</Filename><Row>4</Row><Column>9</Column><SetName></SetName><SlotType>4</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>-5</VIT><WIS>5</WIS><Fame>5</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Tome of the Mushroom Tribes</Name><NameCode>0x047f</NameCode><Description>A long-lost druid\'s tome that catalogs medicinal mushrooms. It also has many pocket spaces that contain spore samples, which can be made fully grown through incantations.</Description><Tier>UT</Tier><Filename>d2LofiObjEmbed</Filename><Row>20</Row><Column>1</Column><SetName></SetName><SlotType>4</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>6</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip>         <EffectInfo name="On Ability use:" description=""/>         <EffectInfo name="" description="Create a Healing Mushroom that lasts 3 seconds."/>         <EffectInfo name="Max Heal" description="165"/>         <EffectInfo name="Max Targets" description="10"/>         <EffectInfo name="Range" description="6.5"/>      </ToolTip></Item><Item><Name>Ceremonial Merlot</Name><NameCode>0x200d</NameCode><Description>Those who wish to be hallowed among Oryx\'s legion are required to drink the wretched concoction within this chalice, a mix between the Mad God\'s poorly kept wine and his own sentient bile.</Description><Tier>ST</Tier><Filename>d2LofiObjEmbed</Filename><Row>27</Row><Column>1</Column><SetName>Mad God\'s Messenger Set</SetName><SlotType>4</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip>         <EffectInfo description="1% chance to become Drunk for 2 seconds after taking at least 50 damage." name="Sommelier\'s Gamble"/>      </ToolTip></Item>';
    
    while (s.includes("<Item>"))
        {
            var tot = makeItem(s);
            tomes.push(tot);
            s = s.substring(s.indexOf("</Item>")+1, s.length)
        }
    
    s = '<Item><Name>(empty slot)</Name><NameCode></NameCode><Description></Description><Tier></Tier><Filename></Filename><Row>0</Row><Column>0</Column><SetName></SetName><SlotType>10</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Lightning Scepter</Name><NameCode>0xae5</NameCode><Description>A scepter that fires a blast of chain lightning.</Description><Tier>T0</Tier><Filename>lofiObj6</Filename><Row>12</Row><Column>0</Column><SetName></SetName><SlotType>23</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Discharge Scepter</Name><NameCode>0xb2e</NameCode><Description>A steel-and-ruby scepter that blasts electrical arcs.</Description><Tier>T1</Tier><Filename>lofiObj6</Filename><Row>12</Row><Column>1</Column><SetName></SetName><SlotType>23</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Thunderclap Scepter</Name><NameCode>0xb2f</NameCode><Description>A powerful scepter imbued with the energy of astral storms.</Description><Tier>T2</Tier><Filename>lofiObj6</Filename><Row>12</Row><Column>2</Column><SetName></SetName><SlotType>23</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Arcblast Scepter</Name><NameCode>0xb30</NameCode><Description>A glittering golden scepter charged with magical lightning.</Description><Tier>T3</Tier><Filename>lofiObj6</Filename><Row>12</Row><Column>3</Column><SetName></SetName><SlotType>23</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>1</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Cloudflash Scepter</Name><NameCode>0xb31</NameCode><Description>A golden scepter of power, created by storm giants during their long war against the undertrolls.</Description><Tier>T4</Tier><Filename>lofiObj6</Filename><Row>12</Row><Column>4</Column><SetName></SetName><SlotType>23</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>2</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Scepter of Skybolts</Name><NameCode>0xb32</NameCode><Description>A commanding scepter of authority, wielded by cloud titan nobles from the elemental plane of air.</Description><Tier>T5</Tier><Filename>lofiObj6</Filename><Row>12</Row><Column>5</Column><SetName></SetName><SlotType>23</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>3</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Scepter of Storms</Name><NameCode>0xb33</NameCode><Description>An ancient druidic scepter created by the nature gods themselves, embodying all the fury of the megacosm.</Description><Tier>T6</Tier><Filename>lofiObj6</Filename><Row>12</Row><Column>6</Column><SetName></SetName><SlotType>23</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>2</VIT><WIS>2</WIS><Fame>4</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Scepter of Fulmination</Name><NameCode>0xc30</NameCode><Description>This scepter\'s blast is so powerful it will slow opponents.</Description><Tier>UT</Tier><Filename>lofiObj3</Filename><Row>26</Row><Column>15</Column><SetName></SetName><SlotType>23</SlotType><HP>0</HP><MP>0</MP><ATK>2</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>2</WIS><Fame>4</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Honey Scepter</Name><NameCode>0x136</NameCode><Description>Stolen from the Queen Bee herself, this scepter possesses the power to destroy evil.</Description><Tier>UT</Tier><Filename>lofiObj3</Filename><Row>89</Row><Column>7</Column><SetName></SetName><SlotType>23</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>2</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Cnidaria Rod</Name><NameCode>0x9fc</NameCode><Description>An intricate scepter of unfathomable power containing the electric fluids of a jellyfish behemoth.</Description><Tier>UT</Tier><Filename>cnidarianReefObjects8x8</Filename><Row>0</Row><Column>8</Column><SetName></SetName><SlotType>23</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>2</DEF><SPD>0</SPD><DEX>2</DEX><VIT>0</VIT><WIS>2</WIS><Fame>6</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Scepter of Devastation</Name><NameCode>0x7b9</NameCode><Description>A loathsome scepter that converges the life energy of parasites into a soul-rotting bolt of destruction.</Description><Tier>UT</Tier><Filename>parasiteDenObjects8x8</Filename><Row>0</Row><Column>9</Column><SetName></SetName><SlotType>23</SlotType><HP>-20</HP><MP>0</MP><ATK>4</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>-5</VIT><WIS>2</WIS><Fame>6</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Scepter of Sainthood</Name><NameCode>0x209a</NameCode><Description>A holy shepherd\'s hook that creates sacred light to guide the innocent to salvation.\n\nSprite Credits: Dappertron</Description><Tier>UT</Tier><Filename>oryxHordeObjects8x8</Filename><Row>5</Row><Column>0</Column><SetName></SetName><SlotType>23</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>2</VIT><WIS>2</WIS><Fame>4</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Grotesque Scepter</Name><NameCode>0xbbd</NameCode><Description>A scepter that can be evoked to unleash overwhelmingly powerful blasts upon others. Even the most crazed scientists wouldn&#8217;t use this scepter without taking note of its side effects.</Description><Tier>ST</Tier><Filename>d2LofiObjEmbed</Filename><Row>8</Row><Column>1</Column><SetName>Horrific Sorcerer Set</SetName><SlotType>23</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>4</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item>';
    
    while (s.includes("<Item>"))
        {
            var tot = makeItem(s);
            scepters.push(tot);
            s = s.substring(s.indexOf("</Item>")+1, s.length)
        }
    
    s = '<Item><Name>(empty slot)</Name><NameCode></NameCode><Description></Description><Tier></Tier><Filename></Filename><Row>0</Row><Column>0</Column><SetName></SetName><SlotType>10</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Combat Helm</Name><NameCode>0xa66</NameCode><Description>A sturdy helm used by battlefield sergeants to improve morale in nearby allies.</Description><Tier>T0</Tier><Filename>lofiObj6</Filename><Row>6</Row><Column>0</Column><SetName></SetName><SlotType>16</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>2</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Bronze Helm</Name><NameCode>0xa67</NameCode><Description>A bronze-plated lieutenant\'s helm, effective for invigorating the fighting spirit of nearby allies.</Description><Tier>T1</Tier><Filename>lofiObj6</Filename><Row>6</Row><Column>1</Column><SetName></SetName><SlotType>16</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>3</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Black Iron Helm</Name><NameCode>0xa68</NameCode><Description>A captain\'s helm of distinctive black iron, capable of inspiring great courage.</Description><Tier>T2</Tier><Filename>lofiObj6</Filename><Row>6</Row><Column>2</Column><SetName></SetName><SlotType>16</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>5</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Red Iron Helm</Name><NameCode>0xa69</NameCode><Description>A major\'s helm of ornate red iron, made to arouse fearlessness among the troops.</Description><Tier>T3</Tier><Filename>lofiObj6</Filename><Row>6</Row><Column>3</Column><SetName></SetName><SlotType>16</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>6</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>1</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Steel Helm</Name><NameCode>0xa6a</NameCode><Description>A well-made commander\'s helm of steel with silver filigree, able to inspire gallantry in large numbers of troops.</Description><Tier>T4</Tier><Filename>lofiObj6</Filename><Row>6</Row><Column>4</Column><SetName></SetName><SlotType>16</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>8</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>2</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Golden Helm</Name><NameCode>0xa6b</NameCode><Description>A golden field marshal\'s helm with platinum detailing and a cockatrice plume, able to motivate entire legions to new heights of tenacity and determination.</Description><Tier>T5</Tier><Filename>lofiObj6</Filename><Row>6</Row><Column>5</Column><SetName></SetName><SlotType>16</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>10</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>3</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Helm of the Great General</Name><NameCode>0xb29</NameCode><Description>A steel and platinum helm of ancient design, worn by earthrazer generals during the great orcish war.</Description><Tier>T6</Tier><Filename>lofiObj6</Filename><Row>6</Row><Column>6</Column><SetName></SetName><SlotType>16</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>10</DEF><SPD>0</SPD><DEX>0</DEX><VIT>2</VIT><WIS>2</WIS><Fame>4</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Helm of the Juggernaut</Name><NameCode>0xc08</NameCode><Description>This helm was forged of metal that fell from the sky.  It is strangely light and emits a faint hum.</Description><Tier>UT</Tier><Filename>lofiObj2</Filename><Row>5</Row><Column>2</Column><SetName></SetName><SlotType>16</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>10</DEF><SPD>5</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>6</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Helm of Draconic Dominance</Name><NameCode>0x7fbb</NameCode><Description>The last piece of the Taming ritual requires a man to be bound to a Dragon. Wizards were able to link a man to a Dragon\'s spirit using magic and pain. Using its powers comes with a great cost.</Description><Tier>ST</Tier><Filename>d2LofiObjEmbed</Filename><Row>0</Row><Column>1</Column><SetName>Dragon Tamer Set</SetName><SlotType>16</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>10</DEF><SPD>5</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame></MultiHit></Soulbound><BaseDamage>500</BaseDamage><MaxDamage>650</MaxDamage><RateOfFire>0</RateOfFire><Shots>3</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>10.0</ArcGap><Lifetime>400.0</Lifetime><Speed>140.0</Speed><ToolTip>         <EffectInfo name="Effect on Self:" description=""/>      </ToolTip></Item><Item><Name>Helm of the Swift Bunny</Name><NameCode>0x8a8</NameCode><Description>Made from the remains of a violent bunny, whoever wears this helm is given the magical ability to hop as fast as a bunny!</Description><Tier>UT</Tier><Filename>buffedBunnyObjects8x8</Filename><Row>2</Row><Column>0</Column><SetName></SetName><SlotType>16</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>5</DEF><SPD>5</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>5</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Hivemaster Helm</Name><NameCode>0x08b1</NameCode><Description>A nefarious helm combining pheromones and Killer Honey to captivate Killer Bees into servitude.</Description><Tier>UT</Tier><Filename>epicHiveObjects8x8</Filename><Row>6</Row><Column>2</Column><SetName></SetName><SlotType>16</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>6</DEF><SPD>6</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>6</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip>         <EffectInfo name="" description="Summon 3 bees to aid you in combat for 6 seconds"/>         <EffectInfo name="Bee Attack" description="120 damage every 0.6 seconds"/>         <EffectInfo name="Bee Range" description="4 sqrs"/>         <EffectInfo name="Red Bee Effect" description="50% chance of inflicting Curse for 4 seconds"/>      </ToolTip></Item><Item><Name>Helm of the Jack-o\'-naut</Name><NameCode>0x1794</NameCode><Description>This unorthodox helm was created by carving out a pumpkin that is found only in the darkest pumpkin patches. Donning this cursed piece of equipment is said to cause the wearer to fly into a fit of rage.</Description><Tier>UT</Tier><Filename>d2LofiObjEmbed</Filename><Row>3</Row><Column>5</Column><SetName></SetName><SlotType>16</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>10</DEF><SPD>5</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>6</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Pathfinder\'s Helm</Name><NameCode>0x208f</NameCode><Description>A finely sculpted helm worn by commanders of the northern realms, its enormous display of regal antlers make their authorative presense known in the chaos of war.\n\nSprite Credits: Dappertron</Description><Tier>UT</Tier><Filename>oryxHordeObjects8x8</Filename><Row>5</Row><Column>2</Column><SetName></SetName><SlotType>16</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>10</DEF><SPD>0</SPD><DEX>0</DEX><VIT>2</VIT><WIS>2</WIS><Fame>4</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Helm of the Immortal</Name><NameCode>0x262</NameCode><Description>This helm was worn by the elite guardians of a long lost empire.</Description><Tier>UT</Tier><Filename>d2LofiObjEmbed</Filename><Row>13</Row><Column>3</Column><SetName></SetName><SlotType>16</SlotType><HP>50</HP><MP>0</MP><ATK>0</ATK><DEF>12</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Tricorne of the High Seas</Name><NameCode>0x21da</NameCode><Description>Pirate captains wear extravagant cocked hats to both inspire their men and intimidate their foes.</Description><Tier>ST</Tier><Filename>d2LofiObjEmbed</Filename><Row>28</Row><Column>1</Column><SetName>Pirate King Warrior Set</SetName><SlotType>16</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>7</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip>         <EffectInfo description="Fires cannonballs when hit for at least 60 damage." name="Cannon Cluster"/>         <EffectInfo description="800" name="Cannonball Damage"/>         <EffectInfo description="6 seconds" name="Cannonball Cooldown"/>      </ToolTip></Item>';
    
    while (s.includes("<Item>"))
        {
            var tot = makeItem(s);
            helms.push(tot);
            s = s.substring(s.indexOf("</Item>")+1, s.length)
        }
    
    s = '<Item><Name>(empty slot)</Name><NameCode></NameCode><Description></Description><Tier></Tier><Filename></Filename><Row>0</Row><Column>0</Column><SetName></SetName><SlotType>10</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Wooden Shield</Name><NameCode>0xa08</NameCode><Description>A shield made of sturdy wood.</Description><Tier>T0</Tier><Filename>lofiObj6</Filename><Row>7</Row><Column>0</Column><SetName></SetName><SlotType>5</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>2</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame></MultiHit></PassesCover><BaseDamage>55</BaseDamage><MaxDamage>90</MaxDamage><RateOfFire>0</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>200.0</Lifetime><Speed>160.0</Speed><ToolTip></ToolTip></Item><Item><Name>Iron Shield</Name><NameCode>0xa09</NameCode><Description>A shield made of well forged iron.</Description><Tier>T1</Tier><Filename>lofiObj6</Filename><Row>7</Row><Column>1</Column><SetName></SetName><SlotType>5</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>4</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame></MultiHit></PassesCover><BaseDamage>100</BaseDamage><MaxDamage>140</MaxDamage><RateOfFire>0</RateOfFire><Shots>2</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>11.25</ArcGap><Lifetime>200.0</Lifetime><Speed>160.0</Speed><ToolTip></ToolTip></Item><Item><Name>Steel Shield</Name><NameCode>0xa0a</NameCode><Description>A shield made of high quality steel.</Description><Tier>T2</Tier><Filename>lofiObj6</Filename><Row>7</Row><Column>2</Column><SetName></SetName><SlotType>5</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>6</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame></MultiHit></PassesCover><BaseDamage>150</BaseDamage><MaxDamage>190</MaxDamage><RateOfFire>0</RateOfFire><Shots>3</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>11.25</ArcGap><Lifetime>200.0</Lifetime><Speed>160.0</Speed><ToolTip></ToolTip></Item><Item><Name>Reinforced Shield</Name><NameCode>0xacf</NameCode><Description>A steel shield supported by iron ribbing.</Description><Tier>T3</Tier><Filename>lofiObj6</Filename><Row>7</Row><Column>3</Column><SetName></SetName><SlotType>5</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>7</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>1</Fame></MultiHit></PassesCover><BaseDamage>190</BaseDamage><MaxDamage>240</MaxDamage><RateOfFire>0</RateOfFire><Shots>3</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>11.25</ArcGap><Lifetime>200.0</Lifetime><Speed>160.0</Speed><ToolTip></ToolTip></Item><Item><Name>Golden Shield</Name><NameCode>0xa0b</NameCode><Description>An ornate but strong shield plated with gold.</Description><Tier>T4</Tier><Filename>lofiObj6</Filename><Row>7</Row><Column>4</Column><SetName></SetName><SlotType>5</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>8</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>2</Fame></MultiHit></PassesCover><BaseDamage>230</BaseDamage><MaxDamage>280</MaxDamage><RateOfFire>0</RateOfFire><Shots>4</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>11.25</ArcGap><Lifetime>200.0</Lifetime><Speed>160.0</Speed><ToolTip></ToolTip></Item><Item><Name>Mithril Shield</Name><NameCode>0xa0c</NameCode><Description>A very strong shield made from the strongest and most desirable of all metals.</Description><Tier>T5</Tier><Filename>lofiObj6</Filename><Row>7</Row><Column>5</Column><SetName></SetName><SlotType>5</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>12</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>3</Fame></MultiHit></PassesCover><BaseDamage>270</BaseDamage><MaxDamage>330</MaxDamage><RateOfFire>0</RateOfFire><Shots>5</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>11.25</ArcGap><Lifetime>200.0</Lifetime><Speed>160.0</Speed><ToolTip></ToolTip></Item><Item><Name>Colossus Shield</Name><NameCode>0xb22</NameCode><Description>A superior shield forged in deep armories for the construct armies of the underworld.</Description><Tier>T6</Tier><Filename>lofiObj6</Filename><Row>7</Row><Column>6</Column><SetName></SetName><SlotType>5</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>12</DEF><SPD>0</SPD><DEX>0</DEX><VIT>2</VIT><WIS>2</WIS><Fame>4</Fame></MultiHit></PassesCover><BaseDamage>300</BaseDamage><MaxDamage>360</MaxDamage><RateOfFire>0</RateOfFire><Shots>5</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>11.25</ArcGap><Lifetime>200.0</Lifetime><Speed>160.0</Speed><ToolTip></ToolTip></Item><Item><Name>Snakeskin Shield</Name><NameCode>0xa40</NameCode><Description>A shield made of snake skin stretched across a rigid frame.</Description><Tier>UT</Tier><Filename>lofiObj2</Filename><Row>0</Row><Column>3</Column><SetName></SetName><SlotType>5</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>7</DEF><SPD>3</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame></MultiHit></Soulbound></PassesCover><BaseDamage>250</BaseDamage><MaxDamage>300</MaxDamage><RateOfFire>0</RateOfFire><Shots>4</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>11.25</ArcGap><Lifetime>200.0</Lifetime><Speed>160.0</Speed><ToolTip></ToolTip></Item><Item><Name>Shield of Ogmur</Name><NameCode>0xc0f</NameCode><Description>This massive shield was created for the wealthy and powerful Ogre kings as a sign of their unrivaled strength.</Description><Tier>UT</Tier><Filename>lofiObj2</Filename><Row>5</Row><Column>6</Column><SetName></SetName><SlotType>5</SlotType><HP>60</HP><MP>0</MP><ATK>0</ATK><DEF>14</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>6</Fame></MultiHit></Soulbound></PassesCover><BaseDamage>300</BaseDamage><MaxDamage>400</MaxDamage><RateOfFire>0</RateOfFire><Shots>5</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>11.25</ArcGap><Lifetime>200.0</Lifetime><Speed>160.0</Speed><ToolTip></ToolTip></Item><Item><Name>Onyx Shield of the Mad God</Name><NameCode>0x2339</NameCode><Description>A pitch-black shield looted from the depths of Oryx\'s Castle.</Description><Tier>ST</Tier><Filename>d3LofiObjEmbed</Filename><Row>0</Row><Column>2</Column><SetName>Oryx Awesome Set</SetName><SlotType>5</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>12</DEF><SPD>0</SPD><DEX>0</DEX><VIT>2</VIT><WIS>2</WIS><Fame>4</Fame></MultiHit></PassesCover><BaseDamage>300</BaseDamage><MaxDamage>360</MaxDamage><RateOfFire>0</RateOfFire><Shots>5</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>11.25</ArcGap><Lifetime>200.0</Lifetime><Speed>160.0</Speed><ToolTip></ToolTip></Item><Item><Name>Spiteful Scutum</Name><NameCode>0x0d43</NameCode><Description>A shield from a place beyond the gates of war and peace.</Description><Tier>UT</Tier><Filename>d3LofiObjEmbed</Filename><Row>2</Row><Column>13</Column><SetName></SetName><SlotType>5</SlotType><HP>0</HP><MP>0</MP><ATK>2</ATK><DEF>10</DEF><SPD>2</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>6</Fame></DefIgnore></MultiHit></Soulbound></PassesCover><BaseDamage>400</BaseDamage><MaxDamage>600</MaxDamage><RateOfFire>0</RateOfFire><Shots>2</Shots><Amplitude>0.2</Amplitude><Frequency>0.5</Frequency><ArcGap>8.0</ArcGap><Lifetime>250.0</Lifetime><Speed>140.0</Speed><ToolTip></ToolTip></Item><Item><Name>Resounding Shield</Name><NameCode>0x2094</NameCode><Description>An enormous, brazen shield taken from an ancient belfry, long believed to have been enchanted by centuries of ringing for angelic favor.\n\nSprite Credits: Dappertron</Description><Tier>UT</Tier><Filename>oryxHordeObjects8x8</Filename><Row>6</Row><Column>0</Column><SetName></SetName><SlotType>5</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>12</DEF><SPD>0</SPD><DEX>0</DEX><VIT>2</VIT><WIS>2</WIS><Fame>4</Fame></MultiHit></PassesCover><BaseDamage>300</BaseDamage><MaxDamage>360</MaxDamage><RateOfFire>0</RateOfFire><Shots>5</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>11.25</ArcGap><Lifetime>200.0</Lifetime><Speed>160.0</Speed><ToolTip></ToolTip></Item><Item><Name>Spriteful Shield</Name><NameCode>0x13ab</NameCode><Description>This magical shield was built by a tribe of mysterious forest people called the Eggre.\n\nSprite Credits: Piggby</Description><Tier>UT</Tier><Filename>buffedBunnyObjects8x8</Filename><Row>2</Row><Column>10</Column><SetName></SetName><SlotType>5</SlotType><HP>0</HP><MP>0</MP><ATK>2</ATK><DEF>10</DEF><SPD>2</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>7</Fame></DefIgnore></MultiHit></Soulbound></PassesCover><BaseDamage>400</BaseDamage><MaxDamage>600</MaxDamage><RateOfFire>0</RateOfFire><Shots>2</Shots><Amplitude>0.2</Amplitude><Frequency>0.5</Frequency><ArcGap>8.0</ArcGap><Lifetime>250.0</Lifetime><Speed>140.0</Speed><ToolTip></ToolTip></Item><Item><Name>Shield of Flowing Clarity</Name><NameCode>0x5b20</NameCode><Description>This shimmering shield allows knights to enhance their concentration on targets, giving them more time to think about their next move in battle.</Description><Tier>UT</Tier><Filename>d2LofiObjEmbed</Filename><Row>10</Row><Column>2</Column><SetName></SetName><SlotType>5</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>17</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>6</Fame></MultiHit></Soulbound></PassesCover><BaseDamage>150</BaseDamage><MaxDamage>330</MaxDamage><RateOfFire>0</RateOfFire><Shots>5</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>11.25</ArcGap><Lifetime>200.0</Lifetime><Speed>160.0</Speed><ToolTip></ToolTip></Item><Item><Name>Champion\'s Bastion</Name><NameCode>0x5be0</NameCode><Description>This almighty shield was specially designed to protect its owner from a bombardment of attacks in all directions. Although feared today, it once stood as a reminder of Oryx\'s glory in an era long forgotten.</Description><Tier>ST</Tier><Filename>d2LofiObjEmbed</Filename><Row>12</Row><Column>5</Column><SetName>Oryx\'s Battle Attires</SetName><SlotType>5</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame></MultiHit></Soulbound></PassesCover><BaseDamage>385</BaseDamage><MaxDamage>455</MaxDamage><RateOfFire>0</RateOfFire><Shots>5</Shots></Wavy><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>11.25</ArcGap><Lifetime>400.0</Lifetime><Speed>70.0</Speed><ToolTip></ToolTip></Item><Item><Name>Crystal Shield</Name><NameCode>0x0499</NameCode><Description>An ornately decorated buckler made from an array of crystalline stone. It is too frail to swing around, but it can somehow grow and mantle its wielder in an indestructible crystal armor.</Description><Tier>UT</Tier><Filename>d2LofiObjEmbed</Filename><Row>20</Row><Column>10</Column><SetName></SetName><SlotType>5</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>6</Fame></Soulbound><BaseDamage>200</BaseDamage><MaxDamage>220</MaxDamage><RateOfFire>0</RateOfFire><Shots>1</Shots><Amplitude>0.65</Amplitude><Frequency>0.2</Frequency><ArcGap>0.0</ArcGap><Lifetime>400.0</Lifetime><Speed>130.0</Speed><ToolTip>         <EffectInfo name="While Key Held" description=""/>         <EffectInfo name="" description="-30 Speed on self for 5 seconds."/>         <EffectInfo name="" description="Invulnerable on self"/>         <EffectInfo name="" description="Drain 70 MP/sec"/>         <EffectInfo name="When Key Released" description=""/>      </ToolTip></Item>';
    
    while (s.includes("<Item>"))
        {
            var tot = makeItem(s);
            shields.push(tot);
            s = s.substring(s.indexOf("</Item>")+1, s.length)
        }
    
    s = '<Item><Name>(empty slot)</Name><NameCode></NameCode><Description></Description><Tier></Tier><Filename></Filename><Row>0</Row><Column>0</Column><SetName></SetName><SlotType>10</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Seal of the Initiate</Name><NameCode>0xa52</NameCode><Description>A holy seal of divine favor.</Description><Tier>T0</Tier><Filename>lofiObj6</Filename><Row>10</Row><Column>0</Column><SetName></SetName><SlotType>12</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Seal of the Pilgrim</Name><NameCode>0xad9</NameCode><Description>A seal of holy providence and mortal virtue.</Description><Tier>T1</Tier><Filename>lofiObj6</Filename><Row>10</Row><Column>1</Column><SetName></SetName><SlotType>12</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Seal of the Seeker</Name><NameCode>0xa53</NameCode><Description>A holy seal of godly protection, shimmering with divine might.</Description><Tier>T2</Tier><Filename>lofiObj6</Filename><Row>10</Row><Column>2</Column><SetName></SetName><SlotType>12</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Seal of the Aspirant</Name><NameCode>0xada</NameCode><Description>A seal of blessed preservation, gleaming with the sacred will of the righteous.</Description><Tier>T3</Tier><Filename>lofiObj6</Filename><Row>10</Row><Column>3</Column><SetName></SetName><SlotType>12</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>1</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Seal of the Divine</Name><NameCode>0xa54</NameCode><Description>A consecrated seal of the heavens, shining with divine brilliance and godly power.</Description><Tier>T4</Tier><Filename>lofiObj6</Filename><Row>10</Row><Column>4</Column><SetName></SetName><SlotType>12</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>2</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Seal of the Holy Warrior</Name><NameCode>0xa55</NameCode><Description>A hallowed seal of the immortal divine, sanctified by the pious and used since ancient times to inspire great numbers of crusading warriors.</Description><Tier>T5</Tier><Filename>lofiObj6</Filename><Row>10</Row><Column>5</Column><SetName></SetName><SlotType>12</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>3</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Seal of the Blessed Champion</Name><NameCode>0xb26</NameCode><Description>A holy seal of heavenly omnipotence, given to aid mortal warriors in their fight against chaos and darkness.</Description><Tier>T6</Tier><Filename>lofiObj6</Filename><Row>10</Row><Column>6</Column><SetName></SetName><SlotType>12</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Seal of Blasphemous Prayer</Name><NameCode>0xc06</NameCode><Description>A seal that is said to briefly borrow the power of the Gods themselves.  Some Paladins shun its dark power, others embrace it.</Description><Tier>UT</Tier><Filename>lofiObj2</Filename><Row>6</Row><Column>14</Column><SetName></SetName><SlotType>12</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>-4</DEF><SPD>4</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>6</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Legacy Seal of the Enchanted Forest</Name><NameCode>0x2366</NameCode><Description>Protect the helpless, embolden the heroic, slow the progress of evil. - Inscription, in Fae.</Description><Tier>ST</Tier><Filename>lofiObj3</Filename><Row>81</Row><Column>10</Column><SetName>Legacy Swoll Paladin Set</SetName><SlotType>12</SlotType><HP>0</HP><MP>0</MP><ATK>2</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>5</VIT><WIS>5</WIS><Fame>4</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Marble Seal</Name><NameCode>0x0243</NameCode><Description>A seal made from the Marble Colossus\' head. The power of a pure and mighty paladin still remains within.</Description><Tier>UT</Tier><Filename>lostHallsObjects8x8</Filename><Row>2</Row><Column>7</Column><SetName></SetName><SlotType>12</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>5</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>6</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip>         <EffectInfo name="" description="Summon an Eye of Marble for 4.5 seconds"/>         <EffectInfo name="Eye Effect" description="Armored within 4 sqrs"/>         <EffectInfo name="Eye Effect" description="Damaging within 4 sqrs"/>      </ToolTip></Item><Item><Name>Advent Seal</Name><NameCode>0x2098</NameCode><Description>A sacred seal of the bitter Frost Kingdoms, bearing a wreathlike design that invokes a symbol of strength and endurance in the midst of winter.\n\nSprite Credits: Dappertron</Description><Tier>UT</Tier><Filename>oryxHordeObjects8x8</Filename><Row>6</Row><Column>1</Column><SetName></SetName><SlotType>12</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Seal of Divine Focus</Name><NameCode>0x264</NameCode><Description>The Paladins of Lira-Tin used this seal to reach high level of focus during their training.</Description><Tier>UT</Tier><Filename>d2LofiObjEmbed</Filename><Row>13</Row><Column>2</Column><SetName></SetName><SlotType>12</SlotType><HP>0</HP><MP>0</MP><ATK>4</ATK><DEF>4</DEF><SPD>0</SPD><DEX>4</DEX><VIT>0</VIT><WIS>0</WIS><Fame>6</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Scholar\'s Seal</Name><NameCode>0x57e</NameCode><Description>A symbolic seal gifted to the most renowned philosophers of ancient times.</Description><Tier>UT</Tier><Filename>cursedLibraryObjects8x8</Filename><Row>7</Row><Column>9</Column><SetName></SetName><SlotType>12</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>4</SPD><DEX>4</DEX><VIT>0</VIT><WIS>0</WIS><Fame>5</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Seal of the Enchanted Forest</Name><NameCode>0x04a6</NameCode><Description>Protect the helpless, embolden the heroic, slow the progress of evil. - Inscription, in Fae.</Description><Tier>ST</Tier><Filename>d2LofiObjEmbed</Filename><Row>18</Row><Column>3</Column><SetName>Swoll Paladin Set</SetName><SlotType>12</SlotType><HP>0</HP><MP>0</MP><ATK>9</ATK><DEF>5</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>9</WIS><Fame>4</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Sacrilege Seal</Name><NameCode>0x6492</NameCode><Description>Paladins must take an oath of righteousness to obtain their titles. Those who defect are considered deeply cursed.\n\nSprite Credits: Aurum</Description><Tier>ST</Tier><Filename>d2LofiObjEmbed</Filename><Row>24</Row><Column>1</Column><SetName>Unholy Paladin Set</SetName><SlotType>12</SlotType><HP>0</HP><MP>0</MP><ATK>9</ATK><DEF>5</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>9</WIS><Fame>4</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item>';
    
    while (s.includes("<Item>"))
        {
            var tot = makeItem(s);
            seals.push(tot);
            s = s.substring(s.indexOf("</Item>")+1, s.length)
        }
    
    s = '<Item><Name>(empty slot)</Name><NameCode></NameCode><Description></Description><Tier></Tier><Filename></Filename><Row>0</Row><Column>0</Column><SetName></SetName><SlotType>10</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Basic Star</Name><NameCode>0xc53</NameCode><Description>A basic ninja-star.</Description><Tier>T0</Tier><Filename>lofiObj3</Filename><Row>34</Row><Column>11</Column><SetName></SetName><SlotType>25</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame></PassesCover><BaseDamage>100</BaseDamage><MaxDamage>200</MaxDamage><RateOfFire>0</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>1000.0</Lifetime><Speed>100.0</Speed><ToolTip>         <EffectInfo name="While Key Held" description=""/>         <EffectInfo name="" description="Speedy on self"/>         <EffectInfo name="" description="Drain 10 MP/sec"/>         <EffectInfo name="When Key Released" description=""/>      </ToolTip></Item><Item><Name>Four-Point Star</Name><NameCode>0xc54</NameCode><Description>A ninja-star with four razor-sharp points.</Description><Tier>T1</Tier><Filename>lofiObj3</Filename><Row>34</Row><Column>12</Column><SetName></SetName><SlotType>25</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame></PassesCover><BaseDamage>175</BaseDamage><MaxDamage>275</MaxDamage><RateOfFire>0</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>1000.0</Lifetime><Speed>150.0</Speed><ToolTip>         <EffectInfo name="While Key Held" description=""/>         <EffectInfo name="" description="Speedy on self"/>         <EffectInfo name="" description="Drain 10 MP/sec"/>         <EffectInfo name="When Key Released" description=""/>      </ToolTip></Item><Item><Name>Spiral Shuriken</Name><NameCode>0xc55</NameCode><Description>A ninja-star with curved spiraling blades.</Description><Tier>T2</Tier><Filename>lofiObj3</Filename><Row>34</Row><Column>13</Column><SetName></SetName><SlotType>25</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame></PassesCover><BaseDamage>300</BaseDamage><MaxDamage>400</MaxDamage><RateOfFire>0</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>1000.0</Lifetime><Speed>150.0</Speed><ToolTip>         <EffectInfo name="While Key Held" description=""/>         <EffectInfo name="" description="Speedy on self"/>         <EffectInfo name="" description="Drain 10 MP/sec"/>         <EffectInfo name="When Key Released" description=""/>      </ToolTip></Item><Item><Name>Silver Star</Name><NameCode>0xc56</NameCode><Description>A beautifully crafted shuriken.</Description><Tier>T3</Tier><Filename>lofiObj3</Filename><Row>34</Row><Column>14</Column><SetName></SetName><SlotType>25</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>1</Fame></PassesCover><BaseDamage>400</BaseDamage><MaxDamage>500</MaxDamage><RateOfFire>0</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>1000.0</Lifetime><Speed>150.0</Speed><ToolTip>         <EffectInfo name="While Key Held" description=""/>         <EffectInfo name="" description="Speedy on self"/>         <EffectInfo name="" description="Drain 10 MP/sec"/>         <EffectInfo name="When Key Released" description=""/>      </ToolTip></Item><Item><Name>Wind Circle</Name><NameCode>0xc57</NameCode><Description>A sacred shuriken that embodies the power and speed of the wind.</Description><Tier>T4</Tier><Filename>lofiObj3</Filename><Row>34</Row><Column>15</Column><SetName></SetName><SlotType>25</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>2</Fame></PassesCover><BaseDamage>550</BaseDamage><MaxDamage>650</MaxDamage><RateOfFire>0</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>1000.0</Lifetime><Speed>170.0</Speed><ToolTip>         <EffectInfo name="While Key Held" description=""/>         <EffectInfo name="" description="Speedy on self"/>         <EffectInfo name="" description="Drain 10 MP/sec"/>         <EffectInfo name="When Key Released" description=""/>      </ToolTip></Item><Item><Name>Ice Star</Name><NameCode>0xc58</NameCode><Description>A mystical shuriken formed from ever-frozen ice.</Description><Tier>T5</Tier><Filename>lofiObj3</Filename><Row>35</Row><Column>0</Column><SetName></SetName><SlotType>25</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>3</Fame></PassesCover><BaseDamage>700</BaseDamage><MaxDamage>800</MaxDamage><RateOfFire>0</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>1000.0</Lifetime><Speed>150.0</Speed><ToolTip>         <EffectInfo name="While Key Held" description=""/>         <EffectInfo name="" description="Speedy on self"/>         <EffectInfo name="" description="Drain 10 MP/sec"/>         <EffectInfo name="When Key Released" description=""/>      </ToolTip></Item><Item><Name>Doom Circle</Name><NameCode>0xc59</NameCode><Description>An ancient weapon that spells destruction for all who oppose its master.</Description><Tier>T6</Tier><Filename>lofiObj3</Filename><Row>35</Row><Column>1</Column><SetName></SetName><SlotType>25</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>2</VIT><WIS>2</WIS><Fame>4</Fame></PassesCover><BaseDamage>850</BaseDamage><MaxDamage>950</MaxDamage><RateOfFire>0</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>1000.0</Lifetime><Speed>150.0</Speed><ToolTip>         <EffectInfo name="While Key Held" description=""/>         <EffectInfo name="" description="Speedy on self"/>         <EffectInfo name="" description="Drain 10 MP/sec"/>         <EffectInfo name="When Key Released" description=""/>      </ToolTip></Item><Item><Name>Midnight Star</Name><NameCode>0x916</NameCode><Description>A legendary shuriken that absorbs the light around it.</Description><Tier>UT</Tier><Filename>lofiObj3</Filename><Row>35</Row><Column>2</Column><SetName></SetName><SlotType>25</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>6</Fame></Soulbound></PassesCover><BaseDamage>300</BaseDamage><MaxDamage>600</MaxDamage><RateOfFire>0</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>1000.0</Lifetime><Speed>150.0</Speed><ToolTip>         <EffectInfo name="While Key Held" description=""/>         <EffectInfo name="" description="Speedy on self"/>         <EffectInfo name="" description="Drain 10 MP/sec"/>         <EffectInfo name="When Key Released" description=""/>      </ToolTip></Item><Item><Name>Kageboshi</Name><NameCode>0x183d</NameCode><Description>Imbued with energy from another place, the blade will pierce through any foe.</Description><Tier>UT</Tier><Filename>mountainTempleObjects8x8</Filename><Row>9</Row><Column>14</Column><SetName></SetName><SlotType>25</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>2</DEF><SPD>0</SPD><DEX>0</DEX><VIT>5</VIT><WIS>0</WIS><Fame>5</Fame></MultiHit></Soulbound></PassesCover><BaseDamage>414</BaseDamage><MaxDamage>506</MaxDamage><RateOfFire>0</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>522.0</Lifetime><Speed>161.0</Speed><ToolTip>         <EffectInfo name="While Key Held" description=""/>         <EffectInfo name="" description="Speedy on self"/>         <EffectInfo name="" description="Drain 10 MP/sec"/>         <EffectInfo name="When Key Released" description=""/>      </ToolTip></Item><Item><Name>Clover Star</Name><NameCode>0x7416</NameCode><Description>Use that clover to impress the ladies.\n\nSprite Credits: Aurum</Description><Tier>UT</Tier><Filename>stPatricksObjects8x8</Filename><Row>3</Row><Column>7</Column><SetName></SetName><SlotType>25</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>3</Fame></MultiHit></Soulbound></PassesCover></Parametric><BaseDamage>80</BaseDamage><MaxDamage>90</MaxDamage><RateOfFire>0</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>5000.0</Lifetime><Speed>100.0</Speed><ToolTip>         <EffectInfo name="While Key Held" description=""/>         <EffectInfo name="" description="Speedy on self"/>         <EffectInfo name="" description="Drain 10 MP/sec"/>         <EffectInfo name="When Key Released" description=""/>      </ToolTip></Item><Item><Name>Ilex Star</Name><NameCode>0x2099</NameCode><Description>A razor-sharp arrangement of holly plants that has been enchanted to vanquish spirits of darkness.\n\nSprite Credits: Dappertron</Description><Tier>UT</Tier><Filename>oryxHordeObjects8x8</Filename><Row>6</Row><Column>6</Column><SetName></SetName><SlotType>25</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>2</VIT><WIS>2</WIS><Fame>4</Fame></PassesCover><BaseDamage>850</BaseDamage><MaxDamage>950</MaxDamage><RateOfFire>0</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>1000.0</Lifetime><Speed>150.0</Speed><ToolTip>         <EffectInfo name="While Key Held" description=""/>         <EffectInfo name="" description="Speedy on self"/>         <EffectInfo name="" description="Drain 10 MP/sec"/>         <EffectInfo name="When Key Released" description=""/>      </ToolTip></Item><Item><Name>Daybreak Chakram</Name><NameCode>0x1e58</NameCode><Description>Circle of sunlight\nEmpowers a fragile bloom\nAnd scours the world.</Description><Tier>ST</Tier><Filename>d2LofiObjEmbed</Filename><Row>13</Row><Column>12</Column><SetName>Raijin Disciple Set</SetName><SlotType>25</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame></Soulbound></PassesCover><BaseDamage>720</BaseDamage><MaxDamage>1440</MaxDamage><RateOfFire>0</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>357.0</Lifetime><Speed>140.0</Speed><ToolTip>         <EffectInfo name="While Key Held" description=""/>         <EffectInfo name="" description="Armored on self"/>         <EffectInfo name="" description="Drain 40 MP/sec"/>         <EffectInfo name="When Key Released" description=""/>      </ToolTip></Item><Item><Name>Star of Enlightenment</Name><NameCode>0x58d</NameCode><Description>A perfectly cut crystal encasing light from the oldest stars in the universe. All who hold it are filled with a sense of peace and concentration.</Description><Tier>UT</Tier><Filename>crystalCaveObjects8x8</Filename><Row>8</Row><Column>5</Column><SetName></SetName><SlotType>25</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>6</Fame></Soulbound></PassesCover><BaseDamage>1000</BaseDamage><MaxDamage>1500</MaxDamage><RateOfFire>0</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>1250.0</Lifetime><Speed>100.0</Speed><ToolTip>         <EffectInfo description="" name="While Key Held"/>         <EffectInfo description="Slowed and Berserk on self" name=""/>         <EffectInfo description="Drain 20 MP/sec" name=""/>         <EffectInfo description="" name="When Key Released"/>      </ToolTip></Item><Item><Name>Crystalline Kunai</Name><NameCode>0x4b3e</NameCode><Description>These kunai were chiseled as an experimental weapon by the mineral monsters lurking far beneath the realm\'s surface.</Description><Tier>ST</Tier><Filename>d2LofiObjEmbed</Filename><Row>33</Row><Column>8</Column><SetName>Crystal Kunoichi Set</SetName><SlotType>25</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>5</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>5</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip>         <EffectInfo description="Retaliate with 3 kunais when hit." name="Heightened Senses"/>         <EffectInfo description="550" name="Kunai Damage"/>         <EffectInfo description="2 seconds" name="Kunai Cooldown"/>      </ToolTip></Item><Item><Name>Hanagasaku</Name><NameCode>0x4b9a</NameCode><Description>Bloomed from Belladonna\'s Garden, this plant has grown into a lethal weapon through its disc shape and exceptionally sharp petals. Its seeds fly off when thrown, quickly spreading itself through the surrounding area.\n\nSprite Credits: TLMaelstrom</Description><Tier>UT</Tier><Filename>lofiObj3</Filename><Row>96</Row><Column>1</Column><SetName></SetName><SlotType>25</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>4</SPD><DEX>0</DEX><VIT>4</VIT><WIS>0</WIS><Fame>6</Fame></Soulbound></PassesCover><BaseDamage>400</BaseDamage><MaxDamage>600</MaxDamage><RateOfFire>0</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>1000.0</Lifetime><Speed>150.0</Speed><ToolTip>         <EffectInfo description="Plants a Bud Bomb that explodes after 1.5 seconds" name="On Ability Use"/>         <EffectInfo description="900" name="Bud Damage"/>         <EffectInfo description="3 tiles" name="Bud Range"/>      </ToolTip></Item>';
    
    while (s.includes("<Item>"))
        {
            var tot = makeItem(s);
            stars.push(tot);
            s = s.substring(s.indexOf("</Item>")+1, s.length)
        }
    
    s = '<Item><Name>(empty slot)</Name><NameCode></NameCode><Description></Description><Tier></Tier><Filename></Filename><Row>0</Row><Column>0</Column><SetName></SetName><SlotType>10</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Simple Wakizashi</Name><NameCode>0x1aaa</NameCode><Description>A small, quick-to-swing blade.</Description><Tier>T0</Tier><Filename>lofiObj6</Filename><Row>14</Row><Column>0</Column><SetName></SetName><SlotType>27</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame></MultiHit></PassesCover><BaseDamage>150</BaseDamage><MaxDamage>250</MaxDamage><RateOfFire>0</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>350.0</Lifetime><Speed>180.0</Speed><ToolTip></ToolTip></Item><Item><Name>Steel Wakizashi</Name><NameCode>0x1aab</NameCode><Description>A heavy wakizashi crafted by a fine metalworker.</Description><Tier>T1</Tier><Filename>lofiObj6</Filename><Row>14</Row><Column>1</Column><SetName></SetName><SlotType>27</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame></MultiHit></PassesCover><BaseDamage>250</BaseDamage><MaxDamage>350</MaxDamage><RateOfFire>0</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>350.0</Lifetime><Speed>180.0</Speed><ToolTip></ToolTip></Item><Item><Name>Crimson Wakizashi</Name><NameCode>0x1aac</NameCode><Description>A deep red wakizashi made of bronze.</Description><Tier>T2</Tier><Filename>lofiObj6</Filename><Row>14</Row><Column>2</Column><SetName></SetName><SlotType>27</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame></MultiHit></PassesCover><BaseDamage>200</BaseDamage><MaxDamage>300</MaxDamage><RateOfFire>0</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>350.0</Lifetime><Speed>180.0</Speed><ToolTip></ToolTip></Item><Item><Name>Enforced Wakizashi</Name><NameCode>0x1aad</NameCode><Description>A heavy wakizashi created and used by a secluded sect of powerful swordsmen.</Description><Tier>T3</Tier><Filename>lofiObj6</Filename><Row>14</Row><Column>3</Column><SetName></SetName><SlotType>27</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>1</Fame></MultiHit></PassesCover><BaseDamage>300</BaseDamage><MaxDamage>400</MaxDamage><RateOfFire>0</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>350.0</Lifetime><Speed>180.0</Speed><ToolTip></ToolTip></Item><Item><Name>Turquoise Wakizashi</Name><NameCode>0x1aae</NameCode><Description>A beautiful wakizashi, adorned with shining gemstones found within the extensive cavern, Okina Tomi.</Description><Tier>T4</Tier><Filename>lofiObj6</Filename><Row>14</Row><Column>4</Column><SetName></SetName><SlotType>27</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>2</Fame></MultiHit></PassesCover><BaseDamage>250</BaseDamage><MaxDamage>350</MaxDamage><RateOfFire>0</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>350.0</Lifetime><Speed>180.0</Speed><ToolTip></ToolTip></Item><Item><Name>Jade-Imbued Wakizashi</Name><NameCode>0x1aaf</NameCode><Description>A wakizashi adorned with sea green stones, only given to the greatest swordsmen by the Grand Emperor himself.</Description><Tier>T5</Tier><Filename>lofiObj6</Filename><Row>14</Row><Column>5</Column><SetName></SetName><SlotType>27</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>3</Fame></MultiHit></PassesCover><BaseDamage>380</BaseDamage><MaxDamage>480</MaxDamage><RateOfFire>0</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>350.0</Lifetime><Speed>180.0</Speed><ToolTip></ToolTip></Item><Item><Name>Royal Wakizashi</Name><NameCode>0x1ab0</NameCode><Description>A gorgeous wakizashi made of starmetal and gifted to an ancient king by the god Shinsetsuna for his devotion.</Description><Tier>T6</Tier><Filename>lofiObj6</Filename><Row>14</Row><Column>6</Column><SetName></SetName><SlotType>27</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>2</VIT><WIS>2</WIS><Fame>4</Fame></MultiHit></PassesCover><BaseDamage>400</BaseDamage><MaxDamage>500</MaxDamage><RateOfFire>0</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>350.0</Lifetime><Speed>180.0</Speed><ToolTip></ToolTip></Item><Item><Name>Wakizashi of Eastern Winds</Name><NameCode>0x2322</NameCode><Description>A wakizashi used by a powerful swordsman in ancient times. It seems to dance through the air as you swing it.</Description><Tier>UT</Tier><Filename>lofiObj6</Filename><Row>14</Row><Column>9</Column><SetName></SetName><SlotType>27</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>5</SPD><DEX>3</DEX><VIT>0</VIT><WIS>0</WIS><Fame>5</Fame></MultiHit></Soulbound></PassesCover><BaseDamage>260</BaseDamage><MaxDamage>490</MaxDamage><RateOfFire>0</RateOfFire><Shots>1</Shots><Amplitude>0.42</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>400.0</Lifetime><Speed>140.0</Speed><ToolTip></ToolTip></Item><Item><Name>Wakizashi of Crossing Fires</Name><NameCode>0x23c0</NameCode><Description>A blade created within the Hellforge and enchanted with dark magics to grant its wielder the power of a demon king.</Description><Tier>UT</Tier><Filename>lofiObj6</Filename><Row>14</Row><Column>10</Column><SetName></SetName><SlotType>27</SlotType><HP>0</HP><MP>0</MP><ATK>4</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>2</VIT><WIS>0</WIS><Fame>6</Fame></MultiHit></Soulbound></PassesCover><BaseDamage>480</BaseDamage><MaxDamage>600</MaxDamage><RateOfFire>0</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>400.0</Lifetime><Speed>160.0</Speed><ToolTip></ToolTip></Item><Item><Name>Ryu\'s Blade</Name><NameCode>0xf3c</NameCode><Description>Calls upon old energy to unleash a swarm of dragon like energy spirits.</Description><Tier>ST</Tier><Filename>d2LofiObjEmbed</Filename><Row>10</Row><Column>10</Column><SetName>Akuma Slayer Set</SetName><SlotType>27</SlotType><HP>0</HP><MP>0</MP><ATK>2</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame></DefIgnore></MultiHit></Soulbound></PassesCover><BaseDamage>125</BaseDamage><MaxDamage>250</MaxDamage><RateOfFire>0</RateOfFire><Shots>1</Shots></Wavy><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>800.0</Lifetime><Speed>120.0</Speed><ToolTip></ToolTip></Item><Item><Name>Peppermint Wakizashi</Name><NameCode>0x265</NameCode><Description>A wakizashi fashioned from perennial ice. Its innocent, festive appearance belies its lethal edge.\n\nSprite Credits: Dappertron</Description><Tier>UT</Tier><Filename>d2LofiObjEmbed</Filename><Row>12</Row><Column>14</Column><SetName></SetName><SlotType>27</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>2</VIT><WIS>2</WIS><Fame>4</Fame></MultiHit></PassesCover><BaseDamage>400</BaseDamage><MaxDamage>500</MaxDamage><RateOfFire>0</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>350.0</Lifetime><Speed>180.0</Speed><ToolTip></ToolTip></Item><Item><Name>Sakura Wakizashi</Name><NameCode>0x183e</NameCode><Description>A whimsical wakizashi of Eastern origin; it has a pleasant aroma of cherry blossoms.\n\nSprite Credits: Aurum</Description><Tier>UT</Tier><Filename>buffedBunnyObjects8x8</Filename><Row>4</Row><Column>0</Column><SetName></SetName><SlotType>27</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>5</SPD><DEX>3</DEX><VIT>0</VIT><WIS>0</WIS><Fame>7</Fame></MultiHit></Soulbound></PassesCover><BaseDamage>260</BaseDamage><MaxDamage>490</MaxDamage><RateOfFire>0</RateOfFire><Shots>1</Shots><Amplitude>0.42</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>400.0</Lifetime><Speed>140.0</Speed><ToolTip></ToolTip></Item><Item><Name>Ronin\'s Wakizashi</Name><NameCode>0x57f</NameCode><Description>An artifact once wielded by a wandering samurai with no master to serve. It was preserved in the Cursed Library for historical purposes, but it remains just as deadly despite its age.</Description><Tier>UT</Tier><Filename>cursedLibraryObjects8x8</Filename><Row>4</Row><Column>12</Column><SetName></SetName><SlotType>27</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>4</SPD><DEX>0</DEX><VIT>0</VIT><WIS>4</WIS><Fame>3</Fame></MultiHit></Soulbound></PassesCover><BaseDamage>200</BaseDamage><MaxDamage>300</MaxDamage><RateOfFire>0</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>350.0</Lifetime><Speed>180.0</Speed><ToolTip></ToolTip></Item><Item><Name>Fractured Gemstone Wakizashi</Name><NameCode>0x58a</NameCode><Description>Carved from the unblemished minerals deep beneath the realm, this unconventional wakizashi fractures itself when swung to release a strange supernatural energy.</Description><Tier>UT</Tier><Filename>crystalCaveObjects8x8</Filename><Row>8</Row><Column>7</Column><SetName></SetName><SlotType>27</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>5</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>6</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip>         <EffectInfo description="Summons sentient crystal star orbitting you for 5 seconds" name=""/>         <EffectInfo description="Inflicts Exposed for 4 seconds, deals 350 damage per hit" name="Crystal Star"/>      </ToolTip></Item>';
    
    while (s.includes("<Item>"))
        {
            var tot = makeItem(s);
            wakis.push(tot);
            s = s.substring(s.indexOf("</Item>")+1, s.length)
        }
    
    s = '<Item><Name>(empty slot)</Name><NameCode></NameCode><Description></Description><Tier></Tier><Filename></Filename><Row>0</Row><Column>0</Column><SetName></SetName><SlotType>10</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Magic Quiver</Name><NameCode>0xa61</NameCode><Description>A magical quiver that enchants arrows.</Description><Tier>T0</Tier><Filename>lofiObj6</Filename><Row>3</Row><Column>0</Column><SetName></SetName><SlotType>15</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame></MultiHit></PassesCover><BaseDamage>100</BaseDamage><MaxDamage>140</MaxDamage><RateOfFire>0</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>1000.0</Lifetime><Speed>150.0</Speed><ToolTip></ToolTip></Item><Item><Name>Reinforced Quiver</Name><NameCode>0xa62</NameCode><Description>An enchanted quiver made of high-quality leather and brass.</Description><Tier>T1</Tier><Filename>lofiObj6</Filename><Row>3</Row><Column>1</Column><SetName></SetName><SlotType>15</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>1</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame></MultiHit></PassesCover><BaseDamage>140</BaseDamage><MaxDamage>180</MaxDamage><RateOfFire>0</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>1000.0</Lifetime><Speed>150.0</Speed><ToolTip></ToolTip></Item><Item><Name>Iron Quiver</Name><NameCode>0xa63</NameCode><Description>A strong quiver of magical iron.</Description><Tier>T2</Tier><Filename>lofiObj6</Filename><Row>3</Row><Column>2</Column><SetName></SetName><SlotType>15</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>2</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame></MultiHit></PassesCover><BaseDamage>180</BaseDamage><MaxDamage>220</MaxDamage><RateOfFire>0</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>1000.0</Lifetime><Speed>150.0</Speed><ToolTip></ToolTip></Item><Item><Name>Elvencraft Quiver</Name><NameCode>0xade</NameCode><Description>A powerful enchanting quiver made by forest elves.</Description><Tier>T3</Tier><Filename>lofiObj6</Filename><Row>3</Row><Column>3</Column><SetName></SetName><SlotType>15</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>3</DEX><VIT>0</VIT><WIS>0</WIS><Fame>1</Fame></MultiHit></PassesCover><BaseDamage>220</BaseDamage><MaxDamage>260</MaxDamage><RateOfFire>0</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>1000.0</Lifetime><Speed>150.0</Speed><ToolTip></ToolTip></Item><Item><Name>Magesteel Quiver</Name><NameCode>0xa64</NameCode><Description>A superior enchanting quiver made of high quality magesteel.</Description><Tier>T4</Tier><Filename>lofiObj6</Filename><Row>3</Row><Column>4</Column><SetName></SetName><SlotType>15</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>4</DEX><VIT>0</VIT><WIS>0</WIS><Fame>2</Fame></MultiHit></PassesCover><BaseDamage>240</BaseDamage><MaxDamage>320</MaxDamage><RateOfFire>0</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>1000.0</Lifetime><Speed>150.0</Speed><ToolTip></ToolTip></Item><Item><Name>Golden Quiver</Name><NameCode>0xa65</NameCode><Description>A quiver that shines with gold and pulses with the power of elvish archer spirits.</Description><Tier>T5</Tier><Filename>lofiObj6</Filename><Row>3</Row><Column>5</Column><SetName></SetName><SlotType>15</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>5</DEX><VIT>0</VIT><WIS>0</WIS><Fame>3</Fame></MultiHit></PassesCover><BaseDamage>290</BaseDamage><MaxDamage>350</MaxDamage><RateOfFire>0</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>1000.0</Lifetime><Speed>150.0</Speed><ToolTip></ToolTip></Item><Item><Name>Quiver of Elvish Mastery</Name><NameCode>0xb28</NameCode><Description>A forestcloth quiver of highest quality, exhibiting exceptional magic powers and used by the foremost masters of Elven archery.</Description><Tier>T6</Tier><Filename>lofiObj6</Filename><Row>3</Row><Column>6</Column><SetName></SetName><SlotType>15</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>5</DEX><VIT>2</VIT><WIS>2</WIS><Fame>4</Fame></MultiHit></PassesCover><BaseDamage>290</BaseDamage><MaxDamage>350</MaxDamage><RateOfFire>0</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>1000.0</Lifetime><Speed>150.0</Speed><ToolTip></ToolTip></Item><Item><Name>Quiver of Thunder</Name><NameCode>0xc07</NameCode><Description>This strange quiver that was created in a forgotten age by a lost tribe of Dark Elves.</Description><Tier>UT</Tier><Filename>lofiObj2</Filename><Row>6</Row><Column>15</Column><SetName></SetName><SlotType>15</SlotType><HP>0</HP><MP>0</MP><ATK>5</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>6</Fame></Soulbound><BaseDamage>310</BaseDamage><MaxDamage>360</MaxDamage><RateOfFire>0</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>1000.0</Lifetime><Speed>150.0</Speed><ToolTip></ToolTip></Item><Item><Name>Freezing Quiver</Name><NameCode>0x1413</NameCode><Description>Corrupted by creatures of the frost realms, its arrows will slacken assailants promptly.</Description><Tier>UT</Tier><Filename>d3LofiObjEmbed</Filename><Row>4</Row><Column>9</Column><SetName></SetName><SlotType>15</SlotType><HP>0</HP><MP>0</MP><ATK>3</ATK><DEF>0</DEF><SPD>0</SPD><DEX>3</DEX><VIT>0</VIT><WIS>0</WIS><Fame>5</Fame></MultiHit></Soulbound></PassesCover><BaseDamage>180</BaseDamage><MaxDamage>260</MaxDamage><RateOfFire>0</RateOfFire><Shots>3</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>8.0</ArcGap><Lifetime>600.0</Lifetime><Speed>160.0</Speed><ToolTip></ToolTip></Item><Item><Name>Beehemoth Quiver</Name><NameCode>0x10ed</NameCode><Description>A quiver crafted from the remains of a yellow Beehemoth, filled with razor-sharp arrows fashioned from Killer Bee stingers.</Description><Tier>UT</Tier><Filename>epicHiveObjects8x8</Filename><Row>4</Row><Column>11</Column><SetName></SetName><SlotType>15</SlotType><HP>0</HP><MP>0</MP><ATK>3</ATK><DEF>0</DEF><SPD>0</SPD><DEX>3</DEX><VIT>0</VIT><WIS>0</WIS><Fame>5</Fame></MultiHit></Soulbound></PassesCover><BaseDamage>180</BaseDamage><MaxDamage>260</MaxDamage><RateOfFire>0</RateOfFire><Shots>3</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>8.0</ArcGap><Lifetime>600.0</Lifetime><Speed>160.0</Speed><ToolTip></ToolTip></Item><Item><Name>Beehemoth Quiver</Name><NameCode>0x10f3</NameCode><Description>A quiver crafted from the remains of a red Beehemoth, filled with razor-sharp arrows fashioned from Killer Bee stingers.</Description><Tier>UT</Tier><Filename>epicHiveObjects8x8</Filename><Row>4</Row><Column>12</Column><SetName></SetName><SlotType>15</SlotType><HP>0</HP><MP>0</MP><ATK>3</ATK><DEF>0</DEF><SPD>0</SPD><DEX>3</DEX><VIT>0</VIT><WIS>0</WIS><Fame>5</Fame></MultiHit></Soulbound></PassesCover><BaseDamage>180</BaseDamage><MaxDamage>260</MaxDamage><RateOfFire>0</RateOfFire><Shots>3</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>8.0</ArcGap><Lifetime>600.0</Lifetime><Speed>160.0</Speed><ToolTip></ToolTip></Item><Item><Name>Beehemoth Quiver</Name><NameCode>0x10f2</NameCode><Description>A quiver crafted from the remains of a blue Beehemoth, filled with razor-sharp arrows fashioned from Killer Bee stingers.</Description><Tier>UT</Tier><Filename>epicHiveObjects8x8</Filename><Row>4</Row><Column>13</Column><SetName></SetName><SlotType>15</SlotType><HP>0</HP><MP>0</MP><ATK>3</ATK><DEF>0</DEF><SPD>0</SPD><DEX>3</DEX><VIT>0</VIT><WIS>0</WIS><Fame>5</Fame></MultiHit></Soulbound></PassesCover><BaseDamage>180</BaseDamage><MaxDamage>260</MaxDamage><RateOfFire>0</RateOfFire><Shots>3</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>8.0</ArcGap><Lifetime>600.0</Lifetime><Speed>160.0</Speed><ToolTip></ToolTip></Item><Item><Name>Quiver of the Shadows</Name><NameCode>0x024d</NameCode><Description>A mysterious quiver formed of pure evil and dark matter. Its ethereal existence creates a small implosion of nearby atmosphere when drawn.</Description><Tier>UT</Tier><Filename>lostHallsObjects8x8</Filename><Row>10</Row><Column>8</Column><SetName></SetName><SlotType>15</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>2</DEF><SPD>-2</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>6</Fame></DefIgnore></MultiHit></Soulbound><BaseDamage>400</BaseDamage><MaxDamage>500</MaxDamage><RateOfFire>0</RateOfFire><Shots>5</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>8.0</ArcGap><Lifetime>625.0</Lifetime><Speed>160.0</Speed><ToolTip></ToolTip></Item><Item><Name>Coalbearing Quiver</Name><NameCode>0x2090</NameCode><Description>A giant sock-like quiver woven from elventhread, concentrating evil energy into a lump of coal to create powerful arrows.\n\nSprite Credits: Dappertron</Description><Tier>UT</Tier><Filename>oryxHordeObjects8x8</Filename><Row>5</Row><Column>3</Column><SetName></SetName><SlotType>15</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>5</DEX><VIT>2</VIT><WIS>2</WIS><Fame>4</Fame></MultiHit></PassesCover><BaseDamage>290</BaseDamage><MaxDamage>350</MaxDamage><RateOfFire>0</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>1000.0</Lifetime><Speed>150.0</Speed><ToolTip></ToolTip></Item><Item><Name>Quiver of Dazing Love</Name><NameCode>0x6407</NameCode><Description>It truly is dazzling when you put your heart into the work!\n\nSprite Credits: WunderWafe</Description><Tier>ST</Tier><Filename>d2LofiObjEmbed</Filename><Row>6</Row><Column>6</Column><SetName>Valentine\'s Day Archer Set</SetName><SlotType>15</SlotType><HP>0</HP><MP>0</MP><ATK>5</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>7</Fame></Soulbound><BaseDamage>310</BaseDamage><MaxDamage>360</MaxDamage><RateOfFire>0</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>1000.0</Lifetime><Speed>150.0</Speed><ToolTip></ToolTip></Item><Item><Name>Quintessential Quiver</Name><NameCode>0x579</NameCode><Description>Royal alchemy techniques have enabled this quiver to sharpen the gilded tips held within. Arrows loosed from the case are recognized as some of the sharpest objects known to man.</Description><Tier>ST</Tier><Filename>theMachineObjects8x8</Filename><Row>7</Row><Column>11</Column><SetName>Golden Archer Set</SetName><SlotType>15</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>6</Fame></Soulbound><BaseDamage>10</BaseDamage><MaxDamage>20</MaxDamage><RateOfFire>0</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>1000.0</Lifetime><Speed>150.0</Speed><ToolTip></ToolTip></Item><Item><Name>Quiver of Shrieking Specters</Name><NameCode>0x1e45</NameCode><Description>A quiver not meant for the corporeal realm. When used by a mortal, it creates a momentary rift between death and life, briefly releasing the chilling screams of the lost.</Description><Tier>ST</Tier><Filename>d2LofiObjEmbed</Filename><Row>13</Row><Column>5</Column><SetName>Phantom Archer Set</SetName><SlotType>15</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame></MultiHit></Soulbound></PassesCover><BaseDamage>85</BaseDamage><MaxDamage>130</MaxDamage><RateOfFire>0</RateOfFire><Shots>20</Shots></Wavy><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>18.0</ArcGap><Lifetime>500.0</Lifetime><Speed>120.0</Speed><ToolTip></ToolTip></Item><Item><Name>Spinal Quiver</Name><NameCode>0x648b</NameCode><Description>The sternum of a long deceased adventurer. It releases a shriek when fired, making enemies shake and shudder in surprise.\n\nSprite Credits: Tero, Aurum</Description><Tier>ST</Tier><Filename>d2LofiObjEmbed</Filename><Row>23</Row><Column>1</Column><SetName>Reanimated Archer Set</SetName><SlotType>15</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame></MultiHit></Soulbound></PassesCover><BaseDamage>85</BaseDamage><MaxDamage>130</MaxDamage><RateOfFire>0</RateOfFire><Shots>20</Shots></Wavy><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>18.0</ArcGap><Lifetime>500.0</Lifetime><Speed>120.0</Speed><ToolTip></ToolTip></Item>';
    
    while (s.includes("<Item>"))
        {
            var tot = makeItem(s);
            quivers.push(tot);
            s = s.substring(s.indexOf("</Item>")+1, s.length)
        }
    
    s = '<Item><Name>(empty slot)</Name><NameCode></NameCode><Description></Description><Tier></Tier><Filename></Filename><Row>0</Row><Column>0</Column><SetName></SetName><SlotType>10</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Hunting Trap</Name><NameCode>0xab1</NameCode><Description>A magical hunting trap.</Description><Tier>T0</Tier><Filename>lofiObj6</Filename><Row>1</Row><Column>0</Column><SetName></SetName><SlotType>20</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Wilderlands Trap</Name><NameCode>0xab2</NameCode><Description>A magical trap suited for hunting the strong beasts of the untamed country.</Description><Tier>T1</Tier><Filename>lofiObj6</Filename><Row>1</Row><Column>1</Column><SetName></SetName><SlotType>20</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Deepforest Trap</Name><NameCode>0xab3</NameCode><Description>An enchanted trap for hunting the fierce beasts of the dark forests.</Description><Tier>T2</Tier><Filename>lofiObj6</Filename><Row>1</Row><Column>2</Column><SetName></SetName><SlotType>20</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Savage Trap</Name><NameCode>0xab4</NameCode><Description>A mighty trap strong enough for the most vicious of magical beasts.</Description><Tier>T3</Tier><Filename>lofiObj6</Filename><Row>1</Row><Column>3</Column><SetName></SetName><SlotType>20</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>1</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Demonhunter Trap</Name><NameCode>0xab5</NameCode><Description>A potent trap powered by angelic spirits, used by demon hunters in the nether realms.</Description><Tier>T4</Tier><Filename>lofiObj6</Filename><Row>1</Row><Column>4</Column><SetName></SetName><SlotType>20</SlotType><HP>0</HP><MP>0</MP><ATK>1</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>2</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Dragonstalker Trap</Name><NameCode>0xab6</NameCode><Description>A powerful magic trap charged with astral energies and used by the legendary dragon slayers of ancient times.</Description><Tier>T5</Tier><Filename>lofiObj6</Filename><Row>1</Row><Column>5</Column><SetName></SetName><SlotType>20</SlotType><HP>0</HP><MP>0</MP><ATK>2</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>3</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Giantcatcher Trap</Name><NameCode>0xb2c</NameCode><Description>A most effective magical trap used in the titan wars to hobble even the largest of enemy combatants.</Description><Tier>T6</Tier><Filename>lofiObj6</Filename><Row>1</Row><Column>6</Column><SetName></SetName><SlotType>20</SlotType><HP>0</HP><MP>0</MP><ATK>3</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>2</VIT><WIS>2</WIS><Fame>4</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Coral Venom Trap</Name><NameCode>0xc1c</NameCode><Description>A trap imbued with deadly venom from the coral of the Ocean Trench.</Description><Tier>UT</Tier><Filename>lofiObj2</Filename><Row>1</Row><Column>11</Column><SetName></SetName><SlotType>20</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>2</SPD><DEX>2</DEX><VIT>0</VIT><WIS>0</WIS><Fame>5</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Trap of the Vile Spirit</Name><NameCode>0xb40</NameCode><Description>A long lost artifact recovered by Davy Jones, believed to have been cursed by the gods of the seven seas themselves.</Description><Tier>UT</Tier><Filename>d3LofiObjEmbed</Filename><Row>14</Row><Column>15</Column><SetName></SetName><SlotType>20</SlotType><HP>0</HP><MP>20</MP><ATK>3</ATK><DEF>0</DEF><SPD>3</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>6</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Honeytomb Snare</Name><NameCode>0x08f8</NameCode><Description>A strange trap that subdues would-be pilferers with a torrent of sticky honey.</Description><Tier>ST</Tier><Filename>epicHiveObjects8x8</Filename><Row>6</Row><Column>6</Column><SetName>Swarming Huntress Set</SetName><SlotType>20</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip>         <EffectInfo name="Trap" description="150 damage within 6 squares"/>         <EffectInfo name="" description="Inflicts Slowed for 1.2 seconds"/>         <EffectInfo name="" description="1 second to arm for 6 seconds"/>         <EffectInfo name="" description="Triggers every 1 second"/>      </ToolTip></Item><Item><Name>Greedsnatcher Trap</Name><NameCode>0x2093</NameCode><Description>A seemingly harmless present that actually contains a magical hyperspace pocket stuffed to the brim with explosives and shrapnel.\n\nSprite Credits: Dappertron</Description><Tier>UT</Tier><Filename>oryxHordeObjects8x8</Filename><Row>5</Row><Column>6</Column><SetName></SetName><SlotType>20</SlotType><HP>0</HP><MP>0</MP><ATK>3</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>2</VIT><WIS>2</WIS><Fame>4</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Trap of the Blood Spirit</Name><NameCode>0x73ce</NameCode><Description>This artifact is the result of a forbidden spell. It is made of crystalized blood.</Description><Tier>UT</Tier><Filename>d2LofiObjEmbed</Filename><Row>12</Row><Column>12</Column><SetName></SetName><SlotType>20</SlotType><HP>0</HP><MP>20</MP><ATK>3</ATK><DEF>0</DEF><SPD>3</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>6</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Cave Dweller Trap</Name><NameCode>0x04b2</NameCode><Description>A ceremonial trap used by the elite members of the Mushroom Tribes to ensnare those who trespass their sacred sanctum.</Description><Tier>UT</Tier><Filename>d2LofiObjEmbed</Filename><Row>20</Row><Column>12</Column><SetName></SetName><SlotType>20</SlotType><HP>0</HP><MP>0</MP><ATK>6</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>6</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip>         <EffectInfo name="Trap" description="Spawn a Crystal Sentry for 5 seconds"/>         <EffectInfo name="Crystal Sentry" description="Deals 350 damage to the closest target within 8 sqrs every 0.8 seconds"/>      </ToolTip></Item><Item><Name>Mimicry Trap</Name><NameCode>0x4b34</NameCode><Description>A crystal trap with a built-in luring mechanism. The perimeter of the trap reflects light toward the center to create an illusionary mimic.\n\nSprite Credits: Aurum</Description><Tier>UT</Tier><Filename>lofiObj3</Filename><Row>92</Row><Column>13</Column><SetName></SetName><SlotType>20</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>-3</DEF><SPD>3</SPD><DEX>5</DEX><VIT>0</VIT><WIS>0</WIS><Fame>6</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip>         <EffectInfo description="Creates a centered decoy for 1 second." name="Trap"/>      </ToolTip></Item><Item><Name>Lifebringing Lotus</Name><NameCode>0x1845</NameCode><Description>Sprouted and plucked from an ancient, enchanted riverbank, this flower\'s spores weaken the roots of evil and strengthen righteous hearts.</Description><Tier>ST</Tier><Filename>d2LofiObjEmbed</Filename><Row>29</Row><Column>1</Column><SetName>Horticultural Huntress Set</SetName><SlotType>20</SlotType><HP>0</HP><MP>40</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>5</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip>         <EffectInfo description="Trap inflicts Healing and Berserk upon players for 4 seconds." name="Woodland Blessing"/>      </ToolTip></Item>';
    
    while (s.includes("<Item>"))
        {
            var tot = makeItem(s);
            traps.push(tot);
            s = s.substring(s.indexOf("</Item>")+1, s.length)
        }
    
    s = '<Item><Name>(empty slot)</Name><NameCode></NameCode><Description></Description><Tier></Tier><Filename></Filename><Row>0</Row><Column>0</Column><SetName></SetName><SlotType>10</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Cloak of Shadows</Name><NameCode>0xa56</NameCode><Description>A magical cloak, made for slipping into shadows undetected.</Description><Tier>T0</Tier><Filename>lofiObj6</Filename><Row>2</Row><Column>0</Column><SetName></SetName><SlotType>13</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Cloak of Darkness</Name><NameCode>0xa57</NameCode><Description>An enchanted cloak steeped in magical darkness.</Description><Tier>T1</Tier><Filename>lofiObj6</Filename><Row>2</Row><Column>1</Column><SetName></SetName><SlotType>13</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Cloak of Speed</Name><NameCode>0xa58</NameCode><Description>A mystical gray cloak once used by blackguard tricksters for flanking maneuvers and sneak attacks.</Description><Tier>T2</Tier><Filename>lofiObj6</Filename><Row>2</Row><Column>2</Column><SetName></SetName><SlotType>13</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>3</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Cloak of the Night Thief</Name><NameCode>0xadb</NameCode><Description>An exceptional cloak used by sorcerer-thieves for night operations in dockyards and storehouses.</Description><Tier>T3</Tier><Filename>lofiObj6</Filename><Row>2</Row><Column>3</Column><SetName></SetName><SlotType>13</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>5</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>1</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Cloak of the Red Agent</Name><NameCode>0xa59</NameCode><Description>A powerful cloak used by master spies to infiltrate the most tightly guarded fortresses.</Description><Tier>T4</Tier><Filename>lofiObj6</Filename><Row>2</Row><Column>4</Column><SetName></SetName><SlotType>13</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>5</SPD><DEX>3</DEX><VIT>0</VIT><WIS>0</WIS><Fame>2</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Cloak of Endless Twilight</Name><NameCode>0xae1</NameCode><Description>A powerful cloak woven from the shadows of twilight.</Description><Tier>T5</Tier><Filename>lofiObj6</Filename><Row>2</Row><Column>5</Column><SetName></SetName><SlotType>13</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>5</SPD><DEX>4</DEX><VIT>0</VIT><WIS>0</WIS><Fame>3</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Cloak of Ghostly Concealment</Name><NameCode>0xb27</NameCode><Description>An eldritch cloak of the afterworld which grants invisibility by enveloping its user in death itself.</Description><Tier>T6</Tier><Filename>lofiObj6</Filename><Row>2</Row><Column>6</Column><SetName></SetName><SlotType>13</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>5</SPD><DEX>4</DEX><VIT>2</VIT><WIS>2</WIS><Fame>4</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Cloak of the Planewalker</Name><NameCode>0xa5a</NameCode><Description>An enchanted cloak crafted by an ancient guild of timeshifter thieves.</Description><Tier>UT</Tier><Filename>lofiObj3</Filename><Row>6</Row><Column>4</Column><SetName></SetName><SlotType>13</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>5</SPD><DEX>4</DEX><VIT>0</VIT><WIS>0</WIS><Fame>6</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Legacy Ghastly Drape</Name><NameCode>0x21a2</NameCode><Description>Woven from the skin of a ghast, it cannot be seen...except by the user.</Description><Tier>ST</Tier><Filename>lofiObj3</Filename><Row>82</Row><Column>14</Column><SetName>Legacy Skuld 2 The ReGhostening Set</SetName><SlotType>13</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Ghastly Drape</Name><NameCode>0x2751</NameCode><Description>Woven from the skin of a ghast, Skuld\'s ability to freely shift between the mortal and spiritual plane is linked to this cloak\'s unusual fabric.</Description><Tier>ST</Tier><Filename>lofiObj3</Filename><Row>82</Row><Column>14</Column><SetName>Skuld 2 The ReGhostening Set</SetName><SlotType>13</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame></Soulbound><BaseDamage>100</BaseDamage><MaxDamage>100</MaxDamage><RateOfFire>0</RateOfFire><Shots>10</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>36.0</ArcGap><Lifetime>1000.0</Lifetime><Speed>85.0</Speed><ToolTip>         <EffectInfo description="Releases a paralyzing nova." name="Ethereal Disruption"/>      </ToolTip></Item><Item><Name>Cloak of Bloody Surprises</Name><NameCode>0x0257</NameCode><Description>Many Rogues have tried to use this to escape their asylum. All have failed.</Description><Tier>UT</Tier><Filename>lostHallsObjects8x8</Filename><Row>11</Row><Column>3</Column><SetName></SetName><SlotType>13</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>2</DEF><SPD>0</SPD><DEX>0</DEX><VIT>2</VIT><WIS>0</WIS><Fame>6</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Cloak of Winter</Name><NameCode>0x208d</NameCode><Description>A snug cloak crafted by a band of seclusive snowthieves to help pilfer riches and disappear into the heart of winter.\n\nSprite Credits: Dappertron</Description><Tier>UT</Tier><Filename>oryxHordeObjects8x8</Filename><Row>6</Row><Column>5</Column><SetName></SetName><SlotType>13</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>5</SPD><DEX>4</DEX><VIT>2</VIT><WIS>2</WIS><Fame>4</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Cloak of the Mad God</Name><NameCode>0x5b1f</NameCode><Description>A pitch black cloak enhanced with the defensive strength of Oryx\'s own signature armor.</Description><Tier>UT</Tier><Filename>d2LofiObjEmbed</Filename><Row>10</Row><Column>0</Column><SetName></SetName><SlotType>13</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>6</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Cloak of Refraction</Name><NameCode>0x589</NameCode><Description>This heavy cloak cleverly conceals its user not by magic, but by channeling the light around them as camouflage. Tampering with this light briefly projects a false mirror image of oneself.</Description><Tier>UT</Tier><Filename>crystalCaveObjects8x8</Filename><Row>8</Row><Column>6</Column><SetName></SetName><SlotType>13</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>3</DEF><SPD>10</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>6</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item>';
    
    while (s.includes("<Item>"))
        {
            var tot = makeItem(s);
            cloaks.push(tot);
            s = s.substring(s.indexOf("</Item>")+1, s.length)
        }
    
    s = '<Item><Name>(empty slot)</Name><NameCode></NameCode><Description></Description><Tier></Tier><Filename></Filename><Row>0</Row><Column>0</Column><SetName></SetName><SlotType>10</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Decoy Prism</Name><NameCode>0xae3</NameCode><Description>A magical prism that creates a decoy.</Description><Tier>T0</Tier><Filename>lofiObj6</Filename><Row>11</Row><Column>0</Column><SetName></SetName><SlotType>22</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Deception Prism</Name><NameCode>0xb1c</NameCode><Description>A devious magical prism that creates an illusory ally.</Description><Tier>T1</Tier><Filename>lofiObj6</Filename><Row>11</Row><Column>1</Column><SetName></SetName><SlotType>22</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Illusion Prism</Name><NameCode>0xb1d</NameCode><Description>An infiltrator\'s prism used by eldritch spies to create diversions behind the battle lines.</Description><Tier>T2</Tier><Filename>lofiObj6</Filename><Row>11</Row><Column>2</Column><SetName></SetName><SlotType>22</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Hallucination Prism</Name><NameCode>0xb1e</NameCode><Description>A mind-affecting prism that creates powerful psychic illusions.</Description><Tier>T3</Tier><Filename>lofiObj6</Filename><Row>11</Row><Column>3</Column><SetName></SetName><SlotType>22</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>1</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Prism of Figments</Name><NameCode>0xb1f</NameCode><Description>A glittering magical prism that fabricates potent images in the minds of the weak-willed.</Description><Tier>T4</Tier><Filename>lofiObj6</Filename><Row>11</Row><Column>4</Column><SetName></SetName><SlotType>22</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>2</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Prism of Phantoms</Name><NameCode>0xb20</NameCode><Description>A prism of the underworld that harnesses dark energy to implant noncorporeal psionic beings into the minds of onlookers.</Description><Tier>T5</Tier><Filename>lofiObj6</Filename><Row>11</Row><Column>5</Column><SetName></SetName><SlotType>22</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>3</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Prism of Apparitions</Name><NameCode>0xb23</NameCode><Description>A deep blue prism of sun cut topaz, used by doppelganger spies to aid in their vile missions of assassination and murder.</Description><Tier>T6</Tier><Filename>lofiObj6</Filename><Row>11</Row><Column>6</Column><SetName></SetName><SlotType>22</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>2</VIT><WIS>2</WIS><Fame>4</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Prism of Dancing Swords</Name><NameCode>0x912</NameCode><Description>This prism has a deep flaw that causes it to scatter light in two directions.</Description><Tier>UT</Tier><Filename>lofiObj2</Filename><Row>5</Row><Column>8</Column><SetName></SetName><SlotType>22</SlotType><HP>40</HP><MP>0</MP><ATK>4</ATK><DEF>0</DEF><SPD>4</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>6</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Ghostly Prism</Name><NameCode>0xc2a</NameCode><Description>A cursed piece of Davy Jones\' treasure. Using it leaves behind a deadly spirit bomb.</Description><Tier>UT</Tier><Filename>lofiObj3</Filename><Row>12</Row><Column>10</Column><SetName></SetName><SlotType>22</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>6</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip>         <EffectInfo name="" description="Summons a Spirit Prism Bomb"/>         <EffectInfo name="Duration" description="2.4 seconds"/>         <EffectInfo name="Damage" description="320 - 480"/>         <EffectInfo name="Explosions" description="6"/>      </ToolTip></Item><Item><Name>Prism of Dire Instability</Name><NameCode>0x0d42</NameCode><Description>Seemingly bleak at first, this prism has erratic magical properties looming inside, which affect the light it scatters in unforeseen ways.</Description><Tier>UT</Tier><Filename>d3LofiObjEmbed</Filename><Row>2</Row><Column>12</Column><SetName></SetName><SlotType>22</SlotType><HP>0</HP><MP>40</MP><ATK>2</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>2</WIS><Fame>6</Fame></MultiHit></Soulbound><BaseDamage>200</BaseDamage><MaxDamage>320</MaxDamage><RateOfFire>0</RateOfFire><Shots>1</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>750.0</Lifetime><Speed>60.0</Speed><ToolTip></ToolTip></Item><Item><Name>Brain of the Golem</Name><NameCode>0x0259</NameCode><Description>A fragment of a brain from a lesser golem. Its strength indicates it came from a Golem of Anger.</Description><Tier>ST</Tier><Filename>lostHallsObjects8x8</Filename><Row>11</Row><Column>5</Column><SetName>Lost Golem Set</SetName><SlotType>22</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>5</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip>         <EffectInfo name="Explosion" description="Dazed for 2 seconds within 1.75 sqrs"/>      </ToolTip></Item><Item><Name>Ornamental Prism</Name><NameCode>0x2095</NameCode><Description>A brilliantly shining prism of berylstone, cut to resemble a tree topper as a means of hiding eidolon agents in plain sight.\n\nSprite Credits: Dappertron</Description><Tier>UT</Tier><Filename>oryxHordeObjects8x8</Filename><Row>6</Row><Column>2</Column><SetName></SetName><SlotType>22</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>2</VIT><WIS>2</WIS><Fame>4</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Heart of Gold Prism</Name><NameCode>0x0770</NameCode><Description>It\'s said that love lasts three years... this angel didn\'t get the memo.\n\nSprite Credits: Lovens</Description><Tier>UT</Tier><Filename>d2LofiObjEmbed</Filename><Row>6</Row><Column>13</Column><SetName></SetName><SlotType>22</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>7</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Echoes Prism</Name><NameCode>0x04b6</NameCode><Description>A fragmented prism that is constantly mending its cracks and refracturing. Pulling pieces apart can create an unstable link between two spaces as the prism tries to become whole again.</Description><Tier>UT</Tier><Filename>d2LofiObjEmbed</Filename><Row>20</Row><Column>9</Column><SetName></SetName><SlotType>22</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>6</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip>         <EffectInfo name="First activation" description="Mark the location."/>         <EffectInfo name="Second activation" description="Teleport back to the marked location."/>         <EffectInfo name="Note" description="Mark is reset upon changing area or after 30 seconds."/>      </ToolTip></Item><Item><Name>Prismimic</Name><NameCode>0x4b36</NameCode><Description>The perfectly cut head of a Prismimic, dastardly agents of the Crystal Entity. Its copying abilities are unprecedented.\n\nSprite Credits: Aurum</Description><Tier>UT</Tier><Filename>lofiObj3</Filename><Row>92</Row><Column>12</Column><SetName></SetName><SlotType>22</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>3</DEX><VIT>0</VIT><WIS>0</WIS><Fame>6</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip>         <EffectInfo description="Creates an expanding ring of 8 decoys" name=""/>      </ToolTip></Item><Item><Name>Pumpkin Prism</Name><NameCode>0x6484</NameCode><Description>The innards of a pumpkin were molded into this pile that vaguely resembles a prism. Used only by the laziest scarecrows who feel the need to outsource their job.\n\nSprite Credits: Bonk, Aurum</Description><Tier>ST</Tier><Filename>d2LofiObjEmbed</Filename><Row>22</Row><Column>1</Column><SetName>Scarecrow Trickster Set</SetName><SlotType>22</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>5</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip>         <EffectInfo name="Explosion" description="Dazed for 2 seconds within 1.75 sqrs"/>      </ToolTip></Item>';
    
    while (s.includes("<Item>"))
        {
            var tot = makeItem(s);
            prisms.push(tot);
            s = s.substring(s.indexOf("</Item>")+1, s.length)
        }
    
    s = '<Item><Name>(empty slot)</Name><NameCode></NameCode><Description></Description><Tier></Tier><Filename></Filename><Row>0</Row><Column>0</Column><SetName></SetName><SlotType>10</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Centipede Poison</Name><NameCode>0xaa3</NameCode><Description>Deadly poison of the swamp centipede.</Description><Tier>T0</Tier><Filename>lofiObj6</Filename><Row>8</Row><Column>0</Column><SetName></SetName><SlotType>18</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Spider Venom</Name><NameCode>0xaa4</NameCode><Description>Magically concentrated venom of the carnivorous leaping tree spider.</Description><Tier>T1</Tier><Filename>lofiObj6</Filename><Row>8</Row><Column>1</Column><SetName></SetName><SlotType>18</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Pit Viper Poison</Name><NameCode>0xaa5</NameCode><Description>Deadly magical poison taken from the two headed pit snakes of the underworld.</Description><Tier>T2</Tier><Filename>lofiObj6</Filename><Row>8</Row><Column>2</Column><SetName></SetName><SlotType>18</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Stingray Poison</Name><NameCode>0xaa6</NameCode><Description>Lethal aquatic poison extracted from the glands of the magical demon ray.</Description><Tier>T3</Tier><Filename>lofiObj6</Filename><Row>8</Row><Column>3</Column><SetName></SetName><SlotType>18</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>1</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Felwasp Toxin</Name><NameCode>0xaa7</NameCode><Description>Magically refined poison of the rare and dangerous felwasp.</Description><Tier>T4</Tier><Filename>lofiObj6</Filename><Row>8</Row><Column>4</Column><SetName></SetName><SlotType>18</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>2</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Nightwing Venom</Name><NameCode>0xaa8</NameCode><Description>Magically enhanced venom of the savage nightwing dragon.</Description><Tier>T5</Tier><Filename>lofiObj6</Filename><Row>8</Row><Column>5</Column><SetName></SetName><SlotType>18</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>3</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Baneserpent Poison</Name><NameCode>0xb2a</NameCode><Description>Concentrated, lethal venom of the winged ethereal baneserpent.</Description><Tier>T6</Tier><Filename>lofiObj6</Filename><Row>8</Row><Column>6</Column><SetName></SetName><SlotType>18</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>2</VIT><WIS>2</WIS><Fame>4</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Plague Poison</Name><NameCode>0xc6d</NameCode><Description>A foul poison harvested from the corpses of plague victims. It infects many targets, but kills slowly.</Description><Tier>UT</Tier><Filename>lofiObj3</Filename><Row>49</Row><Column>4</Column><SetName></SetName><SlotType>18</SlotType><HP>0</HP><MP>0</MP><ATK>2</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>2</WIS><Fame>6</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Sewer Cocktail</Name><NameCode>0x716c</NameCode><Description>Its irregular shape makes it hard to get a grip on this burning poison.</Description><Tier>UT</Tier><Filename>lofiObj3</Filename><Row>87</Row><Column>0</Column><SetName></SetName><SlotType>18</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>6</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Murky Toxin</Name><NameCode>0x7170</NameCode><Description>A deadly substance concocted with ingredients found in the sewers.</Description><Tier>UT</Tier><Filename>lofiObj3</Filename><Row>87</Row><Column>1</Column><SetName></SetName><SlotType>18</SlotType><HP>0</HP><MP>0</MP><ATK>3</ATK><DEF>0</DEF><SPD>0</SPD><DEX>3</DEX><VIT>0</VIT><WIS>0</WIS><Fame>6</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Bottled Medusozoan</Name><NameCode>0x9fd</NameCode><Description>A youthful jellyfish taken from the reefs of the ocean realms, residing within a coralglass jar.</Description><Tier>UT</Tier><Filename>cnidarianReefObjects8x8</Filename><Row>0</Row><Column>9</Column><SetName></SetName><SlotType>18</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>2</DEF><SPD>0</SPD><DEX>4</DEX><VIT>0</VIT><WIS>0</WIS><Fame>6</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip>         <EffectInfo name="Effect" description="Tosses a friendly cnidarian"/>         <EffectInfo name="Poison" description="600 HP per second within 4 squares over 3 seconds"/>      </ToolTip></Item><Item><Name>Holly Poison</Name><NameCode>0x2097</NameCode><Description>The bitter poison of evergreen berries that has also absorbed a great deal of of energy from evil spirits.\n\nSprite Credits: Dappertron</Description><Tier>UT</Tier><Filename>oryxHordeObjects8x8</Filename><Row>6</Row><Column>4</Column><SetName></SetName><SlotType>18</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>2</VIT><WIS>2</WIS><Fame>4</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Parasitic Concoction</Name><NameCode>0xbd9</NameCode><Description>Swarming cells fill this jar, prepared to bind to whatever may foolishly approach them.</Description><Tier>ST</Tier><Filename>d2LofiObjEmbed</Filename><Row>9</Row><Column>3</Column><SetName>Flesh Collector Set</SetName><SlotType>18</SlotType><HP>0</HP><MP>0</MP><ATK>2</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>-2</VIT><WIS>0</WIS><Fame>6</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Crystallised Fang\'s Venom</Name><NameCode>0x04b0</NameCode><Description>Even in small amounts, this potent venom is capable of corroding the armor of its victims.</Description><Tier>UT</Tier><Filename>d2LofiObjEmbed</Filename><Row>18</Row><Column>15</Column><SetName></SetName><SlotType>18</SlotType><HP>0</HP><MP>0</MP><ATK>4</ATK><DEF>0</DEF><SPD>0</SPD><DEX>4</DEX><VIT>0</VIT><WIS>0</WIS><Fame>6</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Mighty Stein</Name><NameCode>0x3d66</NameCode><Description>A mighty mug for a mighty drink! Be merry!\n\nSprite Credits: Dappertron</Description><Tier>UT</Tier><Filename>d2LofiObjEmbed</Filename><Row>23</Row><Column>10</Column><SetName></SetName><SlotType>18</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>2</DEF><SPD>0</SPD><DEX>2</DEX><VIT>0</VIT><WIS>0</WIS><Fame>3</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Virulent Venom</Name><NameCode>0x4b39</NameCode><Description>Exposure to this ferocious concoction is so intensely lethal that it acts instantaneously. Its deceptively small vial allows for easy use.</Description><Tier>ST</Tier><Filename>d2LofiObjEmbed</Filename><Row>32</Row><Column>5</Column><SetName>Acidified Assassin Set</SetName><SlotType>18</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>5</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip>         <EffectInfo description="Throw a poison when hit" name="Toxic Terror"/>         <EffectInfo description="650" name="Poison Damage"/>         <EffectInfo description="6 seconds" name="Poison Cooldown"/>      </ToolTip></Item>';
    
    while (s.includes("<Item>"))
        {
            var tot = makeItem(s);
            poisons.push(tot);
            s = s.substring(s.indexOf("</Item>")+1, s.length)
        }
    
    s = '<Item><Name>(empty slot)</Name><NameCode></NameCode><Description></Description><Tier></Tier><Filename></Filename><Row>0</Row><Column>0</Column><SetName></SetName><SlotType>10</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Robe of the Neophyte</Name><NameCode>0xa5c</NameCode><Description>A long woolen robe favored by students of magic.</Description><Tier>T1</Tier><Filename>lofiObj5</Filename><Row>1</Row><Column>0</Column><SetName></SetName><SlotType>14</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>2</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Robe of the Apprentice</Name><NameCode>0xa7e</NameCode><Description>A robe woven of rare yellow silk.</Description><Tier>T2</Tier><Filename>lofiObj5</Filename><Row>1</Row><Column>1</Column><SetName></SetName><SlotType>14</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>3</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>1</WIS><Fame>0</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Robe of the Acolyte</Name><NameCode>0xa5d</NameCode><Description>A well-made robe of enchanted blue silk.</Description><Tier>T3</Tier><Filename>lofiObj5</Filename><Row>1</Row><Column>2</Column><SetName></SetName><SlotType>14</SlotType><HP>0</HP><MP>10</MP><ATK>0</ATK><DEF>4</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>1</WIS><Fame>0</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Robe of the Student</Name><NameCode>0xa7f</NameCode><Description>A magical robe of faintly glowing wizardcloth.</Description><Tier>T4</Tier><Filename>lofiObj5</Filename><Row>1</Row><Column>3</Column><SetName></SetName><SlotType>14</SlotType><HP>0</HP><MP>15</MP><ATK>0</ATK><DEF>4</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>2</WIS><Fame>0</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Robe of the Conjurer</Name><NameCode>0xa80</NameCode><Description>A magical robe of gray moonsilk.</Description><Tier>T5</Tier><Filename>lofiObj5</Filename><Row>1</Row><Column>4</Column><SetName></SetName><SlotType>14</SlotType><HP>0</HP><MP>20</MP><ATK>0</ATK><DEF>6</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>2</WIS><Fame>0</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Robe of the Adept</Name><NameCode>0xa5e</NameCode><Description>An enchanted robe of dark moonweave.</Description><Tier>T6</Tier><Filename>lofiObj5</Filename><Row>1</Row><Column>5</Column><SetName></SetName><SlotType>14</SlotType><HP>0</HP><MP>25</MP><ATK>0</ATK><DEF>7</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>3</WIS><Fame>0</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Robe of the Invoker</Name><NameCode>0xa5f</NameCode><Description>A powerful robe of delicately embroidered red feythread.</Description><Tier>T7</Tier><Filename>lofiObj5</Filename><Row>1</Row><Column>6</Column><SetName></SetName><SlotType>14</SlotType><HP>0</HP><MP>30</MP><ATK>0</ATK><DEF>8</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>3</WIS><Fame>0</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Robe of the Illusionist</Name><NameCode>0xadc</NameCode><Description>A silversilk robe masterfully sewn with morningdew spider threads.</Description><Tier>T8</Tier><Filename>lofiObj5</Filename><Row>1</Row><Column>7</Column><SetName></SetName><SlotType>14</SlotType><HP>0</HP><MP>35</MP><ATK>1</ATK><DEF>8</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>4</WIS><Fame>1</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Robe of the Master</Name><NameCode>0xa60</NameCode><Description>A beautiful and versatile robe of the lightest magethread.</Description><Tier>T9</Tier><Filename>lofiObj5</Filename><Row>1</Row><Column>8</Column><SetName></SetName><SlotType>14</SlotType><HP>0</HP><MP>40</MP><ATK>2</ATK><DEF>9</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>5</WIS><Fame>1</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Robe of the Shadow Magus</Name><NameCode>0xa94</NameCode><Description>A highly decorated robe of purple wizardcloth, imbued with powers of sorcery and darkness.</Description><Tier>T10</Tier><Filename>lofiObj5</Filename><Row>1</Row><Column>9</Column><SetName></SetName><SlotType>14</SlotType><HP>0</HP><MP>45</MP><ATK>2</ATK><DEF>10</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>5</WIS><Fame>2</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Robe of the Moon Wizard</Name><NameCode>0xa95</NameCode><Description>A robe of rarest moonsilk, enhanced long ago with deep nocturnal enchantments.</Description><Tier>T11</Tier><Filename>lofiObj5</Filename><Row>1</Row><Column>10</Column><SetName></SetName><SlotType>14</SlotType><HP>0</HP><MP>50</MP><ATK>3</ATK><DEF>11</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>6</WIS><Fame>3</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Robe of the Elder Warlock</Name><NameCode>0xa96</NameCode><Description>A brightly colored robe of metallic threads, woven in the ancient elvish style and steeped in fey auras.</Description><Tier>T12</Tier><Filename>lofiObj5</Filename><Row>1</Row><Column>11</Column><SetName></SetName><SlotType>14</SlotType><HP>0</HP><MP>50</MP><ATK>3</ATK><DEF>12</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>6</WIS><Fame>4</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Robe of the Grand Sorcerer</Name><NameCode>0xb05</NameCode><Description>A bloodweft robe adorned with rubies and firegarnets, worn by an ancient sect of masterful wizards.</Description><Tier>T13</Tier><Filename>lofiObj5new</Filename><Row>1</Row><Column>12</Column><SetName></SetName><SlotType>14</SlotType><HP>0</HP><MP>55</MP><ATK>4</ATK><DEF>13</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>6</WIS><Fame>4</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Robe of the Star Mother</Name><NameCode>0x9cf</NameCode><Description>A robe of gossamer glowthread, used by the sorceress matriarchs of the western kingdoms.</Description><Tier>T14</Tier><Filename>lofiObj5new</Filename><Row>1</Row><Column>13</Column><SetName></SetName><SlotType>14</SlotType><HP>0</HP><MP>60</MP><ATK>4</ATK><DEF>14</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>7</WIS><Fame>5</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Robe of the Ancient Intellect</Name><NameCode>0x9d0</NameCode><Description>A phenomenal robe magically woven from fibers of sapphire, topaz and lapis lazuli, created for the archwizard of the seraphic realms.</Description><Tier>T15</Tier><Filename>lofiObj5new</Filename><Row>1</Row><Column>14</Column><SetName></SetName><SlotType>14</SlotType><HP>0</HP><MP>65</MP><ATK>4</ATK><DEF>15</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>7</WIS><Fame>6</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Robe of the Tlatoani</Name><NameCode>0xc14</NameCode><Description>An ancient ceremonial robe once worn by the Tlatoani.</Description><Tier>UT</Tier><Filename>lofiObj2</Filename><Row>0</Row><Column>9</Column><SetName></SetName><SlotType>14</SlotType><HP>0</HP><MP>45</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>8</WIS><Fame>2</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Chasuble of Holy Light</Name><NameCode>0xc1f</NameCode><Description>An ornate robe worn by servants of the faith.</Description><Tier>UT</Tier><Filename>lofiObj2</Filename><Row>1</Row><Column>14</Column><SetName></SetName><SlotType>14</SlotType><HP>0</HP><MP>50</MP><ATK>0</ATK><DEF>10</DEF><SPD>0</SPD><DEX>0</DEX><VIT>4</VIT><WIS>4</WIS><Fame>3</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Robe of the Mad Scientist</Name><NameCode>0xc32</NameCode><Description>A well-worn robe used for Science!</Description><Tier>UT</Tier><Filename>lofiObj3</Filename><Row>27</Row><Column>1</Column><SetName></SetName><SlotType>14</SlotType><HP>0</HP><MP>55</MP><ATK>4</ATK><DEF>13</DEF><SPD>0</SPD><DEX>0</DEX><VIT>2</VIT><WIS>5</WIS><Fame>5</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Cheater Robe</Name><NameCode>0xc83</NameCode><Description>Only cheaters wear this robe.</Description><Tier>UT</Tier><Filename>lofiObj3</Filename><Row>61</Row><Column>6</Column><SetName></SetName><SlotType>14</SlotType><HP>-100</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Water Dragon Silk Robe</Name><NameCode>0x7563</NameCode><Description>A magic robe woven from enchanted threads of water harvested from a great Water Dragon\'s body.</Description><Tier>UT</Tier><Filename>lofiObj3</Filename><Row>61</Row><Column>1</Column><SetName></SetName><SlotType>14</SlotType><HP>0</HP><MP>0</MP><ATK>6</ATK><DEF>12</DEF><SPD>6</SPD><DEX>0</DEX><VIT>0</VIT><WIS>3</WIS><Fame>5</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Robe of the Summer Solstice</Name><NameCode>0x229f</NameCode><Description>A ceremonial robe worn by ritual leaders during the celebration of the Summer Solstice. Its golden threads shine with the light of the sun.</Description><Tier>UT</Tier><Filename>lofiObj3</Filename><Row>76</Row><Column>7</Column><SetName></SetName><SlotType>14</SlotType><HP>0</HP><MP>55</MP><ATK>4</ATK><DEF>13</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>6</WIS><Fame>4</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip>         <EffectInfo name="Set" description="Summer Solstice"/>      </ToolTip></Item><Item><Name>Shendyt of Geb</Name><NameCode>0x235C</NameCode><Description>A ceremonial garment worn by those who worship the god Geb.</Description><Tier>ST</Tier><Filename>lofiObj3</Filename><Row>80</Row><Column>13</Column><SetName>Priest of Geb Set</SetName><SlotType>14</SlotType><HP>25</HP><MP>25</MP><ATK>0</ATK><DEF>15</DEF><SPD>0</SPD><DEX>0</DEX><VIT>7</VIT><WIS>7</WIS><Fame>4</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Soulless Robe</Name><NameCode>0x2360</NameCode><Description>...finally, I cornered and killed the beast. When I awoke in a cold sweat...I felt youthful, powerful.</Description><Tier>ST</Tier><Filename>lofiObj3</Filename><Row>80</Row><Column>12</Column><SetName>Phylactery Mystic Set</SetName><SlotType>14</SlotType><HP>60</HP><MP>0</MP><ATK>0</ATK><DEF>15</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Legacy Robe of Twilight</Name><NameCode>0x21a8</NameCode><Description>On simple observation this robe has known many owners. All are dead.</Description><Tier>ST</Tier><Filename>lofiObj3</Filename><Row>82</Row><Column>0</Column><SetName>Legacy Twilight Archmage Set</SetName><SlotType>14</SlotType><HP>10</HP><MP>5</MP><ATK>0</ATK><DEF>12</DEF><SPD>3</SPD><DEX>3</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>The Robe of Twilight</Name><NameCode>0x21f5</NameCode><Description>On simple observation this robe has known many owners. All are dead.</Description><Tier>ST</Tier><Filename>lofiObj3</Filename><Row>82</Row><Column>0</Column><SetName>Twilight Archmage Set</SetName><SlotType>14</SlotType><HP>60</HP><MP>50</MP><ATK>0</ATK><DEF>10</DEF><SPD>3</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Toga Picta</Name><NameCode>0x9de</NameCode><Description>His gift was gracious, but I would not dabble in spirits. He challenged me to a duel.</Description><Tier>ST</Tier><Filename>d3LofiObjEmbed</Filename><Row>15</Row><Column>10</Column><SetName>Hollow King Necromancer Set</SetName><SlotType>14</SlotType><HP>0</HP><MP>35</MP><ATK>8</ATK><DEF>13</DEF><SPD>0</SPD><DEX>-3</DEX><VIT>4</VIT><WIS>0</WIS><Fame>4</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Frost Elementalist Robe</Name><NameCode>0x16db</NameCode><Description>An excellent robe, woven from icy threads. It\'s typically only worn by the most adept ice mages.\n\nSprite Credits: Poshun</Description><Tier>UT</Tier><Filename>d2LofiObjEmbed</Filename><Row>1</Row><Column>14</Column><SetName></SetName><SlotType>14</SlotType><HP>0</HP><MP>55</MP><ATK>4</ATK><DEF>13</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>6</WIS><Fame>4</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Ritual Robe</Name><NameCode>0x0252</NameCode><Description>A thin hood with a faded golden lace worn for sacrificial ceremonies. It has an aura of evil around it.</Description><Tier>UT</Tier><Filename>lostHallsObjects8x8</Filename><Row>10</Row><Column>14</Column><SetName></SetName><SlotType>14</SlotType><HP>0</HP><MP>40</MP><ATK>5</ATK><DEF>10</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>15</WIS><Fame>6</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Woodland Robe</Name><NameCode>0x83e</NameCode><Description>An unusual robe made out of strangely flexible wood and coated in an otherworldly tree sap.</Description><Tier>UT</Tier><Filename>magicWoodsObjects8x8</Filename><Row>3</Row><Column>1</Column><SetName></SetName><SlotType>14</SlotType><HP>0</HP><MP>15</MP><ATK>0</ATK><DEF>5</DEF><SPD>3</SPD><DEX>3</DEX><VIT>0</VIT><WIS>0</WIS><Fame>2</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Garment of the Beast</Name><NameCode>0xbbe</NameCode><Description>A rigid hide, chemically engineered by Dr. Terrible and reinforced with rough scales. Though torn apart during battle, it remains powerful.</Description><Tier>ST</Tier><Filename>d2LofiObjEmbed</Filename><Row>8</Row><Column>2</Column><SetName>Horrific Sorcerer Set</SetName><SlotType>14</SlotType><HP>0</HP><MP>50</MP><ATK>8</ATK><DEF>10</DEF><SPD>0</SPD><DEX>-5</DEX><VIT>0</VIT><WIS>4</WIS><Fame>4</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Tlatoani\'s Shroud</Name><NameCode>0x36fa</NameCode><Description>The Tlatoani used this robe to aid them in casting their most powerful magic spells. Like their other ceremonial garbs, it rarely saw much combat application.</Description><Tier>UT</Tier><Filename>secludedThicketObjects8x8</Filename><Row>5</Row><Column>1</Column><SetName></SetName><SlotType>14</SlotType><HP>0</HP><MP>180</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>10</WIS><Fame>3</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Magic Protective Matrix</Name><NameCode>0x0484</NameCode><Description>Standard issue armor for Commander Calbrik\'s fleet. It stores energy to power a defensive shield when its wearer needs it most.\n\nSprite Credits: Aurum</Description><Tier>UT</Tier><Filename>d2LofiObjEmbed</Filename><Row>17</Row><Column>15</Column><SetName></SetName><SlotType>14</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>10</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>7</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip>         <EffectInfo name="" description="Alien Gear"/>         <EffectInfo name="Effect" description="Taking damage when below 75 HP gain Invulnerable for 2 seconds."/>         <EffectInfo name="Effect" description="Taking damage when below 75 HP gain Dazed for 5 seconds."/>         <EffectInfo name="Cooldown" description="240 seconds."/>      </ToolTip></Item><Item><Name>Robe of the Enchantress</Name><NameCode>0x6499</NameCode><Description>Totalia\'s garbs are specially fitted to be flexible enough to ride brooms. The cloth is also flame retardant, a quality which proved essential after more than one incident.\n\nSprite Credits: Aurum</Description><Tier>ST</Tier><Filename>d2LofiObjEmbed</Filename><Row>25</Row><Column>2</Column><SetName>Totalia Mystic Set</SetName><SlotType>14</SlotType><HP>60</HP><MP>0</MP><ATK>0</ATK><DEF>15</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Immortal Mantle</Name><NameCode>0x64a1</NameCode><Description>The scene was rocking, all were digging the sounds. Igor on chains, backed by his baying hounds.\n\nSprite Credits: Aurum</Description><Tier>ST</Tier><Filename>d2LofiObjEmbed</Filename><Row>26</Row><Column>2</Column><SetName>Paranormal Wizard Set</SetName><SlotType>14</SlotType><HP>60</HP><MP>50</MP><ATK>0</ATK><DEF>10</DEF><SPD>3</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Anointed Robe</Name><NameCode>0x200e</NameCode><Description>Knowing they are to serve a more aggressive purpose on the front lines, Oryx\'s chosen messengers utilize a plated robe, complete with a crimson cape.</Description><Tier>ST</Tier><Filename>d2LofiObjEmbed</Filename><Row>27</Row><Column>2</Column><SetName>Mad God\'s Messenger Set</SetName><SlotType>14</SlotType><HP>0</HP><MP>20</MP><ATK>4</ATK><DEF>13</DEF><SPD>0</SPD><DEX>3</DEX><VIT>-3</VIT><WIS>2</WIS><Fame>4</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Esben\'s Shaman Attire</Name><NameCode>0xb3f7</NameCode><Description>A glacial robe worn by the witch doctors of a bygone ice tribe during their sacred burial ceremonies. The passage of time has encased the cloth in a layer of permafrost, chilling those who fracture its coat.</Description><Tier>UT</Tier><Filename>lofiObj3</Filename><Row>85</Row><Column>4</Column><SetName></SetName><SlotType>14</SlotType><HP>30</HP><MP>0</MP><ATK>5</ATK><DEF>11</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>5</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip>         <EffectInfo name="On Taking Damage" description="10% chance to Slow enemies within 6 tiles for 4 seconds."/>         <EffectInfo name="Cooldown" description="5 seconds."/>      </ToolTip></Item><Item><Name>Judge\'s Robe</Name><NameCode>0x6ec</NameCode><Description>The designated members of Oryx\'s court are fitted with this honorary robe, symbolizing their status among his legion.\n\nSprite Credits: Aurum</Description><Tier>UT</Tier><Filename>d2LofiObjEmbed</Filename><Row>28</Row><Column>12</Column><SetName></SetName><SlotType>14</SlotType><HP>0</HP><MP>60</MP><ATK>3</ATK><DEF>11</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>8</WIS><Fame>5</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip>         <EffectInfo name="Mad God\'s Rage" description="Gain 5 attack and dexterity for 8 seconds when hit under 300 HP."/>      </ToolTip></Item><Item><Name>Molten Mantle</Name><NameCode>0x4b45</NameCode><Description>A suffocating black smoke began to pour out, consuming the young enchantress. As her soul and mind burned to dust, the fibers of this robe were strangely unscathed.</Description><Tier>ST</Tier><Filename>d2LofiObjEmbed</Filename><Row>33</Row><Column>3</Column><SetName>Magmatic Mystic Set</SetName><SlotType>14</SlotType><HP>0</HP><MP>80</MP><ATK>3</ATK><DEF>12</DEF><SPD>3</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>5</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item>';
    
    while (s.includes("<Item>"))
        {
            var tot = makeItem(s);
            robes.push(tot);
            s = s.substring(s.indexOf("</Item>")+1, s.length)
        }
    
    s = '<Item><Name>(empty slot)</Name><NameCode></NameCode><Description></Description><Tier></Tier><Filename></Filename><Row>0</Row><Column>0</Column><SetName></SetName><SlotType>10</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Wolfskin Armor</Name><NameCode>0xa78</NameCode><Description>Leather armor fashioned from wolf pelts.</Description><Tier>T1</Tier><Filename>lofiObj5</Filename><Row>0</Row><Column>0</Column><SetName></SetName><SlotType>6</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>5</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Leather Armor</Name><NameCode>0xa0d</NameCode><Description>Armor made of hardened leather.</Description><Tier>T2</Tier><Filename>lofiObj5</Filename><Row>0</Row><Column>1</Column><SetName></SetName><SlotType>6</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>6</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Basilisk Hide Armor</Name><NameCode>0xa79</NameCode><Description>Leather armor made from the skin of a magical lizard.</Description><Tier>T3</Tier><Filename>lofiObj5</Filename><Row>0</Row><Column>2</Column><SetName></SetName><SlotType>6</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>7</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Minotaur Hide Armor</Name><NameCode>0xa7a</NameCode><Description>Leather armor made from the tough hide of a minotaur.</Description><Tier>T4</Tier><Filename>lofiObj5</Filename><Row>0</Row><Column>3</Column><SetName></SetName><SlotType>6</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>8</DEF><SPD>0</SPD><DEX>2</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Bearskin Armor</Name><NameCode>0xad0</NameCode><Description>Armor made from the thick leather of a dire bear.</Description><Tier>T5</Tier><Filename>lofiObj5</Filename><Row>0</Row><Column>4</Column><SetName></SetName><SlotType>6</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>9</DEF><SPD>0</SPD><DEX>2</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Chimera Hide Armor</Name><NameCode>0xad1</NameCode><Description>Magically protective leather armor made from chimera hides.</Description><Tier>T6</Tier><Filename>lofiObj5</Filename><Row>0</Row><Column>5</Column><SetName></SetName><SlotType>6</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>10</DEF><SPD>0</SPD><DEX>2</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Wyvern Skin Armor</Name><NameCode>0xad2</NameCode><Description>Tough, durable armor made from wyvern leather.</Description><Tier>T7</Tier><Filename>lofiObj5</Filename><Row>0</Row><Column>6</Column><SetName></SetName><SlotType>6</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>12</DEF><SPD>0</SPD><DEX>2</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Studded Leather Armor</Name><NameCode>0xa0e</NameCode><Description>Leather armor studded with metal rivets that provide extra protection.</Description><Tier>T8</Tier><Filename>lofiObj5</Filename><Row>0</Row><Column>7</Column><SetName></SetName><SlotType>6</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>13</DEF><SPD>0</SPD><DEX>3</DEX><VIT>0</VIT><WIS>0</WIS><Fame>1</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Snakeskin Armor</Name><NameCode>0xa3e</NameCode><Description>A tight fitting garment of snake skin that is both functional and stylish.</Description><Tier>UT</Tier><Filename>lofiObj2</Filename><Row>0</Row><Column>0</Column><SetName></SetName><SlotType>6</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>11</DEF><SPD>3</SPD><DEX>3</DEX><VIT>0</VIT><WIS>0</WIS><Fame>1</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Drake Hide Armor</Name><NameCode>0xad3</NameCode><Description>Leather armor fashioned from the scaly skin of a fire breathing drake.</Description><Tier>T9</Tier><Filename>lofiObj5</Filename><Row>0</Row><Column>8</Column><SetName></SetName><SlotType>6</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>14</DEF><SPD>0</SPD><DEX>3</DEX><VIT>0</VIT><WIS>0</WIS><Fame>1</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Roc Leather Armor</Name><NameCode>0xa8e</NameCode><Description>Leather armor made from the durable hide of a roc.</Description><Tier>T10</Tier><Filename>lofiObj5</Filename><Row>0</Row><Column>9</Column><SetName></SetName><SlotType>6</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>15</DEF><SPD>0</SPD><DEX>4</DEX><VIT>0</VIT><WIS>0</WIS><Fame>2</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Hippogriff Hide Armor</Name><NameCode>0xa8f</NameCode><Description>Leather armor made from the protective skin of hippogriffs.</Description><Tier>T11</Tier><Filename>lofiObj5</Filename><Row>0</Row><Column>10</Column><SetName></SetName><SlotType>6</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>16</DEF><SPD>0</SPD><DEX>4</DEX><VIT>0</VIT><WIS>0</WIS><Fame>3</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Griffon Hide Armor</Name><NameCode>0xa90</NameCode><Description>Superior leather armor made from the magical hide of a griffon.</Description><Tier>T12</Tier><Filename>lofiObj5</Filename><Row>0</Row><Column>11</Column><SetName></SetName><SlotType>6</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>17</DEF><SPD>0</SPD><DEX>4</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Hydra Skin Armor</Name><NameCode>0xaf9</NameCode><Description>Superlative leather armor fashioned from the skin of a twelve-headed swamp hydra.</Description><Tier>T13</Tier><Filename>lofiObj5new</Filename><Row>0</Row><Column>12</Column><SetName></SetName><SlotType>6</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>17</DEF><SPD>0</SPD><DEX>5</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Wyrmhide Armor</Name><NameCode>0x9c1</NameCode><Description>Outstanding leather armor made from the virtually impregnable hide of a great desert wyrm.</Description><Tier>T14</Tier><Filename>lofiObj5new</Filename><Row>0</Row><Column>13</Column><SetName></SetName><SlotType>6</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>18</DEF><SPD>0</SPD><DEX>5</DEX><VIT>0</VIT><WIS>0</WIS><Fame>5</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Leviathan Armor</Name><NameCode>0x9c3</NameCode><Description>Magnificent leather armor made from the hide of the great leviathan, slain hundreds of years ago in a savage battle in the vast deeps.</Description><Tier>T15</Tier><Filename>lofiObj5new</Filename><Row>0</Row><Column>14</Column><SetName></SetName><SlotType>6</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>19</DEF><SPD>0</SPD><DEX>5</DEX><VIT>0</VIT><WIS>0</WIS><Fame>6</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Coral Silk Armor</Name><NameCode>0xc18</NameCode><Description>Mermaid-made armor woven from unbreakable coral threads.</Description><Tier>UT</Tier><Filename>lofiObj2</Filename><Row>0</Row><Column>13</Column><SetName></SetName><SlotType>6</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>16</DEF><SPD>3</SPD><DEX>4</DEX><VIT>0</VIT><WIS>0</WIS><Fame>5</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Spectral Cloth Armor</Name><NameCode>0xc28</NameCode><Description>A ghostly fabric from the other side.</Description><Tier>UT</Tier><Filename>lofiObj3</Filename><Row>12</Row><Column>8</Column><SetName></SetName><SlotType>6</SlotType><HP>0</HP><MP>0</MP><ATK>3</ATK><DEF>14</DEF><SPD>3</SPD><DEX>3</DEX><VIT>0</VIT><WIS>0</WIS><Fame>5</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Cheater Light Armor</Name><NameCode>0xc82</NameCode><Description>Only cheaters wear this armor.</Description><Tier>UT</Tier><Filename>lofiObj3</Filename><Row>61</Row><Column>7</Column><SetName></SetName><SlotType>6</SlotType><HP>-100</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Leaf Dragon Hide Armor</Name><NameCode>0x7562</NameCode><Description>Light armor crafted from the hard-as-steel leafy scales of a Leaf Dragon.</Description><Tier>UT</Tier><Filename>lofiObj3</Filename><Row>61</Row><Column>0</Column><SetName></SetName><SlotType>6</SlotType><HP>50</HP><MP>0</MP><ATK>0</ATK><DEF>13</DEF><SPD>6</SPD><DEX>0</DEX><VIT>3</VIT><WIS>3</WIS><Fame>5</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Harlequin Armor</Name><NameCode>0x7448</NameCode><Description>A festive piece of armor, complete with bells. Try not to get too crazy.</Description><Tier>UT</Tier><Filename>d3LofiObjEmbed</Filename><Row>0</Row><Column>11</Column><SetName></SetName><SlotType>6</SlotType><HP>0</HP><MP>80</MP><ATK>0</ATK><DEF>14</DEF><SPD>3</SPD><DEX>0</DEX><VIT>0</VIT><WIS>5</WIS><Fame>5</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Legacy Mantle of Skuld</Name><NameCode>0x21a1</NameCode><Description>He does not kill his victims. He becomes them.</Description><Tier>ST</Tier><Filename>lofiObj3</Filename><Row>81</Row><Column>14</Column><SetName>Legacy Skuld 2 The ReGhostening Set</SetName><SlotType>6</SlotType><HP>25</HP><MP>10</MP><ATK>0</ATK><DEF>12</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Mantle of Skuld</Name><NameCode>0x2752</NameCode><Description>With little need for conventional armor, Skuld prefers to empower her magic arts even further.</Description><Tier>ST</Tier><Filename>lofiObj3</Filename><Row>81</Row><Column>14</Column><SetName>Skuld 2 The ReGhostening Set</SetName><SlotType>6</SlotType><HP>0</HP><MP>100</MP><ATK>0</ATK><DEF>9</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>7</WIS><Fame>4</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Frost Drake Hide Armor</Name><NameCode>0x16da</NameCode><Description>Protective leather armor fashioned from the frozen, but resilient scales of a frost drake.\n\nSprite Credits: Poshun</Description><Tier>UT</Tier><Filename>d2LofiObjEmbed</Filename><Row>1</Row><Column>13</Column><SetName></SetName><SlotType>6</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>17</DEF><SPD>0</SPD><DEX>5</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Beehemoth Armor</Name><NameCode>0x10d4</NameCode><Description>Chitin armor fashioned from the exoskeleton of a yellow Beehemoth. Ultra-light and extremely flexible, yet surprisingly tough.</Description><Tier>UT</Tier><Filename>epicHiveObjects8x8</Filename><Row>4</Row><Column>8</Column><SetName></SetName><SlotType>6</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>17</DEF><SPD>5</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>5</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Beehemoth Armor</Name><NameCode>0x10d5</NameCode><Description>Chitin armor fashioned from the exoskeleton of a red Beehemoth. Ultra-light and extremely flexible, yet surprisingly tough.</Description><Tier>UT</Tier><Filename>epicHiveObjects8x8</Filename><Row>4</Row><Column>10</Column><SetName></SetName><SlotType>6</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>17</DEF><SPD>5</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>5</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Beehemoth Armor</Name><NameCode>0x10d6</NameCode><Description>Chitin armor fashioned from the exoskeleton of a blue Beehemoth. Ultra-light and extremely flexible, yet surprisingly tough.</Description><Tier>UT</Tier><Filename>epicHiveObjects8x8</Filename><Row>4</Row><Column>9</Column><SetName></SetName><SlotType>6</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>17</DEF><SPD>5</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>5</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Apiary Armor</Name><NameCode>0x08f9</NameCode><Description>Lightweight, yet protective armor taken from the shed exoskeleton of a warrior bee.</Description><Tier>ST</Tier><Filename>epicHiveObjects8x8</Filename><Row>6</Row><Column>7</Column><SetName>Swarming Huntress Set</SetName><SlotType>6</SlotType><HP>0</HP><MP>0</MP><ATK>3</ATK><DEF>17</DEF><SPD>3</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Golem Garments</Name><NameCode>0x025a</NameCode><Description>Formed of the tissue surrounding a golem core.</Description><Tier>ST</Tier><Filename>lostHallsObjects8x8</Filename><Row>11</Row><Column>6</Column><SetName>Lost Golem Set</SetName><SlotType>6</SlotType><HP>0</HP><MP>0</MP><ATK>8</ATK><DEF>14</DEF><SPD>0</SPD><DEX>0</DEX><VIT>7</VIT><WIS>0</WIS><Fame>4</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Armor of Nil</Name><NameCode>0x024e</NameCode><Description>This armor does not deflect projectiles like most materials known to man. It absorbs and engulfs them, sending them to a new plane of reality.</Description><Tier>UT</Tier><Filename>lostHallsObjects8x8</Filename><Row>10</Row><Column>9</Column><SetName></SetName><SlotType>6</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>21</DEF><SPD>-2</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>6</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Cupid\'s Garments</Name><NameCode>0x6404</NameCode><Description>Who said diapers couldn\'t be fashionable?\n\nSprite Credits: WunderWafe</Description><Tier>ST</Tier><Filename>d2LofiObjEmbed</Filename><Row>6</Row><Column>7</Column><SetName>Valentine\'s Day Archer Set</SetName><SlotType>6</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>16</DEF><SPD>3</SPD><DEX>4</DEX><VIT>0</VIT><WIS>0</WIS><Fame>7</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Rags of the Host</Name><NameCode>0xbda</NameCode><Description>The parasites wait until the most opportune time, then strike at their targets. They become hosts to a greater evil.</Description><Tier>ST</Tier><Filename>d2LofiObjEmbed</Filename><Row>9</Row><Column>4</Column><SetName>Flesh Collector Set</SetName><SlotType>6</SlotType><HP>0</HP><MP>0</MP><ATK>6</ATK><DEF>15</DEF><SPD>0</SPD><DEX>0</DEX><VIT>-2</VIT><WIS>0</WIS><Fame>4</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Luxurious Leather</Name><NameCode>0x57a</NameCode><Description>An illustrious lineage of acclaimed bowmen have passed down this famed attire. It boasts such immense defensive power that its wearer is considered invincible.</Description><Tier>ST</Tier><Filename>theMachineObjects8x8</Filename><Row>7</Row><Column>12</Column><SetName>Golden Archer Set</SetName><SlotType>6</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>1</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>6</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Hirejou Tenne</Name><NameCode>0x1e4f</NameCode><Description>Scarf held to the breeze\nCommanding a storm\'s vengeance\nHoping for silence.</Description><Tier>ST</Tier><Filename>d2LofiObjEmbed</Filename><Row>13</Row><Column>13</Column><SetName>Raijin Disciple Set</SetName><SlotType>6</SlotType><HP>0</HP><MP>0</MP><ATK>8</ATK><DEF>9</DEF><SPD>0</SPD><DEX>8</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Wraith\'s Brigandine</Name><NameCode>0x1e46</NameCode><Description>An enduring garment of spectral steel worn by the shades of the shadows.</Description><Tier>ST</Tier><Filename>d2LofiObjEmbed</Filename><Row>13</Row><Column>6</Column><SetName>Phantom Archer Set</SetName><SlotType>6</SlotType><HP>80</HP><MP>0</MP><ATK>0</ATK><DEF>14</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Fitted Protective Matrix</Name><NameCode>0x0485</NameCode><Description>Standard issue armor for Commander Calbrik\'s fleet. It stores energy to power a defensive shield when its wearer needs it most.\n\nSprite Credits: Aurum</Description><Tier>UT</Tier><Filename>d2LofiObjEmbed</Filename><Row>18</Row><Column>0</Column><SetName></SetName><SlotType>6</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>15</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>7</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip>         <EffectInfo name="" description="Alien Gear"/>         <EffectInfo name="Effect" description="Taking damage when below 75 HP gain Invulnerable for 2 seconds."/>         <EffectInfo name="Effect" description="Taking damage when below 75 HP gain Dazed for 5 seconds."/>         <EffectInfo name="Cooldown" description="240 seconds."/>      </ToolTip></Item><Item><Name>Withered Poncho</Name><NameCode>0x6485</NameCode><Description>Once worn by a remarkably ineffective scarecrow who was regularly swarmed by the very thing it swore to destroy.\n\nSprite Credits: Bonk, Aurum</Description><Tier>ST</Tier><Filename>d2LofiObjEmbed</Filename><Row>22</Row><Column>2</Column><SetName>Scarecrow Trickster Set</SetName><SlotType>6</SlotType><HP>0</HP><MP>0</MP><ATK>8</ATK><DEF>14</DEF><SPD>0</SPD><DEX>0</DEX><VIT>7</VIT><WIS>0</WIS><Fame>4</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Torso Tunic</Name><NameCode>0x648c</NameCode><Description>A rather bare bones armor affording more protection than one would expect. This bag of bones seems so unsafe.\n\nSprite Credits: Tero, Aurum</Description><Tier>ST</Tier><Filename>d2LofiObjEmbed</Filename><Row>23</Row><Column>2</Column><SetName>Reanimated Archer Set</SetName><SlotType>6</SlotType><HP>80</HP><MP>0</MP><ATK>0</ATK><DEF>14</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Greaterhosen</Name><NameCode>0x3d65</NameCode><Description>A necessary component for any beer-drinking or sausage-eating in the month of October.\n\nSprite Credits: Dappertron</Description><Tier>UT</Tier><Filename>d2LofiObjEmbed</Filename><Row>23</Row><Column>9</Column><SetName></SetName><SlotType>6</SlotType><HP>20</HP><MP>0</MP><ATK>2</ATK><DEF>12</DEF><SPD>0</SPD><DEX>4</DEX><VIT>0</VIT><WIS>0</WIS><Fame>3</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip>         <EffectInfo name="On taking damage" description="5% chance for Hallucinating, duration = 1.5 seconds, cooldown = 20 seconds"/>         <EffectInfo name="On taking damage" description="5% chance for +10 Attack, duration = 10 seconds, cooldown = 20 seconds"/>      </ToolTip></Item><Item><Name>Hollyhock Hide</Name><NameCode>0x1846</NameCode><Description>A lightweight floral coat fitted with the molted shell of a colossal insect. The energy of its evolution still pulses through, reacting upon blows.</Description><Tier>ST</Tier><Filename>d2LofiObjEmbed</Filename><Row>29</Row><Column>2</Column><SetName>Horticultural Huntress Set</SetName><SlotType>6</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>10</DEF><SPD>3</SPD><DEX>8</DEX><VIT>5</VIT><WIS>0</WIS><Fame>4</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip>         <EffectInfo description="10% chance to receive +10 dexterity for 5 seconds on taking damage." name="Green Thumb"/>      </ToolTip></Item><Item><Name>Squadron Sheathing</Name><NameCode>0x6eb</NameCode><Description>Oryx\'s assassins use this flexible armor to remain agile as they harness the Mad God\'s power.\n\nSprite Credits: Aurum</Description><Tier>UT</Tier><Filename>d2LofiObjEmbed</Filename><Row>28</Row><Column>13</Column><SetName></SetName><SlotType>6</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>16</DEF><SPD>0</SPD><DEX>5</DEX><VIT>0</VIT><WIS>0</WIS><Fame>5</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip>         <EffectInfo name="Mad God\'s Rage" description="Gain 5 attack and dexterity for 8 seconds when hit under 300 HP."/>      </ToolTip></Item><Item><Name>Luminous Armor</Name><NameCode>0x4b41</NameCode><Description>A devastating fracture in the center of this breathtaking armor tarnished its raw defensive abilities, but the dubious blessing of the Crystal Entity still allows it to aid the wearer in other ways.</Description><Tier>ST</Tier><Filename>d2LofiObjEmbed</Filename><Row>32</Row><Column>12</Column><SetName>Crystal Kunoichi Set</SetName><SlotType>6</SlotType><HP>200</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>5</SPD><DEX>0</DEX><VIT>5</VIT><WIS>0</WIS><Fame>5</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Acidic Armor</Name><NameCode>0x4b3a</NameCode><Description>A specially coated armor designed with the intent of nullifying illnesses. It is most beneficial when used in tandem with equipment of similar attributes.</Description><Tier>ST</Tier><Filename>d2LofiObjEmbed</Filename><Row>32</Row><Column>6</Column><SetName>Acidified Assassin Set</SetName><SlotType>6</SlotType><HP>30</HP><MP>30</MP><ATK>0</ATK><DEF>15</DEF><SPD>-5</SPD><DEX>0</DEX><VIT>5</VIT><WIS>0</WIS><Fame>5</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item>';
    
    while (s.includes("<Item>"))
        {
            var tot = makeItem(s);
            leathers.push(tot);
            s = s.substring(s.indexOf("</Item>")+1, s.length)
        }
    
    s = '<Item><Name>(empty slot)</Name><NameCode></NameCode><Description></Description><Tier></Tier><Filename></Filename><Row>0</Row><Column>0</Column><SetName></SetName><SlotType>10</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Iron Mail</Name><NameCode>0xa7b</NameCode><Description>Armor made from interlocking iron links.</Description><Tier>T1</Tier><Filename>lofiObj5</Filename><Row>2</Row><Column>0</Column><SetName></SetName><SlotType>7</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>5</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Chainmail</Name><NameCode>0xa0f</NameCode><Description>Armor made from interlocking links of metal.</Description><Tier>T2</Tier><Filename>lofiObj5</Filename><Row>2</Row><Column>1</Column><SetName></SetName><SlotType>7</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>6</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Blue Steel Mail</Name><NameCode>0xa7c</NameCode><Description>Mail made from blued steel.</Description><Tier>T3</Tier><Filename>lofiObj5</Filename><Row>2</Row><Column>2</Column><SetName></SetName><SlotType>7</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>7</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Silver Chainmail</Name><NameCode>0xa7d</NameCode><Description>Well-made chainmail plated with silver.</Description><Tier>T4</Tier><Filename>lofiObj5</Filename><Row>2</Row><Column>3</Column><SetName></SetName><SlotType>7</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>8</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Golden Chainmail</Name><NameCode>0xa10</NameCode><Description>Well-made chainmail plated with gold, clearly intended for the use of a great lord.</Description><Tier>T5</Tier><Filename>lofiObj5</Filename><Row>2</Row><Column>4</Column><SetName></SetName><SlotType>7</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>10</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Plate Mail</Name><NameCode>0xa11</NameCode><Description>Armor made from overlapping plates of metal.</Description><Tier>T6</Tier><Filename>lofiObj5</Filename><Row>2</Row><Column>5</Column><SetName></SetName><SlotType>7</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>12</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Mithril Chainmail</Name><NameCode>0xadf</NameCode><Description>Chainmail made with reinforcing mithril ribs.</Description><Tier>T7</Tier><Filename>lofiObj5</Filename><Row>2</Row><Column>6</Column><SetName></SetName><SlotType>7</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>13</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Mithril Armor</Name><NameCode>0xa12</NameCode><Description>Armor made from the strongest and most desirable of all metals.</Description><Tier>T8</Tier><Filename>lofiObj5</Filename><Row>2</Row><Column>7</Column><SetName></SetName><SlotType>7</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>15</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>1</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Dragonscale Armor</Name><NameCode>0xa13</NameCode><Description>Armor made from the scales of a full grown dragon.</Description><Tier>T9</Tier><Filename>lofiObj5</Filename><Row>2</Row><Column>8</Column><SetName></SetName><SlotType>7</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>20</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>1</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Desolation Armor</Name><NameCode>0xa91</NameCode><Description>Magical cold plate armor inscribed with tales of destruction and murder.</Description><Tier>T10</Tier><Filename>lofiObj5</Filename><Row>2</Row><Column>9</Column><SetName></SetName><SlotType>7</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>21</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>2</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Vengeance Armor</Name><NameCode>0xa92</NameCode><Description>Tremendously strong plate armor shrouded by an aura of demonic revenge.</Description><Tier>T11</Tier><Filename>lofiObj5</Filename><Row>2</Row><Column>10</Column><SetName></SetName><SlotType>7</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>22</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>3</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Abyssal Armor</Name><NameCode>0xa93</NameCode><Description>Mighty felplate armor designed for the most powerful of demon lords.</Description><Tier>T12</Tier><Filename>lofiObj5</Filename><Row>2</Row><Column>11</Column><SetName></SetName><SlotType>7</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>23</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Acropolis Armor</Name><NameCode>0xafc</NameCode><Description>Indestructible magical armor made for the elite stoneborn champions of the eastern citadels.</Description><Tier>T13</Tier><Filename>lofiObj5new</Filename><Row>2</Row><Column>12</Column><SetName></SetName><SlotType>7</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>24</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Dominion Armor</Name><NameCode>0x9c4</NameCode><Description>Exquisitely decorated adamantine armor smithed by underdeep dwarves for the wardens of the demonclefts.</Description><Tier>T14</Tier><Filename>lofiObj5new</Filename><Row>2</Row><Column>13</Column><SetName></SetName><SlotType>7</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>25</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>5</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Annihilation Armor</Name><NameCode>0x9c5</NameCode><Description>Impenetrable forceplate armor worn by the blackguard conquerors of the necromantic uprising.</Description><Tier>T15</Tier><Filename>lofiObj5new</Filename><Row>2</Row><Column>14</Column><SetName></SetName><SlotType>7</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>26</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>6</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Candy-Coated Armor</Name><NameCode>0xc61</NameCode><Description>Reinforced with magical hard candy from the candy forest. Sticky but strong.</Description><Tier>UT</Tier><Filename>lofiObj3</Filename><Row>40</Row><Column>12</Column><SetName></SetName><SlotType>7</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>30</DEF><SPD>0</SPD><DEX>-10</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Resurrected Warrior\'s Armor</Name><NameCode>0xc6e</NameCode><Description>A worn and battered suit of armor embedded with a mystic gem that flows with magical strength.</Description><Tier>UT</Tier><Filename>lofiObj3</Filename><Row>49</Row><Column>6</Column><SetName></SetName><SlotType>7</SlotType><HP>0</HP><MP>150</MP><ATK>0</ATK><DEF>17</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>15</WIS><Fame>5</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip>         <EffectInfo description="Power depletes on taking damage." name="Mystic Gem"/>         <EffectInfo description="-10 wisdom" name="On Taking Damage"/>         <EffectInfo description="3 seconds" name="Duration"/>      </ToolTip></Item><Item><Name>Cheater Heavy Armor</Name><NameCode>0xc84</NameCode><Description>Only cheaters wear this armor.</Description><Tier>UT</Tier><Filename>lofiObj3</Filename><Row>61</Row><Column>8</Column><SetName></SetName><SlotType>7</SlotType><HP>-100</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Fire Dragon Battle Armor</Name><NameCode>0x7564</NameCode><Description>Battle armor made from Fire Dragon scales, one of the strongest substances this world has ever seen.</Description><Tier>UT</Tier><Filename>lofiObj3</Filename><Row>61</Row><Column>2</Column><SetName></SetName><SlotType>7</SlotType><HP>0</HP><MP>0</MP><ATK>4</ATK><DEF>17</DEF><SPD>3</SPD><DEX>0</DEX><VIT>3</VIT><WIS>0</WIS><Fame>5</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Almandine Armor of Anger</Name><NameCode>0x2337</NameCode><Description>A piece of heavy plate mail forged in the dungeons of Oryx\'s castle, it is decorated with dark red Almandine stones.</Description><Tier>ST</Tier><Filename>d3LofiObjEmbed</Filename><Row>0</Row><Column>0</Column><SetName>Oryx Awesome Set</SetName><SlotType>7</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>24</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Legacy Fairy Plate</Name><NameCode>0x2364</NameCode><Description>This colorful platemail is enchanted with special protections, a gift from the kind fairies that dwell in the Realm.</Description><Tier>ST</Tier><Filename>lofiObj3</Filename><Row>80</Row><Column>14</Column><SetName>Legacy Swoll Paladin Set</SetName><SlotType>7</SlotType><HP>40</HP><MP>40</MP><ATK>0</ATK><DEF>20</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Zaarvox\'s Heart</Name><NameCode>0x7fb9</NameCode><Description>Made from the Heart of Zaarvox by Ulricht the first Dragon Tamer.</Description><Tier>ST</Tier><Filename>d2LofiObjEmbed</Filename><Row>0</Row><Column>2</Column><SetName>Dragon Tamer Set</SetName><SlotType>7</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>17</DEF><SPD>6</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Frost Citadel Armor</Name><NameCode>0x16dd</NameCode><Description>A sturdy suit of armor, reinforced with ice plating. It\'s worn by the bravest warriors known to challenge the Mad God.\n\nSprite Credits: Poshun</Description><Tier>UT</Tier><Filename>d2LofiObjEmbed</Filename><Row>2</Row><Column>4</Column><SetName></SetName><SlotType>7</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>24</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Breastplate of New Life</Name><NameCode>0x0255</NameCode><Description>A fine sheet of marble charged with the same energy that powers the Marble Colossus. What it lacks in physical durability, it makes up for with a life-breathing aura.</Description><Tier>UT</Tier><Filename>lostHallsObjects8x8</Filename><Row>11</Row><Column>1</Column><SetName></SetName><SlotType>7</SlotType><HP>160</HP><MP>0</MP><ATK>0</ATK><DEF>12</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>6</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>pD Armor</Name><NameCode>0x7ba</NameCode><Description>Armaw? xD</Description><Tier>UT</Tier><Filename>parasiteDenObjects8x8</Filename><Row>0</Row><Column>10</Column><SetName></SetName><SlotType>7</SlotType><HP>50</HP><MP>0</MP><ATK>0</ATK><DEF>25</DEF><SPD>5</SPD><DEX>0</DEX><VIT>-5</VIT><WIS>0</WIS><Fame>6</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Eggre Battle Armor</Name><NameCode>0x13ac</NameCode><Description>Battle armor made for the Eggre warriors.\n\nSprite Credits: Piggby</Description><Tier>UT</Tier><Filename>buffedBunnyObjects8x8</Filename><Row>2</Row><Column>11</Column><SetName></SetName><SlotType>7</SlotType><HP>0</HP><MP>0</MP><ATK>4</ATK><DEF>17</DEF><SPD>3</SPD><DEX>0</DEX><VIT>3</VIT><WIS>0</WIS><Fame>7</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Kamishimo</Name><NameCode>0x2040</NameCode><Description>While being made of soft fabric, this outfit is mysteriously sturdy.</Description><Tier>ST</Tier><Filename>d2LofiObjEmbed</Filename><Row>10</Row><Column>11</Column><SetName>Akuma Slayer Set</SetName><SlotType>7</SlotType><HP>60</HP><MP>0</MP><ATK>0</ATK><DEF>14</DEF><SPD>0</SPD><DEX>4</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Mercy\'s Bane</Name><NameCode>0x5bde</NameCode><Description>Skuld enchanted this signature armor by channeling Oryx\'s relentless rage into its metal plates. This aura of anger now grants the strength of unbridled fury to anyone reckless enough to wear it themselves.</Description><Tier>ST</Tier><Filename>d2LofiObjEmbed</Filename><Row>12</Row><Column>6</Column><SetName>Oryx\'s Battle Attires</SetName><SlotType>7</SlotType><HP>0</HP><MP>0</MP><ATK>7</ATK><DEF>10</DEF><SPD>0</SPD><DEX>7</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Fairy Plate</Name><NameCode>0x04a7</NameCode><Description>This colorful platemail is enchanted with special protections, a gift from the kind fairies that dwell in the Realm.</Description><Tier>ST</Tier><Filename>d2LofiObjEmbed</Filename><Row>18</Row><Column>4</Column><SetName>Swoll Paladin Set</SetName><SlotType>7</SlotType><HP>40</HP><MP>40</MP><ATK>0</ATK><DEF>20</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Heavy Protective Matrix</Name><NameCode>0x0483</NameCode><Description>Standard issue armor for Commander Calbrik\'s fleet. It stores energy to power a defensive shield when its wearer needs it most.\n\nSprite Credits: Aurum</Description><Tier>UT</Tier><Filename>d2LofiObjEmbed</Filename><Row>18</Row><Column>1</Column><SetName></SetName><SlotType>7</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>21</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>7</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip>         <EffectInfo name="" description="Alien Gear"/>         <EffectInfo name="Effect" description="Taking damage when below 75 HP gain Invulnerable for 2 seconds."/>         <EffectInfo name="Effect" description="Taking damage when below 75 HP gain Dazed for 5 seconds."/>         <EffectInfo name="Cooldown" description="240 seconds."/>      </ToolTip></Item><Item><Name>Fungal Breastplate</Name><NameCode>0x04b5</NameCode><Description>The fungus covering this armor has eaten away all the metal. While offering little protection, its restorative powers make this armor unique.</Description><Tier>UT</Tier><Filename>d2LofiObjEmbed</Filename><Row>20</Row><Column>8</Column><SetName></SetName><SlotType>7</SlotType><HP>80</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>60</VIT><WIS>0</WIS><Fame>5</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Tormentor\'s Chainmail</Name><NameCode>0x6493</NameCode><Description>A cruel armor stitched from the victims of demonic killers, a symbol of one\'s ruthlessness.\n\nSprite Credits: Aurum</Description><Tier>ST</Tier><Filename>d2LofiObjEmbed</Filename><Row>24</Row><Column>2</Column><SetName>Unholy Paladin Set</SetName><SlotType>7</SlotType><HP>40</HP><MP>40</MP><ATK>0</ATK><DEF>20</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Naval Uniform</Name><NameCode>0x21db</NameCode><Description>The buccaneers that raided the realm before Oryx\'s rule famously wore such attire. Its opulence does not make for the most practical choice when sailing, but it was valued as a status symbol.</Description><Tier>ST</Tier><Filename>d2LofiObjEmbed</Filename><Row>28</Row><Column>2</Column><SetName>Pirate King Warrior Set</SetName><SlotType>7</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>19</DEF><SPD>3</SPD><DEX>2</DEX><VIT>6</VIT><WIS>4</WIS><Fame>4</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Aegis Armor</Name><NameCode>0x6ea</NameCode><Description>Onyx armor forged for use by Oryx\'s famed champions, giving them a sample of Oryx\'s furious strength.\n\nSprite Credits: Aurum</Description><Tier>UT</Tier><Filename>d2LofiObjEmbed</Filename><Row>28</Row><Column>14</Column><SetName></SetName><SlotType>7</SlotType><HP>0</HP><MP>0</MP><ATK>4</ATK><DEF>21</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>5</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip>         <EffectInfo name="Mad God\'s Rage" description="Gain 5 attack and dexterity for 8 seconds when hit under 300 HP."/>      </ToolTip></Item>';
    
    while (s.includes("<Item>"))
        {
            var tot = makeItem(s);
            heavies.push(tot);
            s = s.substring(s.indexOf("</Item>")+1, s.length)
        }
    
    s = '<Item><Name>(empty slot)</Name><NameCode></NameCode><Description></Description><Tier></Tier><Filename></Filename><Row>0</Row><Column>0</Column><SetName></SetName><SlotType>10</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Snake Eye Ring</Name><NameCode>0xa41</NameCode><Description>A ring made from the eye of the Snake Queen.</Description><Tier>UT</Tier><Filename>lofiObj2</Filename><Row>0</Row><Column>2</Column><SetName></SetName><SlotType>9</SlotType><HP>0</HP><MP>0</MP><ATK>3</ATK><DEF>0</DEF><SPD>3</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Spider\'s Eye Ring</Name><NameCode>0x708</NameCode><Description>A ring crafted from the faceted eye of an enormous spider.</Description><Tier>UT</Tier><Filename>lofiObj2</Filename><Row>2</Row><Column>1</Column><SetName></SetName><SlotType>9</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>3</VIT><WIS>3</WIS><Fame>0</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Ring of Minor Defense</Name><NameCode>0xa4f</NameCode><Description>A silver ring that buzzes with a faint magical hum.</Description><Tier>T0</Tier><Filename>lofiObj</Filename><Row>2</Row><Column>12</Column><SetName></SetName><SlotType>9</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>1</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Ring of Attack</Name><NameCode>0xa24</NameCode><Description>A spinel set in a silver ring.</Description><Tier>T1</Tier><Filename>lofiObj5</Filename><Row>8</Row><Column>0</Column><SetName></SetName><SlotType>9</SlotType><HP>0</HP><MP>0</MP><ATK>3</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Ring of Defense</Name><NameCode>0xa25</NameCode><Description>An onyx set in a silver ring.</Description><Tier>T1</Tier><Filename>lofiObj5</Filename><Row>8</Row><Column>1</Column><SetName></SetName><SlotType>9</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>3</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Ring of Speed</Name><NameCode>0xa26</NameCode><Description>An emerald set in a silver ring.</Description><Tier>T1</Tier><Filename>lofiObj5</Filename><Row>8</Row><Column>2</Column><SetName></SetName><SlotType>9</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>3</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Ring of Vitality</Name><NameCode>0xa36</NameCode><Description>A ruby set in a silver ring.</Description><Tier>T1</Tier><Filename>lofiObj5</Filename><Row>8</Row><Column>3</Column><SetName></SetName><SlotType>9</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>3</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Ring of Wisdom</Name><NameCode>0xa37</NameCode><Description>A sapphire set in a silver ring.</Description><Tier>T1</Tier><Filename>lofiObj5</Filename><Row>8</Row><Column>4</Column><SetName></SetName><SlotType>9</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>3</WIS><Fame>0</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Ring of Dexterity</Name><NameCode>0xa4d</NameCode><Description>A citrine set in a silver ring.</Description><Tier>T1</Tier><Filename>lofiObj5</Filename><Row>8</Row><Column>5</Column><SetName></SetName><SlotType>9</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>3</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Ring of Health</Name><NameCode>0xa27</NameCode><Description>A topaz set in a silver ring.</Description><Tier>T1</Tier><Filename>lofiObj5</Filename><Row>8</Row><Column>6</Column><SetName></SetName><SlotType>9</SlotType><HP>40</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Ring of Magic</Name><NameCode>0xa28</NameCode><Description>An amethyst set in a silver ring.</Description><Tier>T1</Tier><Filename>lofiObj5</Filename><Row>8</Row><Column>7</Column><SetName></SetName><SlotType>9</SlotType><HP>0</HP><MP>40</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>0</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Ring of Greater Attack</Name><NameCode>0xa29</NameCode><Description>A spinel set in a gold ring.</Description><Tier>T2</Tier><Filename>lofiObj5</Filename><Row>9</Row><Column>0</Column><SetName></SetName><SlotType>9</SlotType><HP>0</HP><MP>0</MP><ATK>5</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>1</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Ring of Greater Defense</Name><NameCode>0xa2a</NameCode><Description>An onyx set in a gold ring.</Description><Tier>T2</Tier><Filename>lofiObj5</Filename><Row>9</Row><Column>1</Column><SetName></SetName><SlotType>9</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>5</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>1</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Ring of Greater Speed</Name><NameCode>0xa2b</NameCode><Description>An emerald set in a gold ring.</Description><Tier>T2</Tier><Filename>lofiObj5</Filename><Row>9</Row><Column>2</Column><SetName></SetName><SlotType>9</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>5</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>1</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Ring of Greater Vitality</Name><NameCode>0xa38</NameCode><Description>A ruby set in a gold ring.</Description><Tier>T2</Tier><Filename>lofiObj5</Filename><Row>9</Row><Column>3</Column><SetName></SetName><SlotType>9</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>5</VIT><WIS>0</WIS><Fame>1</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Ring of Greater Wisdom</Name><NameCode>0xa39</NameCode><Description>A sapphire set in a gold ring.</Description><Tier>T2</Tier><Filename>lofiObj5</Filename><Row>9</Row><Column>4</Column><SetName></SetName><SlotType>9</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>5</WIS><Fame>1</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Ring of Greater Dexterity</Name><NameCode>0xa4e</NameCode><Description>A citrine set in a gold ring.</Description><Tier>T2</Tier><Filename>lofiObj5</Filename><Row>9</Row><Column>5</Column><SetName></SetName><SlotType>9</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>5</DEX><VIT>0</VIT><WIS>0</WIS><Fame>1</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Ring of Greater Health</Name><NameCode>0xa2c</NameCode><Description>A topaz set in a gold ring.</Description><Tier>T2</Tier><Filename>lofiObj5</Filename><Row>9</Row><Column>6</Column><SetName></SetName><SlotType>9</SlotType><HP>80</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>1</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Ring of Greater Magic</Name><NameCode>0xa2d</NameCode><Description>An amethyst set in a gold ring.</Description><Tier>T2</Tier><Filename>lofiObj5</Filename><Row>9</Row><Column>7</Column><SetName></SetName><SlotType>9</SlotType><HP>0</HP><MP>80</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>1</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Ring of Superior Attack</Name><NameCode>0xab7</NameCode><Description>A large spinel set in a glittering gold ring.</Description><Tier>T3</Tier><Filename>lofiObj5</Filename><Row>10</Row><Column>0</Column><SetName></SetName><SlotType>9</SlotType><HP>0</HP><MP>0</MP><ATK>6</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>2</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Ring of Superior Defense</Name><NameCode>0xab8</NameCode><Description>A large onyx set in a glittering gold ring.</Description><Tier>T3</Tier><Filename>lofiObj5</Filename><Row>10</Row><Column>1</Column><SetName></SetName><SlotType>9</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>6</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>2</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Ring of Superior Speed</Name><NameCode>0xab9</NameCode><Description>A large emerald set in a glittering gold ring.</Description><Tier>T3</Tier><Filename>lofiObj5</Filename><Row>10</Row><Column>2</Column><SetName></SetName><SlotType>9</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>6</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>2</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Ring of Superior Vitality</Name><NameCode>0xaba</NameCode><Description>A large ruby set in a glittering gold ring.</Description><Tier>T3</Tier><Filename>lofiObj5</Filename><Row>10</Row><Column>3</Column><SetName></SetName><SlotType>9</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>6</VIT><WIS>0</WIS><Fame>2</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Ring of Superior Wisdom</Name><NameCode>0xabb</NameCode><Description>A large sapphire set in a glittering gold ring.</Description><Tier>T3</Tier><Filename>lofiObj5</Filename><Row>10</Row><Column>4</Column><SetName></SetName><SlotType>9</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>6</WIS><Fame>2</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Ring of Superior Dexterity</Name><NameCode>0xabc</NameCode><Description>A large citrine set in a glittering gold ring.</Description><Tier>T3</Tier><Filename>lofiObj5</Filename><Row>10</Row><Column>5</Column><SetName></SetName><SlotType>9</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>6</DEX><VIT>0</VIT><WIS>0</WIS><Fame>2</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Ring of Superior Health</Name><NameCode>0xabd</NameCode><Description>A large topaz set in a glittering gold ring.</Description><Tier>T3</Tier><Filename>lofiObj5</Filename><Row>10</Row><Column>6</Column><SetName></SetName><SlotType>9</SlotType><HP>100</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>2</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Ring of Superior Magic</Name><NameCode>0xabe</NameCode><Description>A large amethyst set in a glittering gold ring.</Description><Tier>T3</Tier><Filename>lofiObj5</Filename><Row>10</Row><Column>7</Column><SetName></SetName><SlotType>9</SlotType><HP>0</HP><MP>100</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>2</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Ring of Paramount Attack</Name><NameCode>0xabf</NameCode><Description>A very large spinel set in a dazzling gold ring.</Description><Tier>T4</Tier><Filename>lofiObj5</Filename><Row>11</Row><Column>0</Column><SetName></SetName><SlotType>9</SlotType><HP>0</HP><MP>0</MP><ATK>7</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>3</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Ring of Paramount Defense</Name><NameCode>0xac0</NameCode><Description>A very large onyx set in a dazzling gold ring.</Description><Tier>T4</Tier><Filename>lofiObj5</Filename><Row>11</Row><Column>1</Column><SetName></SetName><SlotType>9</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>7</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>3</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Ring of Paramount Speed</Name><NameCode>0xac1</NameCode><Description>A very large emerald set in a dazzling gold ring.</Description><Tier>T4</Tier><Filename>lofiObj5</Filename><Row>11</Row><Column>2</Column><SetName></SetName><SlotType>9</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>7</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>3</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Ring of Paramount Vitality</Name><NameCode>0xac2</NameCode><Description>A very large ruby set in a dazzling gold ring.</Description><Tier>T4</Tier><Filename>lofiObj5</Filename><Row>11</Row><Column>3</Column><SetName></SetName><SlotType>9</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>7</VIT><WIS>0</WIS><Fame>3</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Ring of Paramount Wisdom</Name><NameCode>0xac3</NameCode><Description>A very large sapphire set in a dazzling gold ring.</Description><Tier>T4</Tier><Filename>lofiObj5</Filename><Row>11</Row><Column>4</Column><SetName></SetName><SlotType>9</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>7</WIS><Fame>3</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Ring of Paramount Dexterity</Name><NameCode>0xac4</NameCode><Description>A very large citrine set in a dazzling gold ring.</Description><Tier>T4</Tier><Filename>lofiObj5</Filename><Row>11</Row><Column>5</Column><SetName></SetName><SlotType>9</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>7</DEX><VIT>0</VIT><WIS>0</WIS><Fame>3</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Ring of Paramount Health</Name><NameCode>0xac5</NameCode><Description>A very large topaz set in a dazzling gold ring.</Description><Tier>T4</Tier><Filename>lofiObj5</Filename><Row>11</Row><Column>6</Column><SetName></SetName><SlotType>9</SlotType><HP>120</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>3</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Ring of Paramount Magic</Name><NameCode>0xac6</NameCode><Description>A very large amethyst set in a dazzling gold ring.</Description><Tier>T4</Tier><Filename>lofiObj5</Filename><Row>11</Row><Column>7</Column><SetName></SetName><SlotType>9</SlotType><HP>0</HP><MP>120</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>3</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Ring of Exalted Attack</Name><NameCode>0xac7</NameCode><Description>A huge, flawless spinel set in a stunningly beautiful gold ring.</Description><Tier>T5</Tier><Filename>lofiObj5</Filename><Row>12</Row><Column>0</Column><SetName></SetName><SlotType>9</SlotType><HP>0</HP><MP>0</MP><ATK>8</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Ring of Exalted Defense</Name><NameCode>0xac8</NameCode><Description>A huge, flawless onyx set in a stunningly beautiful gold ring.</Description><Tier>T5</Tier><Filename>lofiObj5</Filename><Row>12</Row><Column>1</Column><SetName></SetName><SlotType>9</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>8</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Ring of Exalted Speed</Name><NameCode>0xac9</NameCode><Description>A huge, flawless emerald set in a stunningly beautiful gold ring.</Description><Tier>T5</Tier><Filename>lofiObj5</Filename><Row>12</Row><Column>2</Column><SetName></SetName><SlotType>9</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>8</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Ring of Exalted Vitality</Name><NameCode>0xaca</NameCode><Description>A huge, flawless ruby set in a stunningly beautiful gold ring.</Description><Tier>T5</Tier><Filename>lofiObj5</Filename><Row>12</Row><Column>3</Column><SetName></SetName><SlotType>9</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>8</VIT><WIS>0</WIS><Fame>4</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Ring of Exalted Wisdom</Name><NameCode>0xacb</NameCode><Description>A huge, flawless sapphire set in a stunningly beautiful gold ring.</Description><Tier>T5</Tier><Filename>lofiObj5</Filename><Row>12</Row><Column>4</Column><SetName></SetName><SlotType>9</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>8</WIS><Fame>4</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Ring of Exalted Dexterity</Name><NameCode>0xacc</NameCode><Description>A huge, flawless citrine set in a stunningly beautiful gold ring.</Description><Tier>T5</Tier><Filename>lofiObj5</Filename><Row>12</Row><Column>5</Column><SetName></SetName><SlotType>9</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>8</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Ring of Exalted Health</Name><NameCode>0xacd</NameCode><Description>A huge, flawless topaz set in a stunningly beautiful gold ring.</Description><Tier>T5</Tier><Filename>lofiObj5</Filename><Row>12</Row><Column>6</Column><SetName></SetName><SlotType>9</SlotType><HP>140</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Ring of Exalted Magic</Name><NameCode>0xace</NameCode><Description>A huge, flawless amethyst set in a stunningly beautiful gold ring.</Description><Tier>T5</Tier><Filename>lofiObj5</Filename><Row>12</Row><Column>7</Column><SetName></SetName><SlotType>9</SlotType><HP>0</HP><MP>140</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Ring of Unbound Attack</Name><NameCode>0xba3</NameCode><Description>An immaculately perfect spinel embedded in an exquisite gold ring.</Description><Tier>T6</Tier><Filename>lofiObj3</Filename><Row>72</Row><Column>8</Column><SetName></SetName><SlotType>9</SlotType><HP>0</HP><MP>0</MP><ATK>9</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>5</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Ring of Unbound Defense</Name><NameCode>0xba4</NameCode><Description>An immaculately perfect onyx embedded in an exquisite gold ring.</Description><Tier>T6</Tier><Filename>lofiObj3</Filename><Row>72</Row><Column>9</Column><SetName></SetName><SlotType>9</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>9</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>5</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Ring of Unbound Speed</Name><NameCode>0xba5</NameCode><Description>An immaculately perfect emerald embedded in an exquisite gold ring.</Description><Tier>T6</Tier><Filename>lofiObj3</Filename><Row>72</Row><Column>10</Column><SetName></SetName><SlotType>9</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>9</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>5</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Ring of Unbound Vitality</Name><NameCode>0xba6</NameCode><Description>An immaculately perfect ruby embedded in an exquisite gold ring.</Description><Tier>T6</Tier><Filename>lofiObj3</Filename><Row>72</Row><Column>11</Column><SetName></SetName><SlotType>9</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>9</VIT><WIS>0</WIS><Fame>5</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Ring of Unbound Wisdom</Name><NameCode>0xba7</NameCode><Description>An immaculately perfect sapphire embedded in an exquisite gold ring.</Description><Tier>T6</Tier><Filename>lofiObj3</Filename><Row>72</Row><Column>12</Column><SetName></SetName><SlotType>9</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>9</WIS><Fame>5</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Ring of Unbound Dexterity</Name><NameCode>0xba8</NameCode><Description>An immaculately perfect citrine embedded in an exquisite gold ring.</Description><Tier>T6</Tier><Filename>lofiObj3</Filename><Row>72</Row><Column>13</Column><SetName></SetName><SlotType>9</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>9</DEX><VIT>0</VIT><WIS>0</WIS><Fame>5</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Ring of Unbound Health</Name><NameCode>0xba9</NameCode><Description>An immaculately perfect topaz embedded in an exquisite gold ring.</Description><Tier>T6</Tier><Filename>lofiObj3</Filename><Row>72</Row><Column>14</Column><SetName></SetName><SlotType>9</SlotType><HP>180</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>5</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Ring of Decades</Name><NameCode>0xbae</NameCode><Description>Cut from a fallen star, a deep purple emanating an unearthly glow, hinting at the power fused within.</Description><Tier>UT</Tier><Filename>lofiObj3</Filename><Row>86</Row><Column>4</Column><SetName></SetName><SlotType>9</SlotType><HP>190</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>5</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Ring of Unbound Magic</Name><NameCode>0xbaa</NameCode><Description>An immaculately perfect amethyst embedded in an exquisite gold ring.</Description><Tier>T6</Tier><Filename>lofiObj3</Filename><Row>72</Row><Column>15</Column><SetName></SetName><SlotType>9</SlotType><HP>0</HP><MP>180</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>5</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>The Forgotten Crown</Name><NameCode>0xbab</NameCode><Description>An eerie reminder of what lays in the depths of the Shatters.</Description><Tier>UT</Tier><Filename>lofiObj3</Filename><Row>72</Row><Column>0</Column><SetName></SetName><SlotType>9</SlotType><HP>110</HP><MP>0</MP><ATK>6</ATK><DEF>0</DEF><SPD>0</SPD><DEX>6</DEX><VIT>0</VIT><WIS>0</WIS><Fame>5</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>The Twilight Gemstone</Name><NameCode>0xbac</NameCode><Description>An odd stone, emanating a dark and mysterious energy.</Description><Tier>UT</Tier><Filename>lofiObj3</Filename><Row>72</Row><Column>1</Column><SetName></SetName><SlotType>9</SlotType><HP>0</HP><MP>110</MP><ATK>0</ATK><DEF>6</DEF><SPD>6</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>5</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Bracer of the Guardian</Name><NameCode>0xbad</NameCode><Description>Wearing it makes you feel particularly strong.</Description><Tier>UT</Tier><Filename>lofiObj3</Filename><Row>72</Row><Column>2</Column><SetName></SetName><SlotType>9</SlotType><HP>60</HP><MP>60</MP><ATK>6</ATK><DEF>6</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>5</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Ring of the Sphinx</Name><NameCode>0xba0</NameCode><Description>The malachite stone makes you feel at peace with the land.</Description><Tier>UT</Tier><Filename>lofiObj4</Filename><Row>10</Row><Column>0</Column><SetName></SetName><SlotType>9</SlotType><HP>0</HP><MP>100</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>4</DEX><VIT>0</VIT><WIS>4</WIS><Fame>5</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Ring of the Nile</Name><NameCode>0xba1</NameCode><Description>The azure stone makes you feel ready for any situation.</Description><Tier>UT</Tier><Filename>lofiObj4</Filename><Row>10</Row><Column>1</Column><SetName></SetName><SlotType>9</SlotType><HP>60</HP><MP>60</MP><ATK>0</ATK><DEF>0</DEF><SPD>4</SPD><DEX>4</DEX><VIT>0</VIT><WIS>0</WIS><Fame>5</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Ring of the Pyramid</Name><NameCode>0xba2</NameCode><Description>The dolomite stone makes you feel able to stand against anything.</Description><Tier>UT</Tier><Filename>lofiObj4</Filename><Row>10</Row><Column>2</Column><SetName></SetName><SlotType>9</SlotType><HP>100</HP><MP>0</MP><ATK>4</ATK><DEF>4</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>5</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Enchanted Ice Shard</Name><NameCode>0x7fd2</NameCode><Description>The ice this item is made of doesn\'t seem to melt.</Description><Tier>UT</Tier><Filename>d3LofiObjEmbed</Filename><Row>6</Row><Column>10</Column><SetName></SetName><SlotType>9</SlotType><HP>0</HP><MP>100</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>4</DEX><VIT>0</VIT><WIS>4</WIS><Fame>5</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Ring of the Northern Light</Name><NameCode>0x7fd3</NameCode><Description>A mysterious light emanates from the stone.</Description><Tier>UT</Tier><Filename>d3LofiObjEmbed</Filename><Row>6</Row><Column>11</Column><SetName></SetName><SlotType>9</SlotType><HP>60</HP><MP>60</MP><ATK>0</ATK><DEF>0</DEF><SPD>4</SPD><DEX>4</DEX><VIT>0</VIT><WIS>0</WIS><Fame>5</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Frimarra</Name><NameCode>0x7fd4</NameCode><Description>It\'s said that this necklace was created to protect the mortal lover of an old God.</Description><Tier>UT</Tier><Filename>d3LofiObjEmbed</Filename><Row>6</Row><Column>12</Column><SetName></SetName><SlotType>9</SlotType><HP>100</HP><MP>0</MP><ATK>4</ATK><DEF>4</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>5</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Amulet of Dispersion</Name><NameCode>0xb3e</NameCode><Description>A historical amulet that has been passed down for generations. Although once cursed in the past, it still holds a hint of its ancient power.</Description><Tier>UT</Tier><Filename>d3LofiObjEmbed</Filename><Row>4</Row><Column>6</Column><SetName></SetName><SlotType>9</SlotType><HP>30</HP><MP>30</MP><ATK>1</ATK><DEF>1</DEF><SPD>1</SPD><DEX>1</DEX><VIT>1</VIT><WIS>1</WIS><Fame>3</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Coral Ring</Name><NameCode>0xc13</NameCode><Description>A ring crafted from the dangerous Fire Coral.</Description><Tier>UT</Tier><Filename>lofiObj2</Filename><Row>0</Row><Column>8</Column><SetName></SetName><SlotType>9</SlotType><HP>0</HP><MP>75</MP><ATK>0</ATK><DEF>0</DEF><SPD>5</SPD><DEX>0</DEX><VIT>0</VIT><WIS>5</WIS><Fame>4</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Crystal Bone Ring</Name><NameCode>0xc17</NameCode><Description>A ring made from a splinter of crystallized sacrificial bone.</Description><Tier>UT</Tier><Filename>lofiObj2</Filename><Row>0</Row><Column>12</Column><SetName></SetName><SlotType>9</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>3</DEX><VIT>0</VIT><WIS>3</WIS><Fame>0</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Ring of Divine Faith</Name><NameCode>0xc20</NameCode><Description>A ring that symbolizes divine might.</Description><Tier>UT</Tier><Filename>lofiObj2</Filename><Row>1</Row><Column>15</Column><SetName></SetName><SlotType>9</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>5</VIT><WIS>5</WIS><Fame>2</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Crown</Name><NameCode>0x913</NameCode><Description>Super regal!</Description><Tier>UT</Tier><Filename>lofiObj3</Filename><Row>12</Row><Column>6</Column><SetName></SetName><SlotType>9</SlotType><HP>0</HP><MP>0</MP><ATK>20</ATK><DEF>0</DEF><SPD>20</SPD><DEX>0</DEX><VIT>60</VIT><WIS>700</WIS><Fame>0</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Captain\'s Ring</Name><NameCode>0xc27</NameCode><Description>Captain Davy Jones\' ring.</Description><Tier>UT</Tier><Filename>lofiObj3</Filename><Row>12</Row><Column>7</Column><SetName></SetName><SlotType>9</SlotType><HP>40</HP><MP>0</MP><ATK>3</ATK><DEF>0</DEF><SPD>0</SPD><DEX>3</DEX><VIT>0</VIT><WIS>0</WIS><Fame>2</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>America Ring</Name><NameCode>0xc2d</NameCode><Description>An American hero\'s ring.</Description><Tier>UT</Tier><Filename>lofiObj3</Filename><Row>12</Row><Column>13</Column><SetName></SetName><SlotType>9</SlotType><HP>20</HP><MP>20</MP><ATK>1</ATK><DEF>1</DEF><SPD>1</SPD><DEX>1</DEX><VIT>1</VIT><WIS>1</WIS><Fame>3</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Experimental Ring</Name><NameCode>0xc31</NameCode><Description>An early prototype ring.</Description><Tier>UT</Tier><Filename>lofiObj3</Filename><Row>27</Row><Column>0</Column><SetName></SetName><SlotType>9</SlotType><HP>60</HP><MP>60</MP><ATK>0</ATK><DEF>4</DEF><SPD>0</SPD><DEX>0</DEX><VIT>4</VIT><WIS>0</WIS><Fame>4</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Gold Medal</Name><NameCode>0xc3e</NameCode><Description>An Olympic gold medal in synchronised swimming.</Description><Tier>UT</Tier><Filename>lofiObj3</Filename><Row>23</Row><Column>8</Column><SetName></SetName><SlotType>9</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>3</SPD><DEX>3</DEX><VIT>3</VIT><WIS>0</WIS><Fame>3</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Silver Medal</Name><NameCode>0xc3f</NameCode><Description>An Olympic silver medal in synchronised swimming.</Description><Tier>UT</Tier><Filename>lofiObj3</Filename><Row>23</Row><Column>9</Column><SetName></SetName><SlotType>9</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>2</SPD><DEX>2</DEX><VIT>2</VIT><WIS>0</WIS><Fame>2</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Bronze Medal</Name><NameCode>0xc40</NameCode><Description>An Olympic bronze medal in synchronised swimming.</Description><Tier>UT</Tier><Filename>lofiObj3</Filename><Row>23</Row><Column>10</Column><SetName></SetName><SlotType>9</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>1</SPD><DEX>1</DEX><VIT>1</VIT><WIS>0</WIS><Fame>1</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Candy Ring</Name><NameCode>0xc5f</NameCode><Description>A high-fructose ring that will give you pep, but hurt your concentration.</Description><Tier>UT</Tier><Filename>lofiObj3</Filename><Row>40</Row><Column>10</Column><SetName></SetName><SlotType>9</SlotType><HP>0</HP><MP>-100</MP><ATK>0</ATK><DEF>0</DEF><SPD>10</SPD><DEX>0</DEX><VIT>10</VIT><WIS>-10</WIS><Fame>0</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Ring of the Burning Sun</Name><NameCode>0x2300</NameCode><Description>A ring forged by the mad god in the flames of the suns surface. Its magic protects its owner from some harm. Original Design by DieGo.</Description><Tier>UT</Tier><Filename>lofiObj3</Filename><Row>76</Row><Column>9</Column><SetName></SetName><SlotType>9</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>8</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip>         <EffectInfo name="Set" description="Summer Solstice"/>      </ToolTip></Item><Item><Name>Almandine Ring of Wrath</Name><NameCode>0x2338</NameCode><Description>Set with stones as red as Oryx\'s favorite Cabernet Sauvignon.</Description><Tier>ST</Tier><Filename>d3LofiObjEmbed</Filename><Row>0</Row><Column>1</Column><SetName>Oryx Awesome Set</SetName><SlotType>9</SlotType><HP>140</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Geb\'s Ring of Wisdom</Name><NameCode>0x235D</NameCode><Description>It is said that the ring attunes its wearer to the earth and its life force.</Description><Tier>ST</Tier><Filename>lofiObj3</Filename><Row>81</Row><Column>1</Column><SetName>Priest of Geb Set</SetName><SlotType>9</SlotType><HP>25</HP><MP>25</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>5</VIT><WIS>10</WIS><Fame>5</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Ring of the Covetous Heart</Name><NameCode>0x2361</NameCode><Description>As I lifted the stone from its resting place it became readily apparent there was more to it than met the eye...</Description><Tier>ST</Tier><Filename>lofiObj3</Filename><Row>81</Row><Column>6</Column><SetName>Phylactery Mystic Set</SetName><SlotType>9</SlotType><HP>15</HP><MP>50</MP><ATK>5</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>8</WIS><Fame>5</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Legacy Ring of Pure Wishes</Name><NameCode>0x2365</NameCode><Description>Many do not realize how powerful a kind wish is.</Description><Tier>ST</Tier><Filename>lofiObj3</Filename><Row>81</Row><Column>11</Column><SetName>Legacy Swoll Paladin Set</SetName><SlotType>9</SlotType><HP>10</HP><MP>10</MP><ATK>1</ATK><DEF>5</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>5</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Legacy Spectral Ring of Horrors</Name><NameCode>0x21a3</NameCode><Description>Though the whispers can be heard in your head, they\'re not THAT loud.</Description><Tier>ST</Tier><Filename>lofiObj3</Filename><Row>83</Row><Column>6</Column><SetName>Legacy Skuld 2 The ReGhostening Set</SetName><SlotType>9</SlotType><HP>25</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>-2</SPD><DEX>4</DEX><VIT>4</VIT><WIS>4</WIS><Fame>4</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Spectral Ring of Horrors</Name><NameCode>0x2753</NameCode><Description>The charm embedded into this ring grants the power to absorb and redirect souls for placement in the afterlife.</Description><Tier>ST</Tier><Filename>lofiObj3</Filename><Row>83</Row><Column>6</Column><SetName>Skuld 2 The ReGhostening Set</SetName><SlotType>9</SlotType><HP>0</HP><MP>50</MP><ATK>0</ATK><DEF>3</DEF><SPD>2</SPD><DEX>2</DEX><VIT>2</VIT><WIS>2</WIS><Fame>4</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Legacy Forgotten Ring</Name><NameCode>0x21aa</NameCode><Description>An unsettling glow looms beneath the ancient gem\'s surface. Soon enough its power will be unleashed again.</Description><Tier>ST</Tier><Filename>lofiObj3</Filename><Row>83</Row><Column>8</Column><SetName>Legacy Twilight Archmage Set</SetName><SlotType>9</SlotType><HP>20</HP><MP>10</MP><ATK>3</ATK><DEF>2</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>The Forgotten Ring</Name><NameCode>0x21f6</NameCode><Description>An unsettling glow looms beneath the ancient gem\'s surface. Soon enough its power will be unleashed again.</Description><Tier>ST</Tier><Filename>lofiObj3</Filename><Row>83</Row><Column>8</Column><SetName>Twilight Archmage Set</SetName><SlotType>9</SlotType><HP>0</HP><MP>75</MP><ATK>0</ATK><DEF>6</DEF><SPD>0</SPD><DEX>7</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Amulet of Drakefyre</Name><NameCode>0x7fba</NameCode><Description>Given to the initiates who survive the first challenge.</Description><Tier>ST</Tier><Filename>d2LofiObjEmbed</Filename><Row>0</Row><Column>3</Column><SetName>Dragon Tamer Set</SetName><SlotType>9</SlotType><HP>115</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>5</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Interregnum</Name><NameCode>0x9df</NameCode><Description>Our fight was glorious, but in the end, I fell in battle and joined him in undeath.</Description><Tier>ST</Tier><Filename>d3LofiObjEmbed</Filename><Row>15</Row><Column>11</Column><SetName>Hollow King Necromancer Set</SetName><SlotType>9</SlotType><HP>75</HP><MP>0</MP><ATK>5</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>5</VIT><WIS>0</WIS><Fame>4</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Ice Crown</Name><NameCode>0x16dc</NameCode><Description>An ancient artifact, once worn by a corrupt king of the frost realms.\n\nSprite Credits: Poshun</Description><Tier>UT</Tier><Filename>d2LofiObjEmbed</Filename><Row>1</Row><Column>15</Column><SetName></SetName><SlotType>9</SlotType><HP>110</HP><MP>0</MP><ATK>6</ATK><DEF>0</DEF><SPD>0</SPD><DEX>6</DEX><VIT>0</VIT><WIS>0</WIS><Fame>5</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Honey Circlet</Name><NameCode>0x08fa</NameCode><Description>The solid honey on this ring renews its wearer with incredible energy.</Description><Tier>ST</Tier><Filename>epicHiveObjects8x8</Filename><Row>6</Row><Column>8</Column><SetName>Swarming Huntress Set</SetName><SlotType>9</SlotType><HP>80</HP><MP>0</MP><ATK>4</ATK><DEF>0</DEF><SPD>4</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Rusty Cuffs</Name><NameCode>0x025b</NameCode><Description>Used to bind aggressive golems. Considering they are no longer attached, they do not appear to have been very effective.</Description><Tier>ST</Tier><Filename>lostHallsObjects8x8</Filename><Row>11</Row><Column>7</Column><SetName>Lost Golem Set</SetName><SlotType>9</SlotType><HP>70</HP><MP>0</MP><ATK>0</ATK><DEF>5</DEF><SPD>5</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>5</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Sourcestone</Name><NameCode>0x024f</NameCode><Description>Unknown.</Description><Tier>UT</Tier><Filename>lostHallsObjects8x8</Filename><Row>10</Row><Column>10</Column><SetName></SetName><SlotType>9</SlotType><HP>110</HP><MP>110</MP><ATK>0</ATK><DEF>0</DEF><SPD>6</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>6</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Omnipotence Ring</Name><NameCode>0x0251</NameCode><Description>An unfathomable amount of strength pulses through this ring. Only the most righteous mortals can touch this ring and live.</Description><Tier>UT</Tier><Filename>lostHallsObjects8x8</Filename><Row>10</Row><Column>11</Column><SetName></SetName><SlotType>9</SlotType><HP>80</HP><MP>80</MP><ATK>4</ATK><DEF>4</DEF><SPD>4</SPD><DEX>4</DEX><VIT>4</VIT><WIS>4</WIS><Fame>7</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Bloodshed Ring</Name><NameCode>0x0253</NameCode><Description>A seemingly shattered ring that keeps itself together with an unknown magnetic force. It only stays together on the finger of a true killer.</Description><Tier>UT</Tier><Filename>lostHallsObjects8x8</Filename><Row>10</Row><Column>15</Column><SetName></SetName><SlotType>9</SlotType><HP>100</HP><MP>0</MP><ATK>0</ATK><DEF>5</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>5</WIS><Fame>6</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Magical Lodestone</Name><NameCode>0x0256</NameCode><Description>The source of power for the Marble Colossus found within his core. It is intended to give life to golems, but it can provide benefits to the living as well.</Description><Tier>UT</Tier><Filename>lostHallsObjects8x8</Filename><Row>11</Row><Column>2</Column><SetName></SetName><SlotType>9</SlotType><HP>0</HP><MP>0</MP><ATK>6</ATK><DEF>6</DEF><SPD>6</SPD><DEX>6</DEX><VIT>0</VIT><WIS>0</WIS><Fame>6</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Ring of Unbound Love</Name><NameCode>0x6405</NameCode><Description>My heart couldn\'t be anymore full!\n\nSprite Credits: WunderWafe</Description><Tier>ST</Tier><Filename>d2LofiObjEmbed</Filename><Row>6</Row><Column>8</Column><SetName>Valentine\'s Day Archer Set</SetName><SlotType>9</SlotType><HP>180</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>7</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Fairy Ring</Name><NameCode>0x83d</NameCode><Description>A ring topped with a hardened piece of magical resin.</Description><Tier>UT</Tier><Filename>magicWoodsObjects8x8</Filename><Row>3</Row><Column>2</Column><SetName></SetName><SlotType>9</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>2</SPD><DEX>2</DEX><VIT>2</VIT><WIS>2</WIS><Fame>1</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Tiara of Eggscellent Sturdiness</Name><NameCode>0x13ad</NameCode><Description>This tiara grants really good defense.\n\nSprite Credits: Piggby</Description><Tier>UT</Tier><Filename>buffedBunnyObjects8x8</Filename><Row>2</Row><Column>12</Column><SetName></SetName><SlotType>9</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>9</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>7</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip>         <EffectInfo name="Effect" description="10% chance to summon an Easter Bunny when getting hit by a projectile."/>         <EffectInfo name="Cooldown" description="45 seconds."/>      </ToolTip></Item><Item><Name>Horrific Claws</Name><NameCode>0xbbf</NameCode><Description>Fetid claws imbued with dangerous chemicals, pulled from the Horrific Creation.</Description><Tier>ST</Tier><Filename>d2LofiObjEmbed</Filename><Row>8</Row><Column>3</Column><SetName>Horrific Sorcerer Set</SetName><SlotType>9</SlotType><HP>40</HP><MP>50</MP><ATK>5</ATK><DEF>0</DEF><SPD>5</SPD><DEX>-3</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Hivemind Circlet</Name><NameCode>0xbdb</NameCode><Description>The parasites are not individual beings; they share a single consciousness.</Description><Tier>ST</Tier><Filename>d2LofiObjEmbed</Filename><Row>9</Row><Column>5</Column><SetName>Flesh Collector Set</SetName><SlotType>9</SlotType><HP>0</HP><MP>100</MP><ATK>5</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>-2</VIT><WIS>5</WIS><Fame>4</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Akuma\'s Tear</Name><NameCode>0x2041</NameCode><Description>The first and last teardrop of the ominous fiery demon.</Description><Tier>ST</Tier><Filename>d2LofiObjEmbed</Filename><Row>10</Row><Column>12</Column><SetName>Akuma Slayer Set</SetName><SlotType>9</SlotType><HP>30</HP><MP>40</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>3</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Bloodstone Ring</Name><NameCode>0x5bdf</NameCode><Description>It is believed that Oryx siphons a drop of blood from each hero he slays for use in this intimidating crimson ring.</Description><Tier>ST</Tier><Filename>d2LofiObjEmbed</Filename><Row>12</Row><Column>7</Column><SetName>Oryx\'s Battle Attires</SetName><SlotType>9</SlotType><HP>120</HP><MP>0</MP><ATK>0</ATK><DEF>4</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Regal Ring</Name><NameCode>0x57b</NameCode><Description>A legendary citrine ring said to grant unfathomable amounts of dexterity to those who possess it.</Description><Tier>ST</Tier><Filename>theMachineObjects8x8</Filename><Row>7</Row><Column>13</Column><SetName>Golden Archer Set</SetName><SlotType>9</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>1</DEX><VIT>0</VIT><WIS>0</WIS><Fame>6</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Heavenly Magatama</Name><NameCode>0x1e50</NameCode><Description>Spiraling treasure\nPrayer beads for the downpour\nCoiled in grateful hands.</Description><Tier>ST</Tier><Filename>d2LofiObjEmbed</Filename><Row>13</Row><Column>14</Column><SetName>Raijin Disciple Set</SetName><SlotType>9</SlotType><HP>80</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>5</SPD><DEX>0</DEX><VIT>5</VIT><WIS>0</WIS><Fame>4</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Revenant Ring</Name><NameCode>0x1e47</NameCode><Description>An otherworldly gemstone is set in this oddly tight ring. It does not seem designed for human fingers.</Description><Tier>ST</Tier><Filename>d2LofiObjEmbed</Filename><Row>13</Row><Column>7</Column><SetName>Phantom Archer Set</SetName><SlotType>9</SlotType><HP>50</HP><MP>0</MP><ATK>3</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>9</VIT><WIS>0</WIS><Fame>4</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Locked Reactor</Name><NameCode>0x0487</NameCode><Description>Though sealed tight, a quiet hum can be heard coming from the energy within.</Description><Tier>UT</Tier><Filename>d2LofiObjEmbed</Filename><Row>17</Row><Column>13</Column><SetName></SetName><SlotType>9</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip>         <EffectInfo name="Effect" description="Restores 150 HP when taking damage when below 300 HP."/>         <EffectInfo name="Cooldown" description="60 seconds."/>      </ToolTip></Item><Item><Name>Ring of Pure Wishes</Name><NameCode>0x04a8</NameCode><Description>Many do not realize how powerful a kind wish is.</Description><Tier>ST</Tier><Filename>d2LofiObjEmbed</Filename><Row>18</Row><Column>5</Column><SetName>Swoll Paladin Set</SetName><SlotType>9</SlotType><HP>45</HP><MP>45</MP><ATK>0</ATK><DEF>8</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>5</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Loaded Core</Name><NameCode>0x0498</NameCode><Description>An odd device with four power cores slotted inside. It loudly buzzes with energy, eager to direct its strength somewhere.\n\nSprite Credits: Aurum</Description><Tier>ST</Tier><Filename>d2LofiObjEmbed</Filename><Row>17</Row><Column>12</Column><SetName>Loaded Core</SetName><SlotType>9</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>7</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip>         <EffectInfo name="Alien Catalyst" description="Gain strength based on the amount of Alien Gear you wear."/>      </ToolTip></Item><Item><Name>Entropy Reactor</Name><NameCode>0x049a</NameCode><Description>A device used by alien researchers to stabilize power cores as a means of safely extracting their power.\n\nSprite Credits: Aurum</Description><Tier>ST</Tier><Filename>d2LofiObjEmbed</Filename><Row>17</Row><Column>14</Column><SetName>Entropy Reactor</SetName><SlotType>9</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>7</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip>         <EffectInfo name="Alien Catalyst" description="Gain strength based on the amount of Alien Gear you wear."/>         <EffectInfo name="Effect" description="Restores 150 HP when taking damage when below 300 HP."/>         <EffectInfo name="Cooldown" description="60 seconds."/>         <EffectInfo name="" description=""/>         <EffectInfo name="On Taking Damage" description="5% chance to trigger one of the Alien Cores effects."/>         <EffectInfo name="Cooldown" description="15 seconds."/>      </ToolTip></Item><Item><Name>Alien Core: Power</Name><NameCode>0x6456</NameCode><Description>This mysterious device analyses and improves the gear worn by its wielder.\n\nSprite Credits: Aurum</Description><Tier>ST</Tier><Filename>d2LofiObjEmbed</Filename><Row>14</Row><Column>14</Column><SetName>Alien Core: Power</SetName><SlotType>9</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>7</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip>         <EffectInfo name="Alien Catalyst" description="Gain strength based on the amount of Alien Gear you wear."/>         <EffectInfo name="On Taking Damage" description="10% chance to Paralyze surrounding  (3.5 radius) enemies for 4 seconds."/>         <EffectInfo name="Cooldown" description="10 seconds."/>      </ToolTip></Item><Item><Name>Alien Core: Warp</Name><NameCode>0x6465</NameCode><Description>This mysterious device analyses and improves the gear worn by its wielder.\n\nSprite Credits: Aurum</Description><Tier>ST</Tier><Filename>d2LofiObjEmbed</Filename><Row>16</Row><Column>1</Column><SetName>Alien Core: Warp</SetName><SlotType>9</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>7</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip>         <EffectInfo name="Alien Catalyst" description="Gain strength based on the amount of Alien Gear you wear."/>         <EffectInfo name="On Taking Damage" description="10% chance to create a decoy."/>         <EffectInfo name="Cooldown" description="10 seconds."/>      </ToolTip></Item><Item><Name>Alien Core: Corrosion</Name><NameCode>0x6466</NameCode><Description>This mysterious device analyses and improves the gear worn by its wielder.\n\nSprite Credits: Aurum</Description><Tier>ST</Tier><Filename>d2LofiObjEmbed</Filename><Row>16</Row><Column>0</Column><SetName>Alien Core: Corrosion</SetName><SlotType>9</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>7</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip>         <EffectInfo name="Alien Catalyst" description="Gain strength based on the amount of Alien Gear you wear."/>         <EffectInfo name="On Taking Damage" description="10% chance to throw poison."/>         <EffectInfo name="Impact Damage" description="50"/>         <EffectInfo name="Total Damage" description="1500"/>         <EffectInfo name="Duration" description="4.5"/>         <EffectInfo name="Cooldown" description="10 seconds."/>      </ToolTip></Item><Item><Name>Alien Core: Dark Matter</Name><NameCode>0x6467</NameCode><Description>This mysterious device analyses and improves the gear worn by its wielder.\n\nSprite Credits: Aurum</Description><Tier>ST</Tier><Filename>d2LofiObjEmbed</Filename><Row>16</Row><Column>2</Column><SetName>Alien Core: Dark Matter</SetName><SlotType>9</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>7</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip>         <EffectInfo name="Alien Catalyst" description="Gain strength based on the amount of Alien Gear you wear."/>         <EffectInfo name="On Taking Damage" description="10% chance to Break the armor of surrounding enemies (2.5 radius) for 4 seconds."/>         <EffectInfo name="Cooldown" description="10 seconds."/>      </ToolTip></Item><Item><Name>Crystallised Mist</Name><NameCode>0x04b1</NameCode><Description>This strange trinket creates a cloud of crystaline particles rendering anyone inside invisible.</Description><Tier>UT</Tier><Filename>d2LofiObjEmbed</Filename><Row>20</Row><Column>11</Column><SetName></SetName><SlotType>9</SlotType><HP>60</HP><MP>0</MP><ATK>0</ATK><DEF>6</DEF><SPD>8</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>5</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip>         <EffectInfo name="On taking over 70 damage" description="Invisible for 8 seconds."/>         <EffectInfo name="Cooldown" description="45 seconds"/>      </ToolTip></Item><Item><Name>Crystal Key</Name><NameCode>0x4b32</NameCode><Description>A mysterious key bestowed upon the Keyper by the Crystal Entity, imbued with an aura of forbidden magic. It fits no locks, yet it can open anything.\n\nSprite Credits: Trensient</Description><Tier>UT</Tier><Filename>lofiObj3</Filename><Row>92</Row><Column>9</Column><SetName></SetName><SlotType>9</SlotType><HP>50</HP><MP>0</MP><ATK>0</ATK><DEF>4</DEF><SPD>0</SPD><DEX>3</DEX><VIT>0</VIT><WIS>0</WIS><Fame>6</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip>         <EffectInfo description="Releases a barrage of 10 keys to hinder opponents." name="Keyper\'s Trickery"/>         <EffectInfo description="10% chance to create key nova." name="On Taking Damage"/>         <EffectInfo description="100" name="Key Damage"/>         <EffectInfo description="5 seconds" name="Cooldown"/>         <EffectInfo description="Slowed for 2 seconds" name="Key Effect"/>         <EffectInfo description="Exposed for 4 seconds" name="Key Effect"/>      </ToolTip></Item><Item><Name>Burlap Hat</Name><NameCode>0x6486</NameCode><Description>A humble hat with some dirt and straw stuck between the cloth. Being a scarecrow ain\'t much, but it\'s honest work.\n\nSprite Credits: Bonk, Aurum</Description><Tier>ST</Tier><Filename>d2LofiObjEmbed</Filename><Row>22</Row><Column>3</Column><SetName>Scarecrow Trickster Set</SetName><SlotType>9</SlotType><HP>70</HP><MP>0</MP><ATK>0</ATK><DEF>5</DEF><SPD>5</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>5</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Collarbone Collar</Name><NameCode>0x648d</NameCode><Description>There\'s a certain irony to this macabre amulet. It\'s not very comfortable to wear and will seldom let you snooze.\n\nSprite Credits: Tero, Aurum</Description><Tier>ST</Tier><Filename>d2LofiObjEmbed</Filename><Row>23</Row><Column>3</Column><SetName>Reanimated Archer Set</SetName><SlotType>9</SlotType><HP>50</HP><MP>0</MP><ATK>3</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>9</VIT><WIS>0</WIS><Fame>4</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Horned Ring</Name><NameCode>0x6494</NameCode><Description>The severed head of an imp grew horns posthumously, an eerie piece of natural decor.\n\nSprite Credits: Aurum</Description><Tier>ST</Tier><Filename>d2LofiObjEmbed</Filename><Row>24</Row><Column>3</Column><SetName>Unholy Paladin Set</SetName><SlotType>9</SlotType><HP>45</HP><MP>45</MP><ATK>0</ATK><DEF>8</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>5</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Witch\'s Brooch</Name><NameCode>0x649a</NameCode><Description>The true source of Totalia\'s powers. This ornament contains a small amount of liquid freely moving inside. It\'s cold-hot-fresh!\n\nSprite Credits: Aurum</Description><Tier>ST</Tier><Filename>d2LofiObjEmbed</Filename><Row>25</Row><Column>3</Column><SetName>Totalia Mystic Set</SetName><SlotType>9</SlotType><HP>15</HP><MP>50</MP><ATK>5</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>8</WIS><Fame>5</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Phantom Pendant</Name><NameCode>0x64a2</NameCode><Description>Everything was cool, Ruthven\'s a part of the band. And his monster mash was the hit of the land.\n\nSprite Credits: Aurum</Description><Tier>ST</Tier><Filename>d2LofiObjEmbed</Filename><Row>26</Row><Column>3</Column><SetName>Paranormal Wizard Set</SetName><SlotType>9</SlotType><HP>0</HP><MP>75</MP><ATK>0</ATK><DEF>6</DEF><SPD>0</SPD><DEX>7</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Ring of Pagan Favor</Name><NameCode>0x200f</NameCode><Description>When the arduous path to anointment is complete, the priest is decorated with this symbolic ring of servitude, modeled after Oryx\'s famed warriors.</Description><Tier>ST</Tier><Filename>d2LofiObjEmbed</Filename><Row>27</Row><Column>3</Column><SetName>Mad God\'s Messenger Set</SetName><SlotType>9</SlotType><HP>60</HP><MP>0</MP><ATK>0</ATK><DEF>5</DEF><SPD>0</SPD><DEX>0</DEX><VIT>-5</VIT><WIS>5</WIS><Fame>4</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Chrysanthemum Corsage</Name><NameCode>0x1847</NameCode><Description>Expertly carved from ancient trees and fitted together with their sap, this ring\'s flowers have absorbed magical energy over many years, storing it within its fruit.</Description><Tier>ST</Tier><Filename>d2LofiObjEmbed</Filename><Row>29</Row><Column>3</Column><SetName>Horticultural Huntress Set</SetName><SlotType>9</SlotType><HP>0</HP><MP>70</MP><ATK>0</ATK><DEF>0</DEF><SPD>5</SPD><DEX>7</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>First Mate\'s Hook</Name><NameCode>0x21dc</NameCode><Description>Less prominent pirates use personal hooks to signify their rank. Though it is almost entirely symbolic on its own, no true pirate is complete without one.</Description><Tier>ST</Tier><Filename>d2LofiObjEmbed</Filename><Row>28</Row><Column>3</Column><SetName>Pirate King Warrior Set</SetName><SlotType>9</SlotType><HP>10</HP><MP>0</MP><ATK>1</ATK><DEF>0</DEF><SPD>0</SPD><DEX>1</DEX><VIT>0</VIT><WIS>0</WIS><Fame>4</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Esben\'s Wedding Ring</Name><NameCode>0xb3f8</NameCode><Description>A memento of a life long gone. You can still feel the warmth from years past through the frigid ice that has taken over.</Description><Tier>UT</Tier><Filename>lofiObj3</Filename><Row>85</Row><Column>3</Column><SetName></SetName><SlotType>9</SlotType><HP>60</HP><MP>60</MP><ATK>10</ATK><DEF>-5</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>5</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Oryxmas Ornament: Energized</Name><NameCode>0x64bc</NameCode><Description>A blue ornament taken from Oryx\'s magical Oryxmas Tree. Inside, it contains the secrets to the past, which can be unleashed to gift its holder with the power of infinite possibilities.\n\nSprite Credits: Aurum</Description><Tier>UT</Tier><Filename>santaWorkshopObjects8x8</Filename><Row>7</Row><Column>6</Column><SetName></SetName><SlotType>9</SlotType><HP>0</HP><MP>90</MP><ATK>0</ATK><DEF>0</DEF><SPD>4</SPD><DEX>4</DEX><VIT>0</VIT><WIS>0</WIS><Fame>7</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip>         <EffectInfo name="On Taking Damage" description="10% chance to spawn an Oryxmas Tree that gives Energized to surrounding players and deals 50 damage to surrounding enemies every 0.2 seconds."/>         <EffectInfo name="Cooldown" description="10 seconds."/>      </ToolTip></Item><Item><Name>Oryxmas Ornament: Weak</Name><NameCode>0x64bd</NameCode><Description>A yellow ornament taken from Oryx\'s magical Oryxmas Tree. The aura it emits fills even the bitterest of hearts with pure joy, causing their blows to land with less force than before.\n\nSprite Credits: Aurum</Description><Tier>UT</Tier><Filename>santaWorkshopObjects8x8</Filename><Row>7</Row><Column>7</Column><SetName></SetName><SlotType>9</SlotType><HP>50</HP><MP>50</MP><ATK>0</ATK><DEF>4</DEF><SPD>0</SPD><DEX>0</DEX><VIT>4</VIT><WIS>0</WIS><Fame>7</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip>         <EffectInfo name="On Taking Damage" description="10% chance to spawn an Oryxmas Tree that applies Weak to surrounding enemies and deals 50 damage every 0.2 seconds."/>         <EffectInfo name="Cooldown" description="10 seconds."/>      </ToolTip></Item><Item><Name>Oryxmas Ornament: Exposed</Name><NameCode>0x64be</NameCode><Description>A red ornament taken from Oryx\'s magical Oryxmas Tree. It radiates with pure winter energy that highlights the weak spots of even the bulkiest of foes.\n\nSprite Credits: Aurum</Description><Tier>UT</Tier><Filename>santaWorkshopObjects8x8</Filename><Row>7</Row><Column>8</Column><SetName></SetName><SlotType>9</SlotType><HP>90</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>4</SPD><DEX>4</DEX><VIT>0</VIT><WIS>0</WIS><Fame>7</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip>         <EffectInfo name="On Taking Damage" description="10% chance to spawn an Oryxmas Tree that applies Exposed to surrounding enemies and deals 50 damage every 0.2 seconds."/>         <EffectInfo name="Cooldown" description="10 seconds."/>      </ToolTip></Item><Item><Name>Ornaments of Unity</Name><NameCode>0x64bf</NameCode><Description>A majestic chain of ornaments, each holding astounding powers. If paired with enough essence of Oryxmas, it will gift the most righteous of hearts the absolute power of the winter.\n\nSprite Credits: Aurum</Description><Tier>ST</Tier><Filename>santaWorkshopObjects8x8</Filename><Row>7</Row><Column>9</Column><SetName>Oryxmas Miracle Set</SetName><SlotType>9</SlotType><HP>0</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>7</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip>         <EffectInfo name="Oryxmas Unity" description="Gain strength based on the amount of Oryxmas gear you wear."/>         <EffectInfo name="On Taking Damage" description="10% chance to spawn an Oryxmas Tree that applies Exposed and Weak to surrounding enemies and Energized to surrounding players. It deals 50 damage to surrounding enemies every 0.2 seconds."/>         <EffectInfo name="Cooldown" description="10 seconds."/>      </ToolTip></Item><Item><Name>Jade Beetle</Name><NameCode>0x1e4e</NameCode><Description>A glorious block of solid jade, sculpted to resemble a sacred scarab beetle from the time of the ancients. This extraordinarily rare relic was granted to mortal athletes by Bes, Nut, and Geb themselves in recognition of great swiftness.</Description><Tier>UT</Tier><Filename>lofiObj2</Filename><Row>7</Row><Column>13</Column><SetName></SetName><SlotType>9</SlotType><HP>70</HP><MP>70</MP><ATK>0</ATK><DEF>0</DEF><SPD>10</SPD><DEX>5</DEX><VIT>0</VIT><WIS>0</WIS><Fame>7</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Ring of the Inferno</Name><NameCode>0x4b46</NameCode><Description>With the enchantress reduced to ash, the stone burst, scattering the relics of the mystic into the realm\'s lava fissures. They have since awaited a daring hero to recover the pieces from the clutches of demons.</Description><Tier>ST</Tier><Filename>d2LofiObjEmbed</Filename><Row>33</Row><Column>4</Column><SetName>Magmatic Mystic Set</SetName><SlotType>9</SlotType><HP>0</HP><MP>75</MP><ATK>4</ATK><DEF>3</DEF><SPD>4</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>5</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Radiant Heart</Name><NameCode>0x4b40</NameCode><Description>What serves as the life support for all of the artificial creatures constructed by the Crystal Entity is also capable of bestowing strength and energy to organic life.</Description><Tier>ST</Tier><Filename>d2LofiObjEmbed</Filename><Row>32</Row><Column>13</Column><SetName>Crystal Kunoichi Set</SetName><SlotType>9</SlotType><HP>100</HP><MP>0</MP><ATK>5</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>5</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Pernicious Peridot</Name><NameCode>0x4b3b</NameCode><Description>A cursed gemstone imbued with numerous plagues. While unfavorable to one\'s stamina, it proves itself useful with the associated resistances.</Description><Tier>ST</Tier><Filename>d2LofiObjEmbed</Filename><Row>32</Row><Column>7</Column><SetName>Acidified Assassin Set</SetName><SlotType>9</SlotType><HP>150</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>-5</SPD><DEX>0</DEX><VIT>0</VIT><WIS>0</WIS><Fame>5</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Gem of Tenderness</Name><NameCode>0xfd5</NameCode><Description>Only until you find true love, will you know what sweet tenderness feels like.\n\nSprite Credits: Trensient</Description><Tier>UT</Tier><Filename>d2LofiObjEmbed</Filename><Row>33</Row><Column>9</Column><SetName></SetName><SlotType>9</SlotType><HP>0</HP><MP>150</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>0</VIT><WIS>5</WIS><Fame>5</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Gem of Adoration</Name><NameCode>0xfd6</NameCode><Description>Dedicated to the one who will see beauty within.\n\nSprite Credits: Trensient</Description><Tier>UT</Tier><Filename>d2LofiObjEmbed</Filename><Row>33</Row><Column>10</Column><SetName></SetName><SlotType>9</SlotType><HP>150</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>5</VIT><WIS>0</WIS><Fame>5</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item><Item><Name>Soulful Affection</Name><NameCode>0xfd7</NameCode><Description>To my better half!\n\nSprite Credits: Trensient</Description><Tier>UT</Tier><Filename>d2LofiObjEmbed</Filename><Row>33</Row><Column>11</Column><SetName></SetName><SlotType>9</SlotType><HP>180</HP><MP>0</MP><ATK>0</ATK><DEF>0</DEF><SPD>0</SPD><DEX>0</DEX><VIT>5</VIT><WIS>5</WIS><Fame>5</Fame></Soulbound><BaseDamage>0</BaseDamage><MaxDamage>0</MaxDamage><RateOfFire>0</RateOfFire><Shots>0</Shots><Amplitude>0.0</Amplitude><Frequency>0.0</Frequency><ArcGap>0.0</ArcGap><Lifetime>0.0</Lifetime><Speed>0.0</Speed><ToolTip></ToolTip></Item>';
    
    while (s.includes("<Item>"))
        {
            var tot = makeItem(s);
            rings.push(tot);
            s = s.substring(s.indexOf("</Item>")+1, s.length)
        }
}
