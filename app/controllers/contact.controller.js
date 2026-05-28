export const create = (request, response) => {
    response.status(201).json({message: "create handler"});
}

export const findAll = (request, response) => {
    response.status(200).json({message: "findAll handler"});
}

export const findOne = (request, response) => {
    response.status(200).json({message: "findOne handler"});
}

export const findAllFavorite = (request, response) => {
    response.status(200).json({message: "findAllFavorite handler"});
}

export const update = (request, response) => {
    response.status(200).json({message: "update handler"}); 
}

export const deleteOne = (request, response) => {
    response.status(204).json({message: "deleteOne handler"});
}

export const deleteAll = (request, response) => {
    response.status(204).json({message: "deleteAll handler"});
}
