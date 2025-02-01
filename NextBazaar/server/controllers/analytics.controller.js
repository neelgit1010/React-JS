import userModel from "../models/user.model.js";
import productModel from "../models/product.model.js";
import orderModel from "../models/order.model.js";

const handleUserAnalytics = async (req, res) => {
  try {
    const analyticsData = await getAnalyticsData();

    // user analytics for graph data
    const endDate = new Date();
    const startDate = new Date(endDate.getTime() - 7 * 24 * 60 * 60 * 1000);
    const dailyAnalytics = await getDailySalesData(startDate, endDate);

    res.status(200).json(analyticsData, dailyAnalytics);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

const getAnalyticsData = async () => {
  const totalUsers = await userModel.countDocuments({});
  const totalProducts = await productModel.countDocuments({});

  const salesData = await orderModel.aggregate([
    {
      $group: {
        _id: null, // under the same group it groups all the docs together
        totalSales: { $sum: 1 }, // $sum means add all the values together
        totalRevenue: { $sum: "$totalAmount" },
      },
    },
  ]);

  const { totalSales, totalRevenue } = salesData[0] || {
    totalSales: 0,
    totalRevenue: 0,
  };

  return {
    users: totalUsers,
    products: totalProducts,
    totalSales,
    totalRevenue,
  };
};

const getDailySalesData = async (startDate, endDate) => {
  try {
    const dailySales = await orderModel.aggregate([
      {
        $match: {
          createdAt: { $gte: startDate, $lte: endDate },
        },
      },
      {
        $group: {
          _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
          totalSales: { $sum: 1 },
          totalRevenue: { $sum: "$totalAmount" },
        },
      },
      {
        $sort: {
          _id: 1,
        },
      },
    ]);
    //   return dailySales;

    const dateArray = getDatesInRange(startDate, endDate);

    return dateArray.map((date) => {
      const dailySale = dailySales.find((sale) => sale._id === date);
      return {
        date,
        totalSales: dailySale ? dailySale.totalSales : 0,
        totalRevenue: dailySale ? dailySale.totalRevenue : 0,
      };
    });
  } catch (error) {
    throw error;
  }
};

const getDatesInRange = (startDate, endDate) => {
  const dateArray = [];
  let currentDate = startDate;
  while (currentDate <= endDate) {
    dateArray.push(currentDate.toISOString().split("T")[0]);
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return dateArray;
};

export { handleUserAnalytics };

// example of daily sales data
// [
//   {
//     _id: "2023-08-01",
//     totalSales: 5,
//     totalRevenue: 50.99
//   },
//   {
//     _id: "2023-08-02",
//     totalSales: 3,
//     totalRevenue: 30.99
//   },...
// ]
