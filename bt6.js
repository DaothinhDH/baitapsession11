let number = Number(prompt("Hãy nhập số nguyên tố bạn muốn tìm"));
let count = 0;
let n = 2;
while (count < number) {
    // kiểm tra xem có phải số nguyên tố không
    let stn = true;
    for (let i = 2; i * i <= n; i++) {
        if (n % i == 0) {
            stn = false;
            break;
        }
    }
    // nếu n là số nguyên tố,in ra và tăng biến cout lên +1
    if (stn) {
        console.log(n);
        count++;
    }
    n++;
}
