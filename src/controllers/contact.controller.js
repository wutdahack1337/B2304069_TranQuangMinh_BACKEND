export const create = (request, response) => {
    response.status(201).json({message: "create handler"});
}

export const findOne = async (request, response) => {
    response.status(200).json({message: "findOne handler"});
}

export const findAll = async (request, response) => {
    response.status(200).json({message: "findAll handler"});
}

export const findAllFavorite = async (request, response) => {
    response.status(200).json({message: "findAllFavorite handler"});
}

export const update = async (request, response) => {
    response.status(200).json({message: "update handler"}); 
}

export const deleteOne = async (request, response) => {
    response.status(200).json({message: "deleteOne handler"});
}

export const deleteAll = async (request, response) => {
    response.status(200).json({message: "deleteAll handler"});
}
