import { Player } from './player';

export class Land {
    public owner: Player;
    constructor (
        public id: string,
        public name: string,
        public hasCastle: boolean,
        public hasHarbor: boolean,
        public region: string,
        public continent: string,
        public coords: string
    ) {
        this.owner = null;
    }

    getOwnerClass(): string {
        if (this.owner instanceof Player) {
            switch (this.owner.name) {
                case 'Stark':
                    return 'white';
                case 'Baratheon':
                    return 'black';
                case 'Lannister':
                    return 'yellow';
                case 'Tyrell':
                    return 'green';
                case 'Martell':
                    return 'orange';
                case 'Targaryen':
                    return 'red';
                case 'Ghiscari':
                    return 'blue';
            }
        }
        return '';
    }
}
