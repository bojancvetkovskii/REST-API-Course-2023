import createProjectColorRequestBody from '../../data/color/create_project_color.json' assert { type: 'json' }
import { generateAlphaColorCode, generatePrimaryColorCode, generateUniqueName } from '../helpers.js'

export async function getCreateProjectColorRequestBody() {

    const name = await generateUniqueName()
    const r = await generatePrimaryColorCode()
    const g = await generatePrimaryColorCode()
    const b = await generatePrimaryColorCode()
    const a = await generateAlphaColorCode()

    createProjectColorRequestBody.name = name
    createProjectColorRequestBody.r = r
    createProjectColorRequestBody.g = g
    createProjectColorRequestBody.b = b
    createProjectColorRequestBody.a = a

    global.executionVariables['color'] = createProjectColorRequestBody

    return createProjectColorRequestBody
}