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

    return this;
  }

  /*   static associate(models) {
    this.hasOne(models.Client, { foreignKey: 'client_id' });
  } */
}

export default Debt;
