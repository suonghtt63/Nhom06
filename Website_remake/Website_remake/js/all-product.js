let filter_col = document.querySelector('#filter-col')

document.querySelector('#filter-toggle').addEventListener('click', () => filter_col.classList.toggle('active'))

document.querySelector('#filter-close').addEventListener('click', () => filter_col.classList.toggle('active'))

let products = [
    {
        name: 'Bảng Mắt 4 Ô Màu ...',
        image1: './images/spnb11-1.jpg',
        image2: './images/spnb11-2.jpg',
        curr_price: '180.000 đ',
        old_price: ''
    },
    {
        name: 'Son Kem Lì Mềm Mại..',
        image1: './images/spnb12-1.jpg',
        image2: './images/spnb12-2.png',
        curr_price: '170.000 đ',
        old_price: '210.000 đ'
    },
    {
        name: 'Designer Collectio...',
        image1: './images/spnb9-1.jpg',
        image2: './images/spnb9-2.jpg',
        curr_price: '170.000 đ',
        old_price: ''
    },
    {
        name: 'Xịt Dưỡng Tóc Tạo...',
        image1: './images/spnb10-1.jpg',
        image2: './images/spnb10-2.jpg',
        curr_price: '69.000 đ',
        old_price: '99.000 đ'
    },

    {
        name: 'Nước Hoa Chiết Cha...',
        image1: './images/spnb4-1.png',
        image2: './images/spnb4-2.png',
        curr_price: '350.000 đ',
        old_price: ' '
    },
    {
        name: 'Bảng Mắt 12 Ô Disc...',
        image1: './images/spnb5-1.png',
        image2: './images/spnb5-2.png',
        curr_price: '159.000 đ',
        old_price: '199.000 đ'
    },
    {
        name: 'Son Túi Stimmung B...',
        image1: './images/spnb6-1.jpg',
        image2: './images/spnb6-2.jpg',
        curr_price: '79.000 đ',
        old_price: '100.000 đ'
    },
    {
        name: 'Set 3 Hộp Phấn Mắt...',
        image1: './images/spnb7-1.png',
        image2: './images/spnb7-2.jpg',
        curr_price: '199.000 đ',
        old_price: '280.000 đ'
    },
    {
        name: 'Kem Dưỡng Ẩm Mềm ...',
        image1: './images/spnb8-1.jpeg',
        image2: './images/spnb8-2.jpg',
        curr_price: '99.000 đ',
        old_price: '120.000 đ'
    },

]

let product_list = document.querySelector('#products')

renderProducts = (products) => {
    products.forEach(e => {
        let prod = `
            <div class="col-4 col-md-6 col-sm-12">
                <div class="product-card">
                    <div class="product-card-img">
                        <img src="${e.image1}" alt="">
                        <img src="${e.image2}" alt="">
                    </div>
                    <div class="product-card-info">
                    <div class="product-btn">
                        <button class="btn-flat-now btn-bag-hover btn-cart-add">
                            <i class='bx bxs-shopping-bag'></i>
                        </button>
                        <button class="btn-flat-like btn-like-hover btn-cart-add">
                            <i class='bx bxs-heart'></i>
                        </button>
                        <a href="TrangSanPhamChiTiet.html" class="btn-flat btn-hover btn-shop-now">chi tiết</a>
                    </div>
                        <div class="product-card-name">
                            ${e.name}
                        </div>
                        <div class="product-card-price">
                        <div class="curr-price">${e.curr_price}</div>
                            <del>${e.old_price}</del>
                        </div>
                    </div>
                </div>
            </div>
        `
        product_list.insertAdjacentHTML("beforeend", prod)
    })
}

renderProducts(products)