// Structure for game data
const gameDataSets = [
{
  "columnWords": ["reach", "mission", "artist"],
  "rowWords": ["officer", "couple", "test"],
  "correctAnswers": [
    ["baton", "case", "sketch"],
    ["marriage", "baby", "duet"],
    ["ace", "assessment", "pose"]
  ]
}
,
{
  "columnWords": ["ship", "show", "put"],
  "rowWords": ["front", "respect", "foot"],
  "correctAnswers": [
    ["bow", "streak", "display"],
    ["salute", "honor", "praise"],
    ["yard", "kick", "step"]
  ]
}
,
{
  "columnWords": ["base", "ball", "diamond"],
  "rowWords": ["time", "level", "place"],
  "correctAnswers": [
    ["start", "party", "proposal"],
    ["ground", "tie", "hard"],
    ["home", "hall", "finger"]
  ]
},
{
  "columnWords": ["action", "person", "type"],
  "rowWords": ["legal", "dress", "card"],
  "correctAnswers": [
    ["suit", "judge", "family"],
    ["uniform", "tailor", "tag"],
    ["charge", "license", "birthday"]
  ]
},
{
  "columnWords": ["stop", "drop", "roll"],
  "rowWords": ["take", "team", "fire"],
  "correctAnswers": [
    ["thief", "fall", "call"],
    ["defend", "cut", "roster"],
    ["water", "match", "hose"]
  ]
}
,
{
  "columnWords": ["spread", "spot", "play"],
  "rowWords": ["sweet", "tight", "band"],
  "correctAnswers": [
    ["honey", "perfect", "ace"],
    ["stretch", "bind", "close"],
    ["noise", "bar", "jam"]
  ]
}
,
{
  "columnWords": ["pile", "turn", "place"],
  "rowWords": ["snow", "sharp", "fund"],
  "correctAnswers": [
    ["bank", "slip", "mountain"],
    ["heap", "twist", "edge"],
    ["reserve", "crash", "chest"]
  ]
}
,
{
  "columnWords": ["lock", "center", "music"],
  "rowWords": ["open", "thrust", "note"],
  "correctAnswers": [
    ["pick", "plaza", "bar"],
    ["jam", "core", "beat"],
    ["seal", "pitch", "key"]
  ]
}
,
{
  "columnWords": ["food", "pain", "fast"],
  "rowWords": ["cut", "fly", "hold"],
  "correctAnswers": [
    ["dice", "sting", "slash"],
    ["fish", "bug", "buzz"],
    ["wait", "bear", "bite"]
  ]
}
,
{
  "columnWords": ["place", "bottom", "down"],
  "rowWords": ["sleep", "water", "settle"],
  "correctAnswers": [
    ["den", "bunk", "pillow"],
    ["isle", "bed", "thin"],
    ["lodge", "sink", "calm"]
  ]
}
,
{
  "columnWords": ["speed", "past", "sentence"],
  "rowWords": ["record", "present", "measure"],
  "correctAnswers": [
    ["log", "account", "write"],
    ["pace", "tense", "judge"],
    ["clock", "hand", "words"]
  ]
}
,
{
  "columnWords": ["side", "support", "hand"],
  "rowWords": ["rear", "offer", "join"],
  "correctAnswers": [
    ["back", "brief", "nanny"],
    ["proposal", "aid", "present"],
    ["align", "league", "shake"]
  ]
}
,
{
  "columnWords": ["shaft", "spot", "wind"],
  "rowWords": ["wood", "light", "toy"],
  "correctAnswers": [
    ["rod", "cabin", "reed"],
    ["beam", "focus", "draft"],
    ["figure", "chest", "clockwork"]
  ]
}
,
{
  "columnWords": ["content", "line", "ship"],
  "rowWords": ["desert", "air", "long"],
  "correctAnswers": [
    ["sand", "run", "camel"],
    ["peace", "fly", "mail"],
    ["epic", "wait", "boat"]
  ]
}
,
{
  "columnWords": ["object", "movie", "force"],
  "rowWords": ["close", "refuse", "control"],
  "correctAnswers": [
    ["shut", "credit", "grip"],
    ["waste", "cuts", "resist"],
    ["hold", "direct", "law"]
  ]
}
,
{
  "columnWords": ["sound", "feel", "down"],
  "rowWords": ["off", "tear", "wound"],
  "correctAnswers": [
    ["talk", "blue", "repel"],
    ["rip", "cry", "level"],
    ["gash", "smart", "eased"]
  ]
}
,
{
  "columnWords": ["affair", "dessert", "marker"],
  "rowWords": ["evening", "sweet", "time"],
  "correctAnswers": [
    ["Gala", "Nightcap", "Twilight"],
    ["Crush", "Pie", "Note"],
    ["Date", "Tea", "Watch"]
  ]
}

];

let maxAttempts = 3;
let currentAttempts = maxAttempts;
let currentMode = 'regular'; // Default mode is regular


function initializeHearts() {
		currentAttempts = maxAttempts;
    const heartsContainer = document.getElementById('heartsContainer');
    heartsContainer.innerHTML = '';

    for (let i = 0; i < maxAttempts; i++) {
        const heart = document.createElement('span');
        heart.classList.add('heart');
        heart.textContent = '❤️'; // If using emoji or text
        heartsContainer.appendChild(heart);
    }
}


// Function to randomly select a game data set
function getRandomGameData() {
    const randomIndex = Math.floor(Math.random() * gameDataSets.length);
    return gameDataSets[randomIndex];
}

let currentGameData; // Global variable to hold the current game's data


// Function to reset the current game
function resetGame() {
    initializeHearts();
    displayGameData(currentGameData); // This will create the tiles and grid
    unfreezeGame();
    setupDragAndDrop();
}

function setupDragAndDrop() {
    const tiles = document.querySelectorAll('.tile');
    const droppableCells = document.querySelectorAll('.droppable');

    // Add event listeners for both desktop and mobile interactions
    tiles.forEach(tile => {
        // Desktop Events
        tile.addEventListener('dragstart', handleDragStart);
        tile.addEventListener('dragend', handleDragEnd);

        // Mobile Events
        tile.addEventListener('touchstart', handleTouchStart, false);
        tile.addEventListener('touchend', handleTouchEnd, false);
    });

    droppableCells.forEach(cell => {
        // Highlight cell on drag over
        cell.addEventListener('dragover', handleDragOver);
        cell.addEventListener('dragenter', handleDragEnter);
        cell.addEventListener('dragleave', handleDragLeave);
        cell.addEventListener('drop', handleDrop);
    });
}

// Drag start event
function handleDragStart(event) {
    this.classList.add('dragging');
    // Optionally set the dataTransfer for desktop
    if (event.dataTransfer) {
        event.dataTransfer.setData('text/plain', this.id);
        event.dataTransfer.effectAllowed = 'move';
    }
    // Apply the "pick-up" effect
    this.style.transform = "scale(1.1)";
}

// Drag end event
function handleDragEnd(event) {
    this.classList.remove('dragging');
    this.style.transform = ""; // Reset the "pick-up" effect
    resetDragState();
}

// Drag over event
function handleDragOver(event) {
    event.preventDefault(); // Allow drop
    event.dataTransfer.dropEffect = 'move';
}

// Drag enter event
function handleDragEnter(event) {
        this.classList.add('drag-over');
    
}

// Drag leave event
function handleDragLeave(event) {
    this.classList.remove('drag-over');
}

// Drop event
function handleDrop(event) {
    event.preventDefault();
    const draggedElement = document.querySelector('.dragging');
    performDrop(draggedElement, this);
    resetDragState();
}

// Touch start event
function handleTouchStart(event) {
    event.preventDefault();
    this.classList.add('dragging');
    // Mimic "pick-up" effect for touch devices
    this.style.transform = "scale(1.1)";
    window.draggedElement = this; // Track the element being dragged
}

// Touch end event
function handleTouchEnd(event) {
    event.preventDefault();
    // Attempt to find a drop target
    const touchLocation = event.changedTouches[0];
    const dropTarget = document.elementFromPoint(touchLocation.clientX, touchLocation.clientY);

    if (dropTarget && dropTarget.classList.contains('droppable')) {
        performDrop(window.draggedElement, dropTarget);
    }
    resetDragState();
    window.draggedElement.style.transform = ""; // Reset "pick-up" effect
    window.draggedElement = null; // Clear reference
}

// Perform the drop
function performDrop(draggedElement, targetCell) {
    if (targetCell && !targetCell.querySelector('.tile')) {
        targetCell.appendChild(draggedElement);
        draggedElement.classList.remove('dragging');
    }
    // Reset the visual feedback of all cells
    document.querySelectorAll('.droppable').forEach(cell => cell.classList.remove('drag-over'));
}

// Reset drag state
function resetDragState() {
    document.querySelectorAll('.dragging').forEach(tile => {
        tile.classList.remove('dragging');
        tile.style.transform = ""; // Reset the "pick-up" effect
    });
    document.querySelectorAll('.drag-over').forEach(cell => cell.classList.remove('drag-over'));
}

// Attach these functions to the dragenter and dragleave events
document.querySelectorAll('.droppable').forEach(cell => {
cell.addEventListener('dragenter', handleDragEnter);
cell.addEventListener('dragleave', handleDragLeave);
});


function handleDrop(event) {
    const gameContainer = document.getElementById('game-container');
    if (gameContainer.contains(event.target)) {
        event.preventDefault();
        var draggedElement = document.querySelector('.dragging');

        // Ensure the target is a cell and it does not have the 'locked' class
        if (draggedElement && event.target.classList.contains('droppable') && !event.target.classList.contains('locked')) {
            // Append the tile to the cell or handle the drop logic
            event.target.appendChild(draggedElement);
            event.target.classList.remove('drag-over');
        }
    }
}






// Function to display game data
function displayGameData(gameData) {
    gameData.clues = gameData.correctAnswers.flat().sort(() => Math.random() - 0.5);
    generateGrid(gameData.columnWords, gameData.rowWords);
    generateTiles(gameData.clues);
}

let activeTile = null; // Keep track of the tile being dragged




function endDrag() {
    if (activeTile) {
        activeTile.classList.remove('dragging');
        activeTile = null;
    }
}


// Function to generate the game grid
function generateGrid(columnWords, rowWords) {
  const grid = document.getElementById('grid');

   let html = '<div class="cell top-left-cell"></div>'; // Top left cell
  
  // Loop through column words to add column headings
  columnWords.forEach((word, colIndex) => {
    // Add column heading with an ID for easier selection
    html += `<div class="cell heading" id="col-${colIndex}">${word}</div>`;
  });

  // Loop through row words to add row headings and grid cells
  rowWords.forEach((rowWord, rowIndex) => {
    // Add row heading
    html += `<div class="cell heading" id="row-${rowIndex}">${rowWord}</div>`;
    
    // Loop through column words to add grid cells for each row
    columnWords.forEach((colWord, colIndex) => {
      // Add grid cell with data-row and data-col attributes
      html += `<div class="cell droppable" data-row="${rowIndex}" data-col="${colIndex}" ondrop="drop(event)" ondragover="allowDrop(event)"></div>`;
    });	
  });

  // Set the innerHTML of the grid
  grid.innerHTML = html;

}



// Function to generate the clue tiles
function generateTiles(clues) {
    const tilesContainer = document.getElementById('tiles');
    tilesContainer.innerHTML = clues.map((clue, index) => 
        `<div class="tile" draggable="true" id="tile-${index}">${clue}</div>`
    ).join('');
}

function allowDrop(ev) {
    ev.preventDefault();
}


function drag(ev) {
ev.dataTransfer.setData('text', ev.target.id);

}


function drop(ev, dropTargetElement) {
    ev.preventDefault();

    let draggedTile;

    // Check if the event is from a touch event or a drag event
    if (ev.dataTransfer) {
        // Drag event
        const draggedTileId = ev.dataTransfer.getData('text/plain');
        draggedTile = document.getElementById(draggedTileId);
    } else if (ev.detail && ev.detail.touchedElement) {
        // Touch event
        draggedTile = ev.detail.touchedElement;
    }
		
		draggedTile.classList.remove('clue-correct', 'clue-partial', 'clue-incorrect');

    // If there's no tile to be dropped, exit the function
    if (!draggedTile) return;

    let target = dropTargetElement || ev.target; // Use provided drop target for touch events

    // The rest of your logic remains the same
    if (target.classList.contains('tile') && target.parentNode.classList.contains('cell')) {
        swapTiles(target.parentNode, draggedTile);
    } else if (target.classList.contains('droppable') && !target.firstChild) {
        target.appendChild(draggedTile);
    } else if (target.classList.contains('tile') && target.parentNode.id === 'tiles') {
        shuffleTilesInContainer(target, draggedTile);
    } else if (target.id === 'tiles') {
        document.getElementById('tiles').appendChild(draggedTile);
    } else if (target.classList.contains('droppable') && target.firstChild && target.firstChild !== draggedTile) {
        swapTiles(target, draggedTile);
    }
}


function swapTiles(targetCell, draggedTile) {
		targetCell.firstChild.classList.remove('clue-correct', 'clue-partial', 'clue-incorrect');
		draggedTile.classList.remove('clue-correct', 'clue-partial', 'clue-incorrect');

    // Get the parent cell (or container) of the dragged tile
    const draggedTileParent = draggedTile.parentNode;

    // Check if the dragged tile is coming from another cell or from the tiles container
    if (draggedTileParent.classList.contains('cell')) {
        // If dragged from a cell, swap the tiles
        targetCell.appendChild(draggedTile);
        draggedTileParent.appendChild(targetCell.firstChild);
    } else {
        // If dragged from the tiles container, move the target tile to the container and the dragged tile to the cell
        document.getElementById('tiles').appendChild(targetCell.firstChild);
        targetCell.appendChild(draggedTile);
    }
}


function shuffleTilesInContainer(targetTile, draggedTile) {

    const tilesContainer = document.getElementById('tiles');
    if (draggedTile !== targetTile) {
        // Find the index of the targetTile and draggedTile
        const targetIndex = Array.from(tilesContainer.children).indexOf(targetTile);
        const draggedIndex = Array.from(tilesContainer.children).indexOf(draggedTile);

        if (targetIndex > draggedIndex) {
            // If the target tile is after the dragged tile, insert the dragged tile before the target tile
            tilesContainer.insertBefore(draggedTile, targetTile.nextSibling);
        } else {
            // If the target tile is before the dragged tile, insert the dragged tile before the target tile
            tilesContainer.insertBefore(draggedTile, targetTile);
        }
    }
}


// Function to toggle game mode
function toggleMode() {
    // Switch the current mode
    currentMode = currentMode === 'hard' ? 'regular' : 'hard';
    
    // Update the button text to indicate the mode to which it will switch
    const modeToSwitch = currentMode === 'hard' ? 'Regular' : 'Hard';
    document.getElementById('toggleMode').textContent = `Switch to ${modeToSwitch} Mode`;

    // Hide all mode instructions
    document.querySelectorAll('.mode-instructions').forEach(element => {
        element.style.display = 'none';
    });

    // Show the instructions for the current mode
    document.getElementById(`${currentMode}ModeInstructions`).style.display = 'block';

    // Reset the game for the new mode
    resetGame();
}




function checkAnswers() {
    const grid = document.getElementById('grid');
    const entered = currentGameData.rowWords.map(() => []);
    let allCorrect = false;

    // Populate the entered with the answers from the grid
    currentGameData.rowWords.forEach((rowWord, rowIndex) => {
        currentGameData.columnWords.forEach((colWord, colIndex) => {
            const cell = grid.querySelector(`.droppable[data-row="${rowIndex}"][data-col="${colIndex}"]`);

            if (cell && cell.firstChild) {
                const tile = cell.firstChild;
                const answer = tile.textContent.trim();
                entered[rowIndex][colIndex] = answer;

                // Check if the answer matches the correct answer
                const isCorrect = answer === currentGameData.correctAnswers[rowIndex][colIndex];
            } else {
                entered[rowIndex][colIndex] = ""; // or some other placeholder for an empty answer
            }
        });
    });


    // Check if any answers have been entered into the grid
    const hasAnswers = entered.some(row => row.some(answer => answer));
    let correctness = null;
    let rowColCorrectness = null;

    if (hasAnswers) {
        // Check correctness for rows and columns
        correctness = elementwiseEquality(currentGameData.correctAnswers, entered);
        rowColCorrectness = sumTrueValues(correctness);

        // Test whether the game has been won
        allCorrect = rowColCorrectness.totalSums === 9;

        if (allCorrect) {
        colourClues(correctness, currentGameData);
    		colourAllHeadings(rowColCorrectness);
      	grid.classList.add('win');
        document.getElementById('result').textContent = 'You connected all the thoughts!';
        } else {
        // Game not won yet
				currentAttempts--;
        updateHearts();

        	if (currentAttempts <= 0) {
          // Freeze game and show loss message
          if (currentMode === 'hard') {
        		let rowColCorrectness = sumTrueValues(correctness);
        		colourAllHeadings(rowColCorrectness);
    				} else {
        		colourClues(correctness, currentGameData);
          	}
          freezeGame();
          } else {
          // Not frozen, update colors
          if (currentMode === 'hard') {
        		let rowColCorrectness = sumTrueValues(correctness);
        		colourAllHeadings(rowColCorrectness);
    				} else {
        		colourClues(correctness, currentGameData);
          	}
        document.getElementById('result').textContent = 'Some answers are incorrect.';
    }}} else{
    	  document.getElementById('result').textContent = 'No answers to check.';
    }
}


function colourClues(correctness, currentGameData) {
    const tiles = document.querySelectorAll('.tile');
    tiles.forEach(tile => {
        // Get the current position of the tile
        const parentCell = tile.parentElement;

        // Check if the parent of the tile is a cell in the grid and has the needed attributes
        if (parentCell && parentCell.hasAttribute('data-row') && parentCell.hasAttribute('data-col')) {
            const rowIndex = parseInt(parentCell.getAttribute('data-row'));
            const colIndex = parseInt(parentCell.getAttribute('data-col'));

            // Ensure rowIndex and colIndex are not NaN
            if (!isNaN(rowIndex) && !isNaN(colIndex)) {
                // Only then proceed to get the correct answer and compare
                const correctAnswer = currentGameData.correctAnswers[rowIndex][colIndex];
                const isCorrectCell = tile.textContent.trim() === correctAnswer;
                const isCorrectRow = currentGameData.correctAnswers[rowIndex].includes(tile.textContent.trim());
                const isCorrectColumn = currentGameData.correctAnswers.some(row => row[colIndex] === tile.textContent.trim());

                // Reset classes for coloring
                tile.classList.remove('clue-correct', 'clue-partial', 'clue-incorrect');

                // Apply coloring based on correctness
                if (isCorrectCell) {
                    tile.classList.add('clue-correct');
										lockCell(parentCell);

                } else if (isCorrectRow || isCorrectColumn) {
                    tile.classList.add('clue-partial');
                } else {
                    tile.classList.add('clue-incorrect');
                }
            }
        } else {
            // If the tile is not in a droppable cell, remove any related classes
            tile.classList.remove('clue-correct', 'clue-partial', 'clue-incorrect');
        }
    });
}
	
function isInCorrectRowOrColumn(clue, rowIndex, colIndex, correctAnswers) {
    const correctRow = correctAnswers[rowIndex].includes(clue);
    const correctColumn = correctAnswers.some(row => row[colIndex] === clue);
    return correctRow || correctColumn;
}



function colourAllHeadings(rowColCorrectness = null) {
    const columnHeadings = currentGameData.columnWords.map((_, colIndex) => document.getElementById(`col-${colIndex}`));
    const rowHeadings = currentGameData.rowWords.map((_, rowIndex) => document.getElementById(`row-${rowIndex}`));

    columnHeadings.forEach((heading, columnIndex) => {
        const sum = rowColCorrectness === null ? 0 : rowColCorrectness.columnSums[columnIndex];
        colourHeading(heading, sum);
        if (sum === currentGameData.rowWords.length) { // All clues in the column are correct
            lockColumn(columnIndex);
						colourColumn(columnIndex, true);

        }
    });

    rowHeadings.forEach((heading, rowIndex) => {
        const sum = rowColCorrectness === null ? 0 : rowColCorrectness.rowSums[rowIndex];
        colourHeading(heading, sum);
        if (sum === currentGameData.columnWords.length) { // All clues in the row are correct
            lockRow(rowIndex);
						colourRow(rowIndex, true);

        }
    });
}

// Example function that locks a cell
function lockCell(cell) {
    cell.classList.add('locked');
}


function lockRow(rowIndex) {
    // Logic to lock all clues in this row
    document.querySelectorAll(`.droppable[data-row="${rowIndex}"]`).forEach(cell => {
    		lockCell(cell);
        const tile = cell.firstChild;
        if (tile) {
            tile.classList.add('locked-in'); // Add a CSS class to style locked-in clues
            tile.draggable = false; // Disable dragging
        }
    });
}


function lockColumn(colIndex) {
    // Logic to lock all clues in this column
    document.querySelectorAll(`.droppable[data-col="${colIndex}"]`).forEach(cell => {
        lockCell(cell);
				const tile = cell.firstChild;
        if (tile) {
            tile.classList.add('locked-in'); // Add a CSS class to style locked-in clues
            tile.draggable = false; // Disable dragging
        }
    });
}

function colourRow(rowIndex, isCorrect) {
    const rowCells = document.querySelectorAll(`.droppable[data-row="${rowIndex}"]`);
    rowCells.forEach(cell => {
        if (isCorrect) {
            cell.classList.add('all-correct');
        } else {
            cell.classList.remove('all-correct');
        }
    });
}

function colourColumn(colIndex, isCorrect) {
    const columnCells = document.querySelectorAll(`.droppable[data-col="${colIndex}"]`);
    columnCells.forEach(cell => {
        if (isCorrect) {
            cell.classList.add('all-correct');
        } else {
            cell.classList.remove('all-correct');
        }
    });
}

function colourHeading(heading, correctnessCount=0){
	heading.style.backgroundColor = correctnessCount === 0 ? 'red' :
                                    (correctnessCount === 3) ? 'lightgreen' :
                                    'yellow'; // Default color if none of the conditions match
	
}


function elementwiseEquality(arr1, arr2) {
    // Check if the arrays have the same dimensions
    if (arr1.length !== arr2.length || arr1[0].length !== arr2[0].length) {
        throw new Error("Arrays must have the same dimensions.");
    }

    const result = [];

    // Iterate over each element of the arrays and compare them
    for (let i = 0; i < arr1.length; i++) {
        result[i] = [];
        for (let j = 0; j < arr1[i].length; j++) {
            result[i][j] = arr1[i][j] === arr2[i][j];
        }
    }

    return result;
}

function sumTrueValues(arr) {
    const rowCount = arr.length;
    const columnCount = arr[0].length;
    const rowSums = Array(rowCount).fill(0); // Initialize an array to store row sums
    const columnSums = Array(columnCount).fill(0); // Initialize an array to store column sums
		let totalSums = 0;
		
    // Calculate row sums
    for (let i = 0; i < rowCount; i++) {
        for (let j = 0; j < columnCount; j++) {
            if (arr[i][j] === true) {
                rowSums[i]++;
                totalSums++;
            }
        }
    }

    // Calculate column sums
    for (let j = 0; j < columnCount; j++) {
        for (let i = 0; i < rowCount; i++) {
            if (arr[i][j] === true) {
                columnSums[j]++;
            }
        }
    }

    return { rowSums, columnSums,  totalSums};
}


function updateHearts() {
    const hearts = document.querySelectorAll('.heart');
    hearts.forEach((heart, index) => {
        if (index < currentAttempts) {
            heart.style.opacity = '1'; // or visible
        } else {
            heart.style.opacity = '0.3'; // or hidden
        }
    });
}

function freezeGame() {
    // Disable the "Check Answers" button
    const checkAnswersButton = document.getElementById('checkAnswers');
    if (checkAnswersButton) {
        checkAnswersButton.disabled = true;
    }

    // Disable dragging for all tiles
    const tiles = document.querySelectorAll('.tile');
    tiles.forEach(tile => {
        tile.draggable = false;
    });

    // Change the appearance of the grid to indicate the game is over
    const grid = document.getElementById('grid');
    if (grid) {
        grid.style.backgroundColor = 'red';
        grid.style.opacity = '0.5';
    }

    // Display a message to the user
		document.getElementById('result').textContent = 'Better luck next time!';
}


function unfreezeGame() {
    // Re-enable the "Check Answers" button
    const checkAnswersButton = document.getElementById('checkAnswers');
    if (checkAnswersButton) {
        checkAnswersButton.disabled = false;
    }

    // Re-enable dragging for all tiles
    const tiles = document.querySelectorAll('.tile');
    tiles.forEach(tile => {
        tile.draggable = true;
    });

    // Reset the grid's appearance
    const grid = document.getElementById('grid');
    if (grid) {
    		grid.className = '';
        grid.style.backgroundColor = ''; // Reset to original background color
        grid.style.opacity = '1'; // Reset opacity
    }

    // Clear any end-game messages
    const resultDiv = document.getElementById('result');
    if (resultDiv) {
        resultDiv.textContent = '';
    }
}



document.addEventListener('DOMContentLoaded', function() {
    startNewGame(); // This function should handle everything needed to start a new game, including setting up drag and drop
});

function startNewGame() {
	// Event listeners
		document.getElementById('checkAnswers').addEventListener('click', checkAnswers);
		document.getElementById('newGame').addEventListener('click', startNewGame);
		document.getElementById('resetGame').addEventListener('click', resetGame);
		document.getElementById('toggleMode').addEventListener('click', toggleMode);
    addFloatingActionButtonListener(); // Call this function to handle "?" button clicks

    // Initialize game settings
    initializeHearts();
    currentGameData = getRandomGameData();
    displayGameData(currentGameData); // This will create the tiles and grid
       // Update the button text to indicate the mode to which it will switch
    const modeToSwitch = currentMode === 'hard' ? 'Regular' : 'Hard';
    document.getElementById('toggleMode').textContent = `Switch to ${modeToSwitch} Mode`;

		document.getElementById('howToPlayButton').addEventListener('click', function() {
		    document.getElementById('instructionsOverlay').classList.remove('hidden');
		});
		
		document.getElementById('closeInstructions').addEventListener('click', function() {
		    document.getElementById('instructionsOverlay').classList.add('hidden');
		});

    // Hide all mode instructions
    document.querySelectorAll('.mode-instructions').forEach(element => {
        element.style.display = 'none';
    });

    // Show the instructions for the current mode
    document.getElementById(`${currentMode}ModeInstructions`).style.display = 'block';

    unfreezeGame();
		setupDragAndDrop();

}

function addFloatingActionButtonListener() {
    const howToPlayButton = document.getElementById('howToPlayButton');
    howToPlayButton.addEventListener('click', function() {
        document.getElementById('instructionsOverlay').classList.remove('hidden');
    });
}


window.oncontextmenu = function(event) {
  event.preventDefault();
  event.stopPropagation();
  return false;
};

window.onload = function() {
    var gridWidth = document.getElementById('grid').offsetWidth; // Get the width of the grid
    var tilesContainer = document.getElementById('tiles'); // Get the tile container

    // Set the maximum width of the tile container to match the grid's width
    tilesContainer.style.maxWidth = gridWidth + 'px';
};