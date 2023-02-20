function showSolution(_qCode) {
  if (document.getElementById("dpq" + _qCode + "r").style.display == "none") {
    document.getElementById("dpq" + _qCode + "r").style.display = "block";
    document.getElementById("dpq" + _qCode + "t").innerHTML = "Çözümü Gizle";
      
  } else {
    document.getElementById("dpq" + _qCode + "r").style.display = "none";
    document.getElementById("dpq" + _qCode + "t").innerHTML = "Çözümü Göster";
  }
}

function showProof(_qCode) {
  if (document.getElementById("dpp" + _qCode).style.display == "none") {
    document.getElementById("dpp" + _qCode).style.display = "block";
    document.getElementById("dpp" + _qCode + "t").innerHTML = "İSPATI GİZLE";
      
  } else {
    document.getElementById("dpp" + _qCode).style.display = "none";
    document.getElementById("dpp" + _qCode + "t").innerHTML = "İSPATI GÖSTER";
  }
}

function showFBQuestion(_cId, _qCode, _link) {
  if (_link == 1 && (document.getElementById("dpfbquesf" + _qCode).innerHTML == "" || !document.getElementById("dpfbquesf" + _qCode).innerHTML.includes("dpfbquese"))) {
    document.getElementById("dpfbquesf" + _qCode).innerHTML = "<textarea class=\"form-control mx-0\" id=\"dpfbquesnt" + _qCode + "\" rows=\"2\" placeholder=\"Sorunun çözümü ile ilgili sorularınızı buraya yazabilirsiniz. Size dönüş yapabilmemiz için lütfen aşağıdaki bilgileri doldurun.\" style=\"background-color: #ffffdd\"></textarea><div class=\"row\"><div class=\"col\"><input type=\"email\" class=\"form-control mx-0\" id=\"dpfbquese" + _qCode + "\" placeholder=\"E-posta adresiniz\" style=\"background-color: #ffffdd\"></div><div class=\"col\"><input type=\"text\" class=\"form-control mx-0\" id=\"dpfbquesn" + _qCode + "\" placeholder=\"Adınız\" style=\"background-color: #ffffdd\"></div></div><button type=\"submit\" class=\"btn btn-danger btn-sm\" onclick=\"sendFBQuestion('" + _cId + "', '" + _qCode + "', 1);\">Gönder</button>";
	
  } else if (_link == 2 && (document.getElementById("dpfbquesf" + _qCode).innerHTML == "" || document.getElementById("dpfbquesf" + _qCode).innerHTML.includes("dpfbquese"))) {
    document.getElementById("dpfbquesf" + _qCode).innerHTML = "<textarea class=\"form-control mx-0\" id=\"dpfbquesnt" + _qCode + "\" rows=\"2\" placeholder=\"Lütfen bu soruda gördüğünüz hataları ya da iyileştirme önerilerinizi bizimle paylaşın.\" style=\"background-color: #ffffdd\"></textarea><button type=\"submit\" class=\"btn btn-danger btn-sm\" onclick=\"sendFBQuestion('" + _cId + "', '" + _qCode + "', 2);\">Gönder</button>";
	
  } else {
    document.getElementById("dpfbquesf" + _qCode).innerHTML = "";
  }
}

function showFBProof(_pCode) {
  document.getElementById("dpfbprooft" + _pCode).style.display = "none";
  document.getElementById("dpfbprooff" + _pCode).style.display = "block";
}

function sendFBQuestion(_cId, _qCode, _link) {
  var objHttp = new XMLHttpRequest();
  
  objHttp.onreadystatechange = function() {
    if (objHttp.readyState === 4 && objHttp.status === 200) {
      document.getElementById("dpfbquesf" + _qCode).innerHTML = "Geri bildiriminiz için teşekkür ederiz.";
    }
  }
  
  document.getElementById("dpfbquest" + _qCode).style.display = "none";
  if (_link == 1) {
    objHttp.open('GET', '/ajax/feedback?fbcid=' + _cId + '&fbqc=' + _qCode + '&fbnt=' + document.getElementById("dpfbquesnt" + _qCode).value + '&fbn=' + document.getElementById("dpfbquesn" + _qCode).value + '&fbe=' + document.getElementById("dpfbquese" + _qCode).value, true);
	
  } else {
    objHttp.open('GET', '/ajax/feedback?fbcid=' + _cId + '&fbqc=' + _qCode + '&fbnt=' + document.getElementById("dpfbquesnt" + _qCode).value, true);
  }
  objHttp.send();

}

function sendFBProof(_cId, _pCode) {
  var objHttp = new XMLHttpRequest();
  
  objHttp.onreadystatechange = function() {
    if (objHttp.readyState === 4 && objHttp.status === 200) {
      document.getElementById("dpfbprooff" + _pCode).innerHTML = "Geri bildiriminiz için teşekkür ederiz.";
    }
  }
  
  objHttp.open('GET', '/ajax/feedback?fbcid=' + _cId + '&fbpc=' + _pCode + '&fbnt=' + document.getElementById("dpfbproofnt" + _pCode).value, true);
  objHttp.send();
}

function sendContact() {
  var objHttp = new XMLHttpRequest();
  
  objHttp.onreadystatechange = function() {
    if (objHttp.readyState === 4 && objHttp.status === 200) {
      document.getElementById("dpfbcontact").innerHTML = "Mesajınız için teşekkür ederiz.";
    }
  }
  
  objHttp.open('GET', '/ajax/feedback?fbcid=203&fbnt=' + document.getElementById("dpfbnt").value + '&fbn=' + document.getElementById("dpfbn").value + '&fbe=' + document.getElementById("dpfbe").value, true);
  objHttp.send();
}

function convertTRChars(str) {
    var trMap = {
        'çÇ':'c',
        'ğĞ':'g',
        'şŞ':'s',
        'üÜ':'u',
        'ıİ':'i',
        'öÖ':'o'
    };

    for(var key in trMap) {
        str = str.replace(new RegExp('['+key+']','g'), trMap[key]);
    }

    return str;
}

MathJax = {
  loader: {load: ['ui/lazy']},
  tex: {
	macros: {
	  arccot: ['{ \\mathrm{arccot} \\ #1 }', 1],
	  arcsec: ['{ \\mathrm{arcsec} \\ #1 }', 1],
	  arccsc: ['{ \\mathrm{arccsc} \\ #1 }', 1],
	  sgn: ['\\mathrm{sgn} \\ #1', 1],
	  abs: ['\\mid #1 \\mid', 1],
	  ceiling: ['\\left\\lceil #1 \\right\\rceil', 1],
	  floor: ['\\left\\lfloor #1 \\right\\rfloor', 1]
	}
  },
  chtml: {
	mtextInheritFont: true
  }
};
