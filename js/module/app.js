
export default function fight(char1, char2) {
    let attack1 = Math.floor(Math.random() * char1.length);
    let attack2 = Math.floor(Math.random() * char2.length);

    return attack1 > attack2 ? `win ${char1}` : `win ${char2}`;

}