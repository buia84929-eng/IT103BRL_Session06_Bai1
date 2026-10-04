let orderCode = "";
let isOrderValid = false;
let choice;

do {
    choice = prompt(`
========================================
       GYM FITNESS - BAN PHU KIEN
========================================
1. Nhap va chuan hoa ma don hang
2. Tinh tien va in hoa don
3. Thoat chuong trinh
========================================
Nhap lua chon cua ban (1-3):
`);

    if (choice === null) {
        choice = "3";
    }

    switch (choice.trim()) {
        case "1":
            let inputCode = prompt("Nhap ma don hang:");

            if (inputCode === null) {
                console.log("Ban chua nhap ma don hang.");
                break;
            }

            orderCode = inputCode.trim().toUpperCase();

            if (orderCode.startsWith("GYM-") && orderCode.length >= 8) {
                isOrderValid = true;

                console.log("Ma don hang hop le.");
                console.log("Ma sau khi chuan hoa: " + orderCode);

                console.log("Ma so don hang: " + orderCode.slice(4));
            } else {
                isOrderValid = false;
                console.log("Ma don hang khong hop le.");
                console.log("Ma phai bat dau bang GYM- va co it nhat 8 ky tu.");
            }

            break;

        case "2":
            if (isOrderValid === false) {
                console.log("Vui long nhap ma don hang hop le truoc.");
                break;
            }

            let total = 0;
            let productName = "";
            let price = 0;

            let numberProduct = Number(prompt("Nhap so luong loai phu kien muon mua:"));

            if (numberProduct <= 0) {
                console.log("So luong khong hop le.");
                break;
            }

            console.log("-".repeat(40));
            console.log("           HOA DON GYM FITNESS");
            console.log("-".repeat(40));
            console.log("Ma don hang: " + orderCode);
            console.log("-".repeat(40));

            for (let i = 1; i <= numberProduct; i++) {
                productName = prompt(
                    "Nhap phu kien thu " + i +
                    "\nSHAKER - Binh lac" +
                    "\nGLOVES - Gang tay" +
                    "\nSTRAP - Day keo lung"
                );

                if (productName === null) {
                    productName = "";
                }

                productName = productName.trim().toUpperCase();

                if (productName === "SHAKER") {
                    price = 120000;
                } else if (productName === "GLOVES") {
                    price = 180000;
                } else if (productName === "STRAP") {
                    price = 150000;
                } else {
                    price = 0;
                    console.log("Phu kien khong hop le.");
                }

                if (price > 0) {
                    total = total + price;

                    console.log(
                        productName.padEnd(20) +
                        price.toString().padStart(15) +
                        " VND"
                    );
                }
            }

            let vip = prompt("Khach hang co the VIP khong? (Y/N)");

            if (vip === null) {
                vip = "N";
            }

            vip = vip.trim().toUpperCase();

            let discount = 0;

            if (vip === "Y") {
                discount = total * 10 / 100;
            }

            let finalTotal = total - discount;

            console.log("-".repeat(40));
            console.log(
                "Tong tien:".padEnd(20) +
                total.toString().padStart(15) +
                " VND"
            );

            console.log(
                "Giam gia:".padEnd(20) +
                discount.toString().padStart(15) +
                " VND"
            );

            console.log(
                "Thanh toan:".padEnd(20) +
                finalTotal.toString().padStart(15) +
                " VND"
            );

            console.log("-".repeat(40));
            console.log("       CAM ON QUY KHACH!");
            console.log("-".repeat(40));
            break;

        case "3":
            console.log("Da thoat chuong trinh.");
            break;

        default:
            console.log("Lua chon khong hop le. Vui long chon tu 1 den 3.");
    }

} while (choice.trim() !== "3");