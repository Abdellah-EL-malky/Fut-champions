fetch('data/players.json').then(function(response){
    return response.json()
})

.then(function(obj){
    console.log(obj);
})

.catch(function(error){
    console.error('Something went wrong with fetching the data!');
    console.error(error);
});

const formations = {
    '4-4-2': [
        [{name: 'CF', index: 0}, {name: 'CF', index: 1}],
        [{name: 'LMF', index: 2}, {name: 'CMF', index: 3}, {name: 'CMF', index: 4}, {name: 'RMF', index: 5}],
        [{name: 'LB', index: 6}, {name: 'CB', index: 7}, {name: 'CB', index: 8}, {name: 'RB', index: 9}],
        [{name: 'GK', index: 10}]
    ],
    '4-3-3': [
        [{name: 'LWF', index: 0}, {name: 'CF', index: 1}, {name: 'RWF', index: 2}],
        [{name: 'CMF', index: 3}, {name: 'DMF', index: 4}, {name: 'CMF', index: 5}],
        [{name: 'LB', index: 6}, {name: 'CB', index: 7}, {name: 'CB', index: 8}, {name: 'RB', index: 9}],
        [{name: 'GK', index: 10}]
    ],
};console.log(formations);

