import { dashboardRoutes } from "../components/routes/pageRoutes";

const LinksData =[
    {
    mainLink: "Merchant",
    icon:<i className="fa-regular fa-user"></i>,
    subLink: [
      {
        path: dashboardRoutes.merchant.info,
        name: "Information Settings",
      },
      {
        path: dashboardRoutes.merchant.storeSetting,
        name: "Settings",
      },
      {
        path: dashboardRoutes.merchant.orderLimit,
        name: "Order Limit",
      },
      {
        path: dashboardRoutes.merchant.banner,
        name: "Banner",
      },
      {
        path: dashboardRoutes.merchant.pages,
        name: "Pages",
      },
      {
        path: dashboardRoutes.merchant.menu,
        name: "Menu",
      },
      
    ],
  }, 
   {
    mainLink: "Orders",
    icon:<i class="fa-solid fa-house-flood-water-circle-arrow-right"></i>,
    subLink: [
      {
        path: dashboardRoutes.orders.newOrder,
        name: "New Orders",
      },
      {
        path: dashboardRoutes.orders.processingOrder,
        name: "Processing Orders",
      },
      {
        path: dashboardRoutes.orders.ordersReady,
        name: "Orders Ready",
      },
      {
        path: dashboardRoutes.orders.ordersCompleted,
        name: "Orders Compeleted",
      },
      // {
      //   path: dashboardRoutes.orders.sheduled,
      //   name: "Sheduled",
      // },
      {
        path: dashboardRoutes.orders.allOrders,
        name: "All Orders",
      },
      
    ],
  },

  {
    mainLink: "Food",
    icon:<i class="fa-solid fa-bowl-food"></i>,
    subLink: [
      {
        path: dashboardRoutes.food.categories,
        name: "Categories",
      },  {
        path: dashboardRoutes.food.subCategory,
        name: "Subcategory",
      },
      {
        path: dashboardRoutes.food.products,
        name: "Products",
      },
      {
        path: dashboardRoutes.food.addOn,
        name: "Addon",
      },
    
      
    ],
  },

  {
    mainLink: "Payment Gateway",
    icon:<i class="fa-solid fa-file-invoice-dollar"></i>,
    subLink: [
      {
        path: dashboardRoutes.paymentGateway.allPayments,
        name: "All Payments",
      },
      {
        path: dashboardRoutes.paymentGateway.setting,
        name: "settings",

      },
        {
        path: dashboardRoutes.paymentGateway.accountStatement,
        name: "accountstatement",
        
      },
    ],
  },
  {
    mainLink: "Images",
    icon:<i class="fa-solid fa-image"></i>,
    subLink: [
      {
        path: dashboardRoutes.images.gallery,
        name: "Gallery",
      },
    ],
  },
  {
    mainLink: "Buyers",
    icon:<i class="fa-solid fa-basket-shopping"></i>,
    subLink: [
      {
        path: dashboardRoutes.buyers.Review,
        name: "Reviews",
      },
    
    ],
  },

  {
    mainLink: "Users",
    icon:<i class="fa-solid fa-users"></i>,
    subLink: [
      {
        path: dashboardRoutes.user.allUsers,
        name: "All Users",
      },
      {
        path: dashboardRoutes.user.allRolls,
        name: "All Rolls",
      },
    
    ],
  },


];

  export default LinksData