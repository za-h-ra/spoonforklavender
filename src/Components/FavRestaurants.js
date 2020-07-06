import React from "react";

export default function FavRestaurants() {
  const cardInfo = [
    {
      name: "Sant Ambroeus",
      image:
        "https://s3-media0.fl.yelpcdn.com/bphoto/QHTZerF78qHNZIGWvJ_FKQ/o.jpg",
      address: "265 Lafayette St, New York, NY 10012",
      phone: "(212) 966-2770",
      text:
        "SoHo outpost of a small chain of cafes offering modern Milanese cuisine, bar bites & Italian wines.",
      rating: "4.7/5",
      price: "$$$",
      category: "Italian",
    },
    {
      name: "Thai Villa",
      image:
        "https://fastly.4sqi.net/img/general/width960/453334238_TEYDlHSRYRakLCvzwG-6sfh365mPkAer31TF6TqYPyU.jpg",
      address: "5 E 19th St, New York, NY 10003",
      phone: "(212) 802-9999",
      text:
        "Traditional & unique Thai fare served in a stylish space with dark-wood accents & ornate fixtures.",
      rating: "4.6/5",
      price: "$$",
      category: "Thai",
    },
    {
      name: "Jin Ramen",
      image:
        "https://s3-media0.fl.yelpcdn.com/bphoto/EYdQp3BV0_Yr5ycN_F5AqQ/o.jpg",
      address: "462 Amsterdam Ave, New York, NY 10024",
      phone: "(646) 657-0755",
      text:
        "A variety of ramens, including vegetarian broths, plus rice bowls, pork buns, beer & sake.",
      rating: "4.8/5",
      price: "$$",
      category: "Japanese",
    },
    {
      name: "Manhatta",
      image:
        "https://s3-media0.fl.yelpcdn.com/bphoto/7YNz7VdcidNG16-3NbZMVw/o.jpg",
      address: "28 Liberty St 60th floor, New York, NY 10005",
      phone: "(212) 230-5788",
      text:
        "Set on the 60th floor, this ritzy, high-end restaurant features New American cuisine & city views.",
      rating: "4.5/5",
      price: "$$$",
      category: "American",
    },
    {
      name: "St. Mazie",
      image:
        "https://s3-media0.fl.yelpcdn.com/bphoto/YY4QLThvWbsZNwwSvUezkQ/o.jpg",
      address: "345 Grand St, Brooklyn, NY 11211",
      phone: "(718) 384-4808",
      text:
        "Funky bar with frequent live music, an outdoor area & a downstairs restaurant with a compact menu.",
      rating: "4.7/5",
      price: "$$",
      category: "Comfort Food",
    },
    {
      name: "Carbone",
      image:
        "https://s3-media0.fl.yelpcdn.com/bphoto/3LQCRaoFnJXQjQY6p1nxgQ/o.jpg",
      address: "181 Thompson St, New York, NY 10012",
      phone: "(212) 254-3000",
      text:
        "High-end takes on red-sauce fare await at this A-lister Italian restaurant in a retro-glam space.",
      rating: "5/5",
      price: "$$$",
      category: "Italian",
    },
    {
      name: "Xixa",
      image:
        "https://s3-media0.fl.yelpcdn.com/bphoto/hcxeMNmjsUcsQxeBVlE6Ew/o.jpg",
      address: "241 S 4th St, Brooklyn, NY 11211",
      phone: "(718) 388-8860",
      text:
        "Swanky space serving innovative, upscale takes on Mexican fare paired with a selection of mezcals.",
      rating: "4.5/5",
      price: "$$$",
      category: "Mexican",
    },
  ];

  return (
    <>
      <div className="res-grid">
        {cardInfo.map((card) => (
          <>
            <div className="res-card">
              <h1 className="card-title">{card.name}</h1>
              <img className="card-image" src={card.image} />
              <p>{card.category}</p>
              <p>{card.price}</p>
              <p>{card.text}</p>
              <h2 className="card-heading">Address</h2>
              <p>{card.address}</p>
              <h2 className="card-heading">Phone Number</h2>
              <p>{card.phone}</p>
              <h2 className="card-heading">Rating</h2>
              <p>{card.rating}</p>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
