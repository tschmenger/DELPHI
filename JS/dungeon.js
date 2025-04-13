// dungeon.js

// ===== Constants =====
const TILE_EMPTY = 0;
const TILE_ENTRANCE = 1;
const TILE_PASSAGE = 2;
const TILE_ROOM = 3;

// Colors for rendering tile types
const TILE_COLORS = {
  [TILE_EMPTY]: '#ffffff',    // white for empty spaces
  [TILE_ENTRANCE]: '#00ff00',   // green for entrance
  [TILE_PASSAGE]: '#999999',    // gray for passage
  [TILE_ROOM]: '#cc9966'        // brownish for rooms
};

// Directions: up, right, down, left (dx, dy)
const DIRECTIONS = [
  { dx: 0,  dy: -1 }, // Up
  { dx: 1,  dy: 0  }, // Right
  { dx: 0,  dy: 1  }, // Down
  { dx: -1, dy: 0  }  // Left
];

// Grid dimensions (can be adjusted)
const GRID_WIDTH = 50;
const GRID_HEIGHT = 50;

// Global counters for indexing rooms and passages
let roomCounter = 1;
let passageCounter = 1;

// Arrays to store the room and passage objects (if needed later)
const allRooms = [];
const allPassages = [];

// ===== Helper Functions =====

// Create and initialize the grid as a 2D array filled with TILE_EMPTY.
function createGrid(width, height) {
  const grid = [];
  for (let y = 0; y < height; y++) {
    const row = [];
    for (let x = 0; x < width; x++) {
      row.push(TILE_EMPTY);
    }
    grid.push(row);
  }
  return grid;
}

// Check if (x, y) is within bounds and the tile is empty.
function isValidTile(grid, x, y) {
  return (
    x >= 0 && y >= 0 &&
    y < grid.length && x < grid[0].length &&
    grid[y][x] === TILE_EMPTY
  );
}

// ===== Generation Functions =====

// Place the entrance. (Here we place it on the left center edge.)
function placeEntrance(grid) {
  const x = 0;
  const y = Math.floor(grid.length / 2);
  grid[y][x] = TILE_ENTRANCE;
  return { x, y };
}

// Place a passage starting from (startX, startY) in the direction `dir`.
// It creates a passage of length 3-5 tiles and randomly decides to make an L-shaped turn.
// In placePassage, remove ID assignment:
function placePassage(grid, startX, startY, initDir) {
    const passageLength = Math.floor(Math.random() * 3) + 3; // length between 3 and 5
    let currentX = startX;
    let currentY = startY;
    const path = [];
    
    const lShape = Math.random() < 0.5; // 50% chance for an L-shape
    const turnPoint = lShape ? Math.floor(Math.random() * (passageLength - 1)) + 1 : passageLength;
    
    let dir = { ...initDir };
    let newDir = null;
    if (lShape) {
      newDir = Math.random() < 0.5
        ? { dx: -dir.dy, dy: dir.dx }
        : { dx: dir.dy, dy: -dir.dx };
    }
    
    for (let i = 0; i < passageLength; i++) {
      if (lShape && i === turnPoint) {
        dir = newDir;
      }
      
      currentX += dir.dx;
      currentY += dir.dy;
      
      if (!isValidTile(grid, currentX, currentY)) break;
      
      grid[currentY][currentX] = TILE_PASSAGE;
      path.push({ x: currentX, y: currentY });
    }
    
    return path;
  }
  

// Place a room adjacent to the attachment point (attachX, attachY) coming from `fromDir`.
// When checking collisions, we allow the attach tile even if it isn't empty.
function placeRoom(grid, attachX, attachY, fromDir) {
  const roomWidth = Math.floor(Math.random() * 3) + 5;  // widths: 5, 6, or 7
  const roomHeight = Math.floor(Math.random() * 3) + 5; // heights: 5, 6, or 7
  
  let startX = attachX;
  let startY = attachY;
  
  if (fromDir.dx === 1) { // Passage coming from left: extend to the right.
    startX = attachX;
    startY = attachY - Math.floor(roomHeight / 2);
  } else if (fromDir.dx === -1) { // Passage coming from right: extend left.
    startX = attachX - roomWidth + 1;
    startY = attachY - Math.floor(roomHeight / 2);
  } else if (fromDir.dy === 1) { // Passage coming from top: extend downward.
    startX = attachX - Math.floor(roomWidth / 2);
    startY = attachY;
  } else if (fromDir.dy === -1) { // Passage coming from bottom: extend upward.
    startX = attachX - Math.floor(roomWidth / 2);
    startY = attachY - roomHeight + 1;
  }
  
  for (let y = startY; y < startY + roomHeight; y++) {
    for (let x = startX; x < startX + roomWidth; x++) {
      if (x < 0 || y < 0 || y >= grid.length || x >= grid[0].length) {
        return null; // Out-of-bounds.
      }
      if (!(x === attachX && y === attachY) && grid[y][x] !== TILE_EMPTY) {
        return null; // Collision.
      }
    }
  }
  
  for (let y = startY; y < startY + roomHeight; y++) {
    for (let x = startX; x < startX + roomWidth; x++) {
      grid[y][x] = TILE_ROOM;
    }
  }
  
  const room = {
    startX,
    startY,
    roomWidth,
    roomHeight,
    attachX,
    attachY,
    id: roomCounter++  // assign a unique id to the room
  };
  
  allRooms.push(room);
  return room;
}

// Try to build a branch: place a passage and then a room at its end.
// If room placement fails, revert the passage.
function tryBranch(grid, startPoint, dir, initDir) {
    const passage = placePassage(grid, startPoint.x, startPoint.y, dir);
    if (passage.length === 0) return null;
    
    const branchEnd = passage[passage.length - 1];
    const newRoom = placeRoom(grid, branchEnd.x, branchEnd.y, initDir);
    if (!newRoom) {
      // Revert the passage if room placement fails.
      passage.forEach(pt => { grid[pt.y][pt.x] = TILE_EMPTY; });
      return null;
    }
    // Now that the branch is successful, assign an ID to the passage.
    passage.id = passageCounter++;
    allPassages.push(passage);
    return { passage, room: newRoom };
  }

// Branch from an existing room. Only add branches that connect the room to a new room.
function branchFromRoom(grid, room, initDir, maxBranches = 3) {
  const numBranches = Math.floor(Math.random() * maxBranches) + 1;
  const branches = [];
  const potentialPoints = [];
  
  for (let x = room.startX; x < room.startX + room.roomWidth; x++) {
    potentialPoints.push({ x, y: room.startY }); // Top
    potentialPoints.push({ x, y: room.startY + room.roomHeight - 1 }); // Bottom
  }
  for (let y = room.startY; y < room.startY + room.roomHeight; y++) {
    potentialPoints.push({ x: room.startX, y }); // Left
    potentialPoints.push({ x: room.startX + room.roomWidth - 1, y }); // Right
  }
  
  potentialPoints.sort(() => Math.random() - 0.5);
  
  let branchesCreated = 0;
  for (const point of potentialPoints) {
    if (branchesCreated >= numBranches) break;
    let dir = null;
    if (point.y === room.startY) {
      dir = { dx: 0, dy: -1 }; // Top
    } else if (point.y === room.startY + room.roomHeight - 1) {
      dir = { dx: 0, dy: 1 }; // Bottom
    } else if (point.x === room.startX) {
      dir = { dx: -1, dy: 0 }; // Left
    } else if (point.x === room.startX + room.roomWidth - 1) {
      dir = { dx: 1, dy: 0 }; // Right
    }
    const nextX = point.x + dir.dx;
    const nextY = point.y + dir.dy;
    if (!isValidTile(grid, nextX, nextY)) continue;
    
    const branchResult = tryBranch(grid, point, dir, initDir);
    if (branchResult) {
      branches.push(branchResult);
      branchesCreated++;
    }
  }
  return branches;
}

// Default fill range (e.g., medium)
let fillMin = 0.15;
let fillMax = 0.30;

// Event listeners for dungeon size buttons
document.getElementById("smallFill").addEventListener("click", () => {
  fillMin = 0.05;
  fillMax = 0.15;
});

document.getElementById("mediumFill").addEventListener("click", () => {
  fillMin = 0.15;
  fillMax = 0.30;
});

document.getElementById("largeFill").addEventListener("click", () => {
  fillMin = 0.45;
  fillMax = 0.60;
});

// Function to get fill percentage based on current range
function getRandomFillPercentage() {
    return Math.random() * (fillMax - fillMin) + fillMin;
}



// ===== Main Dungeon Generation =====
function generateDungeon(width, height) {
  allRooms.length = 0;
  allPassages.length = 0;
  roomCounter = 1;
  passageCounter = 1;
  const grid = createGrid(width, height);
  let tilesFilled = 0;
  
  const fillPercentage = getRandomFillPercentage();
  //const fillPercentage = 0.15;
  const maxTiles = Math.floor(width * height * fillPercentage);
  
  const entrance = placeEntrance(grid);
  tilesFilled++;
  
  const initDir = { dx: 1, dy: 0 };
  let initialPassage = [];
  let firstRoom = null;
  
  const maxAttempts = 10;
  let attempts = 0;
  while (!firstRoom && attempts < maxAttempts) {
    attempts++;
    initialPassage.forEach(pt => { grid[pt.y][pt.x] = TILE_EMPTY; });
    initialPassage = placePassage(grid, entrance.x, entrance.y, initDir);
    if (initialPassage.length === 0) continue;
    const lastTile = initialPassage[initialPassage.length - 1];
    firstRoom = placeRoom(grid, lastTile.x, lastTile.y, initDir);
    if (!firstRoom) {
      initialPassage.forEach(pt => { grid[pt.y][pt.x] = TILE_EMPTY; });
    } else {
      tilesFilled += initialPassage.length;
      tilesFilled += firstRoom.roomWidth * firstRoom.roomHeight;
    }
  }
  
  if (!firstRoom) {
    console.error("Failed to place initial room after", maxAttempts, "attempts.");
    return { grid, passageways: [] };
  }
  
  const roomList = [firstRoom];
  
  while (tilesFilled < maxTiles && roomList.length > 0) {
    const roomIndex = Math.floor(Math.random() * roomList.length);
    const currentRoom = roomList[roomIndex];
    
    const branches = branchFromRoom(grid, currentRoom, initDir, 3);
    let newTiles = 0;
    branches.forEach(branch => {
      newTiles += branch.passage.length;
      newTiles += branch.room.roomWidth * branch.room.roomHeight;
      roomList.push(branch.room);
    });
    if (newTiles === 0) {
      roomList.splice(roomIndex, 1);
    }
    tilesFilled += newTiles;
  }
  
 // console.log("Tiles filled:", tilesFilled, "Target:", maxTiles, "Fill percentage target:", fillPercentage);
 // console.log("Rooms:", allRooms);
 // console.log("Passages:", allPassages);

  const passageways = allPassages.map((pt, index) => ({
    id: index + 1,
    x: pt.x,
    y: pt.y
  }));

  return {grid, passageways };
}
// ===== Canvas Drawing =====
function drawDungeon(grid, canvas) {
    // if (!grid || grid.length === 0 || !grid[0]) {
    //     console.error("drawDungeon received an invalid grid:", grid);
    //     return;
    //   }
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  const rows = grid.length;
  const cols = grid[0].length;
  const cellWidth = canvas.width / cols;
  const cellHeight = canvas.height / rows;
  
  // First, draw each tile.
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const tile = grid[y][x];
      ctx.fillStyle = TILE_COLORS[tile] || TILE_COLORS[TILE_EMPTY];
      ctx.fillRect(x * cellWidth, y * cellHeight, cellWidth, cellHeight);
         // Add black border to non-empty tiles
      if (tile !== TILE_EMPTY) {
        ctx.strokeStyle = 'grey';
        ctx.lineWidth = 0.5;
        ctx.strokeRect(x * cellWidth, y * cellHeight, cellWidth, cellHeight);
      }
    }
  }
  // Then, overlay room IDs.
  ctx.font = `${Math.floor(cellWidth/1.0)}px Arial`;
  ctx.fillStyle = 'black';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  
  allRooms.forEach(room => {
    const cx = room.startX * cellWidth + (room.roomWidth * cellWidth) / 2;
    const cy = room.startY * cellHeight + (room.roomHeight * cellHeight) / 2;
    ctx.fillText(room.id, cx, cy);
  });
  
  // Optionally, label passages.
  allPassages.forEach(passage => {
    if (passage.length) {
      // Pick the middle cell as representative.
      const mid = passage[Math.floor(passage.length/2)];
      const cx = mid.x * cellWidth + cellWidth/2;
      const cy = mid.y * cellHeight + cellHeight/2;
      ctx.fillStyle = 'navy';
      ctx.fillText(passage.id, cx, cy);
    }
  });
}

// ===== Initialization =====
window.onload = () => {
  const canvas = document.getElementById('dungeonCanvas');
  const { grid, passageways } = generateDungeon(GRID_WIDTH, GRID_HEIGHT);
  // if (!grid || grid.length === 0 || !grid[0]) {
  //     console.error("Dungeon generation failed: grid is empty.", grid);
  //     return;
  //   }
  drawDungeon(grid, canvas);
};