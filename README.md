Inspiration: 
https://10minuteschool.com/

Live:
https://courageous-taffy-346e31.netlify.app/


/* #pung(pungProductfour) #css starts  */
.pungProductfour{
    padding: 5rem;
}
.pungProductfour h2{
    font-size: 35px;
}
.pungProductfour .product-grid {
    background: #fff;
    border: 1px solid #e5e5e5;
    border-radius: 22px;
}

.pungProductfour .product-grid .product-image {
    padding: 10px;
    border-radius: 20px;
    overflow: hidden;
    position: relative;
}

.pungProductfour .product-grid .product-image a.image {
    display: block;
}

.pungProductfour .product-grid .product-image a.image:before {
    content: '';
    background-color: #e52d53;
    width: 100%;
    height: 50%;
    border-radius: 20px;
    opacity: .1;
    position: absolute;
    left: 0;
    bottom: 0;
    transition: all ease .35s;
}

.pungProductfour .product-grid:hover .product-image a.image:before {
    opacity: 0.4;
    height: 100%;
}

.pungProductfour .product-grid .product-image img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transform: scale(.85);
    transition: all 0.5s ease 0s;
}

.pungProductfour .product-grid:hover .product-image img {
    transform: scale(1);
}

.pungProductfour .product-grid .product-like-icon {
    color: #f5f5f5;
    font-size: 18px;
    line-height: 18px;
    position: absolute;
    top: 15px;
    right: 15px;
    z-index: 1;
    transition: all 0.3s ease 0s;
}

.pungProductfour .product-grid:hover .product-like-icon {
    color: red;
    top: 20px;
    right: 20px;
    transition-delay: 0.2s;
}

.pungProductfour .product-grid .product-like-icon:hover {
    color: #1b33a1;
}

.pungProductfour .product-grid .product-content {
    padding: 20px 10px;
    position: relative;
}

.pungProductfour .product-grid .rating {
    color: #999;
    font-size: 12px;
    padding: 0;
    margin: 0 0 7px;
    list-style: none;
}

.pungProductfour .product-grid .rating li.fas {
    color: #e52d53;
}

.pungProductfour .product-grid .title {
    font-size: 18px;
    font-weight: 700;
    text-transform: capitalize;
    margin: 0 0 12px;
}

.pungProductfour .product-grid .title a {
    color: #000;
    transition: all 0.3s ease 0s;
}

.pungProductfour .product-grid .title a:hover {
    color: #e52d53;
}

.pungProductfour .product-grid .price {
    color: #e52d53;
    font-size: 18px;
    font-weight: 800;
}

.pungProductfour .product-grid .add-to-cart {
    color: #fff;
    background: #353535;
    font-size: 14px;
    text-align: center;
    line-height: 40px;
    width: 40px;
    height: 40px;
    border-radius: 16px;
    position: absolute;
    bottom: 10px;
    right: 10px;
    transition: all 0.3s ease 0s;
}

.pungProductfour .product-grid .add-to-cart:hover {
    color: #fff;
}
@media screen and (max-width: 990px) {
    .pungProductfour .product-grid {
        margin: 0 0 30px;
    }
}
/* #pung(pungProductfour) #css ends  */