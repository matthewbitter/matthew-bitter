//---------------------------------------------------------------------------
// Imports
//---------------------------------------------------------------------------
import Main from "@/Modules/Vuex/Main";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);


interface IStore
{
    Main: Main;
}


export default new Vuex.Store<IStore>(
{
    modules:
    {
        Main
    }
});