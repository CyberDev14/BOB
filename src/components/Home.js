import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCartShopping,
  faHeart,
  faUser,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons/faHeart";
import { faHeart as faHeartRegular } from "@fortawesome/free-solid-svg-icons/faHeart";
import styles from "./Home.module.css";
import logo from "./Starry.png";
import slide1 from "./1.png";
import slide2 from "./2.png";
import slide3 from "./3.png";
import ptop from "./ptop.png";
import ppant from "./ppant.png";
import pdress from "./pdress.png";
import pjac from "./pjac.png";
import Chatbot from "./Chatbot";

function Home() {
  //dropdown
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };
  // Slideshow media
  const slides = [
    { type: "image", src: slide1 },
    { type: "image", src: slide2 },
    { type: "image", src: slide3 },
    // Add more slides as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("tops");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [slides.length]);

  ///heart
  const [wishlist, setWishlist] = useState([]);
  // Function to toggle item in wishlist
  const toggleWishlist = (productId) => {
    if (wishlist.includes(productId)) {
      // Remove from wishlist
      setWishlist(wishlist.filter((id) => id !== productId));
    } else {
      // Add to wishlist
      setWishlist([...wishlist, productId]);
    }
  };

  // Products
  const products = [
    {
      id: 1,
      image:
        "https://boogzelclothing.com/cdn/shop/files/eyesprintredcroptopboogzelclothing_1_1000x.jpg?v=1718285372",
      hoverImage:
        "https://boogzelclothing.com/cdn/shop/files/eyesprintredcroptopboogzelclothing_2_1000x.jpg?v=1718285372",
      description: "Eyes Print Red Crop Top",
      price: "₹1875.00",
      category: "tops",
    },
    {
      id: 2,
      image:
        "https://boogzelclothing.com/cdn/shop/files/fairybutterflyhaltercroptopboogzelclothing_1_1000x.jpg?v=1718284823",
      hoverImage:
        "https://boogzelclothing.com/cdn/shop/files/fairybutterflyhaltercroptopboogzelclothing_2_1000x.jpg?v=1718284823",
      description: "Fairy Butterfly Halter Crop Top",
      price: "₹2250.00",
      category: "tops",
    },
    {
      image:
        "https://boogzelclothing.com/cdn/shop/files/pinkruffletubetopboogzelclothing_1_1000x.jpg?v=1718281387",
      hoverImage:
        "https://boogzelclothing.com/cdn/shop/files/pinkruffletubetopboogzelclothing_2_1000x.jpg?v=1718281387",
      description: "Pink Ruffle Tube Top",
      price: "₹1500.00",
      category: "tops",
    },
    {
      image:
        "https://boogzelclothing.com/cdn/shop/files/balletcorebolerotubetopboogzelclothing_1_1000x.jpg?v=1718121204",
      hoverImage:
        "https://boogzelclothing.com/cdn/shop/files/balletcorebolerotubetopboogzelclothing_2_1000x.jpg?v=1718121204",
      description: "Balletcore Bolero Tube Top",
      price: "₹1650.00",
      category: "tops",
    },
    {
      image:
        "https://boogzelclothing.com/cdn/shop/files/starpatchhaltercroptopboogzelclothing_1_800x.jpg?v=1718280689",
      hoverImage:
        "https://boogzelclothing.com/cdn/shop/files/starpatchhaltercroptopboogzelclothing_2_800x.jpg?v=1718280689",
      description: "Star Patch Halter Crop Top",
      price: "₹1800.00",
      category: "tops",
    },
    {
      image:
        "https://boogzelclothing.com/cdn/shop/files/skeletongraphicprinttanktopboogzelclothing_1_1000x.jpg?v=1717818566",
      hoverImage:
        "https://boogzelclothing.com/cdn/shop/files/skeletongraphicprinttanktopboogzelclothing_2_1000x.jpg?v=1717818566",
      description: "Skeleton Graphic Print Tank Top",
      price: "₹2100.00",
      category: "tops",
    },
    {
      image:
        "https://boogzelclothing.com/cdn/shop/files/pink_heart_tank_top_boogzel_clothing_1_1000x.jpg?v=1717820788",
      hoverImage:
        "https://boogzelclothing.com/cdn/shop/files/pink_heart_tank_top_boogzel_clothing_2_1000x.jpg?v=1717820788",
      description: "Pink Heart Tank Top",
      price: "₹1950.00",
      category: "tops",
    },
    {
      image:
        "https://boogzelclothing.com/cdn/shop/files/y2kaestheticgalaxymeshtopboogzelclothing_1_700x.jpg?v=1716740542",
      hoverImage:
        "https://boogzelclothing.com/cdn/shop/files/y2kaestheticgalaxymeshtopboogzelclothing_2_700x.jpg?v=1716740542",
      description: "Y2K Aesthetic Galaxy Mesh Top",
      price: "₹2400.00",
      category: "tops",
    },
    {
      image:
        "https://boogzelclothing.com/cdn/shop/files/blackcutoutcroptopboogzelclothing_1_700x.jpg?v=1715856041",
      hoverImage:
        "https://boogzelclothing.com/cdn/shop/files/blackcutoutcroptopboogzelclothing_2_700x.jpg?v=1715856041",
      description: "Black Cutout Crop Top",
      price: "₹2625.00",
      category: "tops",
    },
    {
      image:
        "https://boogzelclothing.com/cdn/shop/files/divarhinestonehaltertopboogzelclothing_1_700x.jpg?v=1715854449",
      hoverImage:
        "https://boogzelclothing.com/cdn/shop/files/divarhinestonehaltertopboogzelclothing_2_700x.jpg?v=1715854449",
      description: "Diva Rhinestone Halter Top",
      price: "₹3000.00",
      category: "tops",
    },
    {
      image:
        "https://boogzelclothing.com/cdn/shop/files/fairygrungedenimrivettopboogzelclothing_1_700x.jpg?v=1715855521",
      hoverImage:
        "https://boogzelclothing.com/cdn/shop/files/fairygrungedenimrivettopboogzelclothing_2_700x.jpg?v=1715855521",
      description: "Fairy Grunge Denim Rivet Top",
      price: "₹2850.00",
      category: "tops",
    },
    {
      image:
        "https://boogzelclothing.com/cdn/shop/files/angelprintcroptopboogzelclothing_1_700x.jpg?v=1713254925",
      hoverImage:
        "https://boogzelclothing.com/cdn/shop/files/angelprintcroptopboogzelclothing_2_700x.jpg?v=1713254925",
      description: "Angel Print Crop Top",
      price: "₹2175.00",
      category: "tops",
    },
    {
      image:
        "https://boogzelclothing.com/cdn/shop/files/y2kdrawstringruchedflarepantsboogzelclothing_1_1000x.jpg?v=1718284091",
      hoverImage:
        "https://boogzelclothing.com/cdn/shop/files/y2kdrawstringruchedflarepantsboogzelclothing_5_1000x.jpg?v=1718284313",
      description: "Y2K Drawstring Ruched Flare Pants",
      price: "₹2175.00",
      category: "bottoms",
    },
    {
      image:
        "https://boogzelclothing.com/cdn/shop/files/knitcrochetmaxiskirtboogzelclothing_1_1000x.jpg?v=1717822861",
      hoverImage:
        "https://boogzelclothing.com/cdn/shop/files/knitcrochettopandskirtsetboogzelclothing_2_1000x.jpg?v=1719038786",
      description: "Coastal Knit Crochet Maxi Skirt",
      price: "₹2175.00",
      category: "bottoms",
    },
    {
      image:
        "https://boogzelclothing.com/cdn/shop/files/CoquetteJeansWithBowEmbroidery-BoogzelClothing_2_823x.jpg?v=1717756783",
      hoverImage:
        "https://boogzelclothing.com/cdn/shop/files/CoquetteJeansWithBowEmbroidery-BoogzelClothing_3_950x.jpg?v=1717756783",
      description: "Coquette Jeans With Bow Embroidery",
      price: "₹2175.00",
      category: "bottoms",
    },
    {
      image:
        "https://boogzelclothing.com/cdn/shop/files/brownleathermaxiskirtboogzelclothing_1_700x.jpg?v=1716750657",
      hoverImage:
        "https://boogzelclothing.com/cdn/shop/files/brownleathermaxiskirtboogzelclothing_2_700x.jpg?v=1716750658",
      description: "Coastal Cowgirl Leather Maxi Skirt",
      price: "₹2175.00",
      category: "bottoms",
    },
    {
      image:
        "https://boogzelclothing.com/cdn/shop/files/pinkgraffitistarjeansboogzelclothing_1_700x.jpg?v=1716210990",
      hoverImage:
        "https://boogzelclothing.com/cdn/shop/files/pinkgraffitistarjeansboogzelclothing_4_700x.jpg?v=1716210990",
      description: "Y2K Graffiti Star Jeans",
      price: "₹2175.00",
      category: "bottoms",
    },
    {
      image:
        "https://boogzelclothing.com/cdn/shop/files/greenfloralminiskirtboogzelclothing_1_700x.jpg?v=1717645631",
      hoverImage:
        "https://boogzelclothing.com/cdn/shop/files/greenfloralminiskirtboogzelclothing_4_700x.jpg?v=1717645750",
      description: "Cottagecore Aesthetic Green Floral Skirt",
      price: "₹2175.00",
      category: "bottoms",
    },
    {
      image:
        "https://boogzelclothing.com/cdn/shop/files/StarPatchWideLegJeans-boogzelclothing_1_771b4626-705b-427b-a265-df992cec6d8b_850x.jpg?v=1716205617",
      hoverImage:
        "https://boogzelclothing.com/cdn/shop/files/StarPatchWideLegJeans-boogzelclothing_2_850x.jpg?v=1716205617",
      description: "Star Patch Wide Leg Jeans",
      price: "₹2175.00",
      category: "bottoms",
    },
    {
      image:
        "https://boogzelclothing.com/cdn/shop/files/catprintgraphicpantsboogzelclothing_2_700x.jpg?v=1713971755",
      hoverImage:
        "https://boogzelclothing.com/cdn/shop/files/catprintgraphicpantsboogzelclothing_1_700x.jpg?v=1713971749",
      description: "Cat Print Graphic Pants",
      price: "₹2175.00",
      category: "bottoms",
    },
    {
      image:
        "https://boogzelclothing.com/cdn/shop/files/bowsidestripesweatpantsboogzelclothing_1_700x.jpg?v=1708974960",
      hoverImage:
        "https://boogzelclothing.com/cdn/shop/files/bowsidestripesweatpantsboogzelclothing_6_700x.jpg?v=1708975612",
      description: "Bow Side Stripe Sweatpants",
      price: "₹1950.00",
      category: "bottoms",
    },
    {
      image:
        "https://boogzelclothing.com/cdn/shop/files/cottagecorefloralminicorsetdressboogzelclothing_1_700x.jpg?v=1716752546",
      hoverImage:
        "https://boogzelclothing.com/cdn/shop/files/cottagecorefloralminicorsetdressboogzelclothing_8_700x.jpg?v=1716752596",
      description:
        "White Floral Print Midi Dress - Women's Elegant Summer Dress",
      price: "₹3500.00",
      category: "dresses",
    },
    {
      image:
        "https://boogzelclothing.com/cdn/shop/files/aestheticsatinshortdressboogzelclothing_5_700x.jpg?v=1708540058",
      hoverImage:
        "https://boogzelclothing.com/cdn/shop/files/aestheticsatinshortdressboogzelclothing_9_700x.jpg?v=1708540058",
      description: "Lace Detail Blue Dress - Women's Romantic Evening Dress",
      price: "₹3200.00",
      category: "dresses",
    },
    {
      image:
        "https://boogzelclothing.com/cdn/shop/files/frenchgirlaestheticminidressboogzelclothing_1_700x.jpg?v=1700056072",
      hoverImage:
        "https://boogzelclothing.com/cdn/shop/files/frenchgirlaestheticminidressboogzelclothing_4_700x.jpg?v=1700056072",
      description: "Floral Smocked Mini Dress - Women's Casual Summer Dress",
      price: "₹2900.00",
      category: "dresses",
    },
    {
      image:
        "https://boogzelclothing.com/cdn/shop/files/denim-mini-dress-collar-boogzel-clothing_5_750x.jpg?v=1688993283",
      hoverImage:
        "https://boogzelclothing.com/cdn/shop/files/denim-mini-dress-collar-boogzel-clothing_9_750x.jpg?v=1688993283",
      description: "Sequin Sleeved Mini Dress - Women's Glamorous Party Dress",
      price: "₹3800.00",
      category: "dresses",
    },
    {
      image:
        "https://boogzelclothing.com/cdn/shop/files/Fairycore-Aesthetic-Green-Mini-Dress-Boogzel-Clothing_665x.jpg?v=1693140033",
      hoverImage:
        "https://boogzelclothing.com/cdn/shop/files/Fairycore-Aesthetic-Green-Mini-Dress-Boogzel-Clothing-3_750x.jpg?v=1693106484",
      description: "White Ruffle Midi Dress - Women's Elegant Summer Dress",
      price: "₹3400.00",
      category: "dresses",
    },
    {
      image:
        "https://boogzelclothing.com/cdn/shop/files/Princess-Mood-Floral-Dress-Boogzel-Clothing_750x.jpg?v=1693105110",
      hoverImage:
        "https://boogzelclothing.com/cdn/shop/files/Princess-Mood-Floral-Dress-Boogzel-Clothing-3_700x.jpg?v=1693105120",
      description: "Pink Floral Print Dress - Women's Romantic Summer Dress",
      price: "₹3100.00",
      category: "dresses",
    },
    {
      image:
        "https://boogzelclothing.com/cdn/shop/files/French-Summer-Mini-Dress-Boogzel-Clothing_750x.jpg?v=1693130223",
      hoverImage:
        "https://boogzelclothing.com/cdn/shop/files/French-Summer-Mini-Dress-Boogzel-Clothing-8_750x.jpg?v=1693130258",
      description:
        "Embroidered Lace Smocked Dress - Women's Vintage Style Dress",
      price: "₹3700.00",
      category: "dresses",
    },
    {
      image:
        "https://boogzelclothing.com/cdn/shop/files/Mocha-Brown-Mini-Dress-Boogzel-Clothing_750x.jpg?v=1693104711",
      hoverImage:
        "https://boogzelclothing.com/cdn/shop/files/Mocha-Brown-Mini-Dress-Boogzel-Clothing-3_750x.jpg?v=1693104720",
      description: "Pink Sequins Party Dress - Women's Glamorous Evening Dress",
      price: "₹4200.00",
      category: "dresses",
    },
    {
      image:
        "https://boogzelclothing.com/cdn/shop/files/Pastel-Candy-Halter-Dress-Boogzel-Clothing_640x.jpg?v=1693126742",
      hoverImage:
        "https://boogzelclothing.com/cdn/shop/files/Pastel-Candy-Halter-Dress-Boogzel-Clothing-2_700x.jpg?v=1693126746",
      description: "Blue Floral Long Dress - Women's Elegant Summer Maxi Dress",
      price: "₹4000.00",
      category: "dresses",
    },
    {
      image:
        "https://boogzelclothing.com/cdn/shop/products/angel_print_dress_2_7901dff9-09fe-4155-b71b-53f744de4d7a_824x.jpg?v=1678897349",
      hoverImage:
        "https://boogzelclothing.com/cdn/shop/products/angel_print_dress_3_4497e7d6-9a57-434b-8695-fcee142830ce_434x.jpg?v=1678897349",
      description:
        "White Lace Sheer Party Dress - Women's Romantic Evening Dress",
      price: "₹3900.00",
      category: "dresses",
    },
    {
      image:
        "https://boogzelclothing.com/cdn/shop/files/laceupjeanjacketboogzelclothing_1_700x.jpg?v=1717042714",
      hoverImage:
        "https://boogzelclothing.com/cdn/shop/files/laceupjeanjacketboogzelclothing_2_700x.jpg?v=1717042714",
      description: "Lace-Up Jean Jacket - Women's Casual Denim Outerwear",
      price: "₹4950.00",
      category: "jackets",
    },
    {
      image:
        "https://boogzelclothing.com/cdn/shop/files/oldmoneystyletweedjacketboogzelclothing_1_700x.jpg?v=1713253481",
      hoverImage:
        "https://boogzelclothing.com/cdn/shop/files/embroideryjeanjacketboogzelclothing_2_700x.jpg?v=1716959670",
      description: "Embroidery Jean Jacket - Women's Stylish Denim Outerwear",
      price: "₹5100.00",
      category: "jackets",
    },
    {
      image:
        "https://boogzelclothing.com/cdn/shop/files/pinkstarsjeanjacketboogzelclothing_1_700x.jpg?v=1716702205",
      hoverImage:
        "https://boogzelclothing.com/cdn/shop/files/pinkstarsjeanjacketboogzelclothing_2_700x.jpg?v=1716702205",
      description: "Pink Stars Jean Jacket - Women's Trendy Denim Outerwear",
      price: "₹4800.00",
      category: "jackets",
    },
    {
      image:
        "https://boogzelclothing.com/cdn/shop/files/denimcamouflagejeanjacketboogzelclothing_1_700x.jpg?v=1715891286",
      hoverImage:
        "https://boogzelclothing.com/cdn/shop/files/denimcamouflagejeanjacketboogzelclothing_2_700x.jpg?v=1715891286",
      description:
        "Denim Camouflage Jean Jacket - Women's Casual Denim Outerwear",
      price: "₹5250.00",
      category: "jackets",
    },
    {
      image:
        "https://boogzelclothing.com/cdn/shop/files/luxuryrufflejeanjacketboogzelclothing_1_700x.jpg?v=1714216837",
      hoverImage:
        "https://boogzelclothing.com/cdn/shop/files/luxuryrufflejeanjacketboogzelclothing_2_700x.jpg?v=1714216837",
      description:
        "Luxury Ruffle Jean Jacket - Women's Elegant Denim Outerwear",
      price: "₹5600.00",
      category: "jackets",
    },
    {
      image:
        "https://boogzelclothing.com/cdn/shop/files/silverpatchedjeanjacketboogzelclothing_1_700x.jpg?v=1713885068",
      hoverImage:
        "https://boogzelclothing.com/cdn/shop/files/silverpatchedjeanjacketboogzelclothing_2_700x.jpg?v=1713885068",
      description:
        "Silver Patched Jean Jacket - Women's Casual Denim Outerwear",
      price: "₹4950.00",
      category: "jackets",
    },
    {
      image:
        "https://boogzelclothing.com/cdn/shop/files/embroideredjeanjacketboogzelclothing_1_700x.jpg?v=1713614784",
      hoverImage:
        "https://boogzelclothing.com/cdn/shop/files/embroideredjeanjacketboogzelclothing_2_700x.jpg?v=1713614784",
      description: "Embroidered Jean Jacket - Women's Stylish Denim Outerwear",
      price: "₹5100.00",
      category: "jackets",
    },
    {
      image:
        "https://boogzelclothing.com/cdn/shop/files/studdedleatherbikertopboogzelclothing_1_1000x.jpg?v=1718285662",
      hoverImage:
        "https://boogzelclothing.com/cdn/shop/files/studdedleatherbikertopboogzelclothing_2_1000x.jpg?v=1718285662",
      description:
        "Studded Leather Biker Top - Women's Punk Style Biker Jacket",
      price: "₹4500.00",
      category: "jackets",
    },
    {
      image:
        "https://boogzelclothing.com/cdn/shop/files/purpleholographicjacketboogzelclothing_1_700x.jpg?v=1713623716",
      hoverImage:
        "https://boogzelclothing.com/cdn/shop/files/purpleholographicjacketboogzelclothing_2_700x.jpg?v=1713623716",
      description: "Purple Holographic Jacket - Women's Futuristic Outerwear",
      price: "₹5400.00",
      category: "jackets",
    },
  ];

  const filteredProducts = products.filter(
    (product) => product.category === selectedCategory
  );
  //chatbot
  // State for suggested products

  const [suggestedProducts, setSuggestedProducts] = useState([]);

  // Function to handle chatbot's input and suggest related products
  const handleFilterProducts = (input) => {
    const keywords = input.split(" ");
    const matchedProducts = products.filter((product) => {
      const descriptionWords = product.description.toLowerCase().split(" ");
      return keywords.some(
        (keyword) =>
          !["top", "pant", "jacket", "dress", "bottom"].includes(keyword) &&
          descriptionWords.includes(keyword)
      );
    });
    setSuggestedProducts(matchedProducts);
  };
  return (
    <div className={styles.homepage}>
      <div className={styles.fixed}>
        <div className={styles.header}>
          {/*.....slidebar.... */}

          <FontAwesomeIcon
            icon={faBars}
            className={styles.bar}
            onClick={toggleDropdown}
          />

          {/*.....logo heart cart.... */}
          <img src={logo} className={styles.logo} alt="logo" />
          <div>
            <FontAwesomeIcon icon={faCartShopping} className={styles.cart} />
          </div>
          <div>
            <FontAwesomeIcon icon={faHeart} className={styles.heart} />
          </div>
        </div>
      </div>
      {/*.....slidebar.... */}

      <div
        className={`${styles.dropdown} ${dropdownVisible ? styles.show : ""}`}
      >
        <div className={styles.select}>ACCOUNT INFORMATION</div>
        <div className={styles.select}>PREVIOUS ORDERS</div>
        <div className={styles.select}>ABOUT US</div>
      </div>
      {/*....home... content */}
      <div className={styles.deco}>
        <div className={styles.wrapper}>
          <div className={styles.typing}>
            <FontAwesomeIcon className={styles.user} icon={faUser} /> Hello
            helisha!!Welcome back!
          </div>
        </div>
        <div className={styles.search}>
          <input type="text" placeholder="Search products..." />
          <button>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </div>

      {/* Image Slideshow */}
      <div className={styles.slideshowContainer}>
        {slides.map((slide, index) => (
          <div
            className={`${styles.mySlides} ${
              index === currentIndex ? styles.active : ""
            }`}
            key={index}
          >
            {slide.type === "image" ? (
              <img src={slide.src} alt={`Slide ${index + 1}`} />
            ) : (
              <video autoPlay muted loop>
                <source src={slide.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        ))}
      </div>
      {/* Suggested Products */}
      <div className={styles.suggested}>
        <h2>Suggested Products By Starry: </h2>
        <div className={styles.UserSug}>
          {suggestedProducts.length > 0 ? (
            suggestedProducts.map((product) => (
              <div key={product.id} className={styles.suggestedProduct}>
                <img
                  src={product.image}
                  alt={product.name}
                  className={styles.Img}
                />
                <div>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <p>Price: ${product.price}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No suggested products found.</p>
          )}
        </div>
      </div>
      {/*explore */}
      <h1 className={styles.head}>EXPLORE OUR COLLECTIONS</h1>
      <div className={styles.buttons}>
        <button
          className={styles.button}
          onClick={() => setSelectedCategory("tops")}
        >
          <img src={ptop} className={styles.bimage} alt="Top" />
          <br></br>
          <span>Tops</span>
        </button>

        <button
          className={styles.button}
          onClick={() => setSelectedCategory("bottoms")}
        >
          <img src={ppant} className={styles.bimage} alt="Pants" /> <br></br>
          <span>Bottoms</span>
        </button>
        <button
          className={styles.button}
          onClick={() => setSelectedCategory("dresses")}
        >
          <img src={pdress} className={styles.bimage} alt="Dress" /> <br></br>
          <span>Dresses</span>
        </button>
        <button
          className={styles.button}
          onClick={() => setSelectedCategory("jackets")}
        >
          <img src={pjac} className={styles.bimage} alt="Jackets" /> <br></br>
          <span>Jackets</span>
        </button>
      </div>

      {/* Products */}
      <div className={styles.spacing}>
        <div className={styles.productGrid}>
          {filteredProducts.map((product, index) => (
            <div className={styles.productCard} key={index}>
              <div className={styles.imageContainer}>
                <img
                  src={product.image}
                  alt={product.description}
                  className={styles.productImage}
                />
                <img
                  src={product.hoverImage}
                  alt={product.description}
                  className={`${styles.productImage} ${styles.hoverImage}`}
                />
                <FontAwesomeIcon
                  icon={
                    wishlist.includes(product.id)
                      ? faHeartSolid
                      : faHeartRegular
                  }
                  className={`${styles.heartIcon} ${
                    wishlist.includes(product.id) ? styles.activeHeart : ""
                  }`}
                  onClick={() => toggleWishlist(product.id)}
                />
              </div>
              <p className={styles.productDescription}>{product.description}</p>
              <p className={styles.productPrice}>{product.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* chatbot */}
      <Chatbot onFilterProducts={handleFilterProducts} />
    </div>
  );
}

export default Home;
