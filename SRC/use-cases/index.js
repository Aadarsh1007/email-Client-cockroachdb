const userUseCases=require('./user')
const folderUseCases=require('./folder')
const googleOAuthUseCase= require('./google-o-auth')

const allUseCases=Object.freeze({
  userUseCases,
  folderUseCases,
  googleOAuthUseCase
})

module.exports=allUseCases