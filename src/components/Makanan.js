import React, { useState, useEffect } from "react";
import "./Makanan.css";
const Makanan = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [pesan, setPesan] = useState("");

  useEffect(() => {
    const updateTotalPrice = () => {
      let total = 0;
      cartItems.forEach((item) => {
        total += item.price * item.quantity;
      });
      setCartTotal(total);
    };

    updateTotalPrice();
  }, [cartItems]);

  const addToCart = (item) => {
    const existingItem = cartItems.find(
      (cartItem) => cartItem.name === item.name
    );

    if (existingItem) {
      const updatedItems = cartItems.map((cartItem) => {
        if (cartItem.name === item.name) {
          return {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          };
        }
        return cartItem;
      });
      setCartItems(updatedItems);
    } else {
      const newItem = {
        name: item.name,
        price: item.price,
        quantity: 1,
      };
      setCartItems([...cartItems, newItem]);
    }
  };

  const removeFromCart = (item) => {
    const updatedItems = cartItems.map((cartItem) => {
      if (cartItem.name === item.name) {
        return {
          ...cartItem,
          quantity: cartItem.quantity - 1,
        };
      }
      return cartItem;
    });

    setCartItems(updatedItems.filter((cartItem) => cartItem.quantity > 0));
  };

  return (
    <div>
      <header>
        <h1
          style={{ fontWeight: "bold", textAlign: "center", fontSize: "36px" }}
        >
          MENU
        </h1>
      </header>

      <h1
        style={{
          fontWeight: "bold",
          textAlign: "center",
          fontSize: "36px",
          marginTop: "50px",
        }}
      >
        ---------- ORDER HERE ----------
      </h1>

      {/* MENU 1 */}
      <div className="box3">
        <div className="box1">
          <h3
            style={{
              fontWeight: "bold",
              color: "white",
              fontSize: "25px",
              margin: "25px",
            }}
          >
            NASI LAUK 1
          </h3>
          <img
            src="https://cdn.discordapp.com/attachments/1125426619230732308/1126654411180085259/2354134643.jpeg"
            alt="NASI LAUK1"
            style={{ borderRadius: "5%", height: "250px", width: "450px" }}
          />
          <p
            style={{
              color: "white",
              fontSize: "40px",
              marginTop: "25px",
              fontWeight: "bold",
            }}
          >
            Rp. 8 000
          </p>
          <p
            style={{
              color: "white",
              fontSize: "18px",
              marginBottom: "25px",
              marginTop: "25px",
              fontWeight: "bold",
            }}
          >
            Nasi dengan pilihan satu lauk, lauk bisa dipilih di bawah
          </p>

          {/* BUAT PILIH LAUK */}
          <label
            style={{ display: "flex", alignItems: "center", color: "white" }}
          >
            <input
              type="checkbox"
              name="checkbox1"
              value="checkbox1"
              style={{ marginRight: "5px" }}
            />
            OREK TEMPE KERING/BASAH
          </label>
          <br />
          <label
            style={{ display: "flex", alignItems: "center", color: "white" }}
          >
            <input
              type="checkbox"
              name="checkbox2"
              value="checkbox2"
              style={{ marginRight: "5px" }}
            />
            OSENG USUS
          </label>
          <br />
          <label
            style={{ display: "flex", alignItems: "center", color: "white" }}
          >
            <input
              type="checkbox"
              name="checkbox3"
              value="checkbox3"
              style={{ marginRight: "5px" }}
            />
            TAHU/TEMPE GORENG
          </label>
          <br />
          <label
            style={{ display: "flex", alignItems: "center", color: "white" }}
          >
            <input
              type="checkbox"
              name="checkbox3"
              value="checkbox3"
              style={{ marginRight: "5px" }}
            />
            TERONG BALADO
          </label>
          <br />
          <label
            style={{ display: "flex", alignItems: "center", color: "white" }}
          >
            <input
              type="checkbox"
              name="checkbox3"
              value="checkbox3"
              style={{ marginRight: "5px" }}
            />
            CAH KANGKUNG
          </label>
          <br />
          <label
            style={{ display: "flex", alignItems: "center", color: "white" }}
          >
            <input
              type="checkbox"
              name="checkbox3"
              value="checkbox3"
              style={{ marginRight: "5px" }}
            />
            JAMUR CRISPY
          </label>
          <br />
          <label
            style={{ display: "flex", alignItems: "center", color: "white" }}
          >
            <input
              type="checkbox"
              name="checkbox3"
              value="checkbox3"
              style={{ marginRight: "5px" }}
            />
            JENGKOL BALADO
          </label>
          <br />
          <label
            style={{ display: "flex", alignItems: "center", color: "white" }}
          >
            <input
              type="checkbox"
              name="checkbox3"
              value="checkbox3"
              style={{ marginRight: "5px" }}
            />
            PERKEDEL
          </label>
          <br />
          {/* BUAT PILIH LAUK*/}

          <button
            className="tombol remove-from-cart"
            onClick={() => removeFromCart({ name: "NASI LAUK 1", price: 8000 })}
          >
            -
          </button>
          <span className="quantity">
            {cartItems.find((item) => item.name === "NASI LAUK 1")?.quantity ||
              0}
          </span>
          <button
            className="tombol add-to-cart "
            onClick={() => addToCart({ name: "NASI LAUK 1", price: 8000 })}
          >
            +
          </button>
        </div>
        {/* MENU 1 AKHIR */}

        {/* MENU 2 */}
        <div className="box1">
          <h3
            style={{
              fontWeight: "bold",
              color: "white",
              fontSize: "25px",
              margin: "25px",
            }}
          >
            NASI LAUK 2
          </h3>
          <img
            src="https://cdn.discordapp.com/attachments/1125426619230732308/1126654177272148069/3938075.jpeg"
            alt="NASI LAUK2"
            style={{ borderRadius: "5%", height: "255px" }}
          />
          <p
            style={{
              color: "white",
              fontSize: "40px",
              marginTop: "25px",
              fontWeight: "bold",
            }}
          >
            Rp. 10 000
          </p>
          <p
            style={{
              color: "white",
              fontSize: "18px",
              marginBottom: "25px",
              marginTop: "25px",
              fontWeight: "bold",
            }}
          >
            Nasi dengan pilihan dua lauk, lauk bisa dipilih di bawah
          </p>
          {/* BUAT PILIH LAUK */}
          <label
            style={{ display: "flex", alignItems: "center", color: "white" }}
          >
            <input
              type="checkbox"
              name="checkbox1"
              value="checkbox1"
              style={{ marginRight: "5px" }}
            />
            OREK TEMPE KERING/BASAH
          </label>
          <br />
          <label
            style={{ display: "flex", alignItems: "center", color: "white" }}
          >
            <input
              type="checkbox"
              name="checkbox2"
              value="checkbox2"
              style={{ marginRight: "5px" }}
            />
            OSENG USUS
          </label>
          <br />
          <label
            style={{ display: "flex", alignItems: "center", color: "white" }}
          >
            <input
              type="checkbox"
              name="checkbox3"
              value="checkbox3"
              style={{ marginRight: "5px" }}
            />
            TAHU/TEMPE GORENG
          </label>
          <br />
          <label
            style={{ display: "flex", alignItems: "center", color: "white" }}
          >
            <input
              type="checkbox"
              name="checkbox3"
              value="checkbox3"
              style={{ marginRight: "5px" }}
            />
            TERONG BALADO
          </label>
          <br />
          <label
            style={{ display: "flex", alignItems: "center", color: "white" }}
          >
            <input
              type="checkbox"
              name="checkbox3"
              value="checkbox3"
              style={{ marginRight: "5px" }}
            />
            CAH KANGKUNG
          </label>
          <br />
          <label
            style={{ display: "flex", alignItems: "center", color: "white" }}
          >
            <input
              type="checkbox"
              name="checkbox3"
              value="checkbox3"
              style={{ marginRight: "5px" }}
            />
            JAMUR CRISPY
          </label>
          <br />
          <label
            style={{ display: "flex", alignItems: "center", color: "white" }}
          >
            <input
              type="checkbox"
              name="checkbox3"
              value="checkbox3"
              style={{ marginRight: "5px" }}
            />
            JENGKOL BALADO
          </label>
          <br />
          <label
            style={{ display: "flex", alignItems: "center", color: "white" }}
          >
            <input
              type="checkbox"
              name="checkbox3"
              value="checkbox3"
              style={{ marginRight: "5px" }}
            />
            PERKEDEL
          </label>
          <br />
          {/* BUAT PILIH LAUK*/}
          <button
            className="tombol remove-from-cart"
            onClick={() =>
              removeFromCart({ name: "NASI LAUK 2", price: 10000 })
            }
          >
            -
          </button>
          <span className="quantity">
            {cartItems.find((item) => item.name === "NASI LAUK 2")?.quantity ||
              0}
          </span>
          <button
            className="tombol add-to-cart"
            onClick={() => addToCart({ name: "NASI LAUK 2", price: 10000 })}
          >
            +
          </button>
        </div>
        {/* MENU 2 AKHIR */}

        {/* MENU 3 */}
        <div className="box1">
          <h3
            style={{
              fontWeight: "bold",
              color: "white",
              fontSize: "25px",
              margin: "25px",
            }}
          >
            NASI LAUK 3
          </h3>
          <img
            src="https://cdn.discordapp.com/attachments/1125426619230732308/1126656008366862386/2470738814.jpg"
            alt="NASI LAUK3"
            style={{ borderRadius: "5%", height: "250px", width: "450px" }}
          />
          <p
            style={{
              color: "white",
              fontSize: "40px",
              marginTop: "25px",
              fontWeight: "bold",
            }}
          >
            Rp. 14 000
          </p>
          <p
            style={{
              color: "white",
              fontSize: "18px",
              marginBottom: "25px",
              marginTop: "25px",
              fontWeight: "bold",
            }}
          >
            Nasi dengan pilihan tiga lauk, lauk bisa dipilih di bawah
          </p>
          {/* BUAT PILIH LAUK */}
          <label
            style={{ display: "flex", alignItems: "center", color: "white" }}
          >
            <input
              type="checkbox"
              name="checkbox1"
              value="checkbox1"
              style={{ marginRight: "5px" }}
            />
            OREK TEMPE KERING/BASAH
          </label>
          <br />
          <label
            style={{ display: "flex", alignItems: "center", color: "white" }}
          >
            <input
              type="checkbox"
              name="checkbox2"
              value="checkbox2"
              style={{ marginRight: "5px" }}
            />
            OSENG USUS
          </label>
          <br />
          <label
            style={{ display: "flex", alignItems: "center", color: "white" }}
          >
            <input
              type="checkbox"
              name="checkbox4"
              value="checkbox4"
              style={{ marginRight: "5px" }}
            />
            TAHU/TEMPE GORENG
          </label>
          <br />
          <label
            style={{ display: "flex", alignItems: "center", color: "white" }}
          >
            <input
              type="checkbox"
              name="checkbox3"
              value="checkbox3"
              style={{ marginRight: "5px" }}
            />
            TERONG BALADO
          </label>
          <br />
          <label
            style={{ display: "flex", alignItems: "center", color: "white" }}
          >
            <input
              type="checkbox"
              name="checkbox3"
              value="checkbox3"
              style={{ marginRight: "5px" }}
            />
            CAH KANGKUNG
          </label>
          <br />
          <label
            style={{ display: "flex", alignItems: "center", color: "white" }}
          >
            <input
              type="checkbox"
              name="checkbox3"
              value="checkbox3"
              style={{ marginRight: "5px" }}
            />
            JAMUR CRISPY
          </label>
          <br />
          <label
            style={{ display: "flex", alignItems: "center", color: "white" }}
          >
            <input
              type="checkbox"
              name="checkbox3"
              value="checkbox3"
              style={{ marginRight: "5px" }}
            />
            JENGKOL BALADO
          </label>
          <br />
          <label
            style={{ display: "flex", alignItems: "center", color: "white" }}
          >
            <input
              type="checkbox"
              name="checkbox3"
              value="checkbox3"
              style={{ marginRight: "5px" }}
            />
            PERKEDEL
          </label>
          <br />
          {/* BUAT PILIH LAUK*/}
          <button
            className="tombol remove-from-cart"
            onClick={() =>
              removeFromCart({ name: "NASI LAUK 3", price: 14000 })
            }
          >
            -
          </button>
          <span className="quantity">
            {cartItems.find((item) => item.name === "NASI LAUK 3")?.quantity ||
              0}
          </span>
          <button
            className="tombol add-to-cart"
            onClick={() => addToCart({ name: "NASI LAUK 3", price: 14000 })}
          >
            +
          </button>
        </div>
      </div>
      {/* MENU 3 AKHIR */}

      {/* MENU SPESIAL */}
      <h1
        style={{
          fontWeight: "bold",
          textAlign: "center",
          fontSize: "36px",
          marginTop: "50px",
        }}
      >
        ---------- MENU SPESIAL ----------
      </h1>

      {/* NASI CAMPUR */}
      <div className="box3">
        <div className="box1">
          <h3
            style={{
              fontWeight: "bold",
              color: "white",
              fontSize: "38px",
              margin: "40px",
            }}
          >
            NASI CAMPUR
          </h3>
          <div className="center-image">
            <img
              src="https://dapurrumahku.com/images/WATERMARK/201609/2/jual-nasi-campur-daging-surabaya.jpg"
              alt="NASI CAMPUR"
              style={{ borderRadius: "15px", marginTop: "70px" }}
            />
          </div>
          <p
            style={{
              color: "white",
              fontSize: "50px",
              fontWeight: "bold",
              marginTop: "90px",
            }}
          >
            Rp. 18 000
          </p>
          <p
            style={{
              color: "white",
              fontSize: "20px",
              marginBottom: "40px",
              marginTop: "40px",
              fontWeight: "bold",
            }}
          >
            Nasi Campur dengan berbagai macam lauk pauk. Terdapat nasi putih
            dengan hidangan lauk daging, aneka sayuran, oseng tahu, orek tempe,
            dan kerupuk.
          </p>
          <button
            className="tombol remove-from-cart"
            onClick={() =>
              removeFromCart({ name: "NASI CAMPUR", price: 18000 })
            }
          >
            -
          </button>
          <span className="quantity">
            {cartItems.find((item) => item.name === "NASI CAMPUR")?.quantity ||
              0}
          </span>
          <button
            className="tombol add-to-cart"
            onClick={() => addToCart({ name: "NASI CAMPUR", price: 18000 })}
          >
            +
          </button>
        </div>
        {/* NASI CAMPUR AKHIR */}

        <div className="box1">
          <h3
            style={{
              fontWeight: "bold",
              color: "white",
              fontSize: "38px",
              margin: "48px",
            }}
          >
            SOTO BETAWI
          </h3>
          <img
            src="https://dinaskebudayaan.jakarta.go.id/content/uploads/artikel/IMG_3871.jpg?1665535509650"
            alt="SOTO BETAWI"
            style={{ borderRadius: "15px" }}
          />
          <p
            style={{
              color: "white",
              fontSize: "50px",
              fontWeight: "bold",
              marginTop: "60px",
            }}
          >
            Rp. 20 000
          </p>
          <p
            style={{
              color: "white",
              fontSize: "20px",
              marginBottom: "20px",
              marginTop: "35px",
              fontWeight: "bold",
            }}
          >
            Soto Betawi disajikan dengan kuah santan yang menghadirkan cita rasa
            gurih. Soto Betawi ini berisi daging sapi dan juga aneka macam
            jeroan serta tambahan emping.
          </p>
          <button
            className="tombol remove-from-cart"
            onClick={() =>
              removeFromCart({ name: "SOTO BETAWI", price: 20000 })
            }
          >
            -
          </button>
          <span className="quantity">
            {cartItems.find((item) => item.name === "SOTO BETAWI")?.quantity ||
              0}
          </span>
          <button
            className="tombol add-to-cart"
            onClick={() => addToCart({ name: "SOTO BETAWI", price: 20000 })}
          >
            +
          </button>
        </div>
      </div>

      <div className="body">
        <div className="box">
          <ul id="cart-items">
            {cartItems.map((item, index) => (
              <li key={index} style={{ color: "white", fontSize: "20px" }}>{`${
                item.name
              } x ${item.quantity} - Rp. ${(item.price * item.quantity).toFixed(
                2
              )}`}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="box2">
        <p style={{ color: "white", fontSize: "18px" }} id="total-price">
          Total Price: Rp.{cartTotal.toFixed(2)}
        </p>
      </div>
    </div>
  );
};
export default Makanan;
