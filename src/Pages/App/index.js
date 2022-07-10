import { BrowserRouter, Route, Routes} from "react-router-dom";
import MainContainer from "../../Component/MainContainer";
import {Home} from "../Home";
import Login from "../Login";
import ProductList from "../ProductList";
import UserProducts from "../UserProducts"
import {NewProduct} from "../NewProduct"
import {EditUser} from "../EditUser"
import {About} from "../About"
import {Cart} from "../Cart"
import {NewUser} from "../NewUser"
import {ForgotPassword} from "../ForgotPassword"
import {NewPassword} from "../NewPassword"


function App() {

  

  return (
    <MainContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login />} />
          <Route path="productList" element={<ProductList />} />
          <Route path="userProducts" element={<UserProducts />} />
          <Route path="NewProduct" element={<NewProduct />} />
          <Route path="NewUser" element={<NewUser />} />
          <Route path="NewPassword" element={<NewPassword />} />
          <Route path="EditUser" element={<EditUser />} />
          <Route path="About" element={<About />} />
          <Route path="Cart" element={<Cart />} />
          <Route path="ForgotPassword" element={<ForgotPassword />} />
        </Routes>
      </BrowserRouter>
    </MainContainer>
  );
}

export default App;
