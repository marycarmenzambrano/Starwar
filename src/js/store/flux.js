const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			personajes:[],
			planetas:[],
			naves:[],

			favoritos:[],
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
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
			},
			getPersonajes: ()=> {
				fetch("https://www.swapi.tech/api/people")
				.then(response=>response.json())
				.then(data=>setStore({personajes:data.results}))

			},
			getPlanetas: ()=> {
				fetch("https://www.swapi.tech/api/planets")
				.then(response=>response.json())
				.then(data=>setStore({planetas:data.results}))
			},
			getNaves: ()=> {
				fetch("https://www.swapi.tech/api/starships")
				.then(response=>response.json())
				.then(data=>setStore({naves:data.results}))

			},
			addFav:(titulo)=>{
				const store = getStore();
				console.log("Elemento add favoritos: "+titulo)
				setStore({favoritos:[...store.favoritos,titulo]})

			},
			deleteFav: (index) => {
				const store = getStore();
				const newFavoritos = [...store.favoritos]; // crea una nueva matriz para evitar mutar la matriz original
				newFavoritos.splice(index, 1); // elimina el elemento en el índice proporcionado
				setStore({ favoritos: newFavoritos });
			  },	
		}
	};
};

export default getState;
