const header = document.querySelector('.header');
const logo = document.getElementById('logo');

// 現在の URL からベースパスを自動取得
// 例）/flower-shop/index.html → /flower-shop/
const basePath = location.pathname.replace(/index\.html$/, '');

// スクロール時の処理
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
        // ロゴをダークに切り替え

        // 学校のサーバ用
        // logo.src = '/2865/sunday-flower/icons/logo-dark.svg';

        // MAMP用
        // logo.src = 'icons/logo-dark.svg';

        // ブラウザ用(indexを右クリック＆Open with Live Server)
        // logo.src = '/icons/logo-dark.svg';

        // github用
        // logo.src = '/flower-shop/icons/logo-dark.svg';

        // 環境共通化用
        logo.src = basePath + 'icons/logo-dark.svg';


    } else {
        header.classList.remove('scrolled');
        // ロゴをライトに戻す

        // 学校のサーバ用
        // logo.src = '/2865/sunday-flower/icons/logo-light.svg';

        // MAMP用
        // logo.src = 'icons/logo-light.svg';

        // ブラウザ用(indexを右クリック＆Open with Live Server)
        // logo.src = '/icons/logo-light.svg';

        // github用
        // logo.src = '/flower-shop/icons/logo-light.svg';

        // 環境共通化用
        logo.src = basePath + 'icons/logo-light.svg';
    }
});
