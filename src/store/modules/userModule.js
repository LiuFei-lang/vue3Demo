export const userModule = {
    namespaced:true,
    state: {
        b: 100
    },
    mutations: {
        SET_B: (state, value) => {
            console.log(1, typeof value)
            state.b += value
        }
    },
    actions: {
        Add_B: (context, value) => {
            context.commit("SET_B", value)
        }
    }
}