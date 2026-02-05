const dummyUserPreferences = {
  1: {
    layoutWidth: "fullWidth",
    fontStyle: "default",
    theme: "light",
    fontSize: "medium",
  },
  2: {
    layoutWidth: "mediumWidth",
    fontStyle: "serif",
    theme: "dark",
    fontSize: "large",
  },
  3: {
    layoutWidth: "fullWidth",
    fontStyle: "open-dyslexic",
    theme: "light",
    fontSize: "small",
  },
  4: {
    layoutWidth: "mediumWidth",
    fontStyle: "default",
    theme: "dark",
    fontSize: "medium",
  },
  5: {
    layoutWidth: "fullWidth",
    fontStyle: "serif",
    theme: "light",
    fontSize: "large",
  },
  6: {
    layoutWidth: "mediumWidth",
    fontStyle: "open-dyslexic",
    theme: "dark",
    fontSize: "small",
  },
};

export const getUserPreferences = async (req, res, next) => {
  try {
    const { userId } = req.params;

    // Validasi parameter
    if (!userId || !/^\d+$/.test(userId)) {
      const error = new Error("Invalid userId parameter");
      error.status = 400;
      throw error;
    }

    const preference = dummyUserPreferences[userId];

    if (!preference) {
      const error = new Error(`Preferences for user ${userId} not found`);
      error.status = 404;
      throw error;
    }

    return res.status(200).json({
      status: "success",
      message: "User preferences retrieved successfully",
      data: {
        userId,
        preference,
      },
    });
  } catch (err) {
    next(err);
  }
};
