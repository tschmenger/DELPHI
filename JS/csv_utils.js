/**
 * Fetch CSV file and parse it into an array of objects.
 * @param {string} path - The path to the CSV file.
 * @returns {Promise<Array>} - A promise that resolves to an array of objects.
 */
async function csvToTable(path) {
    const response = await fetch(path);
    const text = await response.text();
    const rows = text.split('\n').map(row => row.split(';'));

    // Debug: Log the parsed rows
    // console.log("Parsed Rows:", rows);

    // const table = rows.map(row => ({ weight: parseInt(row[0]), value: row[1] }));
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

    // Debug: Log the total weight
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
    return null; // In case of any error
}
