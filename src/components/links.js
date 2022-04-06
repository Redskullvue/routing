import RegisterPage from "./register.vue"
import homePage from "./home.vue"
import LoginPage from "./login.vue"
import ProductsPage from "./products.vue"
import productDetail from "./product.vue"
export default[
    {path : "/" , component : homePage},
    {path : "/register" , component : RegisterPage},
    {path : "/login" , component : LoginPage},
    {path : "/products" , component : ProductsPage},
    {path : "/product/:product_id" , name : 'ProductDetailPage' , component : productDetail},
]