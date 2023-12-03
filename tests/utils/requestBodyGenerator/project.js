import updateProjectRequestBody from '../../data/project/update_project.json' assert { type: 'json' }
import { generateDescription, generateUniqueName } from '../helpers.js'

export async function getUpdateProjectRequestBody() {

    const name = await generateUniqueName()
    const description = await generateDescription()

    global.executionVariables['projectName'] = name
    global.executionVariables['projectDescription'] = description

    updateProjectRequestBody.name = name
    updateProjectRequestBody.description = description

    return updateProjectRequestBody
}
