class Shape {
constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
}
render(shapeString){
    const shape = `
    <svg width="500" height="500" version="1.1" xmlns="http://www.w3.org/2000/svg">
        ${shapeString}
        <text x="250" y="300" text-anchor="middle" fill="${this.textColor}" font-size="140px" font-family="math">${this.text}</text>
    </svg>`;
    return shape;
}
};

class Circle extends Shape {
constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
}
    render(){
        const circleShape =`<circle cx="250" cy="250" r="150" fill="${this.shapeColor}"/>`;
        const completeString = super.render(circleShape);
        return completeString;
    }
};

class Triangle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }
    render(){
        const triangleShape =`<polygon points="250,20 50,450 450,450" fill="${this.shapeColor}"/>`;
        const completeString = super.render(triangleShape);
        return completeString;
    }
};

class Square extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }
    render(){
        const squareShape = `<rect x="100" y="100" width="300" height="300" fill="${this.shapeColor}"/>`;
        const completeString = super.render(squareShape);
        return completeString;
    }
};

module.exports = {Circle, Triangle, Square};