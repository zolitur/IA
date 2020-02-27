export function translateItem(id) {
    let dictionary = {
        GRAVEL: "Gravel",
        RAW_CHICKEN: "Chicken",
        "LOG_2:1" : "Dark oak wood",
        LOG_2: "Acacia wood",
        "LOG:2": "Birch wood",
        LOG: "Oak wood",
        "LOG:3": "Jungle wood",
        MELON: "Melon",
        PUMPKIN: "Pumpkin",
        RAW_Fish: "Fish",
        INK_SACK: "Ink sack",
        COBBLESTONE: "Cobblestone",
        MAGMA_CREAM: "Magma cream",
        DIAMOND: "Diamond",
        SPIDER_EYE: "Spider eye",
        "RAW_FISH:3": "Pufferfish",
        "RAW_FISH:2": "Clownfish",
        "RAW_FISH:1": "Salmon",
        BONE: "Bone",
        LEATHER: "Leather",
        CACTUS: "Cactus",
        CARROT_ITEM: "Carrot",
        GLOWSTONE_DUST: "Glowstone",
        BLAZE_ROD: "Blaze rod",
        PRISMARINE_SHARD: "Prismarine shard",
        ENDER_STONE: "End stone",
        MUTTON: "Mutton",
        EMERALD: "Emerald",
        ROTTEN_FLESH: "Rotten flesh",
        POTATO_ITEM: "Potato",
        CLAY_BALL: "Clay",
        NETHERRACK: "Netherrack",
        SPONGE: "Sponge",
        COAL: "Coal",
        GOLD_INGOT: "Gold",
        REDSTONE: "Redstone",
        MUSHROOM_COLLECTION: "Mushroom",
        PORK: "Pig",
        RABBIT: "Rabbit",
        SUGAR_CANE: "Sugar cane",
        WHEAT: "Wheat",
        QUARTZ: "Quartz",
        SLIME_BALL: "Slime",
        PRISMARINE_CRYSTALS: "Prismarine crystal",
        STRING: "String",
        ENDER_PEARL: "Enderpearl",
        WATER_LILY: "Lilypad",
        OBSIDIAN: "Obsidian",
        SAND: "Sand",
        GHAST_TEAR: "Ghast tear",
        SEEDS: "Seeds",
        IRON_INGOT: "Iron",
        FEATHER: "Feather",
        ICE: "Ice",
        NETHER_STALK: "Netherwart",
    }
    let name = dictionary[id]
    return name
}