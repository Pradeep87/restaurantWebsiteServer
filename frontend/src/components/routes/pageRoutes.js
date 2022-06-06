const pageRoutes = {
  home: "/",
  offers: "/offers",
  signIn: "/signin",
  cart: "/cart",
  search: "/search",
  help:"/help",
  adminPanel:"/dashboard"
};
export default pageRoutes;


export const dashboardRoutes = {
  merchant:{
    info: "information",
    storeSetting: "store",
    orderLimit: "orderlimit",
    banner: "banner",
    pages: "pages",
    menu:"Menu",
    
  },
orders:{
  newOrder:"neworder",
  processingOrder:"processingorder",
  ordersReady:"ordersready",
  ordersCompleted:"orderscompleted",
  sheduled:'sheduled',
  allOrders:"allorders"
},
food:{
  categories:"categories",
  subCategory:"subcategory",
  addOn:"addon",
  products:"products"
},
paymentGateway:{
  allPayments:"allpayments",
  setting:"setting",
  accountStatement:"accountStatement",
},
images:{
  gallery:"gallery",
  banners:"banners",
},
buyers:{
  Review:"review",
},
user:{
  allUsers:'allusers',
  allRolls:"allrolls"
}

};

