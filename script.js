
let high=35;
let hotspot=40;

document.addEventListener('DOMContentLoaded', function() {
  
  // for the updation of temperature
    function updateTemperatures(temp1, temp2, temp3) {
      document.getElementById('temp1').innerText = temp1;
      document.getElementById('temp2').innerText = temp2;
      document.getElementById('temp3').innerText = temp3;
      changeStatus();
  }
// for changing the status of the device
  function changeStatus(){
    let temp1 = document.getElementById('temp1').innerText;
    let temp2 = document.getElementById('temp2').innerText;
    let temp3 = document.getElementById('temp3').innerText;
    let device = document.getElementById('status');

     if ((temp1 > high && temp1<=hotspot )|| (temp2 > high && temp2<=hotspot )|| (temp3 > high && temp3<=hotspot)) {
        device.className = 'device yellow';
    } else if(temp1 > hotspot || temp2 > hotspot || temp3 > hotspot) {
        device.className = 'device red';
    }
    else {
        device.className = 'device green';
    }
  }

// for the updation of high and hotspot temperature
  function updateSettings(high, hotspot) {
    document.getElementById('high').innerText = high;
    document.getElementById('hotspot').innerText = hotspot;
    changeStatus();
  }
  // for changing the high temperature
  function changeHigh() {
    let newhigh = prompt("Enter the new high temperature");
    if(newhigh!=null && !isNaN(newhigh)){
      high = newhigh;
      updateSettings(high, hotspot);
    }
  }
// for changing the hotspot temperature
  function changeHotspot() {
    let newhotspot = prompt("Enter the new hotspot temperature");
    if(newhotspot!=null && !isNaN(newhotspot)){
      hotspot = newhotspot;
      updateSettings(high, hotspot);
    }
  }
  updateSettings(high, hotspot);
  updateTemperatures(25, 30, 35);
  document.getElementById('btnHigh').addEventListener('click', function() {changeHigh()});
  document.getElementById('btnHot').addEventListener('click', function() {changeHotspot()});
  changeStatus();
  });
  