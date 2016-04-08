sap.ui.controller("com.ui.image.view.ImageView", {
	onInit:function(){
		var json = 
			{
				group:"大班优秀学员",
				files:[
				{
					user:"zhang3",
					imageList:[
						{url:"image/a1.png"},{text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr"}]
				},{
					user:"li4",
					imageList:[
						{url:"image/a3.png"},{url:"image/a4.png"},{text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invi"}]
				}]};
		
		var oModel = new sap.ui.model.json.JSONModel();
		oModel.setData(json);
		this.getView().byId("ObjectPageLayout").setModel(oModel,"jsonDetail");
	}
});