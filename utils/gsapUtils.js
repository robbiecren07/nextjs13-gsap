import { gsap } from 'gsap-trial'
import { CustomEase } from 'gsap-trial/dist/CustomEase'

gsap.registerPlugin(CustomEase)

const cubic = CustomEase.create('cubic', 'M0,0 C0.084,0.514 0.208,0.69 0.3,0.8 0.422,0.92 0.496,1 1,1')

export { cubic }