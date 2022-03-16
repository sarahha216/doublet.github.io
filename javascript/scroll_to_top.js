//Khi người dùng cuộn chuột thì gọi hàm scrollFunction
window.onscroll = function() {scrollFunction()};
// khai báo hàm scrollFunction
function scrollFunction() {
    // Kiểm tra vị trí hiện tại của con trỏ so với nội dung trang
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        //nếu lớn hơn 300px thì hiện button
        document.getElementById("myScroll").style.display = "block";
    } else {
         //nếu nhỏ hơn 300px thì ẩn button
        document.getElementById("myScroll").style.display = "none";
    }
}
//gán sự kiện click cho button
document.getElementById('myScroll').addEventListener("click", function(){
    //Nếu button được click thì nhảy về đầu trang
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});