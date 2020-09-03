var bullet1, wall1;
var bullet2, wall2;
var bullet3, wall3;
var bullet4, wall4;
var speed, weight, thickness;

function setup() {
  createCanvas(1600, 400);

  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22, 83);

  bullet1 = createSprite(50, 340, 50, 30);
  bullet1.velocityX = speed;
  bullet1.shapeColor = color(255, 255, 255);

  wall1 = createSprite(1500, 350, thickness, height / 2)
  wall1.shapeColor = color(80, 80, 80);

  bullet2 = createSprite(50, 240, 50, 30);
  bullet2.velocityX = speed;
  bullet2.shapeColor = color(255, 255, 255);

  wall2 = createSprite(1500, 250, thickness, height / 2)
  wall2.shapeColor = color(80, 80, 80);

  bullet3 = createSprite(50, 140, 50, 30);
  bullet3.velocityX = speed;
  bullet3.shapeColor = color(255, 255, 255);

  wall3 = createSprite(1500, 150, thickness, height / 2)
  wall3.shapeColor = color(80, 80, 80);

  bullet4 = createSprite(50, 40, 50, 30);
  bullet4.velocityX = speed;
  bullet4.shapeColor = color(255, 255, 255);

  wall4 = createSprite(1500, 50, thickness, height / 2)
  wall4.shapeColor = color(80, 80, 80);
}

function draw() {
  background(255, 255, 255);

  if (wall1.x - bullet1.x < (bullet1.width + wall1.width) / 2) {
    bullet1.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed / 22509;

    if (deformation > 180) {
      bullet1.shapeColor = color(255, 0, 0);
    }

    if (deformation < 180 && deformation > 100) {
      bullet1.shapeColor = color(230, 230, 0);
    }

    if (deformation < 100) {
      bullet1.shapeColor = color(0, 255, 0);
    }
  }

  if (wall2.x - bullet2.x < (bullet2.width + wall2.width) / 2) {
    bullet2.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed / 22509;

    if (deformation > 180) {
      bullet2.shapeColor = color(255, 0, 0);
    }

    if (deformation < 180 && deformation > 100) {
      bullet2.shapeColor = color(230, 230, 0);
    }

    if (deformation < 100) {
      bullet2.shapeColor = color(0, 255, 0);
    }
  }

    if (wall3.x - bullet3.x < (bullet3.width + wall3.width) / 2) {
    bullet3.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed / 22509;

    if (deformation > 180) {
      bullet3.shapeColor = color(255, 0, 0);
    }

    if (deformation < 180 && deformation > 100) {
      bullet3.shapeColor = color(230, 230, 0);
    }

    if (deformation < 100) {
      bullet3.shapeColor = color(0, 255, 0);
    }
  }

    if (wall4.x - bullet4.x < (bullet4.width + wall4.width) / 2) {
    bullet4.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed / 22509;

    if (deformation > 180) {
      bullet4.shapeColor = color(255, 0, 0);
    }

    if (deformation < 180 && deformation > 100) {
      bullet4.shapeColor = color(230, 230, 0);
    }

    if (deformation < 100) {
      bullet4.shapeColor = color(0, 255, 0);
    }

    if (hasCollided1(bullet1, wall1)) {
      bullet1.velocityX = 0;
      var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);
  
      if (damage > 10) {
        wall1.shapeColor = color(255, 0, 0);
      }
  
      if (damage < 10) {
        wall1.shapeColor = color(0, 255, 0);
      }
    }

    if (hasCollided2(bullet2, wall2)) {
      bullet2.velocityX = 0;
      var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);
  
      if (damage > 10) {
        wall2.shapeColor = color(255, 0, 0);
      }
  
      if (damage < 10) {
        wall2.shapeColor = color(0, 255, 0);
      }
    }

    if (hasCollided3(bullet3, wall3)) {
      bullet3.velocityX = 0;
      var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);
  
      if (damage > 10) {
        wall3.shapeColor = color(255, 0, 0);
      }
  
      if (damage < 10) {
        wall3.shapeColor = color(0, 255, 0);
      }
    }

    if (hasCollided4(bullet4, wall4)) {
      bullet4.velocityX = 0;
      var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);
  
      if (damage > 10) {
        wall4.shapeColor = color(255, 0, 0);
      }
  
      if (damage < 10) {
        wall4.shapeColor = color(0, 255, 0);
      }
    }
 }

  drawSprites();
}

function hasCollided1(bullet1, wall1) {
  var bullet1RightEdge = bullet1.x = bullet1.width;
  var wall1LeftEdge = wall1.x

  if (bullet1RightEdge >= wall1LeftEdge) {
    return true
  }
  return false;
}

function hasCollided2(bullet2, wall2) {
  var bullet2RightEdge = bullet2.x = bullet2.width;
  var wall2LeftEdge = wall2.x

  if (bullet2RightEdge >= wall2LeftEdge) {
    return true
  }
  return false;
}

function hasCollided3(bullet3, wall3) {
  var bullet3RightEdge = bullet3.x = bullet3.width;
  var wall3LeftEdge = wall3.x

  if (bullet3RightEdge >= wall3LeftEdge) {
    return true
  }
  return false;
}

function hasCollided4(bullet4, wall4) {
  var bullet4RightEdge = bullet4.x = bullet4.width;
  var wall4LeftEdge = wall4.x

  if (bullet4RightEdge >= wall4LeftEdge) {
    return true
  }
  return false;
}