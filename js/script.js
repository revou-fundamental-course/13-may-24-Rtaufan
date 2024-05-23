let iskelilingvisble = false; //keliling is Hide
function hideOrShow(){
    if (iskelilingvisble == false) {
        iskelilingvisble = true;
        document.getElementById('luas-section').style.display ='none';
        document.getElementById('keliling-section').style.display ='block';
    } else {
        iskelilingvisble = false;
        document.getElementById('luas-section').style.display ='block';
        document.getElementById('keliling-section').style.display ='hide';
    }
    
}

console.log ('Test Hitung')
function luas() {
    let alas = document.getElementById("alas").value;
    let tinggi = document.getElementById("tinggi").value;
    if (alas > 0 && tinggi > 0 ) {
        let luas = parseInt(alas) * parseInt(tinggi) / 2;
        document.getElementById('luas').innerHTML = ("Diketahui" + "<br>" + "L = 1/2 x a x t" + "<br>" +
            "L = 1/2 x " + alas + " x " + tinggi + "<br>" + "L = " + luas);
    } else {
        document.getElementById('luas').innerText = 'Mohon untuk memasukkan angka positif yang benar';
    }
}

function keliling() {
    let sisi_a = document.getElementById("sisi_a").value;
    let sisi_b = document.getElementById("sisi_b").value;
    let sisi_c = document.getElementById("sisi_c").value;
    if (sisi_a > 0 && sisi_b > 0 && sisi_c > 0) {
        let keliling = parseInt(sisi_a) + parseInt(sisi_b) + parseInt(sisi_c);
        document.getElementById('keliling').innerHTML = ("Diketahui K = S1 + S2 + S3" + "<br>" +
            "K = " + sisi_a + " + " + sisi_b + " + " + sisi_c + "<br>" + "K = " + keliling);
    } else {
        document.getElementById('keliling').innerText = 'Mohon untuk memasukkan angka positif yang benar';
    }
}