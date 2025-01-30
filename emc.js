// @ts-check
import { BeHive, seed, MountObserver } from 'be-hive/be-hive.js';
/** @import {EMC} from './ts-refs/trans-render/be/types' */
/** @import {Actions, PAP,  AP} from './ts-refs/mt-si/types' */;

/**
 * @type {EMC<any, AP>}
 */
export const emc = {
    base: 'mt-si',
    enhancedElementMatches: 'script[type="application/json"]',
    map: {
        
    },
    enhPropKey: 'mtSi',
    importEnh: async () => {
        const { MtSi } = 
        /** @type {{new(): IEnhancement<Element>}} */ 
        /** @type {any} */
        (await import('./mt-si.js'));
        return MtSi;
    },
    

};
const mose = seed(emc);
MountObserver.synthesize(document, BeHive, mose);
