import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import ProductListing from "./components/ProductListing";
import ProductDetail from "./components/ProductDetail";
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>

      <Toaster richColors />
    </BrowserRouter>
  );
}

export default App;
