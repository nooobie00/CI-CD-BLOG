const app = require("./bloglist-backend/app");
const logger = require("./bloglist-backend/utils/logger");
const config = require("./bloglist-backend/utils/config");

app.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`);
});
