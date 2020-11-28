/**
 * Người tạo: Dương Quốc Phú
 * Ngày tạo: 27/11/2020
 * Version: 1.0
 * 
 */
// Tối ưu code: document.getElementById dùng function()
function getMyEle(ele) {
    return document.getElementById(ele);
}

//Mục đích kiểm tra xem người dùng chọn radio bottom nào trả về người dùng đang chon radio buttom hiện tại
function LayLoaiXe() {
    var uberX = getMyEle('uberX').checked;
    var uberSUV = getMyEle('uberSUV').checked;
    var uberBlack = getMyEle('uberBlack').checked;
    var ketqua;

    if (uberX) {
        ketqua = "uberX";
    } else if (uberSUV) {
        ketqua = "uberSUV";
    } else if (uberBlack) {
        ketqua = "uberBlack";
    }
    return ketqua;
}

function TinhTien() {

    var laySoKm = document.getElementById('soKM').value;
    laySoKm = parseFloat(laySoKm);// chuyển chuổi số thành số thực

    var layThoiGianCho = document.getElementById('thoiGianCho').value;
    layThoiGianCho = parseFloat(layThoiGianCho);// chuyển chuổi số thành số thực

    var divThanhTien = document.getElementById('divThanhTien').style.display = "block";
    var spanTien = document.getElementById('xuatTien');

    var loaiXe = LayLoaiXe();
    var uberX_1 = 8000;
    var uberX_2 = 12000;
    var uberX_3 = 10000;
    var cho_1 = 2000;

    var uberSUV_1 = 9000;
    var uberSUV_2 = 14000;
    var uberSUV_3 = 12000;
    var cho_2 = 3000;

    var uberBlack_1 = 10000;
    var uberBlack_2 = 16000;
    var uberBlack_3 = 14000;
    var cho_3 = 4000;
    //Tính tiền tại đây
    var thanhTien = 0;
    switch (loaiXe) {
        case 'uberX':
            if (laySoKm <= 1) {
                thanhTien = laySoKm * uberX_1 + layThoiGianCho * cho_1;
            } else if (laySoKm > 1 && laySoKm <= 20) {
                thanhTien = uberX_1 + (laySoKm - 1) * uberX_2 + layThoiGianCho * cho_1;
            } else if (laySoKm > 20) {
                thanhTien = uberX_1 + 20 * uberX_2 + (laySoKm - 21) * uberX_3 + layThoiGianCho * cho_1;
            }
            break;
        case 'uberSUV':
            if (laySoKm <= 1) {
                thanhTien = laySoKm * uberSUV_1 + layThoiGianCho * cho_2;
            } else if (laySoKm > 1 && laySoKm <= 20) {
                thanhTien = uberSUV_1 + (laySoKm - 1) * uberSUV_2 + layThoiGianCho * cho_2;
            } else if (laySoKm > 20) {
                thanhTien = uberSUV_1 + 20 * uberSUV_2 + (laySoKm - 21) * uberSUV_3 + layThoiGianCho * cho_2;
            }
            break;
        case 'uberBlack':
            if (laySoKm <= 1) {
                thanhTien = laySoKm * uberBlack_1 + layThoiGianCho * cho_3;
            } else if (laySoKm > 1 && laySoKm <= 20) {
                thanhTien = uberBlack_1 + (laySoKm - 1) * uberBlack_2 + layThoiGianCho * cho_3;
            } else if (laySoKm > 20) {
                thanhTien = uberBlack_1 + 20 * uberBlack_2 + (laySoKm - 21) * uberBlack_3 + layThoiGianCho * cho_3;
            }
            break;
        default:
            break;
    }
    //var thanhTien = parseFloat(laysoKM) * 4000 + parseFloat(layThoiGianCho) * 2000;
    spanTien.innerHTML = thanhTien;
}