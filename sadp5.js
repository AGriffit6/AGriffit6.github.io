function random(lo, hi) {
    return Math.random() * (hi - lo) + lo;
}

let shapes = [];

function setup() {
    // put setup code here
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('p1');

    // generate triangles
    for (let i = 0; i < 45; i++) {
        shapes.push(new Shape(random(20, width - 20), 
                              random(20, height - 20)));
    }
}

function draw() {
    // put drawing code here
    background(100);

    for (let i = 0; i < shapes.length; i++) {
        shapes[i].move();
        shapes[i].display();
    }

}

class Shape {
    constructor(X, Y) {
        this.X = X;
        this.Y = Y;
        this.R = random(2, 10);

        let G = random(0, 75);
        this.C = color(G, G, G);

        //this.S = S;
        this.Ax = random(-0.25, 0.25);
        this.Ay = random(-0.25, 0.25);
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

        quad(this.X, this.Y - this.R, 
             this.X + this.R, this.Y, 
             this.X, this.Y + this.R,
             this.X - this.R, this.Y);
    }
}