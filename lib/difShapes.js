class shapes {
  constructor(shapecolor, text, textcolor){ 
    this.shapecolor = shapecolor;
    this.text = text;
    this.textcolor = textcolor
  }
}

class Circle extends shape { 
  constructor(text, textcolor, shapecolor) {
    super(text,textcolor, shapecolor);
  }
}

class rectangle extends shape {
  constructor 
}