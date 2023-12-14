function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
    	console.log("found it");
		return c.substring(name.length, c.length);
    }
  }
  return "";
}

function setCookie(cname,cvalue,exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function deleteCookie(cookieName) {
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
	refreshDocumentCookie();

}

function refreshDocumentCookie() {
	console.log("yayay");
	// Attempt to refresh the value of document.cookie
    try {
        Object.defineProperty(document, 'cookie', {
            get: function() {
                var cookies = document.cookie.split('; ');
                return cookies.join('; ');
            }
        });
    } catch (e) {
        console.error('Failed to refresh document.cookie:', e);
    }
}

function partymode(){
	if(getCookie("fun") != ""){
		deleteCookie("fun");
		console.log("should have removed");
		document.querySelector("link[rel~='icon']").href = 'resources/static.png';
	}
	else{
		setCookie("fun", "true", 1/24);
		document.querySelector("link[rel~='icon']").href = 'resources/dynamic.gif';
	}
}



