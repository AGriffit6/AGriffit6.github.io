function random(lo, hi) {
    return Math.random() * (hi - lo) + lo;
}

function randomColor() {
    return color(random(255), random(255), random(255));
}

let shapes = [];
var BGC;

function setup() {
    // put setup code here
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('p2');

    // generate shapes
    for (let i = 0; i < 100; i++) {
        shapes.push(new Shape(random(20, width - 20), 
                              random(20, height - 20)));
    }

    BGC = randomColor();
}

function draw() {
    // put drawing code here
    background('powderblue');

    for (let i = 0; i < shapes.length; i++) {
        shapes[i].move();
        shapes[i].display();
    }

}

class Shape {
    constructor(X, Y) {
        this.X = X;
        this.Y = Y;
        this.R = random(7, 15);

        this.C = randomColor();

        this.Ax = random(-5, 5);
        this.Ay = random(-5, 5);
    }

    move() {
        this.X += this.Ax;
        this.Y += this.Ay;

        if (this.X < this.R || this.X > width - this.R) {
            this.Ax = - this.Ax;
        }
        if (this.Y < this.R || this.Y > height - this.R) {
            this.Ay = - this.Ay;
        }
    }

    display() {
        fill(this.C);
        noStroke();

        ellipse(this.X, this.Y, 2*this.R);
    }
}