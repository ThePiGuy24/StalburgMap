function initMark() {

	car = L.icon({
	    iconUrl: 'res/images/car.png',
	    iconSize: [16, 16]
	});

	engineer = L.icon({
	    iconUrl: 'res/images/engineer.png',
	    iconSize: [16, 16]
	});
	
	prologue = L.polyline([
		[-77.066495,-58.095703],[-77.21564,-56.601563],[-77.125378,-55.942383],[-76.999935,-55.294189],[-76.65445,-54.799805],[-76.457776,-54.766846],[-76.442332,-56.414795],[-76.421713,-57.5354],[-76.375208,-57.941895],[-76.318156,-58.304443],[-75.960233,-60.040283],[-75.644984,-61.347656],[-75.458589,-61.798096],[-75.126684,-63.07251],[-74.781612,-64.237061],[-74.694854,-64.56665],[-74.313295,-65.456543],[-73.812574,-66.42334],[-73.562631,-66.829834],[-73.000122,-67.631836],[-72.584117,-68.203125],[-72.205321,-68.57666],[-71.749873,-68.818359],[-71.346528,-68.950195],[-71.180667,-69.038086],[-70.801366,-69.367676],[-70.491905,-69.730225],[-70.329836,-69.98291],[-70.177653,-70.455322],[-69.97173,-71.367188],[-69.771356,-72.213135],[-69.634158,-72.927246],[-69.526834,-73.674316],[-69.43441,-74.421387],[-69.368703,-74.904785],[-69.244472,-75.498047],[-68.708476,-77.4646],[-68.142942,-79.398193],[-66.75725,-83.71582],[-66.10717,-85.407715],[-65.730626,-86.209717],[-65.54027,-86.231689],[-65.385147,-86.143799],[-65.284282,-85.9021],[-65.201468,-84.056396],[-65.164579,-82.792969],[-65.118395,-81.463623],[-65.062868,-80.354004],[-64.75539,-74.245605],[-64.689713,-73.070068],[-64.534272,-70.85083],[-64.263684,-66.96167],[-64.153742,-65.577393],[-63.797043,-62.720947],[-63.440686,-60.194092],[-63.159316,-58.150635],[-62.799957,-55.601807],[-62.441242,-53.349609],[-62.124436,-51.416016],[-61.980267,-50.427246],[-61.933782,-49.768066],[-61.918271,-48.977051],[-61.954451,-47.230225],[-61.990588,-46.362305],[-61.995747,-45.505371],[-62.016374,-43.560791],[-62.042138,-41.704102],[-62.0936,-38.210449],[-62.0936,-36.793213],[-62.083315,-36.046143],[-62.103883,-34.519043],[-62.124436,-33.101807],[-62.103883,-32.299805],[-62.088458,-31.937256],[-61.944118,-31.179199],[-61.7939,-30.465088],[-61.689872,-29.608154],[-61.601172,-27.91626],[-61.580264,-27.432861],[-61.486005,-27.169189],[-61.307177,-27.004395],[-61.058285,-26.971436],[-60.823494,-27.004395],[-60.646262,-27.125244],[-60.004479,-27.344971],[-59.265881,-27.542725],[-58.756805,-27.619629],[-58.430482,-27.630615],[-57.833055,-27.718506],[-57.15412,-27.850342],[-56.322629,-28.037109],[-54.908199,-28.410645],[-52.855864,-28.916016],[-50.618103,-29.388428],[-49.887557,-29.509277],
		[-49.4467,-29.630127],[-48.879167,-29.871826],[-48.56752,-29.959717],[-48.20271,-30.025635],[-47.680183,-30.19043],[-47.107523,-30.476074],[-46.073231,-31.05835],[-45.836454,-31.190186],[-45.158801,-31.453857],[-42.439674,-32.167969],[-41.779505,-32.354736],[-39.385264,-33.068848],[-37.561997,-33.563232],[-36.738884,-33.760986],[-35.871247,-33.881836],[-33.165145,-33.991699],[-31.998759,-33.936768],[-30.883369,-33.62915],[-29.954935,-33.343506],[-28.613459,-33.00293],[-28.052591,-32.816162],[-27.059126,-32.497559],[-26.470573,-32.431641],[-25.601902,-32.508545],[-24.866503,-32.684326],[-24.166802,-32.937012],[-23.775291,-33.057861],[-22.735657,-33.200684],[-20.004322,-33.585205],[-18.16673,-33.815918],[-16.909684,-33.826904],[-15.68651,-33.936768],[-15.040296,-34.057617],[-14.530415,-34.28833],[-13.613956,-34.837646],[-12.661778,-35.375977],[-11.888853,-35.749512],[-11.178402,-35.969238],[-9.817329,-36.672363],[-8.178868,-37.672119],[-7.177201,-38.430176],[-6.719165,-39.034424],[-5.900189,-39.935303],[-4.981505,-40.869141],[-4.2259,-41.517334],[-3.546318,-42.000732],[-2.712609,-42.495117],[-1.37316,-43.275146],[0.736064,-44.395752],[1.417092,-44.714355],[3.579213,-45.450439],[5.801827,-46.054688],[7.1663,-46.329346],[8.05923,-46.40625],[9.416548,-46.395264],[11.544616,-46.417236],[13.613956,-46.494141],[14.572951,-46.538086],[15.474857,-46.428223],[16.077486,-46.318359],[16.415009,-46.318359],[16.551962,-45.725098],[16.720385,-44.802246],[16.794024,-44.044189],[17.004262,-42.670898],[17.14079,-41.671143],[17.119793,-40.891113],[16.951724,-40.100098],[16.657244,-39.265137],[16.151369,-38.221436],[15.654776,-37.452393],[14.711135,-35.804443],[13.752725,-33.991699],[12.608176,-31.618652],[11.813588,-29.871826],[11.436955,-29.080811],[11.264612,-28.520508],[11.135287,-27.960205],[11.027472,-26.92749],[10.844096,-25.697021],[10.854886,-24.98291],[10.90883,-24.433594],[11.005904,-23.895264],[11.070603,-23.455811],[11.210734,-22.91748],[11.22151,-22.093506],[11.156845,-20.961914],[11.092166,-20.511475],[10.714587,-19.753418],[10.217625,-18.808594],[9.849804,-18.039551],[9.676569,-17.578125],[9.60075,-17.138672],[9.427387,-16.45752],[9.340672,-15.941162],[9.351513,-15.567627],[9.492408,-15.117188],[9.622414,-14.798584],
	],{color: 'red'}).addTo(mark_route);

	part1 = L.polyline([
		[9.622414,-14.798584],[8.048352,-14.084473],[7.580328,-14.326172],[7.024572,-14.589844],[6.511815,-14.545898],[6.227934,-14.029541],[5.375398,-13.930664],[4.598327,-14.194336],[3.612107,-14.260254],[2.921097,-13.721924],[0.845917,-13.425293],[-0.362546,-13.381348],[-1.691649,-13.348389],[-3.052754,-13.095703],[-7.307985,-12.7771],[-12.672496,-12.172852],[-16.794024,-11.887207],[-21.227942,-11.184082],[-32.175612,-10.876465],[-44.574817,-9.997559],[-54.470038,-9.18457],[-57.833055,-7.888184],[-58.470721,-7.009277],[-58.42473,-9.84375],[-61.090168,-8.833008],[-61.132629,-7.272949],[-61.554109,-7.77832],[-62.308794,-7.668457],[-62.885205,-7.888184]
	],{color: 'red'}).addTo(mark_route);

	part2 = L.polyline([
		[-62.885205,-7.888184],[-63.015106,-6.251221],[-63.312683,-6.833496],[-63.602333,-7.514648],[-63.840668,-8.10791],[-63.932545,-8.547363],[-63.966319,-9.09668],[-64.000052,-9.84375],[-64.057785,-10.513916],[-64.244595,-11.206055],[-64.496456,-11.799316],[-64.731952,-12.128906],[-65.086018,-12.315674],[-65.343931,-12.359619],[-65.626557,-12.32666],[-65.86125,-12.546387],[-66.004618,-13.139648],[-66.093817,-13.85376],[-66.187139,-15.402832],[-66.311035,-16.523438],[-66.591948,-17.556152],[-66.895596,-18.544922],[-67.118748,-19.313965],[-67.466503,-20.654297],[-67.717778,-21.555176],[-68.640555,-21.643066],[-69.9303,-22.148438],[-69.990535,-23.115234],[-70.252029,-23.774414],[-70.78691,-23.862305],[-71.314877,-23.972168],[-71.821986,-24.499512],[-72.248917,-25.3125],[-72.561085,-26.564941],[-72.809581,-27.883301],[-73.169536,-29.399414],[-73.453473,-31.59668],[-73.818698,-32.958984],[-73.689611,-33.33252],[-73.571954,-32.717285],[-73.428424,-33.266602],[-73.428424,-35.639648],[-73.794187,-38.803711],[-74.325173,-41.176758],[-75.021986,-43.747559],[-75.930885,-45.373535],[-75.989521,-46.120605],[-75.930885,-46.955566],[-75.968226,-49.262695]
	],{color: 'red'}).addTo(mark_route);

	L.MarkControl = L.Control.extend({

        options: {
            position: 'topleft',
            callback: null,
            kind: '',
            html: ''
        },

        onAdd: function (map) {
            var container = L.DomUtil.create('div', 'leaflet-control leaflet-bar'),
                link = L.DomUtil.create('a', '', container);

            link.href = '#';
            link.title = 'Start from ' + this.options.name;
            link.innerHTML = this.options.html;
            L.DomEvent.on(link, 'click', L.DomEvent.stop)
                      .on(link, 'click', function () {
                      	this.options.callback.call();
                      }, this);

            return container;
        }

    });

    L.button_start_prologue = L.MarkControl.extend({

        options: {
        	name: 'Prologue',
            position: 'topleft',
            html: '<strong>P</strong>',
            callback: start_prologue
        }

    });

    L.button_start_part1 = L.MarkControl.extend({

        options: {
        	name: 'Part 1',
            position: 'topleft',
            html: '<strong>I</strong>',
            callback: start_part1
        }

    });

    L.button_start_part2 = L.MarkControl.extend({

        options: {
        	name: 'Part 2',
            position: 'topleft',
            html: '<strong>II</strong>',
            callback: start_part2
        }

    });

    L.button_start_part3 = L.MarkControl.extend({

        options: {
        	name: 'Part 3',
            position: 'topleft',
            html: '<strong>III</strong>',
            callback: start_part3
        }

    });

    mark_control_prologue = new L.button_start_prologue();
    mark_control_part1 = new L.button_start_part1();
    mark_control_part2 = new L.button_start_part2();
    mark_control_part3 = new L.button_start_part3();
    map.addControl(mark_control_prologue);
    //map.addControl(mark_control_part1);
    //map.addControl(mark_control_part2);
    //map.addControl(mark_control_part3);

}

function start_prologue() {
	mark_control_prologue.remove();
	mark_control_part1.remove();
	mark_control_part2.remove();
	mark_control_part3.remove();

	if (map.hasLayer(mark_route)) {
		map.removeLayer(mark_route);
	}
	map.setView([-77.75826785702777,-56.60156250000001],5);

	var mark = L.Marker.movingMarker(prologue.getLatLngs(),30000,{icon: car}).addTo(map);

	var engine = new Howl({src: ['res/sound/engine.mp3'], loop: true});
	var car_stop = new Howl({src: ['res/sound/car_stop.mp3']});
	var traffic = new Howl({src: ['res/sound/traffic.mp3'],volume:0.7});
	var car_init = new Howl({src: ['res/sound/car_init.mp3']}).once('load',function(){this.play();}).on('end',function(){
		engine.play();
		traffic_pl = traffic.play();
		mark.start();
	});

	var t0 = performance.now();
	mark.on('end',function(time) {
		traffic.fade(0.7,0,3000,traffic_pl);
		console.log("stopping the car");
		car_stop.play();
		car_stop.on('end',function(){
			var t1 = performance.now();
			console.log("prologue took " + (t1 - t0) + "ms");
			mark.remove(); // sorry Mark
			engine.unload();
			traffic.unload();
			car_init.unload();
			car_stop.unload();
			//start_part1();
			map.addControl(mark_control_prologue);
		});
		engine.stop();
		traffic.on('fade',function(){
			traffic.stop();
		});
	});

}

function start_part1() {
	mark_control_prologue.remove();
	mark_control_part1.remove();
	mark_control_part2.remove();
	mark_control_part3.remove();

	if (map.hasLayer(mark_route)) {
		map.removeLayer(mark_route);
	}
	map.setView([9.373193,-14.798584],5);

	var mark = L.Marker.movingMarker(part1.getLatLngs(),10000,{icon: engineer}).addTo(map);
	mark.start();
	
	var t0 = performance.now();
	mark.on('end',function(time) {
		var t1 = performance.now();
		console.log("part1 took " + (t1 - t0) + "ms");
		mark.remove();
		start_part2();
	});

}

function start_part2() {
	mark_control_prologue.remove();
	mark_control_part1.remove();
	mark_control_part2.remove();
	mark_control_part3.remove();

	if (map.hasLayer(mark_route)) {
		map.removeLayer(mark_route);
	}
	map.setView([9.373193,-14.798584],5);

	var mark = L.Marker.movingMarker(part2.getLatLngs(),10000,{icon: engineer}).addTo(map);
	mark.start();
	
	var t0 = performance.now();
	mark.on('end',function(time) {
		var t1 = performance.now();
		console.log("part2 took " + (t1 - t0) + "ms");
		mark.remove();
		start_part3();
	});

}

function start_part3() {
	mark_control_prologue.remove();
	mark_control_part1.remove();
	mark_control_part2.remove();
	mark_control_part3.remove();

	if (map.hasLayer(mark_route)) {
		map.removeLayer(mark_route);
	}
	map.setView([9.373193,-14.798584],5);

	var mark = L.Marker.movingMarker(part1.getLatLngs(),10000,{icon: engineer}).addTo(map);
	mark.start();
	
	var t0 = performance.now();
	mark.on('end',function(time) {
		var t1 = performance.now();
		console.log("part3 took " + (t1 - t0) + "ms");
		mark.remove();
		map.addControl(mark_control_prologue);
		map.addControl(mark_control_part1);
		map.addControl(mark_control_part2);
		map.addControl(mark_control_part3);
	});

}