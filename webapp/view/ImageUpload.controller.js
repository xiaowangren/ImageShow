sap.ui.controller("com.ui.image.view.ImageUpload", {
  handleUploadComplete: function(oEvent) {
    var sResponse = oEvent.getParameter("response");
    if (sResponse) {
    	
      var sMsg = "";
      var m = /^\[(\d\d\d)\]:(.*)$/.exec(sResponse);
      if(m==null){
      	sMsg = "请求失败";
      }else if (m[1] == "200") {
      	//保存文本信息
        sMsg = "Return Code: " + m[1] + "\n" + m[2], "SUCCESS", "Upload Success";
        oEvent.getSource().setValue("");
      } else {
        sMsg = "Return Code: " + m[1] + "\n" + m[2], "ERROR", "Upload Error";
      }
      sap.m.MessageToast.show(sMsg);
    }
  },
  handleUploadPress: function(oEvent) {
  	//group
  	 var BiaoTi = this.getView().byId("BiaoTi").getValue();
	 ////user
	 var ZiBiaoTi = this.getView().byId("ZiBiaoTi").getValue();
	 ////text
	 var MiaoShu = this.getView().byId("MiaoShu").getValue();
	 var BiaoTiParam = new sap.ui.unified.FileUploaderParameter({name: "group", value: BiaoTi});
	 var ZiBiaoTiParam = new sap.ui.unified.FileUploaderParameter({name: "user", value: ZiBiaoTi});
	 var MiaoShuParam = new sap.ui.unified.FileUploaderParameter({name: "text", value: MiaoShu});
	 var FileTypeParam = new sap.ui.unified.FileUploaderParameter({name: "fileType", value: "image"});
	 var oFileUploader = this.getView().byId("fileUploader");
	 oFileUploader.insertParameter(BiaoTiParam,0);
     oFileUploader.insertParameter(ZiBiaoTiParam,1);
     oFileUploader.insertParameter(MiaoShuParam,2);
     oFileUploader.insertParameter(FileTypeParam,3);
    if(!oFileUploader.getValue()) {
      sap.m.MessageToast.show("请选择文件");
      return;
    }
    oFileUploader.upload();
  },

  handleTypeMissmatch: function(oEvent) {
    var aFileTypes = oEvent.getSource().getFileType();
    $.each(aFileTypes, function(key, value) {aFileTypes[key] = "*." +  value});
    var sSupportedFileTypes = aFileTypes.join(",");
    sap.m.MessageToast.show("不支持 *." + oEvent.getParameter("fileType") +
                " 的文件格式. 请选择如下格式的文件: " +
                sSupportedFileTypes);
  }
});