// ITERATION 1

// Suspects Collection
const suspectsArray = [
    {
        firstName: 'Jacob',
        lastName: 'Green',
        occupation: 'Entrepreneur',
        age: 45,
        description: 'He has a lot of connections'
    },
    {
        firstName: 'Doctor',
        lastName: 'Orchid',
        occupation: 'Scientist',
        age: 26,
        description: 'PhD in plant toxicology. Adopted daughter of Mr. Boddy'
    },
    {
        firstName: 'Victor',
        lastName: 'Plum',
        occupation: 'Designer',
        age: 22,
        description: 'Billionaire video game designer'
    },
    {
        firstName: 'Kasandra',
        lastName: ' Scarlet ',
        occupation: 'Actor',
        age: 31,
        description: 'She is an A-list movie star with a dark past',
        image: 'https://www.radiotimes.com/uploads/images/Original/111967.jpg',
        color: 'red'
    },
    {
        firstName: 'Eleanor',
        lastName: 'Peacock',
        occupation: 'Socialité',
        age: 36,
        description: 'She is from a wealthy family and uses her status and money to earn popularity',
        image: 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
        color: 'blue'
    },
   {
        firstName: 'Jack',
        lastName: 'Mustard',
        occupation: 'Retired Football player',
        age: 62,
        description: 'He is a former football player who tries to get by on his former glory',
        image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg',
        color: 'yellow'
    }
    

];
// Rooms Collection
const roomsArray = [
    {name: 'Dining Room'},
    {name: 'Conservatory'},
    {name: 'Kitchen'},
    {name: 'Study'},
    {name: 'Library'},
    {name: 'Billiard Room'},
    {name: 'Lounge'},
    {name: 'Ballroom'},
    {name: 'Hall'},
    {name: 'Spa'},
    {name: 'Living Room'},
    {name: 'Observatory'},
    {name: 'Theater'},
    {name: 'Guest House'},
    {name: 'Patio'}

];

// Weapons Collection
const weaponsArray = [
    {name: 'rope', weight: 10},
    {name: 'knife' , weight: 8},
    {name: 'candlestick', weight: 2},
    {name: 'dumbbell', weight: 30},
    {name: 'poison', weight: 2},
    {name: 'axe', weight: 15},
    {name: 'bat',  weight: 13},
    {name: 'trophy', weight: 25},
    {name: 'pistol', weight: 20}  
];

// ITERATION 2
function selectRandom(array){
    let randomObject = array[Math.floor(Math.random() * array.length)];
    return randomObject;
   
}
console.log(selectRandom(weaponsArray));

function pickMystery(){
  let mystery={};
           let randomSuspect= selectRandom(suspectsArray);
           mystery.suspect=randomSuspect;
           let randomWeapon= selectRandom(weaponsArray);
           mystery.weapon= randomWeapon;
           let randomRoom = selectRandom(roomsArray);
           mystery.room= randomRoom;
           return mystery;
}
console.log(pickMystery());

// ITERATION 3
function revealMystery(mysteryObject){
        //mysteryObject=pickMystery();
    
return`${mysteryObject.suspect.firstName} ${mysteryObject.suspect.lastName} killed Mr. Boddy using the ${mysteryObject.weapon.name} in the ${mysteryObject.room.name}!`
}

console.log(revealMystery(weaponsArray));
