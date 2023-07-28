class shapes {
  constructor(shapecolor, text, textcolor){ 
    this.shapecolor = shapecolor;
    this.text = text;
    this.textcolor = textcolor
  }
}

class Rectangle extends shapes { 
  constructor(text, textcolor, shapecolor) {
    super(text,textcolor, shapecolor);
  }
  return(){
    return `
    <svg width="400" height="110">  
    <rect width="300" height="100" style="fill:${this.shapecolor};stroke-width:3;stroke:rgb(0,0,0)" />
    <text x="150" y="50" fill="${this.textcolor}" font-size="30" text-anchor="middle">${this.text}</text>
    </svg>`
  }
}
class Circle extends shapes { 
  constructor(text, textcolor, shapecolor) {
    super(text,textcolor, shapecolor);
  }
  return(){
    return`
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <circle cx="150" cy="100" r="80" fill="green" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg>`;
  }
}

class Triangle extends shapes { 
  constructor(text, textcolor, shapecolor) {
    super(text,textcolor, shapecolor);
  }
  return(){
    return`
    <svg width="400" height="400">
    <polygon points="200,10 250,190 160,210" style="fill:${this.shapecolor};stroke:purple;stroke-width:1" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${this.text}</text>
    </svg>`;
  }
}
module.exports = Rectangle;
module.exports = Circle;
module.exports = Triangle;
