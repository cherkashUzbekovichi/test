navigator.geolocation.getCurrentPosition(function (position) {
    let longitude = position.coords.longitude;
    let latitude = position.coords.latitude;
  
    let path = 'https://www.openstreetmap.org/#map=18/' + latitude + '/' + longitude;
    let link = document.querySelector('p');
    link.innerHTML = "<a href ='"+ path +"' >Посмотреть местоположение</a>";
  });
  
  