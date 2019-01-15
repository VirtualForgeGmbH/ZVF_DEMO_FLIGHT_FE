/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"com/vf/ZVF_DEMO_FLIGHT_FE/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/vf/ZVF_DEMO_FLIGHT_FE/test/integration/pages/View1",
	"com/vf/ZVF_DEMO_FLIGHT_FE/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.vf.ZVF_DEMO_FLIGHT_FE.view.",
		autoWait: true
	});
});