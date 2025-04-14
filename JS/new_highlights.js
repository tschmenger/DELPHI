function applyNewHighlights() {
    // Configuration object with keys for each header to highlight
    // For each key, specify:
    // - selector: "h2" or "h3" (depending on your element type)
    // - text: a substring that should appear in the header's textContent
    const newHighlights = {
      // toolkit: { selector: 'h2', text: 'DM Tools' },
      // immersion: { selector: 'h3', text: 'Immersion' },
    // yesno: { selector: 'h3', text: 'Yes/No' },
    //   npcs_category: { selector: 'h2', text: 'NPCs' },
    //   simple_npc_moods: { selector: 'h3', text: 'Simple NPC moods' },
    //   npcs_section: { selector: 'h3', text: 'NPCs' },
    worldbuilder_V2: { selector: 'h2', text: 'Worldbuilding' },
    //   key_events: { selector: 'h3', text: 'Key Events' },
    // cities: { selector: 'h3', text: 'Cities' },
    // simple_quests: { selector: 'h3', text: 'Simple quests' },
    // complex_quests: { selector: 'h3', text: 'Complex quests' },
     encounters_20250414: { selector: 'h2', text: 'Encounters' },
    // urban_encounters: { selector: 'h3', text: 'Urban Encounters' },
    // village_encounters: { selector: 'h3', text: 'Village Encounters' },
    // grassland_encounters: { selector: 'h3', text: 'Grassland Encounters' },
    // forest_encounters: { selector: 'h3', text: 'Forest Encounters' },
    // mountain_encounters: { selector: 'h3', text: 'Mountain Encounters' },
    // jungle_encounters: { selector: 'h3', text: 'Jungle Encounters' },
    // nc_encounters: { selector: 'h3', text: 'Non-Combat Encounters' },
    // feywild_encounters: { selector: 'h3', text: 'Feywild Encounters' }
       mausritter_encounters_V2: { selector: 'h3', text: 'Mausritter Encounters' },
    //  buildings: { selector: 'h2', text: 'Buildings' },
    //  generic_buildings: { selector: 'h3', text: 'What building?' },
    //   taverns: { selector: 'h3', text: 'Taverns' },
    //   shops: { selector: 'h3', text: 'Shops' },
    //   foods: { selector: 'h2', text: 'Foods' },
    //   drinks: { selector: 'h2', text: 'Drinks' },
    //   traps: { selector: 'h2', text: 'Traps' },
    //   indirect_traps: { selector: 'h3', text: 'Indirect Traps' },
    //   trap_options: { selector: 'h3', text: 'Trap Options' },
    //   mechanical_traps: { selector: 'h3', text: 'Mechanical Traps' },
    //   arcane_traps: { selector: 'h3', text: 'Arcane Traps' },
    //  items: { selector: 'h2', text: 'Items' },
    //   item_quirks: { selector: 'h3', text: 'Item Quirks' },
    //   mild_magic_effects: { selector: 'h3', text: 'Mild magic effects on the player' },
    // books: { selector: 'h3', text: 'Books' },
    // loot: { selector: 'h2', text: 'Loot' },
    // trinkets: { selector: 'h3', text: 'Trinkets' },
    // hoard_04: {selector: 'h3', text: 'Treasure Hoard Challenge Rating 0-4'},
    // hoard_510: {selector: 'h3', text: 'Treasure Hoard Challenge Rating 5-10'},
    // hoard_1116: {selector: 'h3', text: 'Treasure Hoard Challenge Rating 11-16'},
    // hoard_17: {selector: 'h3', text: 'Treasure Hoard Challenge Rating 17+'}
    //   magic_items_a: { selector: 'h3', text: 'Magic Items Table A' },
    //   magic_items_b: { selector: 'h3', text: 'Magic Items Table B' },
    //   magic_items_c: { selector: 'h3', text: 'Magic Items Table C' },
    //   magic_items_d: { selector: 'h3', text: 'Magic Items Table D' },
    //   magic_items_e: { selector: 'h3', text: 'Magic Items Table E' },
    //   magic_items_f: { selector: 'h3', text: 'Magic Items Table F' },
    //   magic_items_g: { selector: 'h3', text: 'Magic Items Table G' },
    //   magic_items_h: { selector: 'h3', text: 'Magic Items Table H' },
    //   magic_items_i: { selector: 'h3', text: 'Magic Items Table I' }
    dungeonsgenerating_V2: { selector: 'h3', text: "Dungeons"}
    };
  
    // Retrieving which highlights the user has already seen from localStorage
    const seenHighlights = JSON.parse(localStorage.getItem("seenHighlights")) || {};
  
    // Loop over each configuration entry.
    Object.entries(newHighlights).forEach(([key, { selector, text }]) => {
      // Only process if this header hasn't been acknowledged yet
      if (!seenHighlights[key]) {
        // Get all elements matching the selector (h2 / h3)
        const elements = Array.from(document.querySelectorAll(selector));
        // Find the first element whose text includes the specified substring
        const targetElement = elements.find(el => el.textContent.includes(text));
  
        if (targetElement) {
          // Create a "NEW" badge
          const newBadge = document.createElement("span");
          newBadge.classList.add("new-badge");
          newBadge.textContent = " NEW";
          targetElement.appendChild(newBadge);
  
          // When the header is clicked, mark this highlight as seen and remove the badge
          targetElement.addEventListener("click", () => {
            seenHighlights[key] = true;
            localStorage.setItem("seenHighlights", JSON.stringify(seenHighlights));
            newBadge.remove();
        });
    }
  }
});
}

document.addEventListener("DOMContentLoaded", applyNewHighlights);
