export function circleArea(radius: number): number {
    if(radius <= 0) throw new Error('Radius is negative!');
    return +(Math.PI * (radius ** 2)).toFixed(2);
  }