import Sequelize from 'sequelize'

const Op = Sequelize.Op;

const Medical = new Sequelize('mysql://root:Xutingting20@localhost/medical', {
  define: {
    timestamps: false, // 取消Sequelzie自动给数据表加入时间戳（createdAt以及updatedAt）
    operatorsAliases: Op
  }
})

module.exports = {
    Medical
}