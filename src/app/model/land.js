"use strict";
var player_1 = require("./player");
var Land = (function () {
    function Land(id, name, hasCastle, hasHarbor, region, continent, coords) {
        this.id = id;
        this.name = name;
        this.hasCastle = hasCastle;
        this.hasHarbor = hasHarbor;
        this.region = region;
        this.continent = continent;
        this.coords = coords;
        this.owner = null;
    }
    Land.prototype.getOwnerClass = function () {
        if (this.owner instanceof player_1.Player) {
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
    };
    return Land;
}());
exports.Land = Land;
//# sourceMappingURL=land.js.map