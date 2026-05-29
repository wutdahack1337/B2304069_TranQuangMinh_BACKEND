import * as contactService from "../services/contact.service.js"

export const create = async (request, response) => {
    const payload = request.body
    const responseContent = await contactService.create(payload)
    response.status(201).json({data: responseContent});
}

export const findAll = async (request, response) => {
    const contacts = await contactService.findAll();
    response.status(200).json({data: contacts});
}

export const deleteAll = async (request, response) => {
    await contactService.deleteAll();
    response.status(204).send();
}

export const findOne = async (request, response) => {
    response.status(200).json({message: "findOne handler"});
}

export const findAllFavorite = async (request, response) => {
    response.status(200).json({message: "findAllFavorite handler"});
}

export const update = async (request, response) => {
    response.status(200).json({message: "update handler"}); 
}

export const deleteOne = async (request, response) => {
    response.status(204).send();
}

