let message_error = {
    // common
    "MCOM0000000ERR": "General Error please contact Administrator.",
    "MCOM1000000ERR": "Your request resource on server does not exist.",
    "MCOM0000001ERR": "Data not found.",
    "MCOM0000002ERR": "Select one record to be modified.",
    "MCOM0000004ERR": "Select one record to copy for add.",
    "MCOM0000005ERR": "Select at least one record to delete.",
    "MCOM0000006ERR": "Select one record has been maintained to be revert.",
    "MCOM0000007ERR": "Operation cannot be completed. Data has been modified by another user",
    "MCOM0000008ERR": "Cannot maintenance data, which has been deleted.",
    "MCOM0000009ERR": "Select one record to be moved.",
    "MCOM000000AERR": "MAX records in system master data not found.",
    "MCOM000000BERR": "Search result data row exceed configuration",
    "MCOM000000CERR": "Found duplicate Vin No. Please enter Prod. No.",

    // login
    "ML0001000001ERR": "User ID is invalid",
    "ML0001000002ERR": "Password is invalid",
    "ML0001000003ERR": "Enter email does not exist in system",
    "ML0001000004ERR": "Send Email fail.",
    "ML0001000005ERR": "Login user has been expired. Please click OK to login again.",
    "ML0001000006ERR": "Un-Authorized access this resource or your autorization is revoked",

    // Production Plan Upload and Maintenance
    "MPP01000001ERR": "User ID : {0} is currently using the Production Plan Upload and Maintenance function.",
    "MPP01000002ERR": "Upload fail.",
    "MPP01000003ERR": "Select one record to Seq. Adjust.",
    "MPP01000004ERR": "First 2 digits of Lot No. not equal to Lot Code.",
    "MPP01000005ERR": "Model year does not exist in master",
    "MPP01000006ERR": "Prod No. From more than Prod No. To",
    "MPP01000007ERR": "Lot No. From more than Lot No. To",
    "MPP01000008ERR": "Production No. is duplicate.",

    "MPP01000009ERR": "The production plan upload process is processing.",
    "MPP01000010ERR": "Please select Production Plan Excel File.",
    "MPP01000011ERR": "Upload file's type are not allowed. Support file's type is {0}",
    "MPP01000012ERR": "Upload file name must contained only a-z, A-Z, 0-9, . , _",
    "MPP01000013ERR": "Incorrect template.",
    "MPP01000014ERR": "Production Month Year {0} have Release status",

    "MPP01000015ERR": "Cannot Adjust Seq., Can be Adjust Seq. for status Normal only.",
    "MPP01000016ERR": "Cannot Adjust Seq., Data is first record.",
    "MPP01000017ERR": "Cannot Adjust Seq., Data is last record.",
    "MPP01000018ERR": "Cannot Adjust Seq., Data has been deleted.",
    "MPP01000019ERR": "Cannot Adjust Seq., Seq. Adjust more than max value ({0}).",

    //Daily Production Plan Release
    "MPP02000001ERR": "User ID : {0} is currently using the Daily Production Plan Release function.",
    "MPP02000002ERR": "Some required field is blank, please correct data before releasing vehicle.",
    "MPP02000003ERR": "Some mandatory fields are blank, please update information before releasing vehicle.",
    "MPP02000004ERR": "No. Of Veh. more than Production Plan.",
    "MPP02000005ERR": "Run No:{0}, Data not found or maintenance mistake in Frame Information Master.",
    "MPP02000006ERR": "Run No:{0}, Data not found or maintenance mistake in Frame Serial Master.",
    "MPP02000007ERR": "Last running No. must not exceed Frame serial No. To",
    "MPP02000008ERR": "Run No:{0}, {1} got duplicated Vin No. {2} in vehicle part installation",
    "MPP02000009ERR": "Run No:{0}, {1} got duplicated Vin No. {2} in vehicle information",
    //Part ID Format Setting
    "MPI01000001ERR": "Cannot delete, Part Format Master has been used.",
    "MPI01000002ERR": "Duplication found.",
    "MPI01000003ERR": "Cannot maintenance, Part Format Master has been used.",

    //Part ID Master
    "MPI02000001ERR": "Cannot delete, Part ID Master has been used.",
    "MPI02000002ERR": "Cannot maintenance, Part ID Master has been used.",
    "MPI02000003ERR": "Cannot move up first record",
    "MPI02000004ERR": "Cannot move down last record",
    "MPI02000005ERR": "Cannot move, Part ID Master has been deleted.",
    "MPI02000006ERR": "Cannot move, Part ID Master has been used.",
    "MPI02000007ERR": "Part ID and Tracking Point is duplicate.",
    "MPI02000008ERR": "Part ID does not exist in database. Please search again",
    "MPI02000009ERR": "Cannot operate because part has been used in vehicle part installation process.",
    "MPI02000010ERR": "Duplication found.",
    "MPI02000011ERR": "Part ID Master must have at least 1 record.",
    "MPI02000012ERR": "Effective date must have a value.",
    "MPI02000013ERR": "Production Suffix is duplicated for Part Name and Part Description.",

    // Part Id Regsitration
    "MPI03000001ERR": "This vehicle is not existed in released production plan. Please continue with another vehicle",
    "MPI03000002ERR": "The Vehicle already done in this Tracking Point. Please continue with another vehicle",
    "MPI03000003ERR": "This vehicle must complete part installation in previous tracking first. Please continue with another vehicle",
    "MPI03000004ERR": "There are not any part setting to install for this vehicle in this tracking point. Please continue with another vehicle.",
    "MPI03000005ERR": "Operation denied. Please fix Wrong format part value in part list.",
    "MPI03000006ERR": "Operation denied. Please enter all part value in part list",
    "MPI03000007ERR": "Application Configuration mistake please close this application and contact Administrator",
    //Part Id Amendment
    "MPI05000001ERR": "Part ID is duplicate.",

    "MPI05000003ERR": "Wrong format part value.",
    "MPI05000004ERR": "This vehicle does not complete part installation in this tracking point yet.",

    //User Maintanance
    "MSY01000001ERR": "Duplication found for User ID:{0}",
    "MSY01000002ERR": "Duplication found for E-mail:{0}"

};
let message_confirm = {
    // common
    "MCOM0000001CFM": "Execute registration. Do you want to continue?",
    "MCOM0000002CFM": "Are you sure you want to cancel register data ?",

    // login
    "ML0001000001CFM": "Do you want to reset password?",
    "ML0001000002CFM": "Do you want to change password?",
    // Production Plan Upload and Maintenance
    "MPP01000001CFM": "Are you sure you want to unlock screen?",
    "MPP01000002CFM": "{0}<br>There are some record conflict. Do you want to continue proceed?",
    //Daily Production Plan Release
    "MPP02000001CFM": "Are you sure you want to unlock screen?",
    "MPP02000002CFM": "Are you sure you want to release data?",
    // Part Id Regsitration
    "MPI03000001CFM": "Are you sure to complete install part process of this vehicle in this tracking point?",
    "MPI03000002CFM": "Are you sure to cancel operation of part installation?"
};
let message_info = {
    // common
    "MCOM0000001INF": "Register success.",
    "MPP01000002INF": "Upload success.",

    // login
    "ML0001000001INF": "Reset Password success, Please access your email for new password",
    "ML0001000002INF": "Password is changed success.",
    //Daily Production Plan Release
    "MPP02000001INF": "Release success.",
    // Part Id Regsitration
    "MPI03000001INF": "Part installation is complete.",

};
let message_warning = {
    "MCOM0000001WRN": "No data to be registered.",
    "MCOM0000002WRN": "Cannot revert new data."
};
let config = {
    baseUrl: "localhost:8084/"
};