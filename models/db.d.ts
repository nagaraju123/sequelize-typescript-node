// tslint:disable
import * as Sequelize from 'sequelize';


// table: Hotbeds_Hotels
export interface Hotbeds_HotelsAttribute {
	Hotel_Sk:number;
	Hotelcode:string;
	DestinationCode?:string;
	ZoneCode?:string;
	CountryCode?:string;
	Name?:string;
	Address?:string;
	City?:string;
	longitude?:string;
	latitude?:string;
	Email?:string;
	Phone?:string;
	Imagepath?:string;
	overview?:string;
	Facilities?:string;
	Boardcodes?:string;
	Segmentcodes?:string;
	CategoryCode?:string;
	categoryGroupCode?:string;
	ChainCode?:string;
	AccomTypeCode?:string;
	postalCode?:string;
	license?:string;
	Faxnumber?:string;
	Website?:string;
	Createdate?:Date;
	imageurl?:string;
	GiataId?:number;
	GiataCityId?:number;
	TripAdvisorId?:number;
	TAUserRating?:string;
	TAReviewCount?:string;
	GiataDestId?:number;
	Zonename?:string;
	ModifiedOn?:Date;
}
export interface Hotbeds_HotelsInstance extends Sequelize.Instance<Hotbeds_HotelsAttribute>, Hotbeds_HotelsAttribute { }
export interface Hotbeds_HotelsModel extends Sequelize.Model<Hotbeds_HotelsInstance, Hotbeds_HotelsAttribute> { }
