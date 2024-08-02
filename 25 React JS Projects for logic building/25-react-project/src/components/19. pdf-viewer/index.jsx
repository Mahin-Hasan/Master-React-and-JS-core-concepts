import {
  Document,
  Page,
  PDFDownloadLink,
  PDFViewer,
  Text,
  View,
} from "@react-pdf/renderer";
import { useEffect, useState } from "react";
import './pdf.css'


const PdfViewComponent = ({ productDetails }) => {
  return (
    <Document>
      <Page>
        <View>
          <Text>Product Name: {productDetails?.title}</Text>
          <Text>Info: {productDetails?.description}</Text>
          <Text>Category: {productDetails?.category}</Text>
        </View>
      </Page>
    </Document>
  );
};

const PdfViewer = () => {
  const [products, setProducts] = useState([]);
  const [productDetails, setProductDetails] = useState(null);

  async function fetchListOfProducts() {
    const apiResponse = await fetch(
      "https://dummyjson.com/products?limit=9&skip=0"
    );
    const result = await apiResponse.json();

    if (result && result.products && result.products.length) {
      setProducts(result.products);
    }
  }

  useEffect(() => {
    fetchListOfProducts();
  }, []);

  async function handleFetchedProductDetails(getId) {
    const apiResponse = await fetch(`https://dummyjson.com/products/${getId}`);
    const result = await apiResponse.json();

    if (result) setProductDetails(result);
  }

  console.log(productDetails);

  return (
    <div className="pdf-viewer-container">
      <h2>PDF Viewer</h2>
      <ul>
        {products && products.length > 0
          ? products.map((productItem) => (
              <li
                onClick={() => handleFetchedProductDetails(productItem.id)}
                key={productItem.id}
              >
                {productItem.title}
              </li>
            ))
          : null}
      </ul>
      <div className="pdf-viewer-page">
        <PDFViewer style={{ width: "80%", height: "300px" }}>
          <PdfViewComponent productDetails={productDetails} />
        </PDFViewer>
      </div>
      <PDFDownloadLink
      fileName="Product-Details.pdf"
        document={<PdfViewComponent productDetails={productDetails} />}
      >
        <button className="pdf-download-btn">Download PDF</button>
      </PDFDownloadLink>
    </div>
  );
};

export default PdfViewer;
