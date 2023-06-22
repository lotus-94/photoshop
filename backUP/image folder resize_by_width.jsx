

var mypath = "/d/dummi/users/";


     var inputFolder = new Folder(mypath );
    var inputFiles = inputFolder.getFiles("*.png");

    for(index in inputFiles)
        {
    // open the file
        var fileToOpen = new File(inputFiles[index]);
        open(fileToOpen);
        saveFile()
        }



function saveFile() {

doc = app.activeDocument;  

// change the color mode to RGB.  Important for resizing GIFs with indexed colors, to get better results
doc.changeMode(ChangeMode.RGB);  

var fWidth = 900;
//var fHeight = 400;
var resolution = 150;
var jpegQuality = 12;

  doc.resizeImage(UnitValue(fWidth,"px"),null,resolution,ResampleMethod.BICUBIC);
  
  
 // var newFolder = '~/Documents/Resizing/test/final';
 var Folder_nm="New_users"
 
 var folder1 = Folder("/d/dummi/users/"+Folder_nm);
//Check if it exist, if not create it.
if(!folder1.exists) folder1.create();

    var newFolder = '/d/dummi/users/'+Folder_nm;
  var newName = doc.name.replace(/\.[^\.]+$/, '');     
var saveFile = File(newFolder + "/" + newName + ".jpg"); 
//alert(saveFile)
var jpgSaveOptions = new JPEGSaveOptions();  
jpgSaveOptions.embedColorProfile = true;  
jpgSaveOptions.formatOptions = FormatOptions.STANDARDBASELINE;  
jpgSaveOptions.matte = MatteType.NONE;  
jpgSaveOptions.quality = jpegQuality;  
activeDocument.saveAs(saveFile, jpgSaveOptions, true, Extension.LOWERCASE); 

// close the original document without saving
doc.close(SaveOptions.DONOTSAVECHANGES);
}