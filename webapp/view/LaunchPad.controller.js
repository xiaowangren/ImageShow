sap.ui.controller("com.ui.image.view.LaunchPad", {
	// onInit:function(){
	// 	var usrid = jQuery.sap.getUriParameters().get("usrid").toUpperCase();
	// 	var sServiceUrl = "/sap/opu/odata/SAP/ZLAUNCHPAD_SRV/";
 //       var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl, true);
 //       sap.ui.getCore().setModel(oModel);
	// 	var mParameters = {};
	// 	var comId = this.getView().byId("container");
	// 	mParameters['async'] = true;
	// 	mParameters['success'] = jQuery.proxy(function(sRes) {
	// 		var json = sRes.results;
	// 		var oModelJson = new sap.ui.model.json.JSONModel();
	// 		oModelJson.setData({"json":json});
	// 		comId.setModel(oModelJson);
	// 	});
	// 	mParameters['error'] = jQuery.proxy(function(eRes) {
	// 		sap.m.MessageToast.show("网络未连接");
	// 	}, this);
		
	// 	//http://znbb-erpd-01.zhenergy.com.cn:8000/sap/opu/odata/SAP/ZLAUNCHPAD_SRV/EE_PAD_SET?$filter=Uname eq 'ac-wangjx'
	// 	sap.ui.getCore().getModel().read("/EE_PAD_SET?$filter=(Uname eq '"+usrid+"')", mParameters);
	// }     
	handleNavOnSelect: function(event) {
		console.log(event.getSource());
		var context = event.getSource().getCustomData()[0].getValue();
		sap.ui.getCore().byId("idImageapp").app.to(context);
		


	}
});