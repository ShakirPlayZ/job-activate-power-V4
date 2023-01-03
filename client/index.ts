import * as alt from 'alt-client';
import * as game from 'natives';

alt.onServer('blackouton',() => {
    game.setArtificialVehicleLightsState(false);
    game.setArtificialLightsState(true);
});

alt.onServer('blackoutoff',() => {
    game.setArtificialVehicleLightsState(false);
    game.setArtificialLightsState(false);
});
