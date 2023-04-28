const Joi=require('joi')
const {getAllFolder}=require('../../data-access')

// const{
//     getAllFolderQuerydb,
//     getFolderQuerydb,
//     createFolderQuerydb,
//     deleteFolderQuerydb,
//     isFolderDuplicateQuerydb,
//     updateFolderQuerydb
// } = getAllFolder

const getAllFolderUse=require('./get-all-folder')
const getAllFolderUsecases=getAllFolderUse({getAllFolder,Joi})

const getFolderUse=require('./get-folder')
const getFolderUseCases=getFolderUse({getAllFolder,Joi})

const createFolderUse=require('./create-folder')
const createFolderUseCase=createFolderUse({getAllFolder,Joi})

const deleteFolderUse=require('./delete-folder')
const deleteFolderUseCase=deleteFolderUse({getAllFolder,Joi})

const isFolderDuplicateUse=require('./is-folder-duplicate')
const isFolderDuplicateUseCase=isFolderDuplicateUse({getAllFolder})

const updateFolderUse=require('./update-folder')
const updateFolderUseCase=updateFolderUse({getAllFolder,Joi})

const getFoldersOfSingleUserUse=require('./get-folder-of-single-user')
const getFoldersOfSingleUserUseCase= getFoldersOfSingleUserUse({getAllFolder})

const deleteFolderByNameUse=require('./delete-folder-by-name-user')
const deleteFolderByNameUseCase=deleteFolderByNameUse({getAllFolder})

const updateFolderSyncStateUse=require('./update-folder-syncState')
const updateFolderSyncStateUseCase=updateFolderSyncStateUse({getAllFolder})

const folderUseCases=Object.freeze({
    getAllFolderUsecases,
    getFolderUseCases,
    createFolderUseCase,
    deleteFolderUseCase,
    isFolderDuplicateUseCase,
    updateFolderUseCase,
    getFoldersOfSingleUserUseCase,
    deleteFolderByNameUseCase,
    updateFolderSyncStateUseCase
})

module.exports=folderUseCases