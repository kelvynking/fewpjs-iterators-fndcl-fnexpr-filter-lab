const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function findMatching(arr, str) {
    return arr.filter(match => match.toLowerCase() === str.toLowerCase());
    }

function fuzzyMatch(arr, str) {
    return arr.filter(match => match.toLowerCase().indexOf(str.toLowerCase()) === 0);
}

function matchName(arr, str) {
    return arr.filter(element => element.name === str);
}