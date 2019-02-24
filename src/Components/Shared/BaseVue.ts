//---------------------------------------------------------------------------
// Imports
//---------------------------------------------------------------------------
import Vuex from "@/Modules/Vuex/Vuex";
import { Component, Vue } from "vue-property-decorator";


//---------------------------------------------------------------------------
/**
 * The base vue class for use with other components.
 */
//---------------------------------------------------------------------------
@Component
export default class BaseVue extends Vue
{

    //---------------------------------------------------------------------------
    // Properties
    //---------------------------------------------------------------------------
    public $store!: (typeof Vuex);


    //---------------------------------------------------------------------------
    /**
     * Dispatch
     */
    //---------------------------------------------------------------------------
    protected async Dispatch(action: string, payload?: {} | string | number | boolean): Promise<void>
    {
        await Vuex.dispatch(action, payload);
    }

}