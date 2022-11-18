import { getList } from "../functions/getList";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			List: null,

			people:[],
			planets:[],
			starships:[],
			favorites:[]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			//  getMessage: async () => {
			// 	try{
			// 		// fetching data from the backend
			// 		const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
		 	// 	const data = await resp.json()
			//  		setStore({ message: data.message })
			//  		// don't forget to return something, that is how the async resolves
			//  		return data;
			//  	}catch(error){
			//  		console.log("Error loading message from backend", error)
			//  	}
			// },

			loadSomeData: () => {

				getList("people").then(response =>setStore({people:response.results}));
				getList("planets").then(response =>setStore({planets:response.results}));
				getList("starships").then(response => setStore({starships:response.results}));

			},

			addFavorites: (value) => {
				
				const store = getStore()
				
				setStore({...store, favorites: store.favorites.concat(value)})
			},

			deleteFavorites: (index) => {
				
				const store = getStore()

				store.favorites.splice(store.favorites.indexOf(index)-1,1)
				
				setStore({...store})
			},
			



			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
