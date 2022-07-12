

export const state = () => ({
    covidData: [],
    userLocation: ''
});

export const getters = {

};

export const mutations = {
    updateCovidData: (state, data) => {
        state.covidData = data;
    }
};

export const actions = {
    async getCovid({
        state,
        commit
    }) {
        if (state.covidData.length) return;

        try {
            await fetch(
                "https://api.covid19api.com/summary", {
                headers: {
                    "Content-Type": "application/json",
                }
            }
            )
                .then(response => response.json())
                .then(data => {
                    commit("updateCovidData", data);
                });
        } catch (err) {
            console.log(err);
        }
    },
};
