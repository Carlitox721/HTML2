function suma({ x, y }: { x: number; y: number; }): number { 
    return x + y; 
} 

let r: number = suma({ x: 3, y: 6 }); 

console.log(r);
