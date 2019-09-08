// https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life

import Cell from '../Cell';
import Colour from '../Colour';

import countNeighbours from './countNeighbours';
import create2dArray from './create2dArray';

const createNextGrid = (prevGrid: Cell[][], dimensions: number[]) => {
    const [columns, rows] = dimensions;
    const nextGrid = create2dArray(columns, rows);

    for (let column = 0; column < columns; column++) {
        if (!prevGrid[column]) {
            prevGrid[column] = [];
        }

        for (let row = 0; row < rows; row++) {
            if (prevGrid && prevGrid[column] && !prevGrid[column][row]) {
                prevGrid[column][row] = new Cell(0);
            }

            if (prevGrid && prevGrid[column] && prevGrid[column][row]) {
                // Count live neighbours
                const [neighboursCount, neighbours] = countNeighbours(
                    prevGrid,
                    column,
                    row,
                    columns,
                    rows
                );

                const prevCell = prevGrid[column][row];
                const prevStatus = prevCell.status;

                /**
                 * Any dead cell with exactly three live neighbours
                 * becomes a live cell, as if by reproduction.
                 */
                if (!prevStatus && neighboursCount === 3) {
                    nextGrid[column][row] = new Cell(1, prevCell.colour);
                } else if (prevStatus && neighboursCount < 2) {
                    nextGrid[column][row] = new Cell(0);
                } else if (prevStatus && neighboursCount > 3) {
                    nextGrid[column][row] = new Cell(0);
                } else {
                    const averageColour = (
                        currentNeighbours: Cell[]
                    ): Colour => {
                        return currentNeighbours.reduce((acc, next) => {
                            return new Colour({
                                r:
                                    acc.r +
                                    next.colour.r / currentNeighbours.length,
                                g:
                                    acc.g +
                                    next.colour.g / currentNeighbours.length,
                                b:
                                    acc.b +
                                    next.colour.b / currentNeighbours.length,
                                a:
                                    acc.a +
                                    next.colour.a / currentNeighbours.length
                            });
                        }, new Colour({r: 0, g: 0, b: 0, a: 0}));
                    };

                    const randomBellCurve = () => {
                        return (
                            (Math.random() +
                                Math.random() +
                                Math.random() +
                                Math.random() +
                                Math.random() +
                                Math.random() -
                                3) /
                            3
                        );
                    };

                    const mutateColour = (colour: Colour) => {
                        const mutationFactor = 0.2;

                        return new Colour({
                            r:
                                colour.r *
                                (1 + randomBellCurve() * mutationFactor),
                            g:
                                colour.g *
                                (1 + randomBellCurve() * mutationFactor),
                            b:
                                colour.b *
                                (1 + randomBellCurve() * mutationFactor),
                            a: 255
                        });
                    };

                    const nextColour = mutateColour(averageColour(neighbours));
                    nextGrid[column][row] = new Cell(
                        prevCell.status,
                        nextColour
                    );
                }
            }
        }
    }

    return nextGrid;
};

export default createNextGrid;
