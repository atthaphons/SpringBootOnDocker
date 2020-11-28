package com.example.ExamSpringBootDemo.common;

public final class AppConstants {
    private AppConstants() {
    };

    // Result Status
    public enum MTN_FLAG {
        ADD {
            public String toString() {
                return "ADD";
            }
        },
        MAINTENANCE {
            public String toString() {
                return "MTN";
            }
        },
        DELETE {
            public String toString() {
                return "DEL";
            }
        },
    }
    public enum R_FLAG {
        ERROR {
            public String toString() {
                return "X";
            }
        },
        NORMAL {
            public String toString() {
                return "O";
            }
        }
    }
    public enum SCREEN_CODE {
        PRODUCTION_PLAN_MAINTENANCE {
            public String toString() {
                return "PP01";
            }
        },
        PRODUCTION_PLAN_RELEASE {
            public String toString() {
                return "PP02";
            }
        },
        PART_ID_FORMAT_SETTING {
            public String toString() {
                return "PI01";
            }
        },
        PART_ID_MASTER {
            public String toString() {
                return "PI02";
            }
        },
        PART_ID_AMANDMENT {
            public String toString() {
                return "PI05";
            }
        },
        VEHICLE_TRACKING_TIME {
            public String toString() {
                return "VH02";
            }
        },
        PART_ID_REGISTRATION {
            public String toString() { return "PI03"; }
        }
    }
    public enum PROCESS {
        REGISTER {
            public String toString() { return "Register"; }
        },
        UPLOAD {
            public String toString() { return "Upload"; }
        },
        RELEASE {
            public String toString() { return "Release"; }
        }
    }
    public enum OPERATION {
        ADD {
            public String toString() { return "Add"; }
        },
        EDIT {
            public String toString() { return "Edit"; }
        },
        DELETE {
            public String toString() { return "Delete"; }
        }
    }
    public enum OPERATION_STATUS {
        SUCCESS {
            public String toString() { return "S"; }
        },
        ERROR {
            public String toString() { return "E"; }
        },
    }
    public enum DATE_CONSTANT {
        MAX_EFFECTIVE_TO_DT {
            public String toString() {
                return "31/12/2099";
            }
        },
    }

    public enum PART_REG_STATUS {
        OK {
            public String toString() { return "01I"; }
        },
        NG_DUPLICATE {
            public String toString() { return "02W"; }
        },
        NG_WRONG_FORMAT {
            public String toString() { return "03E"; }
        },
    }

    public enum PROD_PLAN_IF_HEADER {
        PRODNO {
            public String toString() { return "PRODNO"; }
        },
        PLANSEQ {
            public String toString() { return "PLANSEQ"; }
        },
        CFC {
            public String toString() { return "CFC"; }
        },
        SUBSERIES {
            public String toString() { return "SUBSERIES"; }
        },
        DETYPE {
            public String toString() { return "DETYPE"; }
        },
        DISPKAT {
            public String toString() { return "DISPKAT"; }
        },
        PRODSFX {
            public String toString() { return "PRODSFX"; }
        },
        EXTCD {
            public String toString() { return "EXTCD"; }
        },
        INTCD {
            public String toString() { return "INTCD"; }
        },
        KDLOTCD {
            public String toString() { return "KDLOTCD"; }
        },
        LOTNO {
            public String toString() { return "LOTNO"; }
        },
        NOOFLOT {
            public String toString() { return "NOOFLOT"; }
        },
        PRODYEAR {
            public String toString() { return "PRODYEAR"; }
        },
        PRODMONTH {
            public String toString() { return "PRODMONTH"; }
        },
        PRODDAY {
            public String toString() { return "PRODDAY"; }
        },
        DEALER {
            public String toString() { return "DEALER"; }
        },
        PSC {
            public String toString() { return "PSC"; }
        },
        IDLINECD {
            public String toString() { return "IDLINECD"; }
        },
        SSNO {
            public String toString() { return "SSNO"; }
        },
        PLANTCD {
            public String toString() { return "PLANTCD"; }
        },
        PRODREQYYMON {
            public String toString() { return "PRODREQYYMON"; }
        },
        CLICD {
            public String toString() { return "CLICD"; }
        },
        SALSFX {
            public String toString() { return "SALSFX"; }
        },
        MY {
            public String toString() { return "MY"; }
        }
    }
}
