// const {Kafka} =require('kafkajs')
// const {userUseCases}=require('../use-cases')

// const {
//   createDefaultFolder
// }= userUseCases

// const kafka=new Kafka({
//     clientId: 'console-consumer',
//     brokers: ['localhost:9092']
// })

// const run=async ()=>{

// const consumer = kafka.consumer({ groupId: 'group2' })

// await consumer.connect()
// await consumer.subscribe({ topic: 'country', fromBeginning: true })

// await consumer.run({
//   eachMessage: async ({ topic, partition, message }) => {
//     const value1=message.value.toString()
//     const splittedValue1= value1.split(',')
//     const id=splittedValue1[0]
//     const databaseName=splittedValue1[1]
//     console.log({
//       value: message.value.toString(),
//     })
//     createDefaultFolder({id,databaseName})
//   },
// })
// }

// run().catch(console.error)