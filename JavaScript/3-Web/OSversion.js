// navigator.appVersion

function operatingSytem() { 
    var OSName="Unknown OS";
    if (navigator.appVersion.indexOf("Win")!=-1) OSName="Windows";
    if (navigator.appVersion.indexOf("Mac")!=-1) OSName="MacOS";
    if (navigator.appVersion.indexOf("X11")!=-1) OSName="UNIX";
    if (navigator.appVersion.indexOf("Linux")!=-1) OSName="Linux";
    if (navigator.appVersion.indexOf("Android")!=-1) OSName="Android";
    if (navigator.appVersion.indexOf("iPhone")!=-1) OSName="iPhone";
    if (navigator.appVersion.indexOf("iPad")!=-1) OSName="iPad";
    if (navigator.appVersion.indexOf("iPod")!=-1) OSName="iPod";
    // Display the OS name
    document.getElementById("OS").innerHTML = OSName;
} 