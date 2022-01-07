let filter_col = document.querySelector('#filter-col')

document.querySelector('#filter-toggle').addEventListener('click', () => filter_col.classList.toggle('active'))

document.querySelector('#filter-close').addEventListener('click', () => filter_col.classList.toggle('active'))

let products = [
    {
        name: 'Bảng Mắt 4 Ô Màu ...',
        image1: './images/sptdm1-1.jpg',
        image2: './images/sptdm1-2.jpg',
        curr_price: '180.000 đ',
        old_price: ''
    },

    {
        name: 'Designer Collectio...',
        image1: './images/sptdh2-1.jpg',
        image2: './images/sptdh2-2.jpg',
        curr_price: '170.000 đ',
        old_price: ''
    },
    {
        name: 'Xịt Dưỡng Tóc Tạo...',
        image1: './images/sptdb3-1.jpg',
        image2: './images/sptdb3-2.jpg',
        curr_price: '69.000 đ',
        old_price: '99.000 đ'
    },

 
    {
        name: 'Son Túi Stimmung B...',
        image1: './images/sptdb1-1.jpg',
        image2: './images/sptdb1-2.jpg',
        curr_price: '79.000 đ',
        old_price: '100.000 đ'
    },
    {
        name: 'Son Túi Stimmung B...',
        image1: './images/sptdm2-1.jpg',
        image2: './images/sptdm2-2.jpg',
        curr_price: '79.000 đ',
        old_price: '100.000 đ'
    },
    {
        name: 'Son Túi Stimmung B...',
        image1: './images/sptdh3-1.jpg',
        image2: './images/sptdh3-2.jpg',
        curr_price: '79.000 đ',
        old_price: '100.000 đ'
    },
    {
        name: 'Son Túi Stimmung B...',
        image1: './images/sptdh1-1.jpg',
        image2: './images/sptdh1-2.jpg',
        curr_price: '79.000 đ',
        old_price: '100.000 đ'
    },
    {
        name: 'Son Túi Stimmung B...',
        image1: './images/sptdb2-1.jpg',
        image2: './images/sptdb2-2.jpg',
        curr_price: '79.000 đ',
        old_price: '100.000 đ'
    },
    {
        name: 'Son Túi Stimmung B...',
        image1: './images/sptdm3-1.jpg',
        image2: './images/sptdm3-2.jpg',
        curr_price: '79.000 đ',
        old_price: '100.000 đ'
    },


]

let product_list = document.querySelector('#makeup-product')

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