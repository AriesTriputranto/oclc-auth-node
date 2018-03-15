let User = require("../src/user.js");

describe("User methods", function () {

    const user = new User({
        "principalID": "wera9f92-3751-4r1c-r78a-d78d13df26b1",
        "principalIDNS": "urn:oclc:wms:da",
        "authenticatingInstitutionId": "128807"
    });

    it("Should be settable", function () {
        expect(user.principalID).toEqual("wera9f92-3751-4r1c-r78a-d78d13df26b1");
        expect(user.principalIDNS).toEqual("urn:oclc:wms:da");
        expect(user.authenticatingInstitutionId).toEqual("128807");
    });
});