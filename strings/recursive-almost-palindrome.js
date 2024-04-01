function almostPalindrome(s) {
    const replaced = s.replace(/[^a-z0-9]/gi, "").toLowerCase();

    const { result, l, r } = palindrome(replaced);

    return (
        result ||
        palindrome(replaced.substring(l + 1, r + 1)).result ||
        palindrome(replaced.substring(l, r)).result
    );
}

function palindrome(str) {
    let l = 0;
    let r = str.length - 1;

    while (l < r) {
        if (str[l] !== str[r]) {
            return { result: false, l, r };
        }

        l++;
        r--;
    }

    return { result: true };
}

console.log(
    almostPalindrome(
        "lcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupucul"
    )
);

const test =
    "lcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupucul";

console.log(test.substring(2, test.length - 1));
