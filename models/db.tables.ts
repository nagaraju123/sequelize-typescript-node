// tslint:disable
import * as path from 'path';
import * as sequelize from 'sequelize';
import * as def from './db';

export interface ITables {
	Hotbeds_Hotels:def.Hotbeds_HotelsModel;
}

export const getModels = function(seq:sequelize.Sequelize):ITables {
	const tables:ITables = {
		Hotbeds_Hotels: seq.import(path.join(__dirname, './Hotbeds_Hotels')),
	};
	return tables;
};
