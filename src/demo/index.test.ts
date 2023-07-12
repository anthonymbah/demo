import { textToMorseCode } from "./index";

describe.only("textToMorseCode", () => {
    it("should return morse code for SOS", () => {
        expect(textToMorseCode("SoS")).toBe("... --- ...");
    })
    
    it("should return morse code for ETA", () => {
        expect(textToMorseCode("ETA")).toBe(". - .-");
    })

    it("should return morse code for IDK", () => {
        expect(textToMorseCode("IDK")).toBe(".. -.. -.-");
    })
})