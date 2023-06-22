


var mypath = "/d/dummi/users/New_users/";
 var resolution = 96; 

     var inputFolder = new Folder(mypath );
    var inputFiles = inputFolder.getFiles("*.jpg");

    for(index in inputFiles)
        {
            var fileToOpen = new File(inputFiles[index]);
           open(fileToOpen);
         doc = app.activeDocument;  
           doc.changeMode(ChangeMode.RGB);  
          
           doc.resizeImage(null,null,resolution,ResampleMethod.BICUBIC);
           doc.save();
           doc.close();
         
        }





  
  