function palindrome(str) {
    const replaced = str.replace(/[^a-z0-9]/gi, "").toLowerCase();

    let l = 0;
    let r = replaced.length - 1;

    while (l < r) {
        console.log(replaced[l], replaced[r]);
        if (replaced[l] !== replaced[r]) {
            return false;
        }

        l++;
        r--;
    }

    return true;
}

console.log(palindrome("A man, a plan, a canal: Panama"));
