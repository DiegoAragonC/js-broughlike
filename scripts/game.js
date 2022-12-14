function setupCanvas() {
    canvas = document.querySelector("canvas");
    ctx = canvas.getContext("2d");

    canvas.width = tileSize*(numTiles+uiWidth);
    canvas.height = tileSize*numTiles;
    canvas.style.width = canvas.width + 'px';
    canvas.style.height = canvas.height + 'px';
    ctx.imageSmoothingEnabled = false;
}

function drawSprite(frame, x, y) {
    ctx.drawImage(
        spritesheet,
        frame*16,
        0,
        16,
        16,
        x*tileSize,
        y*tileSize,
        tileSize,
        tileSize
    );
}

function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height,);

    for (let i=0; i<numTiles; i++) {
        for (let j=0; j<numTiles; j++) {
            getTile(i, j).draw();
        }
    }

    for (let i=0; i < monsters.length; i++) {
        monsters[i].draw();
    }

    player.draw()
}


function tick() {
    for (let k=monsters.length-1; k>=0; k--) {
        if (!monsters[k].dead) {
            monsters[k].update();
        } else {
            monsters.splice(k, 1);
        }
    }
}