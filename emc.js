// @ts-check
import { BeHive, seed, MountObserver } from 'be-hive/be-hive.js';
/** @import {EMC} from './ts-refs/trans-render/be/types' */

/**
 * @type {EMC}
 */
export const emc = {
    base: 'mt-si',
    map: {
        
    },
    enhPropKey: 'mtSi',
    importEnh: async () => {
        const { MtSi } = 
        /** @type {{new(): IEnhancement<Element>}} */ 
        /** @type {any} */
        (await import('./mt-si.js'));
        return MtSi;
    }
};
const mose = seed(emc);
MountObserver.synthesize(document, BeHive, mose);
