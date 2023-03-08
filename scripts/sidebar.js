const csv = `link,src,title
https://cadasa.github.io/,https://cadasa.github.io/lou.JPG,<center><font size="+3">🏠</font></center>
https://cadasa.github.io/norway_trails.html,https://cadasa.github.io/vizapps/hiking_trails.JPG,Famous Hiking Trails in Europe I Have Hiked
https://cadasa.github.io/earthquake_map.html,https://cadasa.github.io/vizapps/earthquakes.JPG,Real-Time Earthquake Map
https://cadasa.github.io/pandora.html,https://cadasa.github.io/vizapps/pandora_leak.JPG,Pandora Leak - Offshore Companies per Country
https://cadasa.github.io/cat.html,https://cadasa.github.io/vizapps/Cat.JPG,Global Airline Direct Routes & COVID Restrictions
https://cadasa.github.io/woa.html,https://cadasa.github.io/vizapps/woa.JPG,Planets Alignment
https://cadasa.github.io/temp.html,https://cadasa.github.io/vizapps/temp.JPG,Global Temperature since the Last Glacial Maximum (24000 yr BP)
https://cadasa.github.io/le191121.html,https://cadasa.github.io/vizapps/le.JPG,Total Lunar Eclipse in November 19, 2021
https://cadasa.github.io/vne.html,https://cadasa.github.io/vizapps/vne.JPG,Path to Net-Zero Emissions by 2050
https://cadasa.github.io/nz0.html,https://cadasa.github.io/vizapps/nz0.JPG,Fossil Fuel Assets Worldwide by 2036 in Net Zero Transition
https://cadasa.github.io/aurora.html,https://cadasa.github.io/vizapps/auora.JPG,Real-Time Aurora Borealis Forecast
https://cadasa.github.io/aid.html,https://cadasa.github.io/vizapps/aid.JPG,Global Chinese Loan and Investment
https://cadasa.github.io/flc.html,https://cadasa.github.io/vizapps/flc.JPG,The 1st Non-Stop Flight HAN-SFO of Bamboo Airways
https://cadasa.github.io/slr.html,https://cadasa.github.io/vizapps/slr.JPG,Prediction of Sea Level Rise
https://cadasa.github.io/lap.html,https://cadasa.github.io/vizapps/lap.JPG,Lunar Analemma and Phases Observed from Monte Cridola - Italy
https://cadasa.github.io/nkm.html,https://cadasa.github.io/vizapps/nkm.JPG,North Korea's Line of Fire
https://cadasa.github.io/droute.html,https://cadasa.github.io/vizapps/droute.JPG,Shortest Driving Route between Two Cities
https://cadasa.github.io/tdf-21.html,https://cadasa.github.io/vizapps/tdf.JPG,Tour de France Map
https://cadasa.github.io/gold_mines.html,https://cadasa.github.io/vizapps/10_mines.JPG,Top 10 Mines in the World
https://cadasa.github.io/us_trails.html,https://cadasa.github.io/vizapps/us_trails.JPG,All the Hiking Trails in the US
https://cadasa.github.io/ai_tennis.html,https://cadasa.github.io/vizapps/ai_tennis.JPG,A.I Tennis
https://cadasa.github.io/lisno_map.html,https://cadasa.github.io/vizapps/ncs.JPG,Norwegian Continental Shelf Map with Lithostrat Wells
https://cadasa.github.io/360_photo.html,https://cadasa.github.io/vizapps/360_photo.JPG,Visualize a Panorama Photo in 3D
https://cadasa.github.io/mtt.html,https://cadasa.github.io/mtt.JPG,LaTEX Equation and Plotter
https://cadasa.github.io/icf.html,https://cadasa.github.io/icf.JPG,Interactive Curve Fitting
https://cadasa.github.io/scs.html,https://cadasa.github.io/scs.JPG,South China Sea Map
https://cadasa.github.io/measure.html,https://cadasa.github.io/measure.JPG,Measure Distance on Map
https://cadasa.github.io/blsr.html,https://cadasa.github.io/vizapps/blsr.JPG,Band-Limited Seismic Reflectivity
https://cadasa.github.io/stratworld.html,https://cadasa.github.io/vizapps/stratworld.JPG,World Stratigraphic Atlas
https://cadasa.github.io/fieldle.html,https://cadasa.github.io/vizapps/fieldle.JPG,Guess Oil/Gas Field in 6 tries
https://cadasa.github.io/f&t.html,https://cadasa.github.io/vizapps/f&t.JPG,My Stadium Collection
https://cadasa.github.io/flight_tracking.html,https://cadasa.github.io/vizapps/flight_tracking.JPG,Real-Time Flight Tracking
https://cadasa.github.io/matrix.html,https://cadasa.github.io/vizapps/matrix.JPG,Matrix Multiplication
https://cadasa.github.io/queens.html,https://cadasa.github.io/vizapps/queens.JPG,Solving Queens Problem using Python in Browser
https://cadasa.github.io/tm22.html,https://cadasa.github.io/vizapps/tm22.JPG,Moon Phase & Libration
https://cadasa.github.io/regression.html,https://cadasa.github.io/regression.JPG,Multi-trend Regression Analysis
https://cadasa.github.io/spatial_dvc.html,https://cadasa.github.io/spatial_dvc.JPG,Geospatial Data View/Conversion
https://cadasa.github.io/wem.html,https://cadasa.github.io/wem.JPG,Wave-Equation Modelling using FD vs. NN and PINN
https://cadasa.github.io/co2.html,https://cadasa.github.io/vizapps/co2.JPG,CO2 Emissions from Countries & Regions`

/*function openPopup(link) {
  const popup = document.createElement('div');
  popup.style.position = 'fixed';
  popup.style.top = '20%';
  popup.style.left = '17.5%';
  popup.style.transform = 'translate(-10%, -10%)';
  popup.style.backgroundColor = 'white';
  //popup.style.border = '2px solid black';
  //popup.style.padding = '10px';
  popup.style.height = '80%';
  popup.style.width = '80%';
  popup.style.zIndex = 9999;
  const iframe = document.createElement('iframe');
      iframe.src = link;
      iframe.style.width = '100%';
      iframe.style.height = '100%';

  const close = document.createElement('div');
      close.innerText = '✖️';
      close.style.align = 'center';
      close.style.width = "20px";
      close.style.height = "20px";
      close.style["background-color"] = "white";
      close.style.position = "absolute";
      close.style["z-index"] = 100;
      close.style.top = '0%';
      close.style.left = '100%';
      close.style.cursor = 'pointer';
      //parent.append(close);
  const fullscreen = document.createElement('div');
      fullscreen.innerText = '🖥️';
      fullscreen.style.width = "20px";
      fullscreen.style.height = "20px";
      fullscreen.style["background-color"] = "white";
      fullscreen.style.position = "absolute";
      fullscreen.style["z-index"] = 100;
      fullscreen.style.top = `20px`;
      fullscreen.style.left = `100%`;
      fullscreen.style.cursor = 'pointer';
      //parent.append(fullscreen);

  const closePopup = () => {
        document.body.removeChild(popup);
        popup.removeChild(close);
        popup.removeChild(fullscreen);
        if (closeCallback) closeCallback();
      };

  const maxPopup = () => {
        popup.requestFullscreen();
        if (closeCallback) closeCallback();
      };


  close.onclick = (e) => {
        closePopup();
        e.stopPropagation();
        return false;
      };

  fullscreen.onclick = (e) => {
        maxPopup();
        e.stopPropagation();
        return false;
      };
  popup.appendChild(iframe);
  popup.appendChild(close);
  popup.appendChild(fullscreen);
  document.body.appendChild(popup);
}*/

const listingDiv = document.getElementById('listings');
// Use PapaParse to parse the CSV data
const items = Papa.parse(csv, { header: true }).data;



  /*items.forEach(item => {
    const li = document.createElement('h4');
    const a = document.createElement('a');
    a.href = item.link;
    a.textContent = item.title;
    a.onclick = (event) => {
      event.preventDefault();
      openPopup(item.link);
    };
    li.appendChild(a);
    listingDiv.appendChild(li);
  });*/

// Add each item to the list
/*		    items.forEach(item => {
					// Create a list item element
					const li = document.createElement('h4');

					// Create a link element
					const a = document.createElement('a');
					a.href = item.link;
					a.target = 'iframe';
					a.textContent = item.title;
					a.addEventListener('click', e => {
						e.preventDefault();
						document.getElementById('iframe').src = e.target.href;
					});

					// Append the link to the list item
					li.appendChild(a);

					// Append the list item to the listing
					listingDiv.appendChild(li);
				});*/
// Generate HTML code for the list
const listHtml = items.map(item => '<p><b><a href="' + item.link + '" style="text-decoration: none;">' + item.title + '</a></p>').join('');

// Add the list to the sidebar
listingDiv.innerHTML = listHtml;
//const map = new mapboxgl.Map({
//    container: 'map',
//  });
if (window.location !== window.parent.location) {
  // The code is running inside an iframe
} else {
  // The code is not running inside an iframe

function toggleSidebar(id) {
const elem = document.getElementById(id);
// Add or remove the 'collapsed' CSS class from the sidebar element.
// Returns boolean "true" or "false" whether 'collapsed' is in the class list.
const collapsed = elem.classList.toggle('collapsed');
const padding = {};
// 'id' is 'right' or 'left'. When run at start, this object looks like: '{left: 300}';
  padding[id] = collapsed ? 0 : 300; // 0 if collapsed, 300 px if not. This matches the width of the sidebars in the .sidebar CSS class.

// Use `map.easeTo()` with a padding option to adjust the map's center accounting for the position of sidebars.
map.easeTo({
padding: padding,
duration: 1000 // In ms. This matches the CSS transition duration property.
});
}
}

//map.on('load', () => {
//toggleSidebar('left');
//});
