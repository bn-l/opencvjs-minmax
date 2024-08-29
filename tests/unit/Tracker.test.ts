import { translateException } from "./cv";

beforeAll(setupOpenCv);

describe("Tracker", () => {
    it("shoud pass TS type validations", async () => {
        try {
            new cv.TrackerMIL();
        } catch (err) {
            throw translateException(err);
        }
    });
});
