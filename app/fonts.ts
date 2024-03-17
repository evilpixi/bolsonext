import { Sarala, Patrick_Hand } from "next/font/google";

const sarala = Sarala({ subsets: ["latin"], weight: ['700', "400"] });
const patrickHand = Patrick_Hand({
  subsets: ["latin"],
  style: ['normal'],
  weight: ['400']
})

const fonts = {
  sarala: sarala,
  patrick: patrickHand
}
export default fonts