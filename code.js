function pustoTu(napis){
  var dlugosc = napis.length
  if (dlugosc == 0) {
    return true; 
  } 
  else 
  return false;
}

function weryfikacja(mama){
  if (pustoTu(mama.elements["imie"].value)) {
    alert("Nie ma imienia !"); 
    return false; 
  }
  else 
  return true; 
}
