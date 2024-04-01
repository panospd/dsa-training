function compare(s, t) {
    return typeString(s) === typeString(t);
}

function typeString(str) {
    const res = [];

    for (let i = 0; i < str.length; i++) {
        if (str[i] === "#") {
            res.pop();
        } else {
            res.push(str[i]);
        }
    }

    return res.join("");
}

//console.log(compare("a#c", "b"));

function compareOptimal(s, t) {
    let spointer = s.length - 1;
    let tpointer = t.length - 1;

    spointer = moveBackwardsToNextIndexFrom(s, spointer);
    tpointer = moveBackwardsToNextIndexFrom(t, tpointer);

    while (spointer >= 0 && tpointer >= 0) {
        if (t[tpointer] !== s[spointer]) return false;

        spointer--;
        tpointer--;
        spointer = moveBackwardsToNextIndexFrom(s, spointer);
        tpointer = moveBackwardsToNextIndexFrom(t, tpointer);
    }

    return (
        (spointer < 0 || isEmptyUntil(s, spointer)) &&
        (tpointer < 0 || isEmptyUntil(t, tpointer))
    );
}

function isEmptyUntil(str, index) {
    let prev = index;
    while (index >= 0) {
        index = moveBackwardsToNextIndexFrom(str, prev);

        if (index === prev) return false;
        prev = index;
    }

    return true;
}

function moveBackwardsToNextIndexFrom(str, index) {
    if (index < 0 || str[index] !== "#") return index;

    let skip = 1;
    index--;

    while ((skip > 0 || str[index] === "#") && index >= 0) {
        if (str[index] === "#") {
            skip++;
        } else {
            skip--;
        }

        index--;
    }

    return index;
}

console.log(compareOptimal("bxj##tw", "bxo#j##tw"));
