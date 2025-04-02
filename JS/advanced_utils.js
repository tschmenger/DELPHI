const lootTables = {};
// Function to load tables.
async function loadTables() {
    lootTables.magicitemsA = await csvToTable('tables/MagicItemTableA.txt');
    lootTables.magicitemsB = await csvToTable('tables/MagicItemTableB.txt');
    lootTables.magicitemsC = await csvToTable('tables/MagicItemTableC.txt');
    lootTables.magicitemsD = await csvToTable('tables/MagicItemTableD.txt');
    lootTables.magicitemsE = await csvToTable('tables/MagicItemTableE.txt');
    lootTables.magicitemsF = await csvToTable('tables/MagicItemTableF.txt');
    lootTables.magicitemsG = await csvToTable('tables/MagicItemTableG.txt');
    lootTables.magicitemsH = await csvToTable('tables/MagicItemTableH.txt');
    lootTables.magicitemsI = await csvToTable('tables/MagicItemTableI.txt');
}
loadTables();

function rollDice(expression) {
  let match = expression.match(/(\d+)d(\d+)/); // Match XdY pattern
  if (!match) return expression; // Return as-is if no match

  let [_, num, sides] = match.map(Number); // Extract numbers
  let total = 0;
  for (let i = 0; i < num; i++) {
      total += Math.floor(Math.random() * sides) + 1; // Roll the dice
  }
  return total;
}

function processTreasure(lootString) {
  // Step 1: Replace dice roll for treasure amount
  lootString = lootString.replace(/(\d+d\d+ \(\d+\))/, (match) => {
      return rollDice(match.split(" ")[0]); // Only pass 'XdY' part to rollDice
  });
  lootString = lootString.replace(/^(\d+)\s+/, "$1x");
  lootString = lootString.replace(",", "<br>");
  // Step 2: Check for additional magic item rolls, supporting "once"
  lootString = lootString.replace(/(?:Roll\s+)?(?:and\s+)?(\d+d\d+|once)\s+times?\s+on\s+(magicitems\w+)/gi, (match, diceOrOnce, tableName) => {    
    let rolls = (diceOrOnce === "once") ? 1 : rollDice(diceOrOnce); // "once" is 1 roll
    if (!lootTables[tableName]) {
        console.error(`Error: Table '${tableName}' not found!`);
        return match; // Return the original text if table not found.
    }
    let results = [];
    for (let i = 0; i < rolls; i++) {
        let roll_result = randomSelect(lootTables[tableName]);
        results.push(roll_result.trim());
    }
    return results.join("<br>"); // Join extra items with a line break.
});

// Remove any trailing period.
lootString = lootString.replace(/\.$/, "");
return lootString;
}

function processCoins(coinString) {
  // Use a global regex to match dice patterns like "6d6x100"
  // It captures two groups: the dice expression and the multiplier.
  return coinString.replace(/(\d+d\d+)x(\d+)/g, (match, diceExpr, multiplierStr) => {
    const multiplier = parseInt(multiplierStr, 10);
    const diceResult = rollDice(diceExpr);
    const total = diceResult * multiplier;
    return total; // Replace the dice part with the computed total
  });
}