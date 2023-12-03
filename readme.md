## Tech Stack

**Libraries:** chai, mocha, supertest, get-nested-value, mochawesome

**Requirements:** Node (min version 14)


## Installation

Install with npm

```bash
  npm install
```
    
## Running Tests

To run tests, run the following command

```bash
  npm run $testSetName $env
```
$testSetName - mandatory param, test set name. List of the supported test sets:
 - project
 - color

$env - environment. List of the supported environment:
- STG
- PROD 

#### Execution report can be find at /mochawesome-report/mochawesome.html

#### Warning
The api allows creation of max 30 colors per project, so when this number is excedeed one of the test will fail. 
Unfortunately after creationg of color, the color cannot be removed and we cannot do a clean up after executing the tests.