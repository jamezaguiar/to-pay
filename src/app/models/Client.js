import Sequelize, { Model } from 'sequelize';

class Client extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  /*   static associate(models) {
    this.hasOne(models.Creditor, { foreignKey: 'creditor_id' });
  } */
}

export default Client;
