import { request } from '../../utils/requests.js'
import { getUpdateProjectRequestBody } from '../../utils/requestBodyGenerator/project.js'
import { generateUniqueName, generateInvalidProjectId } from '../../utils/helpers.js'

export async function getAllProjects() {
    it('Get all existing projects', async function () {

        await request(this, 'GET', '/projects', undefined, false,
            {
                statusCode: 200,
                executionVariables: [
                    { path: 'id', name: 'projectId' },
                ],
                expectedTypes: [
                    {
                        path: 'id', type: 'string'
                    },
                    {
                        path: 'name', type: 'string'
                    },
                    {
                        path: 'description', type: 'string'
                    },
                    {
                        path: 'platform', type: 'string'
                    },
                    {
                        path: 'created', type: 'number'
                    },
                    {
                        path: 'number_of_members', type: 'number'
                    },
                    {
                        path: 'number_of_screens', type: 'number'
                    }
                ],
                getLastElementAsResponse: true,
            }
        )
    })
}

export async function updateProject() {
    it('Update existing project', async function () {
        const requestBody = await getUpdateProjectRequestBody();

        await request(this, 'PATCH', `/projects/${global.executionVariables['projectId']}`, requestBody, false,
            {
                statusCode: 204,
            }
        )
    })
}

export async function getProject() {
    it('Get project', async function () {

        await request(this, 'GET', `/projects/${global.executionVariables['projectId']}`, undefined, false,
            {
                statusCode: 200,
                expectedValues: [
                    { path: 'id', value: global.executionVariables['projectId'] },
                    { path: 'name', value: global.executionVariables['projectName'] },
                    { path: 'description', value: global.executionVariables['projectDescription'] }
                ],
                expectedFields: ['id', 'name', 'description'],
                expectedTypes: [
                    {
                        path: 'id', type: 'string'
                    },
                    {
                        path: 'name', type: 'string'
                    },
                    {
                        path: 'description', type: 'string'
                    },
                    {
                        path: 'platform', type: 'string'
                    },
                    {
                        path: 'created', type: 'number'
                    },
                    {
                        path: 'number_of_members', type: 'number'
                    },
                    {
                        path: 'number_of_screens', type: 'number'
                    }
                ],
            }
        )
    })
}

export async function negativeUpdateProjectWithInvalidFormatProjectId() {
    it('Update project with invalid project id', async function () {
        const requestBody = await getUpdateProjectRequestBody();
        const invalidFormatProjectId = await generateUniqueName()

        await request(this, 'PATCH', `/projects/${invalidFormatProjectId}`, requestBody, false,
            {
                statusCode: 400,
                expectedValues: [
                    { path: 'message', value: `\"projectId" with value \"${invalidFormatProjectId}\" fails to match the required pattern: /^[0-9a-f]{24}$/i` },
                ],
            }
        )
    })
}

export async function negativeUpdateProjectWithUnexistingProjectId() {
    it("Update project with project id which doesn't exist", async function () {
        const requestBody = await getUpdateProjectRequestBody();
        const invalidProjectId = await generateInvalidProjectId()

        await request(this, 'PATCH', `/projects/${invalidProjectId}`, requestBody, false,
            {
                statusCode: 404,
                expectedValues: [
                    { path: 'message', value: "Project not found" },
                ],
            }
        )
    })
}