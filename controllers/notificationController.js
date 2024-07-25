const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const notificationService = require("../services/notificationService");
const ErrorHandler = require("../utils/errorHandler");

exports.get = catchAsyncErrors(async (req, res) => {
  const { page = 1, isRead = false } = req?.query || {};

  const pageSize = process.env.RECORDS_PER_PAGE || 15;

  const { id } = req.user || {};

  if (isRead === "false") {
    const total = await notificationService.countDocuments({
      $or: [
        {
          userId: id,
          isRead: isRead,
        },
        { adminCreated: true },
      ],
    });
    console.log(total);
    return res.json({
      success: true,
      total,
    });
  }

  const total = await notificationService.countDocuments({
    userId: id,
  });

  if (!total) {
    return next(new ErrorHandler("No notifications found"));
  }

  const data = await notificationService.paginate(id, { page, pageSize });

  return res.json({
    success: true,
    total,
    totalPages: Math.ceil(total / pageSize),
    data,
  });
});

exports.updateMany = catchAsyncErrors(async (req, res) => {
  const { id } = req.user;
  await notificationService.updateMany({ userId: id }, { isRead: true });
  return res.json({
    success: true,
  });
});
