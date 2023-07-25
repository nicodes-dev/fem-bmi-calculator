import iconEating from './assets/images/icon-eating.svg'
import iconExcercise from './assets/images/icon-exercise.svg'
import iconSleep from './assets/images/icon-sleep.svg'
import imgManEating from './assets/images/image-man-eating.webp'
import iconGender from './assets/images/icon-gender.svg'
import iconAge from './assets/images/icon-age.svg'
import iconMuscle from './assets/images/icon-muscle.svg'
import iconRace from './assets/images/icon-race.svg'
import iconPregnancy from './assets/images/icon-pregnancy.svg'

export const header = {
  heading: 'Body Mass Index Calculator',
  content:
    'Better understand your weight in relation to your height using our body mass index (BM) calculator. While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and well-being.',
}

export const result = {
  imgSrc: imgManEating,
  heading: 'What your BMI result means',
  content: `A BMI range of 18.5 to 24.9 is considered a 'healthy weight.' Maintaining a healthy weight may lower your chances of experiencing health issues later on, such as obesity and type 2 diabetes. Aim for a nutritious diet with reduced fat and sugar content, incorporating ample fruits and vegetables. Additionally, strive for regular physical activity, ideally about 30 minutes daily for five days a week.`,
}

export const tips = [
  {
    imgSrc: iconEating,
    heading: 'Healthy eating',
    content:
      'Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.',
  },
  {
    imgSrc: iconExcercise,
    heading: 'Regular exercise',
    content:
      'Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.',
  },
  {
    imgSrc: iconSleep,
    heading: 'Adequate sleep',
    content:
      'Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.',
  },
]

export const welcomeMessage = {
  heading: 'Welcome!',
  content: `Enter your height and weight and you’ll see your BMI result here`,
}

export const limitation = {
  heading: 'Limitations of BMI',
  content:
    'Although BMI is often a practical indicator of healthy weight, it is not suited for every person. Specific groups should carefully consider their BMI outcomes, and in certain cases, the measurement may not be beneficial to use.',
}

export const limitationList = [
  {
    imgSrc: iconGender,
    heading: 'Gender',
    content: `The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI.`,
  },
  {
    imgSrc: iconAge,
    heading: 'Age',
    content:
      'In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.',
  },
  {
    imgSrc: iconMuscle,
    heading: 'Muscle',
    content: `BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat.`,
  },
  {
    imgSrc: iconPregnancy,
    heading: 'Pregnancy',
    content:
      'Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child.',
  },
  {
    imgSrc: iconRace,
    heading: 'Race',
    content:
      'Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse.',
  },
]
