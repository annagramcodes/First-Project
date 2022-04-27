class Cat {
  constructor(game, x, y, width, height) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.width = width;
      this.height = height;
      this.currentFrame = 0;
      this.isEating = false;
      this.isHurt = false;
    this.img = new Image();
  }
  draw() {
    this.img.src = "./docs/assets/imgs/596dba64ed07ad6118f99900.png";
    this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
    drawAnimation() {
        this.img.src =
            "./docs/assets/imgs/DS_DSi_-_Garfields_Fun_Fest_-_Garfield-removebg.png";
        const spriteWidth = 35;
        const spriteHeight = 54;
      
        let column = this.currentFrame % 5;
        let row = 4;
    
        if (this.game.frames % 8 === 0) {
            this.currentFrame++;
            let maxFrame = 4;
            if (this.currentFrame > maxFrame) {
                this.currentFrame = 0;
            }
        }
        this.game.ctx.drawImage(
            this.img,
            column * spriteWidth,
            267,
            spriteWidth,
            spriteHeight,
            this.x,
          this.y,
           45,
            65
          //   spriteWidth,
          //  spriteHeight
        );
    }
    drawEatingCat() {
        this.img.src =
            "./docs/assets/imgs/DS_DSi_-_Garfields_Fun_Fest_-_Garfield-removebg.png";
        const spriteWidth = 50;
        const spriteHeight = 60;
      
        let column = this.currentFrame % 4;
    
        if (this.game.frames % 8 === 0) {
            this.currentFrame++;
            let maxFrame = 3;
            if (this.currentFrame > maxFrame) {
                this.currentFrame = 0;
            }
        }
        this.game.ctx.drawImage(
            this.img,
            column * spriteWidth,
            453,
            spriteWidth,
            spriteHeight,
            this.x,
          this.y,
          60,
            70
            // spriteWidth,
            // spriteHeight
        );
    }
    drawHurtCat() {
        this.img.src =
            "./docs/assets/imgs/DS_DSi_-_Garfields_Fun_Fest_-_Garfield-removebg.png";
        const spriteWidth = 56;
        const spriteHeight = 60;
      
        let column = this.currentFrame % 4;
    
        if (this.game.frames % 7 === 0) {
            this.currentFrame++;
            let maxFrame = 5;
            if (this.currentFrame > maxFrame) {
                this.currentFrame = 0;
            }
        }
        this.game.ctx.drawImage(
            this.img,
            column * spriteWidth,
            824,
            spriteWidth,
            spriteHeight,
            this.x,
          this.y,
          66,
            71
            // spriteWidth,
            // spriteHeight
        );
    }

  moveUp() {
    if (this.y > 0) {
      this.y -= 20;
    }
  }
  moveDown() {
    if (this.y + this.height < this.game.height) {
      this.y += 20;
    }
  }
  moveRight() {
    if (this.x + this.width < this.game.width) {
      this.x += 20;
    }
  }
  moveLeft() {
    if (this.x > 0) {
      this.x -= 20;
    }
  }
  left() {
    return this.x;
  }
  right() {
    return this.x + this.width;
  }

  top() {
    return this.y;
  }

  bottom() {
    return this.y + this.height;
  }
  crashesWith(obstacle) {
    return !(
      this.bottom() < obstacle.top() ||
      this.top() > obstacle.bottom() ||
      this.right() < obstacle.left() ||
      this.left() > obstacle.right()
    );
  }
}

class Obstacles {
  constructor(game, width, height) {
    this.game = game;
    this.x = Math.floor(Math.random()*(600-50) +50);
    this.y = 0;
    this.width = width;
    this.height = height;
    this.img = new Image();
  }
  left() {
    return this.x;
  }
  right() {
    return this.x + this.width;
  }

  top() {
    return this.y;
  }

  bottom() {
    return this.y + this.height;
  }

  drawLasagne() {
    this.img.src = "./docs/assets/imgs/lasagne.webp";
    this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
  drawCake() {
    this.img.src = "./docs/assets/imgs/cake.png";
    this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
  drawBroccoli() {
    this.img.src = "./docs/assets/imgs/brokkoli.png";
    this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
  drawCarrot() {
    this.img.src = "./docs/assets/imgs/carrot.png";
    this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
}
