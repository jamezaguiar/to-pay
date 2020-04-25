import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

import Creditor from '../app/models/Creditor';
import Client from '../app/models/Client';
import Debt from '../app/models/Debt';

const models = [Creditor, Client, Debt];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map((model) => model.init(this.connection));
  }
}
export default new Database();
