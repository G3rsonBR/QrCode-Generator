const qrText = document.getElementById("inputUrl");
const qrImagem = document.getElementById("qrImagem");
const imgBox = document.getElementById("imgBox");

function gerarQR(){
  if(qrText.value.length > 0){
      qrImagem.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText.value}`;
      imgBox.classList.add("show-img");
  } else {
      qrText.classList.add('error');
      setTimeout(()=>{
          qrText.classList.remove('error');
      }, 1000)
  }
}