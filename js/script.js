$(function() {
    document.cookie = "thirdPartyCookieEnabled=true";
    
    var cookie = readCookie("thirdPartyCookieEnabled");

    if (cookie) {
        window.top.postMessage("thirdPartyCookieEnabled:true", "*");
        eraseCookie("thirdPartyCookieEnabled");
        $("#info").html("Third Party Cookie Enabled");
        console.log("thirdPartyCookieEnabled:true");
    } else {
        window.top.postMessage("thirdPartyCookieEnabled:false", "*");
        $("#info").html("Third Party Cookie Disabled");
        console.log("thirdPartyCookieEnabled:false");
    }
});

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function eraseCookie(name) {
    document.cookie = name+'=; Max-Age=-1;';  
}