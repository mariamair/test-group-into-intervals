/**
 * The main starting point of the application.
 *
 * @author Maria Mair <mm225mz@stundent.lnu.se>
 * @version 0.0.1
 */

import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import fs from 'node:fs/promises'

console.log('index.js')

const directoryFullName = dirname(fileURLToPath(import.meta.url))
const inputPath = join(directoryFullName, '..', 'reports', 'report.json')
const outputPath = join(directoryFullName, '..', 'reports', 'report.md')

console.log(inputPath)

readTestReport()

async function readTestReport () {
  const result = await fs.readFile(inputPath, 'utf8')

  if (!result) {
    const error = new Error('Could not read file')
    throw error
  }

  const data = await JSON.parse(result)
  return data
}

const report = await readTestReport()
const time = new Date(report.startTime).toString()
const tableColumns = '| Test | Status |\n |---|---|\n'

let markdownReport = '# Test results\n'
markdownReport += '**Time performed:** ' + time
for (const suite of report.testResults) {
  markdownReport += '\n\n## ' + suite.assertionResults[0].ancestorTitles + '\n\n'
  markdownReport += tableColumns
  for (const test of suite.assertionResults) {
    const status = test.status === 'passed' ? '✅' : '❌'
    markdownReport += '| ' + test.title + ' | ' + status + ' |\n'
  }
}

console.log(markdownReport)

async function writeTestReportToMarkdown () {
  try {
    const result = await fs.writeFile(outputPath, markdownReport)
  } catch (error) {
    error.text = new Error('Could not read file')
    throw error
  }
}

writeTestReportToMarkdown()
