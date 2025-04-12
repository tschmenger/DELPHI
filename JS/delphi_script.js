document.addEventListener('DOMContentLoaded', async () => {
    // How TO
        // ####################################### Magic Items Table A
        // HTML DIV
        // div class="section">
        //     <h2>Magic Items Table A</h2>
        //     <div class="content" id="magicitems_A">
        //         <p><span id="magicItemAdescriptor"></span></p>
        //         <button class="d20-button section-d20-button">
        //             <i class="fas fa-dice-d20"></i>
        //         </button>
        //     </div>
        // </div> 

        // const FUNCTIONNAME = () => {
            // This should be called from update_all()
        //     const magicItemAdescriptor = randomSelect(magicitemsA);
            // magicItemAdescriptor is the name from HTML
            // magicitemsA is where the table is saved as
        //     document.getElementById('magicItemAdescriptor').textContent = magicItemAdescriptor;
        // };
    // ####################################### ####################################### #######################################
    // ####################################### Loading tables
    // ####################################### DM Tools
    // ######### YesNo with impro
    const yesNoTable = await csvToTable('tables/YesNo.csv');
    const immersivetable = await csvToTable('tables/DMtoolkit_immersion.txt');
    // ######### several minor things
    const mildeffects = await csvToTable('tables/MildMagicEffects.txt');
    const quirkyitems = await csvToTable('tables/items_quirks.txt');
    const foods = await csvToTable('tables/Foods_one.txt');
    //console.log('Foods:', foods);
    const drinks = await csvToTable('tables/Drinks_one.txt');
    //console.log('Drinks:', drinks);
    // ######### Very simply NPC moods
    const NPCmoodtable = await csvToTable('tables/NPC_mood.csv');
    // ######### NPC
    const NPC_gender = await csvToTable('tables/NPC_gender.txt');
    const NPC_age = await csvToTable('tables/NPC_age.txt');
    const NPC_race = await csvToTable('tables/NPC_race.txt');
    const NPC_profession = await csvToTable('tables/NPC_profession.txt');
    // ######### Inns
    const Inn_exterior = await csvToTable('tables/Inn_Ext.txt');
    const Inn_interior = await csvToTable('tables/Inn_int.txt');
    const Inn_services = await csvToTable('tables/Inn_services.txt');
    const Inn_patrons = await csvToTable('tables/Inn_patrons.txt');
    const Inn_events = await csvToTable('tables/Inn_events.txt');
    const Inn_hooks = await csvToTable('tables/Inn_hooks.txt');
    const tavern_name_A = await csvToTable('tables/tavern_name_A.txt');
    const tavern_name_B = await csvToTable('tables/tavern_name_B.txt');
    // ######### Shops
    const shop_exterior = await csvToTable('tables/Shop_ext.txt');
    const shop_interior = await csvToTable('tables/Shop_int.txt');
    const shop_feature = await csvToTable('tables/Shop_feature.txt');
    const shop_keeper = await csvToTable('tables/Shop_keeper.txt');
    const shop_sale = await csvToTable('tables/Shop_sale.txt');
    const shop_secrets = await csvToTable('tables/Shop_secrets.txt');
    const shop_unusual = await csvToTable('tables/Shop_unusual.txt');
    const shop_events = await csvToTable('tables/Shop_events.txt');
    // ######### Books
    const booktheme = await csvToTable('tables/books.txt');
    const bookcover = await csvToTable('tables/books_cover.txt');
    const bookcondition = await csvToTable('tables/books_condition.txt');
    const bookauthors = await csvToTable('tables/books_authors.txt');
    // ######### Traps
    const ind_trap = await csvToTable('tables/trap_indirect.txt');
    const mech_source = await csvToTable('tables/trap_mechanical_source.txt');
    const mech_trigger = await csvToTable('tables/trap_mechanical_triggered.txt');
    const mechanical_trap = await csvToTable('tables/trap_mechanical.txt');
    const arcane_source = await csvToTable('tables/trap_arcane_source.txt');
    const arcane_trigger = await csvToTable('tables/trap_arcane_triggered.txt');
    const arcane_trap = await csvToTable('tables/trap_arcane.txt');
    const trap_options =  await csvToTable('tables/trap_optional.txt');
    // ######### DMG tables
    const framingevents = await csvToTable('tables/framing_events.txt');
    const magicitemsA = await csvToTable('tables/MagicItemTableA.txt');
    const magicitemsB = await csvToTable('tables/MagicItemTableB.txt');
    const magicitemsC = await csvToTable('tables/MagicItemTableC.txt');
    const magicitemsD = await csvToTable('tables/MagicItemTableD.txt');
    const magicitemsE = await csvToTable('tables/MagicItemTableE.txt');
    const magicitemsF = await csvToTable('tables/MagicItemTableF.txt');
    const magicitemsG = await csvToTable('tables/MagicItemTableG.txt');
    const magicitemsH = await csvToTable('tables/MagicItemTableH.txt');
    const magicitemsI = await csvToTable('tables/MagicItemTableI.txt');
    // #########
    const treasurehoard04 = await csvToTable('tables/treasure_hoard_0_4.txt');
    const treasurehoard510 = await csvToTable('tables/treasure_hoard_5_10.txt');
    const treasurehoard1116 = await csvToTable('tables/treasure_hoard_11_16.txt');
    const treasurehoard17 = await csvToTable('tables/treasure_hoard_17.txt');
    // ######### trinkets
    const trinket_table = await csvToTable('tables/trinkets.txt');
    // ######### encounters
    const urbanencounter = await csvToTable('tables/urban_encounters.txt');
    const noncombatencounter = await csvToTable('tables/non_combat_encounter.txt'); 
    const grassland_enc = await csvToTable('tables/grassland_encounters.txt');
    const forest_enc = await csvToTable('tables/forest_encounters.txt');
    const jungle_enc = await csvToTable('tables/jungle_encounters.txt');
    const village_enc = await csvToTable('tables/village_encounters.txt');
    const mountain_enc = await csvToTable('tables/mountain_encounters.txt');
    const feywild_enc = await csvToTable('tables/feywild_encounters.txt');
    // ######### generic buildings
    const generic_toplevel = await csvToTable('tables/generic_building.txt'); 
    const generic_residence = await csvToTable('tables/generic_residence.txt');
    const generic_temple = await csvToTable('tables/generic_temple.txt');
    const generic_warehouse = await csvToTable('tables/generic_warehouse.txt');
    // ######### simple quests
    const simplequests = await csvToTable('tables/simple_quests.txt');
    // ######### cities
    const cityculture = await csvToTable('tables/city_culture.txt');
    const citydefense = await csvToTable('tables/city_defense.txt');
    const citydistrict = await csvToTable('tables/city_district.txt');
    const citygeography = await csvToTable('tables/city_geography.txt');
    const citygovernment = await csvToTable('tables/city_government.txt');
    const cityhistory = await csvToTable('tables/city_history.txt');
    const citylandmark = await csvToTable('tables/city_landmark.txt');
    const citylaw = await csvToTable('tables/city_law.txt');
    const cityplayers = await csvToTable('tables/city_players.txt');
    const cityresources = await csvToTable('tables/city_resources.txt');
    const citystreetnames = await csvToTable('tables/city_streetnames.txt');
    const citythreats = await csvToTable('tables/city_threats.txt');
    // ####################################### ####################################### #######################################
    const complexQappearance =  await csvToTable('tables/complexQ_appearance.txt');
    const complexQgoal =  await csvToTable('tables/complexQ_goal.txt');
    const complexQlocations =  await csvToTable('tables/complexQ_locations.txt');
    const complexQloot =  await csvToTable('tables/complexQ_loot.txt');
    const complexQnpcs =  await csvToTable('tables/complexQ_npcs.txt');
    const complexQobjects =  await csvToTable('tables/complexQ_objects.txt');
    const complexQrestrictions =  await csvToTable('tables/complexQ_restrictions.txt');
    const complexQstatus =  await csvToTable('tables/complexQ_status.txt');
    const complexQtimelimit =  await csvToTable('tables/complexQ_timelimit.txt');
    const complexQtwists =  await csvToTable('tables/complexQ_twists.txt');
    const dungeonpassageways = await csvToTable('tables/dungeon_passageway.txt');
    const dungeonclass = await csvToTable('tables/dungeon_type.txt');
    const dungeonchamberstate = await csvToTable('tables/dungeon_chamber_state.txt');
    const dungeonroomcontent = await csvToTable('tables/dungeon_room_content.txt');
    const dungeonhazards = await csvToTable('tables/dungeon_hazard.txt');
    // ####################################### Setting parameters
    /**
     * Generate a random NPC based on the specified parameters.
     * @param {boolean} includeGender - Whether to include gender.
     * @param {boolean} includeAge - Whether to include apparent age.
     * @param {boolean} includeRace - Whether to include race.
     * @param {boolean} includeProfession - Whether to include apparent profession.
     * @param {boolean} includeMood - Whether to include simple moods.
     * @returns {string} - The generated NPC description.
     */
    // ####################################### NPC generator FUNCTION
    function generateNPC(includeAge, includeGender, includeRace, includeProfession, includeMood) {
        let npcDescription = "";
        if (includeAge) npcDescription += `${randomSelect(NPC_age)}\n`;
        if (includeGender) npcDescription += `${randomSelect(NPC_gender)}\n`;
        if (includeRace) npcDescription += `${randomSelect(NPC_race)}\n`;
        if (includeProfession) npcDescription += `${randomSelect(NPC_profession)}\n`;
        npcDescription = npcDescription.trim() + ".\n";
        if (includeMood) npcDescription += `They are ${randomSelect(NPCmoodtable)}\n`;
        return npcDescription.trim();
    }
    // ####################################### full NPC
    const updateNPCSection = () => {
        const npcDescription = generateNPC(true, true, true, true, true); // Example parameters
        document.getElementById('npcDescription').innerHTML = npcDescription;
    };
    // ####################################### Yes/No with impro choices
    const updateYesNoSection = () => {
        const yesNoAnswer = randomSelect(yesNoTable);

        // Debug: Log the selected answer
        // console.log("Selected Answer:", yesNoAnswer);

        document.getElementById('yesNoAnswer').textContent = yesNoAnswer;
    };
    // ####################################### Immersion
    const updateImmersion = () => {
        const immersivedescription = randomSelect(immersivetable);
        document.getElementById('immersivedescription').textContent = immersivedescription;
    };
    // ####################################### Simple NPC Moods
    const updateNPCmood = () => {
        const NPCmoodAnswer = randomSelect(NPCmoodtable);

        // Debug: Log the selected answer
        // console.log("Selected Answer:", yesNoAnswer);

        document.getElementById('NPCmoodAnswer').textContent = NPCmoodAnswer;
    };
    // ####################################### Inns & Taverns
    function generateInns() {
        let tavernDescription = "";
        tavernDescription += `<br><strong>Arriving at the inn you see:</strong><br>`;
        tavernDescription += `${randomSelect(Inn_exterior)}<br>`;
        tavernDescription += `<br><strong>A sign outside reveals the name of this inn:</strong><br>`;
        tavernDescription += `${randomSelect(tavern_name_A)} ${randomSelect(tavern_name_B)}<br>`;
        tavernDescription += `<br><strong>You look around inside and notice:</strong><br>`;
        tavernDescription += `${randomSelect(Inn_interior)}<br>`;
        tavernDescription += `<br><strong>The bartender is a</strong> `;
        tavernDescription += generateNPC(false, true, true, false, false);
        tavernDescription += `<br>`;
        tavernDescription += `${randomSelect(Inn_services)}<br>`;
        tavernDescription += `<br><strong>On the menu is</strong> `;
        tavernDescription += `${randomSelect(foods).trim()} and<br>`;
        tavernDescription += `${randomSelect(foods).trim()}.<br>`;
        tavernDescription += `The speciality drink here is ${randomSelect(drinks)}.<br>`;
        tavernDescription += `<br><strong>You look around and see:</strong><br>`;
        tavernDescription += `${randomSelect(Inn_patrons)}<br>`;
        tavernDescription += `<br><strong>After staying for a while:</strong><br>`;
        tavernDescription += `${randomSelect(Inn_events)}<br>`;
        tavernDescription += `<br><strong>Further investigation unvocers:</strong><br>`;
        tavernDescription += `${randomSelect(Inn_hooks)}<br>`;
        return tavernDescription.trim();
    }
    const updateInns = () => {
        const tavernDescription = generateInns(); 
        document.getElementById('tavernDescription').innerHTML  = tavernDescription;
    }
    // ####################################### Shops
    function generateShops() {
        let shopDescription = "";
        shopDescription += `<br><strong>Arriving at the shop you see:</strong><br>`;
        shopDescription += `${randomSelect(shop_exterior)}<br>`;
        shopDescription += `<br><strong>You look around inside and notice:</strong><br>`;
        shopDescription += `${randomSelect(shop_interior)}<br>`;
        shopDescription += `<br><strong>The shopkeeper is a</strong><br>`;
        shopDescription += generateNPC(false, true, true, false, false);
        shopDescription += `${randomSelect(shop_keeper)}<br>`;
        shopDescription += `<br><strong>The shop sells:</strong><br>`;
        shopDescription += `${randomSelect(shop_sale)}<br>`;
        shopDescription += `<br><strong>What no one seems to be aware of:</strong><br>`;
        shopDescription += `${randomSelect(shop_secrets)}<br>`;
        shopDescription += `<br><strong>Other customers at the time are:</strong><br>`;
        shopDescription += `${randomSelect(shop_unusual)}<br>`;
        shopDescription += `<br><strong>If one lingers around for too long...</strong><br>`;
        shopDescription += `${randomSelect(shop_events)}<br>`;
        return shopDescription.trim();
    }
    const updateShops = () => {
        const shopDescription = generateShops(); 
        document.getElementById('shopDescription').innerHTML  = shopDescription;
    }
    // ####################################### Magic Items Table A
    const updateitemquirks = () => {
            const itemquirk = randomSelect(quirkyitems);
            document.getElementById('itemquirk').textContent = itemquirk;
        };
    // ####################################### Magic Items Table A
    const updateMME = () => {
        const mildeffect = randomSelect(mildeffects);
        document.getElementById('mildeffect').textContent = mildeffect;
    };
    // ####################################### Magic Items Table A
    const updateMagicItemsA = () => {
        const magicItemAdescriptor = randomSelect(magicitemsA);
        document.getElementById('magicItemAdescriptor').textContent = magicItemAdescriptor;
    };
    // ####################################### Magic Items Table B
    const updateMagicItemsB = () => {
        const magicItemBdescriptor = randomSelect(magicitemsB);
        document.getElementById('magicItemBdescriptor').textContent = magicItemBdescriptor;
    };
    // ####################################### Magic Items Table C
    const updateMagicItemsC = () => {
        const magicItemCdescriptor = randomSelect(magicitemsC);
        document.getElementById('magicItemCdescriptor').textContent = magicItemCdescriptor;
    };
    // ####################################### Magic Items Table D
    const updateMagicItemsD = () => {
        const magicItemDdescriptor = randomSelect(magicitemsD);
        document.getElementById('magicItemDdescriptor').textContent = magicItemDdescriptor;
    };
    // ####################################### Magic Items Table E
    const updateMagicItemsE = () => {
        const magicItemEdescriptor = randomSelect(magicitemsE);
        document.getElementById('magicItemEdescriptor').textContent = magicItemEdescriptor;
    };
    // ####################################### Magic Items Table F
    const updateMagicItemsF = () => {
        const magicItemFdescriptor = randomSelect(magicitemsF);
        document.getElementById('magicItemFdescriptor').textContent = magicItemFdescriptor;
    };
    // ####################################### Magic Items Table G
    const updateMagicItemsG = () => {
        const magicItemGdescriptor = randomSelect(magicitemsG);
        document.getElementById('magicItemGdescriptor').textContent = magicItemGdescriptor;
    };
    // ####################################### Magic Items Table H
    const updateMagicItemsH = () => {
        const magicItemHdescriptor = randomSelect(magicitemsH);
        document.getElementById('magicItemHdescriptor').textContent = magicItemHdescriptor;
    };
    // ####################################### Magic Items Table I
    const updateMagicItemsI = () => {
        const magicItemIdescriptor = randomSelect(magicitemsI);
        document.getElementById('magicItemIdescriptor').textContent = magicItemIdescriptor;
    };
    // ####################################### Treasure_Hoard_0-4
    const updateTreasure04= () => {
       const fixedstring = "6d6x100 copper pieces, 3d6x100 silver pieces, 2d6x10 gold pieces";
       const processedCoins = processCoins(fixedstring);
       const treasurehoard04description = randomSelect(treasurehoard04);
       const processedTreasure = processTreasure(treasurehoard04description);
       document.getElementById('treasurehoard04description').innerHTML = processedCoins + "<br>" + processedTreasure;
       //console.log(treasurehoard04description, document.getElementById('treasurehoard04description').innerHTML);
    }
    // ####################################### Treasure_Hoard_5-10
    const updateTreasure510= () => {
        const fixedstring = "2d6x100 copper pieces, 2d6x1000 silver pieces, 6d6x100 gold pieces and 3d6x10 platinum pieces";
        const processedCoins = processCoins(fixedstring);
        const treasurehoard510description = randomSelect(treasurehoard510);
        const processedTreasure = processTreasure(treasurehoard510description);
        document.getElementById('treasurehoard510description').innerHTML = processedCoins + "<br>" + processedTreasure;
        //console.log(treasurehoard510description, document.getElementById('treasurehoard510description').innerHTML);
     }
    // ####################################### Treasure_Hoard_11-16
    const updateTreasure1116= () => {
        const fixedstring = "4d6x1000 gold pieces and 5d6x100 platinum pieces";
        const processedCoins = processCoins(fixedstring);
        const treasurehoard1116description = randomSelect(treasurehoard1116);
        console.log(treasurehoard1116description);
        const processedTreasure = processTreasure(treasurehoard1116description);
        document.getElementById('treasurehoard1116description').innerHTML = processedCoins + "<br>" + processedTreasure;
        console.log(treasurehoard1116description, document.getElementById('treasurehoard1116description').innerHTML);
     }
    // ####################################### Treasure_Hoard_17
    const updateTreasure17= () => {
        const fixedstring = "12d6x1000 gold pieces and 8d6x100 platinum pieces";
        const processedCoins = processCoins(fixedstring);
        const treasurehoard17description = randomSelect(treasurehoard17);
        console.log(treasurehoard17description);
        const processedTreasure = processTreasure(treasurehoard17description);
        document.getElementById('treasurehoard17description').innerHTML = processedCoins + "<br>" + processedTreasure;
        console.log(treasurehoard17description, document.getElementById('treasurehoard17description').innerHTML);
     }

    // ####################################### Foods
    const updateFood = () => {
        const FoodsLister = randomSelect(foods);
        document.getElementById('FoodsLister').textContent = FoodsLister;
    };
    // ####################################### Drinks
    const updateDrinks = () => {
        const DrinksLister = randomSelect(drinks);
        document.getElementById('DrinksLister').textContent = DrinksLister;
    };
    // ####################################### Books
    const updateBooks = () => {
        let book_descr = "";
        book_descr += `This book is about <strong>${randomSelect(booktheme).trim()}</strong>.`;
        book_descr += `This book cover is <strong>${randomSelect(bookcover).trim()}</strong>`;
        book_descr += `The book is <strong>${randomSelect(bookcondition).trim()}</strong>`;
        book_descr += `The book is <strong>${randomSelect(bookauthors).trim()}</strong>`;
        document.getElementById('book_descr').innerHTML = book_descr;
    };
    // ####################################### TRAPS
    const updateIndirectTraps = () => {
        const indirect_trap = `${randomSelect(ind_trap).trim()}.`;
        document.getElementById('indirect_trap').innerHTML = indirect_trap;
    };
    const updateOptTraps = () => {
        const optional_trapdescr = `${randomSelect(trap_options).trim()}.`;
        document.getElementById('optional_trapdescr').innerHTML = optional_trapdescr;
    };
    const updateMechanicalTraps = () => {
        let mechanical_trapdescr = "";
        mechanical_trapdescr += `<strong>This trap is triggered by:</strong> ${randomSelect(mech_source).trim()}.<br>`;
        mechanical_trapdescr += `<strong>The player notices:</strong> ${randomSelect(mech_trigger).trim()}.<br>`;
        mechanical_trapdescr += `<strong>What happens is:</strong> ${randomSelect(mechanical_trap).trim()}.`;
        document.getElementById('mechanical_trapdescr').innerHTML = mechanical_trapdescr;
    };
    const updateArcaneTraps = () => {
        let arcane_trapdescr = "";
        arcane_trapdescr += `<strong>This trap is triggered by:</strong> ${randomSelect(arcane_source).trim()}.<br>`;
        arcane_trapdescr += `<strong>The player notices:</strong> ${randomSelect(arcane_trigger).trim()}.<br>`;
        arcane_trapdescr += `<strong>What happens is:</strong> ${randomSelect(arcane_trap).trim()}.`;
        document.getElementById('arcane_trapdescr').innerHTML = arcane_trapdescr;
    };
    // ####################################### Key Events
    const updateFramingEvents = () => {
        const key_event_Description = `${randomSelect(framingevents).trim()}`;
        document.getElementById('key_event_Description').innerHTML = key_event_Description;
    };
    // ####################################### Trinkets
    const updateTrinkets = () => {
        const trinketsdescription = `${randomSelect(trinket_table).trim()}.`;
        document.getElementById('trinketsdescription').innerHTML = trinketsdescription;
    }; 
    // ####################################### Encounters
    const updateUrbanEncounter = () => {
        const urbanencounterDescription = `${randomSelect(urbanencounter).trim()}`;
        document.getElementById('urbanencounterDescription').innerHTML = urbanencounterDescription;
    }; 
    const updatevillageEncounter = () => {
        const villageencounterDescription = `${randomSelect(village_enc).trim()}`;
        document.getElementById('villageencounterDescription').innerHTML = villageencounterDescription;
    }; 
    const updatenoncombatEncounter = () => {
        const noncombatencounterDescription = `${randomSelect(noncombatencounter).trim()}`;
        document.getElementById('noncombatencounterDescription').innerHTML = noncombatencounterDescription;
    }; 
    const updategrasslandEncounter = () => {
        const grasslandencounterDescription = `${randomSelect(grassland_enc).trim()}`;
        document.getElementById('grasslandencounterDescription').innerHTML = grasslandencounterDescription;
    }; 
    const updateforestEncounter = () => {
        const forestencounterDescription = `${randomSelect(forest_enc).trim()}`;
        document.getElementById('forestencounterDescription').innerHTML = forestencounterDescription;
    }; 
    const updatejungleEncounter = () => {
        const jungleencounterDescription = `${randomSelect(jungle_enc).trim()}`;
        document.getElementById('jungleencounterDescription').innerHTML = jungleencounterDescription;
    }; 
    const updatemountainEncounter = () => {
        const mountainencounterDescription = `${randomSelect(mountain_enc).trim()}`;
        document.getElementById('mountainencounterDescription').innerHTML = mountainencounterDescription;
    }; 
    const updatefeywildEncounter = () => {
        const feywildencounterDescription = `${randomSelect(feywild_enc).trim()}`;
        document.getElementById('feywildencounterDescription').innerHTML = feywildencounterDescription;
    }; 

    // ####################################### Generic Buildings
    const updateGenericBuildings = async () => {
        const buildingType = randomSelect(generic_toplevel).trim();
        let buildingDescription;

        // Use if-else statements to determine the description based on the building type
        if (buildingType === "Residence") {
            genericbuildingDescription = `<strong>The residence in front of you is</strong> ${randomSelect(generic_residence)}`;
        } else if (buildingType === "Religious") {
            genericbuildingDescription = `<strong>The religious building in front of you is</strong> ${randomSelect(generic_temple)}`;
        } else if (buildingType === "Tavern") {
            genericbuildingDescription = `There is a tavern ahead. <br>${generateInns()}`;
        } else if (buildingType === "Shop") {
            genericbuildingDescription = `There is a shop ahead. <br>${generateShops()}`;
        } else if (buildingType === "Warehouse") {
            genericbuildingDescription = `<strong>The Warehouse in front of you</strong> ${randomSelect(generic_warehouse)}`;
        } else {
            console.error("Unknown building type:", buildingType);
            genericbuildingDescription = "Unknown building type.";
        }
    
        // Update the HTML with the generated description
        document.getElementById('genericbuildingDescription').innerHTML = genericbuildingDescription;
    };
    // ####################################### Simple Quests
    const updateSimpleQuests = async () => {
        const simpleQDescription = `${randomSelect(simplequests).trim()}`;
        document.getElementById('simpleQDescription').innerHTML = simpleQDescription;
    };
    // ####################################### Complex Quests
    const updateComplexQ = async () => {
        let complexQDescription;
        complexQDescription = `A ${randomSelect(complexQappearance).trim()} ${generateNPC(false, true, true, false, false).replace(/\./g, '')} ${randomSelect(complexQstatus).trim()} approaches.<br>`;
        selectedAction = randomSelect(complexQgoal);
        if (selectedAction.includes("(NPC)")) {
            type = "NPC";
            selecteddescription = randomSelect(complexQnpcs);
        } else if (selectedAction.includes("(object)")) {
            type = "object";
            selecteddescription = randomSelect(complexQobjects);
        } else if (selectedAction.includes("(location)")) {
            type = "location";
            selecteddescription = randomSelect(complexQlocations);
        }
        complexQDescription += `They ask you/the party for your aid to <strong>${selectedAction.replace(" (" + type + ")", "")}${selecteddescription.trim()}</strong>.<br>`;
        complexQDescription += `However, <strong>${randomSelect(complexQtwists).trim()}</strong><br>`
        complexQDescription += `They promise <strong>${randomSelect(complexQloot).trim().replace(/\./g, '')}</strong> in return for your help, but it must be done by <strong>${randomSelect(complexQtimelimit).trim()}</strong> and with <strong>${randomSelect(complexQrestrictions).trim()}</strong>.<br>`

        document.getElementById('complexQDescription').innerHTML = complexQDescription;
    }
    // ####################################### CITIES
    const updateCities = async () => {
        let city_Description;
        city_Description = `The city grew up around...<strong>${randomSelect(citygeography).trim()}</strong><br>`;
        city_Description += `The city is near a region ideal for mining, growing, or grazing...<strong>${randomSelect(cityresources).trim()}</strong><br>`;
        city_Description += `The city is known for its...<strong>${randomSelect(cityculture).trim()}</strong><br>`;
        city_Description += `The city is ruled by...<strong>${randomSelect(citygovernment).trim()}</strong><br>`;
        city_Description += `The city experienced...<strong>${randomSelect(cityhistory).trim()}</strong><br>`;
        city_Description += `The people of the city are fearful of (leaders and commonfolk may fear different things)...<strong>${randomSelect(citythreats).trim()}</strong><br>`;
        
        city_Description += `The city is defended by...<strong>${randomSelect(citydefense).trim()}</strong><br>`;
        city_Description += `The laws are...<strong>${randomSelect(citylaw).trim()}</strong><br>`;
        city_Description += `Within or outside the government, power is held by...<strong>${randomSelect(cityplayers).trim()}</strong><br>`;
        city_Description += `You see a/an...<strong>${randomSelect(citylandmark).trim()}</strong><br>`;
        city_Description += `This part of the city is the...<strong>${randomSelect(citydistrict).trim()}</strong><br>`;
        city_Description += `The locals call this street...<strong>${randomSubtable(randomSelect(citystreetnames).trim()).split('. ')[1]}</strong><br>`;
        
        document.getElementById('city_Description').innerHTML = city_Description;
    };
    // ####################################### DUNGEONS
    const updateDungeons = async () => {
        let dungeonDescription;
        dungeonclassus = randomSelect(dungeonclass).trim();
        const dungeonrooms = await csvToTable(`tables/dungeon_${dungeonclassus}.txt`);
        console.log(dungeonrooms);
        dungeonDescription = `This dungeon is a <strong>${dungeonclassus}</strong>.<br>`;

        // Dungeon Generator
        const canvas = document.getElementById('dungeonCanvas');
        const context = canvas.getContext('2d');
        // Clear previous drawing
        context.clearRect(0, 0, canvas.width, canvas.height);
        // Generate and draw new dungeon
        const dungeonData = generateDungeon(GRID_WIDTH, GRID_HEIGHT);
        // Now dungeonData is an object like { grid: [...], passageways: [...] }
        const { grid, passageways } = dungeonData;
        drawDungeon(grid, canvas);

        // Generate a description for each passageway
        let passageDescriptionHTML = passageways.map(pw => {
            const desc = randomSelect(dungeonpassageways).trim();
            return `<strong>Passageway #${pw.id}</strong> – ${desc}`;
        }).join('<br>');

        // Generate a description for each room based on allRooms (global array)
        let roomDescriptionHTML = allRooms.map(room => {
            const roomContent = randomSelect(dungeonroomcontent).trim();
            console.log(roomContent);
            let finalRoomContent = roomContent;
            if (roomContent === "Dungeon hazard") {
                const hazard = randomSelect(dungeonhazards).trim();
                finalRoomContent = hazard;
              }
            const desc = `${randomSelect(dungeonrooms).trim()}. The state of this room is best described as: ${randomSelect(dungeonchamberstate).trim()}. The room contains: ${finalRoomContent}.`;
            return `<strong>Room #${room.id}</strong> – ${desc}`;
        }).join('<br>');       

        dungeonDescription += `<br><br><strong>Room Descriptions:</strong><br>${roomDescriptionHTML}<br><br>
        <strong>Passage Descriptions:</strong><br>${passageDescriptionHTML}`;
        document.getElementById('dungeonDescription').innerHTML = dungeonDescription;
    }
    // ####################################### ####################################### #######################################
    // ####################################### ####################################### Functionality
    // ####################################### Update Everything Function
    const update_all = () => {
        updateYesNoSection();
        updateNPCmood();
        updateNPCSection();
        updateInns();
        updateMagicItemsA();
        updateitemquirks();
        updateMME();
        updateShops();
        updateMagicItemsB();
        updateMagicItemsC();
        updateMagicItemsD();
        updateMagicItemsE();
        updateMagicItemsF();
        updateMagicItemsG();
        updateMagicItemsH();
        updateMagicItemsI();
        updateFood();
        updateDrinks();
        updateBooks();
        updateIndirectTraps();
        updateMechanicalTraps();
        updateOptTraps();
        updateArcaneTraps();
        updateFramingEvents();
        updateTrinkets();
        updateUrbanEncounter();
        updatevillageEncounter();
        updategrasslandEncounter();
        updateforestEncounter();
        updatemountainEncounter();
        updatejungleEncounter();
        updatenoncombatEncounter();
        updateGenericBuildings();
        updateSimpleQuests();
        updateComplexQ();
        updateCities();
        updateImmersion();
        updateTreasure04();
        updateTreasure510();
        updateTreasure1116();
        updateTreasure17();
        updatefeywildEncounter();
        updateDungeons();

    };
    // ####################################### Creating clickable D20
    // Add event listeners to all d20 buttons within sections
    document.querySelectorAll('.section-d20-button').forEach(button => {
        button.addEventListener('click', update_all);
    });
     // ####################################### Randomize all button
    document.getElementById('randomizeButton').addEventListener('click', update_all);
    // ####################################### Randomize on page load
    update_all();
    // ####################################### TOGGLE VISIBILITES
    // Toggle content visibility for categories
    document.querySelectorAll('.category h2').forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            content.classList.toggle('show');
            content.style.display = content.classList.contains('show') ? 'block' : 'none';
        });
    });
    // Toggle content visibility for sections within categories
    document.querySelectorAll('.category-content h3').forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            content.classList.toggle('show');
            content.style.display = content.classList.contains('show') ? 'block' : 'none';
        });
    });
    // Toggle content visibility for simple things 
    document.querySelectorAll('.section h2').forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            content.classList.toggle('show');
            content.style.display = content.classList.contains('show') ? 'block' : 'none';
        });
    });
});
