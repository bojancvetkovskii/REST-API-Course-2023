import { getAllProjects, updateProject, getProject, negativeUpdateProjectWithInvalidFormatProjectId, negativeUpdateProjectWithUnexistingProjectId} from '../../steps/project/project.js'
import { generateTestData } from '../../utils/helpers.js'

before(async () => {
    await generateTestData()
})

it('Project', () => {
    describe(`Get and update project`, () => {
        getAllProjects()
        updateProject()
        getProject()
    })
})

it('Project negative scnearios', () => {
    describe('Update project with invalid projectId', () => {
        negativeUpdateProjectWithInvalidFormatProjectId()
    })

    describe('Update project with id that doesnt exist', () => {
        negativeUpdateProjectWithUnexistingProjectId()
    })
})