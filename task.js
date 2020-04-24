// Задача 1

function parseCount(a) {
    a = Number.parseInt(a);
    if (isNaN(a)) {
        const parseError = new Error('Невалидное значение');
        throw parseError;
    }
    return a;    
}

function validateCount(b) {
    try {
        return parseCount(b);
    }
    catch(error) {
        return error;
    }  
    
}

// Задача 2

class Triangle {
    constructor (a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if ( a + b <= c || a + c <= b || b + c <= a) {
            const triError = new Error('Треугольник с такими сторонами не существует');
            throw triError;
        }
        this.perimeter = this.a + this.b + this.c;
    }
    getPerimeter() {
        return this.perimeter;
    }
    getArea() {
        const halfPerimeter = this.perimeter / 2;
        return parseFloat(Math.sqrt(halfPerimeter * (halfPerimeter - this.a) * (halfPerimeter - this.b) * (halfPerimeter - this.c)).toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        const triangle = new Triangle(a, b, c);
        return triangle;
        
    } 
    catch (e) {
        const objErr = 'Ошибка! Неправильный треугольник'; 
        const Obj = { 
            getPerimeter() {
               return objErr; 
            },
            getArea() {
                return objErr;
            }

        }
        return Obj;
    }
        
}