for(let i  = 1; i < 13 ; i++)
{
	document.querySelector('#busback').innerHTML += '<div id ="p_'+i+'" class="seat">'+i+'</div>';
}


let lastresult = 0;
let totalPassenger = 0;
function onScanner(scanresult)
{
	if (scanresult != lastresult )
	{
		lastresult = scanresult;
		scanresult = scanresult.split("-");
		document.querySelector('#passengerinfo').innerHTML = scanresult[0]+"\n <hr>"+scanresult[2]+"\n <hr> Koltuk No :"+scanresult[1];
		
		document.querySelector('#p_'+scanresult[1]+'').className += ' occupied';
		totalPassenger++;
		document.querySelector('#totalpassengers').innerHTML = "Toplam Yolcu : "+totalPassenger;

		let audio = new Audio('audio/ring.mp3');
		audio.play();


	}

}


let html5qrCode = new Html5QrcodeScanner('qrcodereader',{fps:10 , qrbox:250});
html5qrCode.render(onScanner);

