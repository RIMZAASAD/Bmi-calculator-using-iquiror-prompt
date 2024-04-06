//bmi calculator using inqiuiror promt//
import inquirer from "inquirer";
const questions = [
    { type: 'number', name: 'weight', messege: 'weight(kg):' },
    { type: 'number', name: 'height', messege: 'height(m):' },
];
const calculateBMI = (weight, height) => weight / (height * height);
const main = async () => {
    const { weight, height } = await inquirer.prompt(questions);
    console.log(`BMI: ${calculateBMI(weight, height).toFixed(2)}`);
};
main();
