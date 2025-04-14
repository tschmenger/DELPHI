/**
 * Fetch CSV file and parse it into an array of objects.
 * @param {string} path - The path to the CSV file.
 * @returns {Promise<Array>} - A promise that resolves to an array of objects.
 */
async function csvToTable(path) {
    const response = await fetch(path);
    const text = await response.text();
    const rows = text.split('\n').map(row => row.split(';'));
    // console.log("Parsed Rows:", rows);
    const table = [];
    rows.forEach(row => {
        const [range, value] = row;
        if (range.includes('–')) {
            // Handle ranges like "01–50"
            const [start, end] = range.split('–').map(Number);
            const count = end - start + 1;
            table.push({ weight: count, value });
        } else {
            // Handle single values like "99" or "00"
            table.push({ weight: 1, value });
        }
    });
    // Debug: Log the constructed table
    // console.log("Constructed Table:", table);
    return table;
}
/**
 * Randomly select an item from the table based on weights.
 * @param {Array} table - The table of objects with weights and values.
 * @returns {string} - The randomly selected value.
 */

function randomSelect(table) {
    const totalWeight = table.reduce((sum, item) => sum + item.weight, 0);
    // console.log("Total Weight:", totalWeight);
    if (totalWeight === 0) return null; // Avoid division by zero
    const random = Math.floor(Math.random() * totalWeight);
    let upto = 0;
    for (const item of table) {
        if (upto + item.weight >= random) {
            return item.value;
        }
        upto += item.weight;
    }
    return null; 
}
// Function to roll a dice for subtables
function randomSubtable(line) {
const diceMatch = line.match(/\(d(\d+)\)/);
if (!diceMatch) {
    console.warn("No dice roll found; returning full line.");
    return line;
}
const diceCount = parseInt(diceMatch[1], 10);
const colonIndex = line.indexOf('):');
if (colonIndex === -1) {
    console.error("Could not find the expected colon separator in the line.");
    return line;
}
// Extract the substring after the "):" marker.
const itemsStr = line.substring(colonIndex + 2).trim();
// Split the string by commas
const items = itemsStr.split(/\s*,\s*/);
// Check if the number of items matches the expected dice count (optional).
if (items.length !== diceCount) {
    console.warn(`Expected ${diceCount} items but found ${items.length}. Using available items.`);
}
// Randomly select one
const randomIndex = Math.floor(Math.random() * items.length);
return items[randomIndex].trim();
}
