// @ts-check
import { propInfo, rejected, resolved } from 'be-enhanced/cc.js';
import { BE } from 'be-enhanced/BE.js';
import {dispatchEvent as de} from 'trans-render/positractions/dispatchEvent.js';
/** @import {BEConfig, IEnhancement, BEAllProps} from './ts-refs/be-enhanced/types.d.ts' */
/** @import {Actions, PAP, AllProps, AP, BAP} from './ts-refs/mt-si/types' */;

/**
 * @implements {Actions}
 * 
 */
class MtSi extends BE {
    /**
     * @type {BEConfig<AP & BEAllProps, Actions & IEnhancement>}
     */
    static config = {
        propDefaults: {
            doEval: false,
        },
        propInfo: {
            ...propInfo,
        },
        positractions: [resolved, rejected],
        actions:{
            hydrate:{
                ifKeyIn: ['doEval']
            }
        }
    };

    /**
     * 
     * @param {BAP} self 
     * @returns 
     */
    async hydrate(self){
        console.log({self});
        return /** @type {PAP} */({
            resolved: true,
        });
    }

    de = de;
}

await MtSi.bootUp();
export { MtSi };

