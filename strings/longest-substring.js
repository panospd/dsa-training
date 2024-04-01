function longestSubstring(str) {
    if (str.length <= 1) return str.length;

    let p1 = 0;
    let p2 = 0;

    let max = 0;

    let cache = new Map();

    while (p2 < str.length) {
        const c = str[p2];

        if (cache.get(c) >= p1) {
            p1 = cache.get(c) + 1;
            if (str.length - p1 <= max) break;
        }

        cache.set(c, p2);
        max = Math.max(max, p2 - p1 + 1);

        p2++;
    }

    return max;
}

console.log(longestSubstring("abcabcbb"));
