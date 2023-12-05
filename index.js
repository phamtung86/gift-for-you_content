var btn = document.getElementsByClassName("close--click");
btn[0].addEventListener("click",function onoff(){
    var home = btn[0].parentElement;
    console.log(home);
    home.style.display = "none";
})
function countTime() {
    var dateLove = new Date("2023-01-20T00:00:00-00:00");
    var datenow = new Date();
    var count = datenow - dateLove;
    let days = Math.floor(count / 1000 / 60 / 60 / 24);
    let h = Math.floor(count / 1000 / 60 / 60) ;
    let m = Math.floor(count / 1000 / 60) ;
    let s = Math.floor(count/1000) ;
    var session = "";
     h =(h < 10) ? "0" + h :h;
    m = (m < 10) ? "0" + m :m;
    s = (s < 10) ? "0" + s :s;
    var time = days + " Ngày "+  + h + " Giờ "+ m + " Phút " + s +" Giây " +session;
    document.getElementById("ngay").innerText = days ;
    document.getElementById("ngay").textContent = days +" Ngày";
    document.getElementById("gio").innerText = h;
    document.getElementById("gio").textContent = h +" Giờ";
    document.getElementById("phut").innerText= m;
    document.getElementById("phut").textContent = m + " Phút";
    document.getElementById("giay").innerText = s;
    document.getElementById("giay").textContent = s + " Giây";
    setTimeout(countTime,1000);
}
countTime();