const app = require('./backend/app')
const logger = require('./backend/utils/logger')
const config = require('./backend/utils/config')

app.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`)
})
