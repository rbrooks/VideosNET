export function truncForUi(s) {
    if (!s) {
        return '';
    }
    var re = s.match(/^.{0,60}[\S]*/);
    var l = re[0].length;
    var re = re[0].replace(/\s$/, '');
    if (l < s.length) re = re + "\u2026";

    return re;
}
