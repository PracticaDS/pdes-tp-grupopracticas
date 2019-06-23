export const createEmptyCells = () => {
    let cells = []
    for (let i = 1; i <= 100; i++) {
        cells.push({
            id: i, 
            machine: undefined
        })
    }
    return cells
}