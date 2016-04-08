sap.ui.jsview("com.ui.image.view.ImageApp", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf com.ui.image.webapp.view.ImageApp
	 */
	getControllerName: function() {
		return "com.ui.image.view.ImageApp";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away.
	 * @memberOf com.ui.image.webapp.view.ImageApp
	 */
	createContent: function(oController) {

		this.app = new sap.m.App({});
		var idLaunchPad = sap.ui.view({
			id: "idLaunchPad",
			viewName: "com.ui.image.view.LaunchPad",
			type: sap.ui.core.mvc.ViewType.XML
		});
		this.app.addPage(idLaunchPad);
		var  idImageView= sap.ui.view({
			id: "idImageView",
			viewName: "com.ui.image.view.ImageView",
			type: sap.ui.core.mvc.ViewType.XML
		});
		this.app.addPage(idImageView);
		
		return this.app;
	}

});