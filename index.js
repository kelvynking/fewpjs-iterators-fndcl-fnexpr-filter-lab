const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function findMatching(arr, str) {
    return arr.filter(match => match.toLowerCase() === str.toLowerCase());
    }
