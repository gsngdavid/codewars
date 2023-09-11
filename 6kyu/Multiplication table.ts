export function multiplicationTable (size: number): number[][] {
    const table: number[][] = [];

    for(let i = 1; i <= size; i++) table.push([]);

    for(let row = 1; row <= size; row++) {
        for(let col = 1; col <= size; col++) {
            table[row - 1][col - 1] = row * col;
        }
    }

    return table;
}