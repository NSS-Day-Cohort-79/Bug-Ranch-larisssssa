# Welcome to Bug Wrangler Ranch

This first self-assessment is for you to hone several Core Skills that you need as a software developer.

Taking your time now to be thorough, reflective, patient and curious will give you the foundation to be successful throughout the rest of this course and your career.

If you rush this, or think of it as a test to be "passed", then you will already be on the wrong path.

> 🧨 Make sure you answer the vocabulary and understanding questions at the end of this document before notifying your coaches that you are done with the project

## Description

Slim Jenkins offers a vacation package for people who have always wanted to join a cattle driving team across the American Midwest.

He calls it the **Kansas Slim's Cattle Adventure**.

People join a team of experienced drovers who will train them in the basics of herding cattle and driving them across hundreds of miles to their destination at Old Red's Ranch.

Unfortunately, someone gained access to the code that produces an outline of the adventure to the paying customers, so Slim has hired you to examine and fix the code.

## Learning Objectives

Here are your learning objectives for this self-assessment.

1. Able to use the debugger to step through existing code to discover root causes of bugs.
2. Drawing a sequence diagram for a project.
   > Use the [sequencediagram.org](https://sequencediagram.org/) site to generate your sequence diagram. Make sure you save your work as you go.
3. Demonstrate learning efficiency by researching concepts you haven't seen before using your peers, mentors, and the World Wide Web as resources.
4. Awareness of when you need help, and then seeking it out.

## Example Output

If you are able to fix all of the bugs, you will output similar to what is below. It will not be identical, but similar.

```sh
************************************************
**  K A N S A S   S L I M ' S   C A T T L E   **
************************************************

\|/         (__)
     '------(oo)
       ||   (__)               \|/
       ||w--||     \|/
   \|/
            \|/                     (__)
                             '------(oo)
                               ||   (__)
                               ||w--||     \|/

You will be accompanying 5 drovers as they drive 50 cattle to Old Red's Ranch for grazing

The herd is made of up the following types of cattle:
Ankole-Watusi,Brown Swiss,Brown Swiss,American Angus,Brown Swiss,
Ankina,American Angus,Ankina,Brown Swiss,Ankole-Watusi,Brown Swiss,
Brown Swiss,American Angus,Ankina,Ankole-Watusi,Brown Swiss,Brown Swiss,
Ankina,Brown Swiss,Ankina,Ankole-Watusi,Brown Swiss,Brown Swiss,
Ankole-Watusi,American Angus,Brown Swiss,American Angus,Ankole-Watusi,
Ankole-Watusi,American Angus,Ankina,Ankina,Ankina,Ankole-Watusi,
American Angus,Brown Swiss,American Angus,Brown Swiss,American Angus,
American Angus,Ankina,Brown Swiss,American Angus,Ankina,Brown Swiss,
American Angus,Ankole-Watusi,Ankina,American Angus,Brown Swiss

Here is the team of drovers you will be joining
        * Melvyn Hethron
        * Yancy Gresley
        * Willabella Attarge
        * Ynes Gyenes
        * Farlie Spere


Your journey will take you through the wildness of the American Midwest and across the following terrain
        * forest
        * plain
        * river
        * mountain
```

1. In the **main** module, one of the first lines of code is `const drovers = hireDrovers(cattleToDrive)`. Explain what the value of the `drovers` variable is when that line of code runs.
   > The `drovers` variable is an array of drover objects that is returned from the `hireDrovers()` function.
2. At the bottom of the main module, you will see the following code - `for (const drover of drovers)`. Explain what the values of both the `drover` and the `drovers` variables are.
   > In the for of loop, `for (const drover of drovers)`, the `drovers` variable is the array that is being iterated, and `drover` is the currently selected element from the array.
3. In the **journey** module, there is a `journeyMaker()` function. In that function, there is a variable named `areas` which will have the value of an object. Use your debugger to show what the value of each key is on that object. Use [Loom](https://www.loom.com) to record your session.
   > https://www.loom.com/share/5fba7dc24b8d4d0e9120fe5d5d9215ed
4. Also in the **journey** module, there is the following code:
   ```js
   for (let forestNumber = 0; forestNumber < areas.forests; forestNumber++) {
     journey.push("forest");
   }
   ```
   Explain this code with your best vocabulary.
   > In this for loop, the first expression, `let forestNumber = 0;` sets the variable where the loop will start, in this case, 0. The second expression, `forestNumber < areas.forests;`, sets the condition for the loop, in this case, if `forestNumber` is less than `area.forests`, continue the loop. THe third expression, `forestNumber++`, is what is executed after every successful loop is completed, in this case, the variable `forestNumber` will increase by 1.
   > The code block for this loop `journey.push("forest");` states that the string `"forest"` will be added to the `journey` array one time for each iteration until the for loop stops, once it's condition is no longer met.
5. Explain the value of the `database` variable in the **database** module. Be as comprehensive as possible.
   > The `database` variable in the **database** module is an object that has two properties, `cattleTypes` and `drovers`. The `cattleTypes` value is an array of cattle objects, with `id` and `breed` as properties. The `drovers` value is an array of drover objects, with `"id"`, `"first_name"`, `"last_name"`, and `"gender"` properties.
6. In the **drovers** module, there is a `hireDrovers()` function. You will notice the following code on that line - `(herdSize)`. What is that defining, and where does it get its value?
   > `(herdSize)` is the parameter for the function `hireDrovers()`. The value for `(herdSize)` is provided by the user in the `main.js`. The variable `cattleToDrive` variable is passed as the argument for the `hireDrovers()` function. This value is used to calculate how many drovers will be needed for the journey.

## When You Are Done

After you have answered all the questions above, you need to push all of your code back up to Github. Follow these instructions.

1. Be in the `bug-wrangler-ranch` directory.
2. `git add --all`
3. `git commit -m "Code complete"`
4. `git push origin main`

Then go to the Learning Platform and click the **Self-assessment Complete** button.
