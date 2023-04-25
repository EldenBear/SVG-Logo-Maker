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
        const circleShape = `<circle cx="25" cy="75" r="20" fill="${this.shapeColor}"/>`;
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