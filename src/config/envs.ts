import 'dotenv/config'
import * as joi from 'joi'

//Aqui le colocamos una interface a nuestras avriables de entorno apra evitar errores de escritura 
interface EnvVars {
    PORT: number
}

//Por medio de la validacion de Joi , verificaremos que las variables esten presentes y tengan el formato correctconst envVarsSchema = joi.objectconst envVarsSchema = joi.object
const envSchema = joi.object({
    PORT: joi.number().required(),
})
.unknown(true)// Con este unknow en true permitimos el acceso a otras variables que no tengamos  definidas en la schema, por si acaso

//En esta desestructuracion validamos mediante nuestro Schema  las variables que tenemos en todo nuestro procces.env no solo als que tenemos definidas
const {error, value} = envSchema.validate(process.env)


if(error) throw new Error(`Config validation error: ${error.message}`)

const envVars: EnvVars = value

export const envs = {
    port: envVars.PORT,
}