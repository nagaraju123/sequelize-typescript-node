/* jshint indent: 1 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {Hotbeds_HotelsInstance, Hotbeds_HotelsAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
	return sequelize.define<Hotbeds_HotelsInstance, Hotbeds_HotelsAttribute>('Hotbeds_Hotels', {
		Hotel_Sk: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		Hotelcode: {
			type: DataTypes.STRING,
			allowNull: false
		},
		DestinationCode: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		ZoneCode: {
			type: DataTypes.STRING,
			allowNull: true
		},
		CountryCode: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		Name: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Address: {
			type: DataTypes.STRING,
			allowNull: true
		},
		City: {
			type: DataTypes.STRING,
			allowNull: true
		},
		longitude: {
			type: DataTypes.STRING,
			allowNull: true
		},
		latitude: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Email: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Phone: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Imagepath: {
			type: DataTypes.STRING,
			allowNull: true
		},
		overview: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		Facilities: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Boardcodes: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Segmentcodes: {
			type: DataTypes.STRING,
			allowNull: true
		},
		CategoryCode: {
			type: DataTypes.STRING,
			allowNull: true
		},
		categoryGroupCode: {
			type: DataTypes.STRING,
			allowNull: true
		},
		ChainCode: {
			type: DataTypes.STRING,
			allowNull: true
		},
		AccomTypeCode: {
			type: DataTypes.STRING,
			allowNull: true
		},
		postalCode: {
			type: DataTypes.STRING,
			allowNull: true
		},
		license: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Faxnumber: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Website: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Createdate: {
			type: DataTypes.DATE,
			allowNull: true
		},
		imageurl: {
			type: DataTypes.STRING,
			allowNull: true
		},
		GiataId: {
			type: DataTypes.DOUBLE,
			allowNull: true
		},
		GiataCityId: {
			type: DataTypes.DOUBLE,
			allowNull: true
		},
		TripAdvisorId: {
			type: DataTypes.DOUBLE,
			allowNull: true
		},
		TAUserRating: {
			type: DataTypes.STRING,
			allowNull: true
		},
		TAReviewCount: {
			type: DataTypes.STRING,
			allowNull: true
		},
		GiataDestId: {
			type: DataTypes.DOUBLE,
			allowNull: true
		},
		Zonename: {
			type: DataTypes.STRING,
			allowNull: true
		},
		ModifiedOn: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		tableName: 'Hotbeds_Hotels',
		timestamps: false
	});
};
