var AppConstants = (function () {
    return {
        MTN_FLAG: {
            ADD: "ADD",
            MAINTENANCE: "MTN",
            DELETE: "DEL"
        },
        MASSAGE_TYPE: {
            CONFIRM: "CFM",
            INFO: "INF",
            ERROR: "ERR"
        },
        R_FLAG: {
            ERROR: "X",
            NORMAL: "O"
        },
        PART_REGIS_STATUS: {
            '01I': 'OK',
            '02W': 'NG - Duplication',
            '03E': 'NG - Wrong Format'
        },
        PART_REGIS_STATUS_CD: {
            'OK': '01I',
            'DUPLICATION': '02W',
            'WRONG_FORMAT': '03E'
        }
    }
}());