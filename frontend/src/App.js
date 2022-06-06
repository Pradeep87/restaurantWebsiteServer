import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import WebFont from "webfontloader";
import { Navbar, Footer } from "./components";
import pageRoutes, { dashboardRoutes } from "./components/routes/pageRoutes";
import {
  HomePage,
  OffersPage,
  SearchPage,
  CartPage,
  Dashboard,
  SignInPage,
} from "./pages";
import {
  Banner,
  Information,
  Menu,
  OrderLimit,
  Pages,
  StoreSettings,
  NewOrders,
  ProcessingOrders,
  OrdersReady,
  OrdersComplted,
  AllOrders,
  Categories,
  Products,
  Gallery,
  Buyers,
  AllUsers,
  AllRolls,
  Addon,
  SubCategory,
} from "./pagesComponent/dashboardComp";
import {
  EditOrderLimit,
  AddBanner,
  AddPage,
  AddFood,
  AddfoodCategory,
  AddonModal,
  FoodSubCategory,
} from "./Modals";

const App = () => {
  const {
    editOrderLimit,
    dashboardPage,
    addBanner,
    addPageModal,
    addonModal,
    categoriesModal,
    subCategoriesModal,
    addFoodModal,
  } = useSelector((state) => state.appReducer);
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  }, []);

  return (
    <BrowserRouter>
      {editOrderLimit ? <EditOrderLimit /> : null}
      {addBanner ? <AddBanner /> : null}
      {addPageModal ? <AddPage /> : null}
      {addonModal ? <AddonModal /> : null}
      {categoriesModal ? <AddfoodCategory /> : null}
      {subCategoriesModal ? <FoodSubCategory /> : null}
      {addFoodModal ? <AddFood /> : null}
      {dashboardPage ? null : <Navbar />}
      <Routes>
        <Route path={pageRoutes.home} element={<HomePage />} />
        <Route path={pageRoutes.offers} element={<OffersPage />} />
        <Route path={pageRoutes.signIn} element={<SignInPage />} />
        <Route path={pageRoutes.cart} element={<CartPage />} />
        <Route path={pageRoutes.search} element={<SearchPage />} />
        <Route path={pageRoutes.adminPanel} element={<Dashboard />}>
          <Route
            path={dashboardRoutes.merchant.info}
            element={<Information />}
          />
          <Route
            path={dashboardRoutes.merchant.storeSetting}
            element={<StoreSettings />}
          />
          <Route
            path={dashboardRoutes.merchant.orderLimit}
            element={<OrderLimit />}
          />
          <Route path={dashboardRoutes.merchant.banner} element={<Banner />} />
          <Route path={dashboardRoutes.merchant.pages} element={<Pages />} />
          <Route path={dashboardRoutes.merchant.menu} element={<Menu />} />
          <Route
            path={dashboardRoutes.orders.newOrder}
            element={<NewOrders />}
          />
          <Route
            path={dashboardRoutes.orders.processingOrder}
            element={<ProcessingOrders />}
          />
          <Route
            path={dashboardRoutes.orders.ordersReady}
            element={<OrdersReady />}
          />
          <Route
            path={dashboardRoutes.orders.ordersCompleted}
            element={<OrdersComplted />}
          />
          <Route
            path={dashboardRoutes.orders.allOrders}
            element={<AllOrders />}
          />
          <Route
            path={dashboardRoutes.food.categories}
            element={<Categories />}
          />
          <Route path={dashboardRoutes.food.addOn} element={<Addon />} />
          <Route
            path={dashboardRoutes.food.subCategory}
            element={<SubCategory />}
          />

          <Route path={dashboardRoutes.food.products} element={<Products />} />
          <Route path={dashboardRoutes.images.gallery} element={<Gallery />} />
          <Route path={dashboardRoutes.buyers.Review} element={<Buyers />} />

          <Route path={dashboardRoutes.user.allUsers} element={<AllUsers />} />
          <Route path={dashboardRoutes.user.allRolls} element={<AllRolls />} />
        </Route>
      </Routes>

      {dashboardPage ? null : <Footer />}
    </BrowserRouter>
  );
};

export default App;
