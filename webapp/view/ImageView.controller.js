sap.ui.controller("com.ui.image.view.ImageView", {
	onInit:function(){
		var json = [
			{
				group:"大班优秀学员",
				files:[
				{
					user:"zhang3",
					url:"image/a1.png",
					text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invi"
				},{
					user:"li4",
					url:"image/a2.png",
					text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invi"

				}]},
			{
				group:"中班优秀学员",
				files:[
				{
					user:"xiaoxu",
					url:"image/a3.png"
				},{
					user:"xiaowang",
					url:"image/a4.png"	
				}]
			}
			];
		
		var oModel = new sap.ui.model.json.JSONModel();
		oModel.setData({"json":json});
		this.getView().byId("ObjectPageLayout").setModel(oModel);
	}
});