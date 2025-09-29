document.getElementById("kiritishBtn").addEventListener("click", function () {
  const ism = document.getElementById("ism").value.trim()
  const familiya = document.getElementById("familiya").value.trim()
  const yosh = parseInt(document.getElementById("yoshInput").value.trim())

  const natija = document.getElementById("yoshNatijasi")
  const modal = document.getElementById("myModal")
  const close = document.querySelector(".close")
  let umumiykimligi = ""

  if (yosh >= 7 && yosh <= 14) {
    umumiykimligi = "Siz maktab o'quvchisi ekansiz!"
  } else if (yosh > 14 && yosh <= 40) {
    umumiykimligi = "Siz yoshlik davridasiz!"
  } else if (yosh > 40 && yosh <= 60) {
    umumiykimligi = "Siz keksalik sari qadam tashlayapsiz!"
  } 

  natija.innerHTML = `<strong>${ism} ${familiya}</strong>, yoshingiz: ${yosh} yosh. <br> ${umumiykimligi}`

  modal.style.display = "block"

  close.onclick = function () {
    modal.style.display = "none"
  }

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none"
    }
  }
})
