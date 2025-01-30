// @ts-check
import { propInfo, rejected, resolved } from 'be-enhanced/cc.js';
import { BE } from 'be-enhanced/BE.js';
import {dispatchEvent as de} from 'trans-render/positractions/dispatchEvent.js';
import { MountObserver } from 'mount-observer/MountObserver.js';
/** @import {BEConfig, IEnhancement, BEAllProps} from './ts-refs/be-enhanced/types.d.ts' */
/** @import {Actions, PAP, AllProps, AP, BAP} from './ts-refs/mt-si/types' */
/** @import {AllProps as beParsedAllProps} from './ts-refs/be-parsed/types' */
/** @import {IMountEvent} from './ts-refs/mount-observer/types.d.ts'*/
/** @import {EnhancementInfo} from './ts-refs/trans-render/be/types' */

/**
 * @implements {Actions}
 * @implements {EventListenerObject}
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
     * @type {MountObserver}
     */
    #mountObserver;
    /**
     * @type {EnhancementInfo}
     */
    #ei;

    /**
     * 
     * @param {Element} mountElement 
     * @param {EnhancementInfo} enhancementInfo 
     */
    async attach(mountElement, enhancementInfo){
        this.#ei = enhancementInfo;
        await super.attach(mountElement, enhancementInfo);
        
    }

    /**
     * 
     * @param {BAP} self 
     * @returns 
     */
    async hydrate(self){
        const {doEval, enhancedElement} = self;
        if(doEval){
            throw 'NI';
        }
        const {emc} = await import('be-parsed/emc.js');
        /**
         * @type {beParsedAllProps}
         */
        const beParsed = await /** @type{any} */(enhancedElement).beEnhanced.whenResolved(emc);
        const {value} = beParsed;
        const not = `:not(script[type="application/json"])`;
        console.log({ei: this.#ei});
        const {mountCnfg} = this.#ei;
        const {base} = mountCnfg;
        const on = `[${base}]${not}`;
        const idSel = enhancedElement.id ? `[${base}-obs="${enhancedElement.id}"]${not}` : '';
        const mo = new MountObserver({
            on: `${on},${idSel}`,
        });
        this.#mountObserver = mo;
        mo.addEventListener('mount', this);
        mo.observe(enhancedElement.getRootNode());
        //console.log({value});
        return /** @type {PAP} */({
            resolved: true,
        });
    }


    /**
     * 
     * @param {IMountEvent} e 
     */
    handleEvent(e){
        console.log({e})
    }
    

    de = de;
}

await MtSi.bootUp();
export { MtSi };

