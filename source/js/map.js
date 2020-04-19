  ymaps.ready(init);
    function init(){
      var myMap = new ymaps.Map("map", {
        center: [59.93862518, 30.32290403],
        zoom: 16,
        controls: []
      },
      {suppressMapOpenBlock: true} );

    myPlacemark = new ymaps.Placemark([59.93862518, 30.32290403], {
        hintContent: 'Магазин мягких игрушек "Мишка"',
        balloonContent: 'ул. Большая Конюшенная 19/8'
      }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/icon-map-pin.svg',
        iconImageSize: [66, 101],
        iconImageOffset: [-40, -85]
      });

      myMap.geoObjects.add(myPlacemark);
    }
