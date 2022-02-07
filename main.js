var $car = document.querySelector('.car');

function moveCarIfNeeded() {

  if (dataModel.running === false) {
    return;
  }

  if (dataModel.direction === 'east') {
    dataModel.carX += 1;// increments data model integer
    $car.style.left = dataModel.carX + 'px';// turns the data model number into px so it can be seen on screen
  } else if (dataModel.direction === 'south') {
    dataModel.carY += 1;
    $car.style.top = dataModel.carY + 'px';
  } else if (dataModel.direction === 'west') {
    dataModel.carX -= 1;
    $car.style.left = dataModel.carX + 'px';
  } else if (dataModel.direction === 'north') {
    dataModel.carY -= 1;
    $car.style.top = dataModel.carY + 'px';
  }

}

setInterval(moveCarIfNeeded, 1);

var dataModel = {
  carX: 0,
  carY: 0,
  direction: 'north',
  running: false
};

window.addEventListener('keydown', handleKeyDown);
function handleKeyDown(e) { // handles turning and steering and stoping and going
  // console.log(e.key);
  if (e.key === 'ArrowUp') {

    $car.className = 'car north';
    dataModel.direction = 'north';
    dataModel.running = true;

  } else if (e.key === 'ArrowDown') {

    $car.className = 'car south';
    dataModel.direction = 'south';
    dataModel.running = true;

  } else if (e.key === 'ArrowLeft') {
    $car.className = 'car west';
    dataModel.direction = 'west';
    dataModel.running = true;

  } else if (e.key === 'ArrowRight') {
    $car.className = 'car east';
    dataModel.direction = 'east';
    dataModel.running = true;

  } else if (e.key === ' ') {
    dataModel.running = false;
  }
}
