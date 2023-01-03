import * as alt from 'alt-server';
import { PluginSystem } from '../../../server/systems/plugins';
import { ActivatePowerJob } from './src/job';

const PLUGIN_NAME = 'Repair Power Outage';

PluginSystem.registerPlugin(PLUGIN_NAME, () => {
    alt.log(`~lg~${PLUGIN_NAME} was Loaded`);
    ActivatePowerJob.init();
});
