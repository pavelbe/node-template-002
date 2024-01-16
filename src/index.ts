// src/index.ts

async function runInquirerDemo() {
    const inquirer = await import('inquirer')

    try {
        const answers = await inquirer.default.prompt([
            {
                type: 'list',
                name: 'choice',
                message: 'Выберите опцию:',
                choices: ['Опция 1', 'Опция 2', 'Опция 3'],
            },
        ])

        console.log(`Вы выбрали: ${answers.choice}`)
    } catch (error) {
        console.error('Произошла ошибка:', error)
    }
}

runInquirerDemo()
