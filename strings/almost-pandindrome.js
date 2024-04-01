function palindrome(s) {
    const str = s.replace(/[^a-z0-9]/gi, "").toLowerCase();

    let l = 0;
    let r = str.length - 1;
    let removals = 0;

    while (l < r && removals <= 1) {
        if (str[l] !== str[r]) {
            if (removals === 1) return false;
            if (Math.abs(l - r) === 1) return true;

            if (str[l + 1] === str[r]) {
                l++;
                removals++;
                continue;
            } else if (str[r - 1] === str[l]) {
                r--;
                removals++;
                continue;
            } else {
                return false;
            }
        }

        l++;
        r--;
    }

    return true;
}

function isPalindrome(str) {
    
}

console.log(
    palindrome(
        "lcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupucul"
    )
);

//    a b c c d b a
// l  -
// r    - - - - - -

// r a c e a c a r
