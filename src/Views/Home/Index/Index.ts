//---------------------------------------------------------------------------
// Imports
//---------------------------------------------------------------------------
import BaseVue from "@/Components/Shared/BaseVue";
import Vuex from "@/Modules/Vuex/Vuex";
import { Component } from "vue-property-decorator";


//---------------------------------------------------------------------------
/**
 * The Home/Index view model.
 */
//---------------------------------------------------------------------------
@Component
export default class Home extends BaseVue
{

    //---------------------------------------------------------------------------
    // Properties
    //---------------------------------------------------------------------------
    protected get Message(): string { return this.$store.state.Main.Message; }
    public $store!: (typeof Vuex);


    //---------------------------------------------------------------------------
    /**
     *  The created vue lifecycle hook.
     */
    //---------------------------------------------------------------------------
    protected created(): void
    {
        this.Dispatch("UpdateMessage", "Hello World");
    }

}