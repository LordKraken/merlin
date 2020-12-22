
//*****************************************************************

function hashFnv32a(str) {
    /*jshint bitwise:false */
    var i, l, hval = 0x811c9dc5;

    for (i = 0, l = str.length; i < l; i++) {
        hval ^= str.charCodeAt(i);
        hval += (hval << 1) + (hval << 4) + (hval << 7) + (hval << 8) + (hval << 24);
    }
    return hval >>> 0;
}

//*****************************************************************

function getCellHash(row, line) {
    return hashFnv32a('r:' + row + 'l:' + line);
}
