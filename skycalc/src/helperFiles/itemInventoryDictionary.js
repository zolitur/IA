export function itemInventoryDictionary(id) {
    let dictionary = {"0_0":"air\r","1_0":"stone\r","1_1":"granite\r","1_2":"polished_granite\r","1_3":"diorite\r","1_4":"polished_diorite\r","1_5":"andesite\r","1_6":"polished_andesite\r","2_0":"grass\r","3_0":"dirt\r","3_1":"grassless_dirt\r","3_2":"podzol\r","4_0":"cobblestone\r","5_0":"oak_planks\r","5_1":"spruce_planks\r","5_2":"birch_planks\r","5_3":"jungle_planks\r","5_4":"acacia_planks\r","5_5":"dark_oak planks\r","6_0":"oak_sapling\r","6_1":"spruce_sapling\r","6_2":"birch_sapling\r","6_3":"jungle_sapling\r","6_4":"acacia_sapling\r","6_5":"dark_oak sapling\r","7_0":"bedrock\r","8_0":"flowing_water\r","9_0":"water\r","10_0":"flowing_lava\r","11_0":"lava\r","12_0":"sand\r","12_1":"red_sand\r","13_0":"gravel\r","14_0":"gold_ore\r","15_0":"iron_ore\r","16_0":"coal_ore\r","17_0":"oak_wood\r","17_1":"spruce_wood\r","17_2":"birch_wood\r","17_3":"jungle_wood\r","17_4":"oak_wood \r","17_5":"spruce_wood\r","17_6":"birch_wood\r","17_7":"jungle_wood\r","17_8":"oak_wood\r","17_9":"spruce_wood\r","17_10":"birch_wood\r","17_11":"jungle_wood\r","17_12":"oak_wood \r","17_13":"spruce_wood \r","17_14":"birch_wood\r","17_15":"jungle_wood\r","18_0":"oak_leaves\r","18_1":"spruce_leaves\r","18_2":"birch_leaves\r","18_3":"jungle_leaves\r","19_0":"sponge\r","20_0":"glass\r","21_0":"lapis_lazuli ore\r","22_0":"lapis_lazuli block\r","23_0":"dispenser\r","24_0":"sandstone\r","24_1":"chiseled_sandstone\r","24_2":"smooth_sandstone\r","25_0":"note_block\r","26_0":"bed\r","27_0":"powered_rail\r","28_0":"detector_rail\r","29_0":"sticky_piston\r","30_0":"web\r","31_0":"shrub\r","31_1":"grass\r","31_2":"fern\r","32_0":"shrub\r","33_0":"piston\r","34_0":"piston_head\r","35_0":"wool\r","35_1":"orange_wool\r","35_2":"magenta_wool\r","35_3":"light_blue wool\r","35_4":"yellow_wool\r","35_5":"lime_wool\r","35_6":"pink_wool\r","35_7":"gray_wool\r","35_8":"light_gray wool\r","35_9":"cyan_wool\r","35_10":"purple_wool\r","35_11":"blue_wool\r","35_12":"brown_wool\r","35_13":"green_wool\r","35_14":"red_wool\r","35_15":"black_wool\r","36_0":"piston_extension\r","37_0":"dandelion\r","38_0":"poppy\r","38_1":"blue_orchid\r","38_2":"allium\r","38_3":"azure_bluet\r","38_4":"red_tulip\r","38_5":"orange_tulip\r","38_6":"white_tulip\r","38_7":"pink_tulip\r","38_8":"oxeye_daisy\r","39_0":"brown_mushroom\r","40_0":"red_mushroom\r","41_0":"gold_block\r","42_0":"iron_block\r","43_0":"double_stone slab\r","43_1":"double_sandstone slab\r","43_2":"double_wooden slab\r","43_3":"double_cobblestone slab\r","43_4":"double_brick slab\r","43_5":"double_stone brick slab\r","43_6":"double_nether brick slab\r","43_7":"double_quartz slab\r","44_0":"stone_slab\r","44_1":"sandstone_slab\r","44_2":"wooden_slab\r","44_3":"cobblestone_slab\r","44_4":"brick_slab\r","44_5":"stone_brick slab\r","44_6":"nether_brick slab\r","44_7":"quartz_slab\r","45_0":"brick_block\r","46_0":"tnt\r","47_0":"bookshelf\r","48_0":"mossy_cobblestone\r","49_0":"obsidian\r","50_0":"torch\r","51_0":"fire\r","52_0":"mob_spawner\r","53_0":"oak_stairs\r","54_0":"chest\r","55_0":"redstone_wire\r","56_0":"diamond_ore\r","57_0":"diamond_block\r","58_0":"crafting_table\r","59_0":"wheat\r","60_0":"farmland\r","61_0":"furnace\r","62_0":"lit_furnace\r","63_0":"standing_sign\r","64_0":"wooden_door\r","65_0":"ladder\r","66_0":"rail\r","67_0":"cobblestone_stairs\r","68_0":"wall_sign\r","69_0":"lever\r","70_0":"stone_pressure plate\r","71_0":"iron_door\r","72_0":"wooden_pressure plate\r","73_0":"redstone_ore\r","74_0":"lit_redstone ore\r","75_0":"unlit_redstone torch\r","76_0":"redstone_torch\r","77_0":"stone_button\r","78_0":"snow_layer\r","79_0":"ice\r","80_0":"snow\r","81_0":"cactus\r","82_0":"clay\r","83_0":"sugar_cane\r","84_0":"jukebox\r","85_0":"fence\r","86_0":"pumpkin\r","87_0":"netherrack\r","88_0":"soul_sand\r","89_0":"glowstone\r","90_0":"portal\r","91_0":"jack-o-lantern\r","92_0":"cake\r","93_0":"unpowered_repeater\r","94_0":"powered_repeater\r","95_0":"white_stained glass\r","95_1":"orange_stained glass\r","95_2":"magenta_stained glass\r","95_3":"light_blue stained glass\r","95_4":"yellow_stained glass\r","95_5":"lime_stained glass\r","95_6":"pink_stained glass\r","95_7":"gray_stained glass\r","95_8":"light_gray stained glass\r","95_9":"cyan_stained glass\r","95_10":"purple_stained glass\r","95_11":"blue_stained glass\r","95_12":"brown_stained glass\r","95_13":"green_stained glass\r","95_14":"red_stained glass\r","95_15":"black_stained glass\r","96_0":"trapdoor\r","97_0":"stone_monster egg\r","97_1":"cobblestone_monster egg\r","97_2":"stone_brick monster egg\r","97_3":"mossy_stone brick monster egg\r","97_4":"cracked_stone brick monster egg\r","97_5":"chiseled_stone brick monster egg\r","98_0":"stone_brick\r","98_1":"mossy_stone brick\r","98_2":"cracked_stone brick\r","98_3":"chiseled_stone brick\r","99_0":"red_mushroom block\r","100_0":"brown_mushroom block\r","101_0":"iron_bars\r","102_0":"glass_pane\r","103_0":"melon_block\r","104_0":"pumpkin_stem\r","105_0":"melon_stem\r","106_0":"vines\r","107_0":"fence_gate\r","108_0":"brick_stairs\r","109_0":"stone_brick stairs\r","110_0":"mycelium\r","111_0":"lily_pad\r","112_0":"nether_brick\r","113_0":"nether_brick fence\r","114_0":"nether_brick stairs\r","115_0":"nether_wart\r","116_0":"enchantment_table\r","117_0":"brewing_stand\r","118_0":"cauldron\r","119_0":"end_portal\r","120_0":"end_portal frame\r","121_0":"end_stone\r","122_0":"dragon_egg\r","123_0":"redstone_lamp\r","124_0":"lit_redstone lamp\r","125_0":"double_oak slab\r","125_1":"double_spruce slab\r","125_2":"double_birch slab\r","125_3":"double_jungle slab\r","125_4":"double_acacia slab\r","125_5":"double_dark oak slab\r","126_0":"oak_slab\r","126_1":"spruce_slab\r","126_2":"birch_slab\r","126_3":"jungle_slab\r","126_4":"acacia_slab\r","126_5":"dark_oak slab\r","127_0":"cocoa\r","128_0":"sandstone_stairs\r","129_0":"emerald_ore\r","130_0":"ender_chest\r","131_0":"tripwire_hook\r","132_0":"tripwire\r","133_0":"emerald_block\r","134_0":"spruce_stairs\r","135_0":"birch_stairs\r","136_0":"jungle_stairs\r","137_0":"command_block\r","138_0":"beacon\r","139_0":"cobblestone_wall\r","140_0":"flower_pot\r","141_0":"carrots\r","142_0":"potatoes\r","143_0":"wooden_button\r","144_0":"skull\r","145_0":"anvil\r","146_0":"trapped_chest\r","147_0":"light_weighted pressure plate\r","148_0":"heavy_weighted pressure plate\r","149_0":"unpowered_redstone comparator\r","150_0":"powered_redstone comparator\r","151_0":"daylight_detector\r","152_0":"redstone_block\r","153_0":"nether_quartz ore\r","154_0":"hopper\r","155_0":"quartz_block\r","155_1":"chiseled_quartz block\r","155_2":"pillar_quartz block\r","156_0":"quartz_stairs\r","157_0":"activator_rail\r","158_0":"dropper\r","159_0":"white_stained clay\r","159_1":"orange_stained clay\r","159_2":"magenta_stained clay\r","159_3":"light_blue stained clay\r","159_4":"yellow_stained clay\r","159_5":"lime_stained clay\r","159_6":"pink_stained clay\r","159_7":"gray_stained clay\r","159_8":"light_gray stained clay\r","159_9":"cyan_stained clay\r","159_10":"purple_stained clay\r","159_11":"blue_stained clay\r","159_12":"brown_stained clay\r","159_13":"green_stained clay\r","159_14":"red_stained clay\r","159_15":"black_stained clay\r","160_0":"white_stained glass pane\r","160_1":"orange_stained glass pane\r","160_2":"magenta_stained glass pane\r","160_3":"light_blue stained glass pane\r","160_4":"yellow_stained glass pane\r","160_5":"lime_stained glass pane\r","160_6":"pink_stained glass pane\r","160_7":"gray_stained glass pane\r","160_8":"light_gray stained glass pane\r","160_9":"cyan_stained glass pane\r","160_10":"purple_stained glass pane\r","160_11":"blue_stained glass pane\r","160_12":"brown_stained glass pane\r","160_13":"green_stained glass pane\r","160_14":"red_stained glass pane\r","160_15":"black_stained glass pane\r","161_0":"acacia_leaves\r","161_1":"dark_oak leaves\r","162_0":"acacia_wood\r","162_1":"dark_oak wood\r","162_2":"acacia_wood\r","162_3":"dark_oak wood\r","162_4":"acacia_wood\r","162_5":"dark_oak wood\r","162_6":"acacia_wood\r","162_7":"dark_oak wood\r","162_8":"acacia_wood\r","162_9":"dark_oak wood\r","162_10":"acacia_wood\r","162_11":"dark_oak wood\r","162_12":"acacia_wood\r","162_13":"dark_oak wood\r","162_14":"acacia_wood\r","162_15":"dark_oak wood\r","163_0":"acacia_wood stairs\r","164_0":"dark_oak wood stairs\r","165_0":"slime_block\r","166_0":"barrier\r","167_0":"iron_trapdoor\r","170_0":"hay_bale\r","171_0":"white_carpet\r","171_1":"orange_carpet\r","171_2":"magenta_carpet\r","171_3":"light_blue carpet\r","171_4":"yellow_carpet\r","171_5":"lime_carpet\r","171_6":"pink_carpet\r","171_7":"gray_carpet\r","171_8":"light_gray carpet\r","171_9":"cyan_carpet\r","171_10":"purple_carpet\r","171_11":"blue_carpet\r","171_12":"brown_carpet\r","171_13":"green_carpet\r","171_14":"red_carpet\r","171_15":"black_carpet\r","172_0":"hardened_clay\r","173_0":"coal_block\r","174_0":"packed_ice\r","175_0":"sunflower\r","175_1":"lilac\r","175_2":"double_tallgrass\r","175_3":"large_fern\r","175_4":"rose_bush\r","175_5":"peony\r","256_0":"iron_shovel\r","257_0":"iron_pickaxe\r","258_0":"iron_axe\r","259_0":"flint_and steel\r","260_0":"apple\r","261_0":"bow\r","262_0":"arrow\r","263_0":"coal\r","263_1":"charcoal\r","264_0":"diamond\r","265_0":"iron_ingot\r","266_0":"gold_ingot\r","267_0":"iron_sword\r","268_0":"wooden_sword\r","269_0":"wooden_shovel\r","270_0":"wooden_pickaxe\r","271_0":"wooden_axe\r","272_0":"stone_sword\r","273_0":"stone_shovel\r","274_0":"stone_pickaxe\r","275_0":"stone_axe\r","276_0":"diamond_sword\r","277_0":"diamond_shovel\r","278_0":"diamond_pickaxe\r","279_0":"diamond_axe\r","280_0":"stick\r","281_0":"bowl\r","282_0":"mushroom_soup\r","283_0":"gold_sword\r","284_0":"gold_shovel\r","285_0":"gold_pickaxe\r","286_0":"gold_axe\r","287_0":"string\r","288_0":"feather\r","289_0":"sulphur\r","290_0":"wooden_hoe\r","291_0":"stone_hoe\r","292_0":"iron_hoe\r","293_0":"diamond_hoe\r","294_0":"gold_hoe\r","295_0":"wheat_seeds\r","296_0":"wheat\r","297_0":"bread\r","298_0":"leather_helmet\r","299_0":"leather_chestplate\r","300_0":"leather_leggings\r","301_0":"leather_boots\r","302_0":"chainmail_helmet\r","303_0":"chainmail_chestplate\r","304_0":"chainmail_leggings\r","305_0":"chainmail_boots\r","306_0":"iron_helmet\r","307_0":"iron_chestplate\r","308_0":"iron_leggings\r","309_0":"iron_boots\r","310_0":"diamond_helmet\r","311_0":"diamond_chestplate\r","312_0":"diamond_leggings\r","313_0":"diamond_boots\r","314_0":"gold_helmet\r","315_0":"gold_chestplate\r","316_0":"gold_leggings\r","317_0":"gold_boots\r","318_0":"flint\r","319_0":"raw_porkchop\r","320_0":"cooked_porkchop\r","321_0":"painting\r","322_0":"golden_apple\r","322_1":"enchanted_golden apple\r","323_0":"sign\r","324_0":"wooden_door\r","325_0":"bucket\r","326_0":"water_bucket\r","327_0":"lava_bucket\r","328_0":"minecart\r","329_0":"saddle\r","330_0":"iron_door\r","331_0":"redstone\r","332_0":"snowball\r","333_0":"boat\r","334_0":"leather\r","335_0":"milk_bucket\r","336_0":"clay_brick\r","337_0":"clay_balls\r","338_0":"sugarcane\r","339_0":"paper\r","340_0":"book\r","341_0":"slimeball\r","342_0":"storage_minecart\r","343_0":"powered_minecart\r","344_0":"egg\r","345_0":"compass\r","346_0":"fishing_rod\r","347_0":"clock\r","348_0":"glowstone_dust\r","349_0":"raw_fish\r","349_1":"raw_salmon\r","349_2":"clownfish\r","349_3":"pufferfish\r","350_0":"cooked_fish\r","350_1":"cooked_salmon\r","351_0":"ink_sack\r","351_1":"rose_red\r","351_2":"cactus_green\r","351_3":"coco_beans\r","351_4":"lapis_lazuli\r","351_5":"purple_dye\r","351_6":"cyan_dye\r","351_7":"light_gray dye\r","351_8":"gray_dye\r","351_9":"pink_dye\r","351_10":"lime_dye\r","351_11":"dandelion_yellow\r","351_12":"light_blue dye\r","351_13":"magenta_dye\r","351_14":"orange_dye\r","351_15":"bone_meal\r","352_0":"bone\r","353_0":"sugar\r","354_0":"cake\r","355_0":"bed\r","356_0":"redstone_repeater\r","357_0":"cookie\r","358_0":"map\r","359_0":"shears\r","360_0":"melon\r","361_0":"pumpkin_seeds\r","362_0":"melon_seeds\r","363_0":"raw_beef\r","364_0":"steak\r","365_0":"raw_chicken\r","366_0":"cooked_chicken\r","367_0":"rotten_flesh\r","368_0":"ender_pearl\r","369_0":"blaze_rod\r","370_0":"ghast_tear\r","371_0":"gold_nugget\r","372_0":"nether_wart seeds\r","373_0":"potion\r","373_16":"awkward_potion\r","373_32":"thick_potion\r","373_64":"mundane_potion\r","373_8193":"regeneration_potion \r","373_8194":"swiftness_potion \r","373_8195":"fire_resistance potion)\r","373_8196":"poison_potion\r","373_8197":"healing_potion\r","373_8200":"weakness_potion\r","373_8201":"strength_potion \r","373_8202":"slowness_potion\r","373_8204":"harming_potion\r","373_8225":"regeneration_potion ii\r","373_8226":"swiftness_potion ii\r","373_8228":"poison_potion ii \r","373_8229":"healing_potion ii\r","373_8233":"strength_potion ii\r","373_8236":"harming_potion ii\r","373_8257":"regeneration_potion\r","373_8258":"swiftness_potion\r","373_8259":"fire_resistance potion \r","373_8260":"poison_potion \r","373_8264":"weakness_potion\r","373_8265":"strength_potion \r","373_8266":"slowness_potion \r","373_16378":"fire_resistance splash\r","373_16385":"regeneration_splash\r","373_16386":"swiftness_splash \r","373_16388":"poison_splash \r","373_16389":"healing_splash\r","373_16392":"weakness_splash\r","373_16393":"strength_splash \r","373_16394":"slowness_splash \r","373_16396":"harming_splash\r","373_16418":"swiftness_splash ii \r","373_16420":"poison_splash ii\r","373_16421":"healing_splash ii\r","373_16425":"strength_splash ii \r","373_16428":"harming_splash ii\r","373_16449":"regeneration_splash\r","373_16450":"swiftness_splash\r","373_16451":"fire_resistance splash\r","373_16452":"poison_splash\r","373_16456":"weakness_splash\r","373_16457":"strength_splash\r","373_16458":"slowness_splash\r","373_16471":"regeneration_splash ii\r","374_0":"glass_bottle\r","375_0":"spider_eye\r","376_0":"fermented_spider eye\r","377_0":"blaze_powder\r","378_0":"magma_cream\r","379_0":"brewing_stand\r","380_0":"cauldron\r","381_0":"eye_of ender\r","382_0":"glistering_melon\r","383_50":"spawn_creeper\r","383_51":"spawn_skeleton\r","383_52":"spawn_spider\r","383_54":"spawn_zombie\r","383_55":"spawn_slime\r","383_56":"spawn_ghast\r","383_57":"spawn_pigman\r","383_58":"spawn_enderman\r","383_59":"spawn_cave spider\r","383_60":"spawn_silverfish\r","383_61":"spawn_blaze\r","383_62":"spawn_magma cube\r","383_65":"spawn_bat\r","383_66":"spawn_witch\r","383_90":"spawn_pig\r","383_91":"spawn_sheep\r","383_92":"spawn_cow\r","383_93":"spawn_chicken\r","383_94":"spawn_squid\r","383_95":"spawn_wolf\r","383_96":"spawn_mooshroom\r","383_98":"spawn_ocelot\r","383_100":"spawn_horse\r","383_120":"spawn_villager\r","384_0":"bottle_o' enchanting\r","385_0":"fire_charge\r","386_0":"book_and quill\r","387_0":"written_book\r","388_0":"emerald\r","389_0":"item_frame\r","390_0":"flower_pot\r","391_0":"carrot\r","392_0":"potato\r","393_0":"baked_potato\r","394_0":"poisonous_potato\r","395_0":"map\r","396_0":"golden_carrot\r","397_0":"mob_head (skeleton)\r","397_1":"mob_head (wither skeleton)\r","397_2":"mob_head (zombie)\r","397_3":"mob_head (human)\r","397_4":"mob_head (creeper)\r","398_0":"carrot_on a stick\r","399_0":"nether_star\r","400_0":"pumpkin_pie\r","401_0":"firework_rocket\r","402_0":"firework_star\r","403_0":"enchanted_book\r","404_0":"redstone_comparator\r","405_0":"nether_brick\r","406_0":"nether_quartz\r","407_0":"minecart_with tnt\r","408_0":"minecart_with hopper\r","417_0":"iron_horse armor\r","418_0":"gold_horse armor\r","419_0":"diamond_horse armor\r","420_0":"lead\r","421_0":"name_tag\r","422_0":"minecart_with command block\r","2256_0":"13_disc\r","2257_0":"cat_disc\r","2258_0":"blocks_disc\r","2259_0":"chirp_disc\r","2260_0":"far_disc\r","2261_0":"mall_disc\r","2262_0":"mellohi_disc\r","2263_0":"stal_disc\r","2264_0":"strad_disc\r","2265_0":"ward_disc\r","2266_0":"11_disc\r","2267_0":"wait_disc"}
    return dictionary[id]
}