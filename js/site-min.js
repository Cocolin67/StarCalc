function calculate(){var e=[document.getElementById("inpStar1").value,document.getElementById("inpStar2").value,document.getElementById("inpStar3").value,document.getElementById("inpStar4").value,document.getElementById("inpStar5").value,document.getElementById("inpStar6").value,document.getElementById("inpStar7").value,document.getElementById("inpStar8").value,document.getElementById("inpStar9").value,document.getElementById("inpStar10").value],t=document.getElementById("target").value,n=0,a=0,r=0;e.forEach((e=>{for(let o=e;o<t;o++)n+=gsCost(o),a+=magnetCost(o),r+=fragmentCost(o)})),document.getElementById("gs").innerHTML=n.toLocaleString(),document.getElementById("mag").innerHTML=a.toLocaleString(),document.getElementById("fragment").innerHTML=r.toLocaleString()}function isNumber(e){String.fromCharCode(e.which).match(/[0-9]/)||e.preventDefault()}function gsCost(e){var t=1e5*(e-10)+25e4;return e>=20&&(t*=1.3),e>=30&&(t*=1.3),e>=60&&(t*=1.3),e>=80&&(t*=1.3),e>=90&&(t*=1.3),e>=100&&(t*=1.3),e>=150&&(t*=1.1),e>=160&&(t*=1.1),e>=170&&(t*=1.1),e>=180&&(t*=1.1),e>=190&&(t*=1.1),e>=200&&(t*=1.1),e>=210&&(t*=1.1),e>=220&&(t*=1.1),e>=230&&(t*=1.1),e>=250&&(t*=1.1),e>=300&&(t*=1.1),e>=350&&(t*=1.1),e>=400&&(t*=1.1),e>=450&&(t*=1.1),e>=500&&(t*=1.1),e>=550&&(t*=1.1),Math.floor(100*t/(scrapyardModifier()-1+100))}function scrapyardModifier(){var e=document.getElementById("v2").value;return e>200?4*(e-200)+300:e>100?2*(e-100)+100:e}function magnetCost(e){var t=250*(e-10)+1e3;return e>=12&&(t*=.98),e>=13&&(t*=.98),e>=14&&(t*=.98),e>=15&&(t*=.98),e>=16&&(t*=.98),e>=17&&(t*=.98),e>=18&&(t*=.98),e>=19&&(t*=.98),e>=20&&(t*=.98),e>=21&&(t*=.98),e>=22&&(t*=.98),e>=23&&(t*=.99),e>=70&&(t*=1.04),e>=75&&(t*=1.04),e>=80&&(t*=1.06),e>=85&&(t*=1.06),e>=90&&(t*=1.06),e>=94&&(t*=1.06),e>=96&&(t*=1.06),e>=98&&(t*=1.05),e>=100&&(t*=1.05),e>=105&&(t*=1.05),e>=110&&(t*=1.05),e>=115&&(t*=1.03),e>=120&&(t*=1.05),e>=125&&(t*=1.05),e>=130&&(t*=1.05),e>=135&&(t*=1.05),e>=140&&(t*=1.05),e>=145&&(t*=1.05),e>=150&&(t*=1.05),e>=160&&(t*=1.05),e>=180&&(t*=1.05),e>=190&&(t*=1.05),e>=200&&(t*=1.05),e>=210&&(t*=1.05),e>=220&&(t*=1.05),e>=230&&(t*=1.035),e>=250&&(t*=1.1),e>=270&&(t*=1.14),e>=290&&(t*=1.15),e>=300&&(t*=1.04),e>=310&&(t*=1.1),e>=330&&(t*=1.1),e>=350&&(t*=1.05),e>=370&&(t*=1.1),e>=390&&(t*=1.018),e>=410&&(t*=1.1),e>=430&&(t*=1.1),e>=450&&(t*=1.06),e>=470&&(t*=1.1),e>=490&&(t*=1.05),e>=510&&(t*=1.09),e>=530&&(t*=1.09),e>=550&&(t*=1.09),e>=570&&(t*=1.09),e>=590&&(t*=1.07),e>=610&&(t*=1.1),e>=630&&(t*=1.1),e>=650&&(t*=1.1),e>=670&&(t*=1.07),e>=690&&(t*=1.05),e>=710&&(t*=1.1),e>=810&&(t*=1.1),e>=910&&(t*=1.1),e>=1010&&(t*=1.1),e>=1020&&(t*=1.1),e>=1090&&(t*=1.1),e>=1110&&(t*=1.3),e>=1120&&(t*=1.1),e>=1130&&(t*=1.1),e>=1210&&(t*=1.3),e>=1260&&(t*=1.18),e>=1285&&(t*=1.18),e>=1310&&(t*=1.4),e>=1360&&(t*=1.4),e>=1410&&(t*=1.45),e>=1460&&(t*=1.4),e>=1510&&(t*=1.3),e>=1560&&(t*=1.269),e>=1610&&(t*=1.1),e>=1660&&(t*=1.1),e>=1710&&(t*=1.3),e>=1760&&(t*=1.269),e>=1810&&(t*=1.1),e>=1810&&(t*=Math.pow(1.1,(e-1810)/50)),Math.floor(100*t/(scrapyardModifier()-1+100))}function fragmentCost(e){var t=e-10+4;return e>=60&&(t*=1.05),e>=70&&(t*=1.05),e>=75&&(t*=1.05),e>=80&&(t*=1.05),e>=85&&(t*=1.05),e>=90&&(t*=1.05),e>=94&&(t*=1.05),e>=96&&(t*=1.05),e>=98&&(t*=1.05),e>=100&&(t*=1.1),e>=110&&(t*=1.05),e>=115&&(t*=1.05),e>=120&&(t*=1.05),e>=125&&(t*=1.05),e>=130&&(t*=1.05),e>=140&&(t*=1.05),e>=150&&(t*=1.05),e>=160&&(t*=1.05),e>=170&&(t*=1.05),e>=180&&(t*=1.05),e>=190&&(t*=1.05),e>=200&&(t*=1.05),e>=210&&(t*=1.3),e>=260&&(t*=1.3),e>=310&&(t*=1.4),e>=410&&(t*=1.4),e>=510&&(t*=1.4),e>=610&&(t*=1.2),e>=710&&(t*=1.1),e>=810&&(t*=1.1),e>=910&&(t*=1.1),e>=1010&&(t*=1.1),Math.floor(100*t/(scrapyardModifier()-1+100))}