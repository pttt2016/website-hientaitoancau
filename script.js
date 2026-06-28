function dangKyHocThu() {
  alert("Cảm ơn quý phụ huynh đã quan tâm! Trung tâm sẽ liên hệ tư vấn trong thời gian sớm nhất.");
}
function dangKyHocThu() {
  document.getElementById("lien-he").scrollIntoView({
    behavior: "smooth"
  });
}

function guiDangKy(event) {
  event.preventDefault();

  const hoTen = document.getElementById("hoTen").value;
  const soDienThoai = document.getElementById("soDienThoai").value;
  const lopHoc = document.getElementById("lopHoc").value;
  const ghiChu = document.getElementById("ghiChu").value;

  alert(
    "Cảm ơn " + hoTen + " đã đăng ký học thử lớp " + lopHoc +
    ". Trung tâm sẽ liên hệ qua số " + soDienThoai + " trong thời gian sớm nhất."
  );

  event.target.reset();
}
