// Nav icon
const navBtn = document.querySelector('.nav-icon-btn');
const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.header__top-row');

navBtn.onclick = function () {
	navIcon.classList.toggle('nav-icon--active');
	nav.classList.toggle('header__top-row--mobile');
	document.body.classList.toggle('no-scroll');
}

// Phone mask
mask('[data-tel-input]');

// Delet '+'
const phoneInputs = document.querySelectorAll('[data-tel-input]');
phoneInputs.forEach((input)=>{
	input.addEventListener('input', ()=>{
	if (input.value == '+') input.value = '';
	})
	input.addEventListener('blur', () =>{
	if (input.value == '+') input.value = '';
	})
});

//map
ymaps.ready(init);
function init(){
	var myMap = new ymaps.Map ("map", {
		center: [59.943543, 30.338928],
		zoom: 16,
	})

	var myPlacemark = new ymaps.Placemark(
		[59.943543, 30.338928],
		{
			balloonContent:
			`
			<div class="balloon">
				<div class="balloon__address">Наб. реки Фонтанки 10-15</div>
				<div class="balloon__contacts">
					<a href="tel:+791234567">+8 (812) 123-45-67</a>
				</div>
			</div>
			`
		},
		{
			iconLayout: 'default#image',
			iconImageHref:
				'./img/map/location-pin.svg',
			iconImageSize: [40,40],
			iconImageOffset: [-20, -40],
		}
	);

	myMap.controls.remove('geolocationControl');
	myMap.controls.remove('searchControl');
	myMap.controls.remove('trafficControl');
	myMap.controls.remove('typeSelector');
	myMap.controls.remove('rulerControls');
	myMap.behaviors.disable(['scrollZoom']);

	myMap.geoObjects.add(myPlacemark);
	myPlacemark.balloon.open();
};
