import React from "react";
import "../Components/SidebarStyle.css";

export default function Sidebar({ filters, setFilters }) {
  const { price, color, gender, brand, discount, productType } = filters;

  const handleCheckboxChange = (e, category) => {
    const { value, checked } = e.target;
    setFilters((prev) => ({
      ...prev,
      [category]: checked
        ? [...prev[category], value]
        : prev[category].filter((item) => item !== value),
    }));
  };

  const handleRadioChange = (e, category) => {
    setFilters((prev) => ({ ...prev, [category]: e.target.value }));
  };

  const clearFilters = () => {
    setFilters({
      price: 5000,
      color: "",
      gender: "",
      brand: [],
      discount: "",
      productType: [],
    });
  };

  return (
    <div className="sidebar">
      <h3>Filter Products</h3>
      <div className="filter-group">
        <label>Choose Gender</label>
        <hr />
        <div className="radio-group">
          {['Men', 'Women', 'Boys', 'Girls'].map((g) => (
            <div key={g} className="radio-item">
              <input type="radio" name="gender" value={g} onChange={(e) => handleRadioChange(e, 'gender')} />
              <span>{g}</span>
            </div>
          ))}
        </div>
      </div>
      <hr />
      <div className="filter-group">
        <label>Price Range: ₹{price}</label>
        <hr />
        <input type="range" min="500" max="10000" value={price} onChange={(e) => setFilters((prev) => ({ ...prev, price: e.target.value }))} />
      </div>
      <hr />
      <div className="filter-group">
        <label>Choose Brand</label>
        <hr />
        <div className="checkbox-group">
          {['Roadster', 'Metro', 'Puma', 'HRX', 'Nike', 'Campus', 'RedTape', 'Reebok'].map((b) => (
            <div key={b} className="checkbox-item">
              <input type="checkbox" value={b} onChange={(e) => handleCheckboxChange(e, 'brand')} />
              <span>{b}</span>
            </div>
          ))}
        </div>
      </div>
      <hr />
      <div className="filter-group">
        <label>Select Color</label>
        <hr />
        <div className="color-options">
          {['red', 'blue', 'green', 'yellow', 'black', 'white'].map((col) => (
            <div key={col} className="color-item">
              <input type="radio" name="color" value={col} onChange={(e) => handleRadioChange(e, 'color')} />
              <span className={`color-circle ${col}`}></span>
              <span>{col.toUpperCase()}</span>
            </div>
          ))}
        </div>
      </div>
      <hr />
      <div className="filter-group">
        <label>Discount Range</label>
        <hr />
        <div className="radio-group">
          {['10% percentage', '25% percentage', '40% percentage', '50% percentage', '60% percentage'].map((d) => (
            <div key={d} className="radio-item">
              <input type="radio" name="discount" value={d} onChange={(e) => handleRadioChange(e, 'discount')} />
              <span>{d}</span>
            </div>
          ))}
        </div>
      </div>
      <hr />
      <div className="filter-group">
        <label>Select Product Type</label>
        <hr />
        <div className="checkbox-group">
          {['Casual Shoe', 'Sports Shoe', 'Walking Shoe', 'Sneaker Shoe'].map((type) => (
            <div key={type} className="checkbox-item">
              <input type="checkbox" value={type} onChange={(e) => handleCheckboxChange(e, 'productType')} />
              <span>{type}</span>
            </div>
          ))}
        </div>
      </div>
      <button className="clear-filters" onClick={clearFilters}>
        Clear Filters
      </button>
    </div>
  );
}
