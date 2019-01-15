sap.ui.define(["sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/odata/v2/ODataModel",
	"sap/m/MessageToast"
], function (Controller, JSONModel, ODataModel, MessageToast) {
	"use strict";
	return Controller.extend("com.vf.ZVF_DEMO_FLIGHT_FE.controller.View1", {
		onInit: function () {
			Date.prototype.toShortFormat = function () {
				var month_names = [
					"Jan",
					"Feb",
					"Mar",
					"Apr",
					"May",
					"Jun",
					"Jul",
					"Aug",
					"Sep",
					"Oct",
					"Nov",
					"Dec"
				];
				var day = this.getDate();
				var month_index = this.getMonth();
				var year = this.getFullYear();
				return month_names[month_index] + " " + day + ", " + year;
			};
			var that = this;
			var today = new Date();
			this.getView().byId("datepicker").setValue(today.toShortFormat());
		},
		/**
		 *@memberOf com.vf.ZVF_DEMO_FLIGHT_FE.controller.View1
		 */
		onSearch: function (oEvent) {
			var cityfrom = this.getView().byId("cityFrom").getSelectedKey(); 
			var cityto = this.getView().byId("cityTo").getSelectedKey();
			var departDate = this.getView().byId("datepicker").getValue();

			var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/SAP/ZDEMO_FLIGHT_SRV/");
			var that = this;
			
			oModel.read("/FlightSet", {
				filters: [new sap.ui.model.Filter({
						path: "Cityfrom",
						operator: sap.ui.model.FilterOperator.EQ,
						value1: cityfrom
					}),
					new sap.ui.model.Filter({
						path: "Cityto",
						operator: sap.ui.model.FilterOperator.EQ,
						value1: cityto
					}),
				],

				success: function (oData, Response) {
					var resultModel = new JSONModel(oData);
					var oModel = resultModel.getProperty("/results");
				},

				error: function (e) {
					MessageToast.show("Odata call failed! (' + e.message +  ')");
				}
			}); 

		}
	});
});