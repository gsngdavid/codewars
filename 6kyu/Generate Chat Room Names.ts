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
    // console.log(users);
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
                i--;
            }
        }
        let name = String(users.shift());
        isUnique ? unique.push(name) : uniqueInitial.push(name);
    }
    
    users.length === 1 && unique.push(String(users.shift()));
    
    // Add name to common
    for(let i = 0; i < uniqueInitial.length; i++) {
        if(i === uniqueInitial.length - 1) break;
        let isUnique = true;
        for(let j = i + 1; j < uniqueInitial.length; j++) {
            if(`${fName(uniqueInitial[i])} ${lName(uniqueInitial[i])[0]}` === `${fName(uniqueInitial[j])} ${lName(uniqueInitial[j])[0]}`) {
                isUnique = false;
                common.push(uniqueInitial.splice(j, 1)[0]);
                j--;
            }
        }
        if(!isUnique) {
            common.push(uniqueInitial.splice(i, 1)[0]);
            i--;
        }
    }
    
    
    
    let uniqueResult = unique.map(fName);
    let uniqueInitialResult = uniqueInitial.map(name => `${fName(name)} ${lName(name)[0]}`);
    let commonResult = common.map(formattedName);
    
    
    console.log("COMMON LENGTH: " + common.length);
    console.log("UNIQUE INITIAL LENGTH: " + uniqueInitial.length);
    // if(common.length === 0 && uniqueInitial.length === 0) return [];

    return [...uniqueResult, ...uniqueInitialResult, ...commonResult].sort();
}


// [
//     'Elijah Davis',       'Lucas Smith',
//     'Ethan Miller',       'Lily Moore',
//     'Noah Thomas',        'Sophia Jackson',
//     'Emma Johnson',       'Layla Martin',
//     'Aiden Anderson',     'Aria Jones',
//     'Ava Gonzalez',       'Mia Williams',
//     'Grayson Lopez',      'Madison Hernandez',
//     'Jackson Taylor',     'Olivia Brown',
//     'Liam Martinez',      'Caden Garcia',
//     'Isabella Rodriguez', 'Oliver Wilson'
//   ]