const {Kafka} =require('kafkajs')
const {googleOAuthUseCase}=require('../use-cases')

const {
  updateAccessTokenUseCase,
  updateUserTokenDetailsUseCase
}= googleOAuthUseCase

const kafka=new Kafka({
  clientId: 'console-consumer',
  brokers: ['localhost:9092']
})

const run=async ()=>{

  const consumer = kafka.consumer({ groupId: 'group3' })

  await consumer.connect()
  await consumer.subscribe({ topic: 'refreshToken', fromBeginning: false })

  await consumer.run({
  eachMessage: async ({ topic, partition, message }) => {
    const value1=message.value.toString()
    const splittedValue1= value1.split(',')
    const id=splittedValue1[0]
    const refresh_token=splittedValue1[1]
    console.log({
      value: message.value.toString(),
    })
    // console.log(id,refresh_token,'token updatedddddddddddddddddddddddddddddddddddddd');
    const updatedAccessToken = await updateAccessTokenUseCase({ refresh_token, id })
    const date = new Date();
    const isoDateString = date.toISOString();
    const updatedUserDetails = await updateUserTokenDetailsUseCase({ access_token: updatedAccessToken.access_token, token_update_at: isoDateString, id:id })
},
})
}

run().catch(console.error)