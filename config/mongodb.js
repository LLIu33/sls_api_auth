module.exports = {
  uri: process.env.MONGO_URL,
  dbName: 'production_v3',
  defaultParams: {
    ssl: true,
    authSource: 'admin',
    useNewUrlParser: true,
    readPreference: 'secondaryPreferred'
  },
  emptyUrlParams: {
    useNewUrlParser: true
  }
};
