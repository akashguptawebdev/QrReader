import React, { useState, useEffect } from "react";
import { JSDOM } from "jsdom";
const Scraping = () => {
  const [nosePinWeight, setNosePinWeight] = useState(null);

  useEffect(() => {
    const fetchAndParse = async () => {
      try {
        const response = await fetch("https://nkmnosepinsllp.com/new-stock/qr-code?design=eyJkZXNpZ25faWQiOjc4ODcsImRlc2lnbl9hcnRpY2xlX251bWJlciI6Ik5LMjA1MjQxMDIiLCJkZXNpZ25fZ29sZF9jYXJhdCI6IjUyIiwiZGVzaWduX3dlaWdodCI6IjExNSJ9&DEGN=Die+Nose+Pin&ANO=NK20524102&KRT=52&WEIGHT=115");
        const html = await response.text();
        const dom = new JSDOM(html);
        const document = dom.window.document;

        const weightElement = document.querySelector(
          "div.productDescription > h5:nth-of-type(3)"
        );
        if (weightElement) {
          const textContent = weightElement.textContent;
          const weightMatch = textContent.match(/\d+/);
          const extractedWeight = weightMatch ? weightMatch[0] : null;
          setNosePinWeight(extractedWeight);
        } else {
          console.error("Element not found");
        }
      } catch (error) {
        console.error("Error fetching or parsing:", error);
      }
    };

    fetchAndParse();
  }, []);

  return <div>{nosePinWeight && <p>Nose Pin Weight: {nosePinWeight}</p>}</div>;
};

export default Scraping;
