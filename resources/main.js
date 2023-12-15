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
  d.setTime(d.getTime() + (10 * 365 * 24 * 60 * 60));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function deleteCookie(cookieName) {
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

function partymode(){
	if(getCookie("fun") == "" || getCookie("fun") == "false"){
		document.querySelector("link[rel~='icon']").href = 'resources/dynamic.gif';
		deleteCookie("fun");
    setCookie("fun", "true", 1/24);
	}
	else{
    document.querySelector("link[rel~='icon']").href = 'resources/static.png';
    deleteCookie("fun");
		setCookie("fun", "false", 1/24);
	}
}

