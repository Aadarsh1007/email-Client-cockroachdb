const Joi=require('joi')
const {folderUseCases}=require('../../use-cases')

const {
    getAllFolderUsecases,
    getFolderUseCases,
    createFolderUseCase,
    deleteFolderUseCase,
    isFolderDuplicateUseCase,
    updateFolderUseCase
} = folderUseCases

const getAllFolder=require('./get-all-folder')
const getAllFolderAction=getAllFolder({getAllFolderUsecases})

const getFolder=require('./get-folder')
const getFolderAction=getFolder({getFolderUseCases,Joi})

const createFolder=require('./create-folder')
const createFolderAction=createFolder({createFolderUseCase,isFolderDuplicateUseCase,Joi})

const deleteFolder=require('./delete-folder')
const deleteFolderAction=deleteFolder({deleteFolderUseCase,Joi})

const updateFolder=require('./update-folder')
const updateFolderAction=updateFolder({updateFolderUseCase,isFolderDuplicateUseCase,Joi})

const folderController=Object.freeze({
    getAllFolderAction,
    getFolderAction,
    createFolderAction,
    deleteFolderAction,
    updateFolderAction
})

module.exports=folderController