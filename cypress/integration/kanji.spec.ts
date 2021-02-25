describe("Basic tests", () => {
	before(() => {
		cy.visit("http://localhost:3000/");
		cy.waitForReact(1000);
	});

	it("Kanji listed from set filter settings are all level 20", () => {
		cy.react("Field", { props: { name: "level" } })
			.clear()
			.type("50");
		cy.react("Button", { props: { type: "submit" } }).click();
		cy.wait(500);

		cy.react("KanjiRowItem").should("have.length", 35);
	});
});
