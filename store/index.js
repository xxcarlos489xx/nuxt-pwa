export const state = () => ({
    pokemones: [],
    red:true,
});
  
export const getters = {
    get_pokemones(state) {
        return state.pokemones;
    },
};

export const mutations = {
    SET_POKEMONES(state, value) {
        state.pokemones = [...value];
    },
};

export const actions = {
    async load_list({ commit,state },total) {        
        try {
            const {data} = await this.$axios.get(`/pokemon?limit=${total}&offset=0`);
            if (data.results.length > 0 && state.red) {
                commit("SET_POKEMONES", data.results);
            }
        } catch (e) {
            console.log(e);
        }
    },
};