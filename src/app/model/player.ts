import { Land } from './land';

export class Player {
    public points: number;
    public lands: Land[];

    constructor (
        public name: string,
    ) {
        this.points = 0;
        this.lands = [];
    }
}
