const globalErrorHandler = (err, _, res) => {
  const {
    status = 500,
    message = "Oops, it seems we`ve encountered an unexpected hiccup. Our team is already on the case to address this issue. Please bear with us while we work to restore things to normal",
  } = err;

  res.status(status).json({ message });
};

module.exports = globalErrorHandler;
