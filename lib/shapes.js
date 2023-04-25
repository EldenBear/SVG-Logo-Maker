class Shape {
constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
}
}

class Circle extends Shape {
constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
}
    render(){
        const circleShape = `
        <svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <circle cx="25" cy="75" r="20" fill="${this.shapeColor}"/>
        </svg>`;
        return circleShape;
    }
};

class Triangle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }
    render(){}
};

class Square extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }
    render(){}
};

module.exports = {Circle, Triangle, Square};