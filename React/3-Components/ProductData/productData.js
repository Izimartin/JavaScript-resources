import React from 'react';
import Catalog from "react-catalog-view";
import "productData.css";

function ProductData(props) {
  let products =
    [
      {
        id: 1,
        title: "startup",
        kind: "startup"
        description: "12",
        price: "25",
        discounted: "20",
        currency: "$"
        image: "htttps://neighbordevcr.com/website-templates/"
      },
      {
        id: 2,
        title: "canvas",
        kind: "canvas"
        description: "13",
        price: "35",
        discounted: "30",
        currency: "$"
        image: "htttps://neighbordevcr.com/website-templates/"
      },
      {
        id: 1,
        title: "portfolio",
        kind: "portfolio"
        description: "14",
        price: "20",
        discounted: "18",
        currency: "$"
        image: "htttps://neighbordevcr.com/website-templates/"
      }
    ];

  const CONTENT_KEYS =

  {
    imgKey: "image",
    cardTitleKey: "title",
    cardDescriptionKey: "description",
    priceKey: "price",
    discountedPriceKey: "discounted",
    priceCurrencyKey: "currency",
    discountCurrencyKey: "currency"
  };

  return (
    <Catalog
      data={products}
      // Array of JSON Objects (required)
      contentKeys={CONTENT_KEYS}
      // JSON Object defining the keys that will be 
      // used from the data array, keys should match. (required)
      cardSize="sm"
      // Card sizes, sm, md and lg for small, medium  and large
      btnOneText="View"
      // Enter text for action button one 
      // or pass empty string to hide.  
      btnTwoText="Purchase Now"
      // Enter text for action button two 
      // or pass empty string to hide.
      btnOneHandler={(args, event, objectData) => {
        // 'objectData' returns object data
        // any arguments passed will be before 'event' 
        // and 'objectData'
      }}
      btnTwoHandler={(args, event, row) => {
        // 'objectData' returns object data
        // any arguments passed will be before 'event' 
        // and 'objectData'
      }}
      skeleton={0}
    // Any non zero number will override default cards
    // and will show that many skeleton cards.
    />
  )
}

export default ProductData();