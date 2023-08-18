export function fName(name: string): string {
    const firstName = name.split(' ')[0];
    return firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
}
export function lName(name: string): string {
    const lastName = name.split(' ')[1];
    return lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();
}

export function formattedName(name: string): string {
    return `${fName(name)} ${lName(name)}` ;
}

export function generateChatRoomNames(users: string[]): string[] {
    console.log(users);
    if(users.length === 1) return [fName(users[0])];

    let unique: string[] = [];
    let uniqueInitial: string[] = [];
    let common: string[] = [];

    // Add names to uniqueInitial
    while(users.length > 1) {
        let isUnique = true;
        for(let i = 1; i < users.length; i++) {
            if(fName(users[0]) === fName(users[i])) {
                isUnique = false;
                uniqueInitial.push(users.splice(i, 1)[0]);
            }
        }
        let name = String(users.shift());
        isUnique ? unique.push(name) : uniqueInitial.push(name);
    }
    
    users.length === 1 && unique.push(String(users.shift()));
    
    // Add name to common
    console.log("UNIQUE INITIAL", uniqueInitial);
    for(let i = 0; i < uniqueInitial.length - 1; i++) {
        let isUnique = true;
        for(let j = i + 1; j < uniqueInitial.length; j++) {
            if(lName(uniqueInitial[i])[0] === lName(uniqueInitial[j])[0]) {
                isUnique = false;
                common.push(uniqueInitial.splice(j, 1)[0]);
            }
        }
        if(!isUnique) {
            console.log(uniqueInitial[i]);
            common.push(uniqueInitial.splice(i, 1)[0]);
        }
    }

    // console.log(unique);
    // console.log(uniqueInitial);
    // console.log(common);
    
    let uniqueResult = unique.map(fName);
    let uniqueInitialResult = uniqueInitial.map(name => `${fName(name)} ${lName(name)[0]}`);
    let commonResult = common;
    
    return [...uniqueResult, ...uniqueInitialResult, ...commonResult].sort();
}





// [ 'Adam', 'Dan', 'David', 'David Anderson', 'David Harris', 'David Johnson', 'David Jones', 'David Miller', 'David Smith', 'David Taylor', 'David W', 'David Williams', 'Elizabeth', 'Elizabeth Anderson', 'Elizabeth Harris', 'Elizabeth Johnson', 'Elizabeth Jones', 'Elizabeth Miller', 'Elizabeth Smith', 'Elizabeth Taylor', 'Elizabeth Williams', 'Elizabeth Wilson', 'James', 'James A', 'James H', 'James Johnson', 'James Jones', 'James Miller', 'James S', 'James Taylor', 'James W', 'James Wilson', 'Jennifer', 'Jennifer Anderson', 'Jennifer Harris', 'Jennifer Johnson', 'Jennifer Jones', 'Jennifer Miller', 'Jennifer Smith', 'Jennifer Taylor', 'Jennifer Williams', 'Jennifer Wilson', 'John', 'John Anderson', 'John Harris', 'John Johnson', 'John Jones', 'John Miller', 'John Smith', 'John Taylor', 'John W', 'John Williams', 'Linda', 'Linda Anderson', 'Linda Harris', 'Linda Johnson', 'Linda Jones', 'Linda Miller', 'Linda Smith', 'Linda Taylor', 'Linda Williams', 'Linda Wilson', 'Mary', 'Mary Anderson', 'Mary Harris', 'Mary Johnson', 'Mary Jones', 'Mary Miller', 'Mary S', 'Mary Taylor', 'Mary W', 'Mary Williams', 'Michael', 'Michael Anderson', 'Michael Harris', 'Michael Johnson', 'Michael Jones', 'Michael Miller', 'Michael Smith', 'Michael Taylor', 'Michael W', 'Michael Williams', 'Patricia', 'Patricia Anderson', 'Patricia Harris', 'Patricia Johnson', 'Patricia Jones', 'Patricia Miller', 'Patricia Smith', 'Patricia Taylor', 'Patricia Williams', 'Patricia Wilson', 'Peter', 'Robert', 'Robert Anderson', 'Robert Harris', 'Robert Johnson', 'Robert Jones', 'Robert Miller', 'Robert Smith', 'Robert Taylor', 'Robert W', 'Robert Williams' ]
// [ 'Adam', 'Dan', 'David A', 'David D', 'David H', 'David Johnson', 'David Jones', 'David M', 'David S', 'David T', 'David Williams', 'David Wilson', 'Elizabeth A', 'Elizabeth D', 'Elizabeth H', 'Elizabeth Johnson', 'Elizabeth Jones', 'Elizabeth M', 'Elizabeth S', 'Elizabeth T', 'Elizabeth Williams', 'Elizabeth Wilson', 'James A', 'James D', 'James H', 'James Johnson', 'James Jones', 'James M', 'James S', 'James T', 'James Williams', 'James Wilson', 'Jennifer A', 'Jennifer D', 'Jennifer H', 'Jennifer Johnson', 'Jennifer Jones', 'Jennifer M', 'Jennifer S', 'Jennifer T', 'Jennifer Williams', 'Jennifer Wilson', 'John A', 'John D', 'John H', 'John Johnson', 'John Jones', 'John M', 'John S', 'John T', 'John Williams', 'John Wilson', 'Linda A', 'Linda D', 'Linda H', 'Linda Johnson', 'Linda Jones', 'Linda M', 'Linda S', 'Linda T', 'Linda Williams', 'Linda Wilson', 'Mary A', 'Mary D', 'Mary H', 'Mary Johnson', 'Mary Jones', 'Mary M', 'Mary S', 'Mary T', 'Mary Williams', 'Mary Wilson', 'Michael A', 'Michael D', 'Michael H', 'Michael Johnson', 'Michael Jones', 'Michael M', 'Michael S', 'Michael T', 'Michael Williams', 'Michael Wilson', 'Patricia A', 'Patricia D', 'Patricia H', 'Patricia Johnson', 'Patricia Jones', 'Patricia M', 'Patricia S', 'Patricia T', 'Patricia Williams', 'Patricia Wilson', 'Peter', 'Robert A', 'Robert D', 'Robert H', 'Robert Johnson', 'Robert Jones', 'Robert M', 'Robert S', 'Robert T', 'Robert Williams', 'Robert Wilson' ]
