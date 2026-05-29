import Contact from "../models/contact.model.js"

export const create = (payload) => Contact.create(payload);

export const findAll = () => Contact.find();

export const deleteAll = () => Contact.deleteMany();

export const findAllFavorite = () => Contact.find({favorite: true});