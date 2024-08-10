import { DataTypes, Model } from "sequelize";

export default function blogModel(sequelize: any):Model {
    const attributes = {
        title: { type: DataTypes.STRING, allowNull: false },
        body: { type: DataTypes.STRING, allowNull: false },
    };

    const options = {
        defaultScope: {
            // exclude password hash by default
            attributes: { exclude: ['hash'] }
        },
        scopes: {
            // include hash with this scope
            withHash: { attributes: {}, }
        }
    };

    return sequelize.define('Blogs', attributes, options);
}