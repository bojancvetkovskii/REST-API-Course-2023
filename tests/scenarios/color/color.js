import { getAllProjects } from '../../steps/project/project.js'
import { createColor, getColors, negativeCreateColor } from '../../steps/color/color.js'
import { generateTestData } from '../../utils/helpers.js'
import negativeScenariosData from '../../data/color/create_negative_project_color.json' assert { type: 'json' }


before(async () => {
    await generateTestData()
    // This sets valid project id in the global.executionVariables
    getAllProjects()
})

describe('Color', () => {
    describe('Color positive scnearios', () => {
        describe(`Create and get color`, () => {
            createColor()
            getColors()
        })
    })

    describe('Color negative scnearios', () => {
        for (const negativeScenarioData of negativeScenariosData) {
            negativeCreateColor(negativeScenarioData.requestBody, negativeScenarioData.name, negativeScenarioData.asserts, negativeScenarioData.statusCode)
        }
    })
})