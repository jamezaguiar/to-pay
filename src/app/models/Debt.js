import Sequelize, { Model } from 'sequelize';

class Debt extends Model {
  static init(sequelize) {
    super.init(
      {
        value: Sequelize.DOUBLE,
        description: Sequelize.TEXT,
        date: Sequelize.DATE,
      },
      {
        sequelize,
      }
    );
  }
}

export default Debt;
