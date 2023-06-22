


var mypath = "/d/dummi/users/";

     var inputFolder = new Folder(mypath);
    var inputFiles = inputFolder.getFiles("*.png");
 
    for(index in inputFiles)
    {
        
    var flname=GetFileName(String(inputFiles[index]))
    alert(flname)
   // var file = new File(path + flname);
 }
 
 
 
 function GetFileName(fullPath)
{
    var m = fullPath.match(/(.*)[\/\\]([^\/\\]+)\.\w+$/);
    return m[2];
}