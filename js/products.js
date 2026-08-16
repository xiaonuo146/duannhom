document.addEventListener('DOMContentLoaded', () => {
    // 1. Khai báo các biến DOM cần thiết
    const productListContainer = document.getElementById('productList');
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const categoryFilter = document.getElementById('categoryFilter');
    const originFilter = document.getElementById('originFilter');

    // Đường dẫn tới cơ sở dữ liệu tệp tĩnh JSON
    const DATA_URL = 'data/products.json';
    
    // Mảng toàn cục lưu trữ danh sách sản phẩm gốc sau khi tải về
    let products = [];

    // Bản đồ dịch tên danh mục (Hiển thị nhãn Tiếng Việt thân thiện)
    const categoryLabels = {
        'coffee': 'Cà phê',
        'tea': 'Trà đặc sản',
        'honey': 'Mật ong',
        'pepper': 'Tiêu & Gia vị',
        'dried-fruit': 'Trái cây sấy'
    };

    // Bản đồ dịch tên tỉnh thành xuất xứ (Nếu file JSON lưu không dấu)
    const provinceLabels = {
        'Dak Lak': 'Đắk Lắk',
        'Gia Lai': 'Gia Lai',
        'Kon Tum': 'Kon Tum',
        'Dak Nong': 'Đắk Nông',
        'Lam Dong': 'Lâm Đồng'
    };

    // 2. Hàm gọi API nội bộ tải file products.json
    async function loadProducts() {
        try {
            const response = await fetch(DATA_URL);
            if (!response.ok) {
                throw new Error('Lỗi! Không thể tải dữ liệu sản phẩm.');
            }
            products = await response.json();
            
            // Khởi tạo giao diện sau khi tải dữ liệu thành công
            setupFilters();
            renderProducts(products);
        } catch (error) {
            console.error('Lỗi kiến trúc hệ thống:', error);
            if (productListContainer) {
                productListContainer.innerHTML = `
                    <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--brown);">
                        <p style="font-size: 18px; font-weight: bold;">⚠️ Hệ thống dữ liệu gặp sự cố</p>
                        <p style="font-size: 14px; color: var(--text-gray); margin-top: 8px;">Vui lòng kiểm tra lại sự tồn tại hoặc cú pháp của tệp data/products.json</p>
                    </div>
                `;
            }
        }
    }

    // 3. Hàm tạo các lựa chọn lọc động (Dynamic Filters setup)
    function setupFilters() {
        if (!categoryFilter || !originFilter) return;

        // Dùng Set để lọc ra các danh mục và tỉnh thành duy nhất không bị trùng lặp
        const uniqueCategories = new Set();
        const uniqueProvinces = new Set();

        products.forEach(p => {
            if (p.category) uniqueCategories.add(p.category);
            if (p.origin && p.origin.province) uniqueProvinces.add(p.origin.province);
        });

        // Đưa các danh mục vào select categoryFilter
        uniqueCategories.forEach(cat => {
            const option = document.createElement('option');
            option.value = cat;
            option.textContent = categoryLabels[cat] || cat;
            categoryFilter.appendChild(option);
        });

        // Đưa các tỉnh vào select originFilter
        uniqueProvinces.forEach(prov => {
            const option = document.createElement('option');
            option.value = prov;
            option.textContent = provinceLabels[prov] || prov;
            originFilter.appendChild(option);
        });
    }

    // 4. Hàm render hiển thị sản phẩm lên giao diện HTML
    function renderProducts(productsToRender) {
        if (!productListContainer) return;

        // Xóa sạch nội dung cũ
        productListContainer.innerHTML = '';

        // Trường hợp không có sản phẩm nào thỏa mãn điều kiện lọc
        if (productsToRender.length === 0) {
            productListContainer.innerHTML = `
                <div style="grid-column: 1/-1; text-align: center; padding: 60px 0;">
                    <span style="font-size: 48px;">🔍</span>
                    <h3 style="margin-top: 15px; color: var(--brown-dark);">Không tìm thấy sản phẩm nào</h3>
                    <p style="color: var(--text-gray); margin-top: 6px; font-size: 14.5px;">Vui lòng thử lại với từ khóa hoặc bộ lọc khác.</p>
                </div>
            `;
            return;
        }

        // Duyệt mảng và render động cấu trúc thẻ Card sản phẩm
        productsToRender.forEach(product => {
            // Chuẩn hóa nhãn hiển thị danh mục và tỉnh thành
            const categoryText = categoryLabels[product.category] || product.category;
            const provinceText = provinceLabels[product.origin?.province] || product.origin?.province || 'Tây Nguyên';
            
            // Định dạng giá tiền VNĐ (Ví dụ: 180000 -> 180.000đ)
            const formattedPrice = product.price 
                ? `${product.price.toLocaleString('vi-VN')}đ` 
                : 'Liên hệ';

            const card = document.createElement('article');
            card.className = 'product-card';
            card.innerHTML = `
                <img class="product-image" src="${product.images[0] || 'images/common/placeholder.jpg'}" alt="${product.name}">
                <div class="product-info">
                    <span class="product-category">${categoryText}</span>
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-origin">📍 Xuất xứ: ${provinceText} ${product.origin?.cooperative ? `(${product.origin.cooperative})` : ''}</p>
                    <p class="product-description">${product.description || ''}</p>
                    <strong class="product-price">${formattedPrice} <span style="font-size: 12px; color: var(--text-muted); font-weight: normal;">/ ${product.unit || 'sản phẩm'}</span></strong>
                </div>
            `;
            productListContainer.appendChild(card);
        });
    }

    // 5. Hàm lọc tổng hợp (Tìm kiếm + Phân loại + Xuất xứ)
    function filterProducts() {
        const searchQuery = searchInput ? searchInput.value.trim().toLowerCase() : '';
        const selectedCategory = categoryFilter ? categoryFilter.value : '';
        const selectedOrigin = originFilter ? originFilter.value : '';

        // Tiến hành lọc mảng products gốc
        const filtered = products.filter(product => {
            // A. Khớp từ khóa tìm kiếm (so theo tên hoặc mô tả sản phẩm)
            const matchesSearch = searchQuery === '' || 
                product.name.toLowerCase().includes(searchQuery) || 
                (product.description && product.description.toLowerCase().includes(searchQuery));

            // B. Khớp phân loại danh mục
            const matchesCategory = selectedCategory === '' || product.category === selectedCategory;

            // C. Khớp nguồn gốc tỉnh thành
            const matchesOrigin = selectedOrigin === '' || (product.origin && product.origin.province === selectedOrigin);

            return matchesSearch && matchesCategory && matchesOrigin;
        });

        // Hiển thị danh sách sản phẩm sau lọc
        renderProducts(filtered);
    }

    // 6. Gắn các sự kiện (Event Listeners) để theo dõi tương tác người dùng
    if (searchInput) {
        // Tìm kiếm thời gian thực ngay khi gõ phím (Realtime Search - Rất mượt)
        searchInput.addEventListener('input', filterProducts);
    }

    if (searchButton) {
        // Tìm kiếm khi click nút "Tìm kiếm"
        searchButton.addEventListener('click', filterProducts);
    }

    if (categoryFilter) {
        // Lọc khi thay đổi dropdown danh mục
        categoryFilter.addEventListener('change', filterProducts);
    }

    if (originFilter) {
        // Lọc khi thay đổi dropdown xuất xứ
        originFilter.addEventListener('change', filterProducts);
    }

    // Khởi chạy hệ thống nạp dữ liệu lần đầu
    loadProducts();
});