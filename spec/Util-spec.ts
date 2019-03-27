import { Util } from "../lib/Util";

describe("Unit - Util", () => {
	it("className should replace dashes and empty spaces", async done => {
		expect(Util.greenCheck("win32")).toEqual("√");
		expect(Util.greenCheck("darwin")).toEqual("✔");
		done();
	});
});
