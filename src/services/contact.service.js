import Contact from "../models/contact.model.js"

export const create = (payload) => Contact.create(payload);

export const findAll = () => Contact.find();

export const deleteAll = () => Contact.deleteMany();

export const findAllFavorite = () => Contact.find({favorite: true});

export const findOne = (id) => Contact.findById(id);

export const update = (id, payload) => Contact.findByIdAndUpdate(id, payload);