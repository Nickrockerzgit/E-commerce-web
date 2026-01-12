



import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import PromoBanner from './components/PromoBanner';
import FlashSale from './components/FlashSale';
// import Categories from './components/Categories';
import JustForYou from './components/JustForYou';
import Footer from './components/Footer';
import InternationalBar from './components/InternationalBar';
import DarazContentSection from './components/DarazContentSection';

import ProductDetail from './components/ProductDetail';
import AddressForm from './components/AddressForm';
import PaymentGateway from './components/PaymentGateway';
import ScrollTop from "./components/ScrollTop";





/* ---------------- HOME PAGE ---------------- */
function HomePage() {
  return (
    <>
      <Header />
      <HeroBanner />
      <PromoBanner />
      <FlashSale />
      {/* <Categories /> */}
      <JustForYou />
      <DarazContentSection />
      <Footer />
      <InternationalBar />
    </>
  );
}

/* -------- COMMON LAYOUT (NON-HOME) -------- */
function CommonPage({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <InternationalBar />
    </>
  );
}

/* ---------------- APP ---------------- */
export default function App() {
  return (
    <>

      <ScrollTop />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/product-detail"
          element={
            <CommonPage>
              <ProductDetail />
            </CommonPage>
          }
        />

        <Route
          path="/address"
          element={
            <CommonPage>
              <AddressForm />
            </CommonPage>
          }
        />

        <Route
          path="/payment"
          element={
            <CommonPage>
              <PaymentGateway />
            </CommonPage>
          }
        />
      </Routes>
    </>
  );
}
