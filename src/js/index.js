import axios from 'axios';

async function getResults(query) {
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const key = 'b1e1e308b354d102577b070a3bc9ce60';
    try {
        const res = await axios(`${proxy}http://food2fork.com/api/search?key=${key}&q=${query}`);
        const recipes = res.data.recipes;
        console.log(recipes);    
    } catch (error) {
        console.log(error);
    }
}

getResults('pasta');

//api key = b1e1e308b354d102577b070a3bc9ce60
//powered by = http://food2fork.com/api/search