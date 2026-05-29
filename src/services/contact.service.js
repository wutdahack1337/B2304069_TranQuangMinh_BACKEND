import Contact from "../models/contact.model.js"

export const create = (payload) => Contact.create(payload);

export const findAll = (filter = {}) => Contact.find(filter);

export const deleteAll = () => Contact.deleteMany();