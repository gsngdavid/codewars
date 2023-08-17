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
    if(users.length === 1) return [fName(users[0])];

    let unique: string[] = [];
    let uniqueInitial: string[] = [];

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

    let uniqueResult = unique.map(fName);
    
    return [...unique, ...uniqueInitial];
}