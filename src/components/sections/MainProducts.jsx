import React, { useState } from "react";
import "../../assets/MainProducts.css";
import { ShoppingCart } from "lucide-react"; // zamonaviy icon (lucide-react)

import img1 from "../../assets/images/sq1.png";
import img2 from "../../assets/images/sq2.png";
import img3 from "../../assets/images/tr1.png";
import img4 from "../../assets/images/kx4.png";
import img5 from "../../assets/images/1.jpg";
import img6 from "../../assets/images/2.jpg";
import img7 from "../../assets/images/kx1.jpg";
import img8 from "../../assets/images/kx2.jpg";
import img9 from "../../assets/images/kx3.jpg";
import img10 from "../../assets/images/yt1.jpg";
import {useTranslation} from "react-i18next";

const Products = [
    {
        ProductImg: img1,
        ProductSaleBtn: "-30%",
        ProductName: "PORTA 37 VERALINGA",
        ProductPrice: "205$",
        ProductSale: "225$",
    },
    {
        ProductImg: img2,
        ProductSaleBtn: "-40%",
        ProductName: "Mebel majmuasi",
        ProductPrice: "120$",
        ProductSale: "130$",
    },
    {
        ProductImg: img3,
        ProductSaleBtn: "-30%",
        ProductName: "AKRIL 2 MODERN OQ VA QORA",
        ProductPrice: "450$",
        ProductSale: "500$",
    },
    {
        ProductImg: img4,
        ProductSaleBtn: "-40%",
        ProductName: "ALFA DUMONT 2 BROWN",
        ProductPrice: "380$",
        ProductSale: "400$",
    },
    {
        ProductImg: img5,
        ProductSaleBtn: "-30%",
        ProductName: "Mebel majmuasi",
        ProductPrice: "80$",
        ProductSale: "95$",
    },
    {
        ProductImg: img6,
        ProductSaleBtn: "-40%",
        ProductName: "CLASSIC 23 VIRGIN MAGIC FOG FACET",
        ProductPrice: "170$",
        ProductSale: "200$",
    },
    {
        ProductImg: img7,
        ProductSaleBtn: "-30%",
        ProductName: "AKRIL MODERN EDITION",
        ProductPrice: "460$",
        ProductSale: "490$",
    },
    {
        ProductImg: img8,
        ProductSaleBtn: "-40%",
        ProductName: "PORTA 29 VERALINGA",
        ProductPrice: "160$",
        ProductSale: "170$",
    },
    {
        ProductImg: img9,
        ProductSaleBtn: "-40%",
        ProductName: "PORTA 29 VERALINGA",
        ProductPrice: "160$",
        ProductSale: "170$",
    },
    {
        ProductImg: img10,
        ProductSaleBtn: "-40%",
        ProductName: "PORTA 29 VERALINGA",
        ProductPrice: "160$",
        ProductSale: "170$",
    },
];

const MainProducts = () => {
    const [visibleCards, setVisibleCards] = useState(8);
    const [cart, setCart] = useState([]); // Savatcha state
    const { t } = useTranslation();
    // Savatchaga qo'shish
    const handleAddToCart = (product) => {
        setCart((prev) => [...prev, product]);
        alert(`${product.ProductName} savatchaga qo‘shildi!`);
    };

    // Show More funksiyasi
    const handleShowMore = () => {
        setVisibleCards((prev) => Math.min(prev + 8, Products.length));
    };

    // All Close funksiyasi
    const handleAllClose = () => {
        setVisibleCards(8);
    };

    return (
        <div id="MainProducts">
            <div className="container">
                {/* Sarlavha va savatcha */}
                <div className="products-header">
                    <h1>{t(`productH3`)}</h1>
                    <div className="cart-info">
                        <ShoppingCart size={28} />
                        <span className="cart-count">{cart.length}</span>
                    </div>
                </div>

                {/* Cardlar */}
                <div id="MainProducts-card">
                    {Products.slice(0, visibleCards).map((item, index) => (
                        <div key={index} id="MainProducts-sBox">
                            {/*<div className="discount-badge">{item.ProductSaleBtn}</div>*/}
                            <img src={item.ProductImg} alt={item.ProductName} />
                            <h3>{item.ProductName}</h3>
                            <div id="Product-price">
                                <h4>{item.ProductPrice}</h4>
                                <strike>{item.ProductSale}</strike>
                            </div>
                            <button
                                className="add-to-cart-btn"
                                onClick={() => handleAddToCart(item)}
                            >
                                <ShoppingCart size={18} /> {t(`toCart`)}
                            </button>
                        </div>
                    ))}
                </div>

                {/* Tugmalar */}
                <div id="MainProducts-controls">
                    {visibleCards < Products.length && (
                        <button onClick={handleShowMore} id="MainProducts_btn">
                            {t(`productMore`)}
                        </button>
                    )}
                    {visibleCards > 8 && (
                        <button
                            id="MainProducts_btn"
                            onClick={handleAllClose}
                            style={{ marginLeft: "20px" }}
                        >
                            {t(`productClose`)}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MainProducts;