import { request } from '../../utils/requests.js'
import { getCreateProjectColorRequestBody } from '../../utils/requestBodyGenerator/color.js'

export async function createColor() {
    it('Create color', async function () {
        const requestBody = await getCreateProjectColorRequestBody()
        await request(this, 'POST', `/projects/${global.executionVariables['projectId']}/colors`, requestBody, true,
            {
                statusCode: 200,
                expectedFields: ['id'],
                executionVariables: [
                    {
                        path: 'id', name: 'colorId'
                    }
                ],
                expectedTypes: [
                    {
                        path: 'id', type: 'string'
                    },
                ]
            }
        )
    })
}

export async function getColors() {
    it('Get color', async function () {

        await request(this, 'GET', `/projects/${global.executionVariables['projectId']}/colors`, undefined, true,
            {
                statusCode: 200,
                findObjectWithId: global.executionVariables['colorId'],
                expectedValues: [
                    { path: 'r', value: global.executionVariables['color'].r },
                    { path: 'g', value: global.executionVariables['color'].g },
                    { path: 'b', value: global.executionVariables['color'].b },
                    { path: 'a', value: global.executionVariables['color'].a },
                    { path: 'name', value: global.executionVariables['color'].name }

                ],
                expectedFields: ['r', 'g', 'b', 'a', 'name'],
                expectedTypes: [
                    {
                        path: 'id', type: 'string'
                    },
                    {
                        path: 'created', type: 'number'
                    },
                    {
                        path: 'name', type: 'string'
                    },
                    {
                        path: 'r', type: 'number'
                    },
                    {
                        path: 'g', type: 'number'
                    },
                    {
                        path: 'b', type: 'number'
                    },
                    {
                        path: 'a', type: 'number'
                    },
                ]
            }
        )
    })
}

export async function negativeCreateColor(requestBody, testCaseName, asserts, statusCode) {
    it(`Create color ${testCaseName}`, async function () {
        await request(this, 'POST', `/projects/${global.executionVariables['projectId']}/colors`, requestBody, false, 
            {
                statusCode : statusCode,
                expectedValues: [
                    {path: asserts.path, value: asserts.value}
                ]
            }
        )
    })
}
