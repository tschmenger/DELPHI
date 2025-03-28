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
    // ######### YesNo with impro
    const yesNoTable = await csvToTable('tables/YesNo.csv');
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
    // ######### Shops
    const shop_exterior = await csvToTable('tables/Shop_ext.txt');
    const shop_interior = await csvToTable('tables/Shop_int.txt');
    const shop_feature = await csvToTable('tables/Shop_feature.txt');
    const shop_keeper = await csvToTable('tables/Shop_keeper.txt');
    const shop_sale = await csvToTable('tables/Shop_sale.txt');
    const shop_secrets = await csvToTable('tables/Shop_secrets.txt');
    const shop_unusual = await csvToTable('tables/Shop_unusual.txt');
    const shop_events = await csvToTable('tables/Shop_events.txt');
    // ######### DMG tables
    const magicitemsA = await csvToTable('tables/MagicItemTableA.txt');
    const magicitemsB = await csvToTable('tables/MagicItemTableB.txt');
    const magicitemsC = await csvToTable('tables/MagicItemTableC.txt');
    const magicitemsD = await csvToTable('tables/MagicItemTableD.txt');
    const magicitemsE = await csvToTable('tables/MagicItemTableE.txt');
    const magicitemsF = await csvToTable('tables/MagicItemTableF.txt');
    const magicitemsG = await csvToTable('tables/MagicItemTableG.txt');
    const magicitemsH = await csvToTable('tables/MagicItemTableH.txt');
    const magicitemsI = await csvToTable('tables/MagicItemTableI.txt');
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
        tavernDescription += `<br><strong>You look around inside and notice:</strong><br>`;
        tavernDescription += `${randomSelect(Inn_interior)}<br>`;
        tavernDescription += `<br><strong>The bartender is a</strong> `;
        tavernDescription += generateNPC(false, true, true, false, false);
        tavernDescription += `<br>`;
        tavernDescription += `${randomSelect(Inn_services)}<br>`;
        tavernDescription += `<br><strong>You look around and see:</strong><br>`;
        tavernDescription += `${randomSelect(Inn_patrons)}<br>`;
        tavernDescription += `<br><strong>After staying for a while:</strong><br>`;
        tavernDescription += `${randomSelect(Inn_events)}<br>`;
        tavernDescription += `<br><strong>Further investigation unvocers:</strong><br>`;
        tavernDescription += `${randomSelect(Inn_hooks)}<br>`;
        return tavernDescription.trim();
    }
    const updateInns = () => {
        const tavernDescription = generateInns(); // Example parameters
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
        const shopDescription = generateShops(); // Example parameters
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
